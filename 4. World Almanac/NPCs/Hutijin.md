---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: 4. World Almanac/NPCs/img/hutijin.webp
relationships: []
tags: null
aliases:
  - Hutijin
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 157, Mordenkainen's Tome of Foes p. 175*

Politics in the Nine Hells are anything but predictable. Alliances form all the time, but most wind up unraveling due to treachery. Nevertheless, for all their backbiting and betrayal, devils do occasionally display loyalty, offering unwavering service to their masters. One such example is Hutijin, a duke of Cania and loyal servant of Mephistopheles.

Across the Hells, Hutijin's name fills lesser devils with fear and loathing, for this duke commands two companies of [[5. Mechanics/Bestiary/Fiend/Pit Fiend.md|pit fiends]]. With such soldiers under his command, Hutijin can easily crush any rival who gets in his way while also defending Mephistopheles against armies seeking to contest his dominion. Hutijin has amassed enough power to challenge the lord of Cania, but he has never wavered in his support for his master—suggesting, perhaps, that Mephistopheles has some hold over him.

Outside the Nine Hells, Hutijin is a relatively obscure figure, known only to the most learned infernal scholars. He has no cults of his own, and his servants are few in number. The reason is simple: Hutijin hates mortals. When summoned from the Hells, he repays the instigator with a long and agonizing death.

Mephistopheles forbids Hutijin from making too many forays into the Material Plane, since the duke's absence leaves him vulnerable to his rivals. Other archdevils know how much Hutijin despises mortals and have secretly disseminated the means to call him from the Nine Hells in the hope of distracting the archdevil long enough for them to assail Mephistopheles. Hutijin sends devils into the Material Plane to eradicate mention of his name and destroy those who have learned of him, but the summonings still occur. When called from his post, he negotiates as quickly as he can, usually closing a deal with little cost to the summoner. However, once the deal has been fulfilled, Hutijin repays the interruption with death.

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
"name": "Hutijin"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d10 + 112"
"stats":
- !!int "27"
- !!int "15"
- !!int "25"
- !!int "23"
- !!int "19"
- !!int "25"
"speed": "30 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "14"
"skillsaves":
  "Intimidation": !!int "14"
  "Perception": !!int "11"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
- "desc": "Hutijin casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt will:\
    \ [[5. Mechanics/Spells/Alter Self.md|alter self]] (can become Medium when changing\
    \ his appearance), [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Hold Monster.md|hold monster]],\
    \ [[5. Mechanics/Spells/Invisibility.md|invisibility]] (self only), [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]],\
    \ [[5. Mechanics/Spells/Suggestion.md|suggestion]], [[5. Mechanics/Spells/Wall Of Fire.md|wall of fire]]\n\
    \n3/day: [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]]"
  "name": "Spellcasting"
- "desc": "Each creature within 30 feet of Hutijin that isn't a devil makes saving\
    \ throws with disadvantage."
  "name": "Infernal Despair"
- "desc": "If Hutijin fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Hutijin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Hutijin regains 20 hit points at the start of his turn. If he takes radiant\
    \ damage, this trait doesn't function at the start of his next turn. Hutijin dies\
    \ only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Hutijin makes one Bite attack, one Claw attack, one Mace attack, and one\
    \ Tail attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 15 (2d6\
    \ + 8) fire damage. The target must succeed on a DC 22 Constitution saving throw\
    \ or become [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]. While [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ in this way, the target can't regain hit points, and it takes 10 (3d6) poison\
    \ damage at the start of each of its turns. The [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 17\
    \ (2d8 + 8) cold damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 15 (2d6\
    \ + 8) force damage."
  "name": "Mace"
- "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 19\
    \ (2d10 + 8) thunder damage."
  "name": "Tail"
- "desc": "Hutijin teleports, along with any equipment he is wearing and carrying,\
    \ up to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"reactions":
- "desc": "In response to taking damage, Hutijin utters a dreadful word of power.\
    \ Each creature within 30 feet of him that isn't a devil must succeed on a DC\
    \ 22 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ of him for 1 minute. A creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success. A creature that saves\
    \ against this effect is immune to his Fearful Voice for 24 hours."
  "name": "Fearful Voice (Recharge 5-6)"
"legendary_actions":
- "desc": "Hutijin makes one Claw, Mace, or Tail attack."
  "name": "Attack"
- "desc": "Hutijin uses Teleport."
  "name": "Teleport"
- "desc": "Hutijin releases lightning in a 30-foot radius, blocked only by total cover.\
    \ All other creatures in that area must each make a DC 22 Dexterity saving throw,\
    \ taking 18 (4d8) lightning damage on a failed save, or half as much damage on\
    \ a successful one."
  "name": "Lightning Storm (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "4. World Almanac/NPCs/token/hutijin-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
