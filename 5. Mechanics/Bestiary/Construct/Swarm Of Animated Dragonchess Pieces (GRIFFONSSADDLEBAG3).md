---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/6
  - monster/size/medium
  - monster/type/construct
aliases:
  - Swarm of Animated Dragonchess Pieces
---
# [[5. Mechanics/Bestiary/Construct/Swarm Of Animated Dragonchess Pieces (GRIFFONSSADDLEBAG3).md|Swarm of Animated Dragonchess Pieces]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Dragonchess pieces that have been enchanted by beguiling wizards, artificers, and game masters sometimes become fully autonomous, much like their deck of card counterparts. These pieces rattle about and take turns enlarging and attacking, behaving like a legion of humanoids and beasts working together in deadly partnership.

```statblock
"name": "Swarm Of Animated Dragonchess Pieces (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"stats":
- !!int "16"
- !!int "11"
- !!int "13"
- !!int "4"
- !!int "14"
- !!int "1"
"speed": "30 ft., fly 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 12"
"languages": "Common"
"cr": "6"
"traits":
- "desc": "The swarm's innate spellcasting ability is Wisdom (spell save DC 13, +5\
    \ to hit with spell attacks). It can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]],\
    \ [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]]\n\n1/day each: [[5. Mechanics/Spells/Branding Smite.md|branding\
    \ smite]], [[5. Mechanics/Spells/Guiding Bolt.md|guiding bolt]],\
    \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]]"
  "name": "Innate Spellcasting (Cleric/Mage/Paladin)"
- "desc": "The swarm is incapacitated while in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
    \ If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the swarm\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall unconscious for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "As a bonus action, the sylph piece can cast [[5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]]\
    \ on the swarm."
  "name": "Superior Invisibility (Sylph; 1/Day)"
- "desc": "When one of the dragonchess pieces acts, it momentarily increases to Medium\
    \ size in the swarm's space before reverting to its normal Tiny form. If the swarm\
    \ has half of its hit points or fewer, it can't cast spells, and it can't use\
    \ its Fire Breath or Uncanny Dodge options.\n\nThe swarm can occupy another creature's\
    \ space and vice versa, and the swarm can move through any opening large enough\
    \ for a Tiny dragonchess piece. The swarm can't regain hit points or gain temporary\
    \ hit points."
  "name": "Swarm"
"actions":
- "desc": "The swarm makes three attacks: one with its bite, one with its crush, and\
    \ one with its sword; it can cast a spell in place of one attack. If the swarm\
    \ has half of its hit points or fewer, it instead makes two attacks: one with\
    \ its bite and one with its sword."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Bite (Basilisk/Griffon)"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d10\
    \ + 3) bludgeoning damage."
  "name": "Crush (Dwarf/Oliphant)"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) slashing damage."
  "name": "Sword (Hero/Warrior)"
- "desc": "The dragon piece exhales fire in a 15-foot cone. Each creature in that\
    \ area must make a DC 14 Dexterity saving throw, taking 17 (5d6) fire damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Fire Breath (Dragon; Recharge 6)"
- "desc": "The unicorn piece touches another creature with its horn. The target magically\
    \ regains 11 (2d8 + 2) hit points. In addition, the touch removes all diseases\
    \ and neutralizes all poisons afflicting the target."
  "name": "Healing Touch (Unicorn; 2/Day)"
"reactions":
- "desc": "When a creature touches the swarm or hits it with a melee attack while\
    \ within 5 feet of it, the elemental piece deals 5 (1d10) fire damage to that\
    \ creature."
  "name": "Fiery Retaliation (Elemental)"
- "desc": "When the swarm misses with an attack, the king piece orders it to reroll\
    \ the attack roll, and it must use the new roll."
  "name": "Overrule (King; 1/Day)"
- "desc": "The thief piece halves the damage that the swarm takes from an attack that\
    \ hits it. The swarm must be able to see the attacker."
  "name": "Uncanny Dodge (Thief)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
