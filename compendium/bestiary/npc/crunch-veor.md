---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/7
- monster/size/medium
- monster/type/construct/warforged
location: 
condition: healthy
images: []
relationships: []
aliases: [Crunch]
pronounced: 
race: 
gender: 
age: 
alignment: typically  Lawful Evil
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
"name": "Crunch (VEoR)"
"size": "Medium"
"type": "construct"
"subtype": "warforged"
"alignment": "typically  Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"modifier": !!int "5"
"stats":
  - !!int "14"
  - !!int "20"
  - !!int "16"
  - !!int "10"
  - !!int "19"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "dexterity": "+8"
  - "wisdom": "+7"
"skillsaves":
  - "name": "[Acrobatics](/compendium/rules/skills.md#Acrobatics)"
    "desc": "+8"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+8"
"damage_resistances": "poison"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "passive Perception 17"
"languages": "Common"
"cr": "7"
"traits":
  - "desc": "Crunch has advantage on an attack roll against a creature if at least\
      \ one of Crunch's allies is within 5 feet of the creature and the ally doesn't\
      \ have the [incapacitated](/compendium/rules/conditions.md#Incapacitated) condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "Crunch makes three Armblade or Bolt Launcher attacks. It can replace\
      \ one of the attacks with a use of Snare Trap."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12\
      \ (2d6 + 5) slashing damage."
    "name": "Armblade"
  - "desc": "Ranged Weapon Attack: +8 to hit, range 80/320 ft., one target. Hit:\
      \ 9 (1d8 + 5) piercing damage."
    "name": "Bolt Launcher"
  - "desc": "Crunch deploys a Tiny mechanical trap on a solid surface within 5 feet\
      \ of itself. The trap is hidden, requiring a successful DC 17 Intelligence ([Investigation](/compendium/rules/skills.md#Investigation))\
      \ check to find. The trap lasts for 1 minute. Whenever an enemy enters a space\
      \ within 10 feet of the trap or starts its turn there, it must succeed on a\
      \ DC 16 Dexterity saving throw or take 21 (6d6) piercing damage and have the\
      \ [prone](/compendium/rules/conditions.md#Prone) condition. A creature makes\
      \ this saving throw only once per turn."
    "name": "Snare Trap (1/Day)"
"bonus_actions":
  - "desc": "Crunch moves up to its speed without provoking opportunity attacks."
    "name": "Dash"
"source":
  - "VEoR"
"image": "compendium/bestiary/npc/token/crunch-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes