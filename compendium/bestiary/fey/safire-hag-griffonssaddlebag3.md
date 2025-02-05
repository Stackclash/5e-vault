---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/4
- monster/size/medium
- monster/type/fey
aliases: ["Safire Hag"]
---
# [Safire Hag](compendium\bestiary\fey/safire-hag-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The vile hags that call this forest home are excellent reflections of it's deadly allure. With skillful illusions and superb control over plants, these witches work individually and in covens to exert influence over the region. They thrive by harvesting the wood's plentiful herbs for their craft, but have a special affinity for the acidic mucus produced by their domesticated [spider-newt](compendium/bestiary/monstrosity/spider-newt-griffonssaddlebag3.md) mounts.

Although their true forms reflect their sickly, vile nature, they present to the world façades that can range from kindly medicine women to endangered maidens. From their huts in the Safire Wood, these powerful fey sway public opinion against the [hedge mages](compendium/bestiary/humanoid/hedge-mage-griffonssaddlebag3.md) with propaganda to prop up their own image.

```statblock
"name": "Safire Hag (GriffonsSaddlebag3)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "14"
"ac_class": "natural armor; 16 with barkskin"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "16"
- !!int "15"
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "17"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
"skillsaves":
  "Nature": !!int "2"
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Perception": !!int "4"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Elvish, Sylvan"
"cr": "4"
"traits":
- "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 13). She\
    \ can innately cast the following spells, requiring no material components:\n\n\
    At will: [barkskin](compendium/spells/barkskin.md), [entangle](compendium/spells/entangle.md),\
    \ [minor illusion](compendium/spells/minor-illusion.md), [poison spray](compendium/spells/poison-spray.md)\
    \ (as a 5th-level spellcaster)\n\n3/day: [speak with plants](compendium/spells/speak-with-plants.md),\
    \ [spike growth](compendium/spells/spike-growth.md)"
  "name": "Innate Spellcasting"
- "desc": "While the hag remains motionless and her Illusory Appearance isn't active,\
    \ she is nearly indistinguishable from an ordinary, partially decayed tree. A\
    \ creature must take an action to visually inspect the tree and succeed on a DC\
    \ 20 Intelligence ([Investigation](/compendium/rules/skills.md#Investigation))\
    \ check to discern that it is a hag."
  "name": "Arborous Appearance"
"actions":
- "desc": "The hag makes two attacks with her claws. Fetid Claws. Melee Weapon Attack:\
    \ +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus\
    \ 4 (1d8) necrotic damage."
  "name": "Multiattack"
- "desc": "The hag magically animates a Large or larger tree she touches, corrupting\
    \ it. The tree has the same statistics as a safire treant, except it has half\
    \ as many hit points, it has resistance to necrotic damage, and its Slam attack\
    \ deals necrotic damage instead of bludgeoning damage. The corrupted tree acts\
    \ as an ally of the hag. The tree remains animate for 1 day or until it dies;\
    \ until the hag uses this action again or she dies; or until the hag takes a bonus\
    \ action to turn it back into an inanimate tree. The tree then withers and dies."
  "name": "Corrupt Tree (1/Day)"
- "desc": "The hag covers herself and anything she is wearing or carrying with a magical\
    \ illusion that makes her look like another creature of her general size and humanoid\
    \ shape. The illusion ends if the hag takes a bonus action to end it or if she\
    \ dies.\n\nThe changes wrought by this effect fail to hold up to physical inspection.\
    \ For example, the hag could appear to have smooth skin, but someone touching\
    \ her would feel her bark- like skin. Otherwise, a creature must take an action\
    \ to visually inspect the illusion and succeed on a DC 20 Intelligence ([Investigation](/compendium/rules/skills.md#Investigation))\
    \ check to discern that the hag is disguised."
  "name": "Illusory Appearance"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```