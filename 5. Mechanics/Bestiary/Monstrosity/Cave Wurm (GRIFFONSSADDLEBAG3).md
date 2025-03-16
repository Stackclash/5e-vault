---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: null
size: Gargantuan
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/11
  - monster/size/gargantuan
  - monster/type/monstrosity
aliases:
  - Cave Wurm
---
# [[5. Mechanics/Bestiary/Monstrosity/Cave Wurm (GRIFFONSSADDLEBAG3).md|Cave Wurm]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Viewed by most Ilridunians as the reason to respect the bravery of the city's miners, cave wurms are living traps in the tunnels below. Their open maw can almost perfectly imitate a normal cave or tunnel so that its prey can begin the process of digestion for it. Even when closed, the wurm's mouth so closely resembles a typical cavern wall that there are almost no records of anyone surviving an encounter once they've been swallowed. Many mining foremen lament the losses caused by cave wurms. Their rapid burrowing makes mapping their movements virtually impossible, and also contributes to earthquakes, floods, and tunnel collapses.

```statblock
"name": "Cave Wurm (GRIFFONSSADDLEBAG3)"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "181"
"hit_dice": "11d20 + 66"
"stats":
- !!int "25"
- !!int "10"
- !!int "22"
- !!int "3"
- !!int "8"
- !!int "3"
"speed": "40 ft., burrow 30 ft."
"saves":
  "Wisdom": !!int "3"
  "Constitution": !!int "10"
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "blindsight 30 ft., tremorsense 120 ft., passive Perception 9"
"languages": ""
"cr": "11"
"traits":
- "desc": "A creature that hasn't observed the wurm move or act must succeed on a\
    \ DC 18 Intelligence (Investigation) check to discern that the wurm isn't an ordinary\
    \ stalactite- and stalagmite-filled cavern (if its mouth is open) or cave wall\
    \ (if its mouth is closed)."
  "name": "False Appearance"
- "desc": "A Large or smaller creature that hasn't discerned the wurm's presence can\
    \ enter the wurm's open mouth and stop there. If the wurm makes a bite attack\
    \ against a creature in its mouth, the target must first make a DC 17 Dexterity\
    \ saving throw. On a successful save, the creature can use its reaction, if available,\
    \ to move up to its speed to exit the mouth, and if the creature ends this movement\
    \ more than 10 feet away from the wurm, the attack automatically misses. On a\
    \ failed save, or if the creature is unable to exit the wurm's mouth, the bite\
    \ attack automatically hits and the creature fails its Dexterity saving throw\
    \ to avoid being swallowed."
  "name": "Entrapment"
- "desc": "The wurm can burrow through solid rock at half its burrowing speed and\
    \ leaves a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- "desc": "The wurm makes two attacks: one with its bite and one with its slam. If\
    \ there are two or more creatures in the wurm's mouth, it can instead make a bite\
    \ attack against each of those creatures."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 20\
    \ (3d8 + 7) piercing damage. If the target is a Large or smaller creature, it\
    \ must succeed on a DC 17 Dexterity saving throw or be swallowed by the wurm.\
    \ A swallowed creature is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] and\
    \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], it has total cover\
    \ against attacks and other effects outside the wurm, and it takes 10 (3d6) acid\
    \ damage and 10 (3d6) bludgeoning damage at the start of each of the wurm's turns.\n\
    \nIf the wurm takes 30 damage or more on a single turn from a creature inside\
    \ it, the wurm must succeed on a DC 20 Constitution saving throw at the end of\
    \ that turn or regurgitate all swallowed creatures, which fall [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]\
    \ in a space within 10 feet of the wurm. If the wurm dies, a swallowed creature\
    \ is no longer [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] by it\
    \ and can escape from the corpse by using 20 feet of movement, exiting [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 17\
    \ (3d6 + 7) bludgeoning damage, and the target must make a DC 19 Strength saving\
    \ throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]. If the saving\
    \ throw fails by 5 or more, the target is also [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
    \ until the start of the wurm's next turn."
  "name": "Slam"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
