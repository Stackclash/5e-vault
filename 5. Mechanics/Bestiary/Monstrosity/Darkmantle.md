---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: underdark
size: Small
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/underdark
  - monster/size/small
  - monster/type/monstrosity
aliases:
  - Darkmantle
---
# [[5. Mechanics\Bestiary\Monstrosity\Darkmantle.md|Darkmantle]]
*Source: Monster Manual p. 46. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

A darkmantle clings to cavern ceilings, remaining perfectly still as it waits for creatures to pass beneath it. From a distance, it can pass itself off as a stalactite or a lump of stone. Then it drops from the ceiling and unfurls, surrounding itself with magical darkness as it engulfs and crushes its prey.

Darkmantles are found throughout the Underdark, but they are equally common on the Shadowfell. Thriving in that dark realm, they fill an ecological niche similar to bats on the Material Plane. Intelligent creatures of the Shadowfell sometimes train darkmantles as guardians or companions.

> [!quote] A quote from Ethelrede the fighter, after his first darkmantle encounter  
> 
> Remind me again why we're on this quest?


```statblock
"name": "Darkmantle"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "5d6 + 5"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "13"
  - !!int "2"
  - !!int "10"
  - !!int "5"
"speed": "10 ft., fly 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+3"
"senses": "blindsight 60 ft., passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The darkmantle can't use its blindsight while [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]]."
    "name": "Echolocation"
  - "desc": "While the darkmantle remains motionless, it is indistinguishable from\
      \ a cave formation such as a stalactite or stalagmite."
    "name": "False Appearance"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6\
      \ (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If\
      \ the target is Medium or smaller and the darkmantle has advantage on the attack\
      \ roll, it attaches by engulfing the target's head, and the target is also [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
      \ and unable to breathe while the darkmantle is attached in this way.\n\nWhile\
      \ attached to the target, the darkmantle can attack no other creature except\
      \ the target but has advantage on its attack rolls. The darkmantle's speed also\
      \ becomes 0, it can't benefit from any bonus to its speed, and it moves with\
      \ the target.\n\nA creature can detach the darkmantle by making a successful\
      \ DC 13 Strength check as an action. On its turn, the darkmantle can detach\
      \ itself from the target by using 5 feet of movement."
    "name": "Crush"
  - "desc": "A 15-foot radius of magical darkness extends out from the darkmantle,\
      \ moves with it, and spreads around corners. The darkness lasts as long as the\
      \ darkmantle maintains [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]],\
      \ up to 10 minutes (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]]\
      \ on a spell). Darkvision can't penetrate this darkness, and no natural light\
      \ can illuminate it. If any of the darkness overlaps with an area of light created\
      \ by a spell of 2nd level or lower, the spell creating the light is dispelled."
    "name": "Darkness Aura (1/Day)"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/darkmantle.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
