# design-system

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": { "typeAware": true },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Missing components

In Figma but not in this repo:

- 2FA
- Alert Dialog
- Aspect Ratio
- Breadcrumb
- Context Menu
- Data Table
- Drawer
- Hover Card
- Menubar
- Modale (it maps to `spiko-dialog`)
- Navigation Menu
- Slider
- Toast

## Extra components

In this repo but not in Figma:

- amount-input
- animated-check
- circular-progress
- collapsible
- copy-to-clipboard
- currency-input
- iban-input
- input-group
- label
- markdown
- paginated-entries
- password-input
- phone-input
- search-input
- select-country
- sort-code-input
- spiko-alert
- spiko-dialog (it maps to Figma's Modale)
- status
