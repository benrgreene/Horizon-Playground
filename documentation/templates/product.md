# Product template

Covers the custom fields available on products in this store, and how the product page is assembled from sections and blocks.

## Metafield definitions

These are the product metafield definitions that exist in the store. Merchants fill them in on each product's admin page, under **Metafields**.

| Identifier | Name | Type | Purpose |
|---|---|---|---|
| `test_data.binding_mount` | Snowboard binding mount | `single_line_text_field` | The type of binding mount used on the snowboard. |
| `test_data.snowboard_length` | Snowboard length | `dimension` | The length of the snowboard. Stored as a value plus a unit, not free text. |
| `custom.faqs` | FAQs | `list.metaobject_reference` | An ordered list of [FAQ metaobject](../metaobjects/faq.md) entries attached to the product. No description is set on the definition. |

> ⚠️ **None of these three definitions is referenced anywhere in the theme.** Values entered against them are stored on the product and are available to the Liquid and the APIs, but no template, section, or block currently renders them, so they do not appear on the storefront. The `test_data` namespace and the snowboard subject matter suggest these were created for experimentation.

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

## Related

- [FAQ metaobject](../metaobjects/faq.md) — the target of `custom.faqs`
- [Theme blocks](../blocks.md) — full settings for every block named above
- [Global sections](../global-sections.md) — the header and footer wrapping this page
