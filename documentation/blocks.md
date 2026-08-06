# Theme blocks

Every block in the theme's `blocks/` directory, one subsection per block type, ordered alphabetically. Blocks are the nestable units merchants arrange inside sections in the theme editor.

The theme defines **95 blocks**: **44 public** (merchants can add them wherever a section accepts `@theme` blocks) and **51 private**.

> **Underscore prefix = private block.** A block whose filename starts with `_` is excluded from `@theme` and can only be placed by a parent that names its type explicitly. Renaming a block to or from an underscore changes whether merchants can insert it directly.

## Contents

### Public blocks

- [Accelerated checkout](#accelerated-checkout) — `accelerated-checkout`
- [Accordion](#accordion) — `accordion`
- [Add to cart](#add-to-cart) — `add-to-cart`
- [Button](#button) — `button`
- [Buy buttons](#buy-buttons) — `buy-buttons`
- [Collection card](#collection-card) — `collection-card`
- [Collection title](#collection-title) — `collection-title`
- [Comparison slider](#comparison-slider) — `comparison-slider`
- [Contact form](#contact-form) — `contact-form`
- [Submit button](#contact-form-submit-button) — `contact-form-submit-button`
- [Custom Liquid](#custom-liquid) — `custom-liquid`
- [Disclosures](#disclosures) — `disclosures`
- [Email signup](#email-signup) — `email-signup`
- [Featured collection](#featured-collection) — `featured-collection`
- [Filtering and sorting](#filters) — `filters`
- [Follow on Shop](#follow-on-shop) — `follow-on-shop`
- [Copyright](#footer-copyright) — `footer-copyright`
- [Policy links](#footer-policy-list) — `footer-policy-list`
- [Group](#group) — `group`
- [Icon](#icon) — `icon`
- [Image](#image) — `image`
- [Jumbo text](#jumbo-text) — `jumbo-text`
- [Logo](#logo) — `logo`
- [Menu](#menu) — `menu`
- [Page](#page) — `page`
- [Content](#page-content) — `page-content`
- [Payment icons](#payment-icons) — `payment-icons`
- [Popup link](#popup-link) — `popup-link`
- [Price](#price) — `price`
- [Product card](#product-card) — `product-card`
- [Special instructions](#product-custom-property) — `product-custom-property`
- [Text](#product-description) — `product-description`
- [Product inventory](#product-inventory) — `product-inventory`
- [Recommended products](#product-recommendations) — `product-recommendations`
- [Product title](#product-title) — `product-title`
- [Quantity](#quantity) — `quantity`
- [Review stars](#review) — `review`
- [SKU](#sku) — `sku`
- [Social media links](#social-links) — `social-links`
- [Spacer](#spacer) — `spacer`
- [Swatches](#swatches) — `swatches`
- [Text](#text) — `text`
- [Variant picker](#variant-picker) — `variant-picker`
- [Video](#video) — `video`

### Private blocks

- [Accordion row](#_accordion-row) — `_accordion-row`
- [Announcement](#_announcement) — `_announcement`
- [Blog post](#_blog-post-card) — `_blog-post-card`
- [Content](#_blog-post-content) — `_blog-post-content`
- [Description](#_blog-post-description) — `_blog-post-description`
- [Featured image](#_blog-post-featured-image) — `_blog-post-featured-image`
- [Image](#_blog-post-image) — `_blog-post-image`
- [Details](#_blog-post-info-text) — `_blog-post-info-text`
- [Title](#_blog-post-title) — `_blog-post-title`
- [Card](#_card) — `_card`
- [Carousel content](#_carousel-content) — `_carousel-content`
- [Cart products](#_cart-products) — `_cart-products`
- [Summary](#_cart-summary) — `_cart-summary`
- [Title](#_cart-title) — `_cart-title`
- [Collection card](#_collection-card) — `_collection-card`
- [Image](#_collection-card-image) — `_collection-card-image`
- [Collection image](#_collection-image) — `_collection-image`
- [Collection info](#_collection-info) — `_collection-info`
- [Collection](#_collection-link) — `_collection-link`
- [Content](#_content) — `_content`
- [Content](#_content-without-appearance) — `_content-without-appearance`
- [Divider](#_divider) — `_divider`
- [Blog card](#_featured-blog-posts-card) — `_featured-blog-posts-card`
- [Image](#_featured-blog-posts-image) — `_featured-blog-posts-image`
- [Title](#_featured-blog-posts-title) — `_featured-blog-posts-title`
- [Product](#_featured-product) — `_featured-product`
- [Product media](#_featured-product-gallery) — `_featured-product-gallery`
- [Product media](#_featured-product-information-carousel) — `_featured-product-information-carousel`
- [Price](#_featured-product-price) — `_featured-product-price`
- [Social media links](#_footer-social-icons) — `_footer-social-icons`
- [Logo](#_header-logo) — `_header-logo`
- [Menu](#_header-menu) — `_header-menu`
- [Heading](#_heading) — `_heading`
- [Hotspot](#_hotspot-product) — `_hotspot-product`
- [Image](#_image) — `_image`
- [Collection title](#_inline-collection-title) — `_inline-collection-title`
- [Text](#_inline-text) — `_inline-text`
- [Slide](#_layered-slide) — `_layered-slide`
- [Marquee](#_marquee) — `_marquee`
- [Media](#_media-without-appearance) — `_media-without-appearance`
- [Product card](#_product-card) — `_product-card`
- [Product image](#_product-card-gallery) — `_product-card-gallery`
- [Group](#_product-card-group) — `_product-card-group`
- [Details](#_product-details) — `_product-details`
- [View all button](#_product-list-button) — `_product-list-button`
- [Header](#_product-list-content) — `_product-list-content`
- [Collection title](#_product-list-text) — `_product-list-text`
- [Product media](#_product-media-gallery) — `_product-media-gallery`
- [Search input](#_search-input) — `_search-input`
- [Slide](#_slide) — `_slide`
- [Social link](#_social-link) — `_social-link`

---

## accelerated-checkout

**Accelerated checkout** · Public block · file `blocks/accelerated-checkout.liquid`

Used by: `_product-details.liquid`, `buy-buttons.liquid`, `featured-product-information.liquid`, `product.json`

_No settings._

## accordion

**Accordion** · Public block · file `blocks/accordion.liquid`

Theme-editor presets: `Accordion`

Used by: `_product-details.liquid`, `section.liquid`

Accepts child blocks: `_accordion-row`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `icon` | `select` (choice) | Icon — options: `caret`, `plus` |
| `dividers` | `checkbox` (on/off) | Dividers |
| `divider_color` | `color` (color) | Divider color |
| `type_preset` | `select` (choice) | Heading preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Edit presets in theme settings |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |
| `text_color` | `color` (color) | Text color |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## add-to-cart

**Add to cart** · Public block · file `blocks/add-to-cart.liquid`

Used by: `_product-details.liquid`, `buy-buttons.liquid`, `featured-product-information.liquid`, `product.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `style_class` | `select` (choice) | Style — options: `button`, `button-secondary`, `button-custom`. Edit primary and secondary button styles in theme settings |

**Button colors**

| Setting | Type | What it controls |
|---|---|---|
| `custom_button_background` | `color` (color) | Background |
| `custom_button_text` | `color` (color) | Text |
| `custom_button_border` | `color` (color) | Borders |

## button

**Button** · Public block · file `blocks/button.liquid`

Theme-editor presets: `Button`

Used by: `404.json`, `_collection-card.liquid`, `_content-without-appearance.liquid`, `_layered-slide.liquid`, `_product-details.liquid`, `_product-list-content.liquid`, `_slide.liquid`, `collection-card.liquid`, `collection-list.liquid`, `footer.liquid`, `hero.liquid`, `index.json`, `layered-slideshow.liquid`, `main-blog.liquid`, `main-cart.liquid`, `main-collection-list.liquid`, `media-with-content.liquid`, `product-recommendations.liquid`, `section.liquid`, `slideshow.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `label` | `text` (text) | Label |
| `link` | `url` (link) | Link |
| `open_in_new_tab` | `checkbox` (on/off) | Open link in new tab |
| `style_class` | `select` (choice) | Style — options: `button`, `button-secondary`, `button-unstyled`, `button-custom`. Edit primary and secondary button styles in theme settings |

**Button colors**

| Setting | Type | What it controls |
|---|---|---|
| `custom_button_background` | `color` (color) | Background |
| `custom_button_text` | `color` (color) | Text |
| `custom_button_border` | `color` (color) | Borders |
| `link_text_color` | `color` (color) | Link text color |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Desktop width — options: `fit-content`, `custom` |
| `custom_width` | `range` (slider) | Custom width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `custom` |
| `custom_width_mobile` | `range` (slider) | Custom width |

## buy-buttons

**Buy buttons** · Public block · file `blocks/buy-buttons.liquid`

Theme-editor presets: `Buy buttons`

Used by: `_product-card.liquid`, `_product-details.liquid`, `featured-product-information.liquid`, `product.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `stacking` | `checkbox` (on/off) | Always stack buttons |
| `text_color` | `color` (color) | Text color |

**Local pickup**

| Setting | Type | What it controls |
|---|---|---|
| `show_pickup_availability` | `checkbox` (on/off) | Show pickup availability |

**Gift card products**

| Setting | Type | What it controls |
|---|---|---|
| `gift_card_form` | `checkbox` (on/off) | Gift card form |
| `recipient_button_style` | `select` (choice) | Button style — options: `default`, `custom` |
| `recipient_button_background` | `color` (color) | Background |
| `recipient_button_text` | `color` (color) | Text |
| `recipient_button_border` | `color` (color) | Borders |
| `selected_recipient_button_style` | `select` (choice) | Selected button style — options: `default`, `custom` |
| `selected_recipient_button_background` | `color` (color) | Background |
| `selected_recipient_button_text` | `color` (color) | Text |
| `selected_recipient_button_border` | `color` (color) | Borders |
| `input_style` | `select` (choice) | Input style — options: `default`, `custom`. Edit input field in theme settings |
| `input_background_color` | `color` (color) | Background |
| `input_text_color` | `color` (color) | Text |
| `input_border_color` | `color` (color) | Borders |
| `border_width` | `range` (slider) | Border thickness |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## collection-card

**Collection card** · Public block · file `blocks/collection-card.liquid`

Theme-editor presets: `Collection card`

Used by: `_card.liquid`

Accepts child blocks: `text`, `spacer`, `button`, `group`, `collection-title`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `collection` | `collection` (collection) | Collection |

**Text**

| Setting | Type | What it controls |
|---|---|---|
| `placement` | `select` (choice) | Placement — options: `on_image`, `below_image` |
| `horizontal_alignment` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `vertical_alignment` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end` |
| `collection_card_gap` | `range` (slider) | Vertical gap |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

## collection-title

**Collection title** · Public block · file `blocks/collection-title.liquid`

Theme-editor presets: `Collection title`

Used by: `_collection-card.liquid`, `collection-card.liquid`, `collection-list.liquid`, `list-collections.json`

**Settings**


**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `100%` |
| `max_width` | `select` (choice) | Max width — options: `narrow`, `normal`, `none` |
| `alignment` | `text_alignment` (alignment) | Alignment |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: `rte`, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |
| `wrap` | `select` (choice) | Wrap — options: `pretty`, `balance`, `nowrap` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background` | `checkbox` (on/off) | Background |
| `background_color` | `color` (color) | Background color |
| `text_color` | `color` (color) | Text color |
| `corner_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## comparison-slider

**Comparison slider** · Public block · file `blocks/comparison-slider.liquid`

Theme-editor presets: `Comparison slider`

Used by: `section.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `before_image` | `image_picker` (image) | Image 1 |
| `after_image` | `image_picker` (image) | Image 2 |
| `slider_style` | `select` (choice) | Direction — options: `horizontal`, `vertical` |
| `show_text` | `checkbox` (on/off) | Text on images |

**Text**

| Setting | Type | What it controls |
|---|---|---|
| `before_text` | `text` (text) | Image 1 |
| `after_text` | `text` (text) | Image 2 |
| `text_preset` | `select` (choice) | Preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6` |
| `text_position_horizontal` | `select` (choice) | Position — options: `start`, `end` |
| `text_position_vertical` | `select` (choice) | Position — options: `start`, `end` |
| `text_background` | `checkbox` (on/off) | Background |
| `text_background_color` | `color` (color) | Background color |
| `text_corner_radius` | `range` (slider) | Corner radius |
| `text_color` | `color` (color) | Text color |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `image_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `portrait`, `square`, `landscape` |
| `width` | `select` (choice) | Desktop width — options: `fit-content`, `fill`, `custom` |
| `custom_width` | `range` (slider) | Custom width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `fill`, `custom` |
| `custom_width_mobile` | `range` (slider) | Custom width |
| `height` | `select` (choice) | Height — options: `fit`, `fill` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `slider_bg_color` | `color` (color) | Slider color |
| `slider_handle_color` | `color` (color) | Slider inner color |
| `border` | `select` (choice) | Border — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## contact-form

**Contact form** · Public block · file `blocks/contact-form.liquid`

Theme-editor presets: `Contact form`

Used by: `page.contact.json`, `section.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Desktop width — options: `fit-content`, `custom` |
| `custom_width` | `range` (slider) | Width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `custom` |
| `custom_width_mobile` | `range` (slider) | Width |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |

**Input**

| Setting | Type | What it controls |
|---|---|---|
| `input_style` | `select` (choice) | Style — options: `default`, `custom`. Edit input field in theme settings |
| `input_background_color` | `color` (color) | Background |
| `input_text_color` | `color` (color) | Text |
| `input_border_color` | `color` (color) | Borders |
| `border_width` | `range` (slider) | Border thickness |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## contact-form-submit-button

**Submit button** · Public block · file `blocks/contact-form-submit-button.liquid`

Used by: `contact-form.liquid`, `page.contact.json`, `section.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `label` | `text` (text) | Label |
| `style_class` | `select` (choice) | Style — options: `button`, `button-secondary`, `button-custom`. Edit primary and secondary button styles in theme settings |

**Button colors**

| Setting | Type | What it controls |
|---|---|---|
| `custom_button_background` | `color` (color) | Background |
| `custom_button_text` | `color` (color) | Text |
| `custom_button_border` | `color` (color) | Borders |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Desktop width — options: `fit-content`, `custom` |
| `custom_width` | `range` (slider) | Width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `custom` |
| `custom_width_mobile` | `range` (slider) | Width |

## custom-liquid

**Custom Liquid** · Public block · file `blocks/custom-liquid.liquid`

Theme-editor presets: `Custom Liquid`

Used by: `_product-card-group.liquid`, `_product-card.liquid`, `product-card.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `custom_liquid` | `liquid` (Liquid code) | Liquid code. Add app snippets or other code to create advanced customizations. [Learn more](https://shopify.dev/docs/api/liquid) |

## disclosures

**Disclosures** · Public block · file `blocks/disclosures.liquid`

Theme-editor presets: `Disclosures`

Used by: `product.json`

**Settings**


**Heading**

| Setting | Type | What it controls |
|---|---|---|
| `heading` | `text` (text) | Heading |
| `heading_preset` | `select` (choice) | Heading preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Edit presets in theme settings |

**Disclosures**

| Setting | Type | What it controls |
|---|---|---|
| `open_by_default` | `checkbox` (on/off) | Open by default |
| `icon` | `select` (choice) | Icon — options: `caret`, `plus` |
| `disclosure_heading_preset` | `select` (choice) | Title preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Edit presets in theme settings |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |
| `dividers` | `checkbox` (on/off) | Dividers |
| `divider_color` | `color` (color) | Divider color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## email-signup

**Email signup** · Public block · file `blocks/email-signup.liquid`

Theme-editor presets: `Email signup`

Used by: `footer-group.json`, `footer.liquid`, `password.json`, `section.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fill`, `custom` |
| `custom_width` | `range` (slider) | Custom width |

**Heading**

| Setting | Type | What it controls |
|---|---|---|
| `heading` | `text` (text) | Text |
| `heading_text_color` | `color` (color) | Color |
| `heading_preset` | `select` (choice) | Text preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Edit presets in theme settings |

**Input**

| Setting | Type | What it controls |
|---|---|---|
| `border_style` | `select` (choice) | Border — options: `all`, `underline`, `none` |
| `input_style` | `select` (choice) | Style — options: `default`, `custom`. Edit input field in theme settings |
| `border_width` | `range` (slider) | Border thickness |
| `border_radius` | `range` (slider) | Corner radius |
| `input_background_color` | `color` (color) | Background |
| `input_text_color` | `color` (color) | Text |
| `input_border_color` | `color` (color) | Borders |
| `input_type_preset` | `select` (choice) | Text preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Edit presets in theme settings |

**Submit button**

| Setting | Type | What it controls |
|---|---|---|
| `style_class` | `select` (choice) | Style — options: `button`, `button-secondary`, `button-unstyled`, `button-custom`. Edit primary and secondary button styles in theme settings |

**Button colors**

| Setting | Type | What it controls |
|---|---|---|
| `custom_button_background` | `color` (color) | Background |
| `custom_button_text` | `color` (color) | Text |
| `custom_button_border` | `color` (color) | Borders |
| `link_text_color` | `color` (color) | Link text color |
| `display_type` | `select` (choice) | Display — options: `text`, `arrow` |
| `label` | `text` (text) | Label |
| `integrated_button` | `checkbox` (on/off) | Integrated button |
| `button_type_preset` | `select` (choice) | Text preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Edit presets in theme settings |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## featured-collection

**Featured collection** · Public block · file `blocks/featured-collection.liquid`

Used by: no fixed parent — merchants add it anywhere `@theme` blocks are accepted.

Accepts child blocks: `@theme`, `@app`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `collection` | `collection` (collection) | Collection |

## filters

**Filtering and sorting** · Public block · file `blocks/filters.liquid`

Used by: `collection.json`, `main-collection.liquid`, `search-results.liquid`, `search.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `enable_filtering` | `checkbox` (on/off) | Filters. Customize filters with the [Search & Discovery app](https://help.shopify.com/manual/online-store/search-and-discovery/filters) |
| `filter_style` | `select` (choice) | Direction — options: `horizontal`, `vertical` |
| `filter_width` | `select` (choice) | Width — options: `centered`, `full-width` |
| `text_label_case` | `select` (choice) | Text label case — options: `default`, `uppercase` |
| `show_swatch_label` | `checkbox` (on/off) | Text labels for swatches |
| `show_filter_label` | `checkbox` (on/off) | Text labels for applied filters |
| `enable_sorting` | `checkbox` (on/off) | Sorting |
| `enable_grid_density` | `checkbox` (on/off) | Grid layout control |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |
| `text_color` | `color` (color) | Text color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

**Margin**

| Setting | Type | What it controls |
|---|---|---|
| `facets_margin_bottom` | `range` (slider) | Bottom |
| `facets_margin_right` | `range` (slider) | Right |

## follow-on-shop

**Follow on Shop** · Public block · file `blocks/follow-on-shop.liquid`

Theme-editor presets: `Follow on Shop`

Used by: `footer.liquid`

**Settings**


**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## footer-copyright

**Copyright** · Public block · file `blocks/footer-copyright.liquid`

Theme-editor presets: `Copyright`

Used by: `footer-group.json`, `footer-utilities.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `show_powered_by` | `checkbox` (on/off) | Show "Powered by Shopify" |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |
| `font_size` | `select` (choice) | Size — options: `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |

## footer-policy-list

**Policy links** · Public block · file `blocks/footer-policy-list.liquid`

Theme-editor presets: `Policy links`

Used by: `footer-group.json`, `footer-utilities.liquid`

**Settings**


**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |
| `font_size` | `select` (choice) | Size — options: `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |

## group

**Group** · Public block · file `blocks/group.liquid`

Theme-editor presets: `Group`

Used by: `_collection-card.liquid`, `_content-without-appearance.liquid`, `_layered-slide.liquid`, `_product-details.liquid`, `_slide.liquid`, `carousel.liquid`, `collection-card.liquid`, `collection-list.liquid`, `featured-product-information.liquid`, `footer-group.json`, `footer.liquid`, `hero.liquid`, `list-collections.json`, `main-blog.liquid`, `main-cart.liquid`, `main-collection-list.liquid`, `media-with-content.liquid`, `product-recommendations.liquid`, `product.json`, `section.liquid`

Accepts child blocks: `@theme`, `@app`, `_divider`

**Settings**


**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `content_direction` | `select` (choice) | Direction — options: `column`, `row` |
| `vertical_on_mobile` | `checkbox` (on/off) | Vertical on mobile |
| `horizontal_alignment` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `vertical_alignment` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end` |
| `align_baseline` | `checkbox` (on/off) | Align text baseline |
| `horizontal_alignment_flex_direction_column` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `vertical_alignment_flex_direction_column` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `gap` | `range` (slider) | Gap |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `fill`, `custom` |
| `custom_width` | `range` (slider) | Custom width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `fill`, `custom` |
| `custom_width_mobile` | `range` (slider) | Custom width |
| `height` | `select` (choice) | Height — options: `fit`, `fill`, `custom` |
| `custom_height` | `range` (slider) | Custom height |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_media` | `select` (choice) | Background media — options: `none`, `image`, `video` |
| `background_color` | `color` (color) | Background color |
| `video` | `video` (video) | Video |
| `video_position` | `select` (choice) | Video position — options: `cover`, `contain` |
| `background_image` | `image_picker` (image) | Image |
| `background_image_position` | `select` (choice) | Image position — options: `cover`, `fit` |
| `toggle_overlay` | `checkbox` (on/off) | Background overlay |
| `overlay_color` | `color` (color) | Overlay color |
| `overlay_style` | `select` (choice) | Overlay style — options: `solid`, `gradient` |
| `gradient_direction` | `select` (choice) | Gradient direction — options: `to top`, `to bottom` |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Block link**

| Setting | Type | What it controls |
|---|---|---|
| `link` | `url` (link) | Link |
| `open_in_new_tab` | `checkbox` (on/off) | Open link in new tab |
| `placeholder` | `text` (text) | Image |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## icon

**Icon** · Public block · file `blocks/icon.liquid`

Theme-editor presets: `Icon`

Used by: `_content-without-appearance.liquid`, `_layered-slide.liquid`, `_marquee.liquid`, `_product-details.liquid`, `_slide.liquid`, `collection-list.liquid`, `footer.liquid`, `main-blog.liquid`, `main-cart.liquid`, `main-collection-list.liquid`, `marquee.liquid`, `product-recommendations.liquid`, `section.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `icon` | `select` (choice) | Icon — options: `none`, `apple`, `arrow`, `banana`, `bottle`, `box`, `carrot`, `chat_bubble`, `check_box`, `clipboard`, `dairy`, `dairy_free`, `dryer`, `eye`, `fire`, `gluten_free`, `heart`, `iron`, `leaf`, `leather`, `lightning_bolt`, `lipstick`, `lock`, `map_pin`, `nut_free`, `pants`, `paw_print`, `pepper`, `perfume`, `plane`, `plant`, `price_tag`, `question_mark`, `recycle`, `return`, `ruler`, `serving_dish`, `shirt`, `shoe`, `silhouette`, `bluesky`, `facebook`, `instagram`, `linkedin`, `pinterest`, `snapchat`, `spotify`, `threads`, `tiktok`, `tumblr`, `twitter`, `vimeo`, `youtube`, `whatsapp`, `snowflake`, `star`, `stopwatch`, `truck`, `washing` |
| `image_upload` | `image_picker` (image) | Image icon |
| `width` | `range` (slider) | Width |
| `link` | `url` (link) | Link |
| `open_in_new_tab` | `checkbox` (on/off) | Open link in new tab |
| `icon_color` | `color` (color) | Color |

## image

**Image** · Public block · file `blocks/image.liquid`

Theme-editor presets: `Image`

Used by: `_card.liquid`, `_content-without-appearance.liquid`, `_layered-slide.liquid`, `_product-card-group.liquid`, `_product-card.liquid`, `_product-details.liquid`, `_slide.liquid`, `carousel.liquid`, `collection-list.liquid`, `footer.liquid`, `main-blog.liquid`, `main-cart.liquid`, `main-collection-list.liquid`, `product-card.liquid`, `product-recommendations.liquid`, `section.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `image` | `image_picker` (image) | Image |
| `link` | `url` (link) | Link |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `image_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `portrait`, `square`, `landscape` |
| `width` | `select` (choice) | Desktop width — options: `fit-content`, `fill`, `custom` |
| `custom_width` | `range` (slider) | Custom width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `fill`, `custom` |
| `custom_width_mobile` | `range` (slider) | Custom width |
| `height` | `select` (choice) | Height — options: `fit`, `fill` |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## jumbo-text

**Jumbo text** · Public block · file `blocks/jumbo-text.liquid`

Theme-editor presets: `Jumbo text`

Used by: `_layered-slide.liquid`, `_slide.liquid`, `footer.liquid`, `hero.liquid`, `media-with-content.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `text` | `textarea` (multi-line text) | Text |
| `font` | `select` (choice) | Font — options: `body`, `subheading`, `heading`, `accent` |
| `alignment` | `text_alignment` (alignment) | Alignment |
| `line_height` | `select` (choice) | Line height — options: `0.8`, `1`, `1.2` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `-0.03em`, `normal`, `0.03em` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |
| `text_effect` | `select` (choice) | Animation — options: `none`, `blur`, `reveal` |
| `animation_repeat` | `checkbox` (on/off) | Repeat animation |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |

## logo

**Logo** · Public block · file `blocks/logo.liquid`

Theme-editor presets: `Logo`

Used by: `footer.liquid`, `hero.liquid`, `marquee.liquid`, `password.json`, `section.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `inverse` | `checkbox` (on/off) | Use inverse logo |
| `font` | `select` (choice) | Font — options: `body`, `subheading`, `heading`, `accent` |
| `text_color` | `color` (color) | Color |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `unit` | `select` (choice) | Unit — options: `pixel`, `percent` |
| `percent_width` | `range` (slider) | Width |
| `pixel_height` | `range` (slider) | Height |
| `custom_mobile_size` | `checkbox` (on/off) | Custom mobile size |

**Mobile size**

| Setting | Type | What it controls |
|---|---|---|
| `unit_mobile` | `select` (choice) | Unit — options: `pixel`, `percent` |
| `percent_width_mobile` | `range` (slider) | Width |
| `pixel_height_mobile` | `range` (slider) | Height |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## menu

**Menu** · Public block · file `blocks/menu.liquid`

Theme-editor presets: `Menu`

Used by: `footer-group.json`, `footer.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `menu` | `link_list` (menu) | Menu |
| `heading` | `text` (text) | Heading |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `menu_spacing` | `range` (slider) | Vertical gap |
| `show_as_accordion` | `checkbox` (on/off) | Show as accordion on mobile |
| `accordion_icon` | `select` (choice) | Icon — options: `caret`, `plus` |
| `accordion_dividers` | `checkbox` (on/off) | Dividers |
| `background_color` | `color` (color) | Background color |
| `text_color` | `color` (color) | Text color |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `heading_preset` | `select` (choice) | Heading preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6` |
| `link_preset` | `select` (choice) | Link preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6` |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## page

**Page** · Public block · file `blocks/page.liquid`

Theme-editor presets: `Page`

Used by: no fixed parent — merchants add it anywhere `@theme` blocks are accepted.

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `page` | `page` (page) | Page |
| `max_width` | `select` (choice) | Max width — options: `narrow`, `normal`, `none` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |
| `text_color` | `color` (color) | Text color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## page-content

**Content** · Public block · file `blocks/page-content.liquid`

Used by: `page.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |

## payment-icons

**Payment icons** · Public block · file `blocks/payment-icons.liquid`

Theme-editor presets: `Payment icons`

Used by: `footer.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `horizontal_alignment` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `gap` | `range` (slider) | Gap |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## popup-link

**Popup link** · Public block · file `blocks/popup-link.liquid`

Theme-editor presets: `Popup link`

Used by: no fixed parent — merchants add it anywhere `@theme` blocks are accepted.

Accepts child blocks: `@theme`, `@app`

**Settings**


**Popup**

| Setting | Type | What it controls |
|---|---|---|
| `behavior` | `select` (choice) | Behavior — options: `default`, `drawer` |

**Link**

| Setting | Type | What it controls |
|---|---|---|
| `heading` | `text` (text) | Text |
| `type_preset` | `select` (choice) | Preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Edit presets in theme settings |

**Link padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## price

**Price** · Public block · file `blocks/price.liquid`

Theme-editor presets: `Price`

Used by: `404.json`, `_product-card-group.liquid`, `_product-card.liquid`, `_product-details.liquid`, `cart.json`, `collection.json`, `featured-product-information.liquid`, `index.json`, `product-card.liquid`, `product-list.liquid`, `product-recommendations.liquid`, `product.json`, `search.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `show_sale_price_first` | `checkbox` (on/off) | Show sale price first |
| `show_installments` | `checkbox` (on/off) | Installments |
| `show_tax_info` | `checkbox` (on/off) | Tax information |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `width` | `select` (choice) | Width — options: `fit-content`, `100%` |
| `alignment` | `text_alignment` (alignment) | Alignment |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## product-card

**Product card** · Public block · file `blocks/product-card.liquid`

Theme-editor presets: `Product card`

Used by: `_card.liquid`

Accepts child blocks: `_product-card-group`, `text`, `image`, `price`, `review`, `sku`, `swatches`, `_product-card-gallery`, `product-title`, `custom-liquid`, `@app`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `product` | `product` (product) | Product |
| `product_card_gap` | `range` (slider) | Vertical gap |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Desktop width — options: `fit-content`, `fill`, `custom` |
| `custom_width` | `range` (slider) | Custom width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `fill`, `custom` |
| `custom_width_mobile` | `range` (slider) | Custom width |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## product-custom-property

**Special instructions** · Public block · file `blocks/product-custom-property.liquid`

Theme-editor presets: `Special instructions`

Used by: `_product-details.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `property_heading` | `text` (text) | Heading |
| `property_description` | `text` (text) | Description |
| `property_key` | `text` (text) | Property name. Cannot be blank and must be unique for each block. Shows in cart, checkout, and order details. |

**Buyer input**

| Setting | Type | What it controls |
|---|---|---|
| `input_type` | `select` (choice) | Input type — options: `text`, `checkbox` |
| `max_length` | `range` (slider) | Max characters |
| `checkbox_label` | `text` (text) | Checkbox label |
| `required` | `checkbox` (on/off) | Input required to add item to cart |
| `placeholder` | `text` (text) | Placeholder text |
| `placeholder_textarea` | `textarea` (multi-line text) | Placeholder text |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## product-description

**Text** · Public block · file `blocks/product-description.liquid`

Theme-editor presets: `Description`

Used by: `_product-details.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `text` | `richtext` (rich text) | Text |

**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `100%` |
| `max_width` | `select` (choice) | Max width — options: `narrow`, `normal`, `none` |
| `alignment` | `text_alignment` (alignment) | Alignment |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: `rte`, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |
| `wrap` | `select` (choice) | Wrap — options: `pretty`, `balance`, `nowrap` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |
| `background` | `checkbox` (on/off) | Background |
| `background_color` | `color` (color) | Background color |
| `corner_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## product-inventory

**Product inventory** · Public block · file `blocks/product-inventory.liquid`

Theme-editor presets: `Product inventory`

Used by: `_product-details.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `inventory_threshold` | `range` (slider) | Low stock threshold |
| `show_inventory_quantity` | `checkbox` (on/off) | Show low stock quantity |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## product-recommendations

**Recommended products** · Public block · file `blocks/product-recommendations.liquid`

Theme-editor presets: `Recommended products`

Used by: `_product-details.liquid`, `product.json`

Accepts child blocks: `@theme`, `@app`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `recommendation_type` | `select` (choice) | Type — options: `related`, `complementary` |

**Cards layout**

| Setting | Type | What it controls |
|---|---|---|
| `layout_type` | `select` (choice) | Style — options: `grid`, `carousel` |
| `carousel_on_mobile` | `checkbox` (on/off) | Carousel on mobile |
| `max_products` | `range` (slider) | Product count |
| `columns_gap` | `range` (slider) | Horizontal gap |
| `rows_gap` | `range` (slider) | Vertical gap |

**Carousel navigation**

| Setting | Type | What it controls |
|---|---|---|
| `icons_style` | `select` (choice) | Icon — options: `arrow`, `chevron`, `arrows_large`, `chevron_large`, `none` |
| `icons_shape` | `select` (choice) | Icon background — options: `none`, `circle`, `square` |

**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `gap` | `range` (slider) | Gap |
| `border_radius` | `range` (slider) | Corner radius |
| `background_color` | `color` (color) | Background color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## product-title

**Product title** · Public block · file `blocks/product-title.liquid`

Theme-editor presets: `Title`

Used by: `404.json`, `_featured-product.liquid`, `_product-card-group.liquid`, `_product-card.liquid`, `cart.json`, `collection.json`, `featured-product-information.liquid`, `featured-product.liquid`, `index.json`, `product-card.liquid`, `product-list.liquid`, `product-recommendations.liquid`, `product.json`, `search.json`

**Settings**


**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `100%` |
| `max_width` | `select` (choice) | Max width — options: `narrow`, `normal`, `none` |
| `alignment` | `text_alignment` (alignment) | Alignment |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: `rte`, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |
| `wrap` | `select` (choice) | Wrap — options: `pretty`, `balance`, `nowrap` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |
| `background` | `checkbox` (on/off) | Background |
| `background_color` | `color` (color) | Background color |
| `corner_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## quantity

**Quantity** · Public block · file `blocks/quantity.liquid`

Theme-editor presets: `Quantity`

Used by: `buy-buttons.liquid`, `featured-product-information.liquid`, `product.json`

**Settings**


**Input**

| Setting | Type | What it controls |
|---|---|---|
| `input_style` | `select` (choice) | Style — options: `default`, `custom`. Edit input field in theme settings |
| `input_background_color` | `color` (color) | Background |
| `input_text_color` | `color` (color) | Text |
| `input_border_color` | `color` (color) | Borders |
| `border_width` | `range` (slider) | Border thickness |
| `border_radius` | `range` (slider) | Corner radius |

## review

**Review stars** · Public block · file `blocks/review.liquid`

Theme-editor presets: `Review stars`

Used by: `_product-card-group.liquid`, `_product-card.liquid`, `_product-details.liquid`, `featured-product-information.liquid`, `product-card.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `stars_style` | `select` (choice) | Style — options: `outline`, `shaded`, `single` |
| `show_number` | `checkbox` (on/off) | Review count |
| `text_color` | `color` (color) | Text color |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6` |
| `width` | `select` (choice) | Width — options: `fit-content`, `100%` |
| `alignment` | `text_alignment` (alignment) | Alignment |

## sku

**SKU** · Public block · file `blocks/sku.liquid`

Theme-editor presets: `SKU`

Used by: `_product-card-group.liquid`, `_product-card.liquid`, `product-card.liquid`

**Settings**


**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `width` | `select` (choice) | Width — options: `fit-content`, `100%` |
| `alignment` | `text_alignment` (alignment) | Alignment |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## social-links

**Social media links** · Public block · file `blocks/social-links.liquid`

Theme-editor presets: `Social media links`

Used by: `footer-group.json`, `footer-utilities.liquid`, `footer.liquid`

**Settings**


**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `icon_color` | `color` (color) | Color |

**Links**

| Setting | Type | What it controls |
|---|---|---|
| `facebook_url` | `url` (link) | Facebook |
| `instagram_url` | `url` (link) | Instagram |
| `youtube_url` | `url` (link) | YouTube |
| `tiktok_url` | `url` (link) | TikTok |
| `twitter_url` | `url` (link) | X (Twitter) |
| `threads_url` | `url` (link) | Threads |
| `linkedin_url` | `url` (link) | LinkedIn |
| `bluesky_url` | `url` (link) | Bluesky |
| `snapchat_url` | `url` (link) | Snapchat |
| `pinterest_url` | `url` (link) | Pinterest |
| `tumblr_url` | `url` (link) | Tumblr |
| `vimeo_url` | `url` (link) | Vimeo |
| `custom_url` | `url` (link) | Custom link |

## spacer

**Spacer** · Public block · file `blocks/spacer.liquid`

Theme-editor presets: `Spacer`

Used by: `_collection-card.liquid`, `_content-without-appearance.liquid`, `_product-details.liquid`, `_product-list-content.liquid`, `collection-card.liquid`, `collection-list.liquid`, `hero.liquid`, `main-blog.liquid`, `main-cart.liquid`, `main-collection-list.liquid`, `product-recommendations.liquid`, `section.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `size` | `select` (choice) | Unit — options: `pixel`, `percent` |
| `percent_size` | `range` (slider) | Size |
| `pixel_size` | `range` (slider) | Size |
| `custom_mobile_size` | `checkbox` (on/off) | Custom mobile size |

**Mobile size**

| Setting | Type | What it controls |
|---|---|---|
| `size_mobile` | `select` (choice) | Unit — options: `pixel`, `percent` |
| `percent_size_mobile` | `range` (slider) | Size |
| `pixel_size_mobile` | `range` (slider) | Size |

## swatches

**Swatches** · Public block · file `blocks/swatches.liquid`

Theme-editor presets: `Swatches`

Used by: `_featured-product.liquid`, `_product-card-group.liquid`, `_product-card.liquid`, `collection.json`, `featured-product.liquid`, `product-card.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `product_swatches_alignment` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `product_swatches_alignment_mobile` | `select` (choice) | Mobile alignment — options: `flex-start`, `center`, `flex-end` |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `hide_padding` | `checkbox` (on/off) | Hide padding |
| `product_swatches_padding_top` | `range` (slider) | Top |
| `product_swatches_padding_bottom` | `range` (slider) | Bottom |
| `product_swatches_padding_left` | `range` (slider) | Left |
| `product_swatches_padding_right` | `range` (slider) | Right |

## text

**Text** · Public block · file `blocks/text.liquid`

Theme-editor presets: `Text`, `Heading`

Used by: `404.json`, `_accordion-row.liquid`, `_card.liquid`, `_collection-card.liquid`, `_content-without-appearance.liquid`, `_inline-text.liquid`, `_layered-slide.liquid`, `_marquee.liquid`, `_product-card-group.liquid`, `_product-card.liquid`, `_product-details.liquid`, `_product-list-button.liquid`, `_product-list-content.liquid`, `_slide.liquid`, `accordion.liquid`, `article.json`, `blog.json`, `button.liquid`, `carousel.liquid`, `collection-card.liquid`, `collection-list.liquid`, `collection.json`, `comparison-slider.liquid`, `contact-form-submit-button.liquid`, `disclosures.liquid`, `email-signup.liquid`, `footer-group.json`, `footer.liquid`, `group.liquid`, `hero.liquid`, `index.json`, `layered-slideshow.liquid`, `list-collections.json`, `main-blog.liquid`, `main-cart.liquid`, `main-collection-list.liquid`, `marquee.liquid`, `media-with-content.liquid`, `menu.liquid`, `page.contact.json`, `page.json`, `password.json`, `popup-link.liquid`, `product-card.liquid`, `product-custom-property.liquid`, `product-hotspots.liquid`, `product-recommendations.liquid`, `product.json`, `section.liquid`, `slideshow.liquid`, `video.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `text` | `richtext` (rich text) | Text |

**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `100%` |
| `max_width` | `select` (choice) | Max width — options: `narrow`, `normal`, `none` |
| `alignment` | `text_alignment` (alignment) | Alignment |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: `rte`, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |
| `wrap` | `select` (choice) | Wrap — options: `pretty`, `balance`, `nowrap` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |
| `background` | `checkbox` (on/off) | Background |
| `background_color` | `color` (color) | Background color |
| `corner_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## variant-picker

**Variant picker** · Public block · file `blocks/variant-picker.liquid`

Theme-editor presets: `Variant picker`

Used by: `_product-details.liquid`, `featured-product-information.liquid`, `product.json`

**Settings**


**Type**

| Setting | Type | What it controls |
|---|---|---|
| `variant_style` | `select` (choice) | Style — options: `dropdowns`, `buttons` |
| `show_swatches` | `checkbox` (on/off) | Swatches |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `option_label_text_color` | `color` (color) | Text color |
| `variant_style_class` | `select` (choice) | Variant style — options: `default`, `custom`. Edit variant styling in theme settings |
| `custom_variant_background` | `color` (color) | Background |
| `custom_variant_text` | `color` (color) | Text |
| `custom_variant_border` | `color` (color) | Borders |
| `selected_variant_style_class` | `select` (choice) | Selected variant style — options: `default`, `custom` |
| `custom_selected_variant_background` | `color` (color) | Background |
| `custom_selected_variant_text` | `color` (color) | Text |
| `custom_selected_variant_border` | `color` (color) | Borders |
| `alignment` | `text_alignment` (alignment) | Alignment |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## video

**Video** · Public block · file `blocks/video.liquid`

Theme-editor presets: `Video`

Used by: `_blocks.liquid`, `_card.liquid`, `_content-without-appearance.liquid`, `_layered-slide.liquid`, `_media-without-appearance.liquid`, `_product-card-group.liquid`, `_product-details.liquid`, `_product-list-content.liquid`, `_slide.liquid`, `collection-list.liquid`, `group.liquid`, `hero.liquid`, `main-blog.liquid`, `main-cart.liquid`, `main-collection-list.liquid`, `password.liquid`, `product-recommendations.liquid`, `section.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `source` | `select` (choice) | Source — options: `uploaded`, `url` |
| `video` | `video` (video) | Video |
| `video_url` | `video_url` | URL. Use a YouTube or Vimeo URL |
| `video_autoplay` | `checkbox` (on/off) | Autoplay. Videos will be muted by default |
| `video_loop` | `checkbox` (on/off) | Loop video |
| `cover_image` | `image_picker` (image) | Cover image |
| `alt` | `text` (text) | Alt text. Describe the video for assistive tech users |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `custom_width` | `range` (slider) | Width |
| `custom_width_mobile` | `range` (slider) | Mobile width |
| `aspect_ratio` | `select` (choice) | Aspect ratio — options: `auto`, `9/16`, `1/1`, `16/9` |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _accordion-row

**Accordion row** · Private block · file `blocks/_accordion-row.liquid`

Theme-editor presets: `Accordion row`

Used by: `_product-details.liquid`, `accordion.liquid`, `section.liquid`

Accepts child blocks: `@theme`, `@app`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `heading` | `text` (text) | Heading |
| `open_by_default` | `checkbox` (on/off) | Open row by default |

**Icon**

| Setting | Type | What it controls |
|---|---|---|
| `icon` | `select` (choice) | Icon — options: `none`, `apple`, `arrow`, `banana`, `bottle`, `box`, `carrot`, `chat_bubble`, `check_box`, `clipboard`, `dairy`, `dairy_free`, `dryer`, `eye`, `fire`, `gluten_free`, `heart`, `iron`, `leaf`, `leather`, `lightning_bolt`, `lipstick`, `lock`, `map_pin`, `nut_free`, `pants`, `paw_print`, `pepper`, `perfume`, `plane`, `plant`, `price_tag`, `question_mark`, `recycle`, `return`, `ruler`, `serving_dish`, `shirt`, `shoe`, `silhouette`, `bluesky`, `facebook`, `instagram`, `linkedin`, `pinterest`, `snapchat`, `spotify`, `threads`, `tiktok`, `tumblr`, `twitter`, `vimeo`, `youtube`, `whatsapp`, `snowflake`, `star`, `stopwatch`, `truck`, `washing` |
| `image_upload` | `image_picker` (image) | Image icon |
| `width` | `range` (slider) | Width |

## _announcement

**Announcement** · Private block · file `blocks/_announcement.liquid`

Theme-editor presets: `Announcement`

Used by: `header-announcements.liquid`, `header-group.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `text` | `inline_richtext` (rich text) | Text |
| `link` | `url` (link) | Link |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `weight` | `select` (choice) | Weight — options: ``, `100`, `300`, `400`, `500`, `600`, `700`, `900` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |

## _blog-post-card

**Blog post** · Private block · file `blocks/_blog-post-card.liquid`

Used by: `blog.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `alignment` | `text_alignment` (alignment) | Alignment |
| `background_color` | `color` (color) | Background color |

## _blog-post-content

**Content** · Private block · file `blocks/_blog-post-content.liquid`

Theme-editor presets: `Content`

Used by: `article.json`, `main-blog-post.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |

## _blog-post-description

**Description** · Private block · file `blocks/_blog-post-description.liquid`

Theme-editor presets: `Description`

Used by: `featured-blog-posts.liquid`

**Settings**


**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: `rte`, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |
| `wrap` | `select` (choice) | Wrap — options: `pretty`, `balance`, `nowrap` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _blog-post-featured-image

**Featured image** · Private block · file `blocks/_blog-post-featured-image.liquid`

Theme-editor presets: `Featured image`

Used by: `article.json`, `main-blog-post.liquid`

**Settings**


**Size**

| Setting | Type | What it controls |
|---|---|---|
| `image_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `portrait`, `square`, `landscape` |
| `width` | `select` (choice) | Desktop width — options: `fit-content`, `fill`, `custom` |
| `custom_width` | `range` (slider) | Custom width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `fill`, `custom` |
| `custom_width_mobile` | `range` (slider) | Custom width |
| `height` | `select` (choice) | Height — options: `fit`, `fill` |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _blog-post-image

**Image** · Private block · file `blocks/_blog-post-image.liquid`

Used by: `blog.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `height` | `select` (choice) | Height — options: `small`, `medium`, `large` |
| `border` | `select` (choice) | Border — options: `none`, `solid` |
| `border_width` | `range` (slider) | Border thickness |
| `border_opacity` | `range` (slider) | Border opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

## _blog-post-info-text

**Details** · Private block · file `blocks/_blog-post-info-text.liquid`

Theme-editor presets: `Details`

Used by: `article.json`, `blog.json`, `featured-blog-posts.liquid`, `main-blog-post.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `show_date` | `checkbox` (on/off) | Date |
| `show_author` | `checkbox` (on/off) | Author |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Edit presets in theme settings |
| `alignment` | `text_alignment` (alignment) | Alignment |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |
| `show_alignment` | `checkbox` (on/off) | Show alignment |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _blog-post-title

**Title** · Private block · file `blocks/_blog-post-title.liquid`

Theme-editor presets: `Title`

Used by: `main-blog-post.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `text` | `richtext` (rich text) | Text |

**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `100%` |
| `max_width` | `select` (choice) | Max width — options: `narrow`, `normal`, `none` |
| `alignment` | `text_alignment` (alignment) | Alignment |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: `rte`, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |
| `wrap` | `select` (choice) | Wrap — options: `pretty`, `balance`, `nowrap` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |
| `background` | `checkbox` (on/off) | Background |
| `background_color` | `color` (color) | Background color |
| `corner_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _card

**Card** · Private block · file `blocks/_card.liquid`

Theme-editor presets: `Card`

Used by: `_carousel-content.liquid`, `carousel.liquid`

Accepts child blocks: `text`, `_heading`, `image`, `video`, `product-card`, `collection-card`, `@theme`, `@app`

**Settings**


**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `content_direction` | `select` (choice) | Direction — options: `column`, `row` |
| `vertical_on_mobile` | `checkbox` (on/off) | Vertical on mobile |
| `horizontal_alignment` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `vertical_alignment` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end` |
| `align_baseline` | `checkbox` (on/off) | Align text baseline |
| `horizontal_alignment_flex_direction_column` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `vertical_alignment_flex_direction_column` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `gap` | `range` (slider) | Gap |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_media` | `select` (choice) | Background media — options: `none`, `image`, `video` |
| `background_color` | `color` (color) | Background color |
| `video` | `video` (video) | Video |
| `video_position` | `select` (choice) | Video position — options: `cover`, `contain` |
| `background_image` | `image_picker` (image) | Image |
| `background_image_position` | `select` (choice) | Image position — options: `cover`, `fit` |
| `aspect_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `portrait`, `square`, `landscape` |
| `toggle_overlay` | `checkbox` (on/off) | Media overlay |
| `overlay_color` | `color` (color) | Overlay color |
| `overlay_style` | `select` (choice) | Overlay style — options: `solid`, `gradient` |
| `gradient_direction` | `select` (choice) | Gradient direction — options: `to top`, `to bottom` |

**Block link**

| Setting | Type | What it controls |
|---|---|---|
| `link` | `url` (link) | Link |
| `open_in_new_tab` | `checkbox` (on/off) | Open link in new tab |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _carousel-content

**Carousel content** · Private block · file `blocks/_carousel-content.liquid`

Theme-editor presets: `Carousel content`

Used by: `carousel.liquid`

Accepts child blocks: `_card`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |
| `height` | `select` (choice) | Card height — options: `fit`, `fill` |
| `position` | `select` (choice) | Position — options: `top`, `center`, `bottom` |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _cart-products

**Cart products** · Private block · file `blocks/_cart-products.liquid`

Theme-editor presets: `Cart items`

Used by: `cart.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `gap` | `range` (slider) | Gap |
| `image_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `portrait`, `square` |
| `dividers` | `checkbox` (on/off) | Dividers |
| `vendor` | `checkbox` (on/off) | Vendor |

**Input**

| Setting | Type | What it controls |
|---|---|---|
| `input_style` | `select` (choice) | Style — options: `default`, `custom`. Edit input field in theme settings |
| `input_background_color` | `color` (color) | Background |
| `input_text_color` | `color` (color) | Text |
| `input_border_color` | `color` (color) | Borders |
| `border_width` | `range` (slider) | Border thickness |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _cart-summary

**Summary** · Private block · file `blocks/_cart-summary.liquid`

Theme-editor presets: `Summary`

Used by: `cart.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `extend_summary` | `checkbox` (on/off) | Extend to screen edge |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |
| `text_color` | `color` (color) | Text color |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

## _cart-title

**Title** · Private block · file `blocks/_cart-title.liquid`

Theme-editor presets: `Title`

Used by: `cart.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `title` | `inline_richtext` (rich text) | Cart |
| `show_count` | `checkbox` (on/off) | Cart count |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Edit presets in theme settings |
| `alignment` | `text_alignment` (alignment) | Alignment |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _collection-card

**Collection card** · Private block · file `blocks/_collection-card.liquid`

Used by: `collection-list.liquid`, `list-collections.json`, `main-collection-list.liquid`

Accepts child blocks: `text`, `spacer`, `button`, `group`, `collection-title`

**Settings**


**Text**

| Setting | Type | What it controls |
|---|---|---|
| `placement` | `select` (choice) | Placement — options: `on_image`, `below_image` |
| `horizontal_alignment` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `vertical_alignment` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end` |
| `collection_card_gap` | `range` (slider) | Vertical gap |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

## _collection-card-image

**Image** · Private block · file `blocks/_collection-card-image.liquid`

Used by: `_collection-card.liquid`, `collection-card.liquid`, `collection-list.liquid`, `list-collections.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `image_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `portrait`, `square`, `landscape`. Adjusted in some layouts |
| `toggle_overlay` | `checkbox` (on/off) | Media overlay |
| `overlay_color` | `color` (color) | Overlay color |
| `overlay_style` | `select` (choice) | Overlay style — options: `solid`, `gradient` |
| `gradient_direction` | `select` (choice) | Gradient direction — options: `to top`, `to bottom` |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

## _collection-image

**Collection image** · Private block · file `blocks/_collection-image.liquid`

Theme-editor presets: `Collection image`

Used by: **no references found in the theme.** As a private block it cannot be added by merchants, so it is currently unreachable.

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `collection` | `collection` (collection) | Collection |
| `image_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `portrait`, `square`, `custom` |
| `collection_image_width` | `range` (slider) | Width |
| `collection_image_height` | `range` (slider) | Height |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _collection-info

**Collection info** · Private block · file `blocks/_collection-info.liquid`

Theme-editor presets: `Collection info`

Used by: **no references found in the theme.** As a private block it cannot be added by merchants, so it is currently unreachable.

Accepts child blocks: `@theme`, `@app`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `placement` | `select` (choice) | Placement — options: `above-carousel`, `next-to-carousel` |
| `background_color` | `color` (color) | Background color |

**Arrows**

| Setting | Type | What it controls |
|---|---|---|
| `navigation` | `select` (choice) | Navigation — options: `above-carousel`, `inside-carousel` |
| `icons_style` | `select` (choice) | Icons — options: `arrows`, `chevron`, `arrows_large`, `chevron_large`, `none` |
| `background_style` | `select` (choice) | Background — options: `none`, `circle`, `square` |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _collection-link

**Collection** · Private block · file `blocks/_collection-link.liquid`

Used by: `collection-links.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `show_count` | `checkbox` (on/off) | Show count |

## _content

**Content** · Private block · file `blocks/_content.liquid`

Theme-editor presets: `Group`

Used by: **no references found in the theme.** As a private block it cannot be added by merchants, so it is currently unreachable.

Accepts child blocks: `@theme`, `@app`, `_divider`

**Settings**


**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `horizontal_alignment_flex_direction_column` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `vertical_alignment_flex_direction_column` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `gap` | `range` (slider) | Gap |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _content-without-appearance

**Content** · Private block · file `blocks/_content-without-appearance.liquid`

Theme-editor presets: `Group`

Used by: `media-with-content.liquid`

Accepts child blocks: `@theme`, `@app`, `text`, `icon`, `image`, `button`, `video`, `group`, `spacer`, `_divider`

**Settings**


**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `horizontal_alignment_flex_direction_column` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `vertical_alignment_flex_direction_column` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `gap` | `range` (slider) | Gap |

## _divider

**Divider** · Private block · file `blocks/_divider.liquid`

Theme-editor presets: `Divider`

Used by: `_blocks.liquid`, `_content-without-appearance.liquid`, `_content.liquid`, `_marquee.liquid`, `_product-details.liquid`, `_product-list-content.liquid`, `collection-list.liquid`, `footer.liquid`, `group.liquid`, `main-404.liquid`, `main-blog.liquid`, `main-collection-list.liquid`, `main-page.liquid`, `marquee.liquid`, `password.liquid`, `product-list.liquid`, `product-recommendations.liquid`, `product.json`, `section.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `thickness` | `range` (slider) | Thickness |
| `corner_radius` | `select` (choice) | Corner radius — options: `square`, `rounded` |
| `divider_color` | `color` (color) | Color |
| `width_percent` | `range` (slider) | Length |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |

## _featured-blog-posts-card

**Blog card** · Private block · file `blocks/_featured-blog-posts-card.liquid`

Used by: `featured-blog-posts.liquid`

**Settings**


**Text**

| Setting | Type | What it controls |
|---|---|---|
| `alignment` | `select` (choice) | Alignment — options: `left`, `center`, `right` |
| `gap` | `range` (slider) | Vertical gap |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |
| `border` | `select` (choice) | Borders — options: `none`, `solid` |
| `border_width` | `range` (slider) | Border thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _featured-blog-posts-image

**Image** · Private block · file `blocks/_featured-blog-posts-image.liquid`

Used by: `featured-blog-posts.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `image_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `portrait`, `square`, `landscape`. Adjusted in some layouts |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

## _featured-blog-posts-title

**Title** · Private block · file `blocks/_featured-blog-posts-title.liquid`

Used by: `featured-blog-posts.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `text` | `richtext` (rich text) | Text |

**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `100%` |
| `max_width` | `select` (choice) | Max width — options: `narrow`, `normal`, `none` |
| `alignment` | `text_alignment` (alignment) | Alignment |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: `rte`, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |
| `wrap` | `select` (choice) | Wrap — options: `pretty`, `balance`, `nowrap` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background` | `checkbox` (on/off) | Background |
| `background_color` | `color` (color) | Background color |
| `corner_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _featured-product

**Product** · Private block · file `blocks/_featured-product.liquid`

Used by: `featured-product.liquid`

_No settings._

## _featured-product-gallery

**Product media** · Private block · file `blocks/_featured-product-gallery.liquid`

Used by: `_featured-product.liquid`, `featured-product.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `image_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `portrait`, `square`, `landscape` |
| `constrain_to_viewport` | `select` (choice) | Constrain to screen height — options: ``, `contain`, `cover` |

## _featured-product-information-carousel

**Product media** · Private block · file `blocks/_featured-product-information-carousel.liquid`

Theme-editor presets: `Product media`

Used by: `featured-product-information.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `aspect_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `1/1.25`, `1`, `2/1` |
| `constrain_to_viewport` | `checkbox` (on/off) | Constrain to screen height |
| `media_fit` | `select` (choice) | Media fit — options: `cover`, `contain` |
| `media_radius` | `range` (slider) | Corner radius |
| `extend_media` | `checkbox` (on/off) | Extend media to screen edge |
| `zoom` | `checkbox` (on/off) | Enable zoom |
| `video_loop` | `checkbox` (on/off) | Video looping |
| `hide_variants` | `checkbox` (on/off) | Hide unselected variant media |

**Carousel**

| Setting | Type | What it controls |
|---|---|---|
| `icons_style` | `select` (choice) | Icons — options: `arrow`, `chevron`, `arrows_large`, `chevron_large` |
| `slideshow_controls_style` | `select` (choice) | Pagination — options: `dots`, `counter`, `thumbnails` |
| `slideshow_mobile_controls_style` | `select` (choice) | Mobile pagination — options: `dots`, `counter`, `hint`, `thumbnails` |

**Thumbnails**

| Setting | Type | What it controls |
|---|---|---|
| `thumbnail_position` | `select` (choice) | Desktop position — options: `left`, `bottom`, `right` |
| `thumbnail_width` | `range` (slider) | Desktop width |
| `thumbnail_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _featured-product-price

**Price** · Private block · file `blocks/_featured-product-price.liquid`

Used by: `_featured-product.liquid`, `featured-product.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `show_sale_price_first` | `checkbox` (on/off) | Show sale price first |
| `type_preset` | `select` (choice) | Text preset — options: ``, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`. Edit presets in theme settings |

## _footer-social-icons

**Social media links** · Private block · file `blocks/_footer-social-icons.liquid`

Used by: **no references found in the theme.** As a private block it cannot be added by merchants, so it is currently unreachable.

Accepts child blocks: `_social-link`

_No settings._

## _header-logo

**Logo** · Private block · file `blocks/_header-logo.liquid`

Used by: `header-group.json`, `header.liquid`

**Settings**


**Visibility**

| Setting | Type | What it controls |
|---|---|---|
| `hide_logo_on_home_page` | `checkbox` (on/off) | Hide logo on home page. Logo will remain visible when sticky header is active |

**Desktop padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |

## _header-menu

**Menu** · Private block · file `blocks/_header-menu.liquid`

Used by: `header-group.json`, `header.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `menu` | `link_list` (menu) | Menu |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |
| `text_color` | `color` (color) | Text color |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_font_primary_size` | `select` (choice) | Top level size — options: `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem` |
| `menu_font_style` | `select` (choice) | Submenu size — options: `regular`, `inverse`, `inverse_large` |
| `type_font_primary_link` | `select` (choice) | Font — options: `body`, `subheading`, `heading`, `accent` |
| `type_case_primary_link` | `select` (choice) | Case — options: `none`, `uppercase` |

**Submenu feature**

| Setting | Type | What it controls |
|---|---|---|
| `menu_style` | `select` (choice) | Media type — options: `text`, `collection_images`, `featured_products`, `featured_collections`. Features are populated from your menu links |
| `featured_products_aspect_ratio` | `select` (choice) | Image ratio — options: `adapt`, `4 / 5`, `1 / 1` |
| `featured_collections_aspect_ratio` | `select` (choice) | Image ratio — options: `adapt`, `16 / 9`, `1 / 1` |
| `image_border_radius` | `range` (slider) | Image corner radius |

**Mobile layout**

| Setting | Type | What it controls |
|---|---|---|
| `navigation_bar` | `checkbox` (on/off) | Navigation bar |
| `background_color_navigation_bar` | `color` (color) | Navigation bar background color |
| `text_color_navigation_bar` | `color` (color) | Navigation bar text color |
| `drawer_accordion` | `checkbox` (on/off) | Accordion |
| `drawer_accordion_expand_first` | `checkbox` (on/off) | Expand first group |
| `drawer_dividers` | `checkbox` (on/off) | Dividers |

## _heading

**Heading** · Private block · file `blocks/_heading.liquid`

Used by: `_card.liquid`, `_layered-slide.liquid`, `_slide.liquid`, `blog.json`, `featured-blog-posts.liquid`, `search.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: `rte`, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |
| `wrap` | `select` (choice) | Wrap — options: `pretty`, `balance`, `nowrap` |
| `text` | `richtext` (rich text) | Text |
| `read_only` | `checkbox` (on/off) | Read only |
| `alignment` | `text_alignment` (alignment) | Alignment |
| `show_alignment` | `checkbox` (on/off) | Show alignment |
| `text_color` | `color` (color) | Text color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _hotspot-product

**Hotspot** · Private block · file `blocks/_hotspot-product.liquid`

Theme-editor presets: `Hotspot`

Used by: `product-hotspots.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `product` | `product` (product) | Product |
| `x-position` | `range` (slider) | Horizontal position |
| `y-position` | `range` (slider) | Vertical position |

## _image

**Image** · Private block · file `blocks/_image.liquid`

Used by: `_collection-link.liquid`, `collection-links.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `height` | `select` (choice) | Height — options: `small`, `medium`, `large` |
| `ratio` | `select` (choice) | Ratio — options: `portrait`, `square`, `landscape` |
| `border_radius` | `range` (slider) | Corner radius |

## _inline-collection-title

**Collection title** · Private block · file `blocks/_inline-collection-title.liquid`

Used by: `_collection-link.liquid`, `collection-links.liquid`

**Settings**


**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `weight` | `select` (choice) | Weight — options: ``, `100`, `300`, `400`, `500`, `600`, `700`, `900` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |

## _inline-text

**Text** · Private block · file `blocks/_inline-text.liquid`

Used by: **no references found in the theme.** As a private block it cannot be added by merchants, so it is currently unreachable.

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `text` | `text` (text) | Text |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `weight` | `select` (choice) | Weight — options: ``, `100`, `300`, `400`, `500`, `600`, `700`, `900` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |

## _layered-slide

**Slide** · Private block · file `blocks/_layered-slide.liquid`

Theme-editor presets: `Slide`

Used by: `layered-slideshow.liquid`

Accepts child blocks: `_heading`, `button`, `text`, `group`, `image`, `video`, `icon`, `jumbo-text`, `@theme`, `@app`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `media_type_1` | `select` (choice) | Media type — options: `image`, `video` |
| `image_1` | `image_picker` (image) | Image |
| `video_1` | `video` (video) | Video |

**Content layout**

| Setting | Type | What it controls |
|---|---|---|
| `content_direction` | `select` (choice) | Direction — options: `column`, `row` |
| `vertical_on_mobile` | `checkbox` (on/off) | Vertical on mobile |
| `horizontal_alignment` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `vertical_alignment` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end` |
| `align_baseline` | `checkbox` (on/off) | Align text baseline |
| `horizontal_alignment_flex_direction_column` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `vertical_alignment_flex_direction_column` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `gap` | `range` (slider) | Gap |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |
| `toggle_overlay` | `checkbox` (on/off) | Media overlay |
| `overlay_color` | `color` (color) | Overlay color |
| `overlay_style` | `select` (choice) | Overlay style — options: `solid`, `gradient` |
| `gradient_direction` | `select` (choice) | Gradient direction — options: `to top`, `to bottom` |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _marquee

**Marquee** · Private block · file `blocks/_marquee.liquid`

Theme-editor presets: `Marquee`

Used by: `hero.liquid`

Accepts child blocks: `text`, `icon`, `_divider`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `movement_direction` | `select` (choice) | Motion direction — options: `reverse`, `normal` |
| `background_color` | `color` (color) | Background color |
| `transparent_background` | `checkbox` (on/off) | Transparent background |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `gap_between_elements` | `range` (slider) | Gap |

## _media-without-appearance

**Media** · Private block · file `blocks/_media-without-appearance.liquid`

Theme-editor presets: `Media`

Used by: `featured-product.liquid`, `media-with-content.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `media_type` | `select` (choice) | Type — options: `image`, `video` |
| `image` | `image_picker` (image) | Image |
| `link` | `url` (link) | Link |
| `video` | `video` (video) | Video |
| `video_loop` | `checkbox` (on/off) | Loop |
| `video_autoplay` | `checkbox` (on/off) | Autoplay |
| `image_position` | `select` (choice) | Image position — options: `cover`, `contain ` |
| `video_position` | `select` (choice) | Video position — options: `cover`, `contain` |

## _product-card

**Product card** · Private block · file `blocks/_product-card.liquid`

Used by: `404.json`, `cart.json`, `collection.json`, `index.json`, `main-collection.liquid`, `product-list.liquid`, `product-recommendations.liquid`, `product.json`, `search-results.liquid`, `search.json`

Accepts child blocks: `_product-card-group`, `text`, `image`, `buy-buttons`, `price`, `review`, `sku`, `swatches`, `_product-card-gallery`, `product-title`, `custom-liquid`, `@app`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `product_card_gap` | `range` (slider) | Vertical gap |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _product-card-gallery

**Product image** · Private block · file `blocks/_product-card-gallery.liquid`

Theme-editor presets: `Media`

Used by: `404.json`, `_product-card.liquid`, `cart.json`, `collection.json`, `index.json`, `product-card.liquid`, `product-list.liquid`, `product-recommendations.liquid`, `product.json`, `search.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `image_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `portrait`, `square`, `landscape`. Adjusted in some layouts |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _product-card-group

**Group** · Private block · file `blocks/_product-card-group.liquid`

Theme-editor presets: `Group`

Used by: `_product-card.liquid`, `product-card.liquid`

Accepts child blocks: `text`, `image`, `price`, `review`, `sku`, `swatches`, `_product-card-group`, `product-title`, `custom-liquid`, `@app`

**Settings**


**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `content_direction` | `select` (choice) | Direction — options: `column`, `row` |
| `vertical_on_mobile` | `checkbox` (on/off) | Vertical on mobile |
| `horizontal_alignment` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `vertical_alignment` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end` |
| `align_baseline` | `checkbox` (on/off) | Align text baseline |
| `horizontal_alignment_flex_direction_column` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `vertical_alignment_flex_direction_column` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `gap` | `range` (slider) | Gap |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `fill`, `custom` |
| `custom_width` | `range` (slider) | Custom width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `fill`, `custom` |
| `custom_width_mobile` | `range` (slider) | Custom width |
| `height` | `select` (choice) | Height — options: `fit`, `fill`, `custom` |
| `custom_height` | `range` (slider) | Custom height |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_media` | `select` (choice) | Background media — options: `none`, `image`, `video` |
| `background_color` | `color` (color) | Background color |
| `video` | `video` (video) | Video |
| `video_position` | `select` (choice) | Video position — options: `cover`, `contain` |
| `background_image` | `image_picker` (image) | Image |
| `background_image_position` | `select` (choice) | Image position — options: `cover`, `fit` |
| `toggle_overlay` | `checkbox` (on/off) | Background overlay |
| `overlay_color` | `color` (color) | Overlay color |
| `overlay_style` | `select` (choice) | Overlay style — options: `solid`, `gradient` |
| `gradient_direction` | `select` (choice) | Gradient direction — options: `to top`, `to bottom` |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Block link**

| Setting | Type | What it controls |
|---|---|---|
| `link` | `url` (link) | Link |
| `open_in_new_tab` | `checkbox` (on/off) | Open link in new tab |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _product-details

**Details** · Private block · file `blocks/_product-details.liquid`

Theme-editor presets: `Details`

Used by: `featured-product-information.liquid`, `product-information.liquid`, `product.json`

Accepts child blocks: `@theme`, `@app`, `text`, `icon`, `image`, `button`, `video`, `group`, `spacer`, `accordion`, `product-recommendations`, `price`, `variant-picker`, `buy-buttons`, `product-description`, `review`, `accelerated-checkout`, `_divider`, `product-inventory`, `product-custom-property`

**Settings**


**Size**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `fill`, `custom` |
| `custom_width` | `range` (slider) | Custom width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `fill`, `custom` |
| `custom_width_mobile` | `range` (slider) | Custom width |
| `height` | `select` (choice) | Height — options: `fit`, `fill` |

**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `details_position` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end` |
| `gap` | `range` (slider) | Gap |
| `sticky_details_desktop` | `checkbox` (on/off) | Sticky on desktop |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_media` | `select` (choice) | Background media — options: `none`, `image`, `video` |
| `background_color` | `color` (color) | Background color |
| `video` | `video` (video) | Video |
| `video_position` | `select` (choice) | Video position — options: `cover`, `contain` |
| `background_image` | `image_picker` (image) | Image |
| `background_image_position` | `select` (choice) | Image position — options: `cover`, `fit` |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _product-list-button

**View all button** · Private block · file `blocks/_product-list-button.liquid`

Theme-editor presets: `View all button`

Used by: `_product-list-content.liquid`, `cart.json`, `index.json`, `product-list.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `label` | `text` (text) | Label |
| `open_in_new_tab` | `checkbox` (on/off) | Open link in new tab |
| `style_class` | `select` (choice) | Style — options: `button`, `button-secondary`, `button-unstyled`, `button-custom`. Edit primary and secondary button styles in theme settings |

**Button colors**

| Setting | Type | What it controls |
|---|---|---|
| `custom_button_background` | `color` (color) | Background |
| `custom_button_text` | `color` (color) | Text |
| `custom_button_border` | `color` (color) | Borders |
| `link_text_color` | `color` (color) | Link text color |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Desktop width — options: `fit-content`, `custom` |
| `custom_width` | `range` (slider) | Custom width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `custom` |
| `custom_width_mobile` | `range` (slider) | Custom width |

## _product-list-content

**Header** · Private block · file `blocks/_product-list-content.liquid`

Theme-editor presets: `Group`

Used by: `404.json`, `cart.json`, `index.json`, `product-list.liquid`

Accepts child blocks: `@theme`, `@app`, `text`, `button`, `spacer`, `_divider`, `_product-list-text`, `_product-list-button`

**Settings**


**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `content_direction` | `select` (choice) | Direction — options: `column`, `row` |
| `vertical_on_mobile` | `checkbox` (on/off) | Vertical on mobile |
| `horizontal_alignment` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `vertical_alignment` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end` |
| `align_baseline` | `checkbox` (on/off) | Align text baseline |
| `horizontal_alignment_flex_direction_column` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `vertical_alignment_flex_direction_column` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `gap` | `range` (slider) | Gap |

**Size**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `fill`, `custom` |
| `custom_width` | `range` (slider) | Custom width |
| `width_mobile` | `select` (choice) | Mobile width — options: `fit-content`, `fill`, `custom` |
| `custom_width_mobile` | `range` (slider) | Custom width |
| `height` | `select` (choice) | Height — options: `fit`, `fill`, `custom` |
| `custom_height` | `range` (slider) | Custom height |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_media` | `select` (choice) | Background media — options: `none`, `image`, `video` |
| `background_color` | `color` (color) | Background color |
| `video` | `video` (video) | Video |
| `video_position` | `select` (choice) | Video position — options: `cover`, `contain` |
| `background_image` | `image_picker` (image) | Image |
| `background_image_position` | `select` (choice) | Image position — options: `cover`, `fit` |

**Borders**

| Setting | Type | What it controls |
|---|---|---|
| `border` | `select` (choice) | Style — options: `none`, `solid` |
| `border_width` | `range` (slider) | Thickness |
| `border_opacity` | `range` (slider) | Opacity |
| `border_color` | `color` (color) | Color |
| `border_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _product-list-text

**Collection title** · Private block · file `blocks/_product-list-text.liquid`

Theme-editor presets: `Collection title`

Used by: `_product-list-content.liquid`, `cart.json`, `index.json`, `product-list.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `text` | `richtext` (rich text) | Text |

**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fit-content`, `100%` |
| `max_width` | `select` (choice) | Max width — options: `narrow`, `normal`, `none` |
| `alignment` | `text_alignment` (alignment) | Alignment |

**Typography**

| Setting | Type | What it controls |
|---|---|---|
| `type_preset` | `select` (choice) | Preset — options: `rte`, `paragraph`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `custom`. Edit presets in theme settings |
| `font` | `select` (choice) | Font — options: `var(--font-body--family)`, `var(--font-subheading--family)`, `var(--font-heading--family)`, `var(--font-accent--family)` |
| `font_size` | `select` (choice) | Size — options: ``, `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem`, `1.25rem`, `1.5rem`, `2rem`, `2.5rem`, `3rem`, `3.5rem`, `4.5rem`, `5.5rem`, `7.5rem`, `9.5rem`, `11.5rem` |
| `line_height` | `select` (choice) | Line height — options: `tight`, `normal`, `loose` |
| `letter_spacing` | `select` (choice) | Letter spacing — options: `tight`, `normal`, `loose` |
| `case` | `select` (choice) | Case — options: `none`, `uppercase` |
| `wrap` | `select` (choice) | Wrap — options: `pretty`, `balance`, `nowrap` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `text_color` | `color` (color) | Text color |
| `background` | `checkbox` (on/off) | Background |
| `background_color` | `color` (color) | Background color |
| `corner_radius` | `range` (slider) | Corner radius |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _product-media-gallery

**Product media** · Private block · file `blocks/_product-media-gallery.liquid`

Theme-editor presets: `Product media`

Used by: `product-information.liquid`, `product.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `media_presentation` | `select` (choice) | Type — options: `grid`, `carousel`. Carousel is always used on mobile |

**Grid**

| Setting | Type | What it controls |
|---|---|---|
| `media_columns` | `select` (choice) | Columns — options: `one`, `two` |
| `image_gap` | `range` (slider) | Gap |
| `large_first_image` | `checkbox` (on/off) | Full width first image |

**Carousel**

| Setting | Type | What it controls |
|---|---|---|
| `icons_style` | `select` (choice) | Icons — options: `arrow`, `chevron`, `arrows_large`, `chevron_large` |
| `slideshow_controls_style` | `select` (choice) | Desktop pagination — options: `dots`, `counter`, `thumbnails` |
| `slideshow_mobile_controls_style` | `select` (choice) | Mobile pagination — options: `dots`, `counter`, `hint`, `thumbnails` |

**Thumbnails**

| Setting | Type | What it controls |
|---|---|---|
| `thumbnail_position` | `select` (choice) | Desktop position — options: `left`, `bottom`, `right` |
| `thumbnail_width` | `range` (slider) | Desktop width |
| `thumbnail_radius` | `range` (slider) | Corner radius |

**Media**

| Setting | Type | What it controls |
|---|---|---|
| `aspect_ratio` | `select` (choice) | Aspect ratio — options: `adapt`, `1/1.25`, `1`, `2/1` |
| `constrain_to_viewport` | `checkbox` (on/off) | Constrain to screen height |
| `media_fit` | `select` (choice) | Media fit — options: `cover`, `contain` |
| `media_radius` | `range` (slider) | Corner radius |
| `extend_media` | `checkbox` (on/off) | Extend media to screen edge |
| `zoom` | `checkbox` (on/off) | Enable zoom |
| `video_loop` | `checkbox` (on/off) | Video looping |
| `hide_variants` | `checkbox` (on/off) | Hide unselected variant media |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _search-input

**Search input** · Private block · file `blocks/_search-input.liquid`

Used by: `search.json`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `width` | `select` (choice) | Width — options: `fill`, `custom` |
| `custom_width` | `range` (slider) | Custom width |

**Input**

| Setting | Type | What it controls |
|---|---|---|
| `input_style` | `select` (choice) | Style — options: `default`, `custom`. Edit input field in theme settings |
| `input_background_color` | `color` (color) | Background |
| `input_text_color` | `color` (color) | Text |
| `input_border_color` | `color` (color) | Borders |
| `border_width` | `range` (slider) | Border thickness |
| `border_radius` | `range` (slider) | Corner radius |

## _slide

**Slide** · Private block · file `blocks/_slide.liquid`

Theme-editor presets: `Slide`

Used by: `slideshow.liquid`

Accepts child blocks: `_heading`, `button`, `text`, `group`, `image`, `video`, `icon`, `jumbo-text`, `@theme`, `@app`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `media_type_1` | `select` (choice) | Type — options: `image`, `video` |
| `image_1` | `image_picker` (image) | Image |
| `video_1` | `video` (video) | Video |

**Layout**

| Setting | Type | What it controls |
|---|---|---|
| `content_direction` | `select` (choice) | Direction — options: `column`, `row` |
| `vertical_on_mobile` | `checkbox` (on/off) | Vertical on mobile |
| `horizontal_alignment` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `vertical_alignment` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end` |
| `align_baseline` | `checkbox` (on/off) | Align text baseline |
| `horizontal_alignment_flex_direction_column` | `select` (choice) | Alignment — options: `flex-start`, `center`, `flex-end` |
| `vertical_alignment_flex_direction_column` | `select` (choice) | Position — options: `flex-start`, `center`, `flex-end`, `space-between` |
| `gap` | `range` (slider) | Gap |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `background_color` | `color` (color) | Background color |
| `toggle_overlay` | `checkbox` (on/off) | Media overlay |
| `overlay_color` | `color` (color) | Overlay color |
| `overlay_style` | `select` (choice) | Overlay style — options: `solid`, `gradient` |
| `gradient_direction` | `select` (choice) | Gradient direction — options: `to top`, `to bottom` |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
| `padding-inline-start` | `range` (slider) | Left |
| `padding-inline-end` | `range` (slider) | Right |

## _social-link

**Social link** · Private block · file `blocks/_social-link.liquid`

Theme-editor presets: `Social link`

Used by: `_footer-social-icons.liquid`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `link` | `url` (link) | Link |
| `icon_color` | `color` (color) | Color |
