---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/vrgr
  - monster/cr/4
  - monster/size/medium
  - monster/type/monstrosity
statblock: inline
aliases:
  - Strigoi
---
# [[5. Mechanics/Bestiary/Monstrosity/Strigoi.md|Strigoi]]
*Source: Van Richten's Guide to Ravenloft p. 246*

The first strigoi were created by spellcasters who subjected swarms of stirges to transmutation spells. Other strigoi have emerged as the results of similar spellcraft, as the byproducts of outlandish scientific experiments, and from stirges draining well-fed vampires. When a strigoi arises, the unnatural creature is overwhelmed by instinctual hunger that drives it to undertake bloodthirsty rampages along with swarms of emboldened, bloodsucking pests.

Strigoi drain the blood, marrow, and soft tissues from their victims, leaving behind nothing but empty husks. Due to the horrifying nature of their deaths, those slain by strigoi occasionally reanimate as boneless.

Many strigoi seek ways to return to their former existence while being compelled to drain living victims. Others, though, embrace their new forms and mimic vampires. These would-be bloodsucker aristocrats create stirge courts amid scabrous husk-decorated villas and drain the life from any who balk at their grotesque gentility.

```statblock
"name": "Strigoi"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "17"
- !!int "14"
- !!int "16"
- !!int "11"
- !!int "17"
- !!int "10"
"speed": "30 ft., fly 40 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Strength": !!int "5"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "5"
"damage_resistances": "necrotic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Common"
"cr": "4"
"traits":
- "desc": "The strigoi can magically command any [[5. Mechanics/Bestiary/Beast/Stirge.md|stirge]]\
    \ within 120 feet of it, using a limited form of telepathy."
  "name": "Stirge Telepathy"
"actions":
- "desc": "The strigoi makes one Claw attack and makes one Proboscis attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one target.\
    \ Hit: dice:1d8 + 3|text(7) (1d8 + 3) slashing damage plus dice:1d12|text(6)\
    \ (1d12) acid damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5) to hit, reach 5 ft., one creature.\
    \ Hit: dice:1d10 + 3|text(8) (1d10 + 3) piercing damage plus dice:3d6|text(10)\
    \ (3d6) necrotic damage, and the strigoi regains hit points equal to the amount\
    \ of necrotic damage dealt. A creature reduced to 0 hit points from this attack\
    \ dies and leaves nothing behind except its skin and its equipment."
  "name": "Proboscis"
- "desc": "The strigoi magically summons dice: 1d4 + 2|avg|noform (1d4 + 2) [[5. Mechanics/Bestiary/Beast/Stirge.md|stirges]]\
    \ (see their entry in the Monster Manual) in unoccupied spaces it can see within\
    \ 30 feet of it. The stirges are under the strigoi's control and act immediately\
    \ after the strigoi in the initiative order. The stirges disappear after 1 hour,\
    \ when the strigoi dies, or when the strigoi dismisses them (no action required)."
  "name": "Ravenous Children (1/Day)"
"source":
- "VRGR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/strigoi-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
