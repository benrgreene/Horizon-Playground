# Product template

Covers the custom fields available on products in this store, and how the product page is assembled from sections and blocks.

## Metafield definitions

These are the product metafield definitions that exist in the store. Merchants fill them in on each product's admin page, under **Metafields**.

| Identifier | Name | Type | Purpose |
|---|---|---|---|
| `test_data.binding_mount` | Snowboard binding mount | `single_line_text_field` | The type of binding mount used on the snowboard. |
| `test_data.snowboard_length` | Snowboard length | `dimension` | The length of the snowboard. Stored as a value plus a unit, not free text. |
| `custom.faqs` | FAQs | `list.metaobject_reference` | An ordered list of [FAQ metaobject](../metaobjects/faq.md) entries attached to the product. No description is set on the definition. **Rendered by the `Product FAQs` section** — see below. |

> ⚠️ **The two `test_data` definitions are not referenced anywhere in the theme.** Values entered against them are stored on the product and are available to the Liquid and the APIs, but no template, section, or block renders them, so they do not appear on the storefront. The `test_data` namespace and the snowboard subject matter suggest these were created for experimentation.

`custom.faqs` is the exception: `sections/product-faqs.liquid` reads it. That section is **not** part of `templates/product.json`, so it renders only once a merchant adds it to a product template in the theme editor.

## Metafields the theme reads

Separately, the theme contains blocks that read product metafields which have **no definition in this store**. They render nothing until the corresponding data exists.

| Identifier | Read by | Notes |
|---|---|---|
| `reviews.rating` | [`review` block](../blocks.md#review) | Expects a `rating` type value, from which the block uses `.value.rating` and `.value.scale_max`. The `reviews` namespace is the convention used by product-review apps — it is normally created by the app, not by hand. |
| `reviews.rating_count` | [`review` block](../blocks.md#review) | The number of reviews shown beside the stars. |
| `shopify.disclosure` | [`disclosures` block](../blocks.md#disclosures) | A Shopify **standard** metafield in the reserved `shopify` namespace. It is populated by Shopify itself for regulated product categories, not created manually. The block filters entries to those whose `display_preferences` include `product_page`. |

Because no product-review app is installed and no `reviews` definitions exist, the `review` block currently has nothing to display outside the theme editor's visual preview (where it falls back to a sample rating of 4).

## Template composition

**File:** `templates/product.json` — two sections in order.

### 1. `product-information` — Product information

The main product area. Its media gallery and details column are **static** blocks: they are fixed parts of the layout rather than things a merchant can remove in the editor.

| | Block | Notes |
|---|---|---|
| ▸ | `_product-media-gallery` _(static)_ | Product images and video. Configured as a two-column grid that adapts to image aspect ratio, with thumbnails on the right and zoom enabled. |
| ▸ | `_product-details` _(static)_ | The right-hand details column; sticky on desktop. Contains the blocks below. |
| | ⤷ `group` → `text`, `price` | Title and price. The title is a `text` block bound to `{{ closest.product.title }}` rather than a dedicated title block. |
| | ⤷ `_divider` | Horizontal rule. |
| | ⤷ `variant-picker` | Variant selection, rendered as buttons with swatches off. |
| | ⤷ `buy-buttons` → `quantity`, `add-to-cart`, `accelerated-checkout` _(all static)_ | Quantity, add to cart, and the accelerated checkout buttons. Pickup availability is off; the gift-card form is on. |
| | ⤷ `text` | Product description, bound to `{{ closest.product.description }}`. |
| ▸ | `disclosures` | Renders `shopify.disclosure` entries — see above. |

Section settings in use: centre-aligned content, media on the left, 48px gap between media and details.

### 2. `product-recommendations` — Recommended products

Related-product grid below the main product, headed "You may also like".

| Block | Notes |
|---|---|
| `text` | The "You may also like" heading. |
| `_product-card` _(static)_ | The repeated card. Contains `_product-card-gallery`, `product-title`, and `price`. |

Settings: `recommendation_type` is `related` (Shopify's own recommendation engine), showing up to 4 products in a 4-column grid, 2 columns on mobile.

## Sections available but not in the template

### `Product FAQs` — `sections/product-faqs.liquid`

Restricted to product templates via `enabled_on: { templates: ["product"] }`, so it appears in the editor's add-section picker (under **Product**) only on a product template. It reads `product.metafields.custom.faqs` and renders one `<details>`/`<summary>` accordion row per [FAQ entry](../metaobjects/faq.md) — question as the summary, answer as the content.

Behaviour worth knowing:

- Entries with a blank `question` are skipped, since the summary is the only label for the control.
- If the product has no FAQ entries — or none with a question — the section outputs nothing at all.
- The answer is a plain-text field, so it is rendered with `escape | newline_to_br`: line breaks survive, markup does not.

The section accepts **no blocks** — its content comes entirely from the metafield, so the editor shows settings only.

**Heading**

| Setting | Type | Default | What it controls |
|---|---|---|---|
| `heading` | `text` (text) | `Frequently asked questions` | The heading above the accordion. Clearing it removes the heading; the rows still render. |
| `heading_preset` | `select` (choice) | `h4` | Type preset for the heading — options: default (empty), `paragraph`, `h1`–`h6`. This is applied as a **class**, so the heading stays an `<h2>` element whatever you pick: it changes how the heading looks, not the document outline. Presets themselves are edited in theme settings → typography. |

**Appearance**

| Setting | Type | Default | What it controls |
|---|---|---|---|
| `question_preset` | `select` (choice) | `h5` | Type preset applied to each question (the `<summary>`) — same options as `heading_preset`. Labelled **Title preset** in the editor. |
| `icon` | `select` (choice) | `caret` | Which open/close indicator shows — `caret` or `plus`. Both icons are always in the markup; this setting decides which one is displayed. |
| `open_by_default` | `checkbox` (on/off) | off | Opens the first **rendered** row on load. Keyed off the first row that actually renders, so it still works when leading entries were skipped for a blank question. |
| `dividers` | `checkbox` (on/off) | on | Horizontal rules between rows. |
| `divider_color` | `color` (color) | theme default | Divider color. Only shown in the editor when `dividers` is on (`visible_if`). |
| `text_color` | `color` (color) | theme default | Question and answer text color. |
| `background_color` | `color` (color) | theme default | Section background. Setting either this or `text_color` triggers a `contrast-override` scope so the pair stays legible. |
| `section_width` | `select` (choice) | `page-width` | Section width — `page-width` or `full-width`. |

**Padding**

| Setting | Type | Default | What it controls |
|---|---|---|---|
| `padding-block-start` | `range` (slider) | 0px (48px via preset) | Top padding, 0–100px. |
| `padding-block-end` | `range` (slider) | 0px (48px via preset) | Bottom padding, 0–100px. |

The schema default for both padding settings is `0`, but the section's **preset** sets them to `48`, so a section added through the editor starts with 48px top and bottom.

The editor also shows a non-editable note above the settings: *"Questions and answers come from this product's FAQs metafield (`custom.faqs`). Nothing displays until FAQ entries are attached to the product."*

## Related

- [FAQ metaobject](../metaobjects/faq.md) — the target of `custom.faqs`, rendered by the `Product FAQs` section
- [Theme blocks](../blocks.md) — full settings for every block named above
- [Global sections](../global-sections.md) — the header and footer wrapping this page
