---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/3
  - monster/size/medium
  - monster/type/humanoid/orc
  - monster/type/humanoid/shapechanger
statblock: inline
aliases:
  - White Tusk Shaman
---
# [[5. Mechanics/Bestiary/Humanoid/White Tusk Shaman.md|White Tusk Shaman]]
*Source: Strongholds and Followers p. 141*

Most orc clans keep a shaman or two around to interpret the will of the natural world. These shamans enjoy a high status in their clan, even when a tribe such as the White Tusks possess warspeakers who manifest the will of the gods, for there are more powers in this world than that of the gods. The Mundane World itself possesses a sort of consciousness—the whispering of the wind, the babbling of running water, and the quiet grumbling of the mountains; these small gestures of nature are the world speaking to those who possess the skill to listen.

As part of their training, orcish shamans bond with a single animal, typically a dire wolf. When that animal dies, as all things must, the shaman takes that animal's spirit into their own body to make their bond eternal. A spirit-bonded shaman can take the shape of their bonded animal.

```statblock
"name": "White Tusk Shaman"
"size": "Medium"
"type": "humanoid"
"subtype": "orc, shapechanger"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Hide Armor.md|hide armor]]"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "17"
- !!int "15"
- !!int "14"
- !!int "9"
- !!int "16"
- !!int "8"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
"skillsaves":
  "Perception": !!int "5"
  "Survival": !!int "5"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "Orc, Primordial"
"cr": "3"
"traits":
- "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ it can see."
  "name": "Aggressive"
- "desc": "After moving at least 20 feet in a straight line toward a creature, the\
    \ next attack the orc makes against that creature scores a critical hit on a roll\
    \ of 18-20."
  "name": "Minion: Savage Horde"
- "desc": "As a bonus action, the orc can transform into a dire wolf for up to 4 hours.\
    \ The orc can choose whether its equipment falls to the ground, melds with its\
    \ new form, or is worn by the new form. The orc reverts to its true form when\
    \ its dire wolf form is reduced to 0 hit points. If this damage would cause its\
    \ dire wolf form to drop below 0 hit points, the excess damage is done to its\
    \ true form.\n\nThe orc also reverts to its true form if it dies or falls [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]].\
    \ The orc can revert to its true form as a bonus action on its turn. When it reverts\
    \ in this way, it returns to the number of hit points it had before it transformed."
  "name": "Spirit-Bonded Body (Recharges after a Short or Long Rest)"
- "desc": "The orc can cast speak with animals at will, but can only communicate with\
    \ wolves."
  "name": "Spirit-Bonded Mind"
"actions":
- "desc": "The White Tusk Shaman makes two blood-searing spear attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/60\
    \ ft., one target. Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) poison damage.\
    \ This magical poison only functions when the spear is wielded by an orc shaman."
  "name": "Blood-Searing Spear"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/White%20Tusk%20Shaman.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
