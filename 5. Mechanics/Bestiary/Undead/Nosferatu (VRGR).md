---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: null
size: Medium
tags:
  - compendium/src/5e/vrgr
  - monster/cr/8
  - monster/size/medium
  - monster/type/undead
aliases:
  - Nosferatu
---
# [[5. Mechanics\Bestiary\Undead\Nosferatu (VRGR).md|Nosferatu]]
*Source: Van Richten's Guide to Ravenloft p. 239*

Vicious, undead hunters, nosferatu possess the endless thirst of vampires but none of their grace. For them, existence is nothing more than an everlasting string of cold, desperate nights punctuated by crimson splashes of momentary warmth and lucidity. These joys are fleeting, as their blood addiction can never be quelled.

Nosferatu feed on anything with blood. Heaps of mutilated rats and stables turned into slaughterhouses are typical first signs of a nosferatu's predation. When the sun interrupts their hunts, nosferatu retreat to favored ruins, sewers, or caves, caring nothing for their lair's comfort. Rather than retiring to crypts, they seek filthy or inaccessible fissures, places any living soul would avoid.

For a few moments after feeding, nosferatu are lucid and capable of considering more than their next meal. In these instants, nosferatu recollect glimpses of what they once were, beings who knew pride, intention, and a world beyond the shadows. They might even momentarily be convinced to converse with other creatures. However, those who talk with nosferatu typically find them selfish, duplicitous creatures whose memories are faded and whose basic respect for life is long dead.

```statblock
"name": "Nosferatu (VRGR)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "9d8 + 45"
"modifier": !!int "4"
"stats":
  - !!int "20"
  - !!int "18"
  - !!int "21"
  - !!int "6"
  - !!int "17"
  - !!int "14"
"speed": "40 ft."
"saves":
  - "dexterity": "+7"
  - "constitution": "+8"
  - "wisdom": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+10"
"damage_resistances": "necrotic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "the languages it knew in life"
"cr": "8"
"traits":
  - "desc": "The nosferatu regains 10 hit points at the start of each of its turns\
      \ if it has at least 1 hit point and isn't in sunlight. If the nosferatu takes\
      \ radiant damage, this trait doesn't function until the start of the nosferatu's\
      \ next turn."
    "name": "Regeneration"
  - "desc": "The nosferatu can climb difficult surfaces, including upside down on\
      \ ceilings, without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The nosferatu takes 20 radiant damage when it starts its turn in sunlight.\
      \ While in sunlight, it has disadvantage on attack rolls and ability checks."
    "name": "Sunlight Hypersensitivity"
  - "desc": "The nosferatu doesn't require air."
    "name": "Unusual Nature"
"actions":
  - "desc": "The nosferatu makes two Claw attacks followed by one Bite attack. If\
      \ both Claw attacks hit the same creature, the Bite attack is made with advantage."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d8\
      \ + 5) slashing damage."
    "name": "Claw"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 9\
      \ (1d8 + 5) piercing damage plus 7 (2d6) necrotic damage. If the target is missing\
      \ any of its hit points, it instead takes 11 (2d10) necrotic damage.\n\nThe\
      \ target's hit point maximum is reduced by an amount equal to the necrotic damage\
      \ taken, and the nosferatu regains hit points equal to that amount. The reduction\
      \ lasts until the target finishes a long rest. The target dies if its hit point\
      \ maximum is reduced to 0. A Humanoid slain in this way and then buried in the\
      \ ground rises as a nosferatu after d10 days."
    "name": "Bite"
  - "desc": "The nosferatu vomits blood in a 15-foot cone. Each creature in that area\
      \ must make a DC 16 Constitution saving throw. On a failed save, a creature\
      \ takes 18 (4d8) necrotic damage, and it can't regain hit points for 1 minute.\
      \ On a successful save, the creature takes half as much damage with no additional\
      \ effects."
    "name": "Blood Disgorge (Recharge 5-6)"
"source":
  - "VRGR"
"image": "5. Mechanics/Bestiary/Undead/token/nosferatu-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
