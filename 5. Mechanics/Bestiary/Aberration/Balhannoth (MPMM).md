---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/11
- monster/environment/coastal
- monster/environment/mountain
- monster/environment/underdark
- monster/size/large
- monster/type/aberration
statblock: inline
aliases: ["Balhannoth"]
---
# [[5. Mechanics\Bestiary\Aberration\Balhannoth (MPMM).md|Balhannoth]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 55*  

Native to the Shadowfell, the vicious, predatory balhannoth alters reality in its lair to make the place appear inviting to travelers. A limited form of telepathy enables a balhannoth to identify images of places where its prey expects their needs and desires to be met, such as an inn or a temple offering healing. It then warps reality around itself, hiding itself and remaking its environment to resemble such a place. The imitation is imperfect, but it's good enough to fool greedy or desperate creatures. Once its prey enters the trap, it snatches the targets and teleports away to feed on their fear and despair.

Dungeon builders and Underdark tyrants sometimes venture into the Shadowfell to capture balhannoths for use as guardians.

## A Balhannoth's Lair

In the Shadowfell, balhannoths make their lairs near places inhabited by creatures they hunt. They typically haunt well-traveled roads and paths, snatching people who come along. A balhannoth used as a guardian in the Underdark might lair in caves near Underdark passages and guard the ways in and out of its keepers' enclave.

```statblock
"name": "Balhannoth (MPMM)"
"size": "Large"
"type": "aberration"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "17"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "17"
- !!int "8"
- !!int "18"
- !!int "6"
- !!int "15"
- !!int "8"
"speed": "25 ft., climb 25 ft."
"saves":
  "Constitution": !!int "8"
"skillsaves":
  "Perception": !!int "6"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]"
"senses": "blindsight 500 ft. (blind beyond this radius), passive Perception 16"
"languages": "understands Deep Speech, telepathy 1 mile"
"cr": "11"
"traits":
- "desc": "If the balhannoth fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (2/Day)"
"actions":
- "desc": "The balhannoth makes one Bite attack and two Tentacle attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d10 + 3|avg (3d10 + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) bludgeoning damage, and the target is\
    \ [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] (escape DC 15) and is moved\
    \ up to 5 feet toward the balhannoth. Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ and the balhannoth can't use this tentacle against other targets. The balhannoth\
    \ has four tentacles."
  "name": "Tentacle"
"legendary_actions":
- "desc": "The balhannoth makes one Bite attack against one creature it has [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]."
  "name": "Bite"
- "desc": "The balhannoth teleports, along with any equipment it is wearing or carrying\
    \ and any creatures it has [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]],\
    \ up to 60 feet to an unoccupied space it can see."
  "name": "Teleport"
- "desc": "The balhannoth magically becomes [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]]\
    \ for up to 10 minutes or until immediately after it makes an attack roll."
  "name": "Vanish"
"source":
- "MPMM"
- "MTF"
- "RtG"
"image": "5. Mechanics/Bestiary/Aberration/token/balhannoth.png"
```
^statblock

## Environment

coastal, mountain, underdark
