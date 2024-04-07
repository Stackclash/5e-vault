---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mpmm
  - monster/cr/16
  - monster/environment/urban
  - monster/size/large
  - monster/type/construct
statblock: inline
aliases:
  - Steel Predator
---
# [[5. Mechanics/Bestiary/Construct/Steel Predator.md|Steel Predator]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 232, Mordenkainen's Tome of Foes p. 239*

A steel predator is a merciless machine with one purpose: to locate and kill its target regardless of distance and obstacles.

Steel predators are created by a unique modron, using a machine located in the city of Sigil. It wasn't always headquartered in the City of Doors, however. On its original home, the plane of Mechanus, the ingenious modron was lauded for its invention—until it turned these creations against its superiors. Steel predators wreaked havoc against the modron hierarchy until the rogue modron was trapped and exiled. Now it operates a shop in Sigil where, for a steep price, anyone can commission the manufacture of a steel predator.

To create a steel predator, the modron's machine must be fed something that identifies the predator's target, such as a lock of hair, a well-worn glove, or a much-used weapon. The moment the newly manufactured steel predator emerges, it bounds away in search of its prey. It senses the location of its target across planar boundaries, but such detection is accurate only to within a thousand yards; to close the remaining distance, the steel predator locates its prey by sight and smell.

Once battle is joined, the predator ignores every other threat to attack its target, unless other creatures prevent it from reaching the target. In that case, it does what it must to fulfill its mission.

If all goes according to plan, a steel predator slays its target and then voluntarily returns to Sigil, where it's broken down into parts that can be used in another steel predator. Battle damage can cause this instinct to fail, however, in which case the steel predator lingers in the area, hunting and killing other creatures that resemble its target or that simply live nearby. Such rogue predators are dangerous to anyone in the vicinity.

```statblock
"name": "Steel Predator"
"size": "Large"
"type": "construct"
"alignment": "Typically  Lawful Neutral"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "207"
"hit_dice": "18d10 + 108"
"stats":
- !!int "24"
- !!int "17"
- !!int "22"
- !!int "4"
- !!int "14"
- !!int "6"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "8"
  "Perception": !!int "7"
  "Survival": !!int "7"
"damage_resistances": "cold, lightning, necrotic, thunder"
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 17"
"languages": "understands Modron and the language of its owner but can't speak"
"cr": "16"
"traits":
- "desc": "The steel predator casts one of the following spells, requiring no spell\
    \ components and using Wisdom as the spellcasting ability:\n\n3/day each:\
    \ [[5. Mechanics/Spells/Dimension Door.md|dimension door]] (self only), [[5. Mechanics/Spells/Plane Shift.md|plane shift]]\
    \ (self only)"
  "name": "spells"
- "desc": "The steel predator has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The steel predator doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The steel predator makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d10 + 7|text(18) (2d10 + 7) lightning damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12) to hit, reach 5 ft., one\
    \ target. Hit: dice:2d8 + 7|text(16) (2d8 + 7) force damage."
  "name": "Claw"
- "desc": "The steel predator emits a roar in a 60-foot cone. Each creature in that\
    \ area must make a DC 19 Constitution saving throw. On a failed save, a creature\
    \ takes dice:6d10|text(33) (6d10) thunder damage, drops everything it's holding,\
    \ and is [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]] for 1 minute. The\
    \ [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]] creature can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success.\
    \ On a successful save, a creature takes half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]."
  "name": "Stunning Roar (Recharge 5-6)"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Construct/token/steel-predator-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
