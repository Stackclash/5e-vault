---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/3
  - monster/size/medium
  - monster/type/humanoid/orc
aliases:
  - White Tusk Warspeaker
---
# [[5. Mechanics\Bestiary\Humanoid\White Tusk Warspeaker (SAF).md|White Tusk Warspeaker]]
*Source: Strongholds and Followers p. 140*

Priests of Grole, orcish god of war and slaughter, live for the chance to kill in the name of their bloodstained god. Dressed in war-robes of scavenged leather and mail, these priests bestow the blessing of pain upon their allies, goading them to die gloriously in combat in the name of Grole.

Warspeakers seek conflict constantly, flying into a frothing rage at the slightest provocation. When their clan is at peace, they scheme and search for ways to trick or coerce their chieftain into attacking—and if they cannot, they scheme against their chieftain and convince a more aggressive orc into supplanting their "soft, peace-loving" leader.

```statblock
"name": "White Tusk Warspeaker (SAF)"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Chain Mail.md|chain mail]] scraps"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "-1"
"stats":
  - !!int "16"
  - !!int "8"
  - !!int "15"
  - !!int "10"
  - !!int "16"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "wisdom": "+5"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Orc"
"cr": "3"
"traits":
  - "desc": "The orc is a 5th-level spellcaster. Its spellcasting ability is Wisdom\
      \ (spell save DC 13, +5 to hit with spell attacks). The orc has the following\
      \ cleric spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Resistance.md|resistance]],\
      \ [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
      \n1st level (4 slots): [[5. Mechanics/Spells/Cure Wounds.md|cure wounds]],\
      \ [[5. Mechanics/Spells/Guiding Bolt.md|guiding bolt]], [[5. Mechanics/Spells/Inflict Wounds.md|inflict wounds]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Blindness Deafness.md|blindness/deafness]],\
      \ [[5. Mechanics/Spells/Spiritual Weapon.md|spiritual weapon]] (greataxe)\n\n3rd\
      \ level (2 slots): [[5. Mechanics/Spells/Bestow Curse.md|bestow curse]], [[5. Mechanics/Spells/Spirit Guardians.md|spirit\
      \ guardians]]"
    "name": "Spellcasting"
  - "desc": "As a bonus action, the orc can move up to its speed toward a hostile\
      \ creature it can see."
    "name": "Aggressive"
  - "desc": "After moving at least 20 feet in a straight line toward a creature, the\
      \ next attack the orc makes against that creature scores a critical hit on a\
      \ roll of 18-20."
    "name": "Minion: Savage Horde"
"actions":
  - "desc": "The White Tusk warspeaker makes a goading lash attack and two spiked\
      \ club attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one allied target. Hit:\
      \ 5 (1d4 + 3) slashing damage. The next melee weapon attack the target makes\
      \ before the end of its next turn has advantage and deals an extra 10 (3d6)\
      \ damage."
    "name": "Goading Lash"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) piercing damage."
    "name": "Spiked Club"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/White%20Tusk%20Warspeaker.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
