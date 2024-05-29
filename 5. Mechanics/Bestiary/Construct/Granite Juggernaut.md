---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/veor
  - monster/cr/12
  - monster/size/large
  - monster/type/construct
statblock: inline
aliases:
  - Granite Juggernaut
---
# [[5. Mechanics/Bestiary/Construct/Granite Juggernaut.md|Granite Juggernaut]]
*Source: Vecna: Eve of Ruin p. 221*

> [!quote]- A quote from Teythorn, Oerthian Adventurer  
> 
> If you're close enough to see the expression carved onto a granite juggernaut's face, you're as good as dead.

A granite juggernaut is a lumbering Construct that can be found trundling across battlefields and down dungeon corridors. Granite juggernauts have dense, boxy bodies atop massive rollers they use for locomotion. Their fronts and rollers are often adorned with fearsome heads, such as those of enraged rhinos. Granite juggernauts are found on many worlds and typically are used to protect high-value locations.

```statblock
"name": "Granite Juggernaut"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "23"
- !!int "1"
- !!int "20"
- !!int "2"
- !!int "11"
- !!int "3"
"speed": "30 ft. (in a straight line)"
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#prone|prone]]"
"senses": "blindsight 120 ft., passive Perception 10"
"languages": ""
"cr": "12"
"traits":
- "desc": "The juggernaut has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The juggernaut deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 11 (1d10\
    \ + 6) bludgeoning damage, and if the target is a Large or smaller creature, it\
    \ must succeed on a DC 18 Strength saving throw or have the [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ condition."
  "name": "Slam"
"bonus_actions":
- "desc": "The juggernaut moves up to its speed. During this movement, the juggernaut\
    \ can move through the spaces of creatures with the [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ condition. When the juggernaut enters the space of a [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ creature for the first time during this movement, the creature must make a DC\
    \ 18 Dexterity saving throw, taking 55 (10d10) bludgeoning damage on a failed\
    \ save or half as much damage on a successful one."
  "name": "Devastating Roll"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Construct/token/granite-juggernaut-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
