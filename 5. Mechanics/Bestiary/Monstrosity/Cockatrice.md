---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: grassland
size: Small
tags:
  - compendium/src/5e/mm
  - monster/cr/1-2
  - monster/environment/grassland
  - monster/size/small
  - monster/type/monstrosity
aliases:
  - Cockatrice
---
# [[5. Mechanics\Bestiary\Monstrosity\Cockatrice.md|Cockatrice]]
*Source: Monster Manual p. 42. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

The cockatrice looks like a hideous hybrid of lizard, bird, and bat, and it is infamous for its ability to turn flesh to stone. These omnivores have a diet that consists of berries, nuts, flowers, and small animals such as insects, mice, and frogs-things they can swallow whole. They would be no threat to anything else if not for their fierce and frenzied response to even a hint of danger. A cockatrice flies into the face of any threat, squawking and madly beating its wings as its head darts out to peck. The smallest scratch from a cockatrice's beak can spell doom as its victim slowly turns to stone from the injury.

```statblock
"name": "Cockatrice"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"modifier": !!int "1"
"stats":
  - !!int "6"
  - !!int "12"
  - !!int "12"
  - !!int "2"
  - !!int "13"
  - !!int "5"
"speed": "20 ft., fly 40 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "1/2"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3\
      \ (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution\
      \ saving throw against being magically [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]].\
      \ On a failed save, the creature begins to turn to stone and is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]].\
      \ It must repeat the saving throw at the end of its next turn. On a success,\
      \ the effect ends. On a failure, the creature is [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]]\
      \ for 24 hours."
    "name": "Bite"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/cockatrice.webp"
```
^statblock

## Environment

grassland

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
