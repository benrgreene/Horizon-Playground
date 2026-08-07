# Standalone sections

Sections that exist in `sections/` but are in **no** `templates/*.json` and in neither section group. Nothing renders them automatically — a merchant has to add them in the theme editor via **Add section**, and they appear only on the templates each one allows.

| Section | File | Where it can be added | Data source |
|---|---|---|---|
| Compare chart | `sections/compare-chart.liquid` | Any template except the header and footer groups | [`compare_title_row`](metaobjects/compare-title-row.md) + [`compare_row`](metaobjects/compare-row.md) entries |
| Product FAQs | `sections/product-faqs.liquid` | Product templates only | `custom.faqs` product metafield → [`faq`](metaobjects/faq.md) entries |

Both are custom to this playground rather than part of stock Horizon.

`Product FAQs` is documented with the rest of the product page — see [Product template → Sections available but not in the template](templates/product.md#sections-available-but-not-in-the-template). The `Compare chart` section is documented in full below, because it is not tied to any one resource.

---

## Compare chart (`compare-chart`)

A side-by-side comparison table — plan tiers, product variants, "us vs. them". The chart's shape comes entirely from metaobject entries rather than from section settings: **one [Compare Title Row](metaobjects/compare-title-row.md) entry supplies the columns**, and **each row is a `_compare-chart-row` block holding one [Compare Row](metaobjects/compare-row.md) entry**.

File: `sections/compare-chart.liquid`

**Accepted blocks:** `_compare-chart-row` (only)

**Placement:** `disabled_on: { groups: ["header", "footer"] }` — available on every template, but not inside the header or footer section groups.

**Preset:** *Compare Chart*, listed under the **Custom** category in the add-section picker. It starts with one empty row block and 48px of top and bottom padding.

### Settings

| Setting | Type | What it controls |
|---|---|---|
| `title` | `text` | Title. Optional heading above the chart |
| `title_preset` | `select` (choice) | Heading preset — options: default, `paragraph`, `h1`–`h6`. Default `h4` |
| `title_row` | `metaobject` (entry picker, type `compare_title_row`) | Title row — the chart's column titles |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color — falls back to the palette default when blank |
| `background_color` | `color` (color) | Background color — falls back to the palette default when blank |
| `section_width` | `select` (choice) | Width — options: `page-width`, `full-width`. Default `page-width` |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider, 0–100px) | Top |
| `padding-block-end` | `range` (slider, 0–100px) | Bottom |

### Behaviour worth knowing

- **No title row picked, no chart.** The table is rendered only when the picked `title_row` entry has at least one column title. With the setting empty the section outputs its heading (if set) and nothing else — not an empty table.
- **`title_preset` changes the size, not the element.** The heading is always an `<h2>`; the preset is applied as a class. The document outline stays correct whichever preset is chosen.
- **Rows are dropped when their length doesn't match.** A `_compare-chart-row` renders only if its entry's "Row Checks" count exactly equals the number of column titles — see [the row-length rule](metaobjects/compare-row.md#-the-row-length-rule). In the theme editor a mismatched row is replaced by a notice naming the mismatch; on the storefront it is silently omitted.
- **The first column is sticky and the table scrolls sideways.** Wide charts overflow into a horizontal scroller with `tabindex="0"`, so it can be scrolled with the keyboard, and the row-title column stays pinned. When a title is set the scroller is also exposed as a labelled `region` for screen readers.
- **Custom colors go through the palette system.** Setting `text_color` or `background_color` renders `contrast-override` and scopes the section to `.color-custom-{{ section.id }}` rather than writing literal colors, which is what keeps the sticky column's background matching the section.

### Setting it up

1. In the admin, create a **Compare Title Row** entry listing the column titles in order — Admin → Content → Metaobjects.
2. Create one **Compare Row** entry per feature, each with exactly as many "Row Checks" as there are column titles.
3. In the theme editor, add the **Compare Chart** section, pick the title row on the section, then add one **Row** block per Compare Row entry and pick its entry.

Adding or removing a column title later invalidates every existing row until each one is updated to match.

## Related

- [Compare Title Row metaobject](metaobjects/compare-title-row.md) — the column titles
- [Compare Row metaobject](metaobjects/compare-row.md) — one body row, and the row-length rule
- [Theme blocks](blocks.md#_compare-chart-row) — the `_compare-chart-row` block's own settings
- [Global sections](global-sections.md) — the sections that *are* rendered on every page
