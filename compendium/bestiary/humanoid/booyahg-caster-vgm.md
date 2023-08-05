---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/underdark
- monster/size/small
- monster/type/humanoid/goblinoid
statblock: true
statblock-link: "#^statblock"
"name": "Booyahg Caster"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "8"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "8"
- !!int "8"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Goblin"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goblin can cast a randomly determined 1st-level wizard spell once per\
    \ day. Intelligence is its spellcasting ability (spell save DC 10, dice: d20+2\
    \ (+2 to hit) with spell attacks)."
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goblin can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 80/320 ft., one\
    \ target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortbow"
"source":
- "VGM"
"image": "/compendium/bestiary/humanoid/token/booyahg-caster.png"
aliases: ["Booyahg Caster"]
---
# Booyahg Caster
*Source: Volo's Guide to Monsters p. 42, Derived from Goblin (MM)*  

This goblin served under a hobgoblin wizard, stole a look at its master's spellbook, and learned a little wizardry by aping the gestures and words it remembered. The goblin can cast a randomly determined 1st-level wizard spell once per day. Intelligence is its spellcasting ability.

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

## Stat Block

```ad-statblock
title: Booyahg Caster
![](/compendium/bestiary/humanoid/token/booyahg-caster.png#token)
*Small humanoid(goblinoid), Neutral Evil*

- **Armor Class** 15 ([leather armor](/compendium/items/leather-armor.md), [shield](/compendium/items/shield.md))
- **Hit Points** `dice: 2d6|text(7)` (2d6) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 8 (-1)|14 (+2)|10 (+0)|10 (+0)| 8 (-1)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +6
- **Senses** darkvision 60 ft., passive Perception 9
- **Languages** Common, Goblin
- **Challenge** 1/4

## Traits

***Nimble Escape.*** The goblin can take the Disengage or Hide action as a bonus action on each of its turns.

***Spellcasting.*** The goblin can cast a randomly determined 1st-level wizard spell once per day. Intelligence is its spellcasting ability (spell save DC 10, `dice: d20+2` (+2 to hit) with spell attacks).

## Actions

***Scimitar.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) slashing damage.

***Shortbow.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 80/320 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.
```
^statblock

## Environment

underdark, grassland, forest, hill