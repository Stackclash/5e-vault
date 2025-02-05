---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/mpmm
- monster/cr/23
- monster/size/huge
- monster/type/fiend/demon
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/baphomet.webp
relationships: []
aliases: [Baphomet]
pronounced: 
race: 
gender: 
age: 
alignment: Chaotic Evil
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 58, Mordenkainen's Tome of Foes p. 143*

Civilization is weakness and brutality is strength in the credo of Baphomet, the Horned King and the Prince of Beasts. He is worshiped by those who want to break the confines of civility and unleash their bestial natures, for Baphomet envisions a world without restraint, where creatures live out their most bloodthirsty desires.

Cults devoted to Baphomet use mazes and complex knots as their emblems. They create secret places to indulge themselves, including labyrinths of the sort their master favors. Bloodstained crowns and weapons of iron and brass decorate their profane altars.

Over time, a mpmm becomes tainted by his influence, gaining bloodshot eyes and coarse, thickening hair. Small horns eventually sprout from the cultist's forehead. In time, a devoted cultist might transform entirely into a minotaur, which is considered the greatest gift of the Prince of Beasts.

Baphomet appears as a fearsome, 20-foot-tall minotaur with six iron horns. A fiendish light burns in his red eyes. Although he is filled with bestial blood lust, there lies within him a cruel and cunning intellect devoted to subverting all civilization.

Baphomet wields a great glaive called Heartcleaver. He also charges his enemies and gores them with his horns, trampling his foes into the earth and rending them with his teeth like a beast.

## Cultists of Baphomet

> [!note]
> See the Cult of Baphomet entry.

## Baphomet's Lair

Baphomet's lair is his palace, the Lyktion, which is on the layer of the Abyss called the Endless Maze. Nestled within the twisting passages of the planewide labyrinth, the Lyktion is immaculately maintained and surrounded by a moat constructed in the fashion of a three-dimensional maze. The palace is a towering structure whose interior is as labyrinthine as the plane on which it stands; it is populated by [minotaurs](compendium/bestiary/monstrosity/minotaur.md), [goristros](compendium/bestiary/fiend/goristro.md), and [quasits](compendium/bestiary/fiend/quasit.md).

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
"name": "Baphomet (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "319"
"hit_dice": "22d12 + 176"
"stats":
- !!int "30"
- !!int "14"
- !!int "26"
- !!int "18"
- !!int "24"
- !!int "16"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "14"
  "Constitution": !!int "15"
"skillsaves":
  "Intimidation": !!int "17"
  "Perception": !!int "14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- "desc": "Baphomet casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 18):\n\n1/day:\
    \ [teleport](compendium/spells/teleport.md)\n\n3/day each: [dispel magic](compendium/spells/dispel-magic.md),\
    \ [dominate beast](compendium/spells/dominate-beast.md), [maze](compendium/spells/maze.md),\
    \ [wall of stone](compendium/spells/wall-of-stone.md)"
  "name": "Spellcasting"
- "desc": "Baphomet can perfectly recall any path he has traveled, and he is immune\
    \ to the [maze](compendium/spells/maze.md) spell."
  "name": "Labyrinthine Recall"
- "desc": "If Baphomet fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Baphomet has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Baphomet makes one Bite attack, one Gore attack, and one Heartcleaver attack.\
    \ He also uses Frightful Presence."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 19\
    \ (2d8 + 10) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17\
    \ (2d6 + 10) piercing damage. If Baphomet moved at least 10 feet straight toward\
    \ the target immediately before the hit, the target takes an extra 16 (3d10) piercing\
    \ damage. If the target is a creature, it must succeed on a DC 25 Strength saving\
    \ throw or be pushed up to 10 feet away and knocked [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Gore"
- "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21\
    \ (2d10 + 10) force damage."
  "name": "Heartcleaver"
- "desc": "Each creature of Baphomet's choice within 120 feet of him and aware of\
    \ him must succeed on a DC 18 Wisdom saving throw or become [frightened](/compendium/rules/conditions.md#Frightened)\
    \ for 1 minute. A [frightened](/compendium/rules/conditions.md#Frightened) creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. These later saves have disadvantage if Baphomet is within\
    \ line of sight of the creature.\n\nIf a creature succeeds on any of these saves\
    \ or the effect ends on it, the creature is immune to Baphomet's Frightful Presence\
    \ for the next 24 hours."
  "name": "Frightful Presence"
"legendary_actions":
- "desc": "Baphomet makes one Heartcleaver attack."
  "name": "Heartcleaver Attack"
- "desc": "Baphomet moves up to his speed without provoking [opportunity attacks](/compendium/rules/actions.md#Opportunity%20Attack),\
    \ then makes a Gore attack."
  "name": "Charge (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), Baphomet can take one\
    \ of the following lair actions; he can't take the same lair action two rounds\
    \ in a row:"
  "name": ""
- "desc": "- Illusory Room. Baphomet casts mirage arcane, affecting a room within\
    \ the lair that is no larger in any dimension than 100 feet. The effect ends on\
    \ the next initiative count 20. Charisma is Baphomet's spellcasting ability for\
    \ this spell.  \n- Reverse Gravity. Baphomet chooses a room within the lair\
    \ that is no larger in any dimension than 100 feet. Until the next initiative\
    \ count 20, gravity is reversed within that room. Any creatures or objects in\
    \ the room when this happens fall in the direction of the new pull of gravity,\
    \ unless they have some means of remaining aloft. Baphomet can ignore the gravity\
    \ reversal if he's in the room, although he likes to use this action to land on\
    \ a ceiling to attack targets flying near it.  \n- Seal the Way. Baphomet\
    \ seals one doorway or other entryway within the lair. The opening must be unoccupied.\
    \ It is filled with solid stone for 1 minute or until Baphomet takes this lair\
    \ action again.  "
  "name": ""
"regional_effects":
- "desc": "The region containing Baphomet's lair is warped by his magic, creating\
    \ one or more of the following effects:"
  "name": ""
- "desc": "- Beguiling Realm. Within 6 miles of the lair, all Charisma ([Persuasion](/compendium/rules/skills.md#Persuasion))\
    \ and Charisma ([Performance](/compendium/rules/skills.md#Performance)) checks\
    \ have disadvantage, and all Charisma ([Deception](/compendium/rules/skills.md#Deception))\
    \ and Charisma ([Intimidation](/compendium/rules/skills.md#Intimidation)) checks\
    \ have advantage.  \n- Hedge Mazes. Plant life within 1 mile of the lair grows\
    \ thick and forms walls of trees, hedges, and other flora in the form of small\
    \ mazes.  \n- Panicked Beasts. Beasts within 1 mile of the lair become [frightened](/compendium/rules/conditions.md#Frightened)\
    \ and disoriented, as though constantly under threat of being hunted, and might\
    \ lash out or panic even when no visible threat is nearby.  "
  "name": ""
- "desc": "If Baphomet dies, these effects fade over the course of 1d10 days."
  "name": ""
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/npc/token/baphomet-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes