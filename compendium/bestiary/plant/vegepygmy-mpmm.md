---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/swamp
- monster/size/small
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
"name": "Vegepygmy"
"size": "Small"
"type": "plant"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "7"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "11"
- !!int "7"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "lightning, piercing"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Vegepygmy"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vegepygmy has advantage on Dexterity ([Stealth](compendium/rules/skills.md#Stealth))\
    \ checks it makes in any terrain with ample obscuring vegetation."
  "name": "Plant Camouflage"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vegepygmy regains 3 hit points at the start of its turn. If it takes\
    \ cold, fire, or necrotic damage, this trait doesn't function at the start of\
    \ the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with\
    \ 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) slashing damage."
  "name": "Claws"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d4 + 2|avg (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/plant/token/vegepygmy.png"
aliases: ["Vegepygmy"]
---
# Vegepygmy
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 252, Volo's Guide to Monsters p. 196*  

Typical vegepygmies originate from the remains left behind when a Humanoid or a Giant is killed by russet mold. One or more vegepygmies emerge from the corpse a day later.

## Vegepygmies

Vegepygmies are fungus creatures that live in simple bands, hunting for sustenance and spreading the spores by which they reproduce. Also called mold folk or moldies, vegepygmies inhabit dark, moist areas, so they're most commonly found underground or in forests where little sunlight penetrates. A vegepygmy feels kinship with other plant and fungus creatures, and thus vegepygmy bands coexist well with creatures such as [myconid adults](/compendium/bestiary/plant/myconid-adult.md), [shriekers](/compendium/bestiary/plant/shrieker.md), and [violet fungi](/compendium/bestiary/plant/violet-fungus.md).

Although they prefer to eat fresh meat, bone, and blood, vegepygmies can absorb nutrients from soil and many sorts of organic matter, so they rarely go hungry. A vegepygmy can hiss and make other noises by forcing air through its mouth, but it can't speak in a conventional sense. Among themselves, vegepygmies communicate by hissing, gestures, and tapping. Vegepygmies build and craft little; any gear they have is acquired from other creatures or built by copying simple construction they have witnessed.

## Stat Block

```ad-statblock
title: Vegepygmy
![](/compendium/bestiary/plant/token/vegepygmy.png#token)
*Small plant, Neutral*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 3d6 + 3|text(13)` (3d6 + 3) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|14 (+2)|13 (+1)| 6 (-2)|11 (+0)| 7 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 12
- **Damage Resistances** lightning, piercing
- **Languages** Vegepygmy
- **Challenge** 1/4

## Traits

***Plant Camouflage.*** The vegepygmy has advantage on Dexterity ([Stealth](compendium/rules/skills.md#Stealth)) checks it makes in any terrain with ample obscuring vegetation.

***Regeneration.*** The vegepygmy regains 3 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with 0 hit points and doesn't regenerate.

## Actions

***Claws.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) slashing damage.

***Sling.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 30/120 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) bludgeoning damage.
```
^statblock

## Environment

forest, swamp