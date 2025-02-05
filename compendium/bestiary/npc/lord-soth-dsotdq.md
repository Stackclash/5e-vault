---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/dsotdq
- monster/cr/19
- monster/size/medium
- monster/type/undead/paladin
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/lord-soth.webp
relationships: []
aliases: [Lord Soth]
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
*Source: Dragonlance: Shadow of the Dragon Queen p. 206, Vecna: Eve of Ruin*

Lord Soth is the most powerful death knight on Krynn. Once a Solamnic Knight of the Order of the Rose, Soth was a paragon of virtue and justice who allowed his pride to lead him down an evil path. The gods gave Soth a chance at redemption, charging him with confronting the Kingpriest of Istar and averting the Cataclysm. However, he was undone by his pride, abandoned his quest, and allowed the Cataclysm to devastate Krynn. Soth perished during the Cataclysm but then rose from the ashes as an Undead horror. In his cursed castle, Dargaard Keep, Soth long ignored the ruined world, but the Dragon Queen's summons has called his evil forth once more.

In battle, Soth is a terror, wielding the last remnant of the Cataclysm's fires to devastating effect. He usually uses his spellcasting ability only as part of his legendary actions.

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
"name": "Lord Soth (DSotDQ)"
"size": "Medium"
"type": "undead"
"subtype": "paladin"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "[plate](compendium/items/plate-armor.md)"
"hp": !!int "228"
"hit_dice": "24d8 + 120"
"stats":
- !!int "22"
- !!int "11"
- !!int "20"
- !!int "12"
- !!int "16"
- !!int "20"
"speed": "30 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "6"
  "Wisdom": !!int "9"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Common, Infernal, Solamnic"
"cr": "19"
"traits":
- "desc": "Soth casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 19):\n\nAt will:\
    \ [command](compendium/spells/command.md) (cast at 3rd level)\n\n1/day: [banishment](compendium/spells/banishment.md)\
    \ (cast at 6th level)\n\n2/day each: [dispel magic](compendium/spells/dispel-magic.md),\
    \ [hold person](compendium/spells/hold-person.md) (cast at 3rd level)"
  "name": "Spellcasting"
- "desc": "If Soth fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Soth has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "Unless Soth is [incapacitated](/compendium/rules/conditions.md#Incapacitated),\
    \ he and Undead creatures of his choice within 60 feet of him are immune to features\
    \ that turn Undead."
  "name": "Marshal Undead"
- "desc": "Soth doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "Soth makes three Forsaken Brand attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 10 (1d8\
    \ + 6) bludgeoning damage plus 18 (4d8) necrotic damage, and if the target is\
    \ a creature, it can't regain hit points until the start of Soth's next turn."
  "name": "Forsaken Brand"
- "desc": "Soth hurls a magical ball of fire that explodes at a point he can see within\
    \ 120 feet of himself. Each creature in a 20-foot-radius sphere centered on that\
    \ point must make a DC 19 Dexterity saving throw. A creature takes 35 (10d6) fire\
    \ damage and 35 (10d6) necrotic damage on a failed save, or half as much damage\
    \ on a successful one.\n\nAdditionally, any Medium or smaller Humanoid killed\
    \ by this damage, as well as every corpse of such a creature within the sphere,\
    \ becomes a skeleton (see the Monster Manual) under Soth's control. The skeleton\
    \ acts on Soth's initiative but immediately after his turn. Absent any other command,\
    \ the skeleton tries to kill any non-Undead creature it encounters."
  "name": "Cataclysmic Fire (1/Day)"
- "desc": "Soth points at a creature he can see within 60 feet of himself and magically\
    \ commands it to die. The target must make a DC 19 Constitution saving throw,\
    \ taking 100 necrotic damage on a failed save, or half as much damage on a successful\
    \ one. If this damage reduces the target to 0 hit points, the target dies."
  "name": "Word of Death (1/Day)"
"legendary_actions":
- "desc": "Soth moves up to his speed or commands a mount he is riding to move up\
    \ to its speed. The movement from this action doesn't provoke opportunity attacks.\
    \ If he or his mount moves within 5 feet of a creature during this movement, he\
    \ can force the creature to make a DC 20 Strength saving throw. The creature is\
    \ knocked [prone](/compendium/rules/conditions.md#Prone) unless it succeeds on\
    \ the saving throw."
  "name": "Implacable Maneuver"
- "desc": "Soth makes one Forsaken Brand attack."
  "name": "Strike (Costs 2 Actions)"
- "desc": "Soth uses Spellcasting."
  "name": "Cast a Spell (Costs 3 Actions)"
"source":
- "DSotDQ"
- "VEoR"
"image": "compendium/bestiary/npc/token/lord-soth-dsotdq.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes