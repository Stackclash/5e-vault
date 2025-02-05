---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 
size: Small
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/2
- monster/size/small
- monster/type/fiend/demon
aliases: ["Devourer"]
---
# [Devourer](compendium\bestiary\fiend/devourer-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The wretched, imp-like thralls of Azgoreoth that infest the Dreamlands in which he feasts. Devourers are virtually invisible in darkness, and look like demons of lightless smoke. They silently harvest the conscious energy of living creatures that become caught in their dreamy demiplane, siphoning away their life and the tethers that bind their body and soul together.

```statblock
"name": "Devourer (GriffonsSaddlebag3)"
"size": "Small"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "33"
"hit_dice": "6d6 + 12"
"stats":
- !!int "7"
- !!int "17"
- !!int "14"
- !!int "13"
- !!int "10"
- !!int "14"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "7"
  "Insight": !!int "2"
  "Perception": !!int "2"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., truesight 30 ft., passive Perception 12"
"languages": "Abyssal, Common, telepathy 30 ft."
"cr": "2"
"traits":
- "desc": "The devourer can use its action to polymorph into a Small or Medium humanoid\
    \ (speed 30 ft.), into a beast form that resembles a rat (20 ft.), a raven (20\
    \ ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true\
    \ form.\n\nIts statistics are the same in each form, except for the speed changes\
    \ noted. Regardless of its form, the devourer can only appear in shades of gray.\
    \ Any equipment it is wearing or carrying isn't transformed. It reverts to its\
    \ true form if it dies."
  "name": "Shapechanger"
- "desc": "Whenever a creature within 30 feet of the devourer suffers a death saving\
    \ throw failure or dies, the devourer regains 5 (1d10) hit points."
  "name": "Death Leech"
- "desc": "The devourer has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The devourer has advantage on an attack roll against a creature if at least\
    \ one of the devourer's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](/compendium/rules/conditions.md#Incapacitated)."
  "name": "Pack Tactics"
- "desc": "While in dim light or darkness, the devourer can take the Hide action as\
    \ a bonus action. While in darkness, the devourer is [invisible](/compendium/rules/conditions.md#Invisible)\
    \ to any creature that relies on darkvision to see it in that darkness."
  "name": "Umbral Stealth"
"actions":
- "desc": "The devourer makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) slashing damage (bludgeoning damage in humanoid form; piercing damage in\
    \ beast form)."
  "name": "Claw (Fist in Humanoid Form; Bite in Beast Form)"
- "desc": "The devourer lashes out with a dark tether, sapping the hope and fortitude\
    \ of a creature it can see within 30 feet of it. The target must succeed on a\
    \ DC 12 Constitution saving throw or take 10 (3d6) psychic damage. The devourer\
    \ regains hit points equal to half the damage dealt."
  "name": "Devour Life"
- "desc": "The devourer magically turns [invisible](/compendium/rules/conditions.md#Invisible)\
    \ until it attacks, or until its [concentration](/compendium/rules/conditions.md#Concentration)\
    \ ends (as if [concentrating](/compendium/rules/conditions.md#Concentration) on\
    \ a spell). Any equipment the devourer wears or carries is [invisible](/compendium/rules/conditions.md#Invisible)\
    \ with it."
  "name": "Invisibility"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```