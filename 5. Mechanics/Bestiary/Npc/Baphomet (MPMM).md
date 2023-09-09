---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
aliases: ["Baphomet"]
---
# Baphomet
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

Baphomet's lair is his palace, the Lyktion, which is on the layer of the Abyss called the Endless Maze. Nestled within the twisting passages of the planewide labyrinth, the Lyktion is immaculately maintained and surrounded by a moat constructed in the fashion of a three-dimensional maze. The palace is a towering structure whose interior is as labyrinthine as the plane on which it stands; it is populated by [[5. Mechanics/Bestiary/Monstrosity/Minotaur.md|minotaurs]], [[5. Mechanics/Bestiary/Fiend/Goristro.md|goristros]], and [[5. Mechanics/Bestiary/Fiend/Quasit.md|quasits]].

```statblock
"name": "Baphomet"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "22"
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
  "Dexterity": "+9"
  "Wisdom": "+14"
  "Constitution": "+15"
"skillsaves":
  "Intimidation": "+17"
  "Perception": "+14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- "desc": "Baphomet casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 18):\n\n1/day:\
    \ [[5. Mechanics/Spells/Teleport.md|teleport]]\n\n3/day each: [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
    \ [[5. Mechanics/Spells/Dominate Beast.md|dominate beast]], [[5. Mechanics/Spells/Maze.md|maze]],\
    \ [[5. Mechanics/Spells/Wall Of Stone.md|wall of stone]]"
  "name": "spells"
- "desc": "Baphomet can perfectly recall any path he has traveled, and he is immune\
    \ to the [[5. Mechanics/Spells/Maze.md|maze]] spell."
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
- "desc": "Melee Weapon Attack: dice: d20+17 (+17 to hit), reach 10 ft., one target.\
    \ Hit: 19 (dice: 2d8 + 10|avg (2d8 + 10)) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+17 (+17 to hit), reach 10 ft., one target.\
    \ Hit: 17 (dice: 2d6 + 10|avg (2d6 + 10)) piercing damage. If Baphomet moved\
    \ at least 10 feet straight toward the target immediately before the hit, the\
    \ target takes an extra 16 (dice: 3d10|avg (3d10)) piercing damage. If the\
    \ target is a creature, it must succeed on a DC 25 Strength saving throw or be\
    \ pushed up to 10 feet away and knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Gore"
- "desc": "Melee Weapon Attack: dice: d20+17 (+17 to hit), reach 15 ft., one target.\
    \ Hit: 21 (dice: 2d10 + 10|avg (2d10 + 10)) force damage."
  "name": "Heartcleaver"
- "desc": "Each creature of Baphomet's choice within 120 feet of him and aware of\
    \ him must succeed on a DC 18 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. These later saves have disadvantage if Baphomet is within\
    \ line of sight of the creature.\n\nIf a creature succeeds on any of these saves\
    \ or the effect ends on it, the creature is immune to Baphomet's Frightful Presence\
    \ for the next 24 hours."
  "name": "Frightful Presence"
"legendary_actions":
- "desc": "Baphomet makes one Heartcleaver attack."
  "name": "Heartcleaver Attack"
- "desc": "Baphomet moves up to his speed without provoking opportunity attacks, then\
    \ makes a Gore attack."
  "name": "Charge (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/npc/token/baphomet.png"
```
^statblock