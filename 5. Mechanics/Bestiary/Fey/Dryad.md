---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: forest
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/1
  - monster/environment/forest
  - monster/size/medium
  - monster/type/fey
aliases:
  - Dryad
---
# [[5. Mechanics\Bestiary\Fey\Dryad.md|Dryad]]
*Source: Monster Manual p. 121, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Travelers entering a forest might catch a glimpse of a feminine form flitting through the trees. Warm laughter hangs on the air, drawing those who hear it deeper into the emerald shadows.

## Treebound

Powerful fey will sometimes bind lesser fey spirits to trees, transforming them into dryads. This is sometimes done as a punishment when the fey spirit falls in love with a mortal and that love is forbidden.

A dryad can emerge from the tree and travel the lands around it, but the tree remains her home and roots her to the world. As long as the tree remains healthy and unharmed, the dryad stays forever youthful and alluring. If the tree is harmed, she suffers. If the tree is ever destroyed, the dryad descends into madness.

## Reclusive Fey

Dryads act as guardians of their woodland demesnes. Shy and reclusive, they watch interlopers from the trees. A dryad struck by the beauty of a stranger might investigate more closely, perhaps even try to lure the individual away to be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]].

Dryads work with other sylvan creatures to defend their forests. Unicorns, treants, and satyrs live alongside them, in addition to druids that share the dryads' devotion to the woods they call home.

## Woodland Magic

Dryads can speak with plants and animals. They can teleport from one tree to another, luring interlopers away from their groves. If pressed, a dryad can beguile humanoids with her enchantments, turning enemies into friends. They also know a handful of useful spells.

```statblock
"name": "Dryad"
"size": "Medium"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "11"
"ac_class": "16 with [[5. Mechanics/Spells/Barkskin.md|barkskin]]"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "1"
"stats":
  - !!int "10"
  - !!int "12"
  - !!int "11"
  - !!int "14"
  - !!int "15"
  - !!int "18"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Elvish, Sylvan"
"cr": "1"
"traits":
  - "desc": "The dryad's innate spellcasting ability is Charisma (spell save DC 14).\
      \ The dryad can innately cast the following spells, requiring no material components:\n\
      \nAt will: [[5. Mechanics/Spells/Druidcraft.md|druidcraft]]\n\n3/day each:\
      \ [[5. Mechanics/Spells/Entangle.md|entangle]], [[5. Mechanics/Spells/Goodberry.md|goodberry]]\n\
      \n1/day each: [[5. Mechanics/Spells/Barkskin.md|barkskin]], [[5. Mechanics/Spells/Pass Without Trace.md|pass without trace]],\
      \ [[5. Mechanics/Spells/Shillelagh.md|shillelagh]]"
    "name": "Innate Spellcasting"
  - "desc": "The dryad has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The dryad can communicate with beasts and plants as if they shared a\
      \ language."
    "name": "Speak with Beasts and Plants"
  - "desc": "Once on her turn, the dryad can use 10 feet of her movement to step magically\
      \ into one living tree within her reach and emerge from a second living tree\
      \ within 60 feet of the first tree, appearing in an unoccupied space within\
      \ 5 feet of the second tree. Both trees must be large or bigger."
    "name": "Tree Stride"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit (+6 to hit with shillelagh), reach 5\
      \ ft., one target. Hit: 2 (d4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning\
      \ damage with shillelagh."
    "name": "Club"
  - "desc": "The dryad targets one humanoid or beast that she can see within 30 feet\
      \ of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom\
      \ saving throw or be magically [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]].\
      \ The [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] creature regards the\
      \ dryad as a trusted friend to be heeded and protected. Although the target\
      \ isn't under the dryad's control, it takes the dryad's requests or actions\
      \ in the most favorable way it can.\n\nEach time the dryad or its allies do\
      \ anything harmful to the target, it can repeat the saving throw, ending the\
      \ effect on itself on a success. Otherwise, the effect lasts 24 hours or until\
      \ the dryad dies, is on a different plane of existence from the target, or ends\
      \ the effect as a bonus action. If a target's saving throw is successful, the\
      \ target is immune to the dryad's Fey Charm for the next 24 hours.\n\nThe dryad\
      \ can have no more than one humanoid and up to three beasts [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ at a time."
    "name": "Fey Charm"
"source":
  - "MM"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Fey/token/dryad.webp"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
