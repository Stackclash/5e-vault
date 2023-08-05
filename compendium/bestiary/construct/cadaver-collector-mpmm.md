---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/grassland
- monster/size/large
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
"name": "Cadaver Collector"
"size": "Large"
"type": "construct"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "21"
- !!int "14"
- !!int "20"
- !!int "5"
- !!int "11"
- !!int "8"
"speed": "walk 30 ft."
"damage_immunities": "necrotic; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands all languages but can't speak"
"cr": "14"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The collector has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The collector doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The collector makes two Slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d8 + 5|avg (3d8 + 5) bludgeoning damage plus dice: 3d10|avg\
    \ (3d10) necrotic damage."
  "name": "Slam"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The collector releases paralyzing gas in a 30-foot cone. Each creature\
    \ in that area must make a successful DC 18 Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed)\
    \ for 1 minute. A [paralyzed](compendium/rules/conditions.md#paralyzed) creature\
    \ repeats the saving throw at the end of each of its turns, ending the effect\
    \ on itself with a success."
  "name": "Paralyzing Breath (Recharge 5-6)"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The collector calls up the enslaved spirits of those it has slain; dice:\
    \ 1d4|avg (1d4) [specters](/compendium/bestiary/undead/specter.md) (without\
    \ Sunlight Sensitivity) arise in unoccupied spaces within 15 feet of it. The specters\
    \ act right after the collector on the same initiative count and fight until they're\
    \ destroyed. They disappear when the collector is destroyed."
  "name": "Summon Specters (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/construct/token/cadaver-collector.png"
aliases: ["Cadaver Collector"]
---
# Cadaver Collector
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 68, Mordenkainen's Tome of Foes p. 122*  

The ancient war machines known as cadaver collectors lumber aimlessly across the blasted plains of Acheron until they are called upon by a necromancer to bolster the ranks of a conquering army on the Material Plane. These fearsome Constructs obey their summoners until they are dismissed back to Acheron, but if a summoner comes to a bad end, a cadaver collector might wander the Material Plane for centuries, collecting corpses while searching for a way to return home.

Cadaver collectors respond to a summons from a mortal only when they are called to the scene of a great battle—either where one is in progress, where one is imminent, or where one once took place. They encase themselves in the armor and weapons of fallen warriors and impale the corpses of those warriors on the lances and other weapons embedded in their salvaged armor.

Corpses that accumulate on a cadaver collector's shell aren't just grisly battle trophies. A cadaver collector can summon the spirits of these cadavers to battle against its enemies. Although these specters are individually weak, a cadaver collector can call up an almost endless supply of them, if given enough time.

```ad-statblock
title: Cadaver Collector
![](/compendium/bestiary/construct/token/cadaver-collector.png#token)
*Large construct, Lawful Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 18d10 + 90|text(189)` (18d10 + 90) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|21 (+5)|14 (+2)|20 (+5)| 5 (-3)|11 (+0)| 8 (-1)|

- **Proficiency Bonus** +5
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** necrotic; poison; psychic; bludgeoning, piercing, slashing from nonmagical attacks that aren't adamantine
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, petrified, poisoned
- **Languages** understands all languages but can't speak
- **Challenge** 14

## Traits

***Magic Resistance.*** The collector has advantage on saving throws against spells and other magical effects.

***Unusual Nature.*** The collector doesn't require air, food, drink, or sleep.

## Actions

***Multiattack.*** The collector makes two Slam attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one target. Hit: `dice: 3d8 + 5|avg` (`3d8 + 5`) bludgeoning damage plus `dice: 3d10|avg` (`3d10`) necrotic damage.

***Paralyzing Breath (Recharge 5-6).*** The collector releases paralyzing gas in a 30-foot cone. Each creature in that area must make a successful DC 18 Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed) for 1 minute. A [paralyzed](compendium/rules/conditions.md#paralyzed) creature repeats the saving throw at the end of each of its turns, ending the effect on itself with a success.

## Bonus Actions

***Summon Specters (Recharges after a Short or Long Rest).*** The collector calls up the enslaved spirits of those it has slain; `dice: 1d4|avg` (`1d4`) [specters](/compendium/bestiary/undead/specter.md) (without Sunlight Sensitivity) arise in unoccupied spaces within 15 feet of it. The specters act right after the collector on the same initiative count and fight until they're destroyed. They disappear when the collector is destroyed.
```
^statblock

## Environment

grassland