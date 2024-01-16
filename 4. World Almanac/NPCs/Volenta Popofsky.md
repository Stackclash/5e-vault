---
obsidianUIMode: preview
statblock: inline
pronounced: 
race: 
sex: male
age: 
alignment: 
condition: healthy
occupation: 
group: 
religions: 
location: 
personality: ""
ideal: 
bond: 
flaw: 
goals: 
likes: 
dislikes: 
tags:
- compendium/src/5e/cos
- monster/cr/5
- monster/size/medium
- monster/type/undead
aliases: ["Volenta Popofsky"]
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
"name": "Volenta Popofsky (CoS)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- "desc": "Volenta regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point and isn't in sunlight or running water. If Volenta takes radiant\
    \ damage or damage from holy water, this trait doesn't function at the start of\
    \ Volenta's next turn."
  "name": "Regeneration"
- "desc": "Volenta can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "Volenta has the following flaws:\n\nForbiddance. Volenta can't enter\
    \ a residence without an invitation from one of the occupants.\n\nHarmed by Running\
    \ Water. Volenta takes 20 acid damage when it ends its turn in running water.\n\
    \nStake to the Heart. Volenta is destroyed if a piercing weapon made of wood\
    \ is driven into its heart while it is incapacitated in its resting place.\n\n\
    Sunlight Hypersensitivity. Volenta takes 20 radiant damage when it starts its\
    \ turn in sunlight. While in sunlight, it has disadvantage on attack rolls and\
    \ ability checks."
  "name": "Vampire Weaknesses"
"actions":
- "desc": "Volenta makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one willing\
    \ creature, or a creature that is grappled by Volenta, incapacitated, or restrained.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage plus dice: 2d6|avg\
    \ (2d6) necrotic damage. The target's hit point maximum is reduced by an amount\
    \ equal to the necrotic damage taken, and Volenta regains hit points equal to\
    \ that amount. The reduction lasts until the target finishes a long rest. The\
    \ target dies if this effect reduces its hit point maximum to 0."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d4 + 3|avg (2d4 + 3) slashing damage. Instead of dealing damage,\
    \ Volenta can grapple the target (escape DC 13)."
  "name": "Claws"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/volenta-popofsky.png"
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