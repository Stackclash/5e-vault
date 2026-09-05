---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\vilnius.webp
aliases:
  - Vilnius
alignment: Neutral Evil
description: >-
  A frightened man in scorched robes, his hair half burned away and his face and
  arms blistered from magical fire — Vilnius looks every bit the coward hiding
  from a fight he can't win.
history: >-
  Vilnius came to the Amber Temple as apprentice to the wizard Jakarion, drawn
  by the promise of forbidden knowledge. When flameskulls guarding the temple
  incinerated his master, Vilnius fled deeper into the ruins with his invisible
  quasit familiar, surviving on vermin and refusing to leave the lecture hall
  until he knows the amber golem patrolling the hall outside has been destroyed.
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Places of Interest/The Amber Temple.md|The Amber Temple]]'
pronounced: VIL-nee-us
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 26
occupation:
  - Apprentice wizard
groups:
  - Jakarion's expedition (Amber Temple)
religions: []
personality: >-
  Greedy, treacherous, cowardly — quick to abandon anyone who isn't useful to
  him
ideal: Self-preservation and personal gain above all loyalty.
bond: >-
  What remains of his late master Jakarion's magical legacy — mostly because he
  covets it for himself.
flaw: >-
  His cowardice and greed make him quick to betray allies the moment his own
  safety is at risk.
goals: >-
  To reclaim Jakarion's staff and spellbook, then escape the Amber Temple and
  Barovia for good.
likes: 'Wealth, magical trinkets, being left alone'
dislikes: >-
  Combat, the amber golem patrolling outside his hiding place, anyone who might
  steal his loot
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
*Source: Curse of Strahd p. 185*

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
"name": "Vilnius (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "15 with [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "40"
"hit_dice": "9d8"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "11"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "6"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+6"
"gear":
  - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "6"
"traits":
  - "desc": "Vilnius is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 14, +6 to hit with spell attacks). Vilnius has the following\
      \ wizard spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
      \ [[/5. Mechanics/Spells/Light.md|light]], [[/5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n**1st level\
      \ (4 slots):** [[/5. Mechanics/Spells/Detect Magic.md|detect magic]], [[/5. Mechanics/Spells/Mage Armor.md|mage armor]],\
      \ [[/5. Mechanics/Spells/Magic Missile.md|magic missile]], [[/5. Mechanics/Spells/Shield.md|shield]]\n\
      \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Misty Step.md|misty step]], [[/5. Mechanics/Spells/Suggestion.md|suggestion]]\n\
      \n**3rd level (3 slots):** [[/5. Mechanics/Spells/Counterspell.md|counterspell]],\
      \ [[/5. Mechanics/Spells/Fireball.md|fireball]], [[/5. Mechanics/Spells/Fly.md|fly]]\n\
      \n**4th level (3 slots):** [[/5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
      \ [[/5. Mechanics/Spells/Ice Storm.md|ice storm]]\n\n**5th level (1 slots):** [[/5. Mechanics/Spells/Cone Of Cold.md|cone\
      \ of cold]]"
    "name": "Spellcasting"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/vilnius-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
