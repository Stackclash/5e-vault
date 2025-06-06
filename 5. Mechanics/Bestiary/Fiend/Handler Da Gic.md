---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: null
size: Large
tags:
  - 'compendium/src/5e/da:gic'
  - monster/cr/8
  - monster/size/large
  - monster/type/fiend/devil
aliases:
  - Handler
---
# [[5. Mechanics\Bestiary\Fiend\Handler Da Gic.md|Handler]]
*Source: Devil's Advocate: A Guide to Infernal Contracts p. 21*

While some high-profile collection efforts are led by an ice devil, amnizu, or even a pit fiend, the quintessential picture of a collection agent is the handler. A handler's appearance varies throughout its existence, taking on a form pleasing to the entity that hires it. Despite these changes, every handler features exaggerated forearms with claws that inflict infernal wounds. Most of the time, however, a handler never has to lay a finger on the signee thanks to their manipulative magic.

```statblock
"name": "Handler (DA:GIC)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"modifier": !!int "4"
"stats":
  - !!int "15"
  - !!int "18"
  - !!int "18"
  - !!int "13"
  - !!int "15"
  - !!int "16"
"speed": "20 ft., fly 50 ft."
"saves":
  - "dexterity": "+7"
  - "wisdom": "+5"
  - "charisma": "+6"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with silvered weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Infernal, telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "The handler's innate spellcasting ability is Charisma (spell save DC\
      \ 15, +7 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring no material components:\n\nAt will: [[5. Mechanics/Spells/Locate Creature.md|locate creature]],\
      \ [[5. Mechanics/Spells/Locate Object.md|locate object]]\n\n3/day each: [[5. Mechanics/Spells/Counterspell.md|counterspell]],\
      \ [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
      \ [[5. Mechanics/Spells/Dominate Person.md|dominate person]]"
    "name": "Innate Spellcasting"
"actions":
  - "desc": "The handler makes two claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11\
      \ (2d6 + 4) slashing damage. If the target is a creature other than an undead\
      \ or a construct, it must succeed on a DC 15 Constitution saving throw or lose\
      \ 10 (3d6) hit points at the start of each of its turns due to an Infernal wound.\
      \ Each time the handler hits the wounded target with this Attack, the damage\
      \ dealt by the wound increases by 10 (3d6). Any creature can take an action\
      \ to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound\
      \ also closes if the target receives magical healing."
    "name": "Claw"
"source":
  - "DA:GIC"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
