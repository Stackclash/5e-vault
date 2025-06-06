---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/23
- monster/size/medium
- monster/type/humanoid/bard
- monster/type/humanoid/tiefling
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/windfall.webp
relationships: []
aliases: [Windfall]
pronounced: 
race: 
gender: 
age: 
alignment: Chaotic Evil
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
*Source: Vecna: Eve of Ruin p. 153*

As a dedicated champion of Tiamat, Windfall has been granted phenomenal power by her master. Her skin glitters with patches of multicolored scales, and in combat, her blade sings with all five of the chromatic dragons' elements. Windfall's enchanted tailcoat shimmers with the colors of the Dragon Queen, and she uses this coat to dazzle patrons and enemies alike.

A performer at heart, Windfall is ostentatious and charismatic, making small talk with regular patrons and jovially welcoming new faces to the casino.

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
"name": "Windfall (VEoR)"
"size": "Medium"
"type": "humanoid"
"subtype": "bard, tiefling"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "[studded leather armor](compendium/items/studded-leather-armor.md)"
"hp": !!int "323"
"hit_dice": "34d8 + 170"
"modifier": !!int "7"
"stats":
  - !!int "14"
  - !!int "24"
  - !!int "20"
  - !!int "22"
  - !!int "18"
  - !!int "26"
"speed": "30 ft., fly 30 ft."
"saves":
  - "strength": "+9"
  - "dexterity": "+14"
  - "wisdom": "+11"
  - "charisma": "+15"
"skillsaves":
  - "name": "[Arcana](/compendium/rules/skills.md#Arcana)"
    "desc": "+13"
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+22"
  - "name": "[Insight](/compendium/rules/skills.md#Insight)"
    "desc": "+18"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+11"
  - "name": "[Performance](/compendium/rules/skills.md#Performance)"
    "desc": "+22"
  - "name": "[Persuasion](/compendium/rules/skills.md#Persuasion)"
    "desc": "+22"
  - "name": "[Sleight of Hand](/compendium/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+14"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [frightened](/compendium/rules/conditions.md#Frightened)"
"senses": "darkvision 60 ft., passive Perception 21"
"languages": "Common, Draconic, Infernal"
"cr": "23"
"traits":
  - "desc": "A brilliant array of chromatic colors emanates from Windfall, causing\
      \ attack rolls against her to have disadvantage. This trait ceases to function\
      \ while Windfall has the [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
      \ condition or has a speed of 0."
    "name": "Dazzling Visage"
  - "desc": "If Windfall fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Windfall wears an iridescent magic coat that was tailored specifically\
      \ for her and imbued with Tiamat's power. When she dies, the coat functions\
      \ as a [Robe of Scintillating Colors](compendium/items/robe-of-scintillating-colors.md)."
    "name": "Special Equipment"
"actions":
  - "desc": "Windfall makes two Chromatic Rapier attacks and uses Dragon's Fury once."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 11\
      \ (1d8 + 7) piercing damage plus 21 (6d6) acid, cold, fire, lightning, or poison\
      \ damage (Windfall's choice)."
    "name": "Chromatic Rapier"
  - "desc": "Windfall targets one creature she can see within 60 feet of herself and\
      \ unleashes a burst of magical ire. The target must make a DC 23 Wisdom saving\
      \ throw. On a failed save, the target takes 36 (8d8) psychic damage and has\
      \ the [frightened](/compendium/rules/conditions.md#Frightened) condition until\
      \ the start of Windfall's next turn. On a successful save, the target takes\
      \ half as much damage only."
    "name": "Dragon's Fury"
  - "desc": "Windfall casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt\
      \ will: [Detect Magic](compendium/spells/detect-magic.md), [Light](compendium/spells/light.md),\
      \ [Thaumaturgy](compendium/spells/thaumaturgy.md)\n\n3/day each: [Shatter](compendium/spells/shatter.md),\
      \ [Unseen Servant](compendium/spells/unseen-servant.md)\n\n2/day each: [Hypnotic\
      \ Pattern](compendium/spells/hypnotic-pattern.md), [Sending](compendium/spells/sending.md)\n\
      \n1/day: [Hold Monster](compendium/spells/hold-monster.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Windfall emits an overwhelming array of colors from her coat. Each creature\
      \ within 30 feet of Windfall that can see her must succeed on a DC 23 Constitution\
      \ saving throw or have the [stunned](/compendium/rules/conditions.md#Stunned)\
      \ condition until the start of Windfall's next turn."
    "name": "Stunning Scintillation (Recharge 5-6)"
"legendary_actions":
  - "desc": "Windfall moves up to her speed without provoking opportunity attacks."
    "name": "Deft Dance"
  - "desc": "Windfall flares with multicolored flames and targets a creature she can\
      \ see within 30 feet of herself. The target must make a DC 23 Dexterity saving\
      \ throw. On a failed save, the target takes 26 (4d12) damage of a type chosen\
      \ by Windfall: acid, cold, fire, lightning, or poison. On a successful save,\
      \ the target takes half as much damage."
    "name": "Dragon's Flare"
  - "desc": "Windfall uses Spellcasting."
    "name": "Cast a Spell (Costs 2 Actions)"
"source":
  - "VEoR"
"image": "compendium/bestiary/npc/token/windfall-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes