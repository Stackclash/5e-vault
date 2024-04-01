---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/6
  - monster/environment/hill
  - monster/environment/mountain
  - monster/size/large
  - monster/type/fey
statblock: inline
aliases:
  - Annis Hag
---
# [[5. Mechanics\Bestiary\Fey\Annis Hag.md|Annis Hag]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 47, Volo's Guide to Monsters p. 159*

Annis hags lair in mountains or hills. These hunchbacked and hump-shouldered hags are the largest and most physically imposing of their kind, standing eight feet tall. They can easily tear a fully grown person apart, but they love hunting the young, preferring their flesh above all others.

Annis hags leave tokens of their cruelty at the edges of forests and other areas they claim to provoke fear and distrust in nearby villages and settlements. To an annis hag, nothing is sweeter than making a once-vibrant community paralyzed with terror, so folk never venture out at night, strangers are met with suspicion and anger, and parents warn their children: "Be good, or the annis will get you."

When an annis feels especially cruel, the hag adopts the appearance of a kindly elder, approaches a child in a remote place, and gives them an iron token (described below), through which the child can magically confide in the hag. Over time, "Granny" or "Grampy" convinces the child that it's okay to do bad deeds—starting with breaking things or wandering without permission, then graduating to pushing someone down the stairs or setting a house on fire. Eventually, the child's terrified family and community face painful decisions of what to do about the seemingly remorseless child.

Much as annis hags befriend children in order to corrupt them, they may adopt a group of ogres, trolls, or other creatures ([[5. Mechanics/Bestiary/Giant/Ogre.md|ogres]] and [[5. Mechanics/Bestiary/Giant/Troll.md|trolls]]), ruling them through brute strength, insults, and superstition.

## Iron Token

An annis hag can pull out one of their iron teeth or nails and spend 1 minute shaping and polishing it into the form of a coin, a ring, or a tiny mirror.

Thereafter, any creature that holds this iron token can have a whispered conversation with the hag, provided the creature and the hag are within 10 miles of each other. When the hag speaks through the token, the holder can hear the hag's whisper but not any other sounds at the hag's location. Similarly, the hag can hear the holder of the token but not the noise around it.

A hag can have up to three iron tokens active at one time. As an action, the hag can discern the direction and approximate distance to those active tokens. The hag can deactivate any of those tokens at any distance (no action required), whereupon the token retains its current form but loses its magic.

```statblock
"name": "Annis Hag"
"size": "Large"
"type": "fey"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "17"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "21"
- !!int "12"
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "15"
"speed": "40 ft."
"saves":
  "Constitution": !!int "5"
"skillsaves":
  "Deception": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "cold"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Giant, Sylvan"
"cr": "6"
"traits":
- "desc": "The hag casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 13):\n\n3/day each: [[5. Mechanics/Spells/Disguise Self.md|disguise self]]\
    \ (including the form of a Medium Humanoid), [[5. Mechanics/Spells/Fog Cloud.md|Fog cloud]]"
  "name": "spells"
"actions":
- "desc": "The annis makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d6 + 5|avg (3d6 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d6 + 5|avg (3d6 + 5) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 9d6 + 5|avg (9d6 + 5) bludgeoning damage, and the target is\
    \ [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] (escape DC 15) if it is\
    \ a Large or smaller creature. Until the grapple ends, the target takes dice:\
    \ 9d6 + 5|avg (9d6 + 5) bludgeoning damage at the start of each of the hag's\
    \ turns. The hag can't make attacks while grappling a creature in this way."
  "name": "Crushing Hug"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Fey/token/annis-hag-mpmm.webp"
```
^statblock

## Environment

hill, mountain

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
