---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
image: 4. World Almanac/NPCs/img/bonebreaker-dorokor.jpg
relationships: []
tags: 
aliases: [Bonebreaker Dorokor]
pronounced: 
race: 
gender: 
age: 
alignment: Lawful Evil
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
> **Current Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |

# **`=this.file.name`**
Bonebreaker Dorokor is the leader of the White Tusk orc clan, and complements her natural orcish strength with shrewd cunning. She is described in more detail in Major NPCs (page 101).

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
    str: add
  - type: input
    str: relationship
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
    str: remove
  - type: input
    str: relationship
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Bonebreaker Dorokor"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"stats":
- !!int "19"
- !!int "15"
- !!int "18"
- !!int "12"
- !!int "17"
- !!int "17"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
  "Strength": !!int "7"
"skillsaves":
  "Intimidation": !!int "6"
  "Athletics": !!int "7"
  "Persuasion": !!int "6"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Orc"
"cr": "6"
"traits":
- "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ it can see."
  "name": "Aggressive"
- "desc": "Bonebreaker Dorokor wields the magical greataxe [[5. Mechanics/Items/Wound.md|Wound]]\
    \ (page 144)."
  "name": "Wielder of Wound"
"actions":
- "desc": "Bonebreaker Dorokor makes three weapon attacks, or she makes two attacks\
    \ and issues a War Cry if it is available."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d12 + 5|avg (1d12 + 5) slashing damage plus dice: 2d6|avg\
    \ (2d6) necrotic damage. The target's maximum hit points are decreased in equal\
    \ amount to the necrotic damage dealt. The target's hit point maximum does not\
    \ return to normal until it finishes a long rest or its grievous wounds are soothed\
    \ by a [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]] spell."
  "name": "Wound"
- "desc": "Ranged Weapon Attack: dice: d20+5 (+5 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "Longbow"
- "desc": "Dorokor screams an orcish war phrase, spurring her warriors on toward victory.\
    \ Choose one of the following effects:\n\n- Rally. All of Dorokor's minions\
    \ within 30 feet that can hear her gain dice: 4d10|avg (4d10) temporary hit\
    \ points.  \n- Focus. All of Dorokor's minions within 30 feet that can hear\
    \ her will have advantage on the next attack roll they make before the end of\
    \ their next turn.  \n- Charge. All of Dorokor's minions within 30 feet that\
    \ can hear her can move up to their speed as a reaction.  "
  "name": "War Cry (Recharge 4-6)"
"reactions":
- "desc": "As a reaction, when a minion dies, issue a command to your other minions.\
    \ Those who can hear you gain a reaction they can use to immediately take another\
    \ movement."
  "name": "Villain Ability: Warlord"
"source":
- "SaF"
"image": "4. World Almanac/NPCs/token/bonebreaker-dorokor-saf.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes