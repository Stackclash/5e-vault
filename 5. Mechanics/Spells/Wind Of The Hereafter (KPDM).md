---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/wizard
  - spell/level/8th-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Wizard
school: Conjuration
level: 8
ritual: false
components: 'V, S, M (a vial of air from a tomb)'
verbal: true
somatic: true
material: true
material_desc: a vial of air from a tomb
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: 120 feet
aliases:
  - Wind of the Hereafter
damage:
  base: 8d8
  scaling:
    damage: null
    level: null
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: sphere
  size: 30
---
# Wind of the Hereafter
*8th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S, M (a vial of air from a tomb)
- **Duration:** Concentration, up to 10 minutes

You create a 30-foot-radius sphere of roiling wind that carries the choking stench of death. The sphere is centered on a point you choose within range. The wind blows around corners. When a creature starts its turn in the sphere, it takes `dice:8d8|noform|noparens|avg` (`8d8`) necrotic damage, or half as much damage if it makes a successful Constitution saving throw. Creatures are affected even if they hold their breath or don't need to breathe.

The sphere moves 10 feet away from you at the start of each of your turns, drifting along the surface of the ground. It is not heavier than air but drifts in a straight line for the duration of the spell, even if that carries it over a cliff or gully. If the sphere meets a wall or other impassable obstacle, it turns to the left or right (select randomly).

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 121*
