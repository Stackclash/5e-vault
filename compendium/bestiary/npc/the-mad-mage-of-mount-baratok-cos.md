---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/cos
- monster/cr/12
- monster/size/medium
- monster/type/humanoid/human
location: 
condition: healthy
images: []
relationships: []
aliases: [The Mad Mage of Mount Baratok]
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
*Source: Curse of Strahd p. 39*

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
"name": "The Mad Mage of Mount Baratok (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"ac_class": "15 with [mage armor](compendium/spells/mage-armor.md)"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "damage from spells; nonmagical bludgeoning, piercing, slashing\
  \ (from stoneskin)"
"senses": "passive Perception 12"
"languages": "any six languages"
"cr": "12"
"traits":
- "desc": "The mad mage is an 18th-level spellcaster. His spellcasting ability is\
    \ Intelligence (spell save DC 17, +9 to hit with spell attacks). He can cast [disguise\
    \ self](compendium/spells/disguise-self.md) and [invisibility](compendium/spells/invisibility.md)\
    \ at will and has the following wizard spells prepared:\n\nAt will: [disguise\
    \ self](compendium/spells/disguise-self.md), [invisibility](compendium/spells/invisibility.md)\n\
    \nCantrips (at will): [fire bolt](compendium/spells/fire-bolt.md), [light](compendium/spells/light.md),\
    \ [mage hand](compendium/spells/mage-hand.md), [prestidigitation](compendium/spells/prestidigitation.md),\
    \ [shocking grasp](compendium/spells/shocking-grasp.md)\n\n1st level (4 slots):\
    \ [detect magic](compendium/spells/detect-magic.md), [mage armor](compendium/spells/mage-armor.md),\
    \ [magic missile](compendium/spells/magic-missile.md), [shield](compendium/spells/shield.md)\n\
    \n2nd level (3 slots): [mirror image](compendium/spells/mirror-image.md),\
    \ [misty step](compendium/spells/misty-step.md), [web](compendium/spells/web.md)\n\
    \n3rd level (3 slots): [counterspell](compendium/spells/counterspell.md),\
    \ [fly](compendium/spells/fly.md), [lightning bolt](compendium/spells/lightning-bolt.md)\n\
    \n4th level (3 slots): [Mordenkainen's faithful hound](compendium/spells/mordenkainens-faithful-hound.md),\
    \ [polymorph](compendium/spells/polymorph.md), [stoneskin](compendium/spells/stoneskin.md)\n\
    \n5th level (3 slots): [Bigby's hand](compendium/spells/bigbys-hand.md), [cone\
    \ of cold](compendium/spells/cone-of-cold.md), [scrying](compendium/spells/scrying.md)\n\
    \n6th level (1 slots): [true seeing](compendium/spells/true-seeing.md)\n\n\
    7th level (1 slots): [Mordenkainen's magnificent mansion](compendium/spells/mordenkainens-magnificent-mansion.md)\n\
    \n8th level (1 slots): [mind blank](compendium/spells/mind-blank.md)\n\n9th\
    \ level (1 slots): [time stop](compendium/spells/time-stop.md)"
  "name": "Spellcasting"
- "desc": "The Mad Mage has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/the-mad-mage-of-mount-baratok-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes