---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/2
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Cult Fanatic"]
---
# [Cult Fanatic](compendium/bestiary/humanoid/cult-fanatic.md)
*Source: Monster Manual p. 345, Curse of Strahd, Tasha's Cauldron of Everything. Available in the SRD.*

Fanatics are often part of a cult's leadership, using their charisma and dogma to influence and prey on those of weak will. Most are interested in personal power above all else

```statblock
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
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Religion": !!int "2"
  "Persuasion": !!int "4"
"senses": "passive Perception 11"
"languages": "any one language (usually Common)"
"cr": "2"
"traits":
- "desc": "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 11, dice: d20+3 (+3 to hit) with spell attacks). The fanatic\
    \ has the following cleric spells prepared:\n\nCantrips (at will): [light](compendium/spells/light.md),\
    \ [sacred flame](compendium/spells/sacred-flame.md), [thaumaturgy](compendium/spells/thaumaturgy.md)\n\
    \n1st level (4 slots): [command](compendium/spells/command.md), [inflict wounds](compendium/spells/inflict-wounds.md),\
    \ [shield of faith](compendium/spells/shield-of-faith.md)\n\n2nd level (3 slots):\
    \ [hold person](compendium/spells/hold-person.md), [spiritual weapon](compendium/spells/spiritual-weapon.md)"
  "name": "spells"
- "desc": "The fanatic has advantage on saving throws against being [charmed](/compendium/rules/conditions.md#charmed)\
    \ or [frightened](/compendium/rules/conditions.md#frightened)."
  "name": "Dark Devotion"
"actions":
- "desc": "The fanatic makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
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
- "PSI"
- "PaBTSO"
- "ToFW"
- "BMT"
- "DoDk"
"image": "compendium/bestiary/humanoid/token/cult-fanatic.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```