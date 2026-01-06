---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Evocation
level: 4
ritual: false
components: 'V, S, M (an iron ring)'
verbal: true
somatic: true
material: true
material_desc: an iron ring
time: 1 Action
duration: Instantaneous
range: Self
aliases:
  - Spinning Axes
damage:
  base: 5d8
  scaling:
    damage: 1d8
    level: 5
  types:
    - force
    - necrotic
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Spinning Axes
*4th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self
- **Components:** V, S, M (an iron ring)
- **Duration:** Instantaneous

Spinning axes made of luminous force burst out from you to strike all creatures within 10 feet of you. Each of those creatures takes `dice:5d8|noform|noparens|avg` (`5d8`) force damage, or half the damage with a successful Dexterity saving throw. Creatures damaged by this spell that aren't undead or constructs begin bleeding. A bleeding creature takes `dice:2d6|noform|noparens|avg` (`2d6`) necrotic damage at the end of each of its turns for 1 minute. A creature can stop the bleeding for itself or another creature by using an action to make a successful Wisdom ([[/5. Mechanics/Rules/Skills.md#Medicine\|Medicine]]) check against your spell save DC or by applying any amount of magical healing.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the damage increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 4th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 233*
