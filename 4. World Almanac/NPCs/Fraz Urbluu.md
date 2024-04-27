---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: 4. World Almanac/NPCs/img/fraz-urbluu.webp
relationships: []
tags: null
aliases:
  - Fraz-Urb'luu
pronounced: null
race: null
gender: null
age: null
alignment: Chaotic Evil
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 129, Mordenkainen's Tome of Foes p. 146*

Fraz-Urb'luu is the Prince of [[/5. Mechanics/Rules/Skills.md#Deception|Deception]] and Demon Lord of Illusions. He uses every trick, every ounce of demonic cunning, to manipulate his enemies—mortal and Fiend alike—to do his will. Fraz-Urb'luu can create dreamlands and mind-bending fantasies able to deceive the most discerning foes.

Once imprisoned for centuries below Castle Greyhawk on the world of Oerth, Fraz-Urb'luu has slowly rebuilt his power in the Abyss. He seeks the pieces of the legendary [[5. Mechanics/Items/Staff Of Power.md|staff of power]] taken from him by those who imprisoned him and commands his servants to do likewise.

The Prince of [[/5. Mechanics/Rules/Skills.md#Deception|Deception]]'s true form is like that of a great gargoyle, some 12 feet tall, with an extended, muscular neck; a smiling face framed by long, pointed ears and lank, dark hair; and bat-like wings are furled against his powerful shoulders. He can assume other forms, however, from the hideous to the beautiful.

Many of the cultists of Fraz-Urb'luu aren't even aware they serve the Prince of [[/5. Mechanics/Rules/Skills.md#Deception|Deception]], believing their master is a beneficent being and granter of wishes, some lost god or Celestial, or even another Fiend. Fraz-Urb'luu wears all these masks and more. He particularly delights in aiding demon-hunters against his demonic adversaries, driving the hunters to greater and greater atrocities in the name of their cause, only to eventually reveal his true nature and claim their souls as his own.

## Cultists of Fraz-Urb'luu

> [!note]
> See the Cult of Fraz-Urb'luu entry.

## Fraz-Urb'luu's Lair

Fraz-Urb'luu's lair lies within the abyssal realm of Hollow's Heart, a plain of white dust with few structures on it. The lair itself is the city of Zoragmelok, a circular fortress surrounded by adamantine walls topped with razors and hooks. Corkscrew towers loom above twisted domes and vast amphitheaters, forming a surreal and disorienting cityscape.

The challenge rating of Fraz-Urb'luu is 24 (62,000 XP) when he's encountered in his lair.

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
"name": "Fraz Urbluu"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "337"
"hit_dice": "27d10 + 189"
"stats":
- !!int "29"
- !!int "12"
- !!int "25"
- !!int "26"
- !!int "24"
- !!int "26"
"speed": "40 ft., fly 40 ft."
"saves":
  "Dexterity": !!int "8"
  "Wisdom": !!int "14"
  "Intelligence": !!int "15"
  "Constitution": !!int "14"
"skillsaves":
  "Deception": !!int "15"
  "Stealth": !!int "8"
  "Perception": !!int "14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- "desc": "Fraz-Urb'luu casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt will:\
    \ [[5. Mechanics/Spells/Alter Self.md|alter self]] (can become Medium when changing\
    \ his appearance), [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Dispel Magic.md|dispel\
    \ magic]], [[5. Mechanics/Spells/Phantasmal Force.md|phantasmal force]]\n\
    \n1/day each: [[5. Mechanics/Spells/Modify Memory.md|modify memory]], [[5. Mechanics/Spells/Project Image.md|project\
    \ image]]\n\n3/day each: [[5. Mechanics/Spells/Mislead.md|mislead]],\
    \ [[5. Mechanics/Spells/Programmed Illusion.md|programmed illusion]], [[5. Mechanics/Spells/Seeming.md|seeming]]"
  "name": "Spellcasting"
- "desc": "If Fraz-Urb'luu fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Fraz-Urb'luu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Fraz-Urb'luu can't be targeted by divination magic, perceived through magical\
    \ scrying sensors, or detected by abilities that sense demons or Fiends."
  "name": "Undetectable"
"actions":
- "desc": "Fraz-Urb'luu makes one Bite attack and two Fist attacks, and he uses Phantasmal\
    \ Terror."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d6 + 9|text(19) (3d6 + 9) force damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d8 + 9|text(22) (3d8 + 9) force damage."
  "name": "Fist"
- "desc": "Fraz-Urb'luu targets one creature he can see within 120 feet of him. The\
    \ target must succeed on a DC 23 Wisdom saving throw, or it takes dice:3d10|text(16)\
    \ (3d10) psychic damage and is [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ of Fraz-Urb'luu until the end of its next turn."
  "name": "Phantasmal Terror"
"legendary_actions":
- "desc": "Melee Weapon Attack: dice: d20+16 (+16) to hit, reach 15 ft., one\
    \ target. Hit: dice:2d10 + 9|text(20) (2d10 + 9) force damage. If the target\
    \ is a Large or smaller creature, it is also [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 24), and it is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ until the grapple ends. Fraz-Urb'luu can grapple only one creature with his\
    \ tail at a time."
  "name": "Tail"
- "desc": "Fraz-Urb'luu uses Phantasmal Terror."
  "name": "Terror (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), FrazUrb'luu can take one\
    \ of the following lair actions when in his lair; he can't take the same lair\
    \ action two rounds in a row:"
  "name": ""
- "desc": "- Conjure Walls and Doors. Fraz-Urb'luu causes up to five doors within\
    \ the lair to become walls and an equal number of doors to appear on walls where\
    \ there previously were none.  \n- Psychic Anguish. Fraz-Urb'luu creates a\
    \ wave of anguish. Each creature he can see within the lair must succeed on a\
    \ DC 23 Wisdom saving throw or take dice:6d10|text(33) (6d10) psychic damage.\
    \  \n- Simulacrum. Fraz-Urb'luu chooses one Humanoid within the lair and instantly\
    \ creates a simulacrum of that creature (as if created with the [[5. Mechanics/Spells/Simulacrum.md|simulacrum]]\
    \ spell). This simulacrum obeys Fraz-Urb'luu's commands and is destroyed on the\
    \ next initiative count 20.  "
  "name": ""
"regional_effects":
- "desc": "The region containing Fraz-Urb'luu's lair is warped by his magic, creating\
    \ one or more of the following effects:"
  "name": ""
- "desc": "- Beguiling Realm. Within 6 miles of the lair, all Charisma ([[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]])\
    \ and Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]]) checks have disadvantage,\
    \ and all Charisma ([[/5. Mechanics/Rules/Skills.md#Deception|Deception]]) and Charisma\
    \ ([[/5. Mechanics/Rules/Skills.md#Performance|Performance]]) checks have advantage.\
    \  \n- Nostalgic Pangs. Sapient creatures within 1 mile of the lair frequently\
    \ see hallucinations of long-dead friends and comrades that vanish after only\
    \ a brief glimpse.  \n- Twisted Paths. Roads and paths within 6 miles of the\
    \ lair twist and turn back on themselves, making navigation in the area exceedingly\
    \ difficult.  "
  "name": ""
- "desc": "If Fraz-Urb'luu dies, these effects fade over the course of dice: 1d10|avg|noform\
    \ (1d10) days."
  "name": ""
"source":
- "MPMM"
- "MTF"
"image": "4. World Almanac/NPCs/token/fraz-urbluu-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
