---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: 
size: Medium
tags:
- compendium/src/5e/saf
- monster/cr/5
- monster/size/medium
- monster/type/construct
aliases: ["Space"]
---
# [Space](compendium\bestiary\construct/space-saf.md)
*Source: Strongholds and Followers p. 227*

The Inexorable limitations of Space forbid anyone from moving from point A to point Z without passing through the rest of the alphabet. Certainly nothing as vulgar as teleportation is allowed on Axiom.

"The fundamental theorem forbids," is a common refrain whenever Space prevents someone from moving in a manner contrary to the strict laws of motion. A creature under the effect of a [haste](compendium/spells/haste.md) spell, for instance, gains all the benefits of haste except for the extra movement. They may attack, hide, or use an object, but cannot take a second movement action and dash or disengage.

Space allows a second attack, or a second use of an item, because those are in the purview of Time. And Time may do what is necessary to enforce its Law.

## Tactics

Space is the light infantry of the Inexorables, and pretty easy to use in combat. Fast like all the Knights of Axiom, Space uses its 40 feet of movement to get where it needs to be, to bludgeon its enemies. It prefers to focus on spellcasters but obeys the commands of the creature who summoned it.

```statblock
"name": "Space (SaF)"
"size": "Medium"
"type": "construct"
"alignment": "Lawful"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "16"
- !!int "14"
- !!int "16"
- !!int "13"
- !!int "16"
- !!int "14"
"speed": "40 ft."
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#Petrified), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "truesight 60 ft., passive Perception 16"
"languages": "all those of the creature who summoned it"
"cr": "5"
"traits":
- "desc": "No enemies within 60 feet can gain the benefit of magical movement."
  "name": "The Law of Motion"
- "desc": "The Inexorables have disadvantage on all saving throws against spells."
  "name": "Chaos Vulnerability"
- "desc": "The Inexorables are immune to any effects that would slow them or deny\
    \ them actions or movement."
  "name": "Inexorable"
"actions":
- "desc": "Space makes three slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d8\
    \ + 3) bludgeoning damage."
  "name": "Slam"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Space.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```