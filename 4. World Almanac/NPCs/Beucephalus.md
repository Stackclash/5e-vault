---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
relationships: []
tags: 
aliases: []
pronounced: 
race: 
gender: 
age: 
alignment: 
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
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  "`INPUT[text:pronounced]`"
> ![[4. World Almanac/NPCs/img/beucephalus.webp|cover hm-sm]] 
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Sex** | `INPUT[inlineSelect(option(male),option(female)):gender]` |
> **Age** | `INPUT[number:age]` |
> **Alignment** | `INPUT[inlineSelect(option(lawful good),option(neutral good),option(chaotic good),option(lawful neutral),option(neutral),option(chaotic neutral),option(lawful evil),option(netural evil),option(chaotic evil)):alignment]` |
> **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `INPUT[inlineList:occupation]` |
> **Group(s)** | `INPUT[inlineList:groups]` |
> **Religion(s)** | `INPUT[inlineList:religions]` |
> **Current Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |

# **`=this.file.name`**
TBD

## Traits/Goals
> [!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `INPUT[text:personality]`
>
>> [!metadata|text-Center bg-c-gray] Ideal
>> `INPUT[text:ideal]`
>
>> [!metadata|text-Center bg-c-gray] Bond
>> `INPUT[text:bond]`
>
>> [!metadata|text-Center bg-c-gray] Flaw
>> `INPUT[text:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[text:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[text:dislikes]`

> [!column|dataview] Goals
>> `INPUT[textArea:goals]`

## Relationships
```meta-bind-button
style: primary
label: Add Relationship
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: relationship
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Beucephalus (CoS)"
"size": "Large"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "104"
"hit_dice": "8d10 + 24"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "15"
"speed": "60 ft., fly 90 ft."
"damage_immunities": "fire"
"senses": "passive Perception 11"
"languages": "understands Abyssal, Common, and Infernal but can't speak "
"cr": "3"
"traits":
- "desc": "Beucephalus can grant resistance to fire damage to anyone riding it."
  "name": "Confer Fire Resistance"
- "desc": "Beucephalus sheds bright light in a 10-foot radius and dim light for an\
    \ additional 10 feet."
  "name": "Illumination"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) bludgeoning damage plus dice: 2d6|avg\
    \ (2d6) fire damage."
  "name": "Hooves"
- "desc": "Beucephalus and up to three willing creatures within 5 feet of it magically\
    \ enter the Ethereal Plane from the Material Plane, or vice versa."
  "name": "Ethereal Stride"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/beucephalus.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes