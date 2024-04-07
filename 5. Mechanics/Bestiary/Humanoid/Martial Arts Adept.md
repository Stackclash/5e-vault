---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/3
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid
statblock: inline
aliases:
  - Martial Arts Adept
---
# [[5. Mechanics/Bestiary/Humanoid/Martial Arts Adept.md|Martial Arts Adept]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 172, Volo's Guide to Monsters p. 216*

Martial arts adepts are disciplined monks with extensive training in hand-to-hand combat. Some protect monasteries; others travel the world seeking enlightenment or new forms of combat to master. A few become bodyguards, trading their combat prowess and loyalty for food and lodging.

Some martial artists adorn themselves with tattoos to honor inspirations or instructors, or to memorialize profound lessons, triumphs, or defeats. You may roll on the Martial Arts Adept Tattoos table to determine what sort of tattoo an adept bears.

**Martial Arts Adept Tattoos**

`dice: [[Martial Arts Adept.md#^martial-arts-adept-tattoos]]`

| dice: d8 | Tattoo |
|----------|--------|
| 1 | Patterning on the arms that make them look as though they were made of marble or granite |
| 2 | Colorful dragon scales |
| 3 | Collage of playful Elemental or Fey creatures |
| 4 | Constellations on the palm of each hand |
| 5 | Passage from a fighting manual |
| 6 | Beautiful but poisonous flowers |
| 7 | Two couatls swirling around each other, rendered in metallic ink |
| 8 | Detailed landscape depicting natural beauty |
^martial-arts-adept-tattoos

```statblock
"name": "Martial Arts Adept"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "Unarmored Defense"
"hp": !!int "60"
"hit_dice": "11d8 + 11"
"stats":
- !!int "11"
- !!int "17"
- !!int "13"
- !!int "11"
- !!int "16"
- !!int "10"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "5"
  "Acrobatics": !!int "5"
"senses": "passive Perception 13"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- "desc": "While the adept is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- "desc": "The adept makes three Unarmed Strike attacks or five Dart attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) bludgeoning damage. Once per turn,\
    \ the adept can cause one of the following additional effects (choose one or roll\
    \ a dice: d4|avg|noform (d4)):\n\n- 1–2 Knock Down.. The target must succeed\
    \ on a DC 13 Dexterity saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \  \n- 3–4 Push.. The target must succeed on a DC 13 Strength saving throw\
    \ or be pushed up to 10 feet directly away from the adept.  "
  "name": "Unarmed Strike"
- "desc": "Ranged Weapon Attack: dice: d20+5 (+5) to hit, range 20/60 ft., one\
    \ target. Hit: dice:1d4 + 3|text(5) (1d4 + 3) piercing damage."
  "name": "Dart"
"reactions":
- "desc": "In response to being hit by a ranged weapon attack, the adept deflects\
    \ the missile. The damage it takes from the attack is reduced by dice: 1d10 +\
    \ 3|avg|noform (1d10 + 3). If the damage is reduced to 0, the adept catches\
    \ the missile if it's small enough to hold in one hand and the adept has a hand\
    \ free."
  "name": "Deflect Missile"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/martial-arts-adept-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
