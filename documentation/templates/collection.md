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

Renders every collection as a card. It has no configured blocks in the template, so it uses its defaults. Settings cover the card grid (`layout_type`, `columns`, `mobile_columns`, `max_collections`) and, when `layout_type` is a carousel, the navigation icon style.

## Related

- [Theme blocks](../blocks.md) — full settings for `filters`, `_product-card`, `swatches`, and the rest
- [Product template](product.md) — where the product cards link to
- [Global sections](../global-sections.md) — the header and footer wrapping these pages
