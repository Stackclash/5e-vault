---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/8
  - monster/size/large
  - monster/type/dragon
statblock: inline
aliases:
  - Oleander Dragon
---
# [[5. Mechanics\Bestiary\Dragon\Oleander Dragon.md|Oleander Dragon]]
*Source: Strongholds and Followers p. 182*  

Nerium the Petal Dragon, known also as the Oleander Dragon, is one of the prize pets of Val and normally slumbers decoratively in one of the courtyards. Its disguise is so perfect, newcomers to the Court often fail to recognize it's not actually a flowering topiary shrub in the shape of a sleeping dragon.

The only true shapechanger in the Court, Nerium enjoys complimenting those who summon her by transforming into a very flattering interpretation of them. This has no practical value other than being artful and poetic, which is really the only thing the Arcadians care about.

Nerium very rarely speaks, and when she does it's usually only one word. She's just vastly underwhelmed by the paucity of expression available with language.

Unlike any other dragon...and most creatures, the Oleander Dragon has no physical attack. It has no teeth or claws and considers such things crude. She prefers to be beautiful and would rather awe enemies so overmuch with its perfect glamour as to force them to reconsider the terrible decisions they made in their lives and abandon all violence.

## Tactics

Lacking physical attacks, Nerium relies on Implant Nightmare to overwhelm her enemies with fear. She opens combat with the spores from her Pollen Breath, then sings the song of cestilani, which can end a battle all by itself.

```statblock
"name": "Oleander Dragon"
"size": "Large"
"type": "dragon"
"alignment": "Chaotic"
"ac": !!int "16"
"hp": !!int "119"
"hit_dice": "14d10 + 42"
"stats":
- !!int "12"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "20"
- !!int "16"
"speed": "40 ft., fly 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "6"
  "Wisdom": !!int "8"
  "Intelligence": !!int "6"
"skillsaves":
  "Nature": !!int "6"
  "Stealth": !!int "6"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Arcana": !!int "6"
"damage_resistances": "poison, psychic"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 23"
"languages": "Draconic, Elvish, Sylvan"
"cr": "8"
"traits":
- "desc": "As an action, the dragon can polymorph into a Small or Medium humanoid\
    \ or back into its true form. Its statistics, other than its size, are the same\
    \ in each form. Any worn or carried equipment isn't transformed. It reverts to\
    \ its true form if it dies."
  "name": "Shapechanger"
- "desc": "The dragon has advantage on saving throws against magic and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "While the dragon remains motionless, it is indistinguishable from a shrub\
    \ or small tree of blooming oleander."
  "name": "False Appearance"
"actions":
- "desc": "The dragon reaches into the mind of a target it can see within 60 feet\
    \ and manifests the target's deepest fear. The target must make a DC 16 Wisdom\
    \ saving throw. On a failed save, the target becomes [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ for 1 minute. At the start of each of the target's turns, the target must repeat\
    \ the saving throw or take dice: 4d10|avg (4d10) psychic damage. On a successful\
    \ save, the nightmare ends."
  "name": "Implant Nightmare"
- "desc": "The dragon exhales a swirling cloud of pollen and red and purple petals\
    \ in a 60-foot cone. Each creature in the area must make a DC 16 Wisdom saving\
    \ throw. On a failed save, the creature becomes [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ until the end of their next round. Creatures who successfully save cannot be\
    \ affected by Pollen Breath for 24 hours."
  "name": "Pollen Breath (Recharge 5-6)"
- "desc": "The oleander dragon sings a magical song. Each enemy that can hear it must\
    \ succeed on a DC 16 Intelligence saving throw or take dice: 4d8 + 4|avg (4d8\
    \ + 4) psychic damage and be [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Song of Cestilani (1/day)"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Dragon/token/oleander-dragon-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
