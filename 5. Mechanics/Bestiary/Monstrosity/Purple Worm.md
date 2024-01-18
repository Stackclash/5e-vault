---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/15
- monster/environment/desert
- monster/environment/underdark
- monster/size/gargantuan
- monster/type/monstrosity
statblock: inline
aliases: ["Purple Worm"]
---
# [[5. Mechanics\Bestiary\Monstrosity\Purple Worm.md|Purple Worm]]
*Source: Monster Manual p. 255. Available in the SRD.*  

The massive burrowing monster known as the purple worm terrorizes the creatures of the Underdark as it chews through solid rock in pursuit of prey. A dimwitted, ravenous force of nature, this creature regards anything it encounters as food.

## Ravenous Hunters

Loud noise attracts purple worms, which have been known to interrupt underground battles and tear through subterranean cities seeking prey. The underground civilizations of the drow, the duergar, and the mind flayers maintain special wards around their settlements to deter these monsters.

Though most common in the Underdark, purple worms are frequently seen on the surface world in rocky and mountainous lands. The maw of a purple worm is large enough to swallow a horse whole, and no creature is safe from its hunger. It lunges forward by rhythmically compressing and expanding its body, catching other Underdark dwellers by surprise with the speed of its advance.

## Boons of the Worm

When a purple worm burrows through the ground, it consumes earth and rock, which it breaks down and constantly excretes. Precious metals and gems can thus be found within the bodies of purple worms, which are targeted by particularly brave and foolhardy treasure hunters.

A burrowing purple worm constantly creates new tunnels throughout the Underdark, which are quickly made use of by other creatures as corridors and highways. Because a purple worm rarely returns to its own tunnels, such passageways are a good place to avoid these monsters. Areas rich in prey quickly become interlaced with complex tunnel systems resulting from several worms hunting together.

```statblock
"name": "Purple Worm"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "18"
"hp": !!int "247"
"hit_dice": "15d20 + 90"
"stats":
- !!int "28"
- !!int "7"
- !!int "22"
- !!int "1"
- !!int "8"
- !!int "4"
"speed": "50 ft., burrow 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Constitution": !!int "11"
"senses": "blindsight 30 ft., tremorsense 60 ft., passive Perception 9"
"languages": ""
"cr": "15"
"traits":
- "desc": "The worm can burrow through solid rock at half its burrow speed and leaves\
    \ a 10-foot-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- "desc": "The worm makes two attacks: one with its bite and one with its stinger."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d8 + 9|avg (3d8 + 9) piercing damage. If the target is a Large\
    \ or smaller creature, it must succeed on a DC 19 Dexterity saving throw or be\
    \ swallowed by the worm. A swallowed creature is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ and [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]], it has total cover\
    \ against attacks and other effects outside the worm, and it takes dice: 6d6|avg\
    \ (6d6) acid damage at the start of each of the worm's turns.\n\nIf the worm\
    \ takes 30 damage or more on a single turn from a creature inside it, the worm\
    \ must succeed on a DC 21 Constitution saving throw at the end of that turn or\
    \ regurgitate all swallowed creatures, which fall [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ in a space within 10 feet of the worm. If the worm dies, a swallowed creature\
    \ is no longer [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]] by it\
    \ and can escape from the corpse by using 20 feet of movement, exiting [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14 to hit), reach 10 ft., one creature.\
    \ Hit: dice: 3d6 + 9|avg (3d6 + 9) piercing damage, and the target must\
    \ make a DC 19 Constitution saving throw, taking dice: 12d6|avg (12d6) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Tail Stinger"
"source":
- "MM"
- "EGW"
- "CM"
- "JttRC"
- "LoX"
- "DSotDQ"
- "PSI"
- "PaBTSO"
- "ToFW"
- "DoDk"
"image": "compendium/bestiary/monstrosity/token/purple-worm.png"
```
^statblock

## Environment

underdark, desert