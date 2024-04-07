---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/6
  - monster/size/medium
  - monster/type/elemental
statblock: inline
aliases:
  - Source of Earth
---
# [[5. Mechanics/Bestiary/Elemental/Source Of Earth.md|Source of Earth]]
*Source: Strongholds and Followers p. 187*

The Sources hover at the crossroads of Alloy pronouncing the Lady's law and reminding citizens of important dates. They can also be depended upon to grant aid to newcomers, including help as mundane as directions. The Sources of Earth seem most to enjoy helping visitors, and while their pronouncements are booming and melodramatic, they are enthusiastic about their task.

> [!quote]-  
> 
> "THE CLOSEST SAGE SPECIALIZING IN MIRROR MAGIC CAN BE FOUND ON THE ORRIDAN WAY WHERE IT INTERSECTS HIGH STREET."

The Sources of Earth act as vigilant sentinels, stoning anyone seen committing a crime or running from a representative of the law. They are the hovering, eternal watchmen of Alloy.

## Tactics

The Source of Earth hovers over the battlefield, with only 10 feet of movement. It buffs allies with Diamondskin and turns enemies to stone with Back to Earth. It uses Wall of Stone to change the shape of the battlefield, protecting allies or dividing enemies. It's mostly a support unit, but it can turn an enemy to stone, with a pretty beefy DC.

```statblock
"name": "Source Of Earth"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "124"
"hit_dice": "13d8 + 65"
"stats":
- !!int "11"
- !!int "9"
- !!int "20"
- !!int "10"
- !!int "19"
- !!int "10"
"speed": "10 ft., fly 10 ft. (hover)"
"saves":
  "Strength": !!int "3"
  "Constitution": !!int "8"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Aquan, Auran, Common, Ignan, Terran"
"cr": "6"
"traits":
- "desc": "Allies within 60 feet of the Source cannot be moved against their will\
    \ or knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Foundation of All the World"
"actions":
- "desc": "As a bonus action, the Source focuses its gaze on an ally within 30 feet.\
    \ Diamond crystals emerge from the target's skin, increasing their AC by 2 for\
    \ 10 minutes, after which the diamonds turn to worthless dust, restoring the target's\
    \ skin to its previous state."
  "name": "Diamondskin"
- "desc": "The Source focuses its gaze on an enemy within 30 feet. If the target's\
    \ body is made of flesh, the target must make a DC 15 Constitution saving throw.\
    \ On a failed save, the creature magically begins to turn to stone and is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]].\
    \ At the end of its next turn, it must repeat the saving throw. On a success,\
    \ the effect ends. On a failure, the creature is [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]]\
    \ until freed by the [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
    \ spell or other magic."
  "name": "Back to Earth"
- "desc": "The Source causes a 30-foot-long wall of solid stone to thrust up through\
    \ the floor. The wall has six 5-foot-long panels to it, which can be arranged\
    \ however the summoner of the Source wishes, but each segment must form a line\
    \ or a right angle with the previous segment. Each panel is 6 inches thick and\
    \ 10 feet high. Each panel has AC 15 and 180 hit points. If reduced to 0 hit points,\
    \ a panel crumbles, leaving loose scree that counts as difficult terrain. The\
    \ wall lasts for 10 minutes, then turns to dust.\n\nIf the wall is summoned in\
    \ a creature's space, the creature is pushed to one side of the wall, chosen by\
    \ the summoner. If a creature would be surrounded on all sides by the wall (or\
    \ the wall and another solid surface), that creature can make a Dexterity saving\
    \ throw. On a success, it can use its reaction to move up to its speed so that\
    \ it is no longer enclosed by the wall."
  "name": "Wall of Stone (1/Day)"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Elemental/token/source-of-earth-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
