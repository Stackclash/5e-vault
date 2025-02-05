---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 
size: Large
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/4
- monster/size/large
- monster/type/monstrosity
aliases: ["Dream Eater"]
---
# [Dream Eater](compendium\bestiary\monstrosity/dream-eater-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Dream eaters are headless, lumbering giantfolk with taut mouths stretched across their midsections. They patrol the hallways of the Dream Gallery in search of ne'er-do-well dreamwalkers. Dream eaters can smell the magical residue of the dreamwalk spell (as described on page 7, hunting down the source of the spell over time. Once found, the dream eaters either attack the caster or consume the painting the caster is currently inside. The dream then collapses and shunts the caster out into the dream eater's stomach.

```statblock
"name": "Dream Eater (GriffonsSaddlebag3)"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "11d10 + 44"
"stats":
- !!int "19"
- !!int "8"
- !!int "18"
- !!int "7"
- !!int "8"
- !!int "7"
"speed": "40 ft."
"saves":
  "Constitution": !!int "6"
"damage_resistances": "poison, psychic"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 9"
"languages": "Giant"
"cr": "4"
"traits":
- "desc": "If the dream eater hits a creature with two greatclub attacks in the same\
    \ turn, the target must succeed on a DC 14 Constitution saving throw or fall [prone](/compendium/rules/conditions.md#Prone)\
    \ and become [incapacitated](/compendium/rules/conditions.md#Incapacitated) until\
    \ the end of the dream eater's next turn."
  "name": "Wretched Strikes"
"actions":
- "desc": "The dream eater makes two greatclub attacks.\n\nIt can attempt to grapple\
    \ a creature in place of one attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit (with advantage if the target is [grappled](/compendium/rules/conditions.md#Grappled)\
    \ by the dream eater or [incapacitated](/compendium/rules/conditions.md#Incapacitated)),\
    \ reach 5 ft., one target. Hit: 18 (4d6 + 4) piercing damage plus 9 (2d8) psychic\
    \ damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) bludgeoning damage."
  "name": "Greatclub"
- "desc": "Each creature the dream eater chooses within 30 feet of it must make a\
    \ DC 14 Wisdom saving throw; a target makes this saving throw with disadvantage\
    \ if it is [incapacitated](/compendium/rules/conditions.md#Incapacitated). On\
    \ a failed save, the target takes 18 (4d8) psychic damage and becomes [frightened](/compendium/rules/conditions.md#Frightened)\
    \ of the dream eater for 1 minute. The [frightened](/compendium/rules/conditions.md#Frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success. On a successful save, the target takes half as\
    \ much damage and isn't [frightened](/compendium/rules/conditions.md#Frightened).\
    \ If damage from this effect reduces a creature to 0 hit points but doesn't kill\
    \ it, it immediately suffers one death saving throw failure as it is filled with\
    \ dread."
  "name": "Devour Hope (Recharge 5-6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```