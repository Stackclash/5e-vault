---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/7
  - monster/size/medium
  - monster/type/construct
statblock: inline
aliases:
  - Change
---
# [[5. Mechanics\Bestiary\Construct\Change.md|Change]]
*Source: Strongholds and Followers p. 229*  

A close cousin to the Inexorables of Death and Fate, the Law of Change states that what has been done cannot be undone. Change opposes any magical attempt to reverse what is done, such as using magical healing to close a wound. "You cannot rewrite the world."

Of course, Change knows who its master is, and being more sophisticated and complex in its order than either Space or Death, Change can make subtle distinctions between friends and foes. The null-entropy field that prevents magical healing near Change only works on enemies.

> [!quote]-  
> 
> "Lore is a tool. A tool used in the advancement of chaos must be stopped. But the pious do work with lore that benefits order. This I can ignore."

## Tactics

Change is more versatile than its simpler cousins. Its javelin grants it facility in both melee and ranged, something neither Space nor Death has. It's still not the powerhouse Time and Will ^[Will is the Prime Inexorable who cannot be summoned by these rules and therefore is not listed here.] are, but the laws that govern the multiverse are obscure for a reason.

```statblock
"name": "Change"
"size": "Medium"
"type": "construct"
"alignment": "Lawful"
"ac": !!int "18"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "15"
- !!int "17"
- !!int "16"
- !!int "13"
- !!int "12"
- !!int "10"
"speed": "40 ft."
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 14"
"languages": "all those of the creature who summoned it"
"cr": "7"
"traits":
- "desc": "Enemies with 10 feet cannot benefit from magical healing."
  "name": "The Law of Change"
- "desc": "The Inexorables have disadvantage on all saving throws against spells."
  "name": "Chaos Vulnerability"
- "desc": "The Inexorables are immune to any effects that would slow them or deny\
    \ them actions or movement."
  "name": "Inexorable"
"actions":
- "desc": "Change makes three javelin attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 30/120 ft., one target. Hit: dice: 2d8 + 3|avg (2d8 + 3) piercing\
    \ damage."
  "name": "Javelin"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Construct/token/change-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
