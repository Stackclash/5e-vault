---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/wizard
  - spell/level/8th-level
  - spell/school/illusion
classes:
  - Bard (Magical Secrets)
  - Wizard
school: Illusion
level: 8
ritual: false
components: S
verbal: false
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 120 feet
aliases:
  - Illusory Dragon
damage:
  base: 7d6
  scaling:
    damage: null
    level: null
  types:
    - acid
    - cold
    - fire
    - lightning
    - necrotic
    - poison
saving_throw:
  skills:
    - Wisdom
    - Intelligence
  succeeds: half damage
area:
  shape: cone
  size: 60
---
# Illusory Dragon
*8th-level, Illusion*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** S
- **Duration:** Concentration, up to 1 minute

By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell's duration and occupies its space, as if it were a creature.

When the illusion appears, any of your enemies that can see it must succeed on a Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] of it for 1 minute. If a [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] creature ends its turn in a location where it doesn't have line of sight to the illusion, it can repeat the saving throw, ending the effect on itself on a success.

As a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space. When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking `dice:7d6|noform|noparens|avg` (`7d6`) damage of the chosen damage type on a failed save, or half as much damage on a successful one.

The illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically, it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence ([[/5. Mechanics/Rules/Skills.md#Investigation\|Investigation]]) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 157*
