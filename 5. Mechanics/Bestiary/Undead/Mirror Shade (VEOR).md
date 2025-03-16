---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: null
size: Medium
tags:
  - compendium/src/5e/veor
  - monster/cr/10
  - monster/size/medium
  - monster/type/undead
aliases:
  - Mirror Shade
---
# [[5. Mechanics/Bestiary/Undead/Mirror Shade (VEOR).md|Mirror Shade]]
*Source: Vecna: Eve of Ruin p. 226*

> [!quote] A quote from Hopewell Lightfinger, Sword Coast Adventurer  
> 
> She was great at picking locks but had a terrible cruel streak. When the cloaker got her, we were glad we'd never see her again—then, to our horror, we did.

When the spirit of a malevolent trickster or callous rogue refuses to enter the afterlife, the spirit sometimes becomes a mirror shade instead. Mirror shades are incorporeal Undead that, in their true forms, look like person-shaped blobs of shining light. More often, though, mirror shades are encountered on reflective surfaces such as mirrors or panes of glass. There, they blend in seamlessly with their reflected surroundings and wait until the moment is right to strike. Mirror shades can be found throughout the multiverse but are particularly common in the Outer Planes.

```statblock
"name": "Mirror Shade (VEOR)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Chaotic Evil"
"ac": !!int "13"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "8"
- !!int "17"
- !!int "14"
- !!int "10"
- !!int "13"
- !!int "18"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "5"
"skillsaves":
  "Deception": !!int "8"
  "Stealth": !!int "7"
"damage_resistances": "acid; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison, psychic, radiant"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "10"
"traits":
- "desc": "If the mirror shade is within 5 feet of a reflective surface—such as a\
    \ mirror, glass pane, or still water—it has advantage on its initiative roll.\
    \ If a creature hasn't observed the mirror shade move or act, that creature must\
    \ succeed on a DC 18 Intelligence ([[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]])\
    \ check to discern that the mirror shade isn't the creature's own reflection."
  "name": "False Appearance"
- "desc": "The mirror shade can move along the surface of reflective or translucent\
    \ objects, such as mirrors, without provoking opportunity attacks. It can move\
    \ through translucent objects as if they were difficult terrain."
  "name": "Mirror Movement"
"actions":
- "desc": "The mirror shade makes two Phantasmal Strike attacks and uses Reflect Fear."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) radiant damage plus 7 (2d6) psychic damage."
  "name": "Phantasmal Strike"
- "desc": "The mirror shade targets one creature it can see within 60 feet of itself\
    \ and projects an illusion of that creature's greatest fear. The target must make\
    \ a DC 16 Wisdom saving throw. On a failed save, the target takes 28 (8d6) psychic\
    \ damage and has the [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ condition until the start of the mirror shade's next turn. On a successful save,\
    \ the target takes half as much damage only."
  "name": "Reflect Fear"
"bonus_actions":
- "desc": "While within 5 feet of a reflective surface, such as a mirror, the mirror\
    \ shade takes the Hide action."
  "name": "Mirror Stealth"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Undead/token/mirror-shade-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
