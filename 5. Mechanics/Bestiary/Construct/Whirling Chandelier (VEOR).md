---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(VEOR)
  - monster\Cr\7
  - monster\Size\Large
  - monster\Type\Construct
aliases:
  - Whirling Chandelier
---
# [[5. Mechanics\Bestiary\Construct\Whirling Chandelier (VEOR).md|Whirling Chandelier]]
*Source: Vecna: Eve of Ruin p. 239*

Compared to other animated objects, whirling chandeliers seem to have capricious personalities. Victims typically perceive a whirling chandelier's Blazing Vortex as mischievousness or outright malevolence, though the chandelier lacks any understanding of such concepts. A whirling chandelier makes tactical decisions only as a means to perform its master's orders to the best of its ability.

```statblock
"name": "Whirling Chandelier (VEOR)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "14d10 + 28"
"stats":
- !!int "18"
- !!int "15"
- !!int "15"
- !!int "3"
- !!int "5"
- !!int "1"
"speed": "30 ft., fly 30 ft. (hover)"
"damage_resistances": "fire"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 7"
"languages": "understands Common but can't speak"
"cr": "7"
"traits":
- "desc": "If the chandelier is motionless at the start of combat, it has advantage\
    \ on its initiative roll. Moreover, if a creature hasn't observed the chandelier\
    \ move or act, that creature must succeed on a DC 18 Intelligence ([[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]])\
    \ check to discern that the chandelier is animate."
  "name": "False Appearance"
- "desc": "Any creature that starts its turn within 5 feet of the chandelier takes\
    \ 7 (2d6) fire damage."
  "name": "Fiery Aura"
"actions":
- "desc": "The chandelier makes three Chain attacks, three Lamp attacks, or a combination\
    \ thereof."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 15 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage, and the target must succeed on a DC 15 Strength saving\
    \ throw or be pulled into an unoccupied space within 5 feet of the chandelier."
  "name": "Chain"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4\
    \ + 4) bludgeoning damage plus 13 (3d8) fire damage."
  "name": "Lamp"
- "desc": "Each creature within 20 feet of the chandelier and not behind total cover\
    \ must succeed on a DC 14 Constitution saving throw or take 36 (8d8) fire damage\
    \ and have the [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] condition until\
    \ the start of the chandelier's next turn."
  "name": "Blazing Vortex (Recharge 5-6)"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Construct/token/whirling-chandelier-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
