---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/19
- monster/size/medium
- monster/type/fiend/devil
location: 
condition: healthy
images: []
relationships: []
aliases: [Khai Kiroth]
pronounced: 
race: 
gender: 
age: 
alignment: Typically  Lawful Evil
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
*Source: Vecna: Eve of Ruin*

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
"name": "Khai Kiroth (VEoR)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "289"
"hit_dice": "34d8 + 136"
"modifier": !!int "3"
"stats":
  - !!int "23"
  - !!int "16"
  - !!int "19"
  - !!int "14"
  - !!int "15"
  - !!int "19"
"speed": "30 ft., fly 50 ft."
"saves":
  - "strength": "+12"
  - "constitution": "+10"
  - "wisdom": "+8"
"skillsaves":
  - "name": "[Intimidation](/compendium/rules/skills.md#Intimidation)"
    "desc": "+10"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+8"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[frightened](/compendium/rules/conditions.md#Frightened),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "19"
"traits":
  - "desc": "Magical darkness doesn't impede Khai's [darkvision](/compendium/rules/senses.md#Darkvision)."
    "name": "Devil's Sight"
  - "desc": "Khai has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Khai makes one Bite attack and one Claw attack, and it can use Frightful\
      \ Presence or Incite Fanaticism."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 22\
      \ (3d10 + 6) piercing damage plus 38 (7d10) fire damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17\
      \ (2d10 + 6) force damage plus 11 (2d10) fire damage."
    "name": "Claw"
  - "desc": "Each creature of Khai's choice that is within 120 feet and aware of Khai\
      \ must succeed on a DC 18 Wisdom saving throw or become [frightened](/compendium/rules/conditions.md#Frightened)\
      \ of it for 1 minute. A creature can repeat the saving throw at the end of each\
      \ of its turns, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature is immune to Khai's\
      \ Frightful Presence for the next 24 hours."
    "name": "Frightful Presence"
  - "desc": "Khai chooses up to four other creatures within 60 feet of it that can\
      \ see it. Until the start of Khai's next turn, each of those creatures makes\
      \ attack rolls with advantage and can't be [frightened](/compendium/rules/conditions.md#Frightened)."
    "name": "Incite Fanaticism"
  - "desc": "Khai targets one Dragon it can see within 120 feet of it. The Dragon\
      \ must make a DC 18 Charisma saving throw. A chromatic dragon makes this save\
      \ with disadvantage. On a successful save, the target is immune to Khai's Power\
      \ of the Dragon Queen for 1 hour. On a failed save, the target is [charmed](/compendium/rules/conditions.md#Charmed)\
      \ by Khai for 1 hour. While [charmed](/compendium/rules/conditions.md#Charmed)\
      \ in this way, the target regards Khai as a trusted friend to be heeded and\
      \ protected. This effect ends if Khai or its companions deal damage to the target."
    "name": "Power of the Dragon Queen"
"source":
  - "VEoR"
"image": "compendium/bestiary/npc/token/khai-kiroth-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes