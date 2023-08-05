---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/urban
- monster/size/medium
- monster/type/fiend/devil
- monster/type/fiend/wizard
statblock: true
statblock-link: "#^statblock"
"name": "Blue Abishai"
"size": "Medium"
"type": "fiend"
"subtype": "devil, wizard"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "202"
"hit_dice": "27d8 + 81"
"stats":
- !!int "15"
- !!int "14"
- !!int "17"
- !!int "22"
- !!int "23"
- !!int "18"
"speed": "walk 30 ft., fly 50 ft."
"saves":
  "Wisdom": !!int "12"
  "Intelligence": !!int "12"
"skillsaves":
  "Arcana": !!int "12"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, lightning, poison"
"condition_immunities": "poisoned"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "17"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The abishai casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 20):\n\nAt will: [disguise self](/compendium/spells/disguise-self.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)\n\
    \n2/day each: [charm person](/compendium/spells/charm-person.md), [dispel\
    \ magic](/compendium/spells/dispel-magic.md), [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [wall of force](/compendium/spells/wall-of-force.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Magical darkness doesn't impede the abishai's [darkvision](compendium/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The abishai has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The abishai makes three Bite or Lightning Strike attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d10 + 2|avg (2d10 + 2) piercing damage plus dice: 4d6|avg\
    \ (4d6) lightning damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+12 (+12 to hit), range 120 ft., one\
    \ target. Hit: dice: 8d8|avg (8d8) lightning damage."
  "name": "Lightning Strike"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The abishai teleports, along with any equipment it is wearing or carrying,\
    \ up to 30 feet to an unoccupied space that it can see."
  "name": "Teleport"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/fiend/token/blue-abishai.png"
aliases: ["Blue Abishai"]
---
# Blue Abishai
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 39, Mordenkainen's Tome of Foes p. 161*  

Seekers of forgotten lore and lost relics, blue abishais are the most cunning and learned of their kind. Their research into occult subjects gleaned from tomes plundered from across the multiverse enables them to become accomplished spellcasters. They use their magic to devastate Tiamat's enemies.

## Abishais

Each abishai was once a mortal who somehow won Tiamat's favor before death and, as a reward, found its soul transformed into a draconic devil to serve at her pleasure in the Nine Hells. Each type of abishai is associated with one of Tiamat's five dragon heads: black, blue, green, red, and white.

Tiamat deploys abishais as her agents, sending them forth to represent her interests in the Hells and across the multiverse. Some have simple tasks, such as delivering a message to cultists. Others have greater responsibilities, such as leading large groups, assassinating targets, and serving in armies. In all cases, abishais are fanatically loyal to Tiamat, ready to lay down their lives if needed.

Abishais stand outside the normal hierarchy of the Nine Hells, having their own chain of command and ultimately answering to Tiamat (and Asmodeus, when he chooses to use them). Other archdevils can command abishais to work for them, but most archdevils do so rarely, since it is never clear whether an abishai follows Tiamat's orders or Asmodeus's. There is inherent risk in countermanding an order given by Tiamat, but interfering with Asmodeus's plans invites certain destruction.

## Stat Block

```ad-statblock
title: Blue Abishai
![](/compendium/bestiary/fiend/token/blue-abishai.png#token)
*Medium fiend(devil, wizard), Lawful Evil*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 27d8 + 81|text(202)` (27d8 + 81) 
- **Speed** walk 30 ft., fly 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|14 (+2)|17 (+3)|22 (+6)|23 (+6)|18 (+4)|

- **Proficiency Bonus** +6
- **Saving Throws** Intelligence +12, Wisdom +12
- **Skills** Arcana +12
- **Senses** darkvision 120 ft., passive Perception 16
- **Damage Resistances** cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** fire, lightning, poison
- **Condition Immunities** poisoned
- **Languages** Draconic, Infernal, telepathy 120 ft.
- **Challenge** 17

## Traits

***Devil's Sight.*** Magical darkness doesn't impede the abishai's [darkvision](compendium/rules/senses.md#darkvision).

***Magic Resistance.*** The abishai has advantage on saving throws against spells and other magical effects.

***Spellcasting.*** The abishai casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 20):

**At will**: [disguise self](/compendium/spells/disguise-self.md), [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)

**2/day each**: [charm person](/compendium/spells/charm-person.md), [dispel magic](/compendium/spells/dispel-magic.md), [greater invisibility](/compendium/spells/greater-invisibility.md), [wall of force](/compendium/spells/wall-of-force.md)

## Actions

***Multiattack.*** The abishai makes three Bite or Lightning Strike attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 2d10 + 2|avg` (`2d10 + 2`) piercing damage plus `dice: 4d6|avg` (`4d6`) lightning damage.

***Lightning Strike.*** *Ranged Spell Attack:* `dice: d20+12` (+12 to hit), range 120 ft., one target. Hit: `dice: 8d8|avg` (`8d8`) lightning damage.

## Bonus Actions

***Teleport.*** The abishai teleports, along with any equipment it is wearing or carrying, up to 30 feet to an unoccupied space that it can see.
```
^statblock

## Environment

coastal, urban