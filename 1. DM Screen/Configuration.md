---
obsidianUIMode: preview
active_world: "[[Eldoria]]"
active_party: "[[Curse of Strahd]]"
---
> [!infobox]
> | | |
> |---|---|
> | **Active World:** | `INPUT[suggester(optionQuery("4. World Almanac/Worlds")):active_world]` |
> | **Active Party:** | `INPUT[suggester(optionQuery("3. The Party/Parties")):active_party]` | 
# DM Tools/Calculators
```dataview
LIST WITHOUT ID file.link
FROM "1. DM Screen/Lookup Tables"
```

# Templates
| World Building | Party |
| ---- | ---- |
| `BUTTON[create-npc]` | `BUTTON[create-player-character]` |
| `BUTTON[create-location]` | `BUTTON[create-session-log]` |
| `BUTTON[create-shop]` |  |
```meta-bind-button
style: primary
label: Create NPC
id: create-npc
hidden: true
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template
  - type: input
    str: NPC
```
```meta-bind-button
style: primary
label: Create Location
id: create-location
hidden: true
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template
  - type: input
    str: Location
```
```meta-bind-button
style: primary
label: Create Shop
id: create-shop
hidden: true
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template
  - type: input
    str: Shop
```
```meta-bind-button
style: primary
label: Create Player Character
id: create-player-character
hidden: true
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template
  - type: input
    str: Player
  - type: input
    str: Character
```
```meta-bind-button
style: primary
label: Create Session Log
id: create-session-log
hidden: true
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template
  - type: input
    str: Session
```
# Fix Notes
## NPCs
```dataview
TABLE WITHOUT ID
	file.link as "NPC",
  choice(!!race, "✅", "✘") as race,
	choice(!!gender, "✅", "✘") as gender,
	choice(!!age, "✅", "✘") as age,
	choice(!!alignment, "✅", "✘") as alignment,
	choice(!!location, "✅", "✘") as location
FROM "4. World Almanac/NPCs"
WHERE (!gender or !alignment or !location or !age)
and file.name != "Npc"
SORT file.name
```

## Locations
```dataview
TABLE WITHOUT ID
  file.link as "Location",
  choice(!!location, "✅", "✘") as location
FROM "4. World Almanac/Places of Interest" or "4. World Almanac/Regions" or "4. World Almanac/Settlements" or "4. World Almanac/Shops"
WHERE (!location)
and !contains(list("Places of Interest", "Regions", "Settlements", "Shops"), file.name)
```