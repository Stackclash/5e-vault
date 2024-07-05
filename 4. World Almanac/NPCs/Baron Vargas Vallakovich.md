---
obsidianUIMode: preview
statblock: inline
tags:
  - compendium/src/5e/cos
  - monster/cr/1-8
  - monster/size/medium
  - monster/type/humanoid/human
  - npc
location: '[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]'
condition: healthy
image: 4. World Almanac/NPCs/img/baron-vargas-vallakovich.webp
relationships:
  - Lady Lydia Petrovna|wife
  - Victor Vallakovich|son
aliases: []
pronounced: VAR-gas val-lah-KO-vich
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 43
alignment: Neutral Evil
occupation: []
groups: []
religions: []
personality: 'Authoritarian, paranoid, obsessed with maintaining a façade of happiness'
ideal: All will be well if we just keep pretending it is.
bond: >-
  His family's legacy of ruling Vallaki, his desperate need to keep the town
  safe from Strahd's influence
flaw: >-
  His denial of Vallaki's real problems and his tyrannical methods of enforcing
  happiness
goals: ' To keep Vallaki free from Strahd''s influence, to maintain order at all costs'
likes: 'Obedience, festivals, public displays of happiness'
dislikes: 'Dissent, failure, anything that threatens his control or Vallaki''s ''happiness'''
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
*Source: Curse of Strahd p. 105*

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
"name": "Baron Vargas Vallakovich"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Breastplate.md|breastplate]]"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "12"
- !!int "11"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Insight": !!int "4"
  "Persuasion": !!int "5"
"senses": "passive Perception 12"
"languages": "any two languages"
"cr": "1/8"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
    \ + 1) piercing damage."
  "name": "Rapier"
"reactions":
- "desc": "Vargas adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Vargas must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/baron-vargas-vallakovich-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
