---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
image: compendium/bestiary/npc/img/geryon.webp
relationships: []
tags: 
aliases: [Geryon]
pronounced: 
race: 
gender: 
age: 
alignment: Lawful Evil
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
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
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
> **Current Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |

# **`=this.file.name`**
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 136, Mordenkainen's Tome of Foes p. 173*

Geryon is locked in an endless struggle with Levistus for control of Stygia. The two have fought for centuries, each displacing the other innumerable times. Currently, Levistus claims lordship over Stygia, but he has been trapped in an enormous block of ice at the command of Asmodeus. In response, Geryon is marshaling his followers, hoping to use this opportunity to replace his hated rival.

Among the archdevils, Geryon is known for his martial prowess. He is a ferocious hunter and a relentless tracker. He often joins his troops in battle; he loves to feel flesh and steel sundered beneath his claws and to taste his foes' blood. Yet Geryon's ferocity has also limited his ability to collect souls and forge an effective hierarchy. Sages who study the Nine Hells believe the battle for control of Stygia is a test staged by Asmodeus in hopes of purging the worst impulses from both Geryon and Levistus—or discovering a competent replacement for both.

## Cultists of Geryon

> [!note]
> See the Cult of Geryon entry.

## Geryon's Lair

Geryon has recently reclaimed his ancient fortress, Coldsteel, a sprawling complex that rises from the icy center of Stygia. He roams the passages, spitting oaths of vengeance against Asmodeus and hatching schemes to reclaim his standing from Levistus. The challenge rating of Geryon is 23 (50,000 XP) when he's encountered in his lair.

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
    str: add
  - type: input
    str: relationship
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
    str: remove
  - type: input
    str: relationship
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Geryon (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "300"
"hit_dice": "24d12 + 144"
"stats":
- !!int "29"
- !!int "17"
- !!int "22"
- !!int "19"
- !!int "16"
- !!int "23"
"speed": "30 ft., fly 50 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "10"
  "Wisdom": !!int "10"
  "Constitution": !!int "13"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Perception": !!int "10"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"damage_immunities": "cold, fire, poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed), [exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#frightened), [poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "all, telepathy 120 ft."
"cr": "22"
"traits":
- "desc": "Geryon casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt will:\
    \ [alter self](compendium/spells/alter-self.md) (can become Medium when changing\
    \ his appearance), [detect magic](compendium/spells/detect-magic.md), [ice storm](compendium/spells/ice-storm.md),\
    \ [invisibility](compendium/spells/invisibility.md) (self only), [locate object](compendium/spells/locate-object.md),\
    \ [suggestion](compendium/spells/suggestion.md), [wall of ice](compendium/spells/wall-of-ice.md)\n\
    \n1/day: [banishment](compendium/spells/banishment.md)"
  "name": "spells"
- "desc": "If Geryon fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Geryon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Geryon regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Geryon dies\
    \ only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Geryon makes one Claw attack and one Stinger attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 15 ft., one target.\
    \ Hit: dice: 4d6 + 9|avg (4d6 + 9) cold damage. If the target is Large or\
    \ smaller, it is [grappled](/compendium/rules/conditions.md#grappled) (DC 24),\
    \ and it is [restrained](/compendium/rules/conditions.md#restrained) until the\
    \ grapple ends. Geryon can grapple one creature at a time. If the target is already\
    \ [grappled](/compendium/rules/conditions.md#grappled) by Geryon, the target takes\
    \ an extra dice: 6d8|avg (6d8) cold damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 20 ft., one creature.\
    \ Hit: dice: 2d4 + 9|avg (2d4 + 9) force damage, and the target must succeed\
    \ on a DC 21 Constitution saving throw or take dice: 2d12|avg (2d12) poison\
    \ damage and become [poisoned](/compendium/rules/conditions.md#poisoned) until\
    \ it finishes a short or long rest. The target's hit point maximum is reduced\
    \ by an amount equal to half the poison damage taken. This reduction lasts until\
    \ the [poisoned](/compendium/rules/conditions.md#poisoned) condition is removed.\
    \ The target dies if its hit point maximum is reduced to 0."
  "name": "Stinger"
- "desc": "Geryon teleports, along with any equipment he is wearing and carrying,\
    \ up to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"legendary_actions":
- "desc": "Geryon targets one creature he can see within 60 feet of him. The target\
    \ must succeed on a DC 23 Wisdom saving throw or become [frightened](/compendium/rules/conditions.md#frightened)\
    \ of Geryon until the end of its next turn."
  "name": "Infernal Glare"
- "desc": "Geryon uses Teleport."
  "name": "Teleport"
- "desc": "Geryon makes one Stinger attack."
  "name": "Swift Sting (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/npc/token/geryon-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes