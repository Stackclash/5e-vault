---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag3
- monster/cr/12
- monster/size/medium
- monster/type/humanoid/tiefling
location: 
condition: healthy
images: []
relationships: []
aliases: [The Violet King]
pronounced: 
race: 
gender: 
age: 
alignment: Lawful Neutral
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
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Kaivius, the Violet King has a well-earned reputation for empathic leadership, cunning politics, and a thirst for historical knowledge. In fact, visiting dignitaries often bring gifts in the form of a rare story, scroll, or tome as thanks for granting them an audience. His soft-hearted nature, which previously balanced his wife's harsher rulings, was increased by the genie's gift and further split their diverging paths. To protect his people and the land roundabout, he guards his borders and strives to combat his wife's imperialist policies without breaking their tenuous peace.

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
"name": "The Violet King (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"ac_class": "[studded leather](compendium/items/studded-leather-armor.md)"
"hp": !!int "162"
"hit_dice": "25d8 + 50"
"stats":
- !!int "13"
- !!int "20"
- !!int "14"
- !!int "17"
- !!int "17"
- !!int "20"
"speed": "30 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "10"
  "Wisdom": !!int "8"
"skillsaves":
  "Insight": !!int "8"
  "Performance": !!int "10"
  "Acrobatics": !!int "10"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic, Infernal"
"cr": "12"
"traits":
- "desc": "The Violet King's innate spellcasting ability is Charisma. He can innately\
    \ cast the following spells (spell save DC 18), requiring no material components:\n\
    \nAt will: [thaumaturgy](compendium/spells/thaumaturgy.md)\n\n1/day each:\
    \ [hellish rebuke](compendium/spells/hellish-rebuke.md) (as a 2nd-level spell),\
    \ [darkness](compendium/spells/darkness.md)"
  "name": "Innate Spellcasting"
- "desc": "The Violet King is an 11th-level spellcaster. His spellcasting ability\
    \ is Charisma (spell save DC 18). He knows the following bard spells:\n\nCantrips\
    \ (at will): [light](compendium/spells/light.md), [message](compendium/spells/message.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md), [vicious mockery](compendium/spells/vicious-mockery.md)\n\
    \n1st level (4 slots): [healing word](compendium/spells/healing-word.md),\
    \ [heroism](compendium/spells/heroism.md), [silent image](compendium/spells/silent-image.md),\
    \ [unseen servant](compendium/spells/unseen-servant.md)\n\n2nd level (3 slots):\
    \ [heat metal](compendium/spells/heat-metal.md), [lesser restoration](compendium/spells/lesser-restoration.md),\
    \ [spiritual weapon](compendium/spells/spiritual-weapon.md)\n\n3rd level (3\
    \ slots): [hypnotic pattern](compendium/spells/hypnotic-pattern.md), [lightning\
    \ bolt](compendium/spells/lightning-bolt.md), [tongues](compendium/spells/tongues.md)\n\
    \n4th level (3 slots): [dimension door](compendium/spells/dimension-door.md),\
    \ [polymorph](compendium/spells/polymorph.md)\n\n5th level (2 slots): [scrying](compendium/spells/scrying.md),\
    \ [wall of force](compendium/spells/wall-of-force.md)\n\n6th level (1 slots):\
    \ [disintegrate](compendium/spells/disintegrate.md)"
  "name": "Spellcasting"
- "desc": "The Violet King can issue one of the following orders."
  "name": "Battle Decree (5/Day)"
- "desc": "When the Violet King casts a spell of 1st level or higher that restores\
    \ hit points to a single creature, he can use his reaction to cause a different\
    \ creature within 10 feet of the original target to regain 4 (1d8) hit points\
    \ per spell level. When he does so, each creature has advantage on the next ability\
    \ check or saving throw it makes before the end of its next turn."
  "name": "Clemency"
- "desc": "When the Violet King casts a spell that deals damage to a single creature,\
    \ he can use his reaction to cause that target as well as a different creature\
    \ within 10 feet of it to make a DC 18 Dexterity saving throw. On a failed save,\
    \ a creature takes 13 (3d8) fire damage and has disadvantage on the next attack\
    \ roll it makes before the end of its next turn. On a successful save, a creature\
    \ takes half as much fire damage and makes its next attack roll as normal."
  "name": "Condemn"
- "desc": "After the Violet King rolls dice to restore hit points to a single creature\
    \ or rolls damage for a spell attack or an attack using his rapier, he can change\
    \ the result of two of those dice to their highest number possible instead of\
    \ the numbers he rolled."
  "name": "Overrule"
- "desc": "As a bonus action, the Violet King can summon his rapier, causing it to\
    \ teleport instantly to his hand."
  "name": "Bonded Weapon"
"actions":
- "desc": "The Violet King makes two rapier attacks and casts a cantrip."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9 (1d8\
    \ + 5) piercing damage plus 4 (1d8) fire damage."
  "name": "Violet King's Promise (Rapier)"
"reactions":
- "desc": "When the Violet King or a creature within 5 feet of him would be hit by\
    \ an attack, he adds 5 to the target's AC against that attack. To do so, he must\
    \ see the attacker and be wielding his rapier."
  "name": "Superior Parry"
"source":
- "GriffonsSaddlebag3"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes