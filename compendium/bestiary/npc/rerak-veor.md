---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/21
- monster/size/medium
- monster/type/undead
location: 
condition: healthy
images: []
relationships: []
aliases: [Rerak]
pronounced: 
race: 
gender: 
age: 
alignment: typically  Neutral Evil
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
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Add Relationship"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Remove Relationship"
```
> [!div | no-t clean txt-c]
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "Rerak (VEoR)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Neutral Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "199"
"hit_dice": "21d8 + 105"
"stats":
- !!int "10"
- !!int "16"
- !!int "20"
- !!int "25"
- !!int "19"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "11"
  "Intelligence": !!int "14"
  "Constitution": !!int "12"
"damage_immunities": "necrotic; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [stunned](/compendium/rules/conditions.md#Stunned)"
"senses": "truesight 60 ft., passive Perception 14"
"languages": "Abyssal, Common, Draconic, Dwarvish, Elvish, Giant, Infernal, Primordial,\
  \ Undercommon"
"cr": "21"
"traits":
- "desc": "Rerak casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 22):\n\nAt\
    \ will: [Detect Magic](compendium/spells/detect-magic.md), [Fly](compendium/spells/fly.md),\
    \ [Mage Hand](compendium/spells/mage-hand.md), [Prestidigitation](compendium/spells/prestidigitation.md)\n\
    \n1/day each: [Globe of Invulnerability](compendium/spells/globe-of-invulnerability.md),\
    \ [Hold Monster](compendium/spells/hold-monster.md)\n\n3/day each: [Dispel\
    \ Magic](compendium/spells/dispel-magic.md), [Invisibility](compendium/spells/invisibility.md)\
    \ (self only)"
  "name": "Spellcasting"
- "desc": "If Rerak fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Rerak has advantage on saving throws against spells and magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Rerak makes two Death Rend attacks and uses Bloodcurdling Lament if available."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +14 to hit, reach 5 ft., one target. Hit: 23 (3d10\
    \ + 7) necrotic damage."
  "name": "Death Rend"
- "desc": "Rerak emits a hideous shriek charged with malignant energy. Each creature\
    \ within 30 feet of Rerak must succeed on a DC 22 Wisdom saving throw or have\
    \ the [frightened](/compendium/rules/conditions.md#Frightened) condition for 1\
    \ minute. While [frightened](/compendium/rules/conditions.md#Frightened) in this\
    \ way, a creature also has the [unconscious](/compendium/rules/conditions.md#Unconscious)\
    \ condition. An affected creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success."
  "name": "Bloodcurdling Lament (Recharge 5-6)"
"bonus_actions":
- "desc": "Rerak targets one creature it can see within 120 feet of itself. The target\
    \ must make a DC 22 Charisma saving throw; if the target has the [unconscious](/compendium/rules/conditions.md#Unconscious)\
    \ condition, it has disadvantage on this saving throw. The target takes 21 (6d6)\
    \ force damage on a failed save or half as much damage on a successful one. Rerak\
    \ then regains a number of hit points equal to the amount of force damage taken.\n\
    \nIf this damage reduces the target to 0 hit points, the target immediately dies,\
    \ its body disappears, and its soul is trapped inside one of the soul gems within\
    \ Rerak's skull. After 24 hours, the gem transfers the soul to Rerak's creator.\n\
    \nWhen Rerak is reduced to 0 hit points, it is destroyed and disintegrates, leaving\
    \ behind the gems. Crushing a gem releases any souls trapped within, at which\
    \ point the soul's body re-forms in an unoccupied space nearest to the gem and\
    \ in the same state as it was when its soul was trapped."
  "name": "Soul Siphon"
"legendary_actions":
- "desc": "Rerak, along with anything it is wearing or carrying, teleports to an unoccupied\
    \ space it can see within 60 feet of itself. It then makes one Death Rend attack\
    \ if possible."
  "name": "Spiteful Teleport"
- "desc": "Rerak uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"source":
- "VEoR"
"image": "compendium/bestiary/npc/token/rerak-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes