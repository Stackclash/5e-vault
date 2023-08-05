---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/goblinoid
statblock: true
statblock-link: "#^statblock"
"name": "Bugbear"
"size": "Medium"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "8"
- !!int "11"
- !!int "9"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Survival": !!int "2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Goblin"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A melee weapon deals one extra die of its damage when the bugbear hits\
    \ with it (included in the attack)."
  "name": "Brute"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the bugbear surprises a creature and hits it with an attack during the\
    \ first round of combat, the target takes an extra 7 (dice: 2d6|avg (2d6))\
    \ damage from the attack."
  "name": "Surprise Attack"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 2|avg (2d8 + 2) piercing damage."
  "name": "Morningstar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 30/120 ft., one target. Hit: dice: 2d6 + 2|avg (2d6 + 2) piercing\
    \ damage in melee or 5 (dice: 1d6 + 2|avg (1d6 + 2)) piercing damage at range."
  "name": "Javelin"
"source":
- "MM"
- "LMoP"
- "PotA"
- "SKT"
- "TftYP"
- "WDH"
- "WDMM"
- "GoS"
- "ERLW"
- "RMBRE"
- "EGW"
- "IDRotF"
- "TCE"
- "WBtW"
- "CRCotN"
- "KftGV"
"image": "/compendium/bestiary/humanoid/token/bugbear.png"
aliases: ["Bugbear"]
---
# Bugbear
*Source: Monster Manual p. 33, Lost Mine of Phandelver, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, The Lost Dungeon of Rickedness: Big Rick Energy, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight, Critical Role: Call of the Netherdeep, Keys from the Golden Vault*  

Bugbears are born for battle and mayhem. Surviving by raiding and hunting, they bully the weak and despise being bossed around, but their love of carnage means they will fight for powerful masters if bloodshed and treasure are assured.

## Goblinoids

Bugbears are often found in the company of their cousins, hobgoblins and goblins. Bugbears usually enslave goblins they encounter, and they bully hobgoblins into giving them gold and food in return for serving as scouts and shock troops. Even when paid, bugbears are at best unreliable allies, yet goblins and hobgoblins understand that no matter how much bugbears might drain a tribe of resources, these creatures are a potent force.

## Followers of Hruggek

Bugbears worship Hruggek, a lesser god who dwells on the plane of Acheron. In the absence of their goblinoid kin, bugbears form loose war bands, each one led by its fiercest member. Bugbears believe that when they die, their spirits have a chance to fight at Hruggek's side. They try to prove themselves worthy by defeating as many foes as possible.

## Venal Ambushers

Despite their intimidating builds, bugbears move with surprising stealth. They are fond of setting ambushes and flee when outmatched. They are dependable mercenaries as long as they are supplied food, drink, and treasure, but a bugbear forgets any bond when its life is on the line. A wounded member of a bugbear band might be left behind to help the rest of the band escape. Afterward, that bugbear might help pursuers track down its former companions if doing so saves its life.

## Stat Block

```ad-statblock
title: Bugbear
![](/compendium/bestiary/humanoid/token/bugbear.png#token)
*Medium humanoid(goblinoid), Chaotic Evil*

- **Armor Class** 16 ([hide armor](/compendium/items/hide-armor.md), [shield](/compendium/items/shield.md))
- **Hit Points** `dice: 5d8 + 5|text(27)` (5d8 + 5) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|14 (+2)|13 (+1)| 8 (-1)|11 (+0)| 9 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +6, Survival +2
- **Senses** darkvision 60 ft., passive Perception 10
- **Languages** Common, Goblin
- **Challenge** 1

## Traits

***Brute.*** A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack).

***Surprise Attack.*** If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (`dice: 2d6|avg` (`2d6`)) damage from the attack.

## Actions

***Morningstar.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 2|avg` (`2d8 + 2`) piercing damage.

***Javelin.*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 30/120 ft., one target. Hit: `dice: 2d6 + 2|avg` (`2d6 + 2`) piercing damage in melee or 5 (`dice: 1d6 + 2|avg` (`1d6 + 2`)) piercing damage at range.
```
^statblock

## Environment

underdark, grassland, forest