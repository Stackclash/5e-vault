---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
"name": "Phantom Warrior (Archer)"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "16"
- !!int "11"
- !!int "16"
- !!int "8"
- !!int "10"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "any languages it knew in life"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phantom warrior can see 60 feet into the Ethereal Plane when it is\
    \ on the Material Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phantom warrior can move through other creatures and objects as if\
    \ they were difficult terrain. It takes dice: 1d10|avg (1d10) force damage\
    \ if it ends its turn inside an object."
  "name": "Incorporeal Movement"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phantom warrior's AC accounts for its spectral armor and shield."
  "name": "Spectral Armor and Shield"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phantom warrior makes two attacks with its spectral longsword or spectral\
    \ longbow."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) force damage."
  "name": "Spectral Longsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The phantom warrior enters the Ethereal Plane from the Material Plane,\
    \ or vice versa. It is visible on the Material Plane while it is in the Border\
    \ Ethereal, and vice versa, yet it can't affect or be affected by anything on\
    \ the other plane."
  "name": "Etherealness"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+2 (+2 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8|avg (1d8) force damage."
  "name": "Spectral Longbow"
"source":
- "CoS"
"image": "/compendium/bestiary/undead/token/phantom-warrior-archer.png"
aliases: ["Phantom Warrior (Archer)"]
---
# Phantom Warrior (Archer)
*Source: Curse of Strahd p. 142, Derived from Phantom Warrior (CoS)*  

```ad-statblock
title: Phantom Warrior (Archer)
![[/6. Mechanics/Bestiary/Undead/Token/phantom-warrior-archer.png#token]]
*Medium undead, Any alignment*

- **Armor Class** 16 
- **Hit Points** `dice: 6d8 + 18|text(45)` (6d8 + 18) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|11 (+0)|16 (+3)| 8 (-1)|10 (+0)|15 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +2, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 12
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** cold, necrotic, poison
- **Condition Immunities** charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained
- **Languages** any languages it knew in life
- **Challenge** 3

## Traits

***Ethereal Sight.*** The phantom warrior can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa.

***Incorporeal Movement.*** The phantom warrior can move through other creatures and objects as if they were difficult terrain. It takes `dice: 1d10` (`1d10`) force damage if it ends its turn inside an object.

***Spectral Armor and Shield.*** The phantom warrior's AC accounts for its spectral armor and shield.

## Actions

***Multiattack.*** The phantom warrior makes two attacks with its spectral longsword or spectral longbow.

***Spectral Longsword.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3` (`1d8 + 3`) force damage.

***Etherealness.*** The phantom warrior enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane.

***Spectral Longbow.*** *Ranged Weapon Attack:* `dice: d20+2` (+2 to hit), range 150/600 ft., one target. Hit: `dice: 1d8` (`1d8`) force damage.
```
^statblock