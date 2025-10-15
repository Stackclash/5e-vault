---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/8th-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Druid
  - Sorcerer
  - Wizard
school: Conjuration
level: 8
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 150 feet
aliases:
  - Incendiary Cloud
damage:
  base: 10d8
  scaling:
    damage: null
    level: null
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
area:
  shape: sphere
  size: 20
---
# Incendiary Cloud
*8th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

A swirling cloud of smoke shot through with white-hot embers appears in a 20-foot-radius sphere centered on a point within range. The cloud spreads around corners and is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.

When the cloud appears, each creature in it must make a Dexterity saving throw. A creature takes `dice:10d8|noform|noparens|avg` (`10d8`) fire damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.

The cloud moves 10 feet directly away from you in a direction that you choose at the start of each of your turns.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 253. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
