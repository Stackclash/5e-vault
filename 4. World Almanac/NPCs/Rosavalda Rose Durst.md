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
- monster/cr/3
- monster/size/small
- monster/type/undead
aliases: ["Rosavalda "Rose" Durst"]
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  "`INPUT[text:pronounced]`"
> ![[compendium/bestiary/npc/img/rosavalda-rose-durst.webp|cover hm-sm]] 
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
"name": "Rosavalda \"Rose\" Durst (CoS)"
"size": "Small"
"type": "undead"
"alignment": "Lawful Good"
"ac": !!int "11"
"hp": !!int "35"
"hit_dice": "10d6"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "17"
"speed": "0 ft., fly 40 ft. (hover)"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed\|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion\|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened\|frightened]], [[/5. Mechanics/Rules/Conditions.md#grappled\|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed\|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#petrified\|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned\|poisoned]], [[/5. Mechanics/Rules/Conditions.md#prone\|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#restrained\|restrained]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "3"
"traits":
- "desc": "Rose can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- "desc": "Rose can move through other creatures and objects as if they were difficult\
    \ terrain. It takes dice: 1d10|avg (1d10) force damage if it ends its turn\
    \ inside an object."
  "name": "Incorporeal Movement"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 4d6 + 3|avg (4d6 + 3) necrotic damage."
  "name": "Withering Touch"
- "desc": "Rose enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- "desc": "One humanoid that Rose can see within 5 feet of it must succeed on a DC\
    \ 13 Charisma saving throw or be possessed by Rose; Rose then disappears, and\
    \ the target is [[/5. Mechanics/Rules/Conditions.md#incapacitated\|incapacitated]]\
    \ and loses control of its body. Rose now controls the body but doesn't deprive\
    \ the target of awareness. Rose can't be targeted by any attack, spell, or other\
    \ effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [[/5. Mechanics/Rules/Conditions.md#charmed\|charmed]]\
    \ and [[/5. Mechanics/Rules/Conditions.md#frightened\|frightened]]. It otherwise uses\
    \ the possessed target's statistics, but doesn't gain access to the target's knowledge,\
    \ class features, or proficiencies.\n\nThe possession lasts until the body drops\
    \ to 0 hit points, Rose ends it as a bonus action, or Rose is turned or forced\
    \ out by an effect like the [[5. Mechanics/Spells/Dispel Evil And Good.md\|dispel evil and good]]\
    \ spell. When the possession ends, Rose reappears in an unoccupied space within\
    \ 5 feet of the body. The target is immune to this ghost's Possession for 24 hours\
    \ after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/rosavalda-rose-durst.png"
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