---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/2nd-level
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
level: 2
ritual: false
components: 'V, S, M (a piece of ice or a small white rock chip)'
verbal: true
somatic: true
material: true
material_desc: a piece of ice or a small white rock chip
time: 1 Action
duration: Instantaneous
range: 90 feet
aliases:
  - Snilloc's Snowball Swarm
damage:
  base: 3d6
  scaling:
    damage: 1d6
    level: 3
  types:
    - cold
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
area:
  shape: sphere
  size: 5
---
# Snilloc's Snowball Swarm
*2nd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S, M (a piece of ice or a small white rock chip)
- **Duration:** Instantaneous

A flurry of magic snowballs erupts from a point you choose within range. Each creature in a 5-foot-radius sphere centered on that point must make a Dexterity saving throw. A creature takes `dice:3d6|noform|noparens|avg` (`3d6`) cold damage on a failed save, or half as much damage on a successful one.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 165*
