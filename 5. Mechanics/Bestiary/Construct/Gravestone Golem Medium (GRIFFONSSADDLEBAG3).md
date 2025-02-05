---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/3
  - monster/size/medium
  - monster/type/construct
aliases:
  - Gravestone Golem (Medium)
---
# [[5. Mechanics\Bestiary\Construct\Gravestone Golem Medium (GRIFFONSSADDLEBAG3).md|Gravestone Golem (Medium)]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Gravestone golems hide beneath the fertile ground of graveyards. Some of these golems act as protectors of gravesites— typically for noteworthy characters or necromancers— whereas others are naturally formed as a result of lingering magic in the area. When a creature walks too close to their gravestone, which rests atop their otherwise hidden forms, the golem springs up from the ground the grab it and drag it downward to an early grave.

```statblock
"name": "Gravestone Golem Medium (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "3"
- !!int "12"
- !!int "1"
"speed": "30 ft."
"damage_resistances": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"damage_immunities": "necrotic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 90 ft., passive Perception 11"
"languages": "understands the languages of its creator but can't speak"
"cr": "3"
"traits":
- "desc": "The golem doesn't require air, food, drink, or sleep."
  "name": "Constructed Nature"
- "desc": "While the golem remains motionless, it is indistinguishable from a normal\
    \ gravestone."
  "name": "False Appearance"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The golem's weapon attacks are magical."
  "name": "Magic Weapons"
- "desc": "The golem is immune to necrotic damage, and whenever it is subjected to\
    \ necrotic damage, it takes no damage and instead regains a number of hit points\
    \ equal to the necrotic damage dealt."
  "name": "Necrotic Absorption"
"actions":
- "desc": "The golem makes two slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
    \ + 2) bludgeoning damage."
  "name": "Slam"
- "desc": "The golem magically animates one Medium or Small humanoid corpse within\
    \ 30 feet of it. The animated creature has the same statistics as a ghoul, but\
    \ it has the golem's Necrotic Absorption trait.\n\nThe ghoul acts as an ally of\
    \ the golem. The ghoul remains animated for 10 minutes or until it dies; until\
    \ the golem dies or uses this action again; or until the golem takes a bonus action\
    \ to cause the ghoul to collapse back into an inanimate corpse."
  "name": "Animate Corpse (Recharge 6)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
