---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
image:
relationships: []
tags: 
aliases: [Stanimir]
pronounced: 
race: 
gender: 
age: 
alignment: Chaotic Neutral
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
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
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
> **Current Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |

# **`=this.file.name`**
*Source: Curse of Strahd p. 20*

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
"name": "Stanimir (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
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
- "desc": "Stanimir is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). Stanimir has\
    \ the following wizard spells prepared:\n\nCantrips (at will): [friends](compendium/spells/friends.md),\
    \ [light](compendium/spells/light.md), [mage hand](compendium/spells/mage-hand.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ slots): [charm person](compendium/spells/charm-person.md), [mage armor](compendium/spells/mage-armor.md),\
    \ [shield](compendium/spells/shield.md), [sleep](compendium/spells/sleep.md)\n\
    \n2nd level (3 slots): [misty step](compendium/spells/misty-step.md), [suggestion](compendium/spells/suggestion.md)\n\
    \n3rd level (3 slots): [bestow curse](compendium/spells/bestow-curse.md),\
    \ [phantom steed](compendium/spells/phantom-steed.md), [vampiric touch](compendium/spells/vampiric-touch.md)\n\
    \n4th level (3 slots): [greater invisibility](compendium/spells/greater-invisibility.md),\
    \ [stoneskin](compendium/spells/stoneskin.md)\n\n5th level (1 slots): [dominate\
    \ person](compendium/spells/dominate-person.md)"
  "name": "spells"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/stanimir-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes