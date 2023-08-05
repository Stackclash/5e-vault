---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: true
statblock-link: "#^statblock"
"name": "Archmage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "; bludgeoning, piercing, slashing (from stoneskin)"
"senses": "passive Perception 12"
"languages": "any six languages"
"cr": "12"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The archmage is an 18th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (spell save DC 17, dice: d20+9 (+9 to hit) with spell attacks).\
    \ The archmage can cast [[/6. Mechanics/Spells/disguise-self.md\|disguise self]] and\
    \ [[/6. Mechanics/Spells/invisibility.md\|invisibility]] at will and has the following\
    \ wizard spells prepared:\n\nAt will: [[/6. Mechanics/Spells/disguise-self.md\|disguise self]],\
    \ [[/6. Mechanics/Spells/invisibility.md\|invisibility]]\n\nCantrips (at will):\
    \ [[/6. Mechanics/Spells/fire-bolt.md\|fire bolt]], [[/6. Mechanics/Spells/light.md\|light]],\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]],\
    \ [[/6. Mechanics/Spells/shocking-grasp.md\|shocking grasp]]\n\n1st level (4 1st-level\
    \ slots): [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/identify.md\|identify]],\
    \ [[/6. Mechanics/Spells/mage-armor.md\|mage armor]], [[/6. Mechanics/Spells/magic-missile.md\|magic missile]]\n\
    \n2nd level (3 2nd-level slots): [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]],\
    \ [[/6. Mechanics/Spells/mirror-image.md\|mirror image]], [[/6. Mechanics/Spells/misty-step.md\|misty step]]\n\
    \n3rd level (3 3rd-level slots): [[/6. Mechanics/Spells/counterspell.md\|counterspell]],\
    \ [[/6. Mechanics/Spells/fly.md\|fly]], [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]]\n\
    \n4th level (3 4th-level slots): [[/6. Mechanics/Spells/banishment.md\|banishment]],\
    \ [[/6. Mechanics/Spells/fire-shield.md\|fire shield]], [[/6. Mechanics/Spells/stoneskin.md\|stoneskin]]\n\
    \n5th level (3 5th-level slots): [[/6. Mechanics/Spells/cone-of-cold.md\|cone of cold]],\
    \ [[/6. Mechanics/Spells/scrying.md\|scrying]], [[/6. Mechanics/Spells/wall-of-force.md\|wall of force]]\n\
    \n6th level (1 6th-level slots): [[/6. Mechanics/Spells/globe-of-invulnerability.md\|globe of invulnerability]]\n\
    \n7th level (1 7th-level slots): [[/6. Mechanics/Spells/teleport.md\|teleport]]\n\
    \n8th level (1 8th-level slots): [[/6. Mechanics/Spells/mind-blank.md\|mind blank]]\n\
    \n9th level (1 9th-level slots): [[/6. Mechanics/Spells/time-stop.md\|time stop]]\n\
    The archmage casts these spells on itself before combat."
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The archmage has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "MM"
- "CoS"
- "SKT"
- "WDH"
- "WDMM"
- "GoS"
- "BGDIA"
- "ERLW"
- "IMR"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "JttRC"
- "LoX"
- "DSotDQ"
- "KftGV"
"image": "/compendium/bestiary/humanoid/token/archmage.png"
aliases: ["Archmage"]
---
# Archmage
*Source: Monster Manual p. 342, Curse of Strahd, Storm King's Thunder, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Journeys through the Radiant Citadel, Light of Xaryxis, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

Archmages are powerful (and usually quite old) spellcasters dedicated to the study of the arcane arts. Benevolent ones counsel kings and queens, while evil ones rule as tyrants and pursue lichdom. Those who are neither good nor evil sequester themselves in remote towers to practice their magic without interruption.

An archmage typically has one or more apprentice mages, and an archmage's abode has numerous magical wards and guardians to discourage interlopers.

```ad-statblock
title: Archmage
![[/6. Mechanics/Bestiary/Humanoid/Token/archmage.png#token]]
*Medium humanoid(any race), Any alignment*

- **Armor Class** 12 (15 with [[/6. Mechanics/Spells/mage-armor.md\|mage armor]])
- **Hit Points** `dice: 18d8 + 18|text(99)` (18d8 + 18) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|14 (+2)|12 (+1)|20 (+5)|15 (+2)|16 (+3)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +9, Wisdom +6
- **Skills** Arcana +13, History +13
- **Senses** passive Perception 12
- **Damage Resistances** ; bludgeoning, piercing, slashing (from stoneskin)
- **Languages** any six languages
- **Challenge** 12

## Traits

***Magic Resistance.*** The archmage has advantage on saving throws against spells and other magical effects.

***Spellcasting.*** The archmage is an 18th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, `dice: d20+9` (+9 to hit) with spell attacks). The archmage can cast [[/6. Mechanics/Spells/disguise-self.md\|disguise self]] and [[/6. Mechanics/Spells/invisibility.md\|invisibility]] at will and has the following wizard spells prepared:

**At will**: [[/6. Mechanics/Spells/disguise-self.md\|disguise self]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]]

**Cantrips (at will)**: [[/6. Mechanics/Spells/fire-bolt.md\|fire bolt]], [[/6. Mechanics/Spells/light.md\|light]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]], [[/6. Mechanics/Spells/shocking-grasp.md\|shocking grasp]]

**1st level (4 1st-level slots)**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/identify.md\|identify]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]]*, [[/6. Mechanics/Spells/magic-missile.md\|magic missile]]

**2nd level (3 2nd-level slots)**: [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/mirror-image.md\|mirror image]], [[/6. Mechanics/Spells/misty-step.md\|misty step]]

**3rd level (3 3rd-level slots)**: [[/6. Mechanics/Spells/counterspell.md\|counterspell]], [[/6. Mechanics/Spells/fly.md\|fly]], [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]]

**4th level (3 4th-level slots)**: [[/6. Mechanics/Spells/banishment.md\|banishment]], [[/6. Mechanics/Spells/fire-shield.md\|fire shield]], [[/6. Mechanics/Spells/stoneskin.md\|stoneskin]]*

**5th level (3 5th-level slots)**: [[/6. Mechanics/Spells/cone-of-cold.md\|cone of cold]], [[/6. Mechanics/Spells/scrying.md\|scrying]], [[/6. Mechanics/Spells/wall-of-force.md\|wall of force]]

**6th level (1 6th-level slots)**: [[/6. Mechanics/Spells/globe-of-invulnerability.md\|globe of invulnerability]]

**7th level (1 7th-level slots)**: [[/6. Mechanics/Spells/teleport.md\|teleport]]

**8th level (1 8th-level slots)**: [[/6. Mechanics/Spells/mind-blank.md\|mind blank]]*

**9th level (1 9th-level slots)**: [[/6. Mechanics/Spells/time-stop.md\|time stop]]
*The archmage casts these spells on itself before combat.

## Actions

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) piercing damage.
```
^statblock

## Environment

urban