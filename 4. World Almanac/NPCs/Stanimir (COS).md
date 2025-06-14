---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/humanoid/human
location: null
condition: healthy
images: []
relationships: []
aliases:
  - Stanimir
pronounced: null
race: null
gender: null
age: null
alignment: Chaotic Neutral
occupation: []
groups: []
religions: []
personality: null
ideal: null
bond: null
flaw: null
goals: null
likes: null
dislikes: null
partyRelationships: {}
image: null
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('imageCarousel', {current: dv.current()})
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
> **Party Relationship** | `$=await dv.view('metaBindInput', {type: 'inlineSelect', options: ['option(Stranger)','option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page('Configuration').active_party).file.name]})` |

# **`=this.file.name`**
*Source: Curse of Strahd p. 20*

TBD

## Traits/Goals
> [!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-gray] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-gray] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-gray] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`

> [!column|dataview] Goals
>> `INPUT[textArea:goals]`

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
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "Stanimir (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"ac_class": "15 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
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
  - "intelligence": "+6"
  - "wisdom": "+4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "6"
"traits":
  - "desc": "Stanimir is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 14, +6 to hit with spell attacks). Stanimir has the following\
      \ wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Friends.md|friends]],\
      \ [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
      \ slots): [[5. Mechanics/Spells/Charm Person.md|charm person]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
      \ [[5. Mechanics/Spells/Shield.md|shield]], [[5. Mechanics/Spells/Sleep.md|sleep]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Misty Step.md|misty step]], [[5. Mechanics/Spells/Suggestion.md|suggestion]]\n\
      \n3rd level (3 slots): [[5. Mechanics/Spells/Bestow Curse.md|bestow curse]],\
      \ [[5. Mechanics/Spells/Phantom Steed.md|phantom steed]], [[5. Mechanics/Spells/Vampiric Touch.md|vampiric touch]]\n\
      \n4th level (3 slots): [[5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
      \ [[5. Mechanics/Spells/Stoneskin.md|stoneskin]]\n\n5th level (1 slots): [[5. Mechanics/Spells/Dominate Person.md|dominate\
      \ person]]"
    "name": "Spellcasting"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "CoS"
"image": "4. World Almanac/NPCs/token/stanimir-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
