---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/monstrosity
aliases: ["Gorgon"]
---
# Gorgon
*Source: Monster Manual p. 171. Available in the SRD.*  

Few creatures that encounter a gorgon live to tell about it. Its body is covered in iron plates, and its nostrils fume with green vapor.

## Horrific Structure

A gorgon's iron plates range from steely black to gleaming silver, but this natural armor in no way hinders its movement or mobility. The oils of its body lubricate the armor. A sick or inactive gorgon gathers rust like fungus or mange. When a rusty gorgon moves, its plates squeal as they rub together.

## Monstrous Predator

When a gorgon spots potential prey, it charges with a hideous clamor of metal on metal. When the gorgon hits, it pulverizes the foe and sends its sprawling, then tramples it to death with its cruel hooves. Faced with multiple foes, the gorgon exhales its deadly vapor to overcome the creatures it touches by turning them to stone. When it grows hungry, it smashes its [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]] prey to rubble and uses its strong teeth to grind the stone into a powder that provides nourishment. The crisscrossing network of trampled trails and splintered trees that surrounds a gorgon lair is strewn with the uneaten fragments of its shattered foes.

```statblock
"name": "Gorgon"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "19"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "20"
- !!int "11"
- !!int "18"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "40 ft."
"skillsaves":
  "Perception": "+4"
"condition_immunities": "petrified"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": ""
"cr": "5"
"traits":
- "desc": "If the gorgon moves at least 20 feet straight toward a creature and then\
    \ hits it with a gore attack on the same turn, that target must succeed on a DC\
    \ 16 Strength saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]].\
    \ If the target is [[/5. Mechanics/Rules/Conditions.md#prone|prone]], the gorgon\
    \ can make one attack with its hooves against it as a bonus action."
  "name": "Trampling Charge"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: 18 (dice: 2d12 + 5|avg (2d12 + 5)) piercing damage."
  "name": "Gore"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: 16 (dice: 2d10 + 5|avg (2d10 + 5)) bludgeoning damage."
  "name": "Hooves"
- "desc": "The gorgon exhales petrifying gas in a 30-foot cone. Each creature in that\
    \ area must succeed on a DC 13 Constitution saving throw. On a failed save, a\
    \ target begins to turn to stone and is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]].\
    \ The [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]] target must repeat\
    \ the saving throw at the end of its next turn. On a success, the effect ends\
    \ on the target. On a failure, the target is [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]]\
    \ until freed by the  [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
    \ spell or other magic."
  "name": "Petrifying Breath (Recharge 5-6)"
"source":
- "MM"
- "RoT"
- "TftYP"
- "WDMM"
- "GoS"
- "BGDIA"
- "WBtW"
- "LoX"
"image": "5. Mechanics/Bestiary/Monstrosity/token/gorgon.png"
```
^statblock

## Environment

grassland, forest, hill