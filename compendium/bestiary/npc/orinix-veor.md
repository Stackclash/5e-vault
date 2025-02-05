---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/13
- monster/size/huge
- monster/type/dragon
location: 
condition: healthy
images: []
relationships: []
aliases: [Orinix]
pronounced: 
race: 
gender: 
age: 
alignment: typically  Neutral Evil
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
"name": "Orinix (VEoR)"
"size": "Huge"
"type": "dragon"
"alignment": "typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "172"
"hit_dice": "15d12 + 75"
"stats":
- !!int "23"
- !!int "12"
- !!int "20"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "40 ft., burrow 20 ft., fly 80 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "10"
"skillsaves":
  "Stealth": !!int "11"
  "Perception": !!int "11"
"damage_immunities": "cold"
"senses": "darkvision 240 ft., passive Perception 21"
"languages": "Draconic"
"cr": "13"
"traits":
- "desc": "If Orinix fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
- "desc": "Orinix can burrow through solid rock at half its burrowing speed and leaves\
    \ a 15-foot-diameter tunnel in its wake."
  "name": "Tunneler"
- "desc": "Orinix doesn't require air."
  "name": "Unusual Nature"
"actions":
- "desc": "Orinix makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 13\
    \ (2d6 + 6) piercing damage plus 3 (1d6) cold damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6\
    \ + 6) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 13\
    \ (2d6 + 6) bludgeoning damage."
  "name": "Tail"
- "desc": "Orinix exhales a blast of frost in a 60-foot cone. Each creature in the\
    \ cone must make a DC 18 Constitution saving throw. On a failed save, the creature\
    \ takes 36 (8d8) cold damage, and its speed is reduced to 0 until the end of its\
    \ next turn. On a successful save, the creature takes half as much damage, and\
    \ its speed isn't reduced."
  "name": "Cold Breath (Recharge 5-6)"
"bonus_actions":
- "desc": "Orinix becomes partially incorporeal for as long as it maintains [concentration](/compendium/rules/conditions.md#Concentration)\
    \ on the effect (as if [concentrating](/compendium/rules/conditions.md#Concentration)\
    \ on a spell). While partially incorporeal, Orinix has resistance to bludgeoning,\
    \ piercing, and slashing damage."
  "name": "Phase (3/Day)"
"legendary_actions":
- "desc": "Orinix makes one Tail attack."
  "name": "Tail Attack"
- "desc": "Magical ice covers the ground in a 20-foot radius centered on a point Orinix\
    \ can see within 120 feet of itself. The ice, which is difficult terrain for all\
    \ creatures except lunar dragons, lasts for 10 minutes or until Orinix uses this\
    \ legendary action again."
  "name": "Treacherous Ice"
"source":
- "VEoR"
"image": "compendium/bestiary/npc/token/orinix-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes