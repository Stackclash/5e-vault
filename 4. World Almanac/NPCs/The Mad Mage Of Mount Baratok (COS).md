---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/12
  - monster/size/medium
  - monster/type/humanoid/human
location: null
condition: healthy
images: []
relationships: []
aliases:
  - The Mad Mage of Mount Baratok
pronounced: null
race: null
gender: null
age: null
alignment: Chaotic Neutral
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
image: null
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
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Add Relationship.md"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Remove Relationship.md"
```
> [!div | no-t clean txt-c]
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "The Mad Mage Of Mount Baratok (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"ac_class": "15 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "20"
  - !!int "15"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "intelligence": "+9"
  - "wisdom": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+13"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+13"
"damage_resistances": "damage from spells; nonmagical bludgeoning, piercing, slashing\
  \ (from stoneskin)"
"senses": "passive Perception 12"
"languages": "any six languages"
"cr": "12"
"traits":
  - "desc": "The mad mage is an 18th-level spellcaster. His spellcasting ability is\
      \ Intelligence (spell save DC 17, +9 to hit with spell attacks). He can cast\
      \ [[5. Mechanics/Spells/Disguise Self.md|disguise self]] and [[5. Mechanics/Spells/Invisibility.md|invisibility]]\
      \ at will and has the following wizard spells prepared:\n\nCantrips (at will):\
      \ [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]], [[5. Mechanics/Spells/Light.md|light]],\
      \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]],\
      \ [[5. Mechanics/Spells/Shocking Grasp.md|shocking grasp]]\n\n1st level (4 slots):\
      \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
      \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]], [[5. Mechanics/Spells/Shield.md|shield]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Mirror Image.md|mirror image]],\
      \ [[5. Mechanics/Spells/Misty Step.md|misty step]], [[5. Mechanics/Spells/Web.md|web]]\n\
      \n3rd level (3 slots): [[5. Mechanics/Spells/Counterspell.md|counterspell]],\
      \ [[5. Mechanics/Spells/Fly.md|fly]], [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]\n\
      \n4th level (3 slots): [[5. Mechanics/Spells/Mordenkainens Faithful Hound.md|Mordenkainen's faithful hound]],\
      \ [[5. Mechanics/Spells/Polymorph.md|polymorph]], [[5. Mechanics/Spells/Stoneskin.md|stoneskin]]\n\
      \n5th level (3 slots): [[5. Mechanics/Spells/Bigbys Hand.md|Bigby's hand]],\
      \ [[5. Mechanics/Spells/Cone Of Cold.md|cone of cold]], [[5. Mechanics/Spells/Scrying.md|scrying]]\n\
      \n6th level (1 slots): [[5. Mechanics/Spells/True Seeing.md|true seeing]]\n\
      \n7th level (1 slots): [[5. Mechanics/Spells/Mordenkainens Magnificent Mansion.md|Mordenkainen's magnificent mansion]]\n\
      \n8th level (1 slots): [[5. Mechanics/Spells/Mind Blank.md|mind blank]]\n\n\
      9th level (1 slots): [[5. Mechanics/Spells/Time Stop.md|time stop]]"
    "name": "Spellcasting"
  - "desc": "The Mad Mage has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "CoS"
"image": "4. World Almanac/NPCs/token/the-mad-mage-of-mount-baratok-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
