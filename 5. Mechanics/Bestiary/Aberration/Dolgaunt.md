---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/erlw
  - monster/cr/3
  - monster/size/medium
  - monster/type/aberration
statblock: inline
aliases:
  - Dolgaunt
---
# [[5. Mechanics\Bestiary\Aberration\Dolgaunt.md|Dolgaunt]]
*Source: Eberron: Rising from the Last War p. 290*  

Dolgaunts are emaciated hobgoblins with disease-hued flesh. Their eye sockets gape open and empty above a mouth with a wormlike tongue. Writhing cilia cover their bodies, with longer tendrils around their heads and two wiry tentacles protruding from their bare shoulders. A dolgaunt is blind but can perceive its surroundings through the sensitive cilia that cover its skin. It can also absorb life through its tentacles, allowing it to drain the vitality out of any creature it touches.

## Warped by Chaos

When the daelkyr emerged from Xoriat to conquer Khorvaire, they captured and transformed that land's indigenous creatures to create armies of hideous warriors. Dyrrn the Corruptor shaped dolgaunts from hobgoblin stock, turning them into intelligent, cold, and efficient killers.

When the daelkyr were defeated, the dolgaunts descended into the depths of Khyber with their masters. There, they study in cavernous monasteries, forging their bodies into living weapons dedicated to the missions given them by those masters. Dolgaunts are often found commanding squads of dolgrims, and can also be found working with the Cults of the Dragon Below—particularly those devoted to Dyrrn the Corruptor.

```statblock
"name": "Dolgaunt"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "14"
- !!int "18"
- !!int "12"
- !!int "13"
- !!int "14"
- !!int "11"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
  "Acrobatics": !!int "6"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 14"
"languages": "Deep Speech, Goblin"
"cr": "3"
"traits":
- "desc": "If the dolgaunt is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the dolgaunt instead takes no damage\
    \ if it succeeds on the saving throw, and only half damage if it fails. It can't\
    \ use this trait if it's [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Evasion"
- "desc": "While the dolgaunt is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
"actions":
- "desc": "The dolgaunt makes two tentacle attacks and two unarmed strikes. Up to\
    \ two tentacle attacks can be replaced by Vitality Drain."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 15 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) bludgeoning damage. The target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 12) if it is a Large or smaller creature. Until this grapple ends,\
    \ the dolgaunt can't use the same tentacle on another target. The dolgaunt has\
    \ two tentacles."
  "name": "Tentacle"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 4|avg (1d4 + 4) bludgeoning damage."
  "name": "Unarmed Strike"
- "desc": "One creature [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] by a\
    \ tentacle of the dolgaunt must make a DC 11 Constitution saving throw. On a failed\
    \ save, the target takes dice: 2d8|avg (2d8) necrotic damage, and the dolgaunt\
    \ regains a number of hit points equal to half the necrotic damage taken."
  "name": "Vitality Drain"
"source":
- "ERLW"
"image": "5. Mechanics/Bestiary/Aberration/token/dolgaunt-erlw.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
