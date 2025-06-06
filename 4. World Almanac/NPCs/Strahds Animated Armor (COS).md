---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/construct
location: null
condition: healthy
images:
  - 4. World Almanac\NPCs\img\strahds-animated-armor.webp
relationships: []
aliases:
  - Strahd's Animated Armor
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
*Source: Curse of Strahd p. 227*

The armor that Strahd wore into battle when he was alive lives on today as a headless, animated suit of plate armor. The armor is painted burgundy and adorned with golden angelic motifs.

## Thing of Evil

Strahd imbued his automaton with a sliver of his being, bequeathing unto his armor a malevolence not found in most animated objects. He also fortified his armor and placed a number of permanent spell effects on it to make the armor a better castle defender.

The armor understands Common but obeys only the commands of its master.

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
"name": "Strahds Animated Armor (COS)"
"size": "Medium"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "13"
  - !!int "16"
  - !!int "9"
  - !!int "10"
  - !!int "9"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"damage_resistances": "cold, fire"
"damage_immunities": "lightning, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 13"
"languages": "understands Common but can't speak"
"cr": "6"
"traits":
  - "desc": "An animated object doesn't require air, food, drink, or sleep.\n\nThe\
      \ magic that animates an object is dispelled when the construct drops to 0 hit\
      \ points. An animated object reduced to 0 hit points becomes inanimate and is\
      \ too damaged to be of much use or value to anyone."
    "name": "Constructed Nature"
  - "desc": "The armor is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ while in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
      \ If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the armor\
      \ must succeed on a Constitution saving throw against the caster's spell save\
      \ DC or fall [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]] for\
      \ 1 minute."
    "name": "Antimagic Susceptibility"
  - "desc": "While the armor remains motionless, it is indistinguishable from a normal\
      \ suit of armor."
    "name": "False Appearance"
"actions":
  - "desc": "The armor makes two melee attacks or uses Shocking Bolt twice."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) slashing damage plus 3 (d6) lightning damage."
    "name": "Greatsword"
  - "desc": "Ranged Spell Attack: +4 to hit (with advantage on the attack roll if\
      \ the target is wearing armor made of metal), range 60 ft., one target. Hit:\
      \ 10 (3d6) lightning damage."
    "name": "Shocking Bolt"
"source":
  - "CoS"
"image": "4. World Almanac/NPCs/token/strahds-animated-armor-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
