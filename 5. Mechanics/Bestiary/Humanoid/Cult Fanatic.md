---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: urban
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Cult Fanatic
---
# [[5. Mechanics\Bestiary\Humanoid\Cult Fanatic.md|Cult Fanatic]]
*Source: Monster Manual p. 345, Curse of Strahd, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Fanatics are often part of a cult's leadership, using their charisma and dogma to influence and prey on those of weak will. Most are interested in personal power above all else

```statblock
"name": "Cult Fanatic"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "13"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather armor]]"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "14"
  - !!int "12"
  - !!int "10"
  - !!int "13"
  - !!int "14"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+2"
"senses": "passive Perception 11"
"languages": "any one language (usually Common)"
"cr": "2"
"traits":
  - "desc": "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
      \ (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following\
      \ cleric spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Light.md|light]],\
      \ [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
      \n1st level (4 slots): [[5. Mechanics/Spells/Command.md|command]], [[5. Mechanics/Spells/Inflict Wounds.md|inflict\
      \ wounds]], [[5. Mechanics/Spells/Shield Of Faith.md|shield of faith]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Hold Person.md|hold person]],\
      \ [[5. Mechanics/Spells/Spiritual Weapon.md|spiritual weapon]]"
    "name": "Spellcasting"
  - "desc": "The fanatic has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ or [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]."
    "name": "Dark Devotion"
"actions":
  - "desc": "The fanatic makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60\
      \ ft., one creature. Hit: 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "MM"
  - "CoS"
  - "TCE"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Humanoid/token/cult-fanatic.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
