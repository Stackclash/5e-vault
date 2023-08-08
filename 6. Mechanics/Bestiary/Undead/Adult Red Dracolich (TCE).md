---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/environment/hill
- monster/environment/mountain
- monster/size/huge
- monster/type/undead
statblock: inline
---
# Adult Red Dracolich
*Source: Tasha's Cauldron of Everything p. 137, Derived from Adult Red Dragon (MM)*  

```statblock
"name": "Adult Red Dracolich"
"size": "Huge"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "256"
"hit_dice": "19d12 + 133"
"stats":
- !!int "27"
- !!int "10"
- !!int "25"
- !!int "16"
- !!int "13"
- !!int "21"
"speed": "walk 40 ft., climb 40 ft., fly 80 ft."
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "13"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "13"
"damage_resistances": "necrotic"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, frightened, paralyzed, poisoned, exhaustion"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Common, Draconic"
"cr": "17"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the dracolich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dracolich has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dracolich can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+14 (+14 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d10 + 8|avg (2d10 + 8) piercing damage plus dice: 2d6|avg\
    \ (2d6) fire damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+14 (+14 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 8|avg (2d6 + 8) slashing damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+14 (+14 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d8 + 8|avg (2d8 + 8) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each creature of the dracolich's choice that is within 120 feet of the\
    \ dracolich and aware of it must succeed on a DC 19 Wisdom saving throw or become\
    \ [[6. Mechanics/Rules/Conditions.md#frightened|frightened]] for 1 minute. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. If a creature's saving throw is successful or the effect\
    \ ends for it, the creature is immune to the dracolich's Frightful Presence for\
    \ the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dracolich exhales fire in a 60-foot cone. Each creature in that area\
    \ must make a DC 21 Dexterity saving throw, taking 63 (dice: 18d6|avg (18d6))\
    \ fire damage on a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dracolich makes a Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ check."
  "name": "Detect"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dracolich makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dracolich beats its wings. Each creature within 10 feet of the dracolich\
    \ must succeed on a DC 22 Dexterity saving throw or take dice: 2d6 + 8|avg (2d6\
    \ + 8) bludgeoning damage and be knocked [[6. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ The dracolich can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "TCE"
"image": "6. Mechanics/Bestiary/Undead/token/adult-red-dracolich.png"
```
^statblock

## Environment

mountain, hill