---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/school/evocation
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Druid
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Evocation
level: 3
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
  - Thunderous Wave
damage:
  base: 5d6
  scaling:
    damage: null
    level: null
  types:
    - bludgeoning
saving_throw:
  skills:
    - Strength
  succeeds: see spell description
area:
  shape: sphere
  size: 30
---
# Thunderous Wave
*3rd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S
- **Duration:** Instantaneous

You initiate a shock wave centered at a point you designate within range. The wave explodes outward into a 30-foot-radius sphere. This force deals no damage directly, but every creature the wave passes through must make a Strength saving throw. On a failed save, a creature is pushed 30 feet and knocked [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]]; if it strikes a solid obstruction, it also takes `dice:5d6|noform|noparens|avg` (`5d6`) bludgeoning damage. On a successful save, a creature is pushed 15 feet and not knocked [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]], and an obstruction takes half as much damage. The spell also emits a thunderous boom that can be heard within 400 feet.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 114*
