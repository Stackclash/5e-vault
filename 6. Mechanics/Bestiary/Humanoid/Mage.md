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
"name": "Mage"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
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
"cr": "6"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). The mage has\
    \ the following wizard spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/fire-bolt.md\|fire bolt]],\
    \ [[/6. Mechanics/Spells/light.md\|light]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]],\
    \ [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]\n\n1st level (4\
    \ 1st-level slots): [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [mage\
    \ armor](/compendium/spells/mage-armor.md), [[/6. Mechanics/Spells/magic-missile.md\|magic missile]],\
    \ [[/6. Mechanics/Spells/shield.md\|shield]]\n\n2nd level (3 2nd-level slots):\
    \ [[/6. Mechanics/Spells/misty-step.md\|misty step]], [[/6. Mechanics/Spells/suggestion.md\|suggestion]]\n\
    \n3rd level (3 3rd-level slots): [[/6. Mechanics/Spells/counterspell.md\|counterspell]],\
    \ [[/6. Mechanics/Spells/fireball.md\|fireball]], [[/6. Mechanics/Spells/fly.md\|fly]]\n\
    \n4th level (3 4th-level slots): [[/6. Mechanics/Spells/greater-invisibility.md\|greater invisibility]],\
    \ [[/6. Mechanics/Spells/ice-storm.md\|ice storm]]\n\n5th level (1 5th-level slots):\
    \ [[/6. Mechanics/Spells/cone-of-cold.md\|cone of cold]]"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "PotA"
- "RoT"
- "SKT"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "SLW"
- "SDW"
- "BGDIA"
- "ERLW"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "WBtW"
- "CRCotN"
- "JttRC"
- "LoX"
- "DSotDQ"
- "KftGV"
"image": "/compendium/bestiary/humanoid/token/mage.png"
aliases: ["Mage"]
---
# Mage
*Source: Monster Manual p. 347, Curse of Strahd, Hoard of the Dragon Queen, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Storm Lord's Wrath, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, The Wild Beyond the Witchlight, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Light of Xaryxis, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

Mages spend their lives in the study and practice of magic. Good-aligned mages offer counsel to nobles and others in power, while evil mages dwell in isolated sites to perform unspeakable experiments without interference.

```ad-statblock
title: Mage
![[/6. Mechanics/Bestiary/Humanoid/Token/mage.png#token]]
*Medium humanoid(any race), Any alignment*

- **Armor Class** 12 (15 with [[/6. Mechanics/Spells/mage-armor.md\|mage armor]])
- **Hit Points** `dice: 9d8|text(40)` (9d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|14 (+2)|11 (+0)|17 (+3)|12 (+1)|11 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +6, Wisdom +4
- **Skills** Arcana +6, History +6
- **Senses** passive Perception 11
- **Languages** any four languages
- **Challenge** 6

***Spellcasting.*** The mage is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, `dice: d20+6` (+6 to hit) with spell attacks). The mage has the following wizard spells prepared:

**Cantrips (at will)**: [[/6. Mechanics/Spells/fire-bolt.md\|fire bolt]], [[/6. Mechanics/Spells/light.md\|light]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]

**1st level (4 1st-level slots)**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]], [[/6. Mechanics/Spells/magic-missile.md\|magic missile]], [[/6. Mechanics/Spells/shield.md\|shield]]

**2nd level (3 2nd-level slots)**: [[/6. Mechanics/Spells/misty-step.md\|misty step]], [[/6. Mechanics/Spells/suggestion.md\|suggestion]]

**3rd level (3 3rd-level slots)**: [[/6. Mechanics/Spells/counterspell.md\|counterspell]], [[/6. Mechanics/Spells/fireball.md\|fireball]], [[/6. Mechanics/Spells/fly.md\|fly]]

**4th level (3 4th-level slots)**: [[/6. Mechanics/Spells/greater-invisibility.md\|greater invisibility]], [[/6. Mechanics/Spells/ice-storm.md\|ice storm]]

**5th level (1 5th-level slots)**: [[/6. Mechanics/Spells/cone-of-cold.md\|cone of cold]]

## Actions

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) piercing damage.
```
^statblock

## Environment

urban