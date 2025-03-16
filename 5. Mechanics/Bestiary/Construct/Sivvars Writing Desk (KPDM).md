---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1
  - monster/size/medium
  - monster/type/construct
aliases:
  - Sivvar's Writing Desk
---
# [[5. Mechanics/Bestiary/Construct/Sivvars Writing Desk (KPDM).md|Sivvar's Writing Desk]]
*Source: Deep Magic p. 288*

*This large ebony writing table has glossy brass fittings and a broad, flat top, dangling from which is a thin brass chain. Carved at the end of the desk's wooden legs are the claws of some sort of beast. As you approach, these claws animate and paw menacingly at the ground.*

Over a century ago, the wizard Sivvar was counted among the most learned historians of his age. So respected was he that people came from miles around to ask him for help in tracking down lost relics, forgotten tombs, and ancient ruins. The knowledge he amassed came with a price, though, and Sivvar eventually gathered many secrets that were too dangerous to be shared openly. To protect himself and his works, Sivvar fashioned a construct out of his writing desk. Not only would this piece of simple furniture store the knowledge he had gathered, it would protect itself from harm if someone tried to take the contents by force.

Recently, after years of foiling or dodging enemy attacks, Sivvar suddenly vanished, leaving his desk and other worldly possessions in the care of his sister's granddaughter, Emelia Nightmace. Emelia knows that her great-uncle's mansion and possessions are potentially dangerous and seeks the help of adventurers to enter the place and catalogue its contents. What she doesn't know is that Sivvar is still alive somewhere inside the mansion, and his desk holds the key to contacting him.

```statblock
"name": "Sivvars Writing Desk (KPDM)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "47"
"hit_dice": "5d8 + 25"
"stats":
- !!int "18"
- !!int "12"
- !!int "20"
- !!int "2"
- !!int "8"
- !!int "1"
"speed": "40 ft."
"saves":
  "Strength": !!int "7"
"damage_resistances": "cold; necrotic; bludgeoning, piercing, slashing damage from\
  \ nonmagical attacks"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "tremorsense 60 ft. (blind beyond this radius), passive Perception 9"
"languages": "understands Common but can't speak"
"cr": "1"
"traits":
- "desc": "The desk is incapacitated while in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
    \ If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the desk must\
    \ succeed on a Constitution saving throw against the caster's spell save DC or\
    \ become inanimate for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "The desk is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "While the desk remains motionless, it is indistinguishable from a normal\
    \ writing desk."
  "name": "False Appearance"
- "desc": "The drawers of the desk are locked by a modified version of the [[5. Mechanics/Spells/Arcane Lock.md|arcane\
    \ lock]] spell. The desk opens its drawers when\
    \ someone speaks the appropriate command word. If someone tries to open the drawers\
    \ without the correct password, the desk animates and attacks."
  "name": "Locked Drawers"
"actions":
- "desc": "The desk makes two claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) slashing damage."
  "name": "Claw"
- "desc": "If the desk hits the same target with both claw attacks, it rakes the victim\
    \ for an extra 10 (3d6) slashing damage."
  "name": "Rake"
"reactions":
- "desc": "The desk can use [[5. Mechanics/Spells/Dimension Door.md|dimension door]]\
    \ as a bonus action. It uses this ability only when reduced to 10 hit points or\
    \ fewer."
  "name": "Desperate Escape (1/Day)"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
