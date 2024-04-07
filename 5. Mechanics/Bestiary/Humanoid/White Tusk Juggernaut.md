---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/4
  - monster/size/large
  - monster/type/humanoid/orc
statblock: inline
aliases:
  - White Tusk Juggernaut
---
# [[5. Mechanics/Bestiary/Humanoid/White Tusk Juggernaut.md|White Tusk Juggernaut]]
*Source: Strongholds and Followers p. 138*

The White Tusk orc clan named itself after its hulking warriors who, in addition to their massive bodies, possessed enormous white tusks. White Tusk juggernauts pride themselves not just in their battle prowess but also in the size and sharpness of their monstrous lower canines. Some juggernauts have their tusks pierced and display fearsome jewelry from their teeth, others decorate them with ink or paint, and those who can withstand the pain even have symbols or runes inscribed upon them.

A juggernaut's immense muscles allow them to wield oversized weapons worthy of their bloodlust, and they wear thick metal armor forged together in piecemeal from bits of plate armor scavenged from the corpses of their more knightly victims.

```statblock
"name": "White Tusk Juggernaut"
"size": "Large"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate armor]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "95"
"hit_dice": "10d10 + 40"
"stats":
- !!int "19"
- !!int "8"
- !!int "19"
- !!int "7"
- !!int "12"
- !!int "8"
"speed": "25 ft."
"saves":
  "Wisdom": !!int "3"
  "Strength": !!int "6"
"skillsaves":
  "Intimidation": !!int "3"
  "Athletics": !!int "7"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Orc"
"cr": "4"
"traits":
- "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ it can see."
  "name": "Aggressive"
- "desc": "After moving at least 20 feet in a straight line toward a creature, the\
    \ next attack the orc makes against that creature scores a critical hit on a roll\
    \ of 18-20."
  "name": "Minion: Savage Horde"
"actions":
- "desc": "The White Tusk juggernaut makes one tusk attack and one longsword attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d6 + 4|text(11) (2d6 + 4) piercing damage. If the target is\
    \ a creature, it must succeed on a DC 14 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Tusk"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d8 + 4|text(13) (2d8 + 4) slashing damage."
  "name": "Longsword"
"reactions":
- "desc": "When a creature within 5 feet of the orc is attacked by a creature the\
    \ orc can see and the orc is wielding a shield, the orc can impose disadvantage\
    \ on that attack roll."
  "name": "Horde Protector"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Humanoid/token/white-tusk-juggernaut-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
