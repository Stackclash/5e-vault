---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1-4
  - monster/size/tiny
  - monster/type/monstrosity
aliases:
  - Abyssal Worm
---
# [[5. Mechanics\Bestiary\Monstrosity\Abyssal Worm (KPDM).md|Abyssal Worm]]
*Source: Deep Magic p. 295*

These creatures can be found in vast numbers in the lower planes, mostly providing fodder for demons and other denizens. Typically, an abyssal worm measures a foot to a foot and a half in length, its body gray in color, with mossy green and mustard yellow mottling. The worm's mouth is a round orifice ringed with sharp, needle-like teeth. The worm's skin exudes a slime that leaves a glistening trail in its path.

Evil spellcasters often choose the abyssal worm as a familiar as an intimidation tactic. The creature's disgusting appearance makes it an excellent tool for unnerving others, especially if they aren't hardened adventurers. Abyssal worms are happy to serve as familiars, so long as they get a steady diet of flesh and the chance to torment the living.

## Familiar

If an abyssal worm agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the abyssal worm senses, as long as they are within 1 mile of each other. While the abyssal worm is within 10 feet of its master, the master gains the worm's immunity to poison damage and the [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] condition. If its master causes it physical harm, or if it simply chooses to do so, the abyssal worm will abandon its service as a familiar, breaking the telepathic bond.

```statblock
"name": "Abyssal Worm (KPDM)"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"modifier": !!int "3"
"stats":
  - !!int "7"
  - !!int "16"
  - !!int "13"
  - !!int "4"
  - !!int "12"
  - !!int "7"
"speed": "20 ft., burrow 20 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"damage_resistances": "cold, fire, bludgeoning from nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 30 ft., passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "Any creature other than an abyssal worm that starts its turn within 5\
      \ feet of the abyssal worm must succeed on a DC 13 Constitution saving throw\
      \ or be [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] until the start\
      \ of the creature's next turn. On a successful saving throw, the creature is\
      \ immune to the stench of all abyssal worms for 1 hour."
    "name": "Stench"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, 5 ft. reach, one target. Hit: 5 (1d4\
      \ + 3) piercing damage plus 1 poison damage, and the abyssal worm attaches to\
      \ the target. While attached, the abyssal worm doesn't attack. Instead, at the\
      \ start of the abyssal worm's turn, the target loses 5 (1d4 + 3) hit points\
      \ due to blood loss and also takes 1 poison damage.\n\nThe abyssal worm can\
      \ detach itself by spending 5 feet of movement. It does so after draining 10\
      \ hit points of blood from its target or when the target dies. A creature, including\
      \ the target, can use an action to detach the abyssal worm."
    "name": "Bite"
"source":
  - "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
