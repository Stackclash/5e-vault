---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'underdark, urban'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/medium
  - monster/type/monstrosity/shapechanger
aliases:
  - Mimic
---
# [[5. Mechanics\Bestiary\Monstrosity\Mimic.md|Mimic]]
*Source: Monster Manual p. 220, Curse of Strahd, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Mimics are shapeshifting predators able to take on the form of inanimate objects to lure creatures to their doom. In dungeons, these cunning creatures most often take the form of doors and chests, having learned that such forms attract a steady stream of prey.

## Imitative Predators

Mimics can alter their outward texture to resemble wood, stone, and other basic materials, and they have evolved to assume the appearance of objects that other creatures are likely to come into contact with. A mimic in its altered form is nearly unrecognizable until potential prey blunders into its reach, whereupon the monster sprouts pseudopods and attacks.

When it changes shape, a mimic excretes an adhesive that helps it seize prey and weapons that touch it. The adhesive is absorbed when the mimic assumes its amorphous form and on parts the mimic uses to move itself.

## Cunning Hunters

Mimics live and hunt alone, though they occasionally share their feeding grounds with other creatures. Although most mimics have only predatory intelligence, a rare few evolve greater cunning and the ability to carry on simple conversations in Common or Undercommon. Such mimics might allow safe passage through their domains or provide useful information in exchange for food.

> [!quote] A quote from X the Mystic's 3rd rule of dungeon survival  
> 
> Sometimes a chest is just a chest, but don't bet on it.


```statblock
"name": "Mimic"
"size": "Medium"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "15"
  - !!int "5"
  - !!int "13"
  - !!int "8"
"speed": "15 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"damage_immunities": "acid"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Prone|prone]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "2"
"traits":
  - "desc": "The mimic can use its action to polymorph into an object or back into\
      \ its true, amorphous form. Its statistics are the same in each form. Any equipment\
      \ it is wearing or carrying isn't transformed. It reverts to its true form if\
      \ it dies."
    "name": "Shapechanger"
  - "desc": "The mimic adheres to anything that touches it. A Huge or smaller creature\
      \ adhered to the mimic is also [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
    "name": "Adhesive (Object Form Only)"
  - "desc": "While the mimic remains motionless, it is indistinguishable from an ordinary\
      \ object."
    "name": "False Appearance (Object Form Only)"
  - "desc": "The mimic has advantage on attack rolls against any creature [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ by it."
    "name": "Grappler"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) bludgeoning damage. If the mimic is in object form, the target is subjected\
      \ to its Adhesive trait."
    "name": "Pseudopod"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) piercing damage plus 4 (d8) acid damage."
    "name": "Bite"
"source":
  - "MM"
  - "CoS"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/mimic.webp"
```
^statblock

## Environment

underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
