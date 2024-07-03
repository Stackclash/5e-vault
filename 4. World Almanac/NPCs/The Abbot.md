---
obsidianUIMode: preview
statblock: inline
tags:
  - compendium/src/5e/cos
  - monster/cr/10
  - monster/size/medium
  - monster/type/celestial
  - npc
location: null
condition: healthy
image: null
relationships: []
aliases: []
pronounced: null
race: null
gender: null
age: null
alignment: Lawful Evil
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
*Source: Curse of Strahd p. 151*

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
"name": "The Abbot"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "17"
- !!int "20"
- !!int "20"
"speed": "30 ft., fly 90 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "9"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "10"
"traits":
- "desc": "The Abbot's spellcasting ability is Charisma (spell save DC 17). The Abbot\
    \ can innately cast the following spells, requiring only verbal components:\n\n\
    At will: [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]]\n\
    \n1/day each: [[5. Mechanics/Spells/Commune.md|commune]], [[5. Mechanics/Spells/Raise Dead.md|raise dead]]"
  "name": "Innate Spellcasting"
- "desc": "The Abbot's weapon attacks are magical. When The Abbot hits with any weapon,\
    \ the weapon deals an extra 4d8 radiant damage (included in the attack)."
  "name": "Angelic Weapons"
- "desc": "The Abbot has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The Abbot makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage plus 18 (4d8) radiant damage."
  "name": "Mace"
- "desc": "The Abbot touches another creature. The target magically regains 20 (4d8\
    \ + 2) hit points and is freed from any curse, disease, poison, blindness, or\
    \ deafness."
  "name": "Healing Touch (3/Day)"
- "desc": "The Abbot magically polymorphs into a humanoid or beast that has a challenge\
    \ rating equal to or less than its own, or back into its true form. It reverts\
    \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
    \ or borne by the new form (The Abbot's choice).\n\nIn a new form, The Abbot retains\
    \ its game statistics and ability to speak, but its AC, movement modes, Strength,\
    \ Dexterity, and special senses are replaced by those of the new form, and it\
    \ gains any statistics and capabilities (except class features, legendary actions,\
    \ and lair actions) that the new form has but that it lacks."
  "name": "Change Shape"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/the-abbot-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
