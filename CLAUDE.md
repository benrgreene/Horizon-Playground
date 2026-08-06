# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A copy of Shopify's **Horizon** theme (v4.1.3, see [config/settings_schema.json](config/settings_schema.json)) used as an experimentation playground. It is a plain Shopify theme: **no package.json, no bundler, no build step, and no test suite in the repo.** Files under [assets/](assets/) are served as-is by Shopify's CDN. Never introduce a build pipeline unless explicitly asked.

## Commands

Development uses the Shopify CLI (v4.6.0 installed globally). No store is pinned by a config file, so commands need `--store` on first use.

```bash
shopify theme dev --store <store>.myshopify.com   # local preview w/ hot reload
shopify theme check                                # Theme Check linter (the only linter here)
shopify theme check -c .theme-check.yml            # if a config is ever added
shopify theme push --unpublished                   # upload as a new unpublished theme
shopify theme pull --theme <id>                    # pull settings/templates changed in the admin
```

There are no unit/integration tests in this repo. Comments in [assets/component.js](assets/component.js) reference Playwright tests — those live in Shopify's upstream Horizon repo, not here. Verify changes via `shopify theme dev` and the theme editor.

## Architecture

### Rendering model: sections → blocks → snippets

Templates in [templates/](templates/) are JSON, so page composition happens in the theme editor rather than in code. Three layers:

- **Sections** ([sections/](sections/)) — top-level page regions. Most delegate almost everything: they `{% capture children %}{% content_for 'blocks' %}{% endcapture %}` and hand it to a shared wrapper snippet. [sections/section.liquid](sections/section.liquid) + [snippets/section.liquid](snippets/section.liquid) is the canonical generic container; [sections/header-group.json](sections/header-group.json) and [sections/footer-group.json](sections/footer-group.json) are section groups referenced from [layout/theme.liquid](layout/theme.liquid).
- **Blocks** ([blocks/](blocks/)) — nestable units. `blocks: [{"type": "@theme"}, {"type": "@app"}]` in a schema means "accept any theme/app block", which is how arbitrary nesting works. [blocks/group.liquid](blocks/group.liquid) is the recursive layout primitive.
- **Snippets** ([snippets/](snippets/)) — the actual markup and CSS. This is where most real code lives (~140 files vs ~40 sections).

**Underscore prefix = private block.** `blocks/_*.liquid` (e.g. [blocks/_product-card.liquid](blocks/_product-card.liquid)) are excluded from `@theme` and can only be added by a parent that names their type explicitly. Renaming a block to/from an underscore changes whether merchants can insert it directly.

### CSS: one global sheet plus per-file `{% stylesheet %}`

Only three real stylesheets exist ([assets/base.css](assets/base.css) ≈2.2k lines, `overflow-list.css`, `template-giftcard.css`), loaded via [snippets/stylesheets.liquid](snippets/stylesheets.liquid). Everything else is a `{% stylesheet %}` block inside the section/block/snippet that needs it (~149 files) — Shopify bundles those automatically. **Add component CSS to the `{% stylesheet %}` block in the owning Liquid file, not to base.css.**

Per-instance styling goes through CSS custom properties emitted by dedicated `*-style` / `*-styles` snippets — [snippets/spacing-style.liquid](snippets/spacing-style.liquid), [snippets/typography-style.liquid](snippets/typography-style.liquid), [snippets/layout-panel-style.liquid](snippets/layout-panel-style.liquid), [snippets/border-override.liquid](snippets/border-override.liquid), etc. — rendered into inline `style=""` attributes. Reuse these snippets rather than hand-writing inline styles.

Color is a palette system, not per-section colors: [snippets/color-palette.liquid](snippets/color-palette.liquid) computes the palette's lightest/darkest members for automatic contrast, and [snippets/contrast-override.liquid](snippets/contrast-override.liquid) emits `.color-custom-{{ section_id }}` scopes. [snippets/theme-styles-variables.liquid](snippets/theme-styles-variables.liquid) handles the four font families (`type_body_font`, `type_subheading_font`, `type_heading_font`, `type_accent_font`) with dedupe-by-face-id logic.

