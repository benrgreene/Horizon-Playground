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

## ⚠️ Not currently rendered by the theme

**Nothing in the theme reads this metaobject.** A search of every `.liquid` file for `metaobject` references and for `metafields.custom.faqs` returns no matches.

The practical consequence: **FAQ entries created in the admin, and FAQs attached to a product via `custom.faqs`, will not appear anywhere on the storefront.** The data is stored correctly and is queryable — it simply has no template rendering it yet.

Making them visible requires theme work. The natural place is the existing [`accordion` block](../blocks.md#accordion) together with [`_accordion-row`](../blocks.md#_accordion-row), which already provide the collapsible question/answer UI this data is shaped for. Rendering would look roughly like:

```liquid
{%- for faq in closest.product.metafields.custom.faqs.value -%}
  {{ faq.question.value }}
  {{ faq.answer.value }}
{%- endfor -%}
```

Until a block or section does something like that, treat this metaobject as **defined but inactive**.
