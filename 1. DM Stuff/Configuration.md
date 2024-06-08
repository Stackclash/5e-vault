---
obsidianUIMode: preview
active_world: "[[Eldoria]]"
active_party: "[[Curse of Strahd]]"
locations:
  Session Prep: 1. DM Stuff/Session Prep
  Session Journals: 1. DM Stuff/Session Journals
  Parties: 3. The Party/Parties
  Players: 3. The Party/Players
  Quests: 3. The Party/Quests
  Groups: 4. World Almanac/Groups
  Worlds: 4. World Almanac/Worlds
  Regions: 4. World Almanac/Regions
  Settlements: 4. World Almanac/Settlements
  Places of Interest: 4. World Almanac/Places of Interest
  Shops: 4. World Almanac/Shops
  NPCs: 4. World Almanac/NPCs
  Monsters: 5. Mechanics/Bestiary
---
> [!infobox]
> | | |
> |---|---|
> | **Active World:** | `INPUT[suggester(optionQuery("4. World Almanac/Worlds")):active_world]` |
> | **Active Party:** | `INPUT[suggester(optionQuery("3. The Party/Parties")):active_party]` |

# DM Tools/Calculators
```dataview
LIST WITHOUT ID file.link
FROM "1. DM Stuff/Lookup Tables"
```

# Templates
| World Building            | Party                             |
| ------------------------- | --------------------------------- |
| `BUTTON[create-npc]`      | `BUTTON[create-player-character]` |
| `BUTTON[create-location]` | `BUTTON[create-session-log]`      |
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
>> | Session Prep | `INPUT[text:locations["Session Prep"]]` |
>> | Session Journals | `INPUT[text:locations["Session Journals"]]` |
>
>> ## Player Details
>> |||
>> |:---:|:---:|
>> | Parties | `INPUT[text:locations["Parties"]]` |
>> | Players | `INPUT[text:locations["Players"]]` |
>> | Quests | `INPUT[text:locations["Quests"]]` |
>
>> ## World Details
>> |||
>> |:---:|:---:|
>> | Worlds | `INPUT[text:locations["Worlds"]]` |
>> | Regions | `INPUT[text:locations["Regions"]]` |
>> | Settlements | `INPUT[text:locations["Settlements"]]` |
>> | Places of Interest | `INPUT[text:locations["Places of Interest"]]` |
>> | Shops | `INPUT[text:locations["Shops"]]` |
>> | NPCs | `INPUT[text:locations["NPCs"]]` |
>> | Groups | `INPUT[text:locations["Groups"]]` |
>> | Monsters | `INPUT[text:locations["Monsters"]]` |

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
FROM "4. World Almanac/NPCs"
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
FROM "4. World Almanac/Places of Interest" or "4. World Almanac/Regions" or "4. World Almanac/Settlements" or "4. World Almanac/Shops"
WHERE (!location or (contains(file.path, "Shops") and length(items) = 0))
and (!image or image = "z_Assets/PlaceholderImage.png")
and !contains(list("Places of Interest", "Regions", "Settlements", "Shops"), file.name)
```