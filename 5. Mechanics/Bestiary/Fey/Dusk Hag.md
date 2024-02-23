---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/erlw
  - monster/cr/6
  - monster/size/medium
  - monster/type/fey
statblock: inline
aliases:
  - Dusk Hag
---
# [[5. Mechanics\Bestiary\Fey\Dusk Hag.md|Dusk Hag]]
*Source: Eberron: Rising from the Last War p. 292*  

Dusk hags resemble gnarled crones with shriveled orange skin, tangled gray hair, and eyes that burn like hot coals. They see visions of the future in their dreams, and their dark magic allows them to influence the dreams of others, sending messages or inflicting nightmares with a touch. Tales talk of ambitious wizards, frantic monarchs, and desperate heroes undertaking quests or making bargains with a dusk hag in exchange for its prophecies and visions of the future. But the information gained from a dusk hag often has a way of causing more pain than joy. Like all hags, dusk hags enjoy causing strife to those who bargain with them, and find ways to twist and turn promises to their own advantage. The Dusk Hag Prophecies table provides examples of the sort of dreams dusk hags might share with unsuspecting sleepers.

**Dusk Hag Prophecies**

`dice: [[Dusk Hag.md#^dusk-hag-prophecies]]`

| dice: d10 | Prophecy |
|-----------|----------|
| 1 | "A red hat approaches with ill intent. Be wary." |
| 2 | "A ship comes on a sea of bones, but treasure waits behind a silver skull." |
| 3 | "Three days, three deaths, three eyes, three breaths." |
| 4 | "Doom falls on the peacock and the sparrow alike. Best be a raven." |
| 5 | "A white hand on a black field holds the golden key." |
| 6 | "Beware the black horse." |
| 7 | "The fish is your friend." |
| 8 | "The stairs downward lead to that which you seek." |
| 9 | "Look for two crossed swords. There your goal lies." |
| 10 | "If you see two crows, turn back. Beyond is death." |
^dusk-hag-prophecies

```statblock
"name": "Dusk Hag"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "82"
"hit_dice": "15d8 + 15"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "17"
- !!int "16"
- !!int "18"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "6"
"skillsaves":
  "Deception": !!int "7"
  "Insight": !!int "6"
  "Perception": !!int "6"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "blindsight 60 ft., passive Perception 16"
"languages": "Common, Giant, Infernal"
"cr": "6"
"traits":
- "desc": "The hag's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Disguise Self.md|disguise self]]\n\
    \n1/day each: [[5. Mechanics/Spells/Legend Lore.md|legend lore]], [[5. Mechanics/Spells/Scrying.md|scrying]]\n\
    \n3/day each: [[5. Mechanics/Spells/Dream.md|dream]], [[5. Mechanics/Spells/Hypnotic Pattern.md|hypnotic pattern]],\
    \ [[5. Mechanics/Spells/Sleep.md|sleep]] (dice: 9d8|avg (9d8))"
  "name": "innate"
- "desc": "The hag has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The hag makes two Nightmare Touch attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) slashing damage."
  "name": "Claws"
- "desc": "Melee Spell Attack: dice: d20+7 (+7 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 4d6 + 4|avg (4d6 + 4) psychic damage. If the target is [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]],\
    \ it takes an extra dice: 3d6|avg (3d6) psychic damage and is cursed until\
    \ the hag dies or the curse is removed. The cursed creature's hit point maximum\
    \ decreases by dice: 1d10|avg (1d10) whenever it finishes a long rest."
  "name": "Nightmare Touch"
"reactions":
- "desc": "When an [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]] creature\
    \ the hag can see within 30 feet of her regains consciousness, the hag can force\
    \ the creature to make a DC 15 Wisdom saving throw. Unless the save succeeds,\
    \ the creature takes dice: 2d10|avg (2d10) psychic damage, and the hag regains\
    \ hit points equal to the amount of damage taken."
  "name": "Dream Eater"
"source":
- "ERLW"
"image": "5. Mechanics/Bestiary/Fey/token/dusk-hag-erlw.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
