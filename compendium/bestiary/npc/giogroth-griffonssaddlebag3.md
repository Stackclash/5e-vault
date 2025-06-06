---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag3
- monster/cr/9
- monster/size/medium
- monster/type/humanoid/dragonborn
location: 
condition: healthy
images: []
relationships: []
aliases: [Giogroth]
pronounced: 
race: 
gender: 
age: 
alignment: Lawful Neutral
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
*Source: The Griffon's Saddlebag, Book 3 p. 0*

A dragonborn assisting the Mycothrall Sovereignty. Giogroth has invested decades of study into magic and metallurgy, and always carries a sword at his hip. He does not know the entirety of the Mycothrall Queen's plan for what she ultimately hopes to achieve, but knows that for the time being, he prefers the company of the relatively humanoid members of the Sovereignty than the undead or constructed legions serving under the lich, Styggar.

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
"name": "Giogroth (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "dragonborn"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"ac_class": "15 with [mage armor](compendium/spells/mage-armor.md)"
"hp": !!int "97"
"hit_dice": "15d8 + 30"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "14"
  - !!int "19"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": "+8"
  - "wisdom": "+5"
"skillsaves":
  - "name": "[Arcana](/compendium/rules/skills.md#Arcana)"
    "desc": "+8"
  - "name": "[Athletics](/compendium/rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[History](/compendium/rules/skills.md#History)"
    "desc": "+8"
  - "name": "[Investigation](/compendium/rules/skills.md#Investigation)"
    "desc": "+8"
"damage_resistances": "cold"
"senses": "passive Perception 11"
"languages": "Common, Draconic"
"cr": "9"
"traits":
  - "desc": "Giogroth is an 11th-level spellcaster. His spellcasting ability is Intelligence\
      \ (spell save DC 16, +8 to hit with spell attacks). Giogroth has the following\
      \ wizard spells prepared:\n\nCantrips (at will): [fire bolt](compendium/spells/fire-bolt.md),\
      \ [light](compendium/spells/light.md), [mage hand](compendium/spells/mage-hand.md),\
      \ [mending](compendium/spells/mending.md), [prestidigitation](compendium/spells/prestidigitation.md)\n\
      \n1st level (4 slots): [burning hands](compendium/spells/burning-hands.md),\
      \ [find familiar](compendium/spells/find-familiar.md) , [grease](compendium/spells/grease.md),\
      \ [mage armor](compendium/spells/mage-armor.md) , [shield](compendium/spells/shield.md)\n\
      \n2nd level (3 slots): [flaming sphere](compendium/spells/flaming-sphere.md),\
      \ [hold person](compendium/spells/hold-person.md), [mirror image](compendium/spells/mirror-image.md)\n\
      \n3rd level (3 slots): [counterspell](compendium/spells/counterspell.md),\
      \ [fireball](compendium/spells/fireball.md), [haste](compendium/spells/haste.md)\n\
      \n4th level (3 slots): [Evard's black tentacles](compendium/spells/evards-black-tentacles.md),\
      \ [fire shield](compendium/spells/fire-shield.md)\n\n5th level (2 slots):\
      \ [dominate person](compendium/spells/dominate-person.md), [telekinesis](compendium/spells/telekinesis.md)\n\
      \n6th level (1 slots): [contingency](compendium/spells/contingency.md) \n\
      \nGiogroth casts these spells before combat."
    "name": "Spellcasting"
  - "desc": "When Giogroth casts [find familiar](compendium/spells/find-familiar.md),\
      \ he can choose for it to take the form of a flying sword. It uses the normal\
      \ statistics for a flying sword except it is immune to damage and its attacks\
      \ are magical."
    "name": "Construct Familiar"
  - "desc": "Constructs have disadvantage on attack rolls against Giogroth, and he\
      \ has advantage on saving throws against being [charmed](/compendium/rules/conditions.md#Charmed)\
      \ or [frightened](/compendium/rules/conditions.md#Frightened)."
    "name": "Guardian Amulet"
"actions":
  - "desc": "Giogroth makes two attacks: one with his longsword and one with his flying\
      \ sword familiar. In place of his longsword attack, Giogroth can use his Faraway\
      \ Blade or Breath Weapon, or he can cast one of his prepared spells that has\
      \ a casting time of 1 action."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target within reach\
      \ of Giogroth's flying sword. Hit: 8 (1d8 + 4) slashing damage plus 9 (2d8)\
      \ cold damage."
    "name": "Flying Sword (Familiar)"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8\
      \ + 5) slashing damage."
    "name": "Longsword"
  - "desc": "Ranged Spell Attack: +9 to hit, range 60 ft., one target. Hit: 18\
      \ (3d8 + 5) force damage."
    "name": "Faraway Blade"
  - "desc": "Giogroth exhales an icy blast of hail in a 15-foot cone. Each creature\
      \ in that area must make a DC 14 Constitution saving throw, taking 14 (4d6)\
      \ cold damage on a failed save, or half as much damage on a successful one."
    "name": "Breath Weapon (Recharges After a Short or Long Rest)"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes