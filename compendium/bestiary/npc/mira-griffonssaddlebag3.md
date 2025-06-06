---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag3
- monster/cr/6
- monster/size/medium
- monster/type/humanoid/serpentfolk
location: 
condition: healthy
images: []
relationships: []
aliases: [Mira]
pronounced: 
race: 
gender: 
age: 
alignment: Chaotic Good
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

Mira is a blinded medusa that's been lost to time. The last remaining member of a once-powerful warrior clan of ancient serpentfolk, she was petrified for centuries before being released by [Alistair Rook](compendium/bestiary/npc/alistair-rook-griffonssaddlebag3.md) during an earlier heist. She now acts as his ward and confidant.

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
"name": "Mira (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "serpentfolk"
"alignment": "Chaotic Good"
"ac": !!int "17"
"ac_class": "[splint](compendium/items/splint-armor.md)"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"modifier": !!int "2"
"stats":
  - !!int "17"
  - !!int "15"
  - !!int "14"
  - !!int "13"
  - !!int "12"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[Athletics](/compendium/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Intimidation](/compendium/rules/skills.md#Intimidation)"
    "desc": "+6"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+4"
"damage_resistances": "poison"
"senses": "blindsight 10 ft. (blind beyond this radius), passive Perception 14"
"languages": "Common, Undercommon"
"cr": "6"
"traits":
  - "desc": "Once per turn, Mira can deal an extra 7 (2d6) damage to a creature she\
      \ hits with a weapon attack if that creature is within 5 feet of an ally of\
      \ Mira that isn't [incapacitated](/compendium/rules/conditions.md#Incapacitated)."
    "name": "Martial Advantage"
"actions":
  - "desc": "Mira makes three melee attacks: two with her pike and one with her snake\
      \ hair."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d10\
      \ + 3) piercing damage."
    "name": "Pike"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 4\
      \ (1d4 + 2) piercing damage plus 14 (4d6) poison damage."
    "name": "Snake Hair"
"reactions":
  - "desc": "Mira adds 3 to her AC against one melee attack that would hit her. To\
      \ do so, Mira must see the attacker and be wielding a melee weapon."
    "name": "Parry"
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