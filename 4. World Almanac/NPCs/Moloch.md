---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: 4. World Almanac/NPCs/img/moloch.webp
relationships: []
tags: null
aliases:
  - Moloch
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 183, Mordenkainen's Tome of Foes p. 177*

> [!quote]- A quote from Mordenkainen  
> 
> Moloch obsesses over the power he lost, rather than thinking of the power he could gain elsewhere in the planes. What a pity he so wastes his potential.

Exiled from the Nine Hells, Moloch would do anything to reclaim his position. Long ago, Moloch earned his place among the other archdevils through the glory he won driving demons out of the Nine Hells. Asmodeus rewarded him by elevating him to the rulership of Malbolge.

For eons, Moloch ruled his domain, vying against the other archdevils as he sought still greater power. This animosity worked in Asmodeus's favor, since Asmodeus knew that Moloch's scheming helped keep the other archdevils in check. The arrangement unraveled, however, when Moloch took the night hag named Malagard for his advisor. Her poisonous words gradually convinced him to attempt to topple Asmodeus. The conspiracy nearly succeeded, but was ultimately thwarted. Moloch was stripped of his station and sentenced to death—only the timely use of a planar portal allowed him to escape.

Moloch wasted no time in preparing for his return. He amassed an army of devils and monsters and left them to make final preparations for invading the Nine Hells, while he ventured to the Material Plane in search of an artifact that would ensure his success. But while there, he became trapped, leaving his armies at the mercy of his enemies. They were destroyed in short order.

Moloch was rendered nearly powerless by this failure. He schemes of ways to reclaim his former status, but every time he enters the Nine Hells, he is demoted to an [[5. Mechanics/Bestiary/Fiend/Imp.md|imp]] and can't regain his normal powers until he leaves. Thus, he lives a split existence, sometimes plotting in Malbolge or other layers of the Hells and at other times wandering the planes in search of magical might or secrets that might help him win back his title.

Rumors suggest that he can often be found in Sigil, where he bargains with yugoloths to build yet another army with which he might invade Malbolge and wrest the throne from Glasya. Bereft as he is, he has little to offer in exchange, so he might bargain with mortals to gain their aid in acquiring coin, jewels, and other riches in return for knowledge about the Nine Hells and the other planes.

Most of Moloch's cultists have switched allegiance to one of the other archdevils, but idols constructed to honor him still stand in deep dungeons, their jeweled eyes and the remnants of power they hold drawing monstrous worshipers and unwise adventurers into places where his foul influence remains.

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
"name": "Moloch"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "253"
"hit_dice": "22d10 + 132"
"stats":
- !!int "26"
- !!int "19"
- !!int "22"
- !!int "21"
- !!int "18"
- !!int "23"
"speed": "30 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "11"
  "Wisdom": !!int "11"
  "Constitution": !!int "13"
"skillsaves":
  "Intimidation": !!int "13"
  "Deception": !!int "13"
  "Perception": !!int "11"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- "desc": "Moloch casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt will:\
    \ [[5. Mechanics/Spells/Alter Self.md|alter self]] (can become Medium when changing\
    \ his appearance), [[5. Mechanics/Spells/Confusion.md|confusion]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Fly.md|fly]], [[5. Mechanics/Spells/Major Image.md|major image]],\
    \ [[5. Mechanics/Spells/Stinking Cloud.md|stinking cloud]], [[5. Mechanics/Spells/Suggestion.md|suggestion]],\
    \ [[5. Mechanics/Spells/Wall Of Fire.md|wall of fire]]"
  "name": "Spellcasting"
- "desc": "If Moloch fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Moloch has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Moloch regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Moloch dies\
    \ only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Moloch makes one Bite attack, one Claw attack, and one Many-Tailed Whip\
    \ attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+15 (+15) to hit, reach 5 ft., one\
    \ target. Hit: dice:4d8 + 8|text(26) (4d8 + 8) fire damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+15 (+15) to hit, reach 10 ft., one\
    \ target. Hit: dice:2d8 + 8|text(17) (2d8 + 8) force damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+15 (+15) to hit, reach 30 ft., one\
    \ target. Hit: dice:2d4 + 8|text(13) (2d4 + 8) lightning damage plus dice:2d10|text(11)\
    \ (2d10) thunder damage. If the target is a creature, it must succeed on a DC\
    \ 24 Strength saving throw or be pulled up to 30 feet in a straight line toward\
    \ Moloch."
  "name": "Many-Tailed Whip"
- "desc": "Moloch exhales in a 30-foot cube. Each creature in that area must succeed\
    \ on a DC 21 Wisdom saving throw or take dice:5d10|text(27) (5d10) psychic\
    \ damage, drop whatever it is holding, and become [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ of Moloch for 1 minute. While [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ in this way, a creature must take the [[/5. Mechanics/Rules/Actions.md#Dash|Dash]]\
    \ action and move away from Moloch by the safest available route on each of its\
    \ turns, unless there is nowhere to move, in which case it needn't take the [[/5. Mechanics/Rules/Actions.md#Dash|Dash]]\
    \ action. If the creature ends its turn in a location where it doesn't have line\
    \ of sight to Moloch, the creature can repeat the saving throw, ending the effect\
    \ on itself on a success."
  "name": "Breath of Despair (Recharge 5-6)"
- "desc": "Moloch teleports, along with any equipment he is wearing or carrying, up\
    \ to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"legendary_actions":
- "desc": "Moloch makes one Bite, Claw, or Many-Tailed Whip attack."
  "name": "Attack"
- "desc": "Moloch uses Teleport."
  "name": "Teleport"
- "desc": "Moloch uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "4. World Almanac/NPCs/token/moloch-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
