---
obsidianUIMode: preview
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
  factions: 4. World Almanac/Factions
  items: 4. World Almanac/Items
  deities: 4. World Almanac/Deities
  creatures: 4. World Almanac/Creatures
relationship_types:
  - type: father
    category: family
    inverse:
      male: son
      female: daughter
  - type: mother
    category: family
    inverse:
      male: son
      female: daughter
  - type: son
    category: family
    inverse:
      male: father
      female: mother
  - type: daughter
    category: family
    inverse:
      male: father
      female: mother
  - type: husband
    category: family
    inverse: wife
  - type: wife
    category: family
    inverse: husband
  - type: brother
    category: family
    inverse:
      male: brother
      female: sister
  - type: sister
    category: family
    inverse:
      male: brother
      female: sister
  - type: uncle
    category: family
    inverse:
      male: nephew
      female: niece
  - type: aunt
    category: family
    inverse:
      male: nephew
      female: niece
  - type: nephew
    category: family
    inverse:
      male: uncle
      female: aunt
  - type: niece
    category: family
    inverse:
      male: uncle
      female: aunt
  - type: cousin
    category: family
    inverse: cousin
    symmetric: true
  - type: friend
    category: personal
    inverse: friend
    symmetric: true
  - type: ally
    category: personal
    inverse: ally
  - type: rival
    category: personal
    inverse: rival
  - type: enemy
    category: personal
    inverse: enemy
  - type: lover
    category: personal
    inverse: lover
    symmetric: true
  - type: mentor
    category: personal
    inverse: student
  - type: student
    category: personal
    inverse: mentor
  - type: employer
    category: work
    inverse: employee
  - type: employee
    category: work
    inverse: employer
  - type: serves
    category: work
    inverse: master
  - type: master
    category: work
    inverse: serves
  - type: handler
    category: work
    inverse: asset
  - type: asset
    category: work
    inverse: handler
  - type: patron
    category: work
    inverse: client
  - type: client
    category: work
    inverse: patron
  - type: member
    category: faction
  - type: leader
    category: faction
  - type: founder
    category: faction
    inverse: ""
  - type: agent
    category: faction
  - type: former-member
    category: faction
  - type: worships
    category: faith
  - type: cleric-of
    category: faith
  - type: home
    category: place
  - type: works-at
    category: place
  - type: origin
    category: place
  - type: imprisoned-at
    category: place
shop_types:
  - name: Blacksmith
    filters:
      - type: weapon
        subtype_any: melee
      - type: armor
      - tags_any: item/shield
  - name: Apothecary
    filters:
      - type: wondrous
        subtype_any: potion, oil
      - type: gear
        subtype_any: herb
  - name: Fletcher
    filters:
      - type: weapon
        name_any: bow, sling
      - type: gear
        subtype_any: ammunition
  - name: General Store
    filters:
      - type: weapon
        subtype_none: explosive
        name_none: pistol, rifle, revolver, musket, shotgun, laser, antimatter
      - type: armor
      - tags_any: item/shield
      - type: wondrous
  - name: Armorer
    filters:
      - type: armor
      - tags_any: item/shield
  - name: Weaponsmith
    filters:
      - type: weapon
        subtype_any: melee, ranged
        name_none: pistol, rifle, revolver, musket, shotgun, laser, antimatter
  - name: Jeweler
    filters:
      - type: wondrous
        subtype_any: ring
      - type: gear
        subtype_any: treasure-gemstone, treasure-art-object
      - type: wondrous
        name_any: amulet, necklace, circlet, brooch, pendant
  - name: Enchanter
    filters:
      - type: wondrous
        subtype_none: potion
  - name: Scriptorium
    filters:
      - type: wondrous
        subtype_any: scroll
      - type: gear
        subtype_any: spellcasting-focus
  - name: Alchemist
    filters:
      - type: wondrous
        subtype_any: potion, oil
      - type: gear
        name_any: acid, alchemist, antitoxin, holy water, poison, healer
  - name: Stable
    filters:
      - type: gear
        subtype_any: mount, tack-and-harness
      - type: vehicle
        subtype_any: land
  - name: Shipwright
    filters:
      - type: vehicle
        subtype_any: ship-water, airship-air
  - name: Instrument Maker
    filters:
      - type: gear
        subtype_any: instrument
  - name: Trading Post
    filters:
      - type: gear
        subtype_none: herb, ammunition, ammunition-firearm, treasure-gemstone, treasure-art-object, treasure-coinage, mount, tack-and-harness, spellcasting-focus, instrument, oil, curse
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
  - name: Grand
    rarity: none
    count: 2d6+4
  - name: Grand
    rarity: common
    count: 2d6
  - name: Grand
    rarity: uncommon
    count: 2d4
  - name: Grand
    rarity: rare
    count: 1d4
  - name: Grand
    rarity: very-rare
    count: 1d2
