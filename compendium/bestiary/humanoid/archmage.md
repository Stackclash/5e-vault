---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/12
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Archmage"]
---
# [Archmage](compendium/bestiary/humanoid/archmage.md)
*Source: Monster Manual p. 342, Curse of Strahd, Eberron: Rising from the Last War. Available in the SRD.*

Archmages are powerful (and usually quite old) spellcasters dedicated to the study of the arcane arts. Benevolent ones counsel kings and queens, while evil ones rule as tyrants and pursue lichdom. Those who are neither good nor evil sequester themselves in remote towers to practice their magic without interruption.

An archmage typically has one or more apprentice mages, and an archmage's abode has numerous magical wards and guardians to discourage interlopers.

```statblock
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
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "damage from spells; nonmagical bludgeoning, piercing, slashing\
  \ (from stoneskin)"
"senses": "passive Perception 12"
"languages": "any six languages"
"cr": "12"
"traits":
- "desc": "The archmage is an 18th-level spellcaster. Its spellcasting ability is\
    \ Intelligence (spell save DC 17, dice: d20+9 (+9 to hit) with spell attacks).\
    \ The archmage can cast [disguise self](compendium/spells/disguise-self.md) and\
    \ [invisibility](compendium/spells/invisibility.md) at will and has the following\
    \ wizard spells prepared:\n\nAt will: [disguise self](compendium/spells/disguise-self.md),\
    \ [invisibility](compendium/spells/invisibility.md)\n\nCantrips (at will):\
    \ [fire bolt](compendium/spells/fire-bolt.md), [light](compendium/spells/light.md),\
    \ [mage hand](compendium/spells/mage-hand.md), [prestidigitation](compendium/spells/prestidigitation.md),\
    \ [shocking grasp](compendium/spells/shocking-grasp.md)\n\n1st level (4 slots):\
    \ [detect magic](compendium/spells/detect-magic.md), [identify](compendium/spells/identify.md),\
    \ [mage armor](compendium/spells/mage-armor.md), [magic missile](compendium/spells/magic-missile.md)\n\
    \n2nd level (3 slots): [detect thoughts](compendium/spells/detect-thoughts.md),\
    \ [mirror image](compendium/spells/mirror-image.md), [misty step](compendium/spells/misty-step.md)\n\
    \n3rd level (3 slots): [counterspell](compendium/spells/counterspell.md),\
    \ [fly](compendium/spells/fly.md), [lightning bolt](compendium/spells/lightning-bolt.md)\n\
    \n4th level (3 slots): [banishment](compendium/spells/banishment.md), [fire\
    \ shield](compendium/spells/fire-shield.md), [stoneskin](compendium/spells/stoneskin.md)\n\
    \n5th level (3 slots): [cone of cold](compendium/spells/cone-of-cold.md),\
    \ [scrying](compendium/spells/scrying.md), [wall of force](compendium/spells/wall-of-force.md)\n\
    \n6th level (1 slots): [globe of invulnerability](compendium/spells/globe-of-invulnerability.md)\n\
    \n7th level (1 slots): [teleport](compendium/spells/teleport.md)\n\n8th\
    \ level (1 slots): [mind blank](compendium/spells/mind-blank.md)\n\n9th level\
    \ (1 slots): [time stop](compendium/spells/time-stop.md)\n\nThe archmage casts\
    \ these spells on itself before combat."
  "name": "spells"
- "desc": "The archmage has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft.\
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
- "SatO"
- "ToFW"
- "BMT"
- "GHLoE"
- "DoDk"
"image": "compendium/bestiary/humanoid/token/archmage.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```