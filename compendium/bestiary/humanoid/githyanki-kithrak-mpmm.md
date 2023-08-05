---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/gith
statblock: true
statblock-link: "#^statblock"
"name": "Githyanki Kith'rak"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "180"
"hit_dice": "24d8 + 72"
"stats":
- !!int "18"
- !!int "16"
- !!int "17"
- !!int "16"
- !!int "15"
- !!int "17"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "7"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Gith"
"cr": "12"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The githyanki casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\nAt\
    \ will: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)\n\
    \n1/day each: [plane shift](/compendium/spells/plane-shift.md), [telekinesis](/compendium/spells/telekinesis.md)\n\
    \n3/day each: [blur](/compendium/spells/blur.md), [nondetection](/compendium/spells/nondetection.md)\
    \ (self only)"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The githyanki makes three Greatsword attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) slashing damage plus dice: 5d6|avg (5d6)\
    \ psychic damage."
  "name": "Greatsword"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The githyanki teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space it can see."
  "name": "Astral Step (Recharge 4-6)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The githyanki magically ends the [charmed](compendium/rules/conditions.md#charmed)\
    \ and [frightened](compendium/rules/conditions.md#frightened) conditions on itself\
    \ and each creature of its choice that it can see within 30 feet of it."
  "name": "Rally the Troops"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The githyanki adds 4 to its AC against one melee attack that would hit\
    \ it. To do so, the githyanki must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/humanoid/token/githyanki-kithrak.png"
aliases: ["Githyanki Kith'rak"]
---
# Githyanki Kith'rak
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 140, Mordenkainen's Tome of Foes p. 205*  

Militarized githyanki cultures assign ranks and responsibilities to citizens. Groups of ten warriors follow the commands of sarths ([githyanki warriors](/compendium/bestiary/humanoid/githyanki-warrior.md)), while ten sarths obey the commands of a mighty kith'rak. These champions undergo torturous training and psionic testing until they can command the respect of their underlings.

## Githyanki

Githyanki descend from an ancient people who were also the progenitors of githzerai (also in this book). These tall, gaunt folk have potent psionic powers and dwell, for the most part, on the Astral Plane. Among the best-known githyanki are the bellicose followers of the Lich Queen Vlaakith. They terrorize the Astral Plane, raiding into other planes to plunder the multiverse of its magic and riches.

## Stat Block

```ad-statblock
title: Githyanki Kith'rak
![](/compendium/bestiary/humanoid/token/githyanki-kithrak.png#token)
*Medium humanoid(gith), Any alignment*

- **Armor Class** 18 ([plate](/compendium/items/plate-armor.md))
- **Hit Points** `dice: 24d8 + 72|text(180)` (24d8 + 72) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|16 (+3)|17 (+3)|16 (+3)|15 (+2)|17 (+3)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +7, Intelligence +7, Wisdom +6
- **Skills** Intimidation +7, Perception +6
- **Senses** passive Perception 16
- **Languages** Gith
- **Challenge** 12

***Spellcasting (Psionics).*** The githyanki casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 15):

**At will**: [mage hand](/compendium/spells/mage-hand.md) (the hand is invisible)

**1/day each**: [plane shift](/compendium/spells/plane-shift.md), [telekinesis](/compendium/spells/telekinesis.md)

**3/day each**: [blur](/compendium/spells/blur.md), [nondetection](/compendium/spells/nondetection.md) (self only)

## Actions

***Multiattack.*** The githyanki makes three Greatsword attacks.

***Greatsword.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 4|avg` (`2d6 + 4`) slashing damage plus `dice: 5d6|avg` (`5d6`) psychic damage.

## Bonus Actions

***Astral Step (Recharge 4-6).*** The githyanki teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space it can see.

***Rally the Troops.*** The githyanki magically ends the [charmed](compendium/rules/conditions.md#charmed) and [frightened](compendium/rules/conditions.md#frightened) conditions on itself and each creature of its choice that it can see within 30 feet of it.

## Reactions

***Parry.*** The githyanki adds 4 to its AC against one melee attack that would hit it. To do so, the githyanki must see the attacker and be wielding a melee weapon.
```
^statblock

## Environment

desert, mountain, urban