item_pricing:
  base_prices:
    none: 0
    common: 100000
    uncommon: 400000
    rare: 4000000
    very-rare: 40000000
    legendary: 200000000
  tier_modifiers:
    minor: 0.75
    major: 1.5
  consumable_modifier: 0.5
  attunement_modifier: 0.9
  recharge_modifiers:
    dawn: 0.9
    short-rest: 0.95
    long-rest: 0.85
enums:
  npc_conditions:
    - healthy
    - injured
    - captured
    - missing
    - dead
    - unknown
  party_relationships:
    - Acquaintance
    - Friendly
    - Ally
    - Disgruntled
    - Enemy
  party_standings:
    - Hostile
    - Unfriendly
    - Neutral
    - Friendly
    - Allied
  location_statuses:
    - thriving
    - stable
    - wary
    - besieged
    - occupied
    - ruined
  faction_kinds:
    - guild
    - cult
    - order
    - house
    - court
    - family
    - company
    - other
  faction_statuses:
    - active
    - broken
    - dormant
    - destroyed
  alignments:
    - Lawful Good
    - Neutral Good
    - Chaotic Good
    - Lawful Neutral
    - Neutral
    - Chaotic Neutral
    - Lawful Evil
    - Neutral Evil
    - Chaotic Evil
  genders: [ male, female ]
  quest_kinds: [ arc, quest, thread ]
  step_statuses: [ planned, played, skipped, void ]
  campaign_statuses: [ planning, active, hiatus, finished ]
settlement_wealth:
  - name: destitute
    price: 0.8
  - name: poor
    price: 0.9
  - name: modest
    price: 1
  - name: prosperous
    price: 1.15
  - name: rich
    price: 1.3
shop_defaults:
  buy_rate: 0.5
rules_lookup:
  sources:
    - path: 5. Mechanics/Spells
      kind: Spell
    - path: 5. Mechanics/Rules
      kind: Rule
      sections: true
    - path: 6. Resources/Books/Players Handbook 2014
      kind: Rule
      sections: true
    - path: 6. Resources/Books/Dungeon Masters Guide 2014
      kind: Rule
      sections: true
    - path: 5. Mechanics/Items
      kind: Item
      default_off: true
note_fields:
  npc:
    - { field: condition, input: inlineSelect, tab: header, enum: npc_conditions, chip: true, bulk: true }
    - { field: party_relationships, input: inlineSelect, tab: header, enum: party_relationships, chip: true, bulk: true, per_party: true, label: Party relationship }
    - { field: pronounced, input: text, tab: header }
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: race, input: suggester, tab: infobox, source: '"5. Mechanics/Races"', bulk: true }
    - { field: gender, input: inlineSelect, tab: infobox, enum: genders, bulk: true }
    - { field: age, input: number, tab: infobox, bulk: true }
    - { field: alignment, input: inlineSelect, tab: infobox, enum: alignments, bulk: true }
    - { field: occupation, input: inlineList, tab: infobox }
    - { field: location, input: suggester, tab: infobox, source: "#location", label: Current location, bulk: true }
    - { field: appearance, input: text, tab: At the Table }
    - { field: voice, input: textArea, tab: At the Table }
    - { field: goals, input: textArea, tab: At the Table }
    - { field: personality, input: textArea, tab: At the Table }
    - { field: ideal, input: textArea, tab: At the Table }
    - { field: bond, input: textArea, tab: At the Table }
    - { field: flaw, input: textArea, tab: At the Table }
    - { field: likes, input: textArea, tab: At the Table }
    - { field: dislikes, input: textArea, tab: At the Table }
    - { field: description, input: textArea, tab: Lore }
    - { field: history, input: textArea, tab: Lore }
    - { field: summary, input: textArea, tab: Player-Facing }
  region:
    - { field: status, input: inlineSelect, tab: header, enum: location_statuses, chip: true, bulk: true }
    - { field: pronounced, input: text, tab: header }
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: location, input: suggester, tab: infobox, source: "#location", label: Parent, bulk: true }
    - { field: population, input: number, tab: infobox, bulk: true }
    - { field: terrain, input: text, tab: infobox, bulk: true }
    - { field: rulers, input: inlineListSuggester, tab: infobox, source: "#npc" }
    - { field: government, input: text, tab: infobox }
    - { field: army, input: text, tab: infobox }
    - { field: imports, input: inlineList, tab: infobox }
    - { field: exports, input: inlineList, tab: infobox }
    - { field: atmosphere, input: textArea, tab: At the Table }
    - { field: hazards, input: textArea, tab: At the Table }
    - { field: climate, input: text, tab: At the Table, bulk: true }
    - { field: summary, input: textArea, tab: Player-Facing }
  settlement:
    - { field: status, input: inlineSelect, tab: header, enum: location_statuses, chip: true, bulk: true }
    - { field: pronounced, input: text, tab: header }
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: location, input: suggester, tab: infobox, source: "#location", label: Parent, bulk: true }
    - { field: population, input: number, tab: infobox, bulk: true }
    - { field: terrain, input: text, tab: infobox, bulk: true }
    - { field: rulers, input: inlineListSuggester, tab: infobox, source: "#npc" }
    - { field: government, input: text, tab: infobox }
    - { field: army, input: text, tab: infobox }
    - { field: imports, input: inlineList, tab: infobox }
    - { field: exports, input: inlineList, tab: infobox }
    - { field: atmosphere, input: textArea, tab: At the Table }
    - { field: hazards, input: textArea, tab: At the Table }
    - { field: climate, input: text, tab: At the Table, bulk: true }
    - { field: summary, input: textArea, tab: Player-Facing }
    - { field: wealth, input: inlineSelect, tab: infobox, enum: settlement_wealth, bulk: true }
  place-of-interest:
    - { field: status, input: inlineSelect, tab: header, enum: location_statuses, chip: true, bulk: true }
    - { field: pronounced, input: text, tab: header }
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: location, input: suggester, tab: infobox, source: "#location", label: Parent, bulk: true }
    - { field: population, input: number, tab: infobox, bulk: true }
    - { field: terrain, input: text, tab: infobox, bulk: true }
    - { field: rulers, input: inlineListSuggester, tab: infobox, source: "#npc" }
    - { field: government, input: text, tab: infobox }
    - { field: army, input: text, tab: infobox }
    - { field: imports, input: inlineList, tab: infobox }
    - { field: exports, input: inlineList, tab: infobox }
    - { field: atmosphere, input: textArea, tab: At the Table }
    - { field: hazards, input: textArea, tab: At the Table }
    - { field: climate, input: text, tab: At the Table, bulk: true }
    - { field: summary, input: textArea, tab: Player-Facing }
  shop:
    - { field: status, input: inlineSelect, tab: header, enum: location_statuses, chip: true, bulk: true }
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: location, input: suggester, tab: infobox, source: "#location", label: Parent, bulk: true }
    - { field: type, input: inlineSelect, tab: infobox, enum: shop_types, label: Shop type, bulk: true }
    - { field: size, input: inlineSelect, tab: infobox, enum: shop_sizes, label: Shop size, bulk: true }
    - { field: cost_modifier, input: number, tab: infobox, bulk: true }
    - { field: buy_rate, input: number, tab: infobox, bulk: true }
    - { field: owners, input: inlineListSuggester, tab: At the Table, source: "#npc" }
    - { field: staff, input: inlineListSuggester, tab: At the Table, source: "#npc" }
    - { field: atmosphere, input: textArea, tab: At the Table }
    - { field: summary, input: textArea, tab: Player-Facing }
  world:
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: economic_scale, input: number, tab: infobox, bulk: true }
    - { field: calendar, input: text, tab: infobox }
    - { field: summary, input: textArea, tab: Player-Facing }
  faction:
    - { field: standing, input: inlineSelect, tab: header, enum: party_standings, chip: true, bulk: true, per_party: true }
    - { field: status, input: inlineSelect, tab: header, enum: faction_statuses, chip: true, bulk: true }
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: kind, input: inlineSelect, tab: infobox, enum: faction_kinds, bulk: true }
    - { field: location, input: suggester, tab: infobox, source: "#location", label: Base, bulk: true }
    - { field: renown, input: number, tab: infobox, per_party: true }
    - { field: goals, input: textArea, tab: At the Table }
    - { field: resources, input: textArea, tab: At the Table }
    - { field: symbol, input: text, tab: At the Table }
    - { field: motto, input: text, tab: At the Table }
    - { field: summary, input: textArea, tab: Player-Facing }
  story-item:
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: holder, input: suggester, tab: Overview, source: "#player" }
    - { field: location, input: suggester, tab: Overview, source: "#location", label: Rests at }
    - { field: base_item, input: suggester, tab: Overview, source: '"5. Mechanics/Items"' }
    - { field: rarity, input: text, tab: Overview, bulk: true }
    - { field: attunement, input: toggle, tab: Overview, bulk: true }
    - { field: curse, input: textArea, tab: DM }
    - { field: summary, input: textArea, tab: Player-Facing }
  story-deity:
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: title, input: text, tab: Overview }
    - { field: symbol, input: text, tab: Overview }
    - { field: alignment, input: inlineSelect, tab: Overview, enum: alignments, bulk: true }
    - { field: domains, input: inlineList, tab: Overview }
    - { field: mechanics, input: suggester, tab: Overview, source: '"5. Mechanics/Deities"' }
    - { field: summary, input: textArea, tab: Player-Facing }
  story-creature:
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: base_creature, input: suggester, tab: Overview, source: '"5. Mechanics/Bestiary"' }
    - { field: cr, input: text, tab: Overview, bulk: true }
    - { field: size, input: text, tab: Overview, bulk: true }
    - { field: type, input: text, tab: Overview, bulk: true }
    - { field: environments, input: inlineList, tab: Overview }
    - { field: description, input: textArea, tab: Overview }
    - { field: summary, input: textArea, tab: Player-Facing }
  quest:
    - { field: active, input: toggle, tab: header, chip: true, bulk: true, per_party: true }
    - { field: completed, input: toggle, tab: header, chip: true, bulk: true, per_party: true }
    - { field: gist, input: text, tab: gist, bulk: true }
    - { field: kind, input: inlineSelect, tab: infobox, enum: quest_kinds, bulk: true }
    - { field: parent, input: suggester, tab: infobox, source: "#quest", label: Arc }
    - { field: giver, input: suggester, tab: NPCs & Links, source: "#npc" }
    - { field: description, input: textArea, tab: Description }
    - { field: stakes, input: textArea, tab: Description }
    - { field: reward, input: text, tab: Description }
    - { field: deadline, input: text, tab: Description, bulk: true }
    - { field: summary, input: textArea, tab: Player-Facing }
  session-journal:
    - { field: party_level, input: number, tab: header, chip: true, bulk: true }
    - { field: wrapped, input: toggle, tab: header, chip: true, bulk: true }
    - { field: session_number, input: number, tab: infobox, bulk: true }
    - { field: spotlight, input: inlineListSuggester, tab: infobox, source: "#player" }
    - { field: summary, input: textArea, tab: Recap }
  party:
    - { field: travel_multiplier, input: number, tab: Travel }
    - { field: travel_bonus, input: number, tab: Travel }
    - { field: travel_hours_per_day, input: number, tab: Travel }
    - { field: encumbered, input: toggle, tab: Travel }
    - { field: horseshoes_of_speed, input: toggle, tab: Travel }
    - { field: exhaustion_level, input: number, tab: Travel }
  campaign:
    - { field: status, input: inlineSelect, tab: infobox, enum: campaign_statuses, bulk: true }
    - { field: level_range, input: text, tab: infobox }
    - { field: site_slug, input: text, tab: infobox }
    - { field: summary, input: textArea, tab: infobox }
