---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/paladin
  - spell/level/5th-level
  - spell/school/evocation
  - spell/subclass/tempest-domain
classes:
  - Bard (Magical Secrets)
  - Cleric (Tempest Domain)
  - Paladin
school: Evocation
level: 5
ritual: false
components: V
verbal: true
somatic: false
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: Self (30-foot Radius)
aliases:
  - Destructive Wave
damage:
  base: 5d6
  scaling:
    damage: null
    level: null
  types:
    - necrotic
    - radiant
    - thunder
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: radius
  size: 30
---
# Destructive Wave
*5th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (30-foot Radius)
- **Components:** V
- **Duration:** Instantaneous

You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take `dice:5d6|noform|noparens|avg` (`5d6`) thunder damage, as well as `dice:5d6|noform|noparens|avg` (`5d6`) radiant or necrotic damage (your choice), and be knocked [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]]. A creature that succeeds on its saving throw takes half as much damage and isn't knocked [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]].

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Tempest Domain.md\|Cleric (Tempest Domain)]]; [[/5. Mechanics/Lists/List Spells Classes Paladin.md\|Paladin]]

*Source: Player's Handbook p. 231*
