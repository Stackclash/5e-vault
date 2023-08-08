---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/swamp
- monster/size/huge
- monster/type/beast
statblock: inline
---
# Giant Crocodile
*Source: Monster Manual p. 324, Princes of the Apocalypse, Tomb of Annihilation, Dragon of Icespire Peak, Storm Lord's Wrath, Journeys through the Radiant Citadel*  

```statblock
"name": "Giant Crocodile"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "85"
"hit_dice": "9d12 + 27"
"stats":
- !!int "21"
- !!int "9"
- !!int "17"
- !!int "2"
- !!int "10"
- !!int "7"
"speed": "walk 30 ft., swim 50 ft."
"skillsaves":
  "Stealth": !!int "5"
"senses": "passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The crocodile can hold its breath for 30 minutes."
  "name": "Hold Breath"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The crocodile makes two attacks: one with its bite and one with its tail."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 3d10 + 5|avg (3d10 + 5) piercing damage, and the target is [[6. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 16). Until this grapple ends, the target is [[6. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ and the crocodile can't bite another target."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 10 ft., one target\
    \ not [[6. Mechanics/Rules/Conditions.md#grappled|grappled]] by the crocodile. Hit:\
    \ dice: 2d8 + 5|avg (2d8 + 5) bludgeoning damage. If the target is a creature,\
    \ it must succeed on a DC 16 Strength saving throw or be knocked [[6. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Tail"
"source":
- "MM"
- "PotA"
- "ToA"
- "DIP"
- "SLW"
- "JttRC"
"image": "6. Mechanics/Bestiary/Beast/token/giant-crocodile.png"
```
^statblock

## Environment

swamp