---
obsidianUIMode: preview
active_world: "[[Eldoria]]"
active_party: "[[Curse of Strahd]]"
locations:
  preps: 1. DM Stuff/Session Prep
  journals: 1. DM Stuff/Session Journals
  parties: 3. The Party/Parties
  players: 3. The Party/Players
  quests: 3. The Party/Quests
  worlds: 4. World Almanac/Worlds
  regions: 4. World Almanac/Regions
  settlements: 4. World Almanac/Settlements
  pois: 4. World Almanac/Places of Interest
  shops: 4. World Almanac/Shops
  npcs: 4. World Almanac/NPCs
  groups: 4. World Almanac/Groups
  monsters: 5. Mechanics/Bestiary
---
> [!infobox|n-th]
> | | |
> |---|---|
> | **Active World:** | `INPUT[suggester(optionQuery("#world")):active_world]` |
> | **Active Party:** | `INPUT[suggester(optionQuery("#party")):active_party]` |

# DM Tools/Calculators
```dataview
LIST WITHOUT ID file.link
FROM "1. DM Stuff/Lookup Tables"
```

# Templates
| World Building            | Party                             |
| ------------------------- | --------------------------------- |
| `BUTTON[create-npc]`      | `BUTTON[create-player-character]` |
| `BUTTON[create-location]` | `BUTTON[create-session-journal]`  |
| `BUTTON[create-shop]`     | `BUTTON[create-session-prep]`     |
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
    str: "Player Character"
```
```meta-bind-button
style: primary
label: Create Session Journal
id: create-session-journal
hidden: true
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template
  - type: input
    str: "Session Journal"
```
```meta-bind-button
style: primary
label: Create Session Prep
id: create-session-prep
hidden: true
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template
  - type: input
    str: "Session Prep"
```

# File Location Configuration
> [!columns|no-t 3]
>> ## DM Details
>> |||
>> |:---:|:---:|
>> | Session Prep | `INPUT[text:locations.preps]` |
>> | Session Journals | `INPUT[text:locations.journals]` |
>
>> ## Player Details
>> |||
>> |:---:|:---:|
>> | Parties | `INPUT[text:locations.parties]` |
>> | Players | `INPUT[text:locations.players]` |
>> | Quests | `INPUT[text:locations.quests]` |
>
>> ## World Details
>> |||
>> |:---:|:---:|
>> | Worlds | `INPUT[text:locations.worlds]` |
>> | Regions | `INPUT[text:locations.regions]` |
>> | Settlements | `INPUT[text:locations.settlements]` |
>> | Places of Interest | `INPUT[text:locations.pois]` |
>> | Shops | `INPUT[text:locations.shops]` |
>> | NPCs | `INPUT[text:locations.npcs]` |
>> | Groups | `INPUT[text:locations.groups]` |
>> | Monsters | `INPUT[text:locations.monsters]` |

# Stats
```dataviewjs
let finalGroups = []
let groups = dv.pages().filter(p => {
    return (p.file.folder.includes('Shops') ||
        p.file.folder.includes('Settlements') ||
        p.file.folder.includes('Regions') ||
        p.file.folder.includes('Worlds') ||
        p.file.folder.includes('Bestiary') ||
        p.file.folder.includes('Places of Interest') ||
        p.file.folder.includes('NPCs')) && !['Shops', 'Bestiary', 'Worlds', 'Regions', 'Settlements', 'Places of Interest'].includes(p.file.name)
}).groupBy(p => p.file.folder.split('/')[1]).sort(g => g.key[0])

dv.table(['Type', 'Count'],
  groups.map(g => [g.key, g.rows.length]))
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
FROM #npc
WHERE (!gender or !alignment or !location or !age)
and file.name != "Npc"
SORT file.name
```

## Locations
```dataview
TABLE WITHOUT ID
  file.link as "Location",
  choice(!!location, "✅", "✘") as location,
  choice(!contains(file.path, "Shops") or length(items) > 0, "✅", "✘") as items,
  choice(!!image or image != "z_Assets/PlaceholderImage.png", "✅", "✘") as image
FROM #location
WHERE (!location or (contains(file.path, "Shops") and length(items) = 0))
and (!image or image = "z_Assets/PlaceholderImage.png")
and !contains(list("Places of Interest", "Regions", "Settlements", "Shops"), file.name)
```