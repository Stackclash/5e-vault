---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/0
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\milivoj.webp
aliases:
  - Milivoj
alignment: Neutral
description: >-
  Milivoj is the brawny young gravedigger and groundskeeper of St. Andral's
  Church in Vallaki, rarely seen without the shovel he wields like a club.
  Furrowed-browed and short-tempered, he's grown bitter watching the
  burgomaster's empty promises while his own family goes hungry.
history: >-
  Milivoj tends the churchyard and digs graves under Father Lucian Petrovich,
  but he has little patience for the priest's talk of hope or the burgomaster's
  proclamations that "All will be well!" Desperate to provide for his younger
  siblings, he let slip to [[Henrik Van Der Voort (COS)|Henrik van der Voort]],
  the town's coffin maker, that St. Andral's bones lay hidden beneath the church
  — information he'd overheard from the altar boy, Yeska. When Henrik offered
  him coin to steal the bones, Milivoj pried up the chapel floorboards and did
  it, leaving the church without its protection against Strahd's minions. Father
  Lucian suspects him but hasn't confronted him, fearing what the temperamental
  young man might do.
relationships: []
partyRelationships: {}
location: null
pronounced: MIL-ih-voy
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 17
occupation:
  - Gravedigger
  - Groundskeeper
groups:
  - St. Andral's Church
religions: []
personality: 'Brooding, temperamental, protective; carries himself like a man twice his age'
ideal: 'Family comes before anything else, even the law.'
bond: 'His younger siblings, whom he''s desperate to keep fed and safe.'
flaw: His temper and his desperation make him easy for the wrong people to buy.
goals: 'To free his family from Barovia''s curse, or at least keep them fed until then.'
likes: 'Quiet work, his siblings, being trusted with responsibility'
dislikes: >-
  Empty promises of 'All will be well,' being confronted about his mistakes,
  feeling powerless
---
> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
> ```
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Gender** | `INPUT[inlineSelect(option(male),option(female)):gender]` |
> **Age** | `INPUT[number:age]` |
> **Alignment** | `INPUT[inlineSelect(option(Lawful Good),option(Neutral Good),option(Chaotic Good),option(Lawful Neutral),option(Neutral),option(Chaotic Neutral),option(Lawful Evil),option(Neutral Evil),option(Chaotic Evil)):alignment]` |
> **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `INPUT[inlineList:occupation]` |
> **Group(s)** | `INPUT[inlineList:groups]` |
> **Religion(s)** | `INPUT[inlineList:religions]` |
> **Current Location** | `INPUT[suggester(optionQuery(#location)):location]` |
> **Party Relationship** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` |

# **`=this.file.name`**
*Source: Curse of Strahd p. 97*

TBD

> [!column|no-t flex]
>> [!metadata|text-Center] Description
>> `INPUT[textArea:description]`
>
>> [!metadata|text-Center] History
>> `INPUT[textArea:history]`

## Traits/Goals
> [!column|no-t flex]
>> [!metadata|text-Center bg-c-yellow] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-pink] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-brown] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-orange] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`
>
>> [!metadata|text-Center] Goals
>> `INPUT[textArea:goals]`

## Player-Facing
> [!metadata|text-Center] What the Party Knows
> `INPUT[textArea:player_impression]`

## Secrets
`INPUT[textArea:secrets]`

## Relationships
`BUTTON[add-relationship,remove-relationship]`
```meta-bind-button
style: primary
label: Add Relationship
id: add-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Add Relationship.md"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Remove Relationship.md"
```
> [!div | no-t clean txt-c]
> `$=await dv.view("views/npcRelationships", { current: dv.current() })`

## Quests
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const quests = dc.useQuery(`@page and #quest and connected(${currentPage.$link})`)
  const columns = [
    {
      id: 'Quest',
      value: (row) => row.$link
    },
    {
      id: 'Description',
      value: (row) => row.$frontmatter.description.raw || ''
    },
    {
      id: 'Involvement',
      value: (row) => row.$frontmatter.npcs.raw.find(n => n.name.includes(currentPage.$name)).description || ''
    }
  ]
  
  return <dc.Table rows={quests} columns={columns}/>
}
```

## Stats
```statblock
"name": "Milivoj (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"modifier": !!int "0"
"stats":
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"gear":
  - "[[/5. Mechanics/Items/Club.md|club]]"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 4 (1d4\
      \ + 2) bludgeoning damage."
    "name": "Shovel"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/milivoj-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
