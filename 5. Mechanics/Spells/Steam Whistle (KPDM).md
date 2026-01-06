---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/8th-level
  - spell/school/evocation
classes:
  - Bard (Magical Secrets)
  - Warlock
  - Wizard
school: Evocation
level: 8
ritual: false
components: 'V, S, M (a small brass whistle)'
verbal: true
somatic: true
material: true
material_desc: a small brass whistle
time: 1 Action
duration: Instantaneous
range: Self (30-foot Radius)
aliases:
  - Steam Whistle
damage:
  base: 10d10
  scaling:
    damage: null
    level: null
  types:
    - thunder
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: radius
  size: 30
---
# Steam Whistle
*8th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (30-foot Radius)
- **Components:** V, S, M (a small brass whistle)
- **Duration:** Instantaneous

You open your mouth and unleash a shattering scream. All other creatures in a 30-foot radius around you take `dice:10d10|noform|noparens|avg` (`10d10`) thunder damage and are [[/5. Mechanics/Rules/Conditions.md#Deafened\|deafened]] for `dice:1d8|noform|noparens|avg` (`1d8`) hours. A successful Constitution saving throw halves the damage and reduces the deafness to 1 round.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 109*
