---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/5
- monster/environment/underdark
- monster/size/large
- monster/type/aberration
statblock: inline
aliases: ["Otyugh"]
---
# [[5. Mechanics\Bestiary\Aberration\Otyugh.md|Otyugh]]
*Source: Monster Manual p. 248. Available in the SRD.*  

An otyugh is a grotesque, bulbous creature borne along on three sturdy legs, its eyes and nose set along a vine-like stalk that snakes from the top of its bloated body. Two rubbery tentacles end in spiky, leaf-like appendages that the otyugh uses to shovel food into its gaping maw.

An otyugh buries itself under mounds of offal and carrion, leaving only its sensory stalk exposed. When an edible creature happens by, the otyugh's tentacles erupt from the filth and grab hold of it.

Otyughs make the most of any opportunity to ambush and devour prey. They use a limited form of telepathy to urge sentient creatures toward their lairs, sometimes by pretending to be something else.

## Dwellers in Darkness

Otyughs tolerate bright light only when considerable stores of carrion or garbage lie within reach. In the wilderness, they dwell in stagnant swamps, scum-filled ponds, and damp forest dells. The scent of graveyards, city sewers, village middens, and manure-filled animal pens attracts them to civilized areas.

Since otyughs lack concern for anything but food, their nests sometimes accumulate a variety of treasures shed from their victims and mixed among the junk.

## Symbiotic Guardians

Sentient subterranean beings can coexist with otyughs, employing them as garbage disposals. With such plentiful sustenance, otyughs grow fat in their wallows, unmoved by any other drive or desire. This sedentary gluttony makes them reliable guardians. As long as it is fed, an otyugh refrains from attacking other creatures. However, would-be otyugh masters can easily underestimate the quantity of waste, carrion, and meat necessary to keep an otyugh from wandering off in search of food. More than one "trained" otyugh has eaten its keeper after devouring all the waste in its wallow.

```statblock
"name": "Otyugh"
"size": "Large"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"stats":
- !!int "16"
- !!int "11"
- !!int "19"
- !!int "6"
- !!int "13"
- !!int "6"
"speed": "30 ft."
"saves":
  "Constitution": !!int "7"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Otyugh"
"cr": "5"
"traits":
- "desc": "The otyugh can magically transmit simple messages and images to any creature\
    \ within 120 feet of it that can understand a language. This form of telepathy\
    \ doesn't allow the receiving creature to telepathically respond."
  "name": "Limited Telepathy"
"actions":
- "desc": "The otyugh makes three attacks: one with its bite and two with its tentacles."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 3|avg (2d8 + 3) piercing damage. If the target is a creature,\
    \ it must succeed on a DC 15 Constitution saving throw against disease or become\
    \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] until the disease is cured.\
    \ Every 24 hours that elapse, the target must repeat the saving throw, reducing\
    \ its hit point maximum by dice: 1d10|avg (1d10) on a failure. The disease\
    \ is cured on a success. The target dies if the disease reduces its hit point\
    \ maximum to 0. This reduction to the target's hit point maximum lasts until the\
    \ disease is cured."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 10 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) bludgeoning damage plus dice: 1d8|avg\
    \ (1d8) piercing damage. If the target is Medium or smaller, it is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 13) and [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ until the grapple ends. The otyugh has two tentacles, each of which can grapple\
    \ one target."
  "name": "Tentacle"
- "desc": "The otyugh slams creatures [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ by it into each other or a solid surface. Each creature must succeed on a DC\
    \ 14 Constitution saving throw or take dice: 2d6 + 3|avg (2d6 + 3) bludgeoning\
    \ damage and be [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]] until the end\
    \ of the otyugh's next turn. On a successful save, the target takes half the bludgeoning\
    \ damage and isn't [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]."
  "name": "Tentacle Slam"
"source":
- "MM"
- "HotDQ"
- "RoT"
- "SKT"
- "TftYP"
- "ToA"
- "WDMM"
- "IMR"
- "JttRC"
- "PaBTSO"
- "ToFW"
- "DoDk"
"image": "compendium/bestiary/aberration/token/otyugh.png"
```
^statblock

## Environment

underdark
