---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/large
- monster/type/elemental
statblock: true
statblock-link: "#^statblock"
"name": "Salamander"
"size": "Large"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "90"
"hit_dice": "12d10 + 24"
"stats":
- !!int "18"
- !!int "14"
- !!int "15"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "walk 30 ft."
"damage_vulnerabilities": "cold"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "fire"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Ignan"
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A creature that touches the salamander or hits it with a melee attack while\
    \ within 5 feet of it takes dice: 2d6|avg (2d6) fire damage."
  "name": "Heated Body"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Any metal melee weapon the salamander wields deals an extra 3 (dice: 1d6|avg\
    \ (1d6)) fire damage on a hit (included in the attack)."
  "name": "Heated Weapons"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The salamander makes two attacks: one with its spear and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 2d6 + 4|avg (2d6 + 4) piercing\
    \ damage, or 13 (dice: 2d8 + 4|avg (2d8 + 4)) piercing damage if used with\
    \ two hands to make a melee attack, plus dice: 1d6|avg (1d6) fire damage."
  "name": "Spear"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) bludgeoning damage plus dice: 2d6|avg\
    \ (2d6) fire damage, and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]\
    \ (escape DC 14). Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]],\
    \ the salamander can automatically hit the target with its tail, and the salamander\
    \ can't make tail attacks against other targets."
  "name": "Tail"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "ToA"
- "BGDIA"
- "JttRC"
- "DoSI"
- "KftGV"
"image": "/compendium/bestiary/elemental/token/salamander.png"
aliases: ["Salamander"]
---
# Salamander
*Source: Monster Manual p. 266, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Tomb of Annihilation, Baldur's Gate: Descent Into Avernus, Journeys through the Radiant Citadel, Dragons of Stormwreck Isle, Keys from the Golden Vault*  

Salamanders slither across the Sea of Ash on the Elemental Plane of Fire, their sinuous coils and jagged spines smoldering. Intense heat washes off their bodies, while their yellow eyes glow like candles in the deep-set hollows of their hawkish faces.

Salamanders adore power, and they delight in setting fire to things. Outside their home plane, they play among the burning skeletons of charred trees as forest fires rage around them, or slither down the slopes of erupting volcanoes to linger in fire pits and magma floes.

## Fire Snakes

Salamanders hatch from eggs that are two-foot-diameter spheres of smoldering obsidian. When a salamander is ready to hatch, it melts its way through the egg's thick shell and emerges as a fire snake. A fire snake matures into a salamander adult within a year.

## Slaves of the Efreet

Long ago, the efreet hired azers to build the fabled City of Brass, but then failed in their attempt to enslave that mystical race when the azers' work was done. Turning instead to strike against the salamanders, the efreet had better luck in establishing a slave race, which they use to unleash war and destruction across the planes.

Salamanders despise the azers, believing that if the efreet had succeeded in dominating that race of elemental crafters, the salamanders would still be free. The efreet use this enmity to their own advantage, stoking the salamanders' hatred and pitting them against the efreets' former servants.

The efreet suffer salamanders to serve no other master; when efreet encounter salamanders dedicated to the cults of Elemental Evil, they slay them rather than taking them as slaves.

## Domineering Nobles

Although salamanders follow the destructive impulses of their fiery nature, slavery under the efreet has impacted the culture of free salamanders. They rule their own societies according to the efreet model, in which larger and stronger salamanders claim dominion over their lesser kin.

As salamanders age, they increase in size and status, rising to positions of power as cruel nobles among their kind. Nobles rule wandering bands of salamanders, which move across the Elemental Plane of Fire like desert nomads, raiding other communities for treasure.

## Living Forges

Salamanders generate intense heat, and when they fight, their weapons glow red and sear the bodies of their enemies on contact. Even approaching a salamander is dangerous, since flesh blisters and burns in its proximity.

This inherent heat is an asset to salamanders' skill as smiths, allowing them to soften and shape iron and steel with their bare hands. Although not as meticulous as azers, salamanders number among the greatest metalsmiths in all the planes. Powerful creatures summon them as warriors, but others enlist the salamanders for their crafting skills, or bind them to forges and ovens to generate limitless heat.

## Stat Block

```ad-statblock
title: Salamander
![[/6. Mechanics/Bestiary/Elemental/Token/salamander.png#token]]
*Large elemental, Neutral Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 12d10 + 24|text(90)` (12d10 + 24) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|14 (+2)|15 (+2)|11 (+0)|10 (+0)|12 (+1)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Vulnerabilities** cold
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** fire
- **Languages** Ignan
- **Challenge** 5

## Traits

***Heated Body.*** A creature that touches the salamander or hits it with a melee attack while within 5 feet of it takes `dice: 2d6` (`2d6`) fire damage.

***Heated Weapons.*** Any metal melee weapon the salamander wields deals an extra 3 (`dice: 1d6` (`1d6`)) fire damage on a hit (included in the attack).

## Actions

***Multiattack.*** The salamander makes two attacks: one with its spear and one with its tail.

***Spear.*** *Melee or Ranged Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 2d6 + 4` (`2d6 + 4`) piercing damage, or 13 (`dice: 2d8 + 4` (`2d8 + 4`)) piercing damage if used with two hands to make a melee attack, plus `dice: 1d6` (`1d6`) fire damage.

***Tail.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 10 ft., one target. Hit: `dice: 2d6 + 4` (`2d6 + 4`) bludgeoning damage plus `dice: 2d6` (`2d6`) fire damage, and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 14). Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], the salamander can automatically hit the target with its tail, and the salamander can't make tail attacks against other targets.
```
^statblock

## Environment

underdark