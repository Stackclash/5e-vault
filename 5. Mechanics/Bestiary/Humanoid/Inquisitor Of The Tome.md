---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/vrgr
  - monster/cr/8
  - monster/size/medium
  - monster/type/humanoid
statblock: inline
aliases:
  - Inquisitor of the Tome
---
# [[5. Mechanics\Bestiary\Humanoid\Inquisitor Of The Tome.md|Inquisitor of the Tome]]
*Source: Van Richten's Guide to Ravenloft p. 249*  

"Evil lurks everywhere. With our minds, we will unearth it, we will plumb its depths, and we will annihilate it." With those words, the psychically gifted priest Ulmed founded the Ulmist Inquisition, an order of psionic inquisitors that seeks to discover the wickedness hiding in people's souls.

In the days before Count Strahd von Zarovich became the first vampire, Strahd thundered across the lands with Ulmed. Their mission was clear: to destroy the infernal powers that had corrupted the world and to ensure that those powers never rose again. Strahd, Ulmed, and their companions hunted Fiends, Undead, Aberrations, and other supernatural threats and were tireless foes of cults like the priests of Osybus. When Strahd fell into darkness, Ulmed was heartbroken at his friend's transformation and changed the inquisition's mission. Instead of focusing on hunting monsters, it would also hunt the seeds of evil that can corrupt a person.

Ulmed and his friends Cosima, Ansel, and Tristian organized the inquisition into three orders, with each one specializing in a type of psionic power. The Order of Cosima harnessed the Mind Fire—their name for the fire of thought that blazes within each person's mind. They used that power to read thoughts, reshape memories, and dominate the recalcitrant. The inquisitors in the Order of Ansel subjected themselves to harsh asceticism in an effort to use psionic energy to empower their own bodies. They succeeded and became the martial arm of the inquisition, represented by a sword. Finally, the Order of Tristian endeavored to use intellect to alter the environment through telekinetic force, and the order's members became the inquisition's scholars, represented by a tome.

Today the inquisition rules the city of Malitain, a vast city-state to the north of Barovia's original site, and the inquisition sends its members throughout the multiverse, seeking to thwart the work of malevolent cults, otherworldly horrors, and the malice of mortals. The zeal of the inquisitors in this work has caused them to be a source of terror in many communities, where folk fear that an overzealous inquisitor might be as great a monster as the fiends the inquisitors originally hunted.

```statblock
"name": "Inquisitor Of The Tome"
"size": "Medium"
"type": "humanoid"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"stats":
- !!int "10"
- !!int "12"
- !!int "12"
- !!int "19"
- !!int "16"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Nature": !!int "7"
  "Religion": !!int "10"
  "History": !!int "7"
  "Arcana": !!int "10"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "truesight 30 ft., passive Perception 13"
"languages": "any four languages, telepathy 120 ft."
"cr": "8"
"traits":
- "desc": "The inquisitor casts one of the following spells, requiring no components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
    \ [[5. Mechanics/Spells/Levitate.md|levitate]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Sending.md|sending]]\n\
    \n1/day each: [[5. Mechanics/Spells/Otilukes Resilient Sphere.md|Otiluke's resilient sphere]],\
    \ [[5. Mechanics/Spells/Telekinesis.md|telekinesis]]"
  "name": "innate"
"actions":
- "desc": "The inquisitor attacks twice."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: dice: d20+7 (+7 to hit), range 120 ft., one target.\
    \ Hit: dice: 4d8 + 4|avg (4d8 + 4) force damage, and if the target is a\
    \ Large or smaller creature, the inquisitor can push it up to 10 feet away."
  "name": "Force Bolt"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage, or dice: 1d10 + 4|avg\
    \ (1d10 + 4) if used with two hands, plus dice: 4d8|avg (4d8) force damage."
  "name": "Silver Longsword"
- "desc": "Each creature in a 20-foot-radius sphere centered on a point the inquisitor\
    \ can see within 120 feet of it must succeed on a DC 15 Constitution saving throw\
    \ or take dice: 6d8 + 4|avg (6d8 + 4) force damage and be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ and moved to the unoccupied space closest to the sphere's center. Large and\
    \ smaller objects that aren't being worn or carried in the sphere automatically\
    \ take the damage and are similarly moved."
  "name": "Implode (Recharge 4-6)"
"reactions":
- "desc": "In response to being hit by an attack roll, the inquisitor increases its\
    \ AC by 4 against the attack. If this causes the attack to miss, the attacker\
    \ is hit by the attack instead."
  "name": "Telekinetic Deflection"
"source":
- "VRGR"
"image": "5. Mechanics/Bestiary/Humanoid/token/inquisitor-of-the-tome-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
