# Templater Scripts

Helper modules used by Templater templates. Located in `z_Scripts/Templater/`.

## Core Modules

### `templateInit.js`

Shared initialization module that eliminates boilerplate across all templates. Provides three functions:

**`getPlugins(tp, requiredConfigPaths, options)`**

Validates that required Obsidian plugins are loaded and returns a ready-to-use context object:

- Checks for Dataview plugin availability
- Optionally checks for Modal Forms plugin
- Loads the vault configuration from `Configuration.md` via Dataview
- Validates that required configuration location keys exist
- Returns `{ dataview, modalForm, config, path }`

**`openForm(modalFormApi, formConfig)`**

Opens a Modal Forms dialog with the given field configuration. Returns the submitted form data or throws an error if the user cancels.

**`moveFile(tp, basePath, fileName)`**

Moves the newly created template note from its creation location to the target folder specified in the configuration.

### `formFields.js`

Factory functions that return field configuration objects for Modal Forms. Each function returns an object with `name`, `label`, `description`, `isRequired`, and `input` properties.

Available field builders:

- `name(label, description)` — text input for names
- `alignment()` — D&D alignment selector (9 options)
- `gender()` — Male/Female select
- `age()` — number input
- `text(fieldName, label, description, required)` — generic text input
- `textArea(fieldName, label, description, required)` — multiline text
- `date(label, description, required)` — date picker
- `tagSelect(dv, fieldName, label, tag, description, required)` — dropdown from Dataview tag query
- `tagMultiSelect(dv, fieldName, label, tag, description, required)` — multi-select from Dataview tag query
- `folderSelect(dv, fieldName, label, folderPath, description)` — dropdown from folder contents

## Utility Scripts

### `dndBeyondCharacter.js`

Imports character data from D&D Beyond. Used by the Player Character template to pull character stats, abilities, and equipment from a D&D Beyond character URL.

### `startup.js`

Runs during vault startup (triggered by Templater's startup template feature). Handles initialization tasks like downloading CSS files and refreshing cached JSON data.

### `find_file.js`

Provides fuzzy file search functionality using the `minisearch` library. Used internally by templates that need to locate files by partial name.

### `get_all_files.js`

Recursively lists all files in the vault or a given folder. Used by other scripts that need to enumerate vault contents.
