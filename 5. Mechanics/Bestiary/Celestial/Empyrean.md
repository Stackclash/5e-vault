---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 23
environments: null
size: Huge
tags:
  - compendium/src/5e/mm
  - monster/cr/23
  - monster/size/huge
  - monster/type/celestial/titan
aliases:
  - Empyrean
---
# [[5. Mechanics\Bestiary\Celestial\Empyrean.md|Empyrean]]
*Source: Monster Manual p. 130*

Empyreans are the celestial children of the gods of the Upper Planes. They are universally beautiful, statuesque, and self-assured.

## Manifest Emotion

An empyrean can experience deity-like fits of serenity or rage. It can affect the environment around it by its mood. When an empyrean is unhappy, the clouds might cry tears of salt water, the wildflowers in surrounding meadows might wilt, dead fish might wash ashore in lakes or rivers, or a nearby forest might lose the leaves from its trees. When an empyrean is jubilant, sunlight follows it everywhere, small animals frolic in its footsteps, and birds fill the sky with their pleasing songs.

## Evil Empyreans

A few empyreans have turned to evil after venturing to the Lower Planes and becoming corrupted, or as the result of being cursed by evil gods. An evil empyrean can't survive long on the Upper Planes and usually retreats to the Material Plane, where it can rule over a kingdom of mortals as an indomitable tyrant.

## Immortal Titans

Empyreans don't age but can be slain. Because few empyreans can imagine their own demise, they fight fearlessly when drawn into battle, refusing to believe that the end is upon them even when standing at death's door. When an empyrean dies, its spirit returns to its home plane. There, one of the fallen empyrean's parents resurrects the empyrean unless he or she has a good reason not to.

```statblock
"name": "Empyrean"
"size": "Huge"
"type": "celestial"
"subtype": "titan"
"alignment": "Chaotic Good or Neutral Evil"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "313"
"hit_dice": "19d12 + 190"
"modifier": !!int "5"
"stats":
  - !!int "30"
  - !!int "21"
  - !!int "30"
  - !!int "21"
  - !!int "22"
  - !!int "27"
"speed": "50 ft., fly 50 ft., swim 50 ft."
"saves":
  - "strength": "+17"
  - "intelligence": "+12"
  - "wisdom": "+13"
  - "charisma": "+15"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+13"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+15"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "all"
"cr": "23"
"traits":
  - "desc": "The empyrean's innate spellcasting ability is Charisma (spell save DC\
      \ 23, +15 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring no material components:\n\nAt will: [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]],\
      \ [[5. Mechanics/Spells/Pass Without Trace.md|pass without trace]], [[5. Mechanics/Spells/Water Breathing.md|water breathing]],\
      \ [[5. Mechanics/Spells/Water Wa(LK).md|water walk]]\n\n1/day each: [[5. Mechanics/Spells/Commune.md|commune]],\
      \ [[5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]], [[5. Mechanics/Spells/Earthquake.md|earthquake]],\
      \ [[5. Mechanics/Spells/Fire Storm.md|fire storm]], [[5. Mechanics/Spells/Plane Shift.md|plane shift]]\
      \ (self only)"
    "name": "Innate Spellcasting"
  - "desc": "If the empyrean fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The empyrean has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The empyrean's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31\
      \ (6d6 + 10) bludgeoning damage. If the target is a creature, it must succeed\
      \ on a DC 15 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
      \ until the end of the empyrean's next turn."
    "name": "Maul"
  - "desc": "Ranged Spell Attack: +15 to hit, range 600 ft., one target. Hit:\
      \ 24 (7d6) damage of one of the following types (empyrean's choice): acid, cold,\
      \ fire, force, lightning, radiant, or thunder."
    "name": "Bolt"
"legendary_actions":
  - "desc": "The empyrean makes one attack."
    "name": "Attack"
  - "desc": "The empyrean bolsters all nonhostile creatures within 120 feet of it\
      \ until the end of its next turn. Bolstered creatures can't be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ or [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], and they gain\
      \ advantage on ability checks and saving throws until the end of the empyrean's\
      \ next turn."
    "name": "Bolster"
  - "desc": "The empyrean strikes the ground with its maul, triggering an earth tremor.\
      \ All other creatures on the ground within 60 feet of the empyrean must succeed\
      \ on a DC 25 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Trembling Strike (Costs 2 Actions)"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Celestial/token/empyrean.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
