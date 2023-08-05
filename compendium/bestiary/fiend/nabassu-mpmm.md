---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
"name": "Nabassu"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "190"
"hit_dice": "20d8 + 100"
"stats":
- !!int "22"
- !!int "14"
- !!int "21"
- !!int "14"
- !!int "15"
- !!int "17"
"speed": "walk 40 ft., fly 60 ft."
"saves":
  "Dexterity": !!int "7"
  "Strength": !!int "11"
"skillsaves":
  "Perception": !!int "7"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Abyssal, telepathy 120 ft."
"cr": "15"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The nabassu darkens the area around its body in a 10-foot radius. Nonmagical\
    \ light can't illuminate this area of dim light."
  "name": "Demonic Shadows"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A nabassu can eat the soul of a creature it has killed within the last\
    \ hour, provided that creature is neither a Construct nor an Undead. The devouring\
    \ requires the nabassu to be within 5 feet of the corpse for at least 10 minutes,\
    \ after which it gains a number of Hit Dice (d8s) equal to half the creature's\
    \ number of Hit Dice. Roll those dice, and increase the nabassu's hit points by\
    \ the numbers rolled. For every 4 Hit Dice the nabassu gains in this way, its\
    \ attacks deal an extra 3 (dice: 1d6|avg (1d6)) damage on a hit. The nabassu\
    \ retains these benefits for 6 days. A creature devoured by a nabassu can be restored\
    \ to life only by a [wish](/compendium/spells/wish.md) spell."
  "name": "Devour Soul"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The nabassu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The nabassu makes one Bite attack and one Claw attack, and it uses Soul-Stealing\
    \ Gaze."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+11 (+11 to hit), reach 5 ft., one target.\
    \ Hit: dice: 5d12 + 6|avg (5d12 + 6) necrotic damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+11 (+11 to hit), reach 5 ft., one target.\
    \ Hit: dice: 4d10 + 6|avg (4d10 + 6) force damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The nabassu targets one creature it can see within 30 feet of it. If the\
    \ target isn't a Construct or an Undead, it must succeed on a DC 16 Charisma saving\
    \ throw or take dice: 2d12|avg (2d12) necrotic damage. The target's hit point\
    \ maximum is reduced by an amount equal to the necrotic damage dealt, and the\
    \ nabassu regains hit points equal to half that amount. This reduction lasts until\
    \ the target finishes a short or long rest. The target dies if its hit point maximum\
    \ is reduced to 0, and if the target is a Humanoid, it immediately rises as a\
    \ [ghoul](/compendium/bestiary/undead/ghoul.md) under the nabassu's control."
  "name": "Soul-Stealing Gaze"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/fiend/token/nabassu.png"
aliases: ["Nabassu"]
---
# Nabassu
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 188, Mordenkainen's Tome of Foes p. 135*  

The insatiable nabassus prowl the multiverse in search of souls to devour. If they think they can kill a creature and consume its soul, they attack—even if that other creature is a demon, including another nabassu.

Most other demons shun nabassus and force them to live on the fringes of the Abyss. There, nabassus pick off weaker demons or, if the situation warrants, gather in packs to take down larger prey. Some especially powerful nabassus even search for demon lords' amulets.

Whenever magic pulls demons from the Abyss to the Material Plane, nabassus try to get summoned so that they can embark on a feast of souls there. A summoned nabassu seeks to break free so that it can devour the soul of its summoner and then feed on the souls of whatever other creatures it can catch. One way a summoner can avoid this fate is by providing a steady supply of souls to the nabassu, which might persuade the demon to be cooperative—as long as the supply lasts.

```ad-statblock
title: Nabassu
![](/compendium/bestiary/fiend/token/nabassu.png#token)
*Medium fiend(demon), Chaotic Evil*

- **Armor Class** 18 (natural armor)
- **Hit Points** `dice: 20d8 + 100|text(190)` (20d8 + 100) 
- **Speed** walk 40 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|22 (+6)|14 (+2)|21 (+5)|14 (+2)|15 (+2)|17 (+3)|

- **Proficiency Bonus** +5
- **Saving Throws** Strength +11, Dexterity +7
- **Skills** Perception +7
- **Senses** darkvision 60 ft., passive Perception 17
- **Damage Resistances** cold; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, telepathy 120 ft.
- **Challenge** 15

## Traits

***Demonic Shadows.*** The nabassu darkens the area around its body in a 10-foot radius. Nonmagical light can't illuminate this area of dim light.

***Devour Soul.*** A nabassu can eat the soul of a creature it has killed within the last hour, provided that creature is neither a Construct nor an Undead. The devouring requires the nabassu to be within 5 feet of the corpse for at least 10 minutes, after which it gains a number of Hit Dice (d8s) equal to half the creature's number of Hit Dice. Roll those dice, and increase the nabassu's hit points by the numbers rolled. For every 4 Hit Dice the nabassu gains in this way, its attacks deal an extra 3 (`dice: 1d6|avg` (`1d6`)) damage on a hit. The nabassu retains these benefits for 6 days. A creature devoured by a nabassu can be restored to life only by a [wish](/compendium/spells/wish.md) spell.

***Magic Resistance.*** The nabassu has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The nabassu makes one Bite attack and one Claw attack, and it uses Soul-Stealing Gaze.

***Bite.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 5 ft., one target. Hit: `dice: 5d12 + 6|avg` (`5d12 + 6`) necrotic damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 5 ft., one target. Hit: `dice: 4d10 + 6|avg` (`4d10 + 6`) force damage.

***Soul-Stealing Gaze.*** The nabassu targets one creature it can see within 30 feet of it. If the target isn't a Construct or an Undead, it must succeed on a DC 16 Charisma saving throw or take `dice: 2d12|avg` (`2d12`) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage dealt, and the nabassu regains hit points equal to half that amount. This reduction lasts until the target finishes a short or long rest. The target dies if its hit point maximum is reduced to 0, and if the target is a Humanoid, it immediately rises as a [ghoul](/compendium/bestiary/undead/ghoul.md) under the nabassu's control.
```
^statblock

## Environment

swamp, underdark, urban