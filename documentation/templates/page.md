# Page template

Covers the custom fields available on pages in this store, and the two page templates the theme ships with.

## Metafield definitions

**No page metafield definitions exist in this store.**

The Admin API returns an empty list for `metafieldDefinitions(ownerType: PAGE)`, and no `.liquid` file in the theme reads `page.metafields.*`. Pages here use only their built-in title and content body.

If page metafields are added later, define them in **Settings → Custom data → Pages** in the admin; they will then appear here on the next documentation sync.

## Template composition

### Default page

**File:** `templates/page.json` — a single section.

**`main-page` — Page**

| Block | Notes |
|---|---|
| `text` | A text block, typically the page heading. |
| `page-content` | Renders the page's body content from the admin rich-text editor. |

The split matters: **`page-content` is what outputs the body a merchant writes in the admin.** The `text` block beside it is theme-authored copy, edited in the theme editor rather than on the page record. A page whose template lacks `page-content` will not show its admin content at all.

Section settings: `content_direction` (row or column), `gap`, `background_color`, and top/bottom padding.

### Contact page

**File:** `templates/page.contact.json` — the suffix variant used by assigning the **`contact`** template to a page in the admin. Two sections in order.

**1. `main-page` — Page**

Two `text` blocks — heading and intro copy. Note this variant has **no `page-content` block**, so a page using the contact template will not render its admin body content. All of its copy comes from the theme editor.

**2. `section` — Section**

Holds the form:

| Block | Notes |
|---|---|
| `contact-form` | The contact form. |
| ⤷ `contact-form-submit-button` _(static)_ | The submit button, a fixed part of the form. |

Submissions go to the store's customer-service email, set in the Shopify admin under **Settings → Store details** — not in the theme.

## Related

- [Theme blocks](../blocks.md) — full settings for `page-content`, `contact-form`, and the rest
- [Global sections](../global-sections.md) — the header and footer wrapping these pages
