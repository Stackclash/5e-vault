---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/4
- monster/size/gargantuan
- monster/type/monstrosity/brute
statblock: inline
aliases: ["Scyza"]
---
# [[5. Mechanics/Bestiary/Monstrosity/Scyza.md|Scyza]]
*Source: Flee, Mortals! (Packet 1) p. 7*

```statblock
"name": "Scyza"
"size": "Gargantuan"
"type": "monstrosity"
"subtype": "Brute"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "108"
"hit_dice": "8d20 + 24"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "5"
- !!int "11"
- !!int "7"
"speed": "40 ft."
"saves":
  "Strength": !!int "7"
  "Constitution": !!int "5"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": ""
"cr": "4"
"traits":
- "desc": "The scyza deals double damage to objects and structures."
  "name": "Siege Monster"
- "desc": "While wearing a war harness, the scyza can carry up to thirty-six Medium\
    \ or smaller creatures."
  "name": "War Harness"
"actions":
- "desc": "The scyza makes two Talon attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage, and the target is knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Talon"
- "desc": "Melee Weapon Attack: +7 to hit, reach 20 ft., one target. Hit: 14 (2d8\
    \ + 5) bludgeoning damage. If the target is on top of the scyza, the target falls\
    \ off and lands [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Tail Whip"
- "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 23 (4d8\
    \ + 5) slashing damage, and if the target is a creature who can hear, they are\
    \ dazed until the end of their next turn by the crest's deep ringing."
  "name": "Head Crest"
- "desc": "The scyza claws at the ground in a flurry. Each creature of the scyza's\
    \ choice within 5 feet of them must make a DC 15 Dexterity saving throw. On a\
    \ failed save, a creature takes 13 (3d8) slashing damage, is knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]],\
    \ and is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]] by a cloud of dust\
    \ until the start of the scyza's next turn. On a successful save, a creature takes\
    \ half as much damage and isn't knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]."
  "name": "Talon Twister (Recharge 6)"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```