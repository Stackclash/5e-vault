---
obsidianUIMode: preview
active_world: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
active_party: "[[3. The Party/Parties/Curse of Strahd.md|Curse of Strahd]]"
locations:
  preps: 1. DM Stuff/Session Prep/
  journals: 1. DM Stuff/Session Journals/
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
  campaigns: 3. The Party/Campaigns
relationship_mapping:
  - to: Father
    from:
      male: Son
      female: Daughter
  - to: Mother
    from:
      male: Son
      female: Daughter
  - to: Husband
    from:
      male: ""
      female: Wife
  - to: Wife
    from:
      male: Husband
      female: ""
  - to: Son
    from:
      male: Father
      female: Mother
  - to: Daughter
    from:
      male: Father
      female: Mother
  - to: Sister
    from:
      male: Brother
      female: Sister
  - to: Brother
    from:
      male: Brother
      female: Sister
  - to: Cousin
    from:
      male: Cousin
      female: Cousin
  - to: Niece
    from:
      male: Uncle
      female: Aunt
  - to: Nephew
    from:
      male: Uncle
      female: Aunt
  - to: Uncle
    from:
      male: Nephew
      female: Niece
  - name: ""
    from:
      male: Nephew
      female: Niece
    to: Aunt
active_campaign: "[[1. DM Stuff/Campaigns/Truth of Vecna.md|Truth of Vecna]]"
---
> [!infobox|n-th]
> | | |
> |---|---|
> | **Active Campaign:** | `INPUT[suggester(optionQuery(#campaign)):active_campaign]` |
> | **Active World** | `VIEW[{1. DM Stuff/Campaigns/Truth of Vecna.md#world}][text(renderMarkdown):active_world]` |
> | **Active Party:** | `VIEW[{1. DM Stuff/Campaigns/Truth of Vecna.md#party}][text(renderMarkdown):active_party]` |

# Current Party/World Info
```dataviewjs
const { getDate } = await self.require.import("z_Scripts/JS/calendarDate.js");
const players = dv.pages('#player').filter(p => p.party.path === dv.current().active_party.path)
const currentDate = getDate(app)
dv.paragraph(`Current Party Size: ${players.length}`)
dv.paragraph(`Current Date: ${currentDate.prettyPrint.month} ${currentDate.original.day}, ${currentDate.original.year} (${currentDate.prettyPrint.day})`)
```

