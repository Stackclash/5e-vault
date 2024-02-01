---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/1
- monster/environment/hill
- monster/environment/underdark
- monster/size/small
- monster/type/monstrosity
statblock: inline
aliases: ["Xvart Warlock of Raxivort"]
---
# [[5. Mechanics\Bestiary\Monstrosity\Xvart Warlock Of Raxivort (MPMM).md|Xvart Warlock of Raxivort]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 267*  

Some xvarts are spawned with a trace of Raxivort's divine energy. These xvarts usually form a pact with him and wield magic in his service as warlocks.

## Xvarts

Xvarts are cowardly, greedy creatures spawned by a renegade demigod, Raxivort. They have blue skin, orange eyes, and receding hairlines, mirroring their creator's appearance. They stand about 3 feet tall.

Raxivort spent centuries watching over the treasury of Graz'zt, and in time, Raxivort plundered his lord's vault. One of the treasures he stole was the *Infinity Spindle*, a crystalline shard that could transform even a creature as lowly as Raxivort into a demigod. After his apotheosis, Raxivort forged the Black Sewers, a realm within Pandemonium that he filled with his beloved creatures, rats and bats, which xvarts befriend to this day. He enjoyed his reign only briefly before Graz'zt unleashed his vengeance. The demon prince urged villains far and wide to pursue the Infinity Spindle for themselves and destroy Raxivort.

```statblock
"name": "Xvart Warlock of Raxivort (MPMM)"
"size": "Small"
"type": "monstrosity"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"stats":
- !!int "8"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "11"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "3"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "Abyssal"
"cr": "1"
"traits":
- "desc": "The xvart casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 11):\n\nAt will:\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]]\
    \ (self only), [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1/day each:\
    \ [[5. Mechanics/Spells/Burning Hands.md|burning hands]], [[5. Mechanics/Spells/Invisibility.md|invisibility]]"
  "name": "spells"
- "desc": "When the xvart reduces an enemy to 0 hit points, the xvart gains 4 temporary\
    \ hit points."
  "name": "Raxivort's Blessing"
- "desc": "The xvart can communicate with ordinary [[5. Mechanics/Bestiary/Beast/Bat.md|bats]]\
    \ and [[5. Mechanics/Bestiary/Beast/Rat.md|rats]], as well as [[5. Mechanics/Bestiary/Beast/Giant Bat.md|giant bats]]\
    \ and [[5. Mechanics/Bestiary/Beast/Giant Rat.md|giant rats]]."
  "name": "Raxivort's Tongue"
"actions":
- "desc": "The xvart makes two Scimitar or Raxivort's Bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) slashing damage."
  "name": "Scimitar"
- "desc": "Ranged Spell Attack: dice: d20+3 (+3 to hit), range 30 ft., one creature.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) poison damage."
  "name": "Raxivort's Bite"
"bonus_actions":
- "desc": "The xvart takes the [[/5. Mechanics/Rules/Actions.md#Disengage|Disengage]]\
    \ action."
  "name": "Low Cunning"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/monstrosity/token/xvart-warlock-of-raxivort.png"
```
^statblock

## Environment

hill, underdark

## Harvester Table
```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```