---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/5
- monster/size/large
- monster/type/celestial
statblock: inline
aliases: ["Alicorn"]
---
# [[5. Mechanics/Bestiary/Celestial/Alicorn (SAF).md|Alicorn]]
*Source: Strongholds and Followers p. 55*  

Natives of Arcadia, the winged [[5. Mechanics/Bestiary/Celestial/Unicorn.md|unicorn]] (not to be confused with the horned [[5. Mechanics/Bestiary/Celestial/Pegasus.md|pegasus]]) can be summoned by a particularly devout paladin to serve as their mount. They do not particularly like the Mundane World, but they enjoy and find satisfaction in hunting evil and chaos. They will serve as mount and companion to a holy knight only so long as it brings the opportunity to smash evil, a sport they are denied on their home plane.

```statblock
"name": "Alicorn (SaF)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"stats":
- !!int "19"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "17"
- !!int "16"
"speed": "60 ft., fly 90 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "5"
  "Wisdom": !!int "4"
"skillsaves":
  "Perception": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 16"
"languages": "Celestial, Elvish, Sylvan, telepathy 60 ft."
"cr": "5"
"traits":
- "desc": "The alicorn's innate spellcasting ability is Charisma (spell save DC 14).\
    \ The alicorn can innately cast the following spells, requiring no components:\n\
    \nAt will: [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]],\
    \ [[5. Mechanics/Spells/Druidcraft.md|druidcraft]], [[5. Mechanics/Spells/Pass Without Trace.md|pass without trace]]\n\
    \n1/day each: [[5. Mechanics/Spells/Calm Emotions.md|calm emotions]], [dispel\
    \ evil and good](compendium/spells/dispel-evil-and-good.md), [[5. Mechanics/Spells/Entangle.md|entangle]]"
  "name": "innate"
- "desc": "If the alicorn moves at least 20 feet straight toward a target and then\
    \ hits it with a horn attack on the same turn, the target takes an extra dice:\
    \ 2d8|avg (2d8) piercing damage. If the target is a creature, it must succeed\
    \ on a DC 15 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Charge"
- "desc": "The alicorn has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The alicorn's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- "desc": "The alicorn makes two attacks: one with its hooves and one with its horn."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) bludgeoning damage."
  "name": "Hooves"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Horn"
- "desc": "The alicorn touches another creature with its horn. The target magically\
    \ regains dice: 2d8 + 2|avg (2d8 + 2) hit points. In addition, the touch removes\
    \ all diseases and neutralizes all poisons afflicting the target."
  "name": "Healing Touch (3/Day)"
- "desc": "The alicorn magically teleports itself and up to three willing creatures\
    \ it can see within 5 feet of it, along with any equipment they are wearing or\
    \ carrying, to a location the alicorn is familiar with, up to 1 mile away."
  "name": "Teleport (1/Day)"
"legendary_actions":
- "desc": "The alicorn makes one attack with its hooves."
  "name": "Hooves"
- "desc": "The alicorn creates a prismatic, magical field around itself or another\
    \ creature it can see within 60 feet of it. The target gains a +2 bonus to AC\
    \ until the end of the alicorn's next turn."
  "name": "Prismatic Barrier (Costs 2 Actions)"
- "desc": "The alicorn magically restores dice: 2d8 + 2|avg (2d8 + 2) hit points."
  "name": "Heal Self (Costs 3 Actions)"
"source":
- "SaF"
```
^statblock