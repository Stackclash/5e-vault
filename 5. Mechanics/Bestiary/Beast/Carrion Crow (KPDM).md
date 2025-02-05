---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/2
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1-2
  - monster/size/tiny
  - monster/type/beast
aliases:
  - Carrion Crow
---
# [[5. Mechanics\Bestiary\Beast\Carrion Crow (KPDM).md|Carrion Crow]]
*Source: Deep Magic p. 291*

Feasting on the hearts of fallen evil warriors on battlefields has corrupted these crows. They resemble normal crows, but they are easily distinguished by their rust-colored, barbed beaks and a patch of feathers on their breasts of the same color. Sometimes, carrion crows use their mimicry to lure animals and people into danger, in hopes of having more dead meat on which to feast.

Evil spellcasters find carrion crows to be capable familiars. The creatures are happy to serve a master if they are provided with a steady supply of dead flesh and blood.

```statblock
"name": "Carrion Crow (KPDM)"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "21"
"hit_dice": "6d4 + 6"
"stats":
- !!int "5"
- !!int "16"
- !!int "13"
- !!int "2"
- !!int "13"
- !!int "10"
"speed": "10 ft., fly 50 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"damage_resistances": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "passive Perception 13"
"languages": "understands Common but can't speak"
"cr": "1/2"
"traits":
- "desc": "The carrion crow can mimic complex sounds it has heard, such as a specific\
    \ person speaking, a bugle call, or various animal calls. A creature that hears\
    \ the sounds can tell they are imitations with a successful DC 13 Wisdom (Insight)\
    \ check."
  "name": "Mimicry"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing\
    \ damage and the target must succeed on a DC 13 Constitution saving throw or lose\
    \ 1 hit point each round from blood loss until it receives magical healing or\
    \ until the target or an ally succeeds on a DC 10 Wisdom check to stop the bleeding."
  "name": "Beak"
- "desc": "As an action, the carrion crow emits a raucous caw. Any creature other\
    \ than a carrion crow within 10 feet of the carrion crow must succeed on a DC\
    \ 13 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ until the start of the creature's next turn. On a successful saving throw, a\
    \ creature is immune to the shriek of any carrion crow for 1 hour."
  "name": "Shriek"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
