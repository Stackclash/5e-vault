---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - compendium/src/5e/vrgr
  - monster/cr/3
  - monster/size/medium
  - monster/type/beast
aliases:
  - Swarm of Scarabs
---
# [[5. Mechanics\Bestiary\Beast\Swarm Of Scarabs (VRGR).md|Swarm of Scarabs]]
*Source: Van Richten's Guide to Ravenloft p. 247*

Base creatures are among the first to respond to sinister forces at work in a land. As nefarious powers grip an area, populations of maggots, scarabs, and similar scavenging insects explode and become aggressive predators. Roll on the Swarm Behavior table to see how such swarms might manifest.

**Swarm Behavior**

`dice: [[Swarm Of Scarabs (VRGR).md#^swarm-behavior]]`

| dice: d4 | Behavior |
|----------|----------|
| 1 | Crawls on walls in a vaguely bipedal shape |
| 2 | Makes skittering noises that sound like whispered chanting |
| 3 | Skeletal visages, giant eyes, or the faces of nearby creatures appear in relief amid its mass |
| 4 | Occupies and animates a corpse or other debris as if it were alive |
^swarm-behavior

```statblock
"name": "Swarm Of Scarabs (VRGR)"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"modifier": !!int "2"
"stats":
  - !!int "3"
  - !!int "14"
  - !!int "13"
  - !!int "1"
  - !!int "12"
  - !!int "1"
"speed": "30 ft., burrow 30 ft., climb 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "tremorsense 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny scarab. The swarm\
      \ can't regain hit points or gain temporary hit points."
    "name": "Swarm"
  - "desc": "If the swarm starts its turn in the same space as a dead creature that\
      \ is Large or smaller, the corpse is destroyed, leaving behind only equipment\
      \ and bones (or exoskeleton)."
    "name": "Skeletonize"
  - "desc": "The swarm can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 0 ft., one target in the swarm's\
      \ space. Hit: 14 (4d6) piercing damage, or 7 (2d6) piercing damage if the\
      \ swarm has half of its hit points or fewer. If the target is a creature, scarabs\
      \ burrow into its body, and the creature takes 3 (d6) piercing damage at the\
      \ start of each of its turns. Any creature can use an action to kill or remove\
      \ the scarabs with fire or a weapon that deals piercing damage, causing 1 damage\
      \ of the appropriate type to the target. A creature reduced to 0 hit points\
      \ by the swarm's piercing damage dies."
    "name": "Ravenous Bites"
"source":
  - "VRGR"
"image": "5. Mechanics/Bestiary/Beast/token/swarm-of-scarabs-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
