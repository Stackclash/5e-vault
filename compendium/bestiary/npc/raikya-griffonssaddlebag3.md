---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag3
- monster/cr/5
- monster/size/medium
- monster/type/humanoid/tiefling
location: 
condition: healthy
images: []
relationships: []
aliases: [Raikya]
pronounced: 
race: 
gender: 
age: 
alignment: Neutral Good
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

Raikya is a young tiefling who specializes in silver-tongued deception. A child of the streets, she's dedicated herself to redistributing wealth to those in need, despite any personal risk.

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
"name": "Raikya (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "tiefling"
"alignment": "Neutral Good"
"ac": !!int "14"
"ac_class": "[leather](compendium/items/leather-armor.md)"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "13"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Insight](/compendium/rules/skills.md#Insight)"
    "desc": "+4"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Persuasion](/compendium/rules/skills.md#Persuasion)"
    "desc": "+9"
  - "name": "[Sleight of Hand](/compendium/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+9"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+6"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Infernal, Thieves' cant"
"cr": "5"
"traits":
  - "desc": "Raikya's innate spellcasting ability is Charisma. She can innately cast\
      \ the following spells (spell save DC 14), requiring no material components:\n\
      \nAt will: [thaumaturgy](compendium/spells/thaumaturgy.md)\n\n1/day each:\
      \ [darkness](compendium/spells/darkness.md), [hellish rebuke](compendium/spells/hellish-rebuke.md)\
      \ (as a 2nd-level spell)"
    "name": "Innate Spellcasting"
  - "desc": "If Raikya is subjected to an effect that allows her to make a Dexterity\
      \ saving throw to take only half damage, Raikya instead takes no damage if she\
      \ succeeds on the saving throw, and only half damage if she fails."
    "name": "Evasion"
  - "desc": "Raikya deals an extra 21 (6d6) damage when she hits a target with a weapon\
      \ attack and has advantage on the attack roll, or when the target is within\
      \ 5 feet of an ally of Raikya that isn't incapacitated and Raikya doesn't have\
      \ disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "Raikya makes two attacks with her dagger or rapier."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) piercing damage."
    "name": "Rapier"
"reactions":
  - "desc": "When an attacker Raikya can see hits her with an attack, she halves the\
      \ attack's damage against her."
    "name": "Uncanny Dodge"
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