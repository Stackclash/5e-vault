---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/9
  - monster/size/large
  - monster/type/construct
statblock: inline
aliases:
  - Time
---
# [[5. Mechanics/Bestiary/Construct/Time.md|Time]]
*Source: Strongholds and Followers p. 231*

Time is something of the hypocrite among the Inexorables, perfectly happy to speed things up for itself while denying that same ability to anyone else. Many of the Inexorables don't mind if their allies bend the rules so long as their enemies toe the line, and if this seems like commentary on the nature of law and how it tends to be applied, of course it is. Or is it? Maybe it's the opposite.

Time enforces the rules of causality and ensures the past remains firmly behind the future in spite of attempts by creatures like the elves to muddy the waters. The Inexorable of Time really doesn't like elves, by the way. The elves have an annoying habit of ignoring causality altogether.

## Tactics

Time prevents enemies from taking bonus actions or reactions, which is very useful for players who want to maneuver around enemies without suffering attacks of opportunity. Like most of the Knights of Axiom, Time lacks ranged weapons and thus is barely effective against flying enemies, but if its target is on the ground, it is going to pummel the thing into oblivion. Between Haste and Time Is Inexorable, Time can act many times, moving around enemies while denying them opportunity attacks, and it can attack seven times! Time prefers to focus on those enemies benefitting from Haste or who act on turns other than their own. And elves, of course.

```statblock
"name": "Time"
"size": "Large"
"type": "construct"
"alignment": "Lawful"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "161"
"hit_dice": "17d10 + 68"
"stats":
- !!int "18"
- !!int "20"
- !!int "18"
- !!int "15"
- !!int "11"
- !!int "10"
"speed": "40 ft."
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 14"
"languages": "all those of the creature who summoned it"
"cr": "9"
"traits":
- "desc": "Enemies within 15 feet cannot take bonus actions or reactions."
  "name": "The Law of Time"
- "desc": "The Inexorables have disadvantage on all saving throws against spells."
  "name": "Chaos Vulnerability"
- "desc": "The Inexorables are immune to any effects that would slow them or deny\
    \ them actions or movement."
  "name": "Inexorable"
- "desc": "At the end of the round, after all creatures have acted, Time takes another\
    \ turn."
  "name": "Time Is Inexorable (Recharge 6-6)"
"actions":
- "desc": "Time makes three slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) bludgeoning damage."
  "name": "Slam"
- "desc": "Until the end of its next turn, Time magically gains a +2 bonus to its\
    \ AC, has advantage on Dexterity saving throws, and can use its slam attack as\
    \ a bonus action."
  "name": "Haste (Recharge 5-6)"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Time.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
