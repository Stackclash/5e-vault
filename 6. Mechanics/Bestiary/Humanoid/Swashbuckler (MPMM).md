---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: inline
---
# Swashbuckler
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 238, Volo's Guide to Monsters p. 217*  

Swashbucklers are charming ne'er-do-wells who live by their own codes of honor. They crave notoriety, often indulge in romantic trysts, and eke out livings as pirates and corsairs, rarely staying in one place for too long.

Many swashbucklers have a signature flourish with which they embellish their actions to make themselves more memorable. You can roll on the Swashbuckler Flourishes table or choose one of the options to find a suitably dramatic flourish for a swashbuckler.

**Swashbuckler Flourishes**

| `dice: d8` (`d8`) | Flourish |
|----------|------------|----------|
| 1 | Winks and flashes a charming grin |
| 2 | Bows theatrically |
| 3 | Constantly flips their dagger |
| 4 | Punctuates sentences with a boisterous "Ha-HA!" |
| 5 | Sings catchy sea chanteys |
| 6 | Dexterously manipulates a silver coin through their fingers |
| 7 | Hurls colorful insults |
| 8 | Adds showy embellishments to rapier strokes |
^swashbuckler-flourishes

```statblock
"name": "Swashbuckler"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "17"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "12"
- !!int "18"
- !!int "12"
- !!int "14"
- !!int "11"
- !!int "15"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Acrobatics": !!int "8"
  "Persuasion": !!int "6"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the swashbuckler is wearing light or no armor and wielding no [[/6. Mechanics/Items/Shield.md|shield]],\
    \ its AC includes its Charisma modifier."
  "name": "Suave Defense"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swashbuckler makes one Dagger attack and two Rapier attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 4|avg (1d4 + 4) piercing\
    \ damage."
  "name": "Dagger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Rapier"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The swashbuckler takes the Dash or Disengage action."
  "name": "Lightfooted"
"source":
- "MPMM"
- "VGM"
"image": "6. Mechanics/Bestiary/Humanoid/token/swashbuckler.png"
```
^statblock

## Environment

coastal, urban