# Templates

The vault uses [Templater](https://silentvoid13.github.io/Templater/) to provide interactive templates for creating new notes. Each template collects structured input through [Modal Forms](https://github.com/danielo515/obsidian-modal-form) and generates a pre-populated note with the correct frontmatter, folder placement, and formatting.

## Template Categories

Templates are stored in `z_Templates/Templater/` and organized by purpose:

| Category | Templates | Description |
|----------|-----------|-------------|
| [DM Prep](dm-prep.md) | Session Journal, Session Prep | Session planning and post-session journaling |
| [Party](party.md) | Party Dashboard, Player Character | Party management and character tracking |
| [World Building](world-building.md) | Location, NPC, Shop, Leaflet Map, Group, Event | Creating world elements |
| [Story](story.md) | Quest, Campaign | Story and quest tracking |
| [Functional](functional.md) | Add/Remove Relationship, Add/Remove Travel Distance, Startup | Utility operations on existing notes |
| [Extra](extra.md) | Sound Board, Editing helpers | Miscellaneous tools |

## How Templates Work

All templates follow a common pattern powered by two shared modules:

### `templateInit.js`

Located at `z_Scripts/Templater/templateInit.js`, this module eliminates ~20 lines of boilerplate per template by providing:

- **`getPlugins(tp, requiredConfigPaths, options)`** — validates that required Obsidian plugins are available (Dataview, Modal Forms), loads configuration from `Configuration.md`, and validates that required config location keys exist. Returns `{ dataview, modalForm, config, path }`.
- **`openForm(modalFormApi, formConfig)`** — opens a modal form dialog and returns the submitted data. Throws an error if the form is cancelled.
- **`moveFile(tp, basePath, fileName)`** — moves the newly created note to the correct folder in the vault.

### `formFields.js`

Located at `z_Scripts/Templater/formFields.js`, this module provides factory functions for common form field types:

| Function | Description |
|----------|-------------|
| `name(label, description)` | Text input for a name field |
| `alignment()` | 9-option D&D alignment selector |
| `gender()` | Male/Female select |
| `age()` | Number input |
| `text(fieldName, label, description, required)` | Generic text input |
| `textArea(fieldName, label, description, required)` | Multiline text input |
| `date(label, description, required)` | Date picker |
| `tagSelect(dv, fieldName, label, tag, description, required)` | Dropdown populated from Dataview tag query |
| `tagMultiSelect(dv, fieldName, label, tag, description, required)` | Multi-select from Dataview tag query |
| `folderSelect(dv, fieldName, label, folderPath, description)` | Dropdown populated from folder contents |

## Template Lifecycle

```
1. User triggers template (e.g., via button in Configuration.md)
2. templateInit.getPlugins() validates plugins and loads config
3. Template defines form fields using formFields.js helpers
4. templateInit.openForm() shows the modal dialog
5. Template processes form data into frontmatter + content
6. templateInit.moveFile() places the note in the correct folder
7. Note opens in Obsidian with preview mode active
```
