---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/4
- monster/environment/urban
- monster/size/medium
- monster/type/undead/warlock
statblock: inline
aliases: ["Deathlock"]
---
# [[5. Mechanics/Bestiary/Undead/Deathlock (MPMM).md|Deathlock]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 86*  

An overpowering urge to serve consumes the mind of a newly awakened deathlock. Any goals and ambitions it had in life that don't please its patron fall away as its master's desires become the purpose that drives it. The deathlock immediately resumes work on its patron's behalf.

Whatever the goal, it always reflects the patron's interests, ranging from small-scale concerns to matters of cosmic scope. A deathlock in the thrall of a Fiend might work to destroy a specific temple dedicated to a good god, while one that serves a Great Old One might hunt for the materials needed to call forth a horrifying entity into the world. To accomplish a difficult goal, the deathlock might be forced to serve another powerful creature or might need to gather servants of its own.

## Deathlocks

The forging of a pact between a warlock and a patron is no minor occasion—at least not for the warlock. The consequences of breaking that pact can be dire and, in some cases, lethal. A warlock who fails to live up to a bargain with an evil patron runs the risk of rising from the dead as a deathlock, a foul Undead driven to serve its otherworldly patron.

An powerful necromancer might also discover the wicked methods of creating a deathlock and then subjugate it, acting as the deathlock's patron.

```statblock
"name": "Deathlock (MPMM)"
"size": "Medium"
"type": "undead"
"subtype": "warlock"
"alignment": "Typically  Neutral Evil"
"ac": !!int "12"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "11"
- !!int "15"
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Intelligence": !!int "4"
"skillsaves":
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "the languages it knew in life"
"cr": "4"
"traits":
- "desc": "The deathlock casts one of the following spells, using Charisma as the\
    \ spellcasting ability (spell save DC 13):\n\nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Disguise Self.md|disguise self]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]]\n\n1/day each: [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
    \ [[5. Mechanics/Spells/Hunger Of Hadar.md|hunger of Hadar]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
    \ [[5. Mechanics/Spells/Spider Climb.md|spider climb]]"
  "name": "spells"
- "desc": "The deathlock has advantage on saving throws against any effect that turns\
    \ Undead."
  "name": "Turn Resistance"
- "desc": "The deathlock doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The deathlock makes two Deathly Claw or Grave Bolt attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) necrotic damage."
  "name": "Deathly Claw"
- "desc": "Ranged Spell Attack: dice: d20+5 (+5 to hit), range 120 ft., one target.\
    \ Hit: dice: 2d10 + 3|avg (2d10 + 3) necrotic damage."
  "name": "Grave Bolt"
"source":
- "MPMM"
- "MTF"
- "AATM"
- "BMT"
"image": "5. Mechanics/Bestiary/Undead/token/deathlock.png"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```