# Party Templates

Templates for managing player parties and characters. Located in `z_Templates/Templater/Party/`.

## Party Dashboard

**File:** `z_Templates/Templater/Party/Party Dashboard.md`

Creates a dashboard note for a D&D party. The dashboard serves as a central hub for tracking:

- Party composition and member links
- Current party location
- Active quests
- Session history

## Player Character

**File:** `z_Templates/Templater/Party/Player Character.md`

Creates a player character sheet note. The template collects character details through a modal form:

- **Name** — character name
- **Gender** — Male/Female
- **Alignment** — full D&D 9-alignment grid
- **Race/Class** — character build details

The template also supports importing character data from **D&D Beyond** via the `dndBeyondCharacter.js` helper script, which fetches character data from the D&D Beyond API.

Generated character notes include frontmatter for all mechanical attributes, enabling Dataview queries across the party.
