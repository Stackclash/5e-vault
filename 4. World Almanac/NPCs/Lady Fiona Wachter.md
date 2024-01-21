---
obsidianUIMode: preview
statblock: inline
pronounced: 
race: 
sex: 
age: 
alignment: 
condition: healthy
occupation: 
group: 
religions: 
location: "[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]"
personality: 
ideal: 
bond: 
flaw: 
goals: 
likes: 
dislikes: 
tags:
  - compendium/src/5e/cos
  - monster/cr/2
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Lady Fiona Wachter
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  "`INPUT[text:pronounced]`"
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Sex** | `INPUT[inlineSelect(option(male),option(female)):sex]` |
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

## Acquaintances
> [!column|dataview] Acquaintances
>> [!metadata|text-Center bg-c-green]- Friends & Family
>> TBD
>
>> [!metadata|text-Center bg-c-red]- Rivals
>> TBD
>

## Stats
```statblock
"name": "Lady Fiona Wachter (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "10"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "16"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "7"
  "Religion": !!int "5"
  "Persuasion": !!int "3"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "2"
"traits":
- "desc": "Fiona is a 5th-level spellcaster. Her spellcasting ability is Wisdom (spell\
    \ save DC 13, dice: d20+5 (+5 to hit) with spell attacks). Fiona has the following\
    \ cleric spells prepared:\n\nCantrips (at will): light, mending, thaumaturgy\n\
    \n1st level (4 slots): command, purify food and drink, sanctuary\n\n2nd\
    \ level (3 slots): augury, gentle repose, hold person\n\n3rd level (2 slots):\
    \ animate dead, create food and water"
  "name": "spells"
- "desc": "As a bonus action, Fiona can expend a spell slot to cause its melee weapon\
    \ attacks to magically deal an extra dice: 3d6|avg (3d6) radiant damage to\
    \ a target on a hit. This benefit lasts until the end of the turn. If Fiona expends\
    \ a spell slot of 2nd level or higher, the extra damage increases by dice: 1d6|avg\
    \ (1d6) for each level above 1st."
  "name": "Divine Eminence"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6|avg (1d6) bludgeoning damage."
  "name": "Mace"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/lady-fiona-wachter.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes