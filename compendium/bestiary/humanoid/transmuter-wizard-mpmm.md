---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
"name": "Transmuter Wizard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "49"
"hit_dice": "11d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The transmuter casts one of the following spells, using Intelligence as\
    \ the spellcasting ability (spell save DC 14):\n\nAt will: [light](/compendium/spells/light.md),\
    \ [message](/compendium/spells/message.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [telekinesis](/compendium/spells/telekinesis.md)\n\n2/day\
    \ each: [fireball](/compendium/spells/fireball.md), [hold person](/compendium/spells/hold-person.md),\
    \ [knock](/compendium/spells/knock.md), [mage armor](/compendium/spells/mage-armor.md),\
    \ [polymorph](/compendium/spells/polymorph.md), [slow](/compendium/spells/slow.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The transmuter carries a magic stone it crafted. The stone grants it one\
    \ of the following benefits while bearing the stone; the transmuter chooses the\
    \ benefit at the end of each long rest:\n\n- Darkvision. The transmuter has\
    \ [darkvision](compendium/rules/senses.md#darkvision) out to a range of 60 feet.\
    \  \n- Resilience. The transmuter has proficiency in Constitution saving throws.\
    \   \n- Resistance. Resistance. The transmuter has resistance to acid, cold,\
    \ fire, lightning, or thunder damage (transmuter's choice whenever choosing this\
    \ benefit).  \n- Speed. The transmuter's walking speed is increased by 10\
    \ feet.  "
  "name": "Transmuter's Stone"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The transmuter makes three Arcane Burst attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Spell Attack: dice: d20+6 (+6 to hit), reach 5 ft.\
    \ or range 120 ft., one target. Hit: dice: 3d10 + 3|avg (3d10 + 3) acid damage."
  "name": "Arcane Burst"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The transmuter casts [alter self](/compendium/spells/alter-self.md) or\
    \ changes the benefit of Transmuter's Stone if bearing the stone."
  "name": "Transmute (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/humanoid/token/transmuter-wizard.png"
aliases: ["Transmuter Wizard"]
---
# Transmuter Wizard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 265, Volo's Guide to Monsters p. 218*  

Transmuters are masters at transforming physical forms. They typically view magical transmutation as a path to riches, enlightenment, or apotheosis.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Stat Block

```ad-statblock
title: Transmuter Wizard
![](/compendium/bestiary/humanoid/token/transmuter-wizard.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 12 (15 with [mage armor](/compendium/spells/mage-armor.md))
- **Hit Points** `dice: 11d8|text(49)` (11d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|14 (+2)|11 (+0)|17 (+3)|12 (+1)|11 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +6, Wisdom +4
- **Skills** Arcana +6, History +6
- **Senses** passive Perception 11
- **Languages** any four languages
- **Challenge** 5

## Traits

***Transmuter's Stone.*** The transmuter carries a magic stone it crafted. The stone grants it one of the following benefits while bearing the stone; the transmuter chooses the benefit at the end of each long rest:

- **Darkvision.** The transmuter has [darkvision](compendium/rules/senses.md#darkvision) out to a range of 60 feet.  
- **Resilience.** The transmuter has proficiency in Constitution saving throws.   
- **Resistance.** Resistance. The transmuter has resistance to acid, cold, fire, lightning, or thunder damage (transmuter's choice whenever choosing this benefit).  
- **Speed.** The transmuter's walking speed is increased by 10 feet.  

***Spellcasting.*** The transmuter casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 14):

**At will**: [light](/compendium/spells/light.md), [message](/compendium/spells/message.md), [prestidigitation](/compendium/spells/prestidigitation.md)

**1/day each**: [telekinesis](/compendium/spells/telekinesis.md)

**2/day each**: [fireball](/compendium/spells/fireball.md), [hold person](/compendium/spells/hold-person.md), [knock](/compendium/spells/knock.md), [mage armor](/compendium/spells/mage-armor.md), [polymorph](/compendium/spells/polymorph.md), [slow](/compendium/spells/slow.md)

## Actions

***Multiattack.*** The transmuter makes three Arcane Burst attacks.

***Arcane Burst.*** *Melee or Ranged Spell Attack:* `dice: d20+6` (+6 to hit), reach 5 ft. or range 120 ft., one target. Hit: `dice: 3d10 + 3|avg` (`3d10 + 3`) acid damage.

## Bonus Actions

***Transmute (Recharge 4-6).*** The transmuter casts [alter self](/compendium/spells/alter-self.md) or changes the benefit of Transmuter's Stone if bearing the stone.
```
^statblock

## Environment

urban