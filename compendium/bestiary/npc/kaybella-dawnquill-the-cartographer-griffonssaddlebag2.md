---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag2
- monster/cr/7
- monster/size/medium
- monster/type/humanoid/elf
location: 
condition: healthy
images: []
relationships: []
aliases: [Kaybella Dawnquill, The Cartographer]
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
*Source: The Griffon's Saddlebag, Book 2 p. 337*

Kaybella is an old and experienced elf who has gained both of those traits by being cutthroat in an economic and literal sense. It is her cunning wit and iron fist that have allowed The Cartographer's Guild to rise to its current prominence without having their adventurer-farming venture discovered. Most of the loot and treasure from those ventures are sold or put to use by other members of the guild, but The Cartographer keeps a few tricks up her sleeve.

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
"name": "Kaybella Dawnquill, The Cartographer (GriffonsSaddlebag2)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "[studded leather](compendium/items/studded-leather-armor.md)"
"hp": !!int "104"
"hit_dice": "19d8 + 19"
"modifier": !!int "4"
"stats":
  - !!int "13"
  - !!int "18"
  - !!int "12"
  - !!int "17"
  - !!int "14"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "dexterity": "+7"
  - "intelligence": "+6"
  - "wisdom": "+5"
"skillsaves":
  - "name": "[Acrobatics](/compendium/rules/skills.md#Acrobatics)"
    "desc": "+7"
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Investigation](/compendium/rules/skills.md#Investigation)"
    "desc": "+9"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Sleight of Hand](/compendium/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+10"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+10"
"senses": "blindsight 10 ft., passive Perception 15"
"languages": "Common, Thieves' cant"
"cr": "7"
"traits":
  - "desc": "On each of her turns, Kaybella can use a bonus action to take the [Dash](/compendium/rules/actions.md#Dash),\
      \ [Disengage](/compendium/rules/actions.md#Disengage), or [Hide](/compendium/rules/actions.md#Hide)\
      \ action."
    "name": "Cunning Action"
  - "desc": "If Kaybella is subjected to an effect that allows her to make a Dexterity\
      \ saving throw to take only half damage, Kaybella instead takes no damage if\
      \ she succeeds on the saving throw, and only half damage if she fails."
    "name": "Evasion"
  - "desc": "Kaybella has a +6 bonus to any ability check she makes using [cartographer's\
      \ tools](compendium/items/cartographers-tools.md), in addition to the ability\
      \ modifier used for the check."
    "name": "Expert Cartography"
  - "desc": "Kaybella deals an extra 31 (9d6) damage when it hits a target with a\
      \ weapon attack and has advantage on the attack roll, or when the target is\
      \ within 5 feet of an ally of the agent that isn't [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
      \ and the agent doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
  - "desc": "Kaybella wields a [pick and pocket](compendium/items/pick-and-pocket-griffonssaddlebag2.md)\
      \ and has a [hoarder's haul](compendium/items/hoarders-haul-griffonssaddlebag2.md)\
      \ and a [wayfinder sphere](compendium/items/wayfinder-sphere-griffonssaddlebag2.md),\
      \ which are all described in appendix A."
    "name": "Special Equipment"
  - "desc": "No attack roll can have advantage against Kaybella while she isn't [incapacitated](/compendium/rules/conditions.md#Incapacitated)."
    "name": "Elusive"
  - "desc": "Whenever Kaybella makes an ability check that lets her add her proficiency\
      \ bonus, she can treat a d20 roll of 9 or lower as a 10."
    "name": "Reliable Talent"
"actions":
  - "desc": "Kaybella makes two attacks with her [pick and pocket](compendium/items/pick-and-pocket-griffonssaddlebag2.md)."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +8 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 7 (1d4+ 5) piercing damage."
    "name": "Pick and Pocket"
  - "desc": "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit:\
      \ 8 (1d8 + 4) piercing damage."
    "name": "Light Crossbow"
"reactions":
  - "desc": "Kaybella halves the damage that she takes from an attack that hits her.\
      \ Kaybella must be able to see the attacker."
    "name": "Uncanny Dodge"
"source":
  - "GriffonsSaddlebag2"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes