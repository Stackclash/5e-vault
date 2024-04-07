---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: 4. World Almanac/NPCs/img/orcus.webp
relationships: []
tags: null
aliases:
  - Orcus
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 204, Mordenkainen's Tome of Foes p. 153*

Orcus is the Demon Prince of Undeath, also known as the Blood Lord. While he takes pleasure in the sufferings of the living, he far prefers the company and service of Undead. His desire is to see all life quenched and the multiverse transformed into a vast necropolis populated solely by Undead creatures under his command.

Orcus rewards those who spread death in his name by granting them a small portion of his power. The least of these become [[5. Mechanics/Bestiary/Undead/Ghoul.md|ghouls]] and [[5. Mechanics/Bestiary/Undead/Zombie.md|zombies]] that serve in his legions, while his favored servants are the cultists and necromancers who murder the living and then manipulate the dead, emulating their dread master.

Orcus is a bestial creature of corruption with a diseased, decaying look. He has the lower torso of a goat and a humanlike upper body with a belly swollen with rot. Great bat wings sprout from his shoulders, and his head is like the skull of a goat, the flesh nearly rotted from it. In one hand, he wields the legendary [[5. Mechanics/Items/Wand Of Orcus.md|Wand of Orcus]], which is described in the *Dungeon Master's Guide*.

## Cultists of Orcus

> [!note]
> See the Cult of Orcus entry.

## Orcus's Lair

Orcus makes his lair in the fortress city of Naratyr, which is on Thanatos, the layer of the Abyss that he rules. Surrounded by a moat fed by the River Styx, Naratyr is an eerily quiet and cold city, its streets empty for hours at a time. The central castle of bone has interior walls of flesh and carpets made of woven hair. The city contains wandering Undead, many of which are engaged in continuous battles with one another.

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
"name": "Orcus"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor; 20 from with the [[5. Mechanics/Items/Wand Of Orcus.md|Wand of Orcus]]"
"hp": !!int "405"
"hit_dice": "30d12 + 210"
"stats":
- !!int "27"
- !!int "14"
- !!int "25"
- !!int "20"
- !!int "20"
- !!int "25"
"speed": "40 ft., fly 40 ft."
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "13"
  "Constitution": !!int "15"
"skillsaves":
  "Perception": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
- "desc": "Orcus casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt will:\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]]\n\n1/day: [[5. Mechanics/Spells/Time Stop.md|time stop]]\n\
    \n3/day: [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]]"
  "name": "spells"
- "desc": "While holding the [[5. Mechanics/Items/Wand Of Orcus.md|Wand of Orcus]], Orcus\
    \ casts one of the following spells (spell save DC 18), some of which require\
    \ charges; the wand has 7 charges to fuel these spells, and it regains dice:\
    \ 1d4 + 3|avg|noform (1d4 + 3) charges daily at dawn:\n\nAt will: [animate\
    \ dead](compendium/spells/animate-dead.md) (as an action), [[5. Mechanics/Spells/Blight.md|blight]],\
    \ [[5. Mechanics/Spells/Speak With Dead.md|speak with dead]]"
  "name": "spells"
- "desc": "If Orcus fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Orcus has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "Orcus can cast [[5. Mechanics/Spells/Animate Dead.md|animate dead]] (at will)\
    \ and [[5. Mechanics/Spells/Create Undead.md|create undead]] (3/day). He chooses\
    \ the level at which the spells are cast, and the creatures created by them remain\
    \ under his control indefinitely. Additionally, he can cast [[5. Mechanics/Spells/Create Undead.md|create undead]]\
    \ even when it isn't night."
  "name": "Master of Undeath"
- "desc": "Orcus wields the [[5. Mechanics/Items/Wand Of Orcus.md|Wand of Orcus]]."
  "name": "Special Equipment"
"actions":
- "desc": "Orcus makes three Wand of Orcus, Tail, or Necrotic Bolt attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+19 (+19) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d8 + 11|text(24) (3d8 + 11) bludgeoning damage plus\
    \ dice:2d12|text(13) (2d12) necrotic damage."
  "name": "Wand of Orcus"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d8 + 8|text(21) (3d8 + 8) force damage plus dice:2d8|text(9)\
    \ (2d8) poison damage."
  "name": "Tail"
- "desc": "Ranged Spell Attack: dice: d20+15 (+15) to hit, range 120 ft., one\
    \ target. Hit: dice:5d8 + 7|text(29) (5d8 + 7) necrotic damage."
  "name": "Necrotic Bolt"
- "desc": "While holding the [[5. Mechanics/Items/Wand Of Orcus.md|Wand of Orcus]], Orcus\
    \ conjures Undead creatures whose combined average hit points don't exceed 500.\
    \ These creatures magically rise up from the ground or otherwise form in unoccupied\
    \ spaces within 300 feet of Orcus and obey his commands until they are destroyed\
    \ or until he dismisses them as an action."
  "name": "Conjure Undead (1/Day)"
"legendary_actions":
- "desc": "Orcus can take 3 legendary actions, choosing from the options below. Only\
    \ one legendary action option can be used at a time and only at the end of another\
    \ creature's turn. Orcus regains spent legendary actions at the start of his turn."
  "name": ""
- "desc": "Orcus makes one Tail or Necrotic Bolt attack."
  "name": "Attack"
- "desc": "Orcus chooses a point on the ground that he can see within 100 feet of\
    \ him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot\
    \ radius rises from that point and lasts until the end of Orcus's next turn. Creatures\
    \ in that area have vulnerability to necrotic damage."
  "name": "Creeping Death (Costs 2 Actions)"
"lair_actions":
- "desc": "On Initiative count 20 (losing initiative ties), Orcus can take a lair\
    \ action to cause one of the following effects; he can't use the same effect two\
    \ rounds in a row:"
  "name": ""
- "desc": "- Deadly Utterance. Orcus's voice booms throughout the lair. His utterance\
    \ causes one creature of his choice to be subjected to [[5. Mechanics/Spells/Power Word Kill.md|power word kill]].\
    \ Orcus needn't see the creature, but he must be aware that the individual is\
    \ in the lair.  \n- Grasp of the Dead. Orcus causes skeletal arms to rise\
    \ from an area on the ground in a 20-foot square that he can see. They last until\
    \ the next initiative count 20. Each creature in that area when the arms appear\
    \ must succeed on a DC 23 Strength saving throw or be [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ until the arms disappear or until Orcus releases them (no action required).\
    \  \n- Undead Servants. Orcus causes up to six corpses within the lair to\
    \ rise as [[5. Mechanics/Bestiary/Undead/Skeleton.md|skeletons]], [[5. Mechanics/Bestiary/Undead/Zombie.md|zombies]],\
    \ or [[5. Mechanics/Bestiary/Undead/Ghoul.md|ghouls]]. These undead obey his telepathic\
    \ commands, which can reach anywhere in the lair.  "
  "name": ""
"regional_effects":
- "desc": "The region containing Orcus's lair is warped by his magic, creating one\
    \ or more of the following effects:"
  "name": ""
- "desc": "- Charnel Realm. The air is filled with the stench of rotting flesh,\
    \ and buzzing flies grow thick within the region.  \n- Undead Beasts. Dead\
    \ Beasts periodically animate as Undead mockeries of their former selves. Skeletal\
    \ and zombie versions of local wildlife are commonly seen in the area.  "
  "name": ""
- "desc": "If Orcus dies, these effects fade over the course of dice: 1d10|avg|noform\
    \ (1d10) days."
  "name": ""
"source":
- "MPMM"
- "MTF"
"image": "4. World Almanac/NPCs/token/orcus-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
