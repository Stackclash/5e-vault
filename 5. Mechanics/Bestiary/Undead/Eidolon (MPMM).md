---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 'coastal, desert, forest, grassland, mountain, urban'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\12
  - monster\Environment\Coast(AL)
  - monster\Environment\Desert
  - monster\Environment\Forest
  - monster\Environment\Grassland
  - monster\Environment\Mountain
  - monster\Environment\Urban
  - monster\Size\Medium
  - monster\Type\Undead
aliases:
  - Eidolon
---
# [[5. Mechanics\Bestiary\Undead\Eidolon (MPMM).md|Eidolon]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 114, Mordenkainen's Tome of Foes p. 194*

To protect sites they deem holy, gods often rely on eidolons, ghostly spirits bound to safeguard a sacred place. Forged from the souls of those with unwavering devotion, eidolons stalk temples and vaults to ensure that no enemy defiles, damages, or plunders these sites. If an enemy sets foot inside a warded location, the [[5. Mechanics/Bestiary/Undead/Eidolon (MPMM).md|eidolon]] plunges into a [[5. Mechanics/Bestiary/Construct/Sacred Statue (MPMM).md|statue]] specially prepared to house its soul; it then animates this effigy and uses the statue to drive out the intruders.

```statblock
"name": "Eidolon (MPMM)"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "9"
"hp": !!int "63"
"hit_dice": "18d8 - 18"
"stats":
- !!int "7"
- !!int "8"
- !!int "9"
- !!int "14"
- !!int "19"
- !!int "16"
"speed": "0 ft., fly 40 ft. (hover)"
"saves":
  "Wisdom": !!int "8"
"skillsaves":
  "Perception": !!int "8"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "the languages it knew in life"
"cr": "12"
"traits":
- "desc": "The eidolon can move through other creatures and objects as if they were\
    \ difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object other than a [[5. Mechanics/Bestiary/Construct/Sacred Statue (MPMM).md|sacred statue]]."
  "name": "Incorporeal Movement"
- "desc": "When the eidolon moves into a space occupied by a [[5. Mechanics/Bestiary/Construct/Sacred Statue (MPMM).md|sacred statue]],\
    \ the eidolon can disappear, causing the statue to become a creature under the\
    \ eidolon's control. The eidolon uses the [[5. Mechanics/Bestiary/Construct/Sacred Statue (MPMM).md|sacred statue's stat block]]\
    \ in place of its own."
  "name": "Sacred Animation (Recharge 5-6)"
- "desc": "The eidolon has advantage on saving throws against any effect that turns\
    \ Undead."
  "name": "Turn Resistance"
- "desc": "The eidolon doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "Each creature within 60 feet of the eidolon that can see it must succeed\
    \ on a DC 15 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ of it for 1 minute. While [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ in this way, the creature must take the [[/5. Mechanics/Rules/Actions.md#Dash|Dash]]\
    \ action and move away from the eidolon by the safest available route at the start\
    \ of each of its turns, unless there is nowhere for it to move, in which case\
    \ the creature also becomes [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
    \ until it can move again. A [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. If a target's saving throw is successful or the\
    \ effect ends for it, the target is immune to any eidolon's Divine Dread for the\
    \ next 24 hours."
  "name": "Divine Dread"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Undead/token/eidolon-mpmm.webp"
```
^statblock

## Environment

coastal, desert, forest, grassland, mountain, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
