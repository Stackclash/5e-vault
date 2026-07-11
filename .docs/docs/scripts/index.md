# Scripts

The vault includes a comprehensive set of custom JavaScript scripts organized by the plugin or runtime that executes them. All scripts live under `z_Scripts/`.

## Script Categories

| Folder | Runtime | Description |
|--------|---------|-------------|
| [`Templater/`](templater.md) | Templater plugin | Helper modules imported by Templater templates |
| [`Dataview/`](dataview.md) | Dataview plugin | Queries, views, and utilities executed via `dv.view()` |
| [`Meta Bind/`](meta-bind.md) | Meta Bind plugin | Button action scripts for frontmatter manipulation |
| [`JS/`](standalone.md) | Node.js CLI | Standalone scripts run outside Obsidian |
| [`Datacore/`](datacore.md) | Datacore plugin | React (TSX) components for data display |

## Architecture Patterns

### Module Loading

Dataview modules use `self.require.import()` for loading dependencies. Top-level `await` is valid in data modules.

### Render vs. Data Separation

Scripts follow a data/render/view separation:

- **Data scripts** (`data/`) query and aggregate vault data
- **Render scripts** (`render/`) format data for display (cards, lists, tables)
- **View scripts** (`views/`) combine data and render logic for complete UI components

### Shared Utilities

Common utilities in `z_Scripts/Dataview/utils/helpers.js` provide:

- Link path/text extraction
- Safe nested property access
- Array normalization, sorting, filtering, and grouping
- Item pricing calculation and currency formatting
