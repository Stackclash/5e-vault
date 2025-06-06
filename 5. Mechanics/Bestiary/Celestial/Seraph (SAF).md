---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: null
size: Large
tags:
  - compendium/src/5e/saf
  - monster/cr/10
  - monster/size/large
  - monster/type/celestial
aliases:
  - Seraph
---
# [[5. Mechanics\Bestiary\Celestial\Seraph (SAF).md|Seraph]]
*Source: Strongholds and Followers p. 165*

And you thought the Throne was weird! You were right about that, by the way.

The greatest of the Celestial Court, the Seraph devastates anything on the battlefield foolish enough to oppose the heroes, taking special interest in evil creatures, obviously, but also in chaotic beings. It just vomits damage onto everything and everyone.

It has the same telepathy the rest of the Celestial Court have, but it rarely uses it for anything other than shouting single-word epithets into people's minds. "Burn!" "Finish!" "Exult!"

## Tactics

In spite of not having like...a face, or eyes, the Seraph cannot be flanked or surprised. It can use each weapon twice, so you decide if it needs to be in melee or not, and then either make two bow shots each from Alpha and Omega, or two mace attacks each from Good and Law. Alpha heals allies next to enemies it damages, which will help you choose which enemies to get next to.

```statblock
"name": "Seraph (SAF)"
"size": "Large"
"type": "celestial"
"alignment": "Any Good alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "20"
  - !!int "18"
  - !!int "20"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "strength": "+8"
  - "constitution": "+9"
  - "wisdom": "+9"
  - "charisma": "+9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "truesight, passive Perception 23"
"languages": "all, telepathy 60 ft."
"cr": "10"
"traits":
  - "desc": "The seraph's weapon attacks are magical. When the seraph hits with any\
      \ weapon, the weapon deals an extra 9 (2d8) radiant damage (included in the\
      \ attack)."
    "name": "Angelic Weapons"
  - "desc": "The seraph has advantage on saving throws against spells and other magical\
      \ effects from evil characters and sources."
    "name": "Magic Resistance"
  - "desc": "Evil creatures have disadvantage on attack rolls against all allies within\
      \ 5 feet of the seraph. Allies in this area can't be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], or possessed by\
      \ evil creatures. If an ally is already [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], or possessed by\
      \ evil magic, the ally has advantage on any new saving throw against the relevant\
      \ effect."
    "name": "Aura of Protection Against Evil"
  - "desc": "The Seraph cannot be flanked or surprised."
    "name": "Vigilant"
"actions":
  - "desc": "The Seraph makes four attacks with any combination of Good, Law, Alpha,\
      \ and Omega, but no more than two with the same weapon."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) bludgeoning damage plus 9 (2d8) radiant damage. If the target is evil\
      \ and has 25 hit points or fewer after taking this damage, it must succeed on\
      \ a DC 17 Wisdom saving throw or be destroyed. On a successful save, the creature\
      \ becomes [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] of the seraph\
      \ until the end of the seraph's next turn."
    "name": "Good"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) bludgeoning damage plus 9 (2d8) radiant damage. If the target is chaotic\
      \ and has 25 hit points or fewer after taking this damage, it must succeed on\
      \ a DC 17 Wisdom saving throw or be destroyed. On a successful save, the creature\
      \ becomes [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] of the seraph\
      \ until the end of the seraph's turn."
    "name": "Law"
  - "desc": "Ranged Weapon Attack: +8 to hit, range 150/600 ft., one target. Hit:\
      \ 13 (2d8 + 4) piercing damage plus 9 (2d8) radiant damage. On a hit, all allies\
      \ adjacent to the target restore 1d8 + 5 hit points."
    "name": "Alpha"
  - "desc": "Ranged Weapon Attack: +8 to hit, range 150/600 ft., one target. Hit:\
      \ 13 (2d8 + 4) piercing damage plus 9 (2d8) radiant damage. If the target is\
      \ chaotic or evil, it suffers the effects of a [[5. Mechanics/Spells/Bane.md|bane]]\
      \ spell until the end of its next turn."
    "name": "Omega"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Seraph.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
