---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/3
- monster/environment/underdark
- monster/environment/urban
- monster/size/large
- monster/type/elemental
statblock: inline
aliases: ["Water Weird"]
---
# [[5. Mechanics\Bestiary\Elemental\Water Weird.md|Water Weird]]
*Source: Monster Manual p. 299*  

A water weird is an elemental guardian bound to a specific water-filled location, such as a pool or fountain.

Invisible while immersed in water, its serpentine shape becomes clear only when it emerges to attack, using its coils to crush any creature other than its summoner and those its summoner declares as off limits. When slain, a water weird becomes an inanimate pool of water.

## Good and Evil Weirds

Like most elementals, a water weird has no concept of good or evil. However, a water weird bound to a sacred or befouled source of water begins to take on the nature of that site, becoming neutral good or neutral evil.

A neutral good water weird tries to frighten away interlopers rather than kill them, while a neutral evil water weird kills its victims for pleasure and might turn against its summoner. A water weird loses its evil alignment if its waters are cleansed with a [[5. Mechanics/Spells/Purify Food And Drink.md|purify food and drink]] spell.

## Elemental Nature

A water weird doesn't require air, food, drink, or sleep.

> [!quote]- A quote from X the Mystic's 2nd rule of dungeon survival  
> 
> Before you drink from a fountain or pool, toss a copper coin into it. It's a small price to pay for your life.


```statblock
"name": "Water Weird"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d10 + 9"
"stats":
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "10"
- !!int "10"
"speed": "0 ft., swim 60 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
  \ [[/5. Mechanics/Rules/Conditions.md#prone|prone]], [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]"
"senses": "blindsight 30 ft., passive Perception 10"
"languages": "understands Aquan but doesn't speak"
"cr": "3"
"traits":
- "desc": "The water weird is [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]]\
    \ while fully immersed in water."
  "name": "Invisible in Water"
- "desc": "The water weird dies if it leaves the water to which it is bound or if\
    \ that water is destroyed."
  "name": "Water Bound"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 3d6 + 3|avg (3d6 + 3) bludgeoning damage. If the target is\
    \ Medium or smaller, it is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 13) and pulled 5 feet toward the water weird. Until this grapple\
    \ ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ the water weird tries to drown it, and the water weird can't constrict another\
    \ target."
  "name": "Constrict"
"source":
- "MM"
- "PotA"
- "TftYP"
- "DIP"
- "SLW"
- "MOT"
- "IDRotF"
- "CM"
- "JttRC"
- "DSotDQ"
- "PaBTSO"
- "LK"
"image": "compendium/bestiary/elemental/token/water-weird.png"
```
^statblock

## Environment

underdark, urban

## Harvester Table
```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```