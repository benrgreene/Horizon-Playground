# Compare Title Row

The header row of a comparison chart. One entry holds the ordered list of column titles — typically the things being compared, such as product tiers or plan names — and is reused by every chart that compares the same set of columns.

| | |
|---|---|
| **Type (handle)** | `compare_title_row` |
| **Display name field** | `string` — entries are listed in the admin by their column titles |
| **Description** | _None set on the definition._ |
| **Entries created via** | Admin → Content → Metaobjects → Compare Title Row |

## Fields

| Key | Name | Type | Required | Purpose |
|---|---|---|---|---|
| `string` | String | `list.single_line_text_field` | No | The ordered column titles. One list item per column, left to right. |

> ⚠️ **The field is keyed `string`, not `compare_title_row`.** `compare_title_row` is the *metaobject type*; `string` is its only field. In Liquid the list is reached as `title_row.string.value`. The name is an artifact of how the definition was created — a field key cannot be changed after creation, only recreated — so treat "String" as meaning "column titles".

> **The field is not required.** An entry can be saved with an empty list, in which case the chart renders no table at all.

## How it is used

The **`Compare chart` section** (`sections/compare-chart.liquid`) takes one entry through a `metaobject` schema setting:

```json
{ "type": "metaobject", "id": "title_row", "metaobject_type": "compare_title_row" }
```

The section renders one `<th>` per list item, preceded by an empty corner cell that sits above the row-title column:

```liquid
{%- for header in section.settings.title_row.string.value -%}
  <th scope="col">{{ header | escape }}</th>
{%- endfor -%}
```

**The length of this list is the chart's contract.** Every [Compare Row](compare-row.md) attached to the same chart must have exactly this many "Row Checks", or that row is dropped from the storefront. So changing the number of items here will silently invalidate every existing row — expect to update all of them together.

This is the first `metaobject` picker setting in the theme; every other custom-data binding goes through a metafield.
