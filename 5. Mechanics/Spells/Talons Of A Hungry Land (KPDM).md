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
  - spell/level/7th-level
  - spell/school/evocation
classes:
  - Bard (Magical Secrets)
  - Sorcerer
  - Warlock
  - Wizard
school: Evocation
level: 7
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: 60 feet
aliases:
  - Talons of a Hungry Land
damage:
  base: 8d8
  scaling:
    damage: 1d8
    level: 8
  types:
    - slashing
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
---
# Talons of a Hungry Land
*7th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** Concentration, up to 10 minutes

You cause three parallel lines of thick, flared obsidian spikes to erupt from the ground. They appear within range on a solid surface, last for the duration, and provide three-quarters cover to creatures behind them. You can make lines (up to 60 feet long, 10 feet high, and 5 feet thick) or form a circle (20 feet in diameter, up to 15 feet high and 5 feet thick).

When the lines appear, each creature in their area must make a Dexterity saving throw. Creatures takes `dice:8d8|noform|noparens|avg` (`8d8`) slashing damage, or half as much damage on a successful save.

A creature can move through the lines at the risk of cutting itself on the exposed edges. For every 1 foot a creature moves through the lines, it must spend 4 feet of movement. Furthermore, the first time a creature enters the lines on a turn or ends its turn there, the creature must make a Dexterity saving throw. It takes `dice:8d8|noform|noparens|avg` (`8d8`) slashing damage on a failure, or half as much damage on a success.

When you stop concentrating on the spell, you can cause the obsidian spikes to explode, dealing `dice:5d8|noform|noparens|avg` (`5d8`) slashing damage to any creature within 15 feet, or half as much damage on a successful Dexterity save.

**At Higher Levels.** When you cast this spell using a spell slot of 8th level or higher, the damage from all effects of the lines increases by `dice:1d8|noform|noparens|avg|text(1d8)` for each slot level above 7th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 112*
