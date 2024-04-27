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
aliases:
  - Balhannoth
---
# [[5. Mechanics\Bestiary\Aberration\Balhannoth.md|Balhannoth]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 55, Mordenkainen's Tome of Foes p. 119*

Native to the Shadowfell, the vicious, predatory balhannoth alters reality in its lair to make the place appear inviting to travelers. A limited form of telepathy enables a balhannoth to identify images of places where its prey expects their needs and desires to be met, such as an inn or a temple offering healing. It then warps reality around itself, hiding itself and remaking its environment to resemble such a place. The imitation is imperfect, but it's good enough to fool greedy or desperate creatures. Once its prey enters the trap, it snatches the targets and teleports away to feed on their fear and despair.

Dungeon builders and Underdark tyrants sometimes venture into the Shadowfell to capture balhannoths for use as guardians.

## A Balhannoth's Lair

In the Shadowfell, balhannoths make their lairs near places inhabited by creatures they hunt. They typically haunt well-traveled roads and paths, snatching people who come along. A balhannoth used as a guardian in the Underdark might lair in caves near Underdark passages and guard the ways in and out of its keepers' enclave.

```statblock
"name": "Balhannoth"
"size": "Large"
"type": "aberration"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
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
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 5 ft., one target.\
    \ Hit: dice:3d10 + 3|text(19) (3d10 + 3) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d6 + 3|text(10) (2d6 + 3) bludgeoning damage, and the target\
    \ is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] (escape DC 15) and is\
    \ moved up to 5 feet toward the balhannoth. Until this grapple ends, the target\
    \ is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]], and the balhannoth\
    \ can't use this tentacle against other targets. The balhannoth has four tentacles."
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
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), a balhannoth can take\
    \ one of the following lair actions; the balhannoth can't take the same lair action\
    \ two rounds in a row:"
  "name": ""
- "desc": "- Teleport. The balhannoth targets one creature within 500 feet of\
    \ it. The target must succeed on a DC 16 Wisdom saving throw, or the target, along\
    \ with whatever it is wearing and carrying, teleports to an unoccupied space of\
    \ the balhannoth's choice within 60 feet of it.  \n- Vanish. The balhannoth\
    \ targets one creature within 500 feet of it. The target must succeed on a DC\
    \ 16 Wisdom saving throw, or the balhannoth becomes [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]]\
    \ to that creature for 1 minute. This effect ends if the balhannoth attacks the\
    \ target.  \n- Warp Terrain. The balhannoth warps reality around it in an\
    \ area up to 500 feet square. After 10 minutes, the terrain in the area reshapes\
    \ to assume the appearance of a location sought by one Humanoid whose desires\
    \ the balhannoth has sensed (see Regional Effects below). The transformation affects\
    \ nonliving material only and can't create anything with moving parts or magical\
    \ properties. Any object created in this area is, upon close inspection, revealed\
    \ as a fake. Books are filled with empty pages, golden items are obvious counterfeits,\
    \ and so on. The transformation lasts until the balhannoth dies or takes this\
    \ lair action again.  "
  "name": ""
"regional_effects":
- "desc": "A region containing a balhannoth's lair becomes warped by the creature's\
    \ unnatural presence, which creates one or more of the following effects:"
  "name": ""
- "desc": "- Sense Desires. The balhannoth can sense the strongest desires of\
    \ any Humanoid within 1 mile of it and learns whether those desires involve a\
    \ place: a safe location to rest, such as a temple, a home, or somewhere else.\
    \  \n- Supernatural Lure. Creatures within 1 mile of the balhannoth's lair\
    \ experience the sensation of being close to whatever they desire most. The sensation\
    \ grows stronger the closer the creatures come to the balhannoth's lair.  "
  "name": ""
- "desc": "If the balhannoth dies, these effects end immediately."
  "name": ""
"source":
- "MPMM"
- "MTF"
- "RtG"
"image": "5. Mechanics/Bestiary/Aberration/token/balhannoth-mpmm.webp"
```
^statblock

## Environment

coastal, mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
