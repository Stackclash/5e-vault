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
  - spell/level/3rd-level
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
level: 3
ritual: false
components: 'V, S, M (a set of mithral darts worth 25 gp)'
verbal: true
somatic: true
material: true
material_desc: a set of mithral darts worth 25 gp
time: 1 Action
duration: Instantaneous
range: Self (120-foot Line)
aliases:
  - Thousand Darts
damage:
  base: 6d6
  scaling:
    damage: 1d6
    level: 4
  types:
    - piercing
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: line
  size: 120
---
# Thousand Darts
*3rd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (120-foot Line)
- **Components:** V, S, M (a set of mithral darts worth 25 gp)
- **Duration:** Instantaneous

You launch thousands of needlelike darts in a 5-foot-wide line that is 120 feet long. Each creature in the line takes `dice:6d6|noform|noparens|avg` (`6d6`) piercing damage, or half as much damage if it makes a successful Dexterity saving throw. The first creature struck by the darts makes the saving throw with disadvantage.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 114*
