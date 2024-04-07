---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/8
  - monster/size/medium
  - monster/type/construct
statblock: inline
aliases:
  - Fate
---
# [[5. Mechanics/Bestiary/Construct/Fate.md|Fate]]
*Source: Strongholds and Followers p. 230*

The Law of Fate forces events to have predetermined outcomes whether you like it or not. There is no chance when Fate is present. All things proceed as the universe intends, and neither good nor bad luck is possible.

There is no Inexorable of Luck. Luck is a force of Chaos. Fate is its enemy. Chance is the enemy of Fate.

Armed with the Destiny Light, Fate inflicts perfect order on her enemies. Those who fail their saving throw against the beam may still be very effective in combat, as they no longer need worry about rolling poorly...or well. All things thereafter proceed in a perfectly ordered fashion.

## Tactics

Depending on the battle, and the enemies you're fighting, forcing them to make all attacks with a 10 result on their die may mean they simply can't hit your more heavily armored allies. Or they can't miss, so be careful with where you position Fate.

The Destiny Light makes an enemy always do average damage if they fail their save. This is incredibly useful against boss monsters with attacks that combine many dice and will give players a lot more certainty about what it can do. They will know, for instance, how many more successful attacks they can weather.

Because Fate does not use dice (see The Law of Fate, below) there may be enemies Fate simply cannot hit. Fate is not omniscient though and won't know that until it tests an enemy. Once it fails to hit, it won't attack the same enemy again.

```statblock
"name": "Fate"
"size": "Medium"
"type": "construct"
"alignment": "Lawful"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "16"
- !!int "12"
- !!int "18"
- !!int "15"
- !!int "14"
- !!int "10"
"speed": "40 ft., fly 30 ft. (hover)"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 15"
"languages": "all those of the creature who summoned it"
"cr": "8"
"traits":
- "desc": "Fate does not make attack rolls, always using as 12 as its result (before\
    \ applying bonuses) and cannot be affected by advantage or disadvantage. Fate\
    \ does not roll damage, instead always taking the average result, though damage\
    \ dice are listed so the average can be calculated."
  "name": "The Law of Fate"
- "desc": "The Inexorables have disadvantage on all saving throws against spells."
  "name": "Chaos Vulnerability"
- "desc": "The Inexorables are immune to any effects that would slow them or deny\
    \ them actions or movement."
  "name": "Inexorable"
"actions":
- "desc": "Fate makes three slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 3|text(12) (2d8 + 3) bludgeoning damage."
  "name": "Slam"
- "desc": "Fate fires a beam of Destiny Light at a target it can see within 60 feet.\
    \ The target must make a DC 13 Constitution saving throw. On a failed save, it\
    \ takes dice:8d8|text(36) (8d8) necrotic damage, and it only deals average\
    \ damage and uses 10 for its attack rolls (before bonuses) for the next 10 minutes.\
    \ On a successful save, it takes half as much damage, and its attack and damage\
    \ rolls are not affected."
  "name": "The Destiny Light (Recharge 5-6)"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Construct/token/fate-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
