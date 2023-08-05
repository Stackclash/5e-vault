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
"name": "Cult Fanatic"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "13"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Religion": !!int "2"
  "Persuasion": !!int "4"
"senses": "passive Perception 11"
"languages": "any one language (usually Common)"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 11, dice: d20+3 (+3 to hit) with spell attacks). The fanatic\
    \ has the following cleric spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/light.md\|light]],\
    \ [[/6. Mechanics/Spells/sacred-flame.md\|sacred flame]], [[/6. Mechanics/Spells/thaumaturgy.md\|thaumaturgy]]\n\
    \n1st level (4 1st-level slots): [[/6. Mechanics/Spells/command.md\|command]],\
    \ [[/6. Mechanics/Spells/inflict-wounds.md\|inflict wounds]], [[/6. Mechanics/Spells/shield-of-faith.md\|shield of faith]]\n\
    \n2nd level (3 2nd-level slots): [[/6. Mechanics/Spells/hold-person.md\|hold person]],\
    \ [[/6. Mechanics/Spells/spiritual-weapon.md\|spiritual weapon]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The fanatic has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]]\
    \ or [[6. Mechanics/Rules/conditions.md#frightened\|frightened]]."
  "name": "Dark Devotion"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The fanatic makes two melee attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one creature. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "MM"
- "CoS"
- "PotA"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "SLW"
- "BGDIA"
- "IMR"
- "EGW"
- "MOT"
- "IDRotF"
- "TCE"
- "CM"
- "CRCotN"
- "JttRC"
- "LoX"
- "KftGV"
"image": "/compendium/bestiary/humanoid/token/cult-fanatic.png"
aliases: ["Cult Fanatic"]
---
# Cult Fanatic
*Source: Monster Manual p. 345, Curse of Strahd, Princes of the Apocalypse, The Rise of Tiamat, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, Candlekeep Mysteries, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel, Light of Xaryxis, Keys from the Golden Vault*  

Fanatics are often part of a cult's leadership, using their charisma and dogma to influence and prey on those of weak will. Most are interested in personal power above all else

```ad-statblock
title: Cult Fanatic
![[/6. Mechanics/Bestiary/Humanoid/Token/cult-fanatic.png#token]]
*Medium humanoid(any race), Any Non-Good alignment*

- **Armor Class** 13 ([[/6. Mechanics/Items/leather-armor.md\|leather armor]])
- **Hit Points** `dice: 6d8 + 6|text(33)` (6d8 + 6) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|14 (+2)|12 (+1)|10 (+0)|13 (+1)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Deception +4, Persuasion +4, Religion +2
- **Senses** passive Perception 11
- **Languages** any one language (usually Common)
- **Challenge** 2

## Traits

***Dark Devotion.*** The fanatic has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] or [[6. Mechanics/Rules/conditions.md#frightened\|frightened]].

***Spellcasting.*** The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, `dice: d20+3` (+3 to hit) with spell attacks). The fanatic has the following cleric spells prepared:

**Cantrips (at will)**: [[/6. Mechanics/Spells/light.md\|light]], [[/6. Mechanics/Spells/sacred-flame.md\|sacred flame]], [[/6. Mechanics/Spells/thaumaturgy.md\|thaumaturgy]]

**1st level (4 1st-level slots)**: [[/6. Mechanics/Spells/command.md\|command]], [[/6. Mechanics/Spells/inflict-wounds.md\|inflict wounds]], [[/6. Mechanics/Spells/shield-of-faith.md\|shield of faith]]

**2nd level (3 2nd-level slots)**: [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/spiritual-weapon.md\|spiritual weapon]]

## Actions

***Multiattack.*** The fanatic makes two melee attacks.

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 20/60 ft., one creature. Hit: `dice: 1d4 + 2` (`1d4 + 2`) piercing damage.
```
^statblock

## Environment

urban