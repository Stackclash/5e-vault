---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/wizard
  - spell/level/6th-level
  - spell/school/evocation
classes:
  - Bard (Magical Secrets)
  - Wizard
school: Evocation
level: 6
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: 90 feet
aliases:
  - Life Drain
damage:
  base: 10d6
  scaling:
    damage: 1d6
    level: 7
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Life Drain
*6th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S
- **Duration:** Instantaneous

With a snarled word of Void Speech, you create a swirling vortex of purple energy. Choose a point you can see within range. Creatures within 15 feet of the point take `dice:10d6|noform|noparens|avg` (`10d6`) necrotic damage, or half that damage with a successful Constitution saving throw. For each creature damaged by the spell, you can choose one other creature within range, including yourself, that is not a construct or undead. The secondary targets regain hit points equal to half the necrotic damage you dealt.

**At Higher Levels.** When you cast this spell using a spell slot of 7th level or higher, the vortex's damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 6th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 332*
