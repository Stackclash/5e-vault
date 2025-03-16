---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 9
environments: null
size: Huge
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/9
  - monster/size/huge
  - monster/type/monstrosity
aliases:
  - Giant Felsic Crab
---
# [[5. Mechanics/Bestiary/Monstrosity/Giant Felsic Crab (GRIFFONSSADDLEBAG3).md|Giant Felsic Crab]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Unlike many of the deep-dwelling creatures of the world that rely on poison, the giant felsic crab utilizes intensely caustic acid to ensnare its prey. This is particularly effective against dwarves and other underground creatures that are often naturally resistant to such poisons. Crafty ambush predators, the felsic crab preys primarily on miners foolhardy enough to venture too far on their own. Stories about miners' narrow escapes from these monstrous crustaceans are pervasive in Ilridun's oral culture, but the rarity of felsic crab carapaces would seem to indicate that most, if not all, such tales are fabricated.

```statblock
"name": "Giant Felsic Crab (GRIFFONSSADDLEBAG3)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "178"
"hit_dice": "17d12 + 68"
"stats":
- !!int "20"
- !!int "12"
- !!int "18"
- !!int "2"
- !!int "13"
- !!int "3"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "piercing, slashing from nonmagical attacks that aren't adamantine"
"damage_immunities": "acid"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 15"
"languages": ""
"cr": "9"
"traits":
- "desc": "In the first round of a combat, the crab has advantage on attack rolls\
    \ against any creature it [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]]."
  "name": "Ambusher"
- "desc": "The crab can breathe air and water."
  "name": "Amphibious"
- "desc": "The crab can climb difficult surfaces made of rock or stone, including\
    \ upside down on ceilings, without needing to make an ability check."
  "name": "Rock-Solid Grip"
- "desc": "The crab has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks made to hide in rocky terrain."
  "name": "Stone Camouflage"
"actions":
- "desc": "The crab makes two attacks with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 20 (3d10\
    \ + 4) bludgeoning damage. If the target is Large or smaller, it is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 15) and [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
    \ until the grapple ends. The crab has two claws, each of which can grapple one\
    \ target."
  "name": "Claw"
- "desc": "The crab exhales a pungent, caustic spray in a 30-foot cone. The spray\
    \ destroys any Tiny nonmagical object in the area that isn't being worn or carried.\
    \ Each creature in the area must make a DC 16 Dexterity saving throw. On a failed\
    \ save, a creature takes 36 (8d8) acid damage, and any nonmagical armor or shield\
    \ that the creature is wearing or carrying takes a permanent and cumulative -1\
    \ penalty to the AC it offers. Armor reduced to an AC of 10 or a shield that drops\
    \ to a +0 bonus is destroyed. On a successful save, the creature takes half as\
    \ much damage, and any armor or shield it is wearing or carrying is unaffected."
  "name": "Acrid Breath (Recharge 6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
