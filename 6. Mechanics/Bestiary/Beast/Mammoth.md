---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/size/huge
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Mammoth"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "24"
- !!int "9"
- !!int "21"
- !!int "3"
- !!int "11"
- !!int "6"
"speed": "walk 40 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "6"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the mammoth moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 18 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].\
    \ If the target is [[6. Mechanics/Rules/conditions.md#prone\|prone]], the mammoth\
    \ can make one stomp attack against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 10 ft., one target.\
    \ Hit: dice: 4d8 + 7|avg (4d8 + 7) piercing damage."
  "name": "Gore"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one [[6. Mechanics/Rules/conditions.md#prone\|prone]]\
    \ creature. Hit: dice: 4d10 + 7|avg (4d10 + 7) bludgeoning damage."
  "name": "Stomp"
"source":
- "MM"
- "EGW"
- "IDRotF"
- "CRCotN"
"image": "/compendium/bestiary/beast/token/mammoth.png"
aliases: ["Mammoth"]
---
# Mammoth
*Source: Monster Manual p. 332, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Critical Role: Call of the Netherdeep*  

A mammoth is an elephantine creature with thick fur and long tusks. Stockier and fiercer than normal elephants, mammoths inhabit a wide range of climes, from subarctic to subtropical.

```ad-statblock
title: Mammoth
![[/6. Mechanics/Bestiary/Beast/Token/mammoth.png#token]]
*Huge beast, Unaligned*

- **Armor Class** 13 (natural armor)
- **Hit Points** `dice: 11d12 + 55|text(126)` (11d12 + 55) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)| 9 (-1)|21 (+5)| 3 (-4)|11 (+0)| 6 (-2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 10
- **Languages** —
- **Challenge** 6

## Traits

***Trampling Charge.*** If the mammoth moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]]. If the target is [[6. Mechanics/Rules/conditions.md#prone\|prone]], the mammoth can make one stomp attack against it as a bonus action.

## Actions

***Gore.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 10 ft., one target. Hit: `dice: 4d8 + 7` (`4d8 + 7`) piercing damage.

***Stomp.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one [[6. Mechanics/Rules/conditions.md#prone\|prone]] creature. Hit: `dice: 4d10 + 7` (`4d10 + 7`) bludgeoning damage.
```
^statblock

## Environment

arctic