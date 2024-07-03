---
obsidianUIMode: preview
statblock: inline
tags:
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/humanoid/dusk-elf
  - npc
location: null
condition: healthy
image: 4. World Almanac/NPCs/img/kasimir-velikov.webp
relationships: []
aliases: []
pronounced: null
race: null
gender: null
age: null
alignment: Neutral
occupation: []
groups: []
religions: []
personality: null
ideal: null
bond: null
flaw: null
goals: null
likes: null
dislikes: null
partyRelationships: {}
---

> [!infobox | wsmall]
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
> ```dataviewjs
> await dv.view("npcRelationships", { current: dv.current() })
> ```

## Stats
```statblock
"name": "Kasimir Velikov"
"size": "Medium"
"type": "humanoid"
"subtype": "Dusk elf"
"alignment": "Neutral"
"ac": !!int "12"
"ac_class": "15 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
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
    \ wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
    \ [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
    \ slots): [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
    \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]], [[5. Mechanics/Spells/Shield.md|shield]]\n\
    \n2nd level (3 slots): [[5. Mechanics/Spells/Misty Step.md|misty step]], [[5. Mechanics/Spells/Suggestion.md|suggestion]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Counterspell.md|counterspell]],\
    \ [[5. Mechanics/Spells/Fireball.md|fireball]], [[5. Mechanics/Spells/Fly.md|fly]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
    \ [[5. Mechanics/Spells/Ice Storm.md|ice storm]]\n\n5th level (1 slots): [[5. Mechanics/Spells/Cone Of Cold.md|cone\
    \ of cold]]"
  "name": "Spellcasting"
- "desc": "Kasimir has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ and magic can't put the him to sleep."
  "name": "Fey Ancestry"
- "desc": "Kasimir wears a [[5. Mechanics/Items/Ring Of Warmth.md|ring of warmth]] and\
    \ carries a spellbook containing all the spells he has prepared plus the following\
    \ spells: [[5. Mechanics/Spells/Arcane Lock.md|arcane lock]], [[5. Mechanics/Spells/Comprehend Languages.md|comprehend languages]],\
    \ [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Identify.md|identify]],\
    \ [[5. Mechanics/Spells/Locate Object.md|locate object]], [[5. Mechanics/Spells/Nondetection.md|nondetection]],\
    \ [[5. Mechanics/Spells/Polymorph.md|polymorph]], [[5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]],\
    \ and [[5. Mechanics/Spells/Wall Of Stone.md|wall of stone]]."
  "name": "Special Equipment"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/kasimir-velikov-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
