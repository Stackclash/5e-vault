---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/evocation
  - spell/subclass/winter-domain
classes:
  - Bard (Magical Secrets)
  - Cleric (Winter Domain)
  - Druid
  - Sorcerer
  - Warlock
  - Wizard
school: Evocation
level: 5
ritual: false
components: 'V, S, M (a piece of cracked glass)'
verbal: true
somatic: true
material: true
material_desc: a piece of cracked glass
time: 1 Action
duration: Instantaneous
range: Self (100-foot Line)
aliases:
  - Clash of Glaciers
damage:
  base: 5d6
  scaling:
    damage: 1d6
    level: 6
  types:
    - bludgeoning
    - cold
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
area:
  shape: line
  size: 100
---
# Clash of Glaciers
*5th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (100-foot Line)
- **Components:** V, S, M (a piece of cracked glass)
- **Duration:** Instantaneous

You conjure up icy boulders that crush creatures in a line 100 feet long. Each creature in the area takes `dice:5d6|noform|noparens|avg` (`5d6`) bludgeoning damage plus `dice:5d6|noform|noparens|avg` (`5d6`) cold damage, or half the damage with a successful Dexterity saving throw.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 5th. You decide whether each extra die deals bludgeoning or cold damage.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Winter Domain)](/compendium/lists/list-spells-classes-winter-domain-kpdm.md "subclass=KPDM"); [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 269*
