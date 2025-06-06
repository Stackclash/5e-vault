---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag3
- monster/cr/25
- monster/size/gargantuan
- monster/type/dragon
location: 
condition: healthy
images: []
relationships: []
aliases: [Iemranten, the Cosmic Dragon]
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
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A tremendous dragon of equally immense power. Iemranten was originally captured by Styggar thousands of years ago, before his transformation into lichdom, to serve as his planetoid vessel's engine. Engaged in a millenium-long battle of attrition, Iemranten slumbers patiently, waiting for Styggar's prison holding her to eventually fail. She longs to return to the stars and taste stardust once more, but not before turning what's left of the moon's interior to cinders.

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
"name": "Iemranten, the Cosmic Dragon (GriffonsSaddlebag3)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral Evil"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "425"
"hit_dice": "23d20 + 184"
"modifier": !!int "3"
"stats":
  - !!int "26"
  - !!int "16"
  - !!int "27"
  - !!int "19"
  - !!int "17"
  - !!int "22"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  - "dexterity": "+11"
  - "constitution": "+16"
  - "wisdom": "+12"
  - "charisma": "+14"
"skillsaves":
  - "name": "[Arcana](/compendium/rules/skills.md#Arcana)"
    "desc": "+12"
  - "name": "[History](/compendium/rules/skills.md#History)"
    "desc": "+12"
  - "name": "[Insight](/compendium/rules/skills.md#Insight)"
    "desc": "+11"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+19"
"damage_resistances": "cold; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "force, radiant"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [prone](/compendium/rules/conditions.md#Prone)"
"senses": "blindsight 120 ft., darkvision 300 ft., passive Perception 29"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "25"
"traits":
  - "desc": "Iemranten's innate spellcasting ability is Charisma (spell save DC 22,\
      \ +14 to hit with spell attacks). She can innately cast the following spells,\
      \ requiring no components:\n\nAt will: [blur](compendium/spells/blur.md),\
      \ [dimension door](compendium/spells/dimension-door.md)\n\n3/day each: [banishment](compendium/spells/banishment.md)\
      \ (as a 5th-level spell), [hold monster](compendium/spells/hold-monster.md)\n\
      \n1/day each: [teleport](compendium/spells/teleport.md), [plane shift](compendium/spells/plane-shift.md)"
    "name": "Innate Spellcasting (Psionics)"
  - "desc": "When Iemranten fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Iemranten has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Iemranten's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "Iemranten can use her Frightful Presence. She then makes three attacks:\
      \ one with her bite and two with her claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 19\
      \ (2d10 + 8) piercing damage plus 18 (4d8) force damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 15\
      \ (2d6 + 8) slashing damage."
    "name": "Claw"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 17\
      \ (2d8 + 8) bludgeoning damage."
    "name": "Tail"
  - "desc": "Each creature of the Iemranten's choice that is within 120 feet of her\
      \ and aware of her must succeed on a DC 22 Wisdom saving throw or become [frightened](/compendium/rules/conditions.md#Frightened)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature is immune to the\
      \ Iemranten's Frightful Presence for the next 24 hours."
    "name": "Frightful Presence"
  - "desc": "Iemranten exhales a streaming array of cosmic energy in a 150-foot line\
      \ that is 10 feet wide.\n\nEach creature in that line must make a DC 24 Dexterity\
      \ saving throw, taking 36 (8d8) force damage on a failed save, or half as much\
      \ damage on a successful one.\n\nAt the end of the line, the energy erupts into\
      \ a radiant explosion. Each creature within 90 feet of the explosion must make\
      \ a DC 19 Constitution saving throw. On a failed save, a creature takes 28 (8d6)\
      \ radiant damage, is [blinded](/compendium/rules/conditions.md#Blinded) until\
      \ the end of its next turn, and suffers one level of [exhaustion](/compendium/rules/conditions.md#Exhaustion).\
      \ On a successful save, the creature takes half as much damage and suffers no\
      \ other effects."
    "name": "Cosmic Breath (Recharge 5-6)"
"legendary_actions":
  - "desc": "Iemranten makes a tail attack."
    "name": "Tail Attack"
  - "desc": "Iemranten magically teleports, along with any equipment it is wearing\
      \ or carrying, up to 120 feet to an unoccupied space it can see."
    "name": "Teleport"
  - "desc": "Iemranten beats her wings, bending nearby gravity to her will. Each creature\
      \ other than Iemranten within 60 feet of her must succeed on a DC 24 Strength\
      \ saving throw or take 15 (2d6 + 8) force damage and be pulled 30 feet toward\
      \ her. Iemranten can then fly up to half her flying speed without provoking\
      \ opportunity attacks"
    "name": "Gravity Well (Costs 2 Actions)"
  - "desc": "Iemranten casts one of her innate spells."
    "name": "Psionics (Costs 2 Actions)"
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