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
> **Pronounced:**  `INPUT[text:pronounced]`
> ![[4. World Almanac/NPCs/img/doru.webp|cover hm-sm]] 
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Gender** | `INPUT[inlineSelect(option(male),option(female)):gender]` |
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
    str: add
  - type: input
    str: relationship
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
    str: remove
  - type: input
    str: relationship
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Doru (CoS)"
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
- "desc": "Doru regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point and isn't in sunlight or running water. If Doru takes radiant damage\
    \ or damage from holy water, this trait doesn't function at the start of Doru's\
    \ next turn."
  "name": "Regeneration"
- "desc": "Doru can climb difficult surfaces, including upside down on ceilings, without\
    \ needing to make an ability check."
  "name": "Spider Climb"
- "desc": "Doru has the following flaws:\n\nForbiddance. Doru can't enter a residence\
    \ without an invitation from one of the occupants.\n\nHarmed by Running Water.\
    \ Doru takes 20 acid damage when it ends its turn in running water.\n\nStake\
    \ to the Heart. Doru is destroyed if a piercing weapon made of wood is driven\
    \ into its heart while it is incapacitated in its resting place.\n\nSunlight\
    \ Hypersensitivity. Doru takes 20 radiant damage when it starts its turn in sunlight.\
    \ While in sunlight, it has disadvantage on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- "desc": "Doru makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one willing\
    \ creature, or a creature that is grappled by Doru, incapacitated, or restrained.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage plus dice: 2d6|avg\
    \ (2d6) necrotic damage. The target's hit point maximum is reduced by an amount\
    \ equal to the necrotic damage taken, and Doru regains hit points equal to that\
    \ amount. The reduction lasts until the target finishes a long rest. The target\
    \ dies if this effect reduces its hit point maximum to 0."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d4 + 3|avg (2d4 + 3) slashing damage. Instead of dealing damage,\
    \ Doru can grapple the target (escape DC 13)."
  "name": "Claws"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/doru.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes