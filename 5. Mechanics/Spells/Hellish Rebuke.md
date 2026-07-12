---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/feat/magic-initiate/warlock-spells
  - spell/level/1st-level
  - spell/race/tiefling-base
  - spell/school/evocation
  - spell/subclass/oathbreaker
  - spell/subrace/tiefling
  - spell/subrace/tiefling-asmodeus
classes:
  - Bard (Magical Secrets)
  - Paladin (Oathbreaker)
  - Warlock
school: Evocation
level: 1
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: >-
  1 Reaction, which you take in response to being damaged by a creature within
  60 feet of you that you can see
duration: Instantaneous
range: 60 feet
aliases:
  - Hellish Rebuke
damage:
  base: 2d10
  scaling:
    damage: 1d10
    level: 2
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
---
# Hellish Rebuke
*1st-level, Evocation*  

- **Casting time:** 1 Reaction, which you take in response to being damaged by a creature within 60 feet of you that you can see
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** Instantaneous

You point your finger, and the creature that damaged you is momentarily surrounded by hellish flames. The creature must make a Dexterity saving throw. It takes `dice:2d10|noform|noparens|avg` (`2d10`) fire damage on a failed save, or half as much damage on a successful one.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by `dice:1d10|noform|noparens|avg|text(1d10)` for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Paladin (Oathbreaker)](/compendium/lists/list-spells-classes-oathbreaker-dmg.md "subclass=DMG"); [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]

*Source: Player's Handbook p. 250. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
