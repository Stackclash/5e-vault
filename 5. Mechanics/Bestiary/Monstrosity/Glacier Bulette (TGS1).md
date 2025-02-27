---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: 'arctic, everglacier'
size: Large
tags:
  - compendium/src/5e/tgs1
  - monster/cr/6
  - monster/environment/arctic
  - monster/environment/everglacier
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Glacier Bulette
---
# [[5. Mechanics\Bestiary\Monstrosity\Glacier Bulette (TGS1).md|Glacier Bulette]]
*Source: The Griffon's Saddlebag, Book 1 p. 175*

```statblock
"name": "Glacier Bulette (TGS1)"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "92"
"hit_dice": "8d10 + 48"
"stats":
- !!int "19"
- !!int "12"
- !!int "22"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "40 ft., burrow 40 ft."
"skillsaves":
  "Perception": !!int "6"
"damage_resistances": "cold"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., tremorsense 60 ft., passive Perception 16"
"languages": ""
"cr": "6"
"traits":
- "desc": "A creature that touches the bulette or hits it with a melee attack while\
    \ within 5 feet of it takes 5 (1d10) fire damage."
  "name": "Heated Body"
- "desc": "The bulette can move across and climb icy surfaces without needing to make\
    \ an ability check. Additionally, difficult terrain composed of ice or snow doesn't\
    \ cost it extra movement."
  "name": "Ice Walk"
- "desc": "The bulette can burrow through solid ice at its full burrow speed and leaves\
    \ a smooth, slick, 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 30 (4d12\
    \ + 4) piercing damage plus 7 (2d6) fire damage."
  "name": "Bite"
- "desc": "If the bulette starts its turn burrowed in solid ice at least 15 feet deep,\
    \ it can then use its action to move up to its burrow speed to the surface, then\
    \ erupt from the ice in an explosion of ice shards and steam, potentially in a\
    \ space that contains one or more other creatures. Each of those creatures, as\
    \ well as any other creatures within 10 feet of the bulette when it emerges, must\
    \ make a DC 16 Dexterity saving throw. Any creature in the bulette's space when\
    \ it emerges is pushed to the nearest unoccupied space and makes this saving throw\
    \ with disadvantage.\n\nA creature that fails the saving throw takes 11 (2d6 +\
    \ 4) piercing damage plus 10 (3d6) fire damage and is knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \ A creature that succeeds on its save takes half as much damage and is not knocked\
    \ prone.\n\nAs part of this same action, the bulette also jumps from the ice up\
    \ to 10 feet in the air, landing in an unoccupied space of its choice within 15\
    \ feet of where it emerged."
  "name": "Steam Eruption (Recharge 5-6)"
"source":
- "tgs1"
```
^statblock

## Environment

arctic, everglacier

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
