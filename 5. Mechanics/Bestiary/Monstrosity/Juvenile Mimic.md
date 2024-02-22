---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/tce
- monster/cr/0
- monster/size/tiny
- monster/type/monstrosity/shapechanger
statblock: inline
aliases: ["Juvenile Mimic"]
---
# [[5. Mechanics\Bestiary\Monstrosity\Juvenile Mimic.md|Juvenile Mimic]]
*Source: Tasha's Cauldron of Everything p. 167*  

```statblock
"name": "Juvenile Mimic"
"size": "Tiny"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "7"
"hit_dice": "2d4 + 2"
"stats":
- !!int "1"
- !!int "12"
- !!int "13"
- !!int "10"
- !!int "13"
- !!int "10"
"speed": "10 ft., climb 10 ft."
"skillsaves":
  "Stealth": !!int "3"
"damage_immunities": "acid"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#prone|prone]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Undercommon, telepathy 120 ft."
"cr": "0"
"traits":
- "desc": "While the mimic remains motionless, it is indistinguishable from an ordinary\
    \ object."
  "name": "False Appearance (Object Form Only)"
- "desc": "The mimic can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage plus dice: 1d4|avg (1d4) acid damage."
  "name": "Bite"
- "desc": "The mimic polymorphs into an object or back into its true, amorphous form.\
    \ Its statistics are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shape-Shift"
"source":
- "TCE"
"image": "5. Mechanics/Bestiary/Monstrosity/token/juvenile-mimic-tce.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```