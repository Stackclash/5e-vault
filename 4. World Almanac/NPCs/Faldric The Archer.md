---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: null
relationships: []
tags:
  - npc
aliases:
  - Faldric the Archer
pronounced: null
race: null
gender: null
age: null
alignment: Lawful Evil
occupation: null
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
*Source: Strongholds and Followers p. 145*

Faldric is a cruel opportunist who rose through the town guard in Bedegar until he attracted Saxton's attention. The former Baron of Bedegar would never have promoted a man like Faldric, but the old Baron is dead, and the new regent has use of a man willing to say "yes" to any order.

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
"name": "Faldric The Archer"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather armor]]"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "11"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "14"
- !!int "13"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Perception": !!int "3"
  "Acrobatics": !!int "5"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "3"
"traits":
- "desc": "Faldric has advantage on Perception checks that rely on sight."
  "name": "Acute Sight"
"actions":
- "desc": "Faldric makes two attacks."
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage."
  "name": "Longbow"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Shortsword"
"reactions":
- "desc": "When a creature Faldric can see enters a space adjacent to Sir Pelliton,\
    \ Faldric may use his reaction to make a longbow attack against that creature.\
    \ If this attack is successful, the target is also knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Pelliton's Archer"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Faldric\
  \ the Archer.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
