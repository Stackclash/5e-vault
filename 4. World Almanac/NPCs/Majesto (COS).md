---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1
  - monster/size/tiny
  - monster/type/fiend/devil
location: null
condition: healthy
images:
  - 4. World Almanac\NPCs\img\060-cos05-11.webp
relationships: []
aliases:
  - Majesto
pronounced: null
race: null
gender: null
age: null
alignment: Lawful Evil
occupation: []
groups: []
religions: []
personality: null
ideal: null
bond: null
flaw: null
goals: null
likes: null
dislikes: null
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
*Source: Curse of Strahd p. 115*

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
"name": "Majesto (COS)"
"size": "Tiny"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "17"
  - !!int "13"
  - !!int "11"
  - !!int "12"
  - !!int "14"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with silvered weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Infernal, Common"
"cr": "1"
"traits":
  - "desc": "Majesto can use its action to polymorph into a beast form that resembles\
      \ a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb\
      \ 20 ft.), or back into its true form. Its statistics are the same in each form,\
      \ except for the speed changes noted. Any equipment it is wearing or carrying\
      \ isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "Magical darkness doesn't impede Majesto's darkvision."
    "name": "Devil's Sight"
  - "desc": "Majesto has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
      \ + 3) piercing damage, and the target must make a DC 11 Constitution saving\
      \ throw, taking 10 (3d6) poison damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Sting (Bite in Beast Form)"
  - "desc": "Majesto magically turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ until it attacks, or until its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
      \ ends (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]]\
      \ on a spell). Any equipment Majesto wears or carries is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ with it."
    "name": "Invisibility"
"source":
  - "CoS"
"image": "4. World Almanac/NPCs/token/majesto-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
