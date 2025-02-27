---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/4
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Pirate Demolitionist
---
# [[5. Mechanics\Bestiary\Humanoid\Pirate Demolitionist (GRIFFONSSADDLEBAG3).md|Pirate Demolitionist]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Sailors with a penchant for the explosive are demoltionists. On vessels with cannonry, these characters often serve as their munitions experts and fire mitigation experts. On vessels without, demoltionists find satisfying work with makeshift bombs using small explosives and alchemical know-how.

```statblock
"name": "Pirate Demolitionist (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather armor]]"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Investigation": !!int "3"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "Common plus one other language"
"cr": "4"
"traits":
- "desc": "If the demolitionist is subjected to an effect that allows it to make a\
    \ Dexterity saving throw to take only half damage, the demolitionist instead takes\
    \ no damage if it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "The demolitionist has advantage on any ability check it makes to set, disarm,\
    \ or search for traps."
  "name": "Trap Adept"
"actions":
- "desc": "The demolitionist makes two rapier attacks.\n\nIt can use its demolitionist's\
    \ fire or bomb in place of one attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Rapier"
- "desc": "Ranged Weapon Attack: +5 to hit, range 15/30 ft., one target. Hit:\
    \ 5 (2d4) piercing damage. Hit or miss, each creature within 5 feet of the target\
    \ must succeed on a DC 14 Dexterity saving throw or ignite. A flammable object\
    \ in the area that isn't being worn or carried automatically ignites. Until a\
    \ creature uses an action to extinguish a creature or object ignited in this way,\
    \ it takes 5 (1d10) fire damage at the start of each of its turns."
  "name": "Demolitionist's Fire (Recharges After a Short or Long Rest)"
- "desc": "The demolitionist ignites the fuse of one of its handheld bombs, tossing\
    \ the bomb to a point it can see within 30 feet of it. The bomb then detonates,\
    \ exploding in a 10-foot-radius sphere of fire and shrapnel. Each creature in\
    \ the area must make a DC 14 Dexterity saving throw. A target takes 14 (4d6) fire\
    \ damage and 5 (2d4) piercing damage on a failed save, or half as much damage\
    \ on a successful one. The fire spreads around corners and ignites flammable objects\
    \ in the area that aren't being worn or carried."
  "name": "Bomb (3/Day)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
