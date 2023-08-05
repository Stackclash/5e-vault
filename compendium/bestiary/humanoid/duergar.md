---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/dwarf
statblock: true
statblock-link: "#^statblock"
"name": "Duergar"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "26"
"hit_dice": "4d8 + 4"
"stats":
- !!int "14"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "9"
"speed": "walk 25 ft."
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Dwarvish, Undercommon"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The duergar has advantage on saving throws against poison, spells, and\
    \ illusions, as well as to resist being [charmed](compendium/rules/conditions.md#charmed)\
    \ or [paralyzed](compendium/rules/conditions.md#paralyzed)."
  "name": "Duergar Resilience"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the duergar has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "For 1 minute, the duergar magically increases in size, along with anything\
    \ it is wearing or carrying. While enlarged, the duergar is Large, doubles its\
    \ damage dice on Strength-based weapon attacks (included in the attacks), and\
    \ makes Strength checks and Strength saving throws with advantage. If the duergar\
    \ lacks the room to become Large, it attains the maximum size possible in the\
    \ space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage, or 11 (dice: 2d8 + 2|avg\
    \ (2d8 + 2)) piercing damage while enlarged."
  "name": "War Pick"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 30/120 ft., one target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing\
    \ damage, or 9 (dice: 2d6 + 2|avg (2d6 + 2)) piercing damage while enlarged."
  "name": "Javelin"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The duergar magically turns [invisible](compendium/rules/conditions.md#invisible)\
    \ until it attacks, casts a spell, or uses its Enlarge, or until its [concentration](compendium/rules/status.md#concentration)\
    \ is broken, up to 1 hour (as if [concentration](compendium/rules/status.md#concentration)\
    \ on a spell). Any equipment the duergar wears or carries is [invisible](compendium/rules/conditions.md#invisible)\
    \ with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
- "MM"
- "PotA"
- "TftYP"
- "WDH"
- "WDMM"
- "BGDIA"
- "EGW"
- "IDRotF"
- "KftGV"
"image": "/compendium/bestiary/humanoid/token/duergar.png"
aliases: ["Duergar"]
---
# Duergar
*Source: Monster Manual p. 122, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Keys from the Golden Vault*  

The tyrannical duergar, also known as gray dwarves, dwell in fantastic cities deep in the Underdark. Using ancient dwarven knowledge and myriad slaves, they work tirelessly to expand their subterranean kingdoms.

Most duergar (including females) are bald and have ashen gray skin. They wear drab clothing designed to blend in with stone, along with simple jewelry that reflects their severe and utilitarian demeanor.

## Slaves to Slavers

The duergar were once dwarves, before their greed and endless delving beneath the earth brought them into contact with the mind flayers. Held in captivity for generations by the illithids, the dwarves eventually won their independence with the aid of the evil god Laduguer. Slavery had forever changed them, however, darkening their spirits to make the duergar as evil as the tyrants they had escaped. Despite winning their freedom, duergar are dour, pessimistic, untrusting creatures, always toiling and complaining, with no memory of what it means to be happy or proud. Their craftsmanship and accomplishments endure, yet they are bereft of warmth or artistry.

Duergar make war against their dwarven kin and all other subterranean races. They forge alliances when it is convenient, then break those alliances when they have nothing more to gain. They take and hold slaves to toil in the Underdark, regarding them as free labor and crude currency.

## Tough as Stone

Like dwarves, duergar have strong constitutions. Adding to their physical stamina is an incredible mental fortitude resulting from their time as slaves of the illithids. A duergar's mind is a fortress, able to shrug off charms, illusions, and other spells.

## Born of Darkness

The Underdark is saturated with strange magical power, which the duergar absorbed over generations of imprisonment. A duergar can increase its size and strength for a short time, becoming a powerful ogre-sized warrior. If it faces a foe it can't fight, or when spying on creatures approaching its territory, it can just as easily become [invisible](compendium/rules/conditions.md#invisible) to slip away into the darkness. Eons spent in the Underdark also sharpened their [darkvision](compendium/rules/senses.md#darkvision), allowing them to see twice as far as other dwarves. This keen eyesight comes at a cost, however, as a duergar's vision is compromised by sunlight.

## Infernal Master

Asmodeus, Lord of the Nine Hells, has been known to impersonate duergar gods in order to cultivate the evil brimming in the hearts of the gray dwarves. He offers them divine guidance and vengeance against their enemies while urging them on toward greater acts of tyranny, all the while concealing his true identity.

## Stat Block

```ad-statblock
title: Duergar
![](/compendium/bestiary/humanoid/token/duergar.png#token)
*Medium humanoid(dwarf), Lawful Evil*

- **Armor Class** 16 ([scale mail](/compendium/items/scale-mail.md), [shield](/compendium/items/shield.md))
- **Hit Points** `dice: 4d8 + 4|text(26)` (4d8 + 4) 
- **Speed** walk 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|11 (+0)|14 (+2)|11 (+0)|10 (+0)| 9 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 10
- **Damage Resistances** poison
- **Languages** Dwarvish, Undercommon
- **Challenge** 1

## Traits

***Duergar Resilience.*** The duergar has advantage on saving throws against poison, spells, and illusions, as well as to resist being [charmed](compendium/rules/conditions.md#charmed) or [paralyzed](compendium/rules/conditions.md#paralyzed).

***Sunlight Sensitivity.*** While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on sight.

## Actions

***Enlarge (Recharges after a Short or Long Rest).*** For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.

***War Pick.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage, or 11 (`dice: 2d8 + 2|avg` (`2d8 + 2`)) piercing damage while enlarged.

***Javelin.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 30/120 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage, or 9 (`dice: 2d6 + 2|avg` (`2d6 + 2`)) piercing damage while enlarged.

***Invisibility (Recharges after a Short or Long Rest).*** The duergar magically turns [invisible](compendium/rules/conditions.md#invisible) until it attacks, casts a spell, or uses its Enlarge, or until its [concentration](compendium/rules/status.md#concentration) is broken, up to 1 hour (as if [concentration](compendium/rules/status.md#concentration) on a spell). Any equipment the duergar wears or carries is [invisible](compendium/rules/conditions.md#invisible) with it.
```
^statblock

## Environment

underdark