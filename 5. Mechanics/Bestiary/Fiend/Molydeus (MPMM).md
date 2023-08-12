---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
statblock: inline
---
# Molydeus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 184, Mordenkainen's Tome of Foes p. 134*  

The fearsome molydeus speaks for the demon lord it serves and enforces its master's will. This demon is 12 feet tall, and its bipedal body has a slavering wolfs head and a fanged serpent's head. Its demon lord can speak and see through the serpent head; this master also uses the molydeus to guard treasures, slay foes, and terrify troops into obedience.

A molydeus's demon lord bestows on it a powerful weapon that dissolves if the molydeus dies. The weapon's form varies depending on the creator, but that doesn't affect the weapon's capabilities.

```statblock
"name": "Molydeus"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "216"
"hit_dice": "16d12 + 112"
"stats":
- !!int "28"
- !!int "22"
- !!int "25"
- !!int "21"
- !!int "24"
- !!int "24"
"speed": "walk 40 ft."
"saves":
  "Charisma": !!int "14"
  "Wisdom": !!int "14"
  "Strength": !!int "16"
  "Constitution": !!int "14"
"skillsaves":
  "Perception": !!int "21"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, deafened, frightened, poisoned, stunned"
"senses": "truesight 120 ft., passive Perception 31"
"languages": "Abyssal, telepathy 120 ft."
"cr": "21"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The molydeus casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt will:\
    \ [[/5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[/5. Mechanics/Spells/Polymorph.md|polymorph]],\
    \ [[/5. Mechanics/Spells/Telekinesis.md|telekinesis]], [[/5. Mechanics/Spells/Teleport.md|teleport]]\n\
    \n3/day: [[/5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the molydeus fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The molydeus has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The molydeus makes one Demonic Weapon attack, one Snakebite attack, and\
    \ one Wolf Bite attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 15 ft., one target.\
    \ Hit: dice: 4d12 + 9|avg (4d12 + 9) force damage. If the target has at least\
    \ one head and the molydeus rolled a 20 on the attack roll, the target is decapitated\
    \ and dies if it can't survive without that head. A target is immune to this effect\
    \ if it takes none of the damage, has legendary actions, or is Huge or larger.\
    \ Such a creature takes an extra 27 (dice: 6d8|avg (6d8)) force damage from\
    \ the hit."
  "name": "Demonic Weapon"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 15 ft., one creature.\
    \ Hit: dice: 2d6 + 9|avg (2d6 + 9) poison damage. The target must succeed\
    \ on a DC 22 Constitution saving throw, or its hit point maximum is reduced by\
    \ an amount equal to the damage taken. This reduction lasts until the target finishes\
    \ a long rest. The target transforms into a [[/5. Mechanics/Bestiary/Fiend/Manes.md|manes]]\
    \ if this reduces its hit point maximum to 0. This transformation can be ended\
    \ only by a [[/5. Mechanics/Spells/Wish.md|wish]] spell."
  "name": "Snakebite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d10 + 9|avg (3d10 + 9) necrotic damage."
  "name": "Wolf Bite"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The molydeus makes one Demonic Weapon or Snakebite attack."
  "name": "Attack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The molydeus moves without provoking opportunity attack||opportunity attacks."
  "name": "Move"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The molydeus uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/fiend/token/molydeus.png"
```
^statblock