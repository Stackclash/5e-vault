---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Medium
tags:
  - compendium/src/5e/vrgr
  - monster/cr/7
  - monster/size/medium
  - monster/type/undead
aliases:
  - Priest of Osybus (Deathly Boon)
---
# [[5. Mechanics\Bestiary\Undead\Priest Of Osybus Deathly Boon (VRGR).md|Priest of Osybus (Deathly Boon)]]
*Source: Van Richten's Guide to Ravenloft p. 241, Vecna: Eve of Ruin*

```statblock
"name": "Priest Of Osybus Deathly Boon (VRGR)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "16"
- !!int "18"
- !!int "17"
- !!int "11"
"speed": "30 ft."
"saves":
  "Charisma": !!int "3"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "any three languages"
"cr": "7"
"traits":
- "desc": "The priest casts one of the following spells, requiring no components and\
    \ using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt will:\
    \ \n\n1/day each: [[5. Mechanics/Spells/Animate Dead.md|animate dead]], [[5. Mechanics/Spells/Create Undead.md|create\
    \ undead]]"
  "name": "Innate Spellcasting"
- "desc": "If the priest drops to 0 hit points, roll on the Boons of Undeath table\
    \ for the boon the priest receives. The priest dies if it receives a boon it already\
    \ has. If it receives a new boon, it revives at the start of its next turn with\
    \ half its hit points restored, and its creature type is now Undead.\n\nTo prevent\
    \ this revival, the Tattoo of Osybus on the priest's body must be destroyed. The\
    \ tattoo is invulnerable while the priest has at least 1 hit point. The tattoo\
    \ is otherwise an object with AC 15, and it is immune to poison and psychic damage.\
    \ It has 15 hit points, but it regains all its hit points at the end of every\
    \ combatant's turn."
  "name": "Tattoo of Osybus"
"actions":
- "desc": "The priest attacks twice."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) piercing damage, and if the target is a creature, it is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ until the start of the priest's next turn. If this damage reduces a Medium or\
    \ smaller creature to 0 hit points, the creature dies, and its soul is trapped\
    \ in the priest's body, manifesting as a shadowy Soul Tattoo on the priest. The\
    \ soul is freed if the priest dies."
  "name": "Soul Blade"
- "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17\
    \ (3d8 + 4) necrotic damage, and the target can't regain hit points until the\
    \ start of the priest's next turn."
  "name": "Necrotic Bolt"
- "desc": "Each creature in a 60-foot-radius sphere centered on a point the priest\
    \ can see within 150 feet of it must make a DC 15 Constitution saving throw, taking\
    \ 28 (8d6) necrotic damage on a failed save, or half as much damage on a successful\
    \ one.)"
  "name": "Circle of Death (Spell; (Recharge 5|m-6))"
"bonus_actions":
- "desc": "The priest touches one of the Soul Tattoos on its body. The tattoo vanishes\
    \ as the trapped soul manifests as a shadowy creature that appears in an unoccupied\
    \ space the priest can see within 30 feet of it. The creature has the size and\
    \ silhouette of its original body, but it otherwise uses the stat block of a shadow.\n\
    \nThe shadow obeys the priest's mental commands (no action required) and takes\
    \ its turn immediately after the priest. If the creature is within 5 feet of the\
    \ priest, it can turn back into a tattoo as an action, reappearing on the priest's\
    \ flesh and regaining all its hit points."
  "name": "Soul Tattoo (Recharge 5-6)"
"source":
- "VRGR"
- "VEoR"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
