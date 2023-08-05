---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/medium
- monster/type/beast
statblock: true
statblock-link: "#^statblock"
"name": "Beast of the Sea"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"stats":
- !!int "14"
- !!int "14"
- !!int "15"
- !!int "8"
- !!int "14"
- !!int "11"
"speed": "walk 5 ft., swim 60 ft."
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The beast can breathe both air and water."
  "name": "Amphibious"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "You can add your proficiency bonus to any ability check or saving throw\
    \ that the beast makes."
  "name": "Primal Bond"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d6 + 2 + PB piercing damage or 1d6 + 2 + PB bludgeoning\
    \ damage (your choice), and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]\
    \ (escape DC equal to your spellcasting save DC). Until this grapple ends, the\
    \ beast can't use this attack on another target."
  "name": "Binding Strike"
"source":
- "TCE"
"image": "/compendium/bestiary/beast/token/beast-of-the-sea.png"
aliases: ["Beast of the Sea"]
---
# Beast of the Sea
*Source: Tasha's Cauldron of Everything p. 61*  

```ad-statblock
title: Beast of the Sea
![[/6. Mechanics/Bestiary/Beast/Token/beast-of-the-sea.png#token]]
*Medium beast, Unaligned*

- **Armor Class** (13 + PB (natural armor))
- **Hit Points** null  (5 + five times your ranger level (the beast has a number of Hit Dice [d8s] equal to your ranger level))
- **Speed** walk 5 ft., swim 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|14 (+2)|15 (+2)| 8 (-1)|14 (+2)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 12
- **Languages** understands the languages you speak
- **Challenge** 

## Traits

***Amphibious.*** The beast can breathe both air and water.

***Primal Bond.*** You can add your proficiency bonus to any ability check or saving throw that the beast makes.

## Actions

***Binding Strike.*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d6 + 2 + PB` piercing damage or `1d6 + 2 + PB` bludgeoning damage (your choice), and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC equal to your spellcasting save DC). Until this grapple ends, the beast can't use this attack on another target.
```
^statblock