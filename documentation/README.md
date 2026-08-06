# Store and theme documentation

Reference documentation for this store's **custom data model** (metaobjects and metafields) and the **theme's section and block architecture**.

The theme is a copy of Shopify's **Horizon** theme (v4.1.3). The connected store is **`ben-g-dev.myshopify.com`**.

## Contents

| Page | What it covers |
|---|---|
| [Theme blocks](blocks.md) | All 95 blocks in `blocks/` — settings, nesting, and where each is used |
| [Global sections](global-sections.md) | Header, announcement bar, footer, and footer utilities — the sections on every page |
| [Product template](templates/product.md) | Product metafield definitions and the product page's sections |
| [Collection template](templates/collection.md) | Collection metafields and the collection / collection-list pages |
| [Page template](templates/page.md) | Page metafields and the page / contact page templates |
| [FAQ metaobject](metaobjects/faq.md) | The `faq` metaobject — fields and how it is (not yet) used |

## How to read these docs

They serve two audiences at once, so they keep both the plain-language purpose **and** the concrete identifiers:

- **Merchants and editors** populating data in the admin — read the "what it's for" prose and the field/metafield tables.
- **Developers** maintaining the theme — the `namespace.key`, metaobject `type`, and section/block file names are what you need to reference them in Liquid.

## Where the information comes from

| Data | Source |
|---|---|
| Section and block settings, nesting, template composition | The theme repo (`sections/`, `blocks/`, `templates/`) |
| Metaobject and metafield **definitions** | The connected store, via the Admin API |
| Whether a definition is actually **used** | Grep of the theme's Liquid |

Definitions live in the store, not in the theme, so this documentation is only complete when it is generated with an authenticated store connection. Anything that could not be read from the store is explicitly marked *"not retrieved from store"* rather than guessed.

## A note on the current state

This is an experimentation playground rather than a production store, and the docs reflect that honestly. Two gaps are called out where they occur:

- The `faq` metaobject and the `custom.faqs` product metafield are **defined in the store but never rendered by the theme** — see [the FAQ metaobject doc](metaobjects/faq.md).
- The metafields the theme *does* read (`reviews.*`, `shopify.disclosure`) have **no definitions in this store** — see [the product template doc](templates/product.md).
