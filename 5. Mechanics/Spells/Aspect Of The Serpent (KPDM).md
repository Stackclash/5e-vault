---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/school/transmutation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Druid
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Transmutation
level: 3
ritual: false
components: 'V, S, M (a dried snakeskin)'
verbal: true
somatic: true
material: true
material_desc: a dried snakeskin
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: Touch
aliases:
  - Aspect of the Serpent
damage:
  base: 2d6
  scaling:
    damage: null
    level: null
  types:
    - piercing
    - poison
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Aspect of the Serpent
*3rd-level, Transmutation*  

- **Casting time:** 1 Action
- **Range:** Touch
- **Components:** V, S, M (a dried snakeskin)
- **Duration:** Concentration, up to 1 minute

A creature you touch takes on snakelike aspects for the duration of the spell. Its tongue becomes long and forked, its canine teeth become fangs with venom sacs, and its pupils become sharply vertical. The target gains [[/5. Mechanics/Rules/Senses.md#Darkvision\|darkvision]] with a range of 60 feet and [[/5. Mechanics/Rules/Senses.md#Blindsight\|blindsight]] with a range of 30 feet. As a bonus action when you cast the spell, the target can make a ranged weapon attack with a normal range of 60 feet that deals `dice:2d6|noform|noparens|avg` (`2d6`) poison damage on a hit.

As an action, the target can make a bite attack using either Strength or Dexterity (*Melee Weapon Attack*: range 5 ft., one creature; *Hit*: `dice:2d6|noform|noparens|avg` (`2d6`) piercing damage), and the creature must make a successful DC 14 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed\|paralyzed]] for 1 minute. A creature [[/5. Mechanics/Rules/Conditions.md#Paralyzed\|paralyzed]] in this way repeats the saving throw at the end of each of its turns, ending the effect on itself on a success).

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 40*
