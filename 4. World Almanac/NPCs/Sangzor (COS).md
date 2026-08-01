---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1
  - monster/size/large
  - monster/type/beast
condition: healthy
images: []
aliases:
  - Sangzor
alignment: Chaotic Evil
description: >-
  A nine-foot-tall goat with gray fur that blends perfectly into the
  mountain rock, malice glinting in its eyes as it lowers its head to
  charge.
history: >-
  Known to the druids and berserkers of Barovia as "Bloodhorn," Sangzor
  has stalked Tsolenka Pass for years, shrugging off wounds that would
  kill an ordinary beast and evading every hunting party sent after it.
  Wearing its pelt is said to earn the wary respect of Strahd's mountain
  berserkers, who leave the wearer and their companions unmolested.
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Places of Interest/Tsolenka Pass.md|Tsolenka Pass]]'
pronounced: SANG-zor
race: Giant Goat
gender: male
age: null
occupation: []
groups: []
religions: []
personality: 'Feral, territorial, supernaturally resilient'
ideal: "Territory is everything — trespassers are ended."
bond: Bound instinctively to the crags and passes of Mount Ghakis, which it never leaves.
flaw: >-
  Reckless bloodlust — it charges even against impossible odds, and
  flees only once badly hurt.
goals: To kill or drive off anything that crosses its mountain pass.
likes: 'Solitude, the high crags, the taste of blood'
dislikes: 'Trespassers on its pass, the mountain-folk hunters who pursue it'
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
*Source: Curse of Strahd p. 160*

Sangzor — called "Bloodhorn" by the druids and berserkers who share Barovia's mountains with it — is a nine-foot-tall giant goat of unnatural resilience and vicious temperament, notorious enough to have earned its own name and reputation among the region's hunters.

## Terror of Tsolenka Pass

Sangzor ambushes travelers along [[Tsolenka Pass]], charging out of the mist and snow to ram them from the high ground, sending anyone it hits tumbling down the mountainside. It flees once badly wounded, vanishing through a hidden cleft in the rock — a habit that has let it evade the mountain folk's hunters for years. A character who wears Sangzor's pelt can command the wary respect of the berserkers who serve Strahd, who won't attack them unprovoked.

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
"name": "Sangzor (COS)"
"size": "Large"
"type": "beast"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "3d10 + 3"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "11"
  - !!int "12"
  - !!int "6"
  - !!int "12"
  - !!int "6"
"speed": "40 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "passive Perception 11"
"languages": ""
"cr": "1"
"traits":
  - "desc": "If Sangzor moves at least 20 feet straight toward a target and then hits\
      \ it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning\
      \ damage. If the target is a creature, it must succeed on a DC 13 Strength saving\
      \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Charge"
  - "desc": "Sangzor has advantage on Strength and Dexterity saving throws made against\
      \ effects that would knock it [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Sure-Footed"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8 (2d4\
      \ + 3) bludgeoning damage."
    "name": "Ram"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/sangzor-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
