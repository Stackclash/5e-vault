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
location: 
personality: 
ideal: 
bond: 
flaw: 
goals: 
likes: 
dislikes: 
tags:
- compendium/src/5e/cos
- monster/cr/6
- monster/size/medium
- monster/type/humanoid/human
aliases: ["Victor Vallakovich"]
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  "`INPUT[text:pronounced]`"
> ![[compendium/bestiary/npc/img/005-cos02-02.webp|cover hm-sm]] 
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
> [!info|bg-c-purple]- Overview
TBD

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

## Stats
```statblock
"name": "Victor Vallakovich (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "6"
"traits":
- "desc": "Victor is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). Victor has\
    \ the following wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Fire Bolt.md\|fire bolt]],\
    \ [[5. Mechanics/Spells/Light.md\|light]], [[5. Mechanics/Spells/Mage Hand.md\|mage hand]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md\|prestidigitation]]\n\n1st level (4\
    \ slots): [[5. Mechanics/Spells/Detect Magic.md\|detect magic]], [[5. Mechanics/Spells/Mage Armor.md\|mage armor]],\
    \ [[5. Mechanics/Spells/Magic Missile.md\|magic missile]], [[5. Mechanics/Spells/Shield.md\|shield]]\n\
    \n2nd level (3 slots): [[5. Mechanics/Spells/Misty Step.md\|misty step]], [[5. Mechanics/Spells/Suggestion.md\|suggestion]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Counterspell.md\|counterspell]],\
    \ [[5. Mechanics/Spells/Fireball.md\|fireball]], [[5. Mechanics/Spells/Fly.md\|fly]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Greater Invisibility.md\|greater invisibility]],\
    \ [[5. Mechanics/Spells/Ice Storm.md\|ice storm]]\n\n5th level (1 slots): [cone\
    \ of cold](compendium/spells/cone-of-cold.md)"
  "name": "spells"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/victor-vallakovich.png"
```
^statblock

## Acquaintances
> [!column|dataview] Acquaintances
>> [!metadata|text-Center bg-c-green]- Friends & Family
>> TBD
>
>> [!metadata|text-Center bg-c-red]- Rivals
>> TBD
>

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes