---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag3
- monster/cr/15
- monster/size/medium
- monster/type/humanoid/tiefling
location: 
condition: healthy
images: []
relationships: []
aliases: [The Red Queen]
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

Agony, the Red Queen is renowned as a fearsome glaive-wielding warrior, ruthless expansionist monarch, and eminently skilled blacksmith and weaponsmith. Her origins are poorly documented, but it is certain that while she was not born to royalty, it unquestionably suits her. She rules her nation with an iron fist, tolerating no lawbreaking, but ensures that the laws themselves are even-handed in their harshness. Brought on by a genie's cursed gifts exacerbating their differences, her nation is currently in a tense, treatyless cease-fire with the land ruled by her estranged husband, the Violet King.

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
"name": "The Red Queen (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"ac_class": "[plate](compendium/items/plate-armor.md)"
"hp": !!int "237"
"hit_dice": "25d8 + 125"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "13"
  - !!int "20"
  - !!int "18"
  - !!int "15"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "strength": "+10"
  - "constitution": "+10"
"skillsaves":
  - "name": "[Athletics](/compendium/rules/skills.md#Athletics)"
    "desc": "+10"
  - "name": "[Intimidation](/compendium/rules/skills.md#Intimidation)"
    "desc": "+8"
"damage_vulnerabilities": "psychic"
"damage_resistances": "fire"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Celestial, Common, Infernal"
"cr": "15"
"traits":
  - "desc": "The Red Queen is a 7th-level spellcaster. Her spellcasting ability is\
      \ Intelligence (spell save DC 17, +9 to hit with spell attacks). She has the\
      \ following wizard spells prepared:\n\nCantrips (at will): [fire bolt](compendium/spells/fire-bolt.md),\
      \ [message](compendium/spells/message.md), [prestidigitation](compendium/spells/prestidigitation.md)\n\
      \n1st level (4 slots): [burning hands](compendium/spells/burning-hands.md),\
      \ [magic missile](compendium/spells/magic-missile.md), [shield](compendium/spells/shield.md),\
      \ [thunderwave](compendium/spells/thunderwave.md)\n\n2nd level (3 slots):\
      \ [hold person](compendium/spells/hold-person.md), [misty step](compendium/spells/misty-step.md),\
      \ [shatter](compendium/spells/shatter.md)\n\n3rd level (3 slots): [counterspell](compendium/spells/counterspell.md),\
      \ [fireball](compendium/spells/fireball.md)\n\n4th level (1 slots): [fire\
      \ shield](compendium/spells/fire-shield.md)"
    "name": "Spellcasting"
  - "desc": "The Red Queen's innate spellcasting ability is Charisma. She can innately\
      \ cast the following spells (spell save DC 16), requiring no material components:\n\
      \nAt will: [thaumaturgy](compendium/spells/thaumaturgy.md)\n\n1/day each:\
      \ [hellish rebuke](compendium/spells/hellish-rebuke.md) (as a 2nd-level spell),\
      \ [darkness](compendium/spells/darkness.md)"
    "name": "Innate Spellcasting"
  - "desc": "The Red Queen can issue one of the following orders."
    "name": "Impose Will (5/Day)"
  - "desc": "When the Red Queen hits a target with her glaive, she can force all hostile\
      \ creatures within 15 feet of her to succeed on a DC 17 Wisdom saving throw\
      \ or be [frightened](/compendium/rules/conditions.md#Frightened) of her until\
      \ the end of her next turn. The target of the attack has disadvantage on this\
      \ saving throw."
    "name": "Cower"
  - "desc": "Immediately after the Red Queen makes an attack with her glaive on her\
      \ turn, she can command a willing creature to use its reaction to make one weapon\
      \ attack. The creature must be able to see and hear her. If the attack hits,\
      \ it deals an extra 7 (2d6) fire damage."
    "name": "Execute"
  - "desc": "As a bonus action, the Red Queen can grant a creature other than herself\
      \ a 10 temporary hit points. The creature must be able to see and hear her."
    "name": "Survive"
"actions":
  - "desc": "The Red Queen can use her Pillar of Defense if she hasn't moved yet this\
      \ turn. She then makes four glaive attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 11\
      \ (1d10 + 6) slashing damage plus 3 (d6) fire damage."
    "name": "Red Queen's Burden (Glaive)"
  - "desc": "The Red Queen's speed becomes 0 until the start of her next turn. For\
      \ the duration, she gains the following benefits: y She gains a +2 bonus to\
      \ AC. y She can use her reaction up to three times, instead of once, before\
      \ the start of her next turn. She can use no more than one reaction per turn.\
      \ y When a creature within 10 feet of her makes an attack against her or another\
      \ target, she can use her reaction to make a melee attack with her glaive against\
      \ the attacking creature. y When she hits a creature with an attack using her\
      \ glaive, that creature must make a DC 15 Wisdom saving throw. On a failed save,\
      \ its speed becomes 0 until the start of its next turn."
    "name": "Pillar of Defense (Recharge 5-6)"
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