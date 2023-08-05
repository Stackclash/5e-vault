---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/swamp
- monster/size/medium
- monster/type/plant
statblock: true
statblock-link: "#^statblock"
"name": "Thorny Vegepygmy"
"size": "Medium"
"type": "plant"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "13"
- !!int "12"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "6"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "4"
"damage_resistances": "lightning, piercing"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The thorny has advantage on Dexterity ([[6. Mechanics/Rules/skills.md#Stealth\|Stealth]])\
    \ checks it makes in any terrain with ample obscuring vegetation."
  "name": "Plant Camouflage"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The thorny regains 5 hit points at the start of its turn. If it takes cold,\
    \ fire, or necrotic damage, this trait doesn't function at the start of the thorny's\
    \ next turn. The thorny dies only if it starts its turn with 0 hit points and\
    \ doesn't regenerate."
  "name": "Regeneration"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "At the start of its turn, the thorny deals 2 (dice: 1d4|avg (1d4))\
    \ piercing damage to any creature grappling it."
  "name": "Thorny Body"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 1|avg (2d8 + 1) piercing damage."
  "name": "Bite"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/plant/token/thorny-vegepygmy.png"
aliases: ["Thorny Vegepygmy"]
---
# Thorny Vegepygmy
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 253, Volo's Guide to Monsters p. 197*  

If a Beast such as a dog or a bear dies from russet mold, the result is a bestial moldy called a thorny, instead of a bipedal vegepygmy. Thornies are less intelligent than other vegepygmies, but they are larger and more ferocious and have thorn-covered bodies.

## Vegepygmies

Vegepygmies are fungus creatures that live in simple bands, hunting for sustenance and spreading the spores by which they reproduce. Also called mold folk or moldies, vegepygmies inhabit dark, moist areas, so they're most commonly found underground or in forests where little sunlight penetrates. A vegepygmy feels kinship with other plant and fungus creatures, and thus vegepygmy bands coexist well with creatures such as [[/6. Mechanics/Bestiary/Plant/Myconid Adult.md\|myconid adults]], [[/6. Mechanics/Bestiary/Plant/Shrieker.md\|shriekers]], and [[/6. Mechanics/Bestiary/Plant/violet-fungus.md\|violet fungi]].

Although they prefer to eat fresh meat, bone, and blood, vegepygmies can absorb nutrients from soil and many sorts of organic matter, so they rarely go hungry. A vegepygmy can hiss and make other noises by forcing air through its mouth, but it can't speak in a conventional sense. Among themselves, vegepygmies communicate by hissing, gestures, and tapping. Vegepygmies build and craft little; any gear they have is acquired from other creatures or built by copying simple construction they have witnessed.

## Stat Block

```ad-statblock
title: Thorny Vegepygmy
![[/6. Mechanics/Bestiary/Plant/Token/thorny-vegepygmy.png#token]]
*Medium plant, Neutral*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 5d8 + 5|text(27)` (5d8 + 5) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)|12 (+1)|13 (+1)| 2 (-4)|10 (+0)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +4, Stealth +3
- **Senses** darkvision 60 ft., passive Perception 14
- **Damage Resistances** lightning, piercing
- **Languages** —
- **Challenge** 1

## Traits

***Plant Camouflage.*** The thorny has advantage on Dexterity ([[6. Mechanics/Rules/skills.md#Stealth\|Stealth]]) checks it makes in any terrain with ample obscuring vegetation.

***Regeneration.*** The thorny regains 5 hit points at the start of its turn. If it takes cold, fire, or necrotic damage, this trait doesn't function at the start of the thorny's next turn. The thorny dies only if it starts its turn with 0 hit points and doesn't regenerate.

***Thorny Body.*** At the start of its turn, the thorny deals 2 (`dice: 1d4` (`1d4`)) piercing damage to any creature grappling it.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 1` (`2d8 + 1`) piercing damage.
```
^statblock

## Environment

forest, swamp