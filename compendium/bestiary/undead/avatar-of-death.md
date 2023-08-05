---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/dmg
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
"name": "Avatar of Death"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
"speed": "walk 60 ft., fly 60 ft. (hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned, unconscious"
"senses": "darkvision 60 ft., truesight 60 ft., passive Perception 13"
"languages": "all languages known to its summoner"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The avatar can move through other creatures and objects as if they were\
    \ difficult terrain. It takes dice: 1d10|avg (1d10) force damage if it ends\
    \ its turn inside an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The avatar is immune to features that turn undead."
  "name": "Turn Immunity"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The avatar sweeps its spectral scythe through a creature within 5 feet\
    \ of it, dealing 7 (dice: 1d8 + 3|avg (1d8 + 3)) slashing damage plus dice:\
    \ 1d8|avg (1d8) necrotic damage."
  "name": "Reaping Scythe"
"source":
- "DMG"
- "TCE"
"image": "/compendium/bestiary/undead/token/avatar-of-death.png"
aliases: ["Avatar of Death"]
---
# Avatar of Death
*Source: Dungeon Master's Guide p. 164, Tasha's Cauldron of Everything*  

Summoned by the "Skull" card from the [Deck of Many Things](/compendium/items/deck-of-many-things.md).

```ad-statblock
title: Avatar of Death
![](/compendium/bestiary/undead/token/avatar-of-death.png#token)
*Medium undead, Neutral Evil*

- **Armor Class** 20 
- **Hit Points** null  (half the hit point maximum of its summoner)
- **Speed** walk 60 ft., fly 60 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|16 (+3)|16 (+3)|16 (+3)|16 (+3)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., truesight 60 ft., passive Perception 13
- **Damage Immunities** necrotic, poison
- **Condition Immunities** charmed, frightened, paralyzed, petrified, poisoned, unconscious
- **Languages** all languages known to its summoner
- **Challenge** 

## Traits

***Incorporeal Movement.*** The avatar can move through other creatures and objects as if they were difficult terrain. It takes `dice: 1d10|avg` (`1d10`) force damage if it ends its turn inside an object.

***Turn Immunity.*** The avatar is immune to features that turn undead.

## Actions

***Reaping Scythe.*** The avatar sweeps its spectral scythe through a creature within 5 feet of it, dealing 7 (`dice: 1d8 + 3|avg` (`1d8 + 3`)) slashing damage plus `dice: 1d8|avg` (`1d8`) necrotic damage.
```
^statblock