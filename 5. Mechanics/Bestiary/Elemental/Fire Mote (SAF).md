---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/5
- monster/size/small
- monster/type/elemental
statblock: inline
aliases: ["Fire Mote"]
---
# [[5. Mechanics/Bestiary/Elemental/Fire Mote (SAF).md|Fire Mote]]
*Source: Strongholds and Followers p. 186*  

The motes are elemental sprites, tricksters, mischievous imps who enjoy sticking their noses into other people's business, harassing anyone who looks suspicious until the more puissant authorities arrive.

The fire motes in particular enjoy tormenting spellcasters, teasing them, trying to provoke them into using their spells and violating the strict rules of Alloy. Basically, the fire motes try to frame wizards visiting the Burning City. But, the fire motes argue, if these magic-users can be provoked into violence by something as harmless as a mote, what might they do if they became seriously angry? Keep those fingers holstered, spellslinger!

## Tactics

The fire mote has an instinctive awareness of which enemies on the battlefield rely on concentration spells and move into their space, making their life as annoying as possible.

```statblock
"name": "Fire Mote (SaF)"
"size": "Small"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "49"
"hit_dice": "11d6 + 11"
"stats":
- !!int "17"
- !!int "16"
- !!int "12"
- !!int "13"
- !!int "11"
- !!int "12"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "6"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "fire"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Ignan"
"cr": "5"
"traits":
- "desc": "The mote can enter a hostile creature's space and stop there."
  "name": "Fire Form"
- "desc": "An enemy in the same space as a mote must make a DC 14 Dexterity ([[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]])\
    \ check when it moves. On a failed save, the mote moves with it. While in the\
    \ same space as a mote, enemies have disadvantage on Constitution checks to maintain\
    \ concentration."
  "name": "Annoying"
"actions":
- "desc": "The mote makes three touch attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) fire damage."
  "name": "Touch"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Fire%20Mote.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```