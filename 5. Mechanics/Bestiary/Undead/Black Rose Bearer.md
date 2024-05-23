---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/veor
- monster/cr/6
- monster/size/medium
- monster/type/undead
statblock: inline
aliases: ["Black Rose Bearer"]
---
# [[5. Mechanics\Bestiary\Undead\Black Rose Bearer.md|Black Rose Bearer]]
*Source: Vecna: Eve of Ruin p. 208*

> [!quote]- A quote from Common saying among the Knights of Solamnia  
> 
> Their existence mocks the living. Their roses mock the knights. Suffer not their presence; destroy rose bearers on sight.

A black rose bearer is a rotting corpse animated by necromancers on Krynn to serve as a guardian. Its name derives from the preserved black rose the bearer carries inside a delicate bell jar. The slightest jostle can cause the bearer to lose its grasp on the bell jar, destroying the jar and the flower within.

Normally, a black rose bearer is sluggish and placid. It follows its creator's orders and attacks intruders only languidly. If its rose is disturbed, however, the black rose bearer bursts into furious violence, attacking indiscriminately.

A bearer's black rose is an homage to the tyrannical Lord Soth, the most powerful death knight on Krynn, who was once a Solamnic Knight of the Order of the Rose.

```statblock
"name": "Black Rose Bearer"
"size": "Medium"
"type": "undead"
"alignment": "typically  Neutral Evil"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "13d8 + 52"
"stats":
- !!int "17"
- !!int "6"
- !!int "18"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "20 ft."
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages it knew in life but can't speak"
"cr": "6"
"traits":
- "desc": "Whenever the bearer takes damage or makes a Strength or Dexterity saving\
    \ throw, roll a d6. On a 5 or 6, the bearer goes berserk. On each of its turns\
    \ while berserk, the bearer has advantage on melee attack rolls, it can Dash as\
    \ a bonus action, and it must attack the nearest creature it can see. If no creature\
    \ is near enough to move to and attack, the bearer attacks an object, with preference\
    \ for an object smaller than itself. Once the bearer goes berserk, it remains\
    \ berserk until it is destroyed or its creator gives it a pristine black rose."
  "name": "Berserk"
- "desc": "If damage reduces the bearer to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 plus the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a successful save, the bearer drops to 1 hit point\
    \ instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "The bearer makes two Slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) bludgeoning damage plus 11 (2d10) necrotic damage."
  "name": "Slam"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Undead/token/black-rose-bearer-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```