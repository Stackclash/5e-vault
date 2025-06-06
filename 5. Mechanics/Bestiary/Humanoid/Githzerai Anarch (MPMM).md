---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 16
environments: null
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/16
  - monster/size/medium
  - monster/type/humanoid/gith
aliases:
  - Githzerai Anarch
---
# [[5. Mechanics\Bestiary\Humanoid\Githzerai Anarch (MPMM).md|Githzerai Anarch]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 142, Mordenkainen's Tome of Foes p. 207*

Anarchs are githzerai sages and mystics who lead communities and maintain the adamantine citadels that serve as strong points in Limbo and on other planes. They have formidable psionic capabilities and are able to manipulate the unformed substance of their adopted plane with a thought.

## An Anarch's Lair

In Limbo, githzerai anarchs create islands of tranquility in this turbulent plane. An anarch can use its psionic power to give form to formless substance, creating mountains, lakes, and structures to serve as a foundation for a githzerai community.

The anarch's challenge rating is 17 (18,000 XP) when it's encountered in its lair.

## Githzerai

Githzerai are otherworldly folk with psionic powers who share an ancestral link to githyanki (also in this book). The githzerai followers of the great leader Zaerith Menyar-Ag-Gith are an ascetic people who live apart from the rest of the cosmos, within the confines of fortresses floating through the chaos of Limbo. Instead of imposing their will on other peoples, they focus on controlling and manipulating their endlessly malleable home.

```statblock
"name": "Githzerai Anarch (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Any alignment"
"ac": !!int "20"
"ac_class": "psychic defense"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"modifier": !!int "5"
"stats":
  - !!int "16"
  - !!int "21"
  - !!int "18"
  - !!int "18"
  - !!int "20"
  - !!int "14"
"speed": "30 ft., fly 40 ft. (hover)"
"saves":
  - "strength": "+8"
  - "dexterity": "+10"
  - "intelligence": "+9"
  - "wisdom": "+10"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+10"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+10"
"senses": "passive Perception 20"
"languages": "Gith"
"cr": "16"
"traits":
  - "desc": "If the githzerai fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "While the githzerai is wearing no armor and wielding no shield, its AC\
      \ includes its Wisdom modifier."
    "name": "Psychic Defense"
"actions":
  - "desc": "The githzerai makes three Unarmed Strike attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 9\
      \ (1d8 + 5) bludgeoning damage plus 18 (4d8) psychic damage."
    "name": "Unarmed Strike"
  - "desc": "The githzerai casts one of the following spells, requiring no spell components\
      \ and using Wisdom as the spellcasting ability (spell save DC 18):\n\nAt will:\
      \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]] (the hand is invisible)\n\n3/day\
      \ each: [[5. Mechanics/Spells/See Invisibility.md|see invisibility]], [[5. Mechanics/Spells/Telekinesis.md|telekinesis]]\n\
      \n1/day each: [[5. Mechanics/Spells/Globe Of Invulnerability.md|globe of invulnerability]],\
      \ [[5. Mechanics/Spells/Plane Shift.md|plane shift]], [[5. Mechanics/Spells/Wall Of Force.md|wall of force]]"
    "name": "Spellcasting (Psionics)"
"legendary_actions":
  - "desc": "The githzerai makes one Unarmed Strike attack."
    "name": "Strike"
  - "desc": "The githzerai teleports, along with any equipment it is wearing or carrying,\
      \ to an unoccupied space it can see within 30 feet of it."
    "name": "Teleport"
  - "desc": "The githzerai casts the [[5. Mechanics/Spells/Reverse Gravity.md|reverse gravity]]\
      \ spell, using Wisdom as the spellcasting ability. The spell has the normal\
      \ effect, except that the githzerai can orient the area in any direction and\
      \ creatures and objects fall toward the end of the area."
    "name": "Change Gravity (Costs 3 Actions)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the anarch can take\
      \ one of the following lair actions; the anarch can't take the same lair action\
      \ two rounds in a row:"
    "name": ""
  - "desc": "- Create Object. The anarch casts the creation spell (as a 9th-level\
      \ spell) using the unformed substance of Limbo instead of shadow material. If\
      \ used in Limbo, the object remains until the anarch's [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
      \ is broken, regardless of its composition. If the anarch moves more than 120\
      \ feet from the object, the anarch's [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
      \ breaks.  \n- Move Object. The anarch can magically move an object it can\
      \ see within 150 feet of it by making a Wisdom check with advantage. The DC\
      \ depends on the object's size: DC 5 for Tiny, DC 10 for Small, DC 15 for Medium,\
      \ DC 20 for Large, and DC 25 for Huge or larger.  \n- Psionic Bolt. The\
      \ anarch casts the lightning bolt spell (at 5th level), but the anarch can change\
      \ the damage type from lightning to cold, fire, psychic, radiant, or thunder.\
      \ If the spell deals damage other than fire or lightning, it doesn't ignite\
      \ flammable objects.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing an anarch's lair is warped by its presence, which\
      \ creates one or more of the following effects:"
    "name": ""
  - "desc": "- Form Substance. In Limbo, the anarch can spend 10 minutes stabilizing\
      \ a 5-mile area centered on it, causing the unformed substance to take whatever\
      \ inanimate form the anarch chooses. During that process, the anarch determines\
      \ the shape and composition of the forms created.  \n- Stabilize Object.\
      \ The anarch stabilizes any object created in Limbo and brought to the Material\
      \ Plane for as long as the anarch remains within 1 mile of it (no action required).\
      \  "
    "name": ""
  - "desc": "If the anarch dies, these effects end after d6 rounds. All formed substance\
      \ becomes a chaotic churn of energy and matter, unraveling into unformed substance\
      \ that dissipates d6 rounds later."
    "name": ""
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Humanoid/token/githzerai-anarch-mpmm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