### JavaScript: web components + declarative bindings

No framework. Plain ES modules resolved through an **import map** in [snippets/scripts.liquid](snippets/scripts.liquid) — imports use `@theme/*` specifiers (`@theme/component`, `@theme/utilities`, `@theme/morph`, …). **Adding a new shared module means adding an entry to that import map**, otherwise the bare specifier won't resolve.

Everything extends `Component` from [assets/component.js](assets/component.js), which provides:

- **`ref` attributes** — `<div ref="listbox">` becomes `this.refs.listbox`; `ref="items[]"` collects into an array. Kept in sync by a MutationObserver. Declare `requiredRefs` to fail loudly on missing ones.
- **Declarative event binding** — `on:click="/methodName"` calls that method on the closest ancestor component. `on:click="selector/method"` targets a `closest(selector)` match or `#id`; `on:click="/method?foo=1&bar=true"` parses the query string into a first argument. Delegation is set up once globally with capture listeners. Custom element tags must end in `-component` (or be a registered `Component`) for resolution to work — see the `customElements.upgrade` race handling.
- **`updatedCallback()`** — fires after a Section Rendering API re-render morphs this subtree. Use it instead of re-running `connectedCallback` logic.
- Declarative shadow DOM is re-hydrated manually for components mounted after first paint.

Cross-component communication uses typed `Event` subclasses in [assets/events.js](assets/events.js) (`ThemeEvents.*` name constants, e.g. `QuantitySelectorUpdateEvent`, `SlideshowSelectEvent`) dispatched on `document` or bubbled. Add new events there rather than using ad-hoc string names.

### Partial updates: Section Rendering API + morph

Dynamic updates (cart, facets, variant changes, pagination) re-fetch server-rendered HTML and morph it in rather than building DOM in JS:

- [assets/section-renderer.js](assets/section-renderer.js) — singleton `sectionRenderer` with per-section caching, abortable in-flight renders, and optional stylesheet injection. Cache is disabled in `Shopify.designMode`.
- [assets/morph.js](assets/morph.js) — the DOM diff. `MORPH_OPTIONS.reject` drops whitespace text nodes, already-initialized shadow templates, and the Section API's marker comment. `PRESERVED_ATTRIBUTES` lists client-owned attributes (e.g. `product-grid-view`, `cart-summary-sticky`) that must survive a re-render — extend it when adding new JS-controlled state attributes.
- [assets/section-hydration.js](assets/section-hydration.js) — `mode: 'hydration'` only morphs subtrees carrying `data-hydration-key`, used for deferred/idle-time upgrades of server HTML.

### Translations

**All merchant-facing strings in `{% schema %}` must be `t:` keys**, resolved from [locales/en.default.schema.json](locales/en.default.schema.json) (schema/editor strings) with storefront strings in [locales/en.default.json](locales/en.default.json). Both files are auto-generated and may be overwritten by Shopify's language editor — the non-`en` locale files are machine translations and should generally not be hand-edited. Runtime JS strings are passed through the `Theme.translations` object at the bottom of [snippets/scripts.liquid](snippets/scripts.liquid).

## Conventions

- Snippets and blocks document their inputs with a `{%- doc -%}` block listing `@param` entries. Match that when adding new ones.
- Schema settings use `visible_if: "{{ block.settings.x == 'y' }}"` for conditional visibility rather than hiding via CSS.
- `data-testid` attributes exist for upstream Playwright coverage — don't remove them.
- Header height and menu style are computed by an **inline script** in [layout/theme.liquid](layout/theme.liquid) to avoid layout shift, duplicating `calculateHeaderGroupHeight()`, `updateTransparentHeaderOffset()`, and `setHeaderMenuStyle()` in `assets/utilities.js`. **Changes to either copy must be mirrored in the other.**
- View transitions are opt-in via the `page_transition_enabled` / `transition_to_main_product` theme settings, which gate the `@view-transition` CSS, the `rel="expect"` render blocker, and `view-transitions.js` together.
- Notable changes should be summarized in [release-notes.md](release-notes.md), which follows a "Fixes and improvements" bullet list grouped by `[Area]` prefix.
