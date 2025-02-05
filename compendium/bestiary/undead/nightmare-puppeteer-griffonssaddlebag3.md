---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 18
environments: 
size: Huge
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/18
- monster/size/huge
- monster/type/undead
aliases: ["Nightmare Puppeteer"]
---
# [Nightmare Puppeteer](compendium\bestiary\undead/nightmare-puppeteer-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The Dream Shaper's will is carried out by the puppeteers: massive, disembodied hands that silently traverse The Grephearon. The puppeteers are largely harmless until threatened or actively engaged. They use body-snatching strings made of the Deep Ethereal's protomatter to bind and control dissidents within The Grephearon. Dream dragons are their sworn enemy and will immediately engage with any they encounter.

```statblock
"name": "Nightmare Puppeteer (GriffonsSaddlebag3)"
"size": "Huge"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "218"
"hit_dice": "19d12 + 95"
"stats":
- !!int "25"
- !!int "14"
- !!int "20"
- !!int "21"
- !!int "16"
- !!int "11"
"speed": "40 ft., climb 40 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "8"
  "Constitution": !!int "11"
"skillsaves":
  "Deception": !!int "12"
  "Stealth": !!int "8"
  "Perception": !!int "9"
  "Persuasion": !!int "12"
"damage_immunities": "poison"
"condition_immunities": "[blinded](/compendium/rules/conditions.md#Blinded), [charmed](/compendium/rules/conditions.md#Charmed),\
  \ [deafened](/compendium/rules/conditions.md#Deafened), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned),\
  \ [prone](/compendium/rules/conditions.md#Prone), [unconscious](/compendium/rules/conditions.md#Unconscious)"
"senses": "blindsight 120 ft., passive Perception 19"
"languages": "understands all"
"cr": "18"
"traits":
- "desc": "The puppeteer's spellcasting ability is Intelligence (spell save DC 19,\
    \ +11 to hit with spell attacks).\n\nThe puppeteer can innately cast the following\
    \ spells, requiring only somatic components:\n\nAt will: [burning hands](compendium/spells/burning-hands.md),\
    \ [scrying](compendium/spells/scrying.md), [shocking grasp](compendium/spells/shocking-grasp.md)\
    \ (4d8)\n\n1/day each: [finger of death](compendium/spells/finger-of-death.md),\
    \ [prismatic spray](compendium/spells/prismatic-spray.md)\n\n3/day each: [color\
    \ spray](compendium/spells/color-spray.md) (as a 5th-level spell), [scorching\
    \ ray](compendium/spells/scorching-ray.md) (as a 4th-level spell)"
  "name": "Innate Spellcasting"
- "desc": "If the puppeteer moves at least 20 feet straight toward a target and then\
    \ hits it with a slam attack on the same turn, the target takes an extra 10 (3d6)\
    \ bludgeoning damage. If the target is a creature, it must succeed on a DC 21\
    \ Strength saving throw or be pushed up to 10 feet away from the puppeteer and\
    \ knocked [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Charge"
- "desc": "If the puppeteer fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The puppeteer has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "As a bonus action, the puppeteer can magically turn [invisible](/compendium/rules/conditions.md#Invisible)\
    \ until it makes an attack, forces a creature to make a saving throw, or its [concentration](/compendium/rules/conditions.md#Concentration)\
    \ ends (as if [concentrating](/compendium/rules/conditions.md#Concentration) on\
    \ a spell). Any strings the puppeteer has attached to a creature and any equipment\
    \ the puppeteer wears or carries are [invisible](/compendium/rules/conditions.md#Invisible)\
    \ with it."
  "name": "Invisibility"
- "desc": "The puppeteer is immune to any effect that turns undead."
  "name": "Turn Immunity"
"actions":
- "desc": "The puppeteer makes two slam attacks. It can use its Fling in place of\
    \ one attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 20 (3d8\
    \ + 7) bludgeoning damage."
  "name": "Slam"
- "desc": "The puppeteer attempts to flick or throw one creature within 5 feet of\
    \ it. The target must make a DC 21 Dexterity saving throw. On a failed save, the\
    \ target is flung up to 60 feet away from the puppeteer and knocked [prone](/compendium/rules/conditions.md#Prone),\
    \ and any strings that were attached to it detach. If the target strikes a solid\
    \ surface, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was\
    \ thrown. If the target is thrown at another creature, that creature must succeed\
    \ on a DC 15 Dexterity saving throw or take the same damage and be knocked [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Fling"
- "desc": "The puppeteer launches a string from each of its fingertips at one creature\
    \ it can see within 15 feet of it. The target must make a DC 19 Dexterity saving\
    \ throw. On a failed save, 1d4 + 1 strings attach to the creature's limbs, and\
    \ the target is [restrained](/compendium/rules/conditions.md#Restrained). While\
    \ [restrained](/compendium/rules/conditions.md#Restrained) in this way, the target\
    \ is moved with the puppeteer as it moves, always staying within 15 feet of the\
    \ puppeteer.\n\nThe target can use an action to make a DC 15 Strength (Athletics)\
    \ check, breaking free from up to 1d4 attached strings on a success. Each string\
    \ can also be attacked and destroyed individually (AC 10; hp 5; vulnerability\
    \ to fire damage; immunity to bludgeoning, poison, and psychic damage). The puppeteer\
    \ can only have strings attached to one creature at a time, and it can detach\
    \ its strings from a creature as a bonus action."
  "name": "String Up"
- "desc": "The puppeteer attempts to take total control of a creature that has at\
    \ least one of the puppeteer's strings attached to it. The creature must succeed\
    \ on a DC 19 Wisdom saving throw or become [charmed](/compendium/rules/conditions.md#Charmed)\
    \ by the puppeteer for 1 hour. While [charmed](/compendium/rules/conditions.md#Charmed)\
    \ in this way, the puppeteer has a telepathic link with the creature, which it\
    \ can use to issue commands to the creature. In addition, whenever the creature\
    \ makes a Charisma ([Deception](/compendium/rules/skills.md#Deception)) or Charisma\
    \ ([Persuasion](/compendium/rules/skills.md#Persuasion)) check, it uses the puppeteer's\
    \ bonus for that check, unless its own bonus is higher.\n\nThe [charmed](/compendium/rules/conditions.md#Charmed)\
    \ creature takes only the actions the puppeteer chooses, and doesn't do anything\
    \ that the puppeteer doesn't allow it to do. The puppeteer can also cause the\
    \ creature to use a reaction, but this requires the puppeteer to use its own reaction\
    \ as well. Each time the creature takes damage, it can repeat the saving throw,\
    \ ending the effect on itself on a success."
  "name": "Puppet (Recharge 6)"
"legendary_actions":
- "desc": "The puppeteer moves up to its speed."
  "name": "Move"
- "desc": "The puppeteer casts a spell from its list of at will spells (1 actions)\
    \ or 3/day spells (2 actions)."
  "name": "Cast a Spell (Costs 1-2 Actions)"
- "desc": "The puppeteer snaps its fingers creating a sonic boom that is audible out\
    \ to 300 feet. Each creature within 30 feet of the puppeteer must make a DC 19\
    \ Constitution saving throw. On a failed save, a creature takes 22 (5d8) thunder\
    \ damage and is [stunned](/compendium/rules/conditions.md#Stunned) until the end\
    \ of the puppeteer's next turn. On a successful save, a creature takes half as\
    \ much damage and isn't [stunned](/compendium/rules/conditions.md#Stunned). The\
    \ puppeteer can't use this legendary action while it has strings attached to a\
    \ creature."
  "name": "Snap (Costs 3 Actions)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```