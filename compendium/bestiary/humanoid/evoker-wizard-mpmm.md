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
name: Evoker Wizard
ac: 12
hp: 121
hit_dice: 22d8 + 22
cr: '9'
stats: [
  9,
  14,
  12,
  17,
  12,
  11
]
source: [
  MPMM,
  VGM
]
aliases: ["Evoker Wizard"]
---
# Evoker Wizard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 262, Volo's Guide to Monsters p. 214*  

Evokers harness arcane energy to destroy. Many armies employ evokers to rain destruction down on enemy forces.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

## Stat Block

```ad-statblock
title: Evoker Wizard
![](/compendium/bestiary/humanoid/token/evoker-wizard.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 12 (15 with [mage armor](/compendium/spells/mage-armor.md))
- **Hit Points** `dice: 22d8 + 22|text(121)` (22d8 + 22) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|14 (+2)|12 (+1)|17 (+3)|12 (+1)|11 (+0)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +7, Wisdom +5
- **Skills** Arcana +7, History +7
- **Senses** passive Perception 11
- **Languages** any four languages
- **Challenge** 9

***Spellcasting.*** The evoker casts one of the following spells, using Intelligence as the spellcasting ability (spell save DC 15):

**At will**: [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md), [message](/compendium/spells/message.md), [prestidigitation](/compendium/spells/prestidigitation.md)

**1/day each**: [wall of ice](/compendium/spells/wall-of-ice.md)

**2/day each**: [ice storm](/compendium/spells/ice-storm.md), [lightning bolt](/compendium/spells/lightning-bolt.md), [mage armor](/compendium/spells/mage-armor.md)

## Actions

***Multiattack.*** The evoker makes three Arcane Burst attacks.

***Arcane Burst.*** *Melee or Ranged Spell Attack:* `dice: d20+7` (+7 to hit), reach 5 ft. or range 120 ft., one target. Hit: `dice: 4d10 + 3|avg` (`4d10 + 3`) force damage.

***Sculpted Explosion (Recharge 4-6).*** The evoker unleashes a magical explosion of a particular damage type: cold, fire, lightning, or thunder. The magic erupts in a 20-foot-radius sphere centered on a point within 150 feet of the evoker. Each creature in that area must make a DC 15 Dexterity saving throw. The evoker can select up to three creatures it can see in the area to ignore the spell, as the evoker sculpts the spell's energy around them. On a failed save, a creature takes `dice: 9d8|avg` (`9d8`) damage of the chosen type and is knocked [prone](compendium/rules/conditions.md#prone). On a successful save, a creature takes half as much damage and isn't knocked [prone](compendium/rules/conditions.md#prone).
```
^statblock

## Environment

urban