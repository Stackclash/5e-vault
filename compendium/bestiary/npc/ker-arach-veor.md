---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/11
- monster/size/huge
- monster/type/monstrosity
location: 
condition: healthy
images: []
relationships: []
aliases: [Ker-arach]
pronounced: 
race: 
gender: 
age: 
alignment: typically  Chaotic Evil
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
"name": "Ker-arach (VEoR)"
"size": "Huge"
"type": "monstrosity"
"alignment": "typically  Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "152"
"hit_dice": "16d12 + 48"
"stats":
- !!int "21"
- !!int "18"
- !!int "16"
- !!int "7"
- !!int "14"
- !!int "18"
"speed": "50 ft., climb 60 ft."
"saves":
  "Dexterity": !!int "8"
  "Strength": !!int "9"
"skillsaves":
  "Intimidation": !!int "8"
  "Perception": !!int "6"
"damage_resistances": "poison, psychic"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": "Abyssal, Draconic, Undercommon"
"cr": "11"
"traits":
- "desc": "Ker-arach has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Ker-arach can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "Ker-arach ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Ker-arach makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10 (1d10\
    \ + 5) piercing damage plus 13 (2d12) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage."
  "name": "Claw"
- "desc": "Ker-arach exhales venomous spiderlings in a 30-foot cone. Each creature\
    \ in that area must make a DC 15 Dexterity saving throw, taking 33 (6d10) piercing\
    \ damage and 33 (6d10) poison damage on a failed save or half as much damage on\
    \ a successful one."
  "name": "Spiderling Breath (Recharge 5-6)"
"bonus_actions":
- "desc": "Ker-arach spins a 30-foot cube of strong, sticky webbing in an area adjacent\
    \ to itself. The webbing lasts for 1 minute, is difficult terrain, and lightly\
    \ obscures its area. A creature that starts its turn in the webbing or enters\
    \ the webbing for the first time on its turn must succeed on a DC 15 Dexterity\
    \ saving throw or have the [restrained](/compendium/rules/conditions.md#Restrained)\
    \ condition while in the web. As an action, a creature can free itself or another\
    \ creature from the web by succeeding on a DC 15 Strength check.\n\nA 5-foot cube\
    \ of the web is destroyed if it takes at least 10 acid, fire, or slashing damage\
    \ on a single turn."
  "name": "Stifling Webs (Recharge 5-6)"
"source":
- "VEoR"
"image": "compendium/bestiary/npc/token/ker-arach-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes