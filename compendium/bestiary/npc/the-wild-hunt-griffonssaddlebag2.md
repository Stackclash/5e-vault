---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag2
- monster/cr/8
- monster/size/huge
- monster/type/undead
location: 
condition: healthy
images: []
relationships: []
aliases: [The Wild Hunt]
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
*Source: The Griffon's Saddlebag, Book 2 p. 357*

Few countryside stories are more prevalent than that of The Wild Hunt. Composed of myriad spectral predators and fallen hunters, the hunt roam the woods of both the Material and Ethereal planes in search of a worthy quarry. Scholars have recorded only a few accounts of surviving eyewitnesses, who mutter and wail about the terrible, echoing horn calls and endlessly trampling feet.

## Undead Nature

The Wild Hunt doesn't require air, food, drink, or sleep.

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
"name": "The Wild Hunt (GriffonsSaddlebag2)"
"size": "Huge"
"type": "undead"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d12 + 36"
"modifier": !!int "4"
"stats":
  - !!int "19"
  - !!int "18"
  - !!int "16"
  - !!int "11"
  - !!int "20"
  - !!int "15"
"speed": "40 ft."
"saves":
  - "wisdom": "+8"
  - "charisma": "+5"
"skillsaves":
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+8"
  - "name": "[Survival](/compendium/rules/skills.md#Survival)"
    "desc": "+11"
"damage_resistances": "acid, cold, fire, lightning, thunder"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [grappled](/compendium/rules/conditions.md#Grappled),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [petrified](/compendium/rules/conditions.md#Petrified),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [prone](/compendium/rules/conditions.md#Prone),\
  \ [restrained](/compendium/rules/conditions.md#Restrained)"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Common, Elvish, Sylvan"
"cr": "8"
"traits":
  - "desc": "The Wild Hunt have advantage on attack rolls against a target if they\
      \ are occupying the same space as the target and there are not other hostile\
      \ creatures in The Wild Hunt's space."
    "name": "Hunter's Prowess"
  - "desc": "The Wild Hunt can occupy another creature's space and vice versa. The\
      \ Wild Hunt can also move through any opening large enough for a Medium creature,\
      \ and they can move through other creatures and objects as if they were difficult\
      \ terrain. The Wild Hunt take 5 (d10) force damage if they end their turn inside\
      \ an object."
    "name": "Incorporeal Swarm"
  - "desc": "The Wild Hunt have advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The Wild Hunt make two mauling rend attacks. They can use their Volley\
      \ in place of one attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) piercing damage, plus 9 (2d4 + 4) slashing damage, or 7 (1d6 + 4)\
      \ piercing damage plus 6 (1d4 + 4) slashing damage if The Wild Hunt have half\
      \ their hit points or fewer."
    "name": "Mauling Rend"
  - "desc": "The Wild Hunt releases a flurry of arrows, targeting a point they can\
      \ see within 120 feet of them. Each creature in a 20-foot-radius, 20-foot-high\
      \ cylinder centered on that point must make a DC 15 Dexterity saving throw,\
      \ taking 14 (4d6) piercing damage on a failed save, or half as much damage on\
      \ a successful one. If The Wild Hunt have half their hit points or fewer, a\
      \ target instead takes 7 (2d6) piercing damage on a failed save, or no damage\
      \ on a successful one."
    "name": "Volley"
"legendary_actions":
  - "desc": "The Wild Hunt can take 2 legendary actions, choosing from the options\
      \ below. Only one legendary action can be used at a time and only at the end\
      \ of another creature's turn. The Wild Hunt regain spent legendary actions at\
      \ the start of their turn."
    "name": ""
  - "desc": "The Wild Hunt moves up to its speed."
    "name": "Move"
  - "desc": "The Wild Hunt gain 13 (2d12) temporary hit points."
    "name": "Rallying Horn (Below Half Hit Points Only)"
  - "desc": "Whenever a target takes damage from The Wild Hunt before the end of their\
      \ next turn, the target takes an extra 4 (d8) force damage."
    "name": "War Horn (Costs 2 Actions)"
"source":
  - "GriffonsSaddlebag2"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes