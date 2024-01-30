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
> ![[4. World Almanac/NPCs/img/kasimir-velikov.webp|cover hm-sm]] 
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
"name": "Kasimir Velikov (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "Dusk elf"
"alignment": "Neutral"
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
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any four languages"
"cr": "6"
"traits":
- "desc": "Kasimir is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). Kasimir has\
    \ the following wizard spells prepared:\n\nCantrips (at will): fire bolt,\
    \ light, mage hand, prestidigitation\n\n1st level (4 slots): detect magic,\
    \ mage armor, magic missile, shield\n\n2nd level (3 slots): misty step, suggestion\n\
    \n3rd level (3 slots): counterspell, fireball, fly\n\n4th level (3 slots):\
    \ greater invisibility, ice storm\n\n5th level (1 slots): cone of cold"
  "name": "spells"
- "desc": "Kasimir has advantage on saving throws against being charmed, and magic\
    \ can't put the him to sleep."
  "name": "Fey Ancestry"
- "desc": "Kasimir wears a ring of warmth and carries a spellbook containing all the\
    \ spells he has prepared plus the following spells: arcane lock, comprehend languages,\
    \ hold person, identify, locate object, nondetection, polymorph, protection from\
    \ evil and good, and wall of stone."
  "name": "Special Equipment"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/kasimir-velikov.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes