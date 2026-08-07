# Global sections

The sections that appear on every page, defined by the theme's two section groups and rendered from `layout/theme.liquid`:

| Group file | Section | Type | Role |
|---|---|---|---|
| `sections/header-group.json` | Announcement bar | `header-announcements` | Rotating announcements above the header |
| `sections/header-group.json` | Header | `header` | Logo, menu, search, localization, cart |
| `sections/footer-group.json` | Footer | `footer` | Main footer block canvas |
| `sections/footer-group.json` | Policies and links | `footer-utilities` | Copyright, policy links, social icons |

One further section may be added to the footer group but is **not currently placed in it**:

| Group file | Section | Type | Role |
|---|---|---|---|
| _(available to `sections/footer-group.json`)_ | Toasts | `toasts` | Dismissible site-wide notifications — see [below](#toasts-toasts) |

Editing these in the theme editor changes them site-wide. Settings below are the section's own settings; the content inside each comes from blocks, documented in [Theme blocks](blocks.md).

---

## Announcement bar (`header-announcements`)

The rotating announcement strip above the header. Each announcement is an `_announcement` block; when more than one is present the section cycles through them on the interval set by `speed`.

File: `sections/header-announcements.liquid`

**Accepted blocks:** `_announcement`

**Currently placed in the group:** `_announcement`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `speed` | `range` (slider) | Time to next announcement |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `section_width` | `select` (choice) | Section width — options: `page-width`, `full-width` |
| `background_color` | `color` (color) | Background color |
| `divider_width` | `range` (slider) | Divider thickness |
| `divider_color` | `color` (color) | Divider color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |

## Header (`header`)

The site header — logo, main menu, search, localization, and cart. Its layout is expressed as two rows (`top` and `bottom`): most elements have a `*_position` setting (left/center/right) and a `*_row` setting choosing which row they sit in.

The header also carries the theme's **transparent header** behaviour, configured separately for the home, product, and collection pages. When enabled, the header overlays the first section instead of pushing it down, and the inverse-logo and transparent-text-color settings control legibility against that content.

File: `sections/header.liquid`

**Currently placed in the group:** `_header-logo`, `_header-menu`

**Settings**


**Logo**

| Setting | Type | What it controls |
|---|---|---|
| `logo_position` | `select` (choice) | Position — options: `left`, `center`, `right` |

**Menu**

| Setting | Type | What it controls |
|---|---|---|
| `menu_position` | `select` (choice) | Position — options: `left`, `center`, `right` |
| `menu_row` | `select` (choice) | Row — options: `top`, `bottom` |

**Customer account**

| Setting | Type | What it controls |
|---|---|---|
| `customer_account_menu` | `link_list` (menu) | Menu |

**Search**

| Setting | Type | What it controls |
|---|---|---|
| `show_search` | `checkbox` (on/off) | Search icon |
| `search_position` | `select` (choice) | Position — options: `left`, `right` |
| `search_row` | `select` (choice) | Row — options: `top`, `bottom` |

**Localization**

| Setting | Type | What it controls |
|---|---|---|
| `show_country` | `checkbox` (on/off) | Country/Region. Manage countries/regions |
| `country_selector_style` | `checkbox` (on/off) | Flag |
| `show_language` | `checkbox` (on/off) | Language selector. Manage languages |
| `localization_font` | `select` (choice) | Font — options: `heading`, `subheading`, `body`, `accent` |
| `localization_font_size` | `select` (choice) | Size — options: `0.625rem`, `0.75rem`, `0.875rem`, `1rem`, `1.125rem` |
| `localization_position` | `select` (choice) | Position — options: `left`, `right` |
| `localization_row` | `select` (choice) | Row — options: `top`, `bottom` |

**Appearance**

| Setting | Type | What it controls |
|---|---|---|
| `section_width` | `select` (choice) | Width — options: `page-width`, `full-width` |
| `section_height` | `select` (choice) | Height — options: `compact`, `standard` |
| `enable_sticky_header` | `select` (choice) | Sticky header — options: `always`, `scroll-up`, `never` |
| `divider_width` | `range` (slider) | Divider thickness |
| `divider_size` | `select` (choice) | Divider width — options: `page-width`, `full-width` |
| `divider_color` | `color` (color) | Divider color |
| `border_width` | `range` (slider) | Border thickness |
| `bottom_border_color` | `color` (color) | Bottom border color |

**Utilities**

| Setting | Type | What it controls |
|---|---|---|
| `actions_display_style` | `select` (choice) | Menu style — options: `icon`, `text`. Icons are always used on mobile |
| `actions_font_size` | `select` (choice) | Size — options: `0.75rem`, `0.875rem`, `1rem`, `1.125rem` |
| `actions_font` | `select` (choice) | Font — options: `heading`, `subheading`, `body`, `accent` |
| `actions_text_case` | `select` (choice) | Case — options: `none`, `uppercase` |

**Colors**

| Setting | Type | What it controls |
|---|---|---|
| `background_color_top` | `color` (color) | Top row background |
| `text_color_top` | `color` (color) | Top row text |
| `background_color_bottom` | `color` (color) | Bottom row background |
| `text_color_bottom` | `color` (color) | Bottom row text |

**Cart bubble**

| Setting | Type | What it controls |
|---|---|---|
| `bubble_style` | `select` (choice) | Bubble style — options: `default`, `custom` |
| `bubble_background_color` | `color` (color) | Background |
| `bubble_text_color` | `color` (color) | Text |

**Home page**

| Setting | Type | What it controls |
|---|---|---|
| `enable_transparent_header_home` | `checkbox` (on/off) | Transparent background |
| `home_inverse_logo` | `checkbox` (on/off) | Inverse logo |
| `text_color_transparent_home` | `color` (color) | Transparent header text |

**Product page**

| Setting | Type | What it controls |
|---|---|---|
| `enable_transparent_header_product` | `checkbox` (on/off) | Transparent background |
| `product_inverse_logo` | `checkbox` (on/off) | Inverse logo |
| `text_color_transparent_product` | `color` (color) | Transparent header text |

**Collection page**

| Setting | Type | What it controls |
|---|---|---|
| `enable_transparent_header_collection` | `checkbox` (on/off) | Transparent background |
| `collection_inverse_logo` | `checkbox` (on/off) | Inverse logo |
| `text_color_transparent_collection` | `color` (color) | Transparent header text |

## Footer (`footer`)

The main footer region. It is a generic block canvas rather than a fixed layout — the settings below control only the container, and everything visible inside is built from the blocks the merchant adds.

File: `sections/footer.liquid`

**Accepted blocks:** `_divider`, `@app`, `button`, `follow-on-shop`, `group`, `icon`, `image`, `menu`, `payment-icons`, `text`, `logo`, `jumbo-text`, `social-links`, `email-signup`

**Currently placed in the group:** `group`, `menu`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `section_width` | `select` (choice) | Width — options: `page-width`, `full-width` |
| `gap` | `range` (slider) | Gap |
| `background_color` | `color` (color) | Background color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |

## Toasts (`toasts`)

A stack of dismissible notifications pinned to the bottom-right corner of the viewport — for a shipping notice, a promo announcement, or anything else that should follow the shopper around the store without taking up space in the page flow.

File: `sections/toasts.liquid`

**Accepted blocks:** `_toast`

**Currently placed in the group:** _none — this section is not in `sections/footer-group.json` yet._

Unlike the four sections above, `Toasts` is **not currently part of the footer group**. It is restricted to that group via `enabled_on: { groups: ["footer"] }`, so it appears in the theme editor's add-section picker (under **Footer**) only there. Adding it once makes it appear on **every page** of the store, which is the point — but also means an unwanted toast is site-wide, not page-specific.

**Settings:** none. The section is purely a container; everything visible comes from the [`_toast`](blocks.md#_toast) blocks inside it. Adding the section from its preset starts you with one empty toast.

Behaviour worth knowing:

- **The section renders nothing when it has no blocks**, and the stack collapses when every toast in it has been dismissed or left empty — so it never leaves a floating gap over the page.
- Each toast is dismissed independently and **stays dismissed for the rest of the browsing session**; see the [`_toast` block](blocks.md#_toast) for the details.
- The stack sits above page content and sticky elements but **below the header menu, overlays, and drawers**, so opening the cart drawer covers the toasts rather than the toasts floating on top of it.
- The stack is capped at `24rem` wide and stays inside the page margins, so it does not dominate a narrow viewport.
- Only the toast cards themselves capture clicks — the empty area of the stack does not swallow clicks meant for the page behind it.

## Policies and links (`footer-utilities`)

The utility strip below the main footer, holding copyright, policy links, and social icons. Unlike the main footer it accepts only these three block types.

File: `sections/footer-utilities.liquid`

**Accepted blocks:** `footer-copyright`, `footer-policy-list`, `social-links`

**Currently placed in the group:** `footer-copyright`, `footer-policy-list`, `social-links`

**Settings**

| Setting | Type | What it controls |
|---|---|---|
| `section_width` | `select` (choice) | Width — options: `page-width`, `full-width` |
| `gap` | `range` (slider) | Gap |
| `background_color` | `color` (color) | Background color |
| `divider_thickness` | `range` (slider) | Divider thickness |
| `divider_color` | `color` (color) | Divider color |

**Padding**

| Setting | Type | What it controls |
|---|---|---|
| `padding-block-start` | `range` (slider) | Top |
| `padding-block-end` | `range` (slider) | Bottom |
