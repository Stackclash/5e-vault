---
obsidianUIMode: preview
active_world: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
active_party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
active_campaign: "[[1. DM Toolkit/Campaigns/The Hunt for Vecna.md|The Hunt for Vecna]]"
locations:
  preps: 1. DM Toolkit/Session Prep/
  journals: 1. DM Toolkit/Session Journals/
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
  campaigns: 1. DM Toolkit/Campaigns
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
shop_types:
  - name: Blacksmith
    item_types: "weapon, armor"
  - name: Apothecary
    item_types: wondrous
  - name: Fletcher
    item_types: weapon
  - name: General Store
    item_types: "weapon, armor, wondrous"
shop_sizes:
  - name: Small
    rarity: none
    count: 1d4+2
  - name: Small
    rarity: common
    count: 1d4
  - name: Medium
    rarity: none
    count: 2d4+2
  - name: Medium
    rarity: common
    count: 2d4
  - name: Medium
    rarity: uncommon
    count: 1d4
  - name: Large
    rarity: none
    count: 2d6+2
  - name: Large
    rarity: common
    count: 2d6
  - name: Large
    rarity: uncommon
    count: 2d4
  - name: Large
    rarity: rare
    count: 1d2
item_pricing:
  base_prices:
    none: 0
    common: 10000
    uncommon: 40000
    rare: 400000
    very-rare: 4000000
    legendary: 20000000
  tier_modifiers:
    minor: 0.75
    major: 1.5
  consumable_modifier: 0.5
  attunement_modifier: 0.9
  recharge_modifiers:
    dawn: 0.9
    short-rest: 0.95
    long-rest: 0.85
---
> [!infobox|n-th]
> | | |
> |---|---|
> | **Active Campaign:** | `INPUT[suggester(optionQuery(#campaign)):active_campaign]` |
> | **Active World** | `INPUT[suggester(optionQuery(#world)):active_world]` |
> | **Active Party:** | `INPUT[suggester(optionQuery(#party)):active_party]` |

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
  const tools = dc.useQuery(`@page and path("1. DM Toolkit/Tools")`)

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
INPUT[select(option(1, 'File Location Configuration'), option(2, 'Relationship Mapping'), option(3, 'Shop Configuration'), option(4, 'Item Pricing'), class(tabbed))]
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
>
>> [!div-m] Shop Configuration
>> ##### Shop Types
>> `BUTTON[add-shop-type]`
>> ```meta-bind-button
>> label: Add Shop Type
>> hidden: true
>> id: add-shop-type
>> style: primary
>> actions:
>>   - type: inlineJS
>>     code: |-
>>       app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
>>         if (!Array.isArray(fm.shop_types)) {
>>           fm.shop_types = [{name: '', item_types: ''}]
>>         } else {
>>           fm.shop_types = [...fm.shop_types, {name: '', item_types: ''}]
>>         }
>>       })
>> ```
>> ```dataviewjs
>> dv.table(['Shop Type', 'Item Types (comma-separated)', 'Delete'],
>>   (dv.current()['shop_types'] || []).map((st, i) => [
>>     `\`INPUT[text:shop_types[${i}].name]\``,
>>     `\`INPUT[text:shop_types[${i}].item_types]\``,
>>     `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-shop-type-${i}\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/arrayActions.js\n    args:\n      action: remove\n      field: shop_types\n      index: ${i}\n\`\`\``
>>   ]))
>> ```
>> ##### Shop Sizes
>> Each row defines how many items of a given rarity a shop size stocks. Add multiple rows with the same size name for different rarities. Count supports dice notation (e.g. `1d4`, `2d6+1`) or a static number.
>> `BUTTON[add-shop-size]`
>> ```meta-bind-button
>> label: Add Shop Size Entry
>> hidden: true
>> id: add-shop-size
>> style: primary
>> actions:
>>   - type: inlineJS
>>     code: |-
>>       app.fileManager.processFrontMatter(app.workspace.getActiveFile(), (fm) => {
>>         if (!Array.isArray(fm.shop_sizes)) {
>>           fm.shop_sizes = [{name: '', rarity: '', count: ''}]
>>         } else {
>>           fm.shop_sizes = [...fm.shop_sizes, {name: '', rarity: '', count: ''}]
>>         }
>>       })
>> ```
>> ```dataviewjs
>> dv.table(['Size Name', 'Rarity', 'Count', 'Delete'],
>>   (dv.current()['shop_sizes'] || []).map((ss, i) => [
>>     `\`INPUT[text:shop_sizes[${i}].name]\``,
>>     `\`INPUT[text:shop_sizes[${i}].rarity]\``,
>>     `\`INPUT[text:shop_sizes[${i}].count]\``,
>>     `\`\`\`meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-shop-size-${i}\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/arrayActions.js\n    args:\n      action: remove\n      field: shop_sizes\n      index: ${i}\n\`\`\``
>>   ]))
>> ```
>
>> [!div-m] Item Pricing
>> > [!columns|no-t 2]
>> >> ## Base Prices (cp)
>> >> |||
>> >> |:---:|:---:|
>> >> | Common | `INPUT[number:item_pricing.base_prices.common]` |
>> >> | Uncommon | `INPUT[number:item_pricing.base_prices.uncommon]` |
>> >> | Rare | `INPUT[number:item_pricing.base_prices.rare]` |
>> >> | Very Rare | `INPUT[number:item_pricing.base_prices["very-rare"]]` |
>> >> | Legendary | `INPUT[number:item_pricing.base_prices.legendary]` |
>> >
>> >> ## Modifiers
>> >> |||
>> >> |:---:|:---:|
>> >> | Minor Tier | `INPUT[number:item_pricing.tier_modifiers.minor]` |
>> >> | Major Tier | `INPUT[number:item_pricing.tier_modifiers.major]` |
>> >> | Consumable | `INPUT[number:item_pricing.consumable_modifier]` |
>> >> | Attunement | `INPUT[number:item_pricing.attunement_modifier]` |
>> >> | Recharge: Dawn | `INPUT[number:item_pricing.recharge_modifiers.dawn]` |
>> >> | Recharge: Short Rest | `INPUT[number:item_pricing.recharge_modifiers["short-rest"]]` |
>> >> | Recharge: Long Rest | `INPUT[number:item_pricing.recharge_modifiers["long-rest"]]` |

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
>>          if (value === false) return "✅"
>>          if (value !== null && Array.isArray(value) && value.length > 0) return "✅"
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