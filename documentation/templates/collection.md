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

Renders the store's collections as a grid of cards.

| | Block | Notes |
|---|---|---|
| ▸ | `group` → `text` | The page heading, above the grid. The `text` block holds `<h1>Shop by collection</h1>`, so the `<h1>` comes from the block's rich text rather than from the section. |
| ▸ | `_collection-card` _(static)_ | The repeated card. A fixed part of the layout — it cannot be removed in the editor. |
| | ⤷ `collection-title` | The collection name under the image. |
| | ⤷ `collection-card-image` _(static)_ | The card image, taken from the collection's image in the admin. |

The card shows only a title and an image — unlike the product cards on the collection page, there is no `price` or `swatches` equivalent here.

Section settings in use: a 3-column `grid` (`layout_type`), 2 columns on mobile, and **`max_collections` is `4`** — so the page shows at most four collections regardless of how many exist in the store. Raise that setting in the theme editor to surface more. `carousel_on_mobile` is off, so mobile gets a 2-column grid rather than a swipeable carousel; the `icons_style` / `icons_shape` settings only take effect when `layout_type` is a carousel.

## Related

- [Theme blocks](../blocks.md) — full settings for `filters`, `_product-card`, `swatches`, and the rest
- [Product template](product.md) — where the product cards link to
- [Global sections](../global-sections.md) — the header and footer wrapping these pages
