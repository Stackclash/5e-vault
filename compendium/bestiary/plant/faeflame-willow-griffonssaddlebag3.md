---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 
size: Gargantuan
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/12
- monster/size/gargantuan
- monster/type/plant
aliases: ["Faeflame Willow"]
---
# [Faeflame Willow](compendium\bestiary\plant/faeflame-willow-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Known in some circles as hanging trees, faeflame willows have developed a potent symbiosis with the forest's [will-o'-wisps](compendium/bestiary/undead/will-o-wisp.md). The stationary nature of the willow, which would normally restrict its reach, is compensated by the wisps' maneuverability. Meanwhile, the willow helps ensure that wayward travelers following the wisps are prevented from escaping before their life force can be drained. Faeflame willows are also highly intelligent, and they can utilize potent magic to make their prey believe the tree is a safe haven from the forest's other dangers.

```statblock
"name": "Faeflame Willow (GriffonsSaddlebag3)"
"size": "Gargantuan"
"type": "plant"
"alignment": "Neutral"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "198"
"hit_dice": "12d20 + 72"
"stats":
- !!int "24"
- !!int "1"
- !!int "23"
- !!int "10"
- !!int "19"
- !!int "10"
"speed": "0 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "8"
  "Constitution": !!int "10"
"skillsaves":
  "Nature": !!int "8"
  "Insight": !!int "8"
  "Perception": !!int "8"
"damage_resistances": "bludgeoning, piercing"
"condition_immunities": "[frightened](/compendium/rules/conditions.md#Frightened),\
  \ [prone](/compendium/rules/conditions.md#Prone)"
"senses": "blindsight 15 ft., tremorsense 120 ft., passive Perception 18"
"languages": "understands Common, Druidic, and Sylvan but can't speak"
"cr": "12"
"traits":
- "desc": "The willow's spellcasting ability is Wisdom (spell save DC 16, +8 to hit\
    \ with spell attacks). The willow can innately cast the following spells, requiring\
    \ only somatic components:\n\nAt will: [animal messenger](compendium/spells/animal-messenger.md),\
    \ [blight](compendium/spells/blight.md), [faerie fire](compendium/spells/faerie-fire.md)\n\
    \n1/day: [hallucinatory terrain](compendium/spells/hallucinatory-terrain.md),\
    \ [spiritual weapon](compendium/spells/spiritual-weapon.md) (as a 4th-level spell)\n\
    \n3/day: [hold person](compendium/spells/hold-person.md) (as a 3rd-level spell)"
  "name": "Innate Spellcasting"
- "desc": "The area within 15 feet of the willow is swarming with fey spirits. A hostile\
    \ creature's speed is halved in the area, and it gains no benefit from the Disengage\
    \ action."
  "name": "Hindering Spirits"
- "desc": "The willow has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The willow makes two branch attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 20\
    \ (2d12 + 7) bludgeoning damage, and if the target is a Large or smaller creature,\
    \ it must succeed on a DC 19 Strength saving throw or be knocked [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Branch"
- "desc": "The willow summons 2 (1d4) [will-o'-wisps](compendium/bestiary/undead/will-o-wisp.md),\
    \ each one in an unoccupied space it can see within 60 feet of it."
  "name": "Summon Spirits (Recharge 5-6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```