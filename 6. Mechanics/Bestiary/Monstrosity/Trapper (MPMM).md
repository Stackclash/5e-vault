---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/large
- monster/type/monstrosity
statblock: inline
---
# Trapper
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 245, Volo's Guide to Monsters p. 194*  

A trapper is a manta-like creature that usually lurks in subterranean environments. It can change the color and texture of its tough, outward-facing side to help it blend in with its surroundings, while its soft, inward-facing side clings to the floor, wall, or ceiling in its hunting territory. It remains motionless as it waits for prey to come close. When a target is within its reach, it peels itself away from the surface and wraps around its prey, crushing, smothering, and then digesting it. Only a scattering of bones, metal, treasure, and other indigestible bits is left behind.

A trapper's ability to alter the color and texture of its outer side enables it to blend in with any surface made of stone, earth, or wood, masking its presence to any but the most rigorous scrutiny. It can't change its texture to that of a grassy or snow-covered surface, but it is just cunning enough to change its color to match and then conceal itself under a thin layer of vegetation or actual snow.

A trapper that lurks on the floor of its hunting grounds can cover any remains there with its body, making them look like irregularities in the surface. The creature might instead attach itself to a nearby wall or a ceiling, using the remnants as bait; any creature that stops to investigate the bones for valuables becomes the trapper's next meal.

A trapper needs to eat a [[/6. Mechanics/Races/Halfling.md|halfling]]-sized meal once per week to remain sated. Given a steady supply of food, trappers are content to stay in one place, making them a threat along well-traveled dungeon corridor and on routes through the wilderness that see a lot of traffic. When prey is scarce, a trapper enters a state of hibernation that can last for months, though it is still aware when prey comes near. A trapper on the verge of starvation might defy its instincts and abandon its old territory in search of better hunting.

```statblock
"name": "Trapper"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "68"
"hit_dice": "8d10 + 24"
"stats":
- !!int "17"
- !!int "10"
- !!int "17"
- !!int "2"
- !!int "13"
- !!int "4"
"speed": "walk 20 ft., climb 20 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "blindsight 30 ft., darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the trapper is motionless on a floor, wall, or ceiling at the start\
    \ of combat, it has advantage on its initiative roll. Moreover, if a creature\
    \ hasn't observed the trapper move or act, that creature must succeed on a DC\
    \ 18 Intelligence ([[6. Mechanics/Rules/Skills.md#Investigation|Investigation]])\
    \ check to discern that the trapper isn't part of the floor, wall, or ceiling."
  "name": "False Appearance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The trapper can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "One Large or smaller creature within 10 feet of the trapper must succeed\
    \ on a DC 13 Dexterity saving throw or be [[6. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 14). Until the grapple ends, the target takes dice: 3d6 + 3|avg\
    \ (3d6 + 3) bludgeoning damage plus dice: 1d6|avg (1d6) acid damage at the\
    \ start of each of its turns. While [[6. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ in this way, the target is [[6. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ [[6. Mechanics/Rules/Conditions.md#blinded|blinded]], and deprived of air. The\
    \ trapper can smother only one creature at a time."
  "name": "Smother"
"source":
- "MPMM"
- "VGM"
"image": "6. Mechanics/Bestiary/Monstrosity/token/trapper.png"
```
^statblock

## Environment

underdark