---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: urban
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/12
  - monster/environment/urban
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Archmage (Familiar)
---
# [[5. Mechanics\Bestiary\Humanoid\Archmage Familiar.md|Archmage (Familiar)]]
*Source: Monster Manual p. 342, Curse of Strahd, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Archmage Familiar"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "20"
  - !!int "15"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "intelligence": "+9"
  - "wisdom": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+13"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+13"
"damage_resistances": "damage from spells; nonmagical bludgeoning, piercing, slashing\
  \ (from stoneskin)"
"senses": "passive Perception 12"
"languages": "any six languages"
"cr": "12"
"traits":
  - "desc": "The archmage is an 18th-level spellcaster. Its spellcasting ability is\
      \ Intelligence (spell save DC 17, +9 to hit with spell attacks). The archmage\
      \ can cast [[5. Mechanics/Spells/Disguise Self.md|disguise self]] and [[5. Mechanics/Spells/Invisibility.md|invisibility]]\
      \ at will and has the following wizard spells prepared:\n\nCantrips (at will):\
      \ [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]], [[5. Mechanics/Spells/Light.md|light]],\
      \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]],\
      \ [[5. Mechanics/Spells/Shocking Grasp.md|shocking grasp]]\n\n1st level (4 slots):\
      \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Find Familiar.md|find familiar]]\
      \ (one of the creatures described in the spell or some other Tiny monster, such\
      \ as a [[5. Mechanics/Bestiary/Undead/Crawling Claw.md|crawling claw]], [[5. Mechanics/Bestiary/Fiend/Imp.md|imp]],\
      \ [[5. Mechanics/Bestiary/Dragon/Pseudodragon.md|pseudodragon]], or [[5. Mechanics/Bestiary/Fiend/Quasit.md|quasit]]),\
      \ [[5. Mechanics/Spells/Identify.md|identify]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
      \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]]\n\n2nd level (3 slots):\
      \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Mirror Image.md|mirror image]],\
      \ [[5. Mechanics/Spells/Misty Step.md|misty step]]\n\n3rd level (3 slots):\
      \ [[5. Mechanics/Spells/Counterspell.md|counterspell]], [[5. Mechanics/Spells/Fly.md|fly]],\
      \ [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]\n\n4th level (3 slots):\
      \ [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Fire Shield.md|fire shield]],\
      \ [[5. Mechanics/Spells/Stoneskin.md|stoneskin]]\n\n5th level (3 slots): [[5. Mechanics/Spells/Cone Of Cold.md|cone\
      \ of cold]], [[5. Mechanics/Spells/Scrying.md|scrying]],\
      \ [[5. Mechanics/Spells/Wall Of Force.md|wall of force]]\n\n6th level (1 slots):\
      \ [[5. Mechanics/Spells/Globe Of Invulnerability.md|globe of invulnerability]]\n\
      \n7th level (1 slots): [[5. Mechanics/Spells/Teleport.md|teleport]]\n\n8th\
      \ level (1 slots): [[5. Mechanics/Spells/Mind Blank.md|mind blank]]\n\n9th\
      \ level (1 slots): [[5. Mechanics/Spells/Time Stop.md|time stop]]\n\nThe archmage\
      \ casts these spells on itself before combat."
    "name": "Spellcasting"
  - "desc": "The archmage has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "MM"
  - "CoS"
  - "VEoR"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
