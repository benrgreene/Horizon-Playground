# Compare Row

One body row of a comparison chart: a feature or attribute name, plus one value per column. Entries are reusable, so the same row can appear in more than one chart that shares the same columns.

| | |
|---|---|
| **Type (handle)** | `compare_row` |
| **Display name field** | `row_title` — entries are listed in the admin by their row title |
| **Description** | _None set on the definition._ |
| **Entries created via** | Admin → Content → Metaobjects → Compare Row |

## Fields

| Key | Name | Type | Required | Purpose |
|---|---|---|---|---|
| `row_title` | Row Title | `single_line_text_field` | No | The feature or attribute this row describes. Doubles as the entry's display name in the admin, so it should read on its own. |
| `row_checks` | Row Checks | `list.single_line_text_field` | No | One value per column, in the same order as the chart's column titles. |

> **"Row Checks" holds text, not booleans.** Shopify has no `list.boolean` type, so each item is whatever string the merchant types — `✓`, `Yes`, `—`, `2 GB`, and so on. It is printed into its own cell verbatim. This means a row can carry real values, not just tick marks.

> **Neither field is required.** An entry can be saved with an empty title or an empty list, so anything rendering these has to handle blanks.

## How it is used

The **`Compare chart` section** does not read these directly. Each row is a `_compare-chart-row` block inside the section, and the block takes one entry through a `metaobject` schema setting:

```json
{ "type": "metaobject", "id": "compare_row", "metaobject_type": "compare_row" }
```

The block renders `row_title` as a `<th scope="row">` (which is also the sticky first column when the chart scrolls sideways), then one `<td>` per item in `row_checks`.

## ⚠️ The row-length rule

**A row is rendered only if its `row_checks` count exactly matches the number of column titles** in the chart's [Compare Title Row](compare-title-row.md). Otherwise the row is skipped entirely on the storefront — no partial row, no padding, no error.

This is deliberate: a mismatched row would misalign every value after the gap, which is worse than showing nothing. But it does mean a misconfigured row **silently disappears**, so:

- In the **theme editor** the block renders a notice naming the mismatch (e.g. "3 checks but the chart has 4 columns"), so the merchant can see why the row vanished.
- On the **storefront** nothing is emitted.

If a whole chart looks short, count the items in each row against the column titles first. And note that adding or removing a column title invalidates every row until each one is updated to match.

## Related

- [Compare Title Row](compare-title-row.md) — supplies the column titles and therefore the required row length
- [Compare chart section](../standalone-sections.md#compare-chart-compare-chart) — the section that renders these rows, and its settings
