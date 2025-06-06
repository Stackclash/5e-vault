---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/7
- monster/size/medium
- monster/type/humanoid/elf
location: 
condition: healthy
images: []
relationships: []
aliases: [Naxa]
pronounced: 
race: 
gender: 
age: 
alignment: Neutral Evil
occupation: 
groups: []
religions: []
personality: 
ideal: 
bond: 
flaw: 
goals: 
likes: 
dislikes: 
partyRelationships: {}
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
*Source: Vecna: Eve of Ruin*

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
"name": "Naxa (VEoR)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "15 with [mage armor](compendium/spells/mage-armor.md)"
"hp": !!int "45"
"hit_dice": "10d8"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "10"
  - !!int "17"
  - !!int "13"
  - !!int "12"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](/compendium/rules/skills.md#Arcana)"
    "desc": "+6"
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "7"
"traits":
  - "desc": "Naxa is a 10th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 14, +6 to hit with spell attacks). Naxa has the following wizard\
      \ spells prepared:\n\nCantrips (at will): [mage hand](compendium/spells/mage-hand.md),\
      \ [minor illusion](compendium/spells/minor-illusion.md), [poison spray](compendium/spells/poison-spray.md),\
      \ [ray of frost](compendium/spells/ray-of-frost.md)\n\n1st level (4 slots):\
      \ [mage armor](compendium/spells/mage-armor.md), [magic missile](compendium/spells/magic-missile.md),\
      \ [shield](compendium/spells/shield.md), [witch bolt](compendium/spells/witch-bolt.md)\n\
      \n2nd level (3 slots): [alter self](compendium/spells/alter-self.md), [misty\
      \ step](compendium/spells/misty-step.md), [web](compendium/spells/web.md)\n\n\
      3rd level (3 slots): [fly](compendium/spells/fly.md), [lightning bolt](compendium/spells/lightning-bolt.md)\n\
      \n4th level (3 slots): [Evard's black tentacles](compendium/spells/evards-black-tentacles.md),\
      \ [greater invisibility](compendium/spells/greater-invisibility.md)\n\n5th\
      \ level (2 slots): [cloudkill](compendium/spells/cloudkill.md)"
    "name": "Spellcasting"
  - "desc": "Naxa's spellcasting ability is Charisma (spell save DC 12). It can innately\
      \ cast the following spells, requiring no material components:\n\nAt will:\
      \ [dancing lights](compendium/spells/dancing-lights.md)\n\n1/day each: [darkness](compendium/spells/darkness.md),\
      \ [faerie fire](compendium/spells/faerie-fire.md), [levitate](compendium/spells/levitate.md)\
      \ (self only)"
    "name": "Innate Spellcasting"
  - "desc": "Naxa has advantage on saving throws against being [charmed](/compendium/rules/conditions.md#Charmed),\
      \ and magic can't put Naxa to sleep."
    "name": "Fey Ancestry"
  - "desc": "While in sunlight, Naxa has disadvantage on attack rolls, as well as\
      \ on Wisdom ([Perception](/compendium/rules/skills.md#Perception)) checks that\
      \ rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d6\
      \ - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two\
      \ hands, plus 3 (d6) poison damage."
    "name": "Staff"
  - "desc": "Naxa magically summons a [quasit](compendium/bestiary/fiend/quasit.md),\
      \ or attempts to summon a [shadow demon](compendium/bestiary/fiend/shadow-demon.md)\
      \ with a 50 percent chance of success. The summoned demon appears in an unoccupied\
      \ space within 60 feet of its summoner, acts as an ally of its summoner, and\
      \ can't summon other demons. It remains for 10 minutes, until it or its summoner\
      \ dies, or until its summoner dismisses it as an action."
    "name": "Summon Demon (1/Day)"
"source":
  - "VEoR"
"image": "compendium/bestiary/npc/token/naxa-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes