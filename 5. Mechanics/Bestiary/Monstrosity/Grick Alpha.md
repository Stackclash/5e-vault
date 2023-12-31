---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/7
- monster/environment/forest
- monster/environment/underdark
- monster/size/large
- monster/type/monstrosity
statblock: inline
aliases: ["Grick Alpha"]
---
# [[5. Mechanics\Bestiary\Monstrosity\Grick Alpha.md|Grick Alpha]]
*Source: Monster Manual p. 173*  

The wormlike grick waits unseen, blending in with the rock of the caves and caverns it haunts. Only when prey comes near does it rear up, its four barbed tentacles unfurling to reveal its hungry, snapping beak.

## Passive Predators

Gricks rarely hunt. Instead, they drag their rubbery bodies to places where creatures regularly pass, lurking out of sight amid rocky rubble and debris, squeezing into burrows, holes, or crevices, climbing up to ledges, or coiling around stalactites to drop on unwary prey. A grick consumes virtually anything that moves except for other gricks. It targets the nearest prey, grabbing a fallen creature with its tentacles and dragging it off to eat alone.

## Roving Ambushers

Gricks remain in an area until the food supply dwindles, often because sentient creatures become aware of their presence and plot alternate routes around their lairs. When prey is scarce in the Underdark, gricks venture aboveground to hunt in the wilderness, lurking in trees or on cliff-side ledges. A grick pack is often led by a single well-fed, oversized alpha around which the others congregate.

## Spoils of Slaughter

Over time, grick lairs accumulate the cast-off possessions of intelligent prey, and expert guides know to look out for these tell-tale signs. Underdark explorers sometimes seal off the routes leading to and from a grick lair to starve them, then claim the wealth of the foul creatures' victims.

```statblock
"name": "Grick Alpha"
"size": "Large"
"type": "monstrosity"
"alignment": "Neutral"
"ac": !!int "18"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"stats":
- !!int "18"
- !!int "16"
- !!int "15"
- !!int "4"
- !!int "14"
- !!int "9"
"speed": "30 ft., climb 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": ""
"cr": "7"
"traits":
- "desc": "The grick has advantage on Dexterity (Stealth) checks made to hide in rocky\
    \ terrain."
  "name": "Stone Camouflage"
"actions":
- "desc": "The grick makes two attacks: one with its tail and one with its tentacles.\
    \ If it hits with its tentacles, the grick can make one beak attack against the\
    \ same target."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) bludgeoning damage."
  "name": "Tail"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 10 ft., one target.\
    \ Hit: dice: 4d8 + 4|avg (4d8 + 4) slashing damage."
  "name": "Tentacles"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) piercing damage."
  "name": "Beak"
"source":
- "MM"
- "WDMM"
- "CM"
- "DSotDQ"
- "PaBTSO"
"image": "compendium/bestiary/monstrosity/token/grick-alpha.png"
```
^statblock

## Environment

underdark, forest