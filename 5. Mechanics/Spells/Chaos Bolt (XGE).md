---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/feat/magic-initiate/sorcerer-spells
  - spell/level/1st-level
  - spell/school/evocation
classes:
  - Bard (Magical Secrets)
  - Sorcerer
school: Evocation
level: 1
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: 120 feet
aliases:
  - Chaos Bolt
damage:
  base: 2d8
  scaling:
    damage: 1d6
    level: 2
  types:
    - acid
    - cold
    - fire
    - force
    - lightning
    - poison
    - psychic
    - thunder
---
# Chaos Bolt
*1st-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** Instantaneous

You hurl an undulating, warbling mass of chaotic energy at one creature in range. Make a ranged spell attack against the target. On a hit, the target takes `dice:2d8+1d6|noform|noparens|avg` (`2d8 + 1d6`) damage. Choose one of the `dice:d8|noform|noparens|avg` (`d8`)s. The number rolled on that die determines the attack's damage type, as shown below.

**Chaos Bolt**

`dice: [[/5. Mechanics/Spells/Chaos Bolt (XGE).md#^chaos-bolt]]`

| dice: d8 | Damage Type |
|----------|-------------|
| 1 | Acid |
| 2 | Cold |
| 3 | Fire |
| 4 | Force |
| 5 | Lightning |
| 6 | Poison |
| 7 | Psychic |
| 8 | Thunder |
^chaos-bolt

If you roll the same number on both `dice:d8|noform|noparens|avg` (`d8`)s, the chaotic energy leaps from the target to a different creature of your choice within 30 feet of it. Make a new attack roll against the new target, and make a new damage roll, which could cause the chaotic energy to leap again.

A creature can be targeted only once by each casting of this spell.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, each target takes `dice:1d6|noform|noparens|avg|text(1d6)` extra damage of the type rolled for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]

*Source: Xanathar's Guide to Everything p. 151*
