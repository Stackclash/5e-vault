---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/xge
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
components: 'V, S, M (a drop of giant slug bile)'
verbal: true
somatic: true
material: true
material_desc: a drop of giant slug bile
time: 1 Action
duration: Instantaneous
range: 150 feet
aliases:
  - Vitriolic Sphere
damage:
  base: 10d4
  scaling:
    damage: 2d4
    level: 5
  types:
    - acid
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: sphere
  size: 20
---
# Vitriolic Sphere
*4th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S, M (a drop of giant slug bile)
- **Duration:** Instantaneous

You point at a location within range, and a glowing 1-foot-diameter ball of emerald acid streaks there and explodes in a 20-foot-radius sphere. Each creature in that area must make a Dexterity saving throw. On a failed save, a creature takes `dice:10d4|noform|noparens|avg` (`10d4`) acid damage and another `dice:5d4|noform|noparens|avg` (`5d4`) acid damage at the end of its next turn. On a successful save, a creature takes half the initial damage and no damage at the end of its next turn.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the initial damage increases by `dice:2d4|noform|noparens|avg|text(2d4)` for each slot level above 4th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 170*
