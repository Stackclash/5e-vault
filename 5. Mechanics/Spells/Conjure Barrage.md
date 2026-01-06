---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/ranger
  - spell/level/3rd-level
  - spell/school/conjuration
  - spell/subclass/battle-smith
classes:
  - Artificer (Battle Smith)
  - Bard (Magical Secrets)
  - Ranger
school: Conjuration
level: 3
ritual: false
components: 'V, S, M (one piece of ammunition or a thrown weapon)'
verbal: true
somatic: true
material: true
material_desc: one piece of ammunition or a thrown weapon
time: 1 Action
duration: Instantaneous
range: Self (60-foot Cone)
aliases:
  - Conjure Barrage
damage:
  base: 3d8
  scaling:
    damage: null
    level: null
  types: []
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
area:
  shape: cone
  size: 60
---
# Conjure Barrage
*3rd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** Self (60-foot Cone)
- **Components:** V, S, M (one piece of ammunition or a thrown weapon)
- **Duration:** Instantaneous

You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes `dice:3d8|noform|noparens|avg` (`3d8`) damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component.

**Classes**: [Artificer (Battle Smith)](/compendium/lists/list-spells-classes-battle-smith-tce.md "subclass=TCE;class=TCE"); [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]

*Source: Player's Handbook p. 225*
