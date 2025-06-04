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

# Current Party/World Info
```dataviewjs
const { getDate } = await self.require.import("z_Scripts/JS/calendarDate.js");
const players = dv.pages('#player').filter(p => p.party.path === dv.current().active_party.path)
const currentDate = getDate(app)
dv.paragraph(`Current Party Size: ${players.length}`)
dv.paragraph(`Current Date: ${currentDate.prettyPrint.month} ${currentDate.original.day}, ${currentDate.original.year} (${currentDate.prettyPrint.day})`)
```

# DM Tools/Calculators
```dataview
LIST WITHOUT ID file.link
FROM "1. DM Stuff/Tools"
```
```datacorejsx
return function View() {
  const tools = dc.useQuery(`path("1. DM Stuff/Tools")`)

  return <dc.List rows={tools} renderer={tool => tool.$link}>
}
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
  - type: templaterCreateNote
    templateFile: "z_Templates/Templater/World Building/NPC.md"
```
```meta-bind-button
style: primary
label: Create Location
id: create-location
hidden: true
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/Templater/World Building/Location.md"
```
```meta-bind-button
style: primary
label: Create Shop
id: create-shop
hidden: true
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/Templater/World Building/Shop.md"
```
```meta-bind-button
style: primary
label: Create Player Character
id: create-player-character
hidden: true
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/Templater/Party/Player Character.md"
```
```meta-bind-button
style: primary
label: Create Session Journal
id: create-session-journal
hidden: true
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/Templater/DM Prep/Session Journal.md"
```
```meta-bind-button
style: primary
label: Create Session Prep
id: create-session-prep
hidden: true
actions:
  - type: templaterCreateNote
    templateFile: "z_Templates/Templater/DM Prep/Session Prep.md"
```

# File Location Configuration
> [!columns|no-t 3]
>> ## DM Details
>> |||
>> |:---:|:---:|
>> | Session Prep | `INPUT[text:locations.preps]` |
>> | Session Journals | `INPUT[text:locations.journals]` |
>
>> ## Campaign Details
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
```datacorejsx
return function View() {
  const pages = dc.useQuery(`@page and path("4. World Almanac")`)
  const pagesByGroup = dc.useArray(pages, array => array.groupBy(page => {
    const parentFolderPath = page.$path.substring(0, page.$path.lastIndexOf('/'))
    const parentFolderName = parentFolderPath.substring(parentFolderPath.lastIndexOf("/") + 1)
    return parentFolderName
  })).map(({key: dataKey, rows: dataRows}) => ({
    type: dataKey,
    count: dataRows.length
  }))
  const columns = [
    {
      id: "Type",
      value: (row) => row.type
    },
    {
      id: "Count",
      value: (row) => row.count
    }
  ]

  return <dc.Table rows={pagesByGroup} columns={columns} />
}
```

# Fix Notes
> [!column| no-t clean]
>> ## NPCs
>> ```datacorejsx
>> return function View() {
>>   const npcs = dc.useQuery(`
>>     #npc and
>>     $name != "Npc" and
>>     (!gender or !alignment or !location or !age)
>>   `)
>>   const columns = [
>>     {
>>       id: 'NPC',
>>       value: (row) => row.$path,
>>       render: (value, row) => dc.fileLink(value)
>>     },
>>     {
>>       id: 'Race',
>>       value: (row) => row.value("race"),
>>       render: (value, row) => !!value ? "✅" : "✘"
>>     },
>>     {
>>       id: 'Gender',
>>       value: (row) => row.value("gender"),
>>       render: (value, row) => !!value ? "✅" : "✘"
>>     },
>>     {
>>       id: 'Age',
>>       value: (row) => row.value("age"),
>>       render: (value, row) => !!value ? "✅" : "✘"
>>     },
>>     {
>>       id: 'Alignment',
>>       value: (row) => row.value("alignment"),
>>       render: (value, row) => !!value ? "✅" : "✘"
>>     },
>>     {
>>       id: 'Location',
>>       value: (row) => row.value("location"),
>>       render: (value, row) => !!value ? "✅" : "✘"
>>     }
>>   ]
>> 
>>   return <dc.Table rows={npcs} columns={columns} />
>> }
>> ```
>
>> ## Locations
>> ```datacorejsx
>> return function View() {
>>   const locations = dc.useQuery(`
>>     #location and
>>     (
>>       !location or
>>       (#shop and length(items) = 0) or
>>       (!image or image = "z_Assets/PlaceholderImage.png") or
>>       (!["Places of Interest", "Regions", "Settlements", "Shops"].contains($name))
>>     )
>>   `)
>>   const columns = [
>>     {
>>       id: 'Location',
>>       value: (row) => row.$path,
>>       render: (value, row) => dc.fileLink(value)
>>     },
>>     {
>>       id: 'Parent Location',
>>       value: (row) => row.value("location"),
>>       render: (value, row) => !!value ? "✅" : "✘"
>>     },
>>     {
>>       id: 'Items',
>>       value: (row) => row.value("items") ? row.value("items").length : undefined,
>>       render: (value, row) => typeof value === undefined ? "-" : (!!value ? "✅" : "✘")
>>     },
>>     {
>>       id: 'Image',
>>       value: (row) => !!row.value("image") || row.value("image") !== "z_Assets/PlaceholderImage.png",
>>       render: (value, row) => value ? "✅" : "✘"
>>     }
>>   ]
>> 
>>   return <dc.Table rows={locations} columns={columns} />
>> }
>> ```