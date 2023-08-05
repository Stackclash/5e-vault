---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/arctic
- monster/environment/forest
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
"name": "Warlock of the Archfey"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "13"
"hp": !!int "67"
"hit_dice": "15d8"
"stats":
- !!int "9"
- !!int "16"
- !!int "11"
- !!int "11"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Nature": !!int "2"
  "Deception": !!int "6"
  "Arcana": !!int "2"
  "Persuasion": !!int "6"
"condition_immunities": "charmed"
"senses": "passive Perception 11"
"languages": "any two languages (usually Sylvan)"
"cr": "4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlock casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 14): \n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [disguise self](/compendium/spells/disguise-self.md), [mage armor](/compendium/spells/mage-armor.md)\
    \ (self only), [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md), [speak with animals](/compendium/spells/speak-with-animals.md)\n\
    \n1/day each: [charm person](/compendium/spells/charm-person.md), [dimension\
    \ door](/compendium/spells/dimension-door.md), [hold monster](/compendium/spells/hold-monster.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlock makes two Rapier attacks, or it uses Bewildering Word twice."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) piercing damage plus dice: 2d6|avg (2d6)\
    \ piercing damage."
  "name": "Rapier"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The warlock utters a magical bewilderment, targeting one creature it can\
    \ see within 60 feet of it. The target must succeed on a DC 14 Wisdom saving throw\
    \ or take dice: 2d8|avg (2d8) psychic damage and have disadvantage on attack\
    \ rolls until the end of the warlock's next turn."
  "name": "Bewildering Word"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "In response to taking damage, the warlock turns [invisible](compendium/rules/conditions.md#invisible)\
    \ and teleports, along with any equipment it is wearing or carrying, up to 60\
    \ feet to an unoccupied space it can see. It remains [invisible](compendium/rules/conditions.md#invisible)\
    \ until the start of its next turn or until it attacks, makes a damage roll, or\
    \ casts a spell."
  "name": "Misty Escape (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/humanoid/token/warlock-of-the-archfey.png"
aliases: ["Warlock of the Archfey"]
---
# Warlock of the Archfey
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 255, Volo's Guide to Monsters p. 219*  

Warlocks of the Archfey gain their powers through magical pacts forged with lords of the Feywild. These warlocks commonly associate with lesser Fey creatures such as [boggles](/compendium/bestiary/fey/boggle-mpmm.md), [quicklings](/compendium/bestiary/fey/quickling-mpmm.md), and [redcaps](/compendium/bestiary/fey/redcap-mpmm.md) (all appear in "this book") or even [satyrs](/compendium/bestiary/fey/satyr.md) and [sprites](/compendium/bestiary/fey/sprite.md).

## Warlocks

Warlocks gain arcane might through magical pacts with mysterious entities. While some use their abilities to serve the sources of their power, others use them to undermine or even destroy these entities.

## Stat Block

```ad-statblock
title: Warlock of the Archfey
![](/compendium/bestiary/humanoid/token/warlock-of-the-archfey.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 13 (16 with [mage armor](/compendium/spells/mage-armor.md))
- **Hit Points** `dice: 15d8|text(67)` (15d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|16 (+3)|11 (+0)|11 (+0)|12 (+1)|18 (+4)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +3, Charisma +6
- **Skills** Arcana +2, Deception +6, Nature +2, Persuasion +6
- **Senses** passive Perception 11
- **Condition Immunities** charmed
- **Languages** any two languages (usually Sylvan)
- **Challenge** 4

***Spellcasting.*** The warlock casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 14): 

**At will**: [dancing lights](/compendium/spells/dancing-lights.md), [disguise self](/compendium/spells/disguise-self.md), [mage armor](/compendium/spells/mage-armor.md) (self only), [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md), [prestidigitation](/compendium/spells/prestidigitation.md), [speak with animals](/compendium/spells/speak-with-animals.md)

**1/day each**: [charm person](/compendium/spells/charm-person.md), [dimension door](/compendium/spells/dimension-door.md), [hold monster](/compendium/spells/hold-monster.md)

## Actions

***Multiattack.*** The warlock makes two Rapier attacks, or it uses Bewildering Word twice.

***Rapier.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3|avg` (`1d8 + 3`) piercing damage plus `dice: 2d6|avg` (`2d6`) piercing damage.

***Bewildering Word.*** The warlock utters a magical bewilderment, targeting one creature it can see within 60 feet of it. The target must succeed on a DC 14 Wisdom saving throw or take `dice: 2d8|avg` (`2d8`) psychic damage and have disadvantage on attack rolls until the end of the warlock's next turn.

## Reactions

***Misty Escape (Recharges after a Short or Long Rest).*** In response to taking damage, the warlock turns [invisible](compendium/rules/conditions.md#invisible) and teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see. It remains [invisible](compendium/rules/conditions.md#invisible) until the start of its next turn or until it attacks, makes a damage roll, or casts a spell.
```
^statblock

## Environment

arctic, forest, mountain, swamp, urban