---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/12
  - monster/size/medium
  - monster/type/undead
statblock: inline
aliases:
  - Lady Czorgan
---
# [[5. Mechanics\Bestiary\Undead\Lady Czorgan.md|Lady Czorgan]]
*Source: Strongholds and Followers p. 258*  

```statblock
"name": "Lady Czorgan"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "16"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "5"
  "Wisdom": !!int "6"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, Common"
"cr": "12"
"traits":
- "desc": "Lady Czorgan is a 13th-level spellcaster. Her spellcasting ability is Charisma\
    \ (spell save DC 15, dice: d20+8 (+8 to hit) with spell attacks). She has the\
    \ following spells prepared:\n\n1st level (4 slots): [[5. Mechanics/Spells/Command.md|command]],\
    \ [[5. Mechanics/Spells/Hunters Mark.md|hunter's mark]], [[5. Mechanics/Spells/Inflict Wounds.md|inflict wounds]]\n\
    \n2nd level (3 slots): [[5. Mechanics/Spells/Hold Person.md|hold person]], [magic\
    \ weapon](compendium/spells/magic-weapon.md)\n\n3rd level (3 slots): [dispel\
    \ magic](compendium/spells/dispel-magic.md), [[5. Mechanics/Spells/Vampiric Touch.md|vampiric touch]]\n\
    \n4th level (1 slots): [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Blight.md|blight]]"
  "name": "spells"
- "desc": "Lady Czorgan has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Unless Lady Czorgan is [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]],\
    \ she and undead creatures of her choice within 30 feet have advantage on saving\
    \ throws against features that turn undead."
  "name": "Unholy Aura"
"actions":
- "desc": "Lady Czorgan makes two longsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage, or dice: 1d10 + 4|avg\
    \ (1d10 + 4) slashing damage if used with two hands, plus dice: 3d8|avg (3d8)\
    \ necrotic damage."
  "name": "Longsword"
- "desc": "Lady Czorgan points at a location she can see and corruption explodes from\
    \ the ground within 60 feet of her. Each creature in a 20-foot-radius sphere centered\
    \ on that point must make a DC 15 Constitution saving throw. The corrupted ground\
    \ spreads around corners. A creature takes dice: 15d6|avg (15d6) necrotic\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Decaying Ground (1/Day)"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
