---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/5
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Raventhian Acolyte
---
# [[5. Mechanics\Bestiary\Humanoid\Raventhian Acolyte (GRIFFONSSADDLEBAG3).md|Raventhian Acolyte]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The lingering cultists of the fallen Raventhia. They seek to revive their leader as a lich and finally destroy Val Linsin, the very stronghold their presence forced to create years ago.

```statblock
"name": "Raventhian Acolyte (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "typically  Chaotic Evil"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather armor]]"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "9"
- !!int "16"
- !!int "14"
- !!int "15"
- !!int "13"
- !!int "19"
"speed": "30 ft."
"skillsaves":
  "Religion": !!int "5"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "passive Perception 14"
"languages": "Common plus one other language"
"cr": "5"
"traits":
- "desc": "The acolyte is a 11th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\n1/day: [[5. Mechanics/Spells/Eyebite.md|eyebite]]\n\nCantrips\
    \ (at will): [[5. Mechanics/Spells/Chill Touch.md|chill touch]] (3d8), [[5. Mechanics/Spells/Mage Hand.md|mage hand]]\
    \ (appears as a raven), [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st-5th level\
    \ (3 slots): [[5. Mechanics/Spells/Animate Dead.md|animate dead]], [[5. Mechanics/Spells/Blight.md|blight]],\
    \ [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Dream.md|dream]],\
    \ [[5. Mechanics/Spells/Fear.md|fear]], [[5. Mechanics/Spells/Fly.md|fly]], [[5. Mechanics/Spells/Gaseous Form.md|gaseous\
    \ form]] (self only; appears as a swarm of ravens),\
    \ [[5. Mechanics/Spells/Mirror Image.md|mirror image]], [[5. Mechanics/Spells/Misty Step.md|misty step]],\
    \ [[5. Mechanics/Spells/Polymorph.md|polymorph]], [[5. Mechanics/Spells/Scrying.md|scrying]]"
  "name": "Spellcasting"
- "desc": "The acolyte can mimic simple animal sounds and the voices of humanoids\
    \ it has heard. A creature that hears the acolyte mimicking sounds or voices in\
    \ this way can tell they are imitations with a successful DC 10 Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]])\
    \ check."
  "name": "Mimicry"
- "desc": "The acolyte can cast [[5. Mechanics/Spells/Find Familiar.md|find familiar]]\
    \ as a ritual. When it does so, the familiar takes the form of a raven, but it\
    \ has an Intelligence of 6, can understand Common, and has advantage on saving\
    \ throws against spells and other magical effects."
  "name": "Raven Servant"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