---
  > [!infobox|n-th]
> | | |
> |---|---|
> | **Active Campaign:** | `INPUT[suggester(optionQuery(#campaign)):active_campaign]` |
> | **Active World** _(from campaign)_ | `$= dv.page(dv.page('Configuration').active_campaign)?.world ?? '—'` |
> | **Active Party:** _(from campaign)_ | `$= dv.page(dv.page('Configuration').active_campaign)?.party ?? '—'` |

# Current Party/World Info
```datacorejsx
return function View() {
  const file = dc.useCurrentFile()
  const campaignLink = file.value("active_campaign")
  const campaign = dc.useFile(campaignLink?.path)
  const partyPath = campaign?.value("party")?.path
  const players = dc.useQuery("@page and #player")
  const partySize = players.filter(p => p.value("party")?.path === partyPath).length

  const [currentDate, setCurrentDate] = dc.useState(null)
  dc.useEffect(() => {
    let active = true
    self.require.import("z_Scripts/JS/calendarDate.js").then(({ getDate }) => {
      if (active) setCurrentDate(getDate(dc.app))
    })
    return () => { active = false }
  }, [])

  const dateStr = currentDate
    ? `${currentDate.prettyPrint.month} ${currentDate.original.day}, ${currentDate.original.year} (${currentDate.prettyPrint.day})`
    : "…"

  return (
    <div>
      <p>Current Party Size: {partySize}</p>
      <p>Current Date: {dateStr}</p>
    </div>
  )
}
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
INPUT[select(option(1, 'File Location Configuration'), option(2, 'Relationship Types'), option(3, 'Shop Configuration'), option(4, 'Item Pricing'), class(tabbed))]
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
>> [!div-m] Relationship Types
>> Read as: *this note* has `type` relationship to the target ("Adrian → father → Davian": Davian is Adrian's father). The **inverse** is how the other side reads it; a gendered inverse is picked by the gender of the note storing the edge. **Symmetric** types read the same both ways (cousin, friend).
>> `BUTTON[add-relationship-type]`
>> ```meta-bind-button
>> label: Add Relationship Type
>> hidden: true
>> id: add-relationship-type
>> style: primary
>> actions:
>>   - type: js
>>     file: z_Scripts/Meta Bind/arrayActions.js
>>     args:
>>       action: add
>>       field: relationship_types
>>       template: {"type": "", "category": "personal", "inverse": ""}
>> ```
>> ```datacorejsx
>> return function View() {
>>   const file = dc.useCurrentFile()
>>   const types = file.value('relationship_types') || []
>>   const rows = types.map((t, i) => ({ i, t }))
>>   const md = (content) => <dc.Markdown content={content} sourcePath={file.$path} />
>>   const CATEGORIES = ['family', 'personal', 'work', 'faction', 'faith', 'place']
>>   const toggleGendered = async (i) => {
>>     const tfile = app.vault.getAbstractFileByPath(file.$path)
>>     await app.fileManager.processFrontMatter(tfile, fm => {
>>       const inv = fm.relationship_types?.[i]?.inverse
>>       if (inv && typeof inv === 'object') fm.relationship_types[i].inverse = inv.male || inv.female || ''
>>       else fm.relationship_types[i].inverse = { male: inv || '', female: inv || '' }
>>     })
>>   }
>>   const columns = [
>>     { id: 'Type', value: ({ i }) => md(`\`INPUT[text:relationship_types[${i}].type]\``) },
>>     { id: 'Category', value: ({ i }) => md(`\`INPUT[inlineSelect(${CATEGORIES.map(c => 'option(' + c + ')').join(', ')}):relationship_types[${i}].category]\``) },
>>     { id: 'Inverse', value: ({ i, t }) => (
>>       <span style={{ display: 'inline-flex', gap: '0.4em', alignItems: 'center' }}>
>>         {t.inverse && typeof t.inverse === 'object'
>>           ? <>{md(`male \`INPUT[text:relationship_types[${i}].inverse.male]\``)}{md(`female \`INPUT[text:relationship_types[${i}].inverse.female]\``)}</>
>>           : md(`\`INPUT[text:relationship_types[${i}].inverse]\``)}
>>         <button className="entity-chip-clear" aria-label="Switch between one inverse and male/female" onClick={() => toggleGendered(i)}>{t.inverse && typeof t.inverse === 'object' ? 'one' : 'm/f'}</button>
>>       </span>
>>     ) },
>>     { id: 'Symmetric', value: ({ i }) => md(`\`INPUT[toggle:relationship_types[${i}].symmetric]\``) },
>>     { id: '', value: ({ i }) => md('```meta-bind-button\nicon: x\ntooltip: Delete type\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/arrayActions.js\n    args:\n      action: remove\n      field: relationship_types\n      index: ' + i + '\n```') }
>>   ]
>>   return <dc.Table rows={rows} columns={columns} paging={false} />
>> }
>> ```
>
>> [!div-m] Shop Configuration
>> ##### Shop Types
>> A shop stocks items that match **any** of its rules. Within a rule, every field you fill in must hold (AND); leave a field blank to ignore it. List fields accept comma-separated values.
>> - **Type** — `weapon`, `armor`, `gear`, `wondrous`, `vehicle`
>> - **Subtype (any)** — item must have one of these, e.g. `melee`, `ranged`, `ammunition`, `potion`, `oil`, `herb`, `ring`, `wand`, `rod`, `scroll`, `instrument`, `mount`
>> - **Subtype (excl)** — item must have none of these (carve-outs, e.g. `potion` to leave it out of a magic shop)
>> - **Tags (any)** — hierarchical compendium tags, e.g. `item/shield`, `item/weapon/martial` (needed for shields, which have no type/subtype)
>> - **Name incl / excl** — name must contain one of the "incl" words and none of the "excl" words, e.g. incl `bow, sling` for a Fletcher
>> `tags (excl)` is also supported in frontmatter but omitted from this editor for width.
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
>>           fm.shop_types = [{name: '', filters: []}]
>>         } else {
>>           fm.shop_types = [...fm.shop_types, {name: '', filters: []}]
>>         }
>>       })
>> ```
>> ```datacorejsx
>> return function View() {
>>   const file = dc.useCurrentFile()
>>   const shopTypes = file.value('shop_types') || []
>>   const md = (content) => <dc.Markdown content={content} />
>>   const btn = (body) => '```meta-bind-button\n' + body + '\n```'
>>   const pageSize = 2
>>   const pageCount = Math.max(1, Math.ceil(shopTypes.length / pageSize))
>>   const [page, setPage] = dc.useState(0)
>>   const clamped = Math.min(Math.max(page, 0), pageCount - 1)
>>   const start = clamped * pageSize
>>   const visible = shopTypes.slice(start, start + pageSize)
>>   const nav = <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em', margin: '0.5em 0' }}>
>>     <button disabled={clamped <= 0} onClick={() => setPage(clamped - 1)}>‹ Prev</button>
>>     <span>Page {clamped + 1} of {pageCount} · {shopTypes.length} shop types</span>
>>     <button disabled={clamped >= pageCount - 1} onClick={() => setPage(clamped + 1)}>Next ›</button>
>>   </div>
>>   return <div>
>>     {nav}
>>     {visible.map((st, vi) => {
>>       const i = start + vi
>>       const filters = st.filters || []
>>       const rows = Array.from({ length: filters.length }, (_, j) => j)
>>       const columns = [
>>         { id: 'Type', value: (j) => j, render: (j) => md(`\`INPUT[text:shop_types[${i}].filters[${j}].type]\``) },
>>         { id: 'Subtype (any)', value: (j) => j, render: (j) => md(`\`INPUT[text:shop_types[${i}].filters[${j}].subtype_any]\``) },
>>         { id: 'Subtype (excl)', value: (j) => j, render: (j) => md(`\`INPUT[text:shop_types[${i}].filters[${j}].subtype_none]\``) },
>>         { id: 'Tags (any)', value: (j) => j, render: (j) => md(`\`INPUT[text:shop_types[${i}].filters[${j}].tags_any]\``) },
>>         { id: 'Name incl', value: (j) => j, render: (j) => md(`\`INPUT[text:shop_types[${i}].filters[${j}].name_any]\``) },
>>         { id: 'Name excl', value: (j) => j, render: (j) => md(`\`INPUT[text:shop_types[${i}].filters[${j}].name_none]\``) },
>>         { id: 'Delete', title: '', value: (j) => j, render: (j) => md(btn(`icon: x\ntooltip: Delete rule?\nid: rm-filter-${i}-${j}\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/arrayActions.js\n    args:\n      action: remove\n      field: shop_types[${i}].filters\n      index: ${j}`)) }
>>       ]
>>       return <div key={i}>
>>         {md(`**Shop Type:** \`INPUT[text:shop_types[${i}].name]\``)}
>>         <dc.Table rows={rows} columns={columns} paging={false} />
>>         {md(btn(`label: Add Rule\nicon: plus\nid: add-filter-${i}\nstyle: default\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/arrayActions.js\n    args:\n      action: add\n      field: shop_types[${i}].filters`))}
>>         {md(btn(`label: Delete Shop Type\nicon: trash\ntooltip: Delete shop type?\nid: del-shop-${i}\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/arrayActions.js\n    args:\n      action: remove\n      field: shop_types\n      index: ${i}`))}
>>       </div>
>>     })}
>>     {nav}
>>   </div>
>> }
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
>> ```datacorejsx
>> return function View() {
>>   const file = dc.useCurrentFile()
>>   const count = (file.value('shop_sizes') || []).length
>>   const rows = Array.from({ length: count }, (_, i) => i)
>>   const md = (content) => <dc.Markdown content={content} />
>>   const columns = [
>>     { id: 'Size Name', value: (i) => i, render: (i) => md(`\`INPUT[text:shop_sizes[${i}].name]\``) },
>>     { id: 'Rarity', value: (i) => i, render: (i) => md(`\`INPUT[text:shop_sizes[${i}].rarity]\``) },
>>     { id: 'Count', value: (i) => i, render: (i) => md(`\`INPUT[text:shop_sizes[${i}].count]\``) },
>>     { id: 'Delete', value: (i) => i, render: (i) => md('```meta-bind-button\nicon: x\ntooltip: Delete?\nid: remove-shop-size-' + i + '\nlabel: ""\nstyle: destructive\nactions:\n  - type: js\n    file: z_Scripts/Meta Bind/arrayActions.js\n    args:\n      action: remove\n      field: shop_sizes\n      index: ' + i + '\n```') }
>>   ]
>>   return <dc.Table rows={rows} columns={columns} paging={false} />
>> }
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