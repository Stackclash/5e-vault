---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/school/transmutation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock
  - Wizard
school: Transmutation
level: 3
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: Touch
aliases:
  - Freeze Blood
damage:
  base: 2d6
  scaling:
    damage: null
    level: null
  types:
    - cold
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Freeze Blood
*3rd-level, Transmutation*  

- **Casting time:** 1 Action
- **Range:** Touch
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

When you cast this spell, you must make a melee spell attack against a living creature with a circulatory system. On a hit, the creature's blood freezes. For the spell's duration, the affected creature's speed is halved and it takes `dice:2d6|noform|noparens|avg` (`2d6`) cold damage at the start of each of its turns. If the creature takes bludgeoning damage from a critical hit, the attack's damage dice are rolled three times instead of twice.

At the end of each of its turns, the creature can make a Constitution saving throw, ending the effect on a success.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 271*
