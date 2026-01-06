---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/warlock
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
  - Warlock
  - Wizard
school: Evocation
level: 2
ritual: false
components: 'V, S, M (a candle and a pinch of sulfur)'
verbal: true
somatic: true
material: true
material_desc: a candle and a pinch of sulfur
time: 1 Action
duration: Instantaneous
range: 150 feet
aliases:
  - Solitary Fireball
damage:
  base: 6d6
  scaling:
    damage: 1d6
    level: 3
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Solitary Fireball
*2nd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S, M (a candle and a pinch of sulfur)
- **Duration:** Instantaneous

A bright streak flashes from your pointing finger to a point you choose within range, where it blossoms with a low roar to engulf a single creature in searing flame. That creature takes `dice:6d6|noform|noparens|avg` (`6d6`) fire damage, or half damage with a successful Dexterity saving throw. *Solitary fireball* does not ignite other flammable objects.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 353*
