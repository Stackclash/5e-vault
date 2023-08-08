---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/aberration
statblock: inline
---
# Grell
*Source: Monster Manual p. 172, Princes of the Apocalypse, Tales from the Yawning Portal, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Infernal Machine Rebuild, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Keys from the Golden Vault*  

A grell resembles a bulbous floating brain with a wide, sharp beak. Its ten long tentacles are made of hundreds of ring-shaped muscles sheathed in tough fibrous hide. Sharp barbs line the tip each tentacle and inject paralytic venom. The grell can partially retract its barbs into its tentacles to handle or manipulate objects it doesn't want to pierce or tear.

Grells have no eyes and floats by means of a sort of levitation. They have keen hearing, however, and their skin is sensitive to vibrations and electrical fields, allowing them to detect the presence of creatures and objects in their immediate vicinity. The creature's ability to manipulate electricity to sense and move also allow it to absorb lightning without harm.

Although solitary by nature, grells sometimes gather in small groups called covens.

## Floating Ambushers

A grell prefers to ambush lone creatures or stragglers, hovering silently near the ceiling of a passage or cavern until a suitable target passes below, whereupon it descends quickly and wraps its tentacles around its prey. It then floats away to its lair with the [[6. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]] creature in its clutches.

## Alien Devourers

Grell are alien predators that group other creatures into three categories: edibles, inedibles, and Great Eaters (those rare creatures that might prey on a grell). Grells have no compunction about attacking creatures they classify as edible, including humanoids. They tend to avoid bigger creatures that they have little hope of carrying away.

A grell will sometimes allow adventurers to wage war on the other monstrous inhabitants of the dungeon complex it calls home, staying out of the adventurers' way as they dispose of larger threats while waiting for the right time to strike.

> [!quote]- A quote from An adventurer's account of a grell attack in Khyber, published in The Korranberg Chronicle  
> 
> Our intrepid rogue climbed up the shaft to secure a rope. There was a gasp, and the rope fell. We never saw her again.


## Stat Block

```statblock
"name": "Grell"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "11"
- !!int "9"
"speed": "walk 10 ft., fly 30 ft. (hover)"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
"damage_immunities": "lightning"
"condition_immunities": "blinded, prone"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 14"
"languages": "Grell"
"cr": "3"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The grell makes two attacks: one with its tentacles and one with its beak."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) piercing damage, and the target must\
    \ succeed on a DC 11 Constitution saving throw or be [[6. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 minute. The [[6. Mechanics/Rules/Conditions.md#poisoned|poisoned]] target\
    \ is [[6. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], and it can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on a success.\n\
    \nThe target is also [[6. Mechanics/Rules/Conditions.md#grappled|grappled]] (escape\
    \ DC 15). If the target is Medium or smaller, it is also [[6. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ until this grapple ends. While grappling the target, the grell has advantage\
    \ on attack rolls against it and can 't use this attack against other targets.\
    \ When the grell moves, any Medium or smaller target it is grappling moves with\
    \ it."
  "name": "Tentacles"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 2|avg (2d4 + 2) piercing damage."
  "name": "Beak"
"source":
- "MM"
- "PotA"
- "TftYP"
- "WDH"
- "WDMM"
- "IMR"
- "IDRotF"
- "CM"
- "KftGV"
"image": "6. Mechanics/Bestiary/Aberration/token/grell.png"
```
^statblock

## Environment

underdark