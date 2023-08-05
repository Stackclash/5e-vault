---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/environment/urban
- monster/size/large
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
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
"speed": "walk 0 ft., swim 60 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "exhaustion, grappled, paralyzed, poisoned, restrained, prone,\
  \ unconscious"
"senses": "blindsight 30 ft., passive Perception 10"
"languages": "understands Aquan but doesn't speak"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The water weird is [invisible](compendium/rules/conditions.md#invisible)\
    \ while fully immersed in water."
  "name": "Invisible in Water"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The water weird dies if it leaves the water to which it is bound or if\
    \ that water is destroyed."
  "name": "Water Bound"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 3d6 + 3|avg (3d6 + 3) bludgeoning damage. If the target is Medium\
    \ or smaller, it is [grappled](compendium/rules/conditions.md#grappled) (escape\
    \ DC 13) and pulled 5 feet toward the water weird. Until this grapple ends, the\
    \ target is [restrained](compendium/rules/conditions.md#restrained), the water\
    \ weird tries to drown it, and the water weird can't constrict another target."
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
"image": "/compendium/bestiary/elemental/token/water-weird.png"
aliases: ["Water Weird"]
---
# Water Weird
*Source: Monster Manual p. 299, Princes of the Apocalypse, Tales from the Yawning Portal, Dragon of Icespire Peak, Storm Lord's Wrath, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Journeys through the Radiant Citadel, Dragonlance: Shadow of the Dragon Queen*  

A water weird is an elemental guardian bound to a specific water-filled location, such as a pool or fountain.

Invisible while immersed in water, its serpentine shape becomes clear only when it emerges to attack, using its coils to crush any creature other than its summoner and those its summoner declares as off limits. When slain, a water weird becomes an inanimate pool of water.

## Good and Evil Weirds

Like most elementals, a water weird has no concept of good or evil. However, a water weird bound to a sacred or befouled source of water begins to take on the nature of that site, becoming neutral good or neutral evil.

A neutral good water weird tries to frighten away interlopers rather than kill them, while a neutral evil water weird kills its victims for pleasure and might turn against its summoner. A water weird loses its evil alignment if its waters are cleansed with a [purify food and drink](/compendium/spells/purify-food-and-drink.md) spell.

## Elemental Nature

A water weird doesn't require air, food, drink, or sleep.

> [!quote]- A quote from X the Mystic's 2nd rule of dungeon survival  
> 
> Before you drink from a fountain or pool, toss a copper coin into it. It's a small price to pay for your life.


## Stat Block

```ad-statblock
title: Water Weird
![](/compendium/bestiary/elemental/token/water-weird.png#token)
*Large elemental, Neutral*

- **Armor Class** 13 
- **Hit Points** `dice: 9d10 + 9|text(58)` (9d10 + 9) 
- **Speed** walk 0 ft., swim 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|16 (+3)|13 (+1)|11 (+0)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 30 ft., passive Perception 10
- **Damage Resistances** fire; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** exhaustion, grappled, paralyzed, poisoned, restrained, prone, unconscious
- **Languages** understands Aquan but doesn't speak
- **Challenge** 3

## Traits

***Invisible in Water.*** The water weird is [invisible](compendium/rules/conditions.md#invisible) while fully immersed in water.

***Water Bound.*** The water weird dies if it leaves the water to which it is bound or if that water is destroyed.

## Actions

***Constrict.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 10 ft., one creature. Hit: `dice: 3d6 + 3|avg` (`3d6 + 3`) bludgeoning damage. If the target is Medium or smaller, it is [grappled](compendium/rules/conditions.md#grappled) (escape DC 13) and pulled 5 feet toward the water weird. Until this grapple ends, the target is [restrained](compendium/rules/conditions.md#restrained), the water weird tries to drown it, and the water weird can't constrict another target.
```
^statblock

## Environment

underdark, urban