---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/construct
statblock: inline
---
# Vasilka
*Source: Curse of Strahd p. 151, Derived from Flesh Golem (MM)*  

```statblock
"name": "Vasilka"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "19"
- !!int "9"
- !!int "18"
- !!int "6"
- !!int "10"
- !!int "5"
"speed": "walk 30 ft."
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "charmed, exhaustion, frightened, paralyzed, petrified, poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Whenever Vasilka starts its turn with 40 hit points or fewer, roll a dice:\
    \ d6|avg (d6). On a 6, Vasilka goes berserk. On each of its turns while berserk,\
    \ Vasilka attacks the nearest creature it can see. If no creature is near enough\
    \ to move to and attack, Vasilka attacks an object, with preference for an object\
    \ smaller than itself. Once Vasilka goes berserk, it continues to do so until\
    \ it is destroyed or regains all its hit points.\n\nVasilka's creator, if within\
    \ 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively.\
    \ Vasilka must be able to hear its creator, who must take an action to make a\
    \ DC 15 Charisma (Persuasion) check. If the check succeeds, Vasilka ceases being\
    \ berserk. If it takes damage while still at 40 hit points or fewer, Vasilka might\
    \ go berserk again."
  "name": "Berserk"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If Vasilka takes fire damage, it has disadvantage on attack rolls and ability\
    \ checks until the end of its next turn."
  "name": "Aversion of Fire"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Vasilka is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Whenever Vasilka is subjected to lightning damage, it takes no damage and\
    \ instead regains a number of hit points equal to the lightning damage dealt."
  "name": "Lightning Absorption"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Vasilka has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Vasilka's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Vasilka makes two slam attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) bludgeoning damage."
  "name": "Slam"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Npc/token/vasilka.png"
```
^statblock