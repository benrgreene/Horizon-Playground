# Collection template

Covers the custom fields available on collections in this store, and how the collection pages are assembled.

## Metafield definitions

**No collection metafield definitions exist in this store.**

The Admin API returns an empty list for `metafieldDefinitions(ownerType: COLLECTION)`, and no `.liquid` file in the theme reads `collection.metafields.*`. Collections here are described entirely by their built-in fields — title, description, and image.

If collection metafields are added later, define them in **Settings → Custom data → Collections** in the admin; they will then appear here on the next documentation sync.

## Template composition

### Collection page

**File:** `templates/collection.json` — two sections in order.

**1. `section` — Section**

A generic content container above the product grid, holding two `text` blocks. This is the theme's all-purpose layout section (`sections/section.liquid`), so its role here is whatever copy the merchant puts in it — typically a collection heading and an intro line.

**2. `main-collection` — Collection**

The product grid itself.

| Block | Notes |
|---|---|
| `filters` _(static)_ | Faceted filtering and sorting controls. |
| `_product-card` _(static)_ | The repeated product card, containing `_product-card-gallery`, `product-title`, `price`, and `swatches`. |

Note that the collection card includes **`swatches`**, which the product page's recommendation card does not — collection browsing surfaces colour options, the recommendation grid does not.

Section settings of note: `products_per_page` controls page size, and `enable_infinite_scroll` switches between pagination and load-on-scroll. `layout_type` and `product_card_size` (plus their mobile counterparts) control grid density.

### Collection list page

**File:** `templates/list-collections.json` — a single section.

**`main-collection-list` — Collection list**

Renders every collection as a card, above which sits a heading group.

| | Block | Notes |
|---|---|---|
| ▸ | `group` | A heading group above the grid, holding the block below. |
| | ⤷ `text` | The page heading — currently `<h1>Shop by collection</h1>`. |
| ▸ | `_collection-card` _(static)_ | The repeated collection card. Contains the blocks below. Configured with the title `placement` set to `below_image`. |
| | ⤷ `collection-title` | The collection name under the image. |
| | ⤷ `_collection-card-image` _(static)_ | The collection image, with `image_ratio` set to `adapt`. |

Unlike the product grid on the collection page, the card here has **no `price` block** — a collection has no price to show — and no `swatches`.

Grid settings (`layout_type`, `columns`, `mobile_columns`, the gaps, and the carousel navigation icon style) are not read by the section directly — it forwards `section.settings` wholesale to [`snippets/resource-list.liquid`](../../snippets/resource-list.liquid), which is what turns them into the grid, bento, or carousel layout. As configured: a 3-column grid, 2 columns on mobile.

> ⚠️ **`max_collections` does nothing on this section.** The setting exists in the section's schema (default `4`), but neither `sections/main-collection-list.liquid` nor `resource-list` ever reads it — the section hardcodes `max_items = 20`, so **at most 20 collections render** regardless of what the setting says. It is also only shown in the editor when `layout_type` is `editorial`, so with the current `grid` layout a merchant never sees it. The setting *is* honoured by the separate, merchant-addable `sections/collection-list.liquid` — which shares the same `t:names.collection_list` name and reads `max_collections` for its `editorial` layout. The two sections are easy to confuse; only the latter has presets, so only it can be added to other templates.

## Related

- [Theme blocks](../blocks.md) — full settings for `filters`, `_product-card`, `swatches`, `_collection-card`, and the rest
- [Product template](product.md) — where the product cards link to
- [Global sections](../global-sections.md) — the header and footer wrapping these pages
