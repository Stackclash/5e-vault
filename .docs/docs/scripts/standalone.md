# Standalone Scripts

Node.js CLI scripts that run outside of Obsidian. Located in `z_Scripts/JS/`.

These scripts operate directly on vault files and require Node.js with the dependencies from `package.json`:

```bash
npm install
```

## `weatherGenerator.js`

**File:** `z_Scripts/JS/weatherGenerator.js`

Procedural weather generation engine for the fantasy world. See the [Weather Generation](../tools/weather-generation.md) tool documentation for full details.

**Key features:**

- Reads configuration from `1. DM Toolkit/Tools/Weather Generation.md` frontmatter
- Generates multi-day weather data with seasonal transitions
- Temperature continuity blending (30% daily blend toward seasonal target)
- Precipitation event clustering (1–3 day events)
- Wind speed calculation with seasonal modifiers
- Supports custom fantasy calendar systems
- Outputs to `weather.json`

## `calendarDate.js`

**File:** `z_Scripts/JS/calendarDate.js`

Utility module for working with the custom fantasy calendar system used in the vault. Provides functions for:

- Date arithmetic (adding/subtracting days)
- Season calculation
- Calendar formatting

## `editFrontmatter.js`

**File:** `z_Scripts/JS/editFrontmatter.js`

Bulk frontmatter editing script that modifies YAML frontmatter across multiple vault files. Useful for:

- Renaming frontmatter keys across the entire vault
- Adding or updating fields on many notes at once
- Data migration when the vault structure changes

Uses the `gray-matter` and `js-yaml` npm packages for YAML parsing and serialization.

## `process_5etools_files.js`

**File:** `z_Scripts/JS/process_5etools_files.js`

Processes data exported from [5etools](https://5e.tools/) into vault-compatible markdown files. Handles:

- File renaming and organization
- Moving files to correct vault folders
- Updating internal wiki links to match new file locations
- Formatting compendium data (items, spells, monsters, etc.) for Obsidian

## Dependencies

These scripts use the following npm packages defined in `package.json`:

| Package | Version | Purpose |
|---------|---------|---------|
| `gray-matter` | ^4.0.3 | YAML frontmatter parsing |
| `js-yaml` | ^4.1.0 | YAML processing |
| `markov-chains` | ^1.0.2 | Procedural text generation |
| `node-cache` | ^5.1.2 | In-memory caching |
| `readline-sync` | ^1.4.10 | CLI interactive prompts |
| `sync-fetch` | ^0.6.0-2 | Synchronous HTTP requests |