# DM Tools/Calculators
```datacorejsx
return function View() {
  const tools = dc.useQuery(`@page and path("1. DM Stuff/Tools")`)

  return <dc.List rows={tools} renderer={tool => dc.fileLink(tool.$path)} />
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

# Configuration
```meta-bind
INPUT[select(option(1, 'File Location Configuration'), option(2, 'Relationship Mapping'), class(tabbed))]
```
>[!tabbed-box]
>>[!div-m] File Location Configuration
>> > [!columns|no-t 3]
>> >> ## DM Details
>> >> |||
>> >> |:---:|:---:|
>> >> | Session Prep | `INPUT[text:locations.preps]` |
>> >> | Session Journals | `INPUT[text:locations.journals]` |
>> >
>> >> ## Campaign Details
>> >> |||
>> >> |:---:|:---:|
>> >> | Campaigns | `INPUT[text:locations.campaigns]` |
>> >> | Parties | `INPUT[text:locations.parties]` |
>> >> | Players | `INPUT[text:locations.players]` |
>> >> | Quests | `INPUT[text:locations.quests]` |
>> >
>> >> ## World Details
>> >> |||
>> >> |:---:|:---:|
>> >> | Worlds | `INPUT[text:locations.worlds]` |
>> >> | Regions | `INPUT[text:locations.regions]` |
>> >> | Settlements | `INPUT[text:locations.settlements]` |
>> >> | Places of Interest | `INPUT[text:locations.pois]` |
>> >> | Shops | `INPUT[text:locations.shops]` |
>> >> | NPCs | `INPUT[text:locations.npcs]` |
>> >> | Groups | `INPUT[text:locations.groups]` |
>> >> | Monsters | `INPUT[text:locations.monsters]` |
>
>> [!div-m] Relationship Mapping
>> `BUTTON[add-relationship-mapping]`
>> ```meta-bind-button
>> label: Add Relationship Mapping
>> hidden: true
>> id: add-relationship-mapping
>> style: primary
>> actions:
>>   - type: inlineJS
>>     code: |-
>>       app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
>>         if (!Array.isArray(fm.relationship_mapping)) {
>>           fm.relationship_mapping = [{to: '', from: {male: '', female: ''}}]
>>         } else {
>>           fm.relationship_mapping = [...fm.relationship_mapping, {to: '', from: {male: '', female: ''}}]
>>         }
>>       })
>> ```
>> ```dataviewjs
>> dv.table(['Relationship', 'Male', 'Female', 'Delete'],
>>   dv.current()['relationship_mapping'].map((r, i) => [
>>     `\`INPUT[text:relationship_mapping[${i}].to]\``,
>>     `\`INPUT[text:relationship_mapping[${i}].from.male]\``,
>>     `\`INPUT[text:relationship_mapping[${i}].from.female]\``,
>>     `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-item\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/removeItem.js\n    args:\n      field: relationship_mapping\n      index: ${i}\n\`\`\``
>>   ]))
>> ```

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
> [!column| clean no-th]
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
>>   return <dc.Table paging={30} rows={npcs} columns={columns} />
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
>>       id: 'Type',
>>       value: (row) => row.$tags.find(t => ['#shop', '#region', '#settlement', '#place-of-interest', '#world'].includes(t)).slice(1) || '',
>>     },
>>     {
>>       id: 'Parent Location',
>>       value: (row) => row.$tags.find(t => t.includes('world')) ? true : row.value("location"),
>>       render: (value, row) => !!value ? "✅" : "✘"
>>     },
>>     {
>>       id: 'Items',
>>       value: (row) => row.value("items") === undefined ? false : row.value("items"),
>>       render: (value, row) => {
>>          if (value === false || value === null) return "✘"
>>          if (Array.isArray(value) && value.length > 0) return "✅"
>>          return "✘"
>>       }
>>     },
>>     {
>>       id: 'Image',
>>       value: (row) => !!row.value("image") || !(row.value("image") !== "z_Assets/PlaceholderImage.png"),
>>       render: (value, row) => value ? "✅" : "✘"
>>     }
>>   ]
>> 
>>   return <dc.Table paging={20} rows={locations} columns={columns} />
>> }
>> ```
>
>>```datacorejsx
>>return function View() {
>>  const activeParty = dc.useQuery(`@page and #party and connected([[Configuration]])`)[0]
>>  const journals = dc.useQuery(`@page and #session-journal and !$name.contains("S0")`).sort((a,b) => new Date(a.value('date')) - new Date(b.value('date')))
>>  const journalsNeedFixing = journals.filter(j => j.$name.includes('Session Journal') || (!j.value('summary') || !j.value('summary').length) || !j.value('fc-end') || (!j.value('locations') || j.value('locations').length === 0))
>>  const columns = [
>>    {
>>      id: 'Session',
>>      value: (row) => row.$path,
>>      render: (value) => dc.fileLink(value)
>>    },
>>    {
>>      id: 'Has Unique Title',
>>      value: (row) => row.$name,
>>      render: (value) => !value.includes('Session Journal') ? "✅" : "✘"
>>    },
>>    {
>>      id: 'Has Summary',
>>      value: (row) => row.value('summary'),
>>      render: (value) => (value && value.length) ? "✅" : "✘"
>>    },
>>    {
>>      id: 'Has End Date',
>>      value: (row) => row.value('fc-end'),
>>      render: (value) => value ? "✅" : "✘"
>>    },
>>    {
>>      id: 'Has Locations Set',
>>      value: (row) => row.value('locations'),
>>      render: (value) => (value && value.length) ? "✅" : "✘"
>>    }
>>  ]
>>  return <dc.Table paging={20} rows={journalsNeedFixing} columns={columns} />
>>}
>>```