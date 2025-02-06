---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Tiny
tags:
  - 5. Mechanics\Src\5e\(KPDM)
  - monster\Cr\1 4
  - monster\Size\Tiny
  - monster\Type\Construct
aliases:
  - Witchlight
---
# [[5. Mechanics\Bestiary\Construct\Witchlight (KPDM).md|Witchlight]]
*Source: Deep Magic p. 299*

These tiny constructs that resemble [[5. Mechanics/Bestiary/Undead/Will O Wisp.md|will-o-wisps]] are similar to [[5. Mechanics/Bestiary/Construct/Homuncul(US).md|homunculi]], in that they are created (from pieces of quartz) and animated by their creators rather than brought into being by the spell. [[5. Mechanics/Classes/Wizard School Of Conjuration.md|Conjurers]] and spellcasters who concentrate on illumination and light magic are the most common masters of these constructs.

## Familiar

If a witchlight agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the witchlight senses, as long as they are within 1 mile of each other. While the witchlight is within 10 feet of its master, the master gains the witchlight's immunity to poison damage and the [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] condition. If its master causes it physical harm, or if it simply chooses to do so, the witchlight will abandon its service as a familiar, breaking the telepathic bond.

```statblock
"name": "Witchlight (KPDM)"
"size": "Tiny"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "14"
"hp": !!int "10"
"hit_dice": "4d4"
"stats":
- !!int "1"
- !!int "18"
- !!int "10"
- !!int "10"
- !!int "13"
- !!int "7"
"speed": "fly 50 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_immunities": "poison, radiant"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "understands the language of its creator but can't speak"
"cr": "1/4"
"traits":
- "desc": "Casting [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]] on a witchlight\
    \ paralyzes it for 1d10 rounds."
  "name": "Dispel Magic Weakness"
- "desc": "A witchlight normally glows as brightly as a torch. The creature can dim\
    \ itself to the luminosity of a candle, but it cannot extinguish its light. Because\
    \ of its glow, the witchlight has disadvantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks."
  "name": "Luminance"
- "desc": "Although a witchlight is not incorporeal, it can pass through any opening\
    \ that light can."
  "name": "Thin as Light"
"actions":
- "desc": "Ranged Weapon Attack: +6 to hit, range 30 ft., one target. Hit: 6 (1d4\
    \ + 4) radiant damage."
  "name": "Light Ray"
- "desc": "The witchlight emits a bright burst of light that causes any sighted creature\
    \ within 30 feet to be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] for\
    \ 1d4 rounds unless it succeeds on a DC 10 Constitution saving throw."
  "name": "Flash (Recharge 5-6)"
"source":
- "KPDM"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/ToB/token/Witchlight.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
