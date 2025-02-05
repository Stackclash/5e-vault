---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/saf
- monster/cr/1
- monster/size/medium
- monster/type/humanoid/human
location: 
condition: healthy
images: 
- https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/socr-pinna.jpg
relationships: []
aliases: [Pinna]
pronounced: 
race: 
gender: 
age: 
alignment: Neutral Good
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
*Source: Strongholds and Followers p. 145*

Pinna is a young woman of seventeen who lives in the village of Gravesford, at the edge of the Forest Rend. She is easily recognizable by her tall, pointed straw hat, curly red hair, and crystal necklace—her arcane focus. Pinna is a country hedge mage, well respected by the people of Gravesford.

Pinna is described in more detail in Major NPCs (page 101).

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
"name": "Pinna (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d6 + 0"
"stats":
- !!int "6"
- !!int "8"
- !!int "11"
- !!int "16"
- !!int "12"
- !!int "15"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "2"
  "Intelligence": !!int "6"
"skillsaves":
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "Common"
"cr": "1"
"traits":
- "desc": "Pinna is a 3rd-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 13, +5 to hit with spell attacks). Pinna has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [minor illusion](compendium/spells/minor-illusion.md),\
    \ [mage hand](compendium/spells/mage-hand.md), [dancing lights](compendium/spells/dancing-lights.md),\
    \ [fire bolt](compendium/spells/fire-bolt.md)\n\n1st level (4 slots): [color\
    \ spray](compendium/spells/color-spray.md), [silent image](compendium/spells/silent-image.md),\
    \ [identify](compendium/spells/identify.md), [magic missile](compendium/spells/magic-missile.md)\n\
    \n2nd level (2 slots): [blur](compendium/spells/blur.md), [web](compendium/spells/web.md)"
  "name": "Spellcasting"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 2 (1d4 + 0) piercing damage."
  "name": "Dagger"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Pinna.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes