---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 15
environments: null
size: Huge
tags:
  - 5. Mechanics\Src\5e\(VEOR)
  - monster\Cr\15
  - monster\Size\Huge
  - monster\Type\Monstrosity
aliases:
  - Borthak
---
# [[5. Mechanics\Bestiary\Monstrosity\Borthak (VEOR).md|Borthak]]
*Source: Vecna: Eve of Ruin p. 212*

Borthaks are irascible, wolflike behemoths that ravage northern wetlands and alpine fens on Krynn. Few mountain animals can challenge a borthak physically. Its powerful jaws, acidic spittle, and lightning-quick tail make the borthak an apex predator in its home territory.

Luckily for most wetland dwellers, borthaks rarely congregate. Unluckily, a single borthak can wreak havoc on an entire ecosystem with its supernatural ability to siphon heat from the ground. A borthak's body is so efficient at pulling the heat from its surroundings that it can transform a small, temperate glen into a frigid, slushy bog. Native plants and animals rarely survive long in a region a borthak claims as its hunting ground. Once a borthak has depleted an area of flora and fauna, it moves and begins its pillaging anew.

```statblock
"name": "Borthak (VEOR)"
"size": "Huge"
"type": "monstrosity"
"alignment": "typically  Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"stats":
- !!int "25"
- !!int "16"
- !!int "22"
- !!int "4"
- !!int "14"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Strength": !!int "12"
  "Constitution": !!int "11"
"damage_resistances": "acid, cold"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "15"
"traits":
- "desc": "At the end of the borthak's turn, slippery ice covers surfaces within 10\
    \ feet of the borthak. This ice is difficult terrain. When a creature other than\
    \ the borthak enters the ice's area for the first time on a turn or starts its\
    \ turn there, it must succeed on a DC 16 Dexterity saving throw or have the [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]\
    \ condition. The ice disappears at the start of the borthak's next turn."
  "name": "Glacial Aura"
- "desc": "The borthak can move across icy surfaces without needing to make an ability\
    \ check. Additionally, difficult terrain composed of ice or snow doesn't cost\
    \ it extra movement."
  "name": "Webbed Feet"
"actions":
- "desc": "The borthak makes one Bite attack or uses Noxious Regurgitation if available,\
    \ and it makes two Stomp attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 16 (2d8\
    \ + 7) piercing damage plus 7 (2d6) acid damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 11\
    \ (1d8 + 7) bludgeoning damage."
  "name": "Stomp"
- "desc": "The borthak spews acid at a creature it can see within 120 feet of itself.\
    \ The target must make a DC 21 Constitution saving throw. On a failed save, the\
    \ creature takes 24 (7d6) acid damage and has the [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
    \ condition until the start of the borthak's next turn. On a successful save,\
    \ the creature takes half as much damage only."
  "name": "Noxious Regurgitation (Recharge 5-6)"
"reactions":
- "desc": "When a creature within 10 feet of the borthak hits the borthak with an\
    \ attack roll, the borthak swings its tail in retaliation. The triggering creature\
    \ and any creature within 5 feet of it must succeed on a DC 16 Dexterity saving\
    \ throw or take 16 (2d8 + 7) bludgeoning damage."
  "name": "Reactive Tail"
"legendary_actions":
- "desc": "The borthak moves up to its speed without provoking opportunity attacks."
  "name": "Move"
- "desc": "The borthak makes one Bite attack."
  "name": "Bite (Costs 2 Actions)"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/borthak-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
