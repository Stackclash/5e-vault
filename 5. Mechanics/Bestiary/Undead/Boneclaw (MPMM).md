---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 'arctic, desert, urban'
size: Large
tags:
  - compendium/src/5e/mpmm
  - monster/cr/12
  - monster/environment/arctic
  - monster/environment/desert
  - monster/environment/urban
  - monster/size/large
  - monster/type/undead
aliases:
  - Boneclaw
---
# [[5. Mechanics\Bestiary\Undead\Boneclaw (MPMM).md|Boneclaw]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 66, Mordenkainen's Tome of Foes p. 121*

A wizard who tries to become a lich but fails might become a boneclaw instead. These hideous, cackling monsters share a few of liches' attributes, but while liches are immortal masters of the arcane, boneclaws are thralls to evil, hatred, and pain.

The most important part of the transformation ritual occurs when the soul of the aspiring lich migrates to a prepared phylactery. If the wizard is too physically or magically weak to compel the soul into its new home, the soul instead seeks out a master—a person within a few miles who has a hate-filled heart. The soul bonds to that person and becomes enslaved to its new master's wishes. The boneclaw forms near its master, sometimes appearing before that individual to receive orders and other times simply seeking to fulfill its master's desires.

A boneclaw can serve only an evil creature. If its master finds redemption or sincerely turns away from the path of evil, the boneclaw is destroyed. Otherwise, a boneclaw can't be destroyed while its master lives. No matter what happens to the boneclaw's body, it re-forms within hours.

In service to its master, a boneclaw delights in causing horrific pain. It lurks like a spider in shadowy recesses, waiting for victims to approach within reach of its long, bony limbs. Once speared, a creature is pulled into the darkness to be sliced apart.

```statblock
"name": "Boneclaw (MPMM)"
"size": "Large"
"type": "undead"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "20d10 + 40"
"modifier": !!int "3"
"stats":
  - !!int "19"
  - !!int "16"
  - !!int "15"
  - !!int "13"
  - !!int "15"
  - !!int "9"
"speed": "40 ft."
"saves":
  - "dexterity": "+7"
  - "constitution": "+6"
  - "wisdom": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+7"
"damage_resistances": "cold, necrotic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common plus one language spoken by its master"
"cr": "12"
"traits":
  - "desc": "While its master lives, a destroyed boneclaw gains a new body in d10\
      \ hours, with all its hit points. The new body appears within 1 mile of the\
      \ boneclaw's master."
    "name": "Rejuvenation"
  - "desc": "The boneclaw doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The boneclaw makes two Piercing Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 15 ft., one target. Hit: 20\
      \ (3d10 + 4) piercing damage plus 11 (2d10) necrotic damage. If the target is\
      \ a creature, the boneclaw can pull the target up to 10 feet toward itself,\
      \ and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] (escape\
      \ DC 14). The boneclaw has two claws. While a claw grapples a target, the claw\
      \ can attack only that target."
    "name": "Piercing Claw"
  - "desc": "If the boneclaw is in dim light or darkness, each creature of the boneclaw's\
      \ choice within 15 feet of it must succeed on a DC 14 Constitution saving throw\
      \ or take 34 (5d12 + 2) necrotic damage.\n\nThe boneclaw then teleports up to\
      \ 60 feet to an unoccupied space it can see. It can bring one creature it's\
      \ grappling, teleporting that creature to an unoccupied space it can see within\
      \ 5 feet of its destination. The destination spaces of this teleportation must\
      \ be in dim light or darkness."
    "name": "Shadow Jump (Recharge 5-6)"
"bonus_actions":
  - "desc": "While in dim light or darkness, the boneclaw takes the [[/5. Mechanics/Rules/Actions.md#Hide|Hide]]\
      \ action."
    "name": "Shadow Stealth"
"reactions":
  - "desc": "In response to a creature entering a space within 15 feet of it, the\
      \ boneclaw makes one Piercing Claw attack against that creature."
    "name": "Deadly Reach"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Undead/token/boneclaw-mpmm.webp"
```
^statblock

## Environment

arctic, desert, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
