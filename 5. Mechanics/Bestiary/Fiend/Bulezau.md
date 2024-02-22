---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/3
- monster/size/medium
- monster/type/fiend/demon
statblock: inline
aliases: ["Bulezau"]
---
# [[5. Mechanics\Bestiary\Fiend\Bulezau.md|Bulezau]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 67, Mordenkainen's Tome of Foes p. 131*  

> [!quote]- A quote from Tasha  
> 
> Some ask why the bulezau, for all its rage and violence, has the head of a goat. I always respond, have you met a goat? They're stubborn, they're vicious, and they rarely go down without bashing you several times in the shins.
> 
> You might say, that's awfully specific. I say, don't pry.

Diseased manifestations of animalistic rage, bulezaus embody the violence of nature. Across the Abyss, these demons lurk in deep canyons and lofty crags, and many find a place in the ranks of demon lords' armies, serving as foot soldiers in the Abyss's endless warring.

Bulezaus crave violence. Their eagerness to kill and willingness to die make them common members of many demon lords' entourages. When not being corralled by larger and tougher demons, bulezaus gather into scrabbling mobs, wrestling and fighting among themselves until a better target comes along or until a stronger demon bullies them into subservience.

Disfiguring ailments plague bulezaus: crusted eyes, maggots wriggling in open sores, and a reek of rotten meat that follows them wherever they go.

```statblock
"name": "Bulezau"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "14"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "15"
- !!int "14"
- !!int "17"
- !!int "8"
- !!int "9"
- !!int "6"
"speed": "40 ft."
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 9"
"languages": "Abyssal, telepathy 60 ft."
"cr": "3"
"traits":
- "desc": "When any creature that isn't a demon starts its turn within 30 feet of\
    \ the bulezau, that creature must succeed on a DC 13 Constitution saving throw\
    \ or take dice: 1d6|avg (1d6) necrotic damage."
  "name": "Rotting Presence"
- "desc": "The bulezau's long jump is up to 20 feet and its high jump is up to 10\
    \ feet, with or without a running start."
  "name": "Standing Leap"
- "desc": "The bulezau has advantage on Strength and Dexterity saving throws made\
    \ against effects that would knock it [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Sure-Footed"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d12 + 2|avg (1d12 + 2) piercing damage plus dice: 1d8|avg\
    \ (1d8) necrotic damage. If the target is a creature, it must succeed on a DC\
    \ 13 Constitution saving throw against disease or become [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ until the disease ends. While [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ in this way, the target sports festering boils, coughs up flies, and sheds rotting\
    \ skin, and the target must repeat the saving throw after every 24 hours that\
    \ elapse. On a successful save, the disease ends. On a failed save, the target's\
    \ hit point maximum is reduced by dice: 1d8|avg (1d8). The target dies if\
    \ its hit point maximum is reduced to 0."
  "name": "Barbed Tail"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/bulezau-mpmm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```