# FAQ

A reusable question-and-answer entry. Each FAQ entry holds one question and its answer, so the same answer can be attached to more than one product without retyping it.

| | |
|---|---|
| **Type (handle)** | `faq` |
| **Display name field** | `question` — entries are listed in the admin by their question text |
| **Description** | _None set on the definition._ |
| **Entries created via** | Admin → Content → Metaobjects → FAQ |

## Fields

| Key | Name | Type | Required | Purpose |
|---|---|---|---|---|
| `question` | Question | `single_line_text_field` | No | The question as a customer would ask it. Doubles as the entry's display name in the admin, so it should be readable on its own. |
| `answer` | Answer | `multi_line_text_field` | No | The answer text. Multi-line, so it holds paragraphs — but plain text, not rich text, so it carries no links or formatting. |

> **Neither field is required.** An entry can be saved with an empty question or answer, which means anything rendering these needs to handle blanks rather than assume both are filled in.

## How it is used

FAQ entries are attached to products through the **`custom.faqs`** product metafield (`list.metaobject_reference`), which holds an ordered list of FAQ entries. See the [product template doc](../templates/product.md) for that definition.

## Rendered by the `Product FAQs` section

**`sections/product-faqs.liquid`** is the only thing in the theme that reads this metaobject. It is restricted to product templates (`enabled_on: { templates: ["product"] }`) and renders one `<details>`/`<summary>` accordion row per entry — `question` as the summary, `answer` as the content — reusing the theme's existing accordion machinery ([`accordion-custom-component`](../../snippets/accordion-custom-component.liquid) and [`accordion-styles`](../../snippets/accordion-styles.liquid)).

The section is **not** part of `templates/product.json`. A merchant has to add it to a product template in the theme editor; until then, FAQ entries still won't appear on the storefront even though the data is attached.

How the section handles this metaobject's two optional fields:

| Situation | Result |
|---|---|
| `question` is blank | The entry is **skipped entirely.** The summary is the only label on the control, so a blank one would be an unusable button. |
| `answer` is blank | The row still renders and opens, with an empty body. |
| Neither field is filled on any entry | The section outputs nothing at all — no empty container, no padding. |

Because `answer` is `multi_line_text_field` (plain text, no formatting), it is rendered with `escape | newline_to_br`: paragraph breaks are preserved as `<br>`, and any markup a merchant types shows up as literal text rather than being interpreted. This matches how the theme treats the other plain-text value it renders from custom data — the `shopify.disclosure` metafield in [`snippets/cart-disclosure-tooltip.liquid`](../../snippets/cart-disclosure-tooltip.liquid), which uses the same `escape | newline_to_br` pair.
