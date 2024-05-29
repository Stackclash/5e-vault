---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/9
  - monster/size/medium
  - monster/type/fiend/yugoloth
statblock: inline
aliases:
  - Hydroloth
---
# [[5. Mechanics/Bestiary/Fiend/Hydroloth.md|Hydroloth]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 158, Mordenkainen's Tome of Foes p. 249*

Like the thought-stealing waters of the River Styx they inhabit, hydroloths filch the memories of creatures they attack, stealing away thoughts for delivery to whatever master they happen to serve. Hydroloths also savor finding lost things, especially those that have been swallowed up in the deeps.

For amphibious assaults or underwater conflicts, hydroloths have no equal among yugoloths. They sometimes hire themselves out to attack and scuttle ships and raid coastal settlements.

```statblock
"name": "Hydroloth"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "15"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "12"
- !!int "21"
- !!int "16"
- !!int "19"
- !!int "10"
- !!int "14"
"speed": "20 ft., swim 40 ft."
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "4"
"damage_vulnerabilities": "fire"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "9"
"traits":
- "desc": "The hydroloth casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 16):\n\nAt will: [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Invisibility.md|invisibility]]\
    \ (self only)\n\n3/day each: [[5. Mechanics/Spells/Control Water.md|control water]],\
    \ [[5. Mechanics/Spells/Crown Of Madness.md|crown of madness]], [[5. Mechanics/Spells/Fear.md|fear]],\
    \ [[5. Mechanics/Spells/Suggestion.md|suggestion]]"
  "name": "Spellcasting"
- "desc": "The hydroloth can breathe air and water."
  "name": "Amphibious"
- "desc": "The hydroloth has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The hydroloth is immune to the waters of the River Styx, as well as any\
    \ effect that would steal or modify its memories or detect or read its thoughts."
  "name": "Secure Memory"
- "desc": "While submerged in liquid, the hydroloth has advantage on attack rolls."
  "name": "Watery Advantage"
"actions":
- "desc": "The hydroloth makes two Bite or Claw attacks. It can replace one attack\
    \ with a use of Spellcasting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 16 (2d10\
    \ + 5) force damage plus 9 (2d10) psychic damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target.  Hit: 14 (2d8\
    \ + 5) force damage plus 9 (2d10) psychic damage."
  "name": "Claw"
- "desc": "The hydroloth targets one creature it can see within 60 feet of it. The\
    \ target takes 14 (4d6) psychic damage, and it must make a DC 16 Intelligence\
    \ saving throw. On a successful save, the target becomes immune to this hydroloth's\
    \ Steal Memory for 24 hours. On a failed save, the target loses all proficiencies;\
    \ it can't cast spells; it can't understand language; and if its Intelligence\
    \ and Charisma scores are higher than 5, they become 5. Each time the target finishes\
    \ a long rest, it can repeat the saving throw, ending the effect on itself on\
    \ a success. A [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
    \ or [[5. Mechanics/Spells/Remove Curse.md|remove curse]] spell cast on the target\
    \ ends this effect early."
  "name": "Steal Memory (1/Day)"
- "desc": "The hydroloth teleports, along with any equipment it is wearing or carrying,\
    \ up to 60 feet to an unoccupied space it can see."
  "name": "Teleport"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/hydroloth-mpmm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
