---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-4
  - monster/size/medium
  - monster/type/humanoid/mongrelfolk
condition: healthy
images:
  - 4. World Almanac\NPCs\img\clovin-belview.webp
aliases:
  - Clovin Belview
alignment: Neutral Evil
description: >-
  Clovin stands barely four and a half feet tall with a barrel-like frame. His
  right head combines the patchy-haired features of a man with a goat's stubby
  horns; his left, half-sized and cherubic, is partly covered in crocodilian
  hide. A crab's pincer serves as his left hand and a bear's paw as his right
  foot. He wears an ill-fitting monk's robe cinched with a hempen rope belt, and
  he plays the viol beautifully when drunk — which is most of the time.
history: >-
  Clovin is one of the Belview family, transformed generations ago by [[The
  Abbot (COS)|the Abbot]] at the family's own desperate request for bestial
  "perfection." Unlike most of his kin, Clovin was never locked away: he serves
  as the Abbot's manservant, ringing the abbey bell (area S17) to call the
  mongrelfolk to dinner and doling out meals to the sixty-odd madhouse captives
  at his own discretion — which the starving prefer to call cruelty.
relationships: []
partyRelationships:
  Midnight Covenant: Acquaintance
location: >-
  [[4. World Almanac/Places of Interest/Abbey of Saint Markovia.md|Abbey of
  Saint Markovia]]
pronounced: CLOH-vin BEL-view
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 54
occupation:
  - Caretaker
groups:
  - Belview family
religions:
  - The Morninglord
personality: 'Subservient, eccentric, deeply troubled'
ideal: >-
  Survival and obedience are the utmost priorities in a world that neither wants
  nor understands you
bond: >-
  His twisted loyalty to the Abbot and a sense of belonging among the
  mongrelfolk
flaw: His fear of rejection and punishment overshadows his better judgment
goals: >-
  To please the Abbot, to find some measure of peace or acceptance in his
  existence
likes: >-
  Music (despite his lack of skill), the rare moments of quiet and solitude,
  alcohol
dislikes: >-
  The disdain or fear of outsiders, the cruelty of his existence, the conflict
  within the Abbey
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
*Source: Curse of Strahd p. 147*

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
"name": "Clovin Belview (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "mongrelfolk"
"alignment": "Neutral Evil"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"modifier": !!int "-1"
"stats":
  - !!int "12"
  - !!int "9"
  - !!int "15"
  - !!int "9"
  - !!int "10"
  - !!int "6"
"speed": "20 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+3"
"gear":
  - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "1/4"
"traits":
  - "desc": "The mongrelfolk has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks and on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]],\
      \ or knocked [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]."
    "name": "Two-Headed"
  - "desc": "Clovin can mimic any sounds it has heard, including voices. A creature\
      \ that hears the sounds can tell they are imitations with a successful DC 12\
      \ Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]]) check."
    "name": "Mimicry"
"actions":
  - "desc": "Clovin makes two attacks: one with its bite and one with its claw or\
      \ dagger."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3 (1d4\
      \ + 1) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3 (1d4\
      \ + 1) slashing damage."
    "name": "Claw"
  - "desc": "*Melee  or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 3 (1d4 + 1) piercing damage."
    "name": "Dagger"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/clovin-belview-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
