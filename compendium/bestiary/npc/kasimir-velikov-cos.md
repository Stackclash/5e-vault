---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/cos
- monster/cr/6
- monster/size/medium
- monster/type/humanoid/dusk-elf
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/kasimir-velikov.webp
relationships: []
aliases: [Kasimir Velikov]
pronounced: 
race: 
gender: 
age: 
alignment: Neutral
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
*Source: Curse of Strahd p. 233*

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
"name": "Kasimir Velikov (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "Dusk elf"
"alignment": "Neutral"
"ac": !!int "12"
"ac_class": "15 with [mage armor](compendium/spells/mage-armor.md)"
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
    \ (spell save DC 14, +6 to hit with spell attacks). Kasimir has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [fire bolt](compendium/spells/fire-bolt.md),\
    \ [light](compendium/spells/light.md), [mage hand](compendium/spells/mage-hand.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ slots): [detect magic](compendium/spells/detect-magic.md), [mage armor](compendium/spells/mage-armor.md),\
    \ [magic missile](compendium/spells/magic-missile.md), [shield](compendium/spells/shield.md)\n\
    \n2nd level (3 slots): [misty step](compendium/spells/misty-step.md), [suggestion](compendium/spells/suggestion.md)\n\
    \n3rd level (3 slots): [counterspell](compendium/spells/counterspell.md),\
    \ [fireball](compendium/spells/fireball.md), [fly](compendium/spells/fly.md)\n\
    \n4th level (3 slots): [greater invisibility](compendium/spells/greater-invisibility.md),\
    \ [ice storm](compendium/spells/ice-storm.md)\n\n5th level (1 slots): [cone\
    \ of cold](compendium/spells/cone-of-cold.md)"
  "name": "Spellcasting"
- "desc": "Kasimir has advantage on saving throws against being [charmed](/compendium/rules/conditions.md#Charmed),\
    \ and magic can't put the him to sleep."
  "name": "Fey Ancestry"
- "desc": "Kasimir wears a [ring of warmth](compendium/items/ring-of-warmth.md) and\
    \ carries a spellbook containing all the spells he has prepared plus the following\
    \ spells: [arcane lock](compendium/spells/arcane-lock.md), [comprehend languages](compendium/spells/comprehend-languages.md),\
    \ [hold person](compendium/spells/hold-person.md), [identify](compendium/spells/identify.md),\
    \ [locate object](compendium/spells/locate-object.md), [nondetection](compendium/spells/nondetection.md),\
    \ [polymorph](compendium/spells/polymorph.md), [protection from evil and good](compendium/spells/protection-from-evil-and-good.md),\
    \ and [wall of stone](compendium/spells/wall-of-stone.md)."
  "name": "Special Equipment"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/kasimir-velikov-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes