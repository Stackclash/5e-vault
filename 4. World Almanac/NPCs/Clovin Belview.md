---
obsidianUIMode: preview
statblock: inline
tags:
  - compendium/src/5e/cos
  - monster/cr/1-4
  - monster/size/medium
  - monster/type/humanoid/mongrelfolk
  - npc
location: >-
  [[4. World Almanac/Places of Interest/Abbey of Saint Markovia.md|Abbey of
  Saint Markovia]]
condition: healthy
image: 4. World Almanac/NPCs/img/clovin-belview.webp
relationships: []
aliases: []
pronounced: CLOH-vin BEL-view
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 54
alignment: Neutral Evil
occupation:
  - Caretaker
groups: []
religions: []
personality: 'Subservient, eccentric, deeply troubled'
ideal: >-
  Survival and obedience are the utmost priorities in a world that neither wants
  nor understands you
bond: >-
  His twisted loyalty to the Abbot and a sense of belonging among the
  mongrelfolk
flaw: His fear of rejection and punishment overshadows his better judgment
goals: >-
  To please the Abbot, to find some measure of peace or acceptance in his
  existence
likes: >-
  Music (despite his lack of skill), the rare moments of quiet and solitude,
  alcohol
dislikes: >-
  The disdain or fear of outsiders, the cruelty of his existence, the conflict
  within the Abbey
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
> **Current Location** | `INPUT[suggester(optionQuery(#location)):location]` |

# **`=this.file.name`**
*Source: Curse of Strahd p. 147*

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
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Clovin Belview"
"size": "Medium"
"type": "humanoid"
"subtype": "mongrelfolk"
"alignment": "Neutral Evil"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "12"
- !!int "9"
- !!int "15"
- !!int "9"
- !!int "10"
- !!int "6"
"speed": "20 ft."
"skillsaves":
  "Deception": !!int "2"
  "Stealth": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "1/4"
"traits":
- "desc": "The mongrelfolk has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks and on saving throws against being [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]],\
    \ [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]],\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]],\
    \ or knocked [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]."
  "name": "Two-Headed"
- "desc": "Clovin can mimic any sounds it has heard, including voices. A creature\
    \ that hears the sounds can tell they are imitations with a successful DC 12 Wisdom\
    \ ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]]) check."
  "name": "Mimicry"
"actions":
- "desc": "Clovin makes two attacks: one with its bite and one with its claw or dagger."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) slashing damage."
  "name": "Claw"
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d4 + 1) piercing damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/clovin-belview-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
