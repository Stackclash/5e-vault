---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/tiny
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Gremishka
ac: 12
hp: 10
hit_dice: 4d4
cr: 1/8
stats: [
  6,
  14,
  10,
  12,
  11,
  4
]
source: [
  VRGR
]
aliases: ["Gremishka"]
---
# Gremishka
*Source: Van Richten's Guide to Ravenloft p. 235*  

Gremishkas are the vicious products of mistakes made by novice spellcasters seeking to create life. The results are cat-sized, magically unstable creatures with a taste for the trappings of magic—particularly spellbooks, spell components, familiars, and the like. Gremishkas delight in tormenting magic-users, holding vicious grudges against those who gave them life as they infest the walls of spellcasters' homes or the surrounding lands.

Despite their feral appearances, gremishkas are cunning creatures. They might imitate the sounds of whimpering children or wounded animals to coax victims into tight quarters. While they favor attacking spellcasters, gremishkas are opportunistic hunters and lash out at anything they think they can overwhelm—or just get a bite of.

Gremishkas have an unstable relationship with magic. Spells cast near a gremishka might rebound onto those nearby or cause the monster to explode, its scaly chunks rapidly reforming into duplicate gremishkas. These spontaneously created swarms can rapidly turn a single annoying gremishka into a chittering, magic-reflecting wave of teeth and claws.

```ad-statblock
title: Gremishka
![](/compendium/bestiary/monstrosity/token/gremishka.png#token)
*Tiny monstrosity, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 4d4|text(10)` (4d4) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|14 (+2)|10 (+0)|12 (+1)|11 (+0)| 4 (-3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 30 ft., passive Perception 10
- **Languages** understands Common but can't speak
- **Challenge** 1/8

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage plus `dice: 1d6|avg` (`1d6`) force damage.

## Reactions

***Magic Allergy (1/Day).*** Immediately after a creature within 30 feet of the gremishka casts a spell, the gremishka can spontaneously react to the magic. Roll a `dice: d6|avg` (`d6`) to determine the effect:

**1-2.** The gremishka emanates magical energy. Each creature within 30 feet of the gremishka must succeed on a DC 10 Constitution saving throw or take `dice: 1d6|avg` (`1d6`) force damage.

**3-4.** The gremishka surges with magical energy and regains 3 (`dice: 1d6|avg` (`1d6`)) hit points.

**5-6.** The gremishka explodes and dies, and one swarm of gremishkas instantly appears in the space where this gremishka died. The swarm uses the gremishka's initiative.
```
^statblock