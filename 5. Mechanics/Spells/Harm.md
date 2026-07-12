---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/level/6th-level
  - spell/school/necromancy
  - spell/subclass/divine-soul
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Sorcerer (Divine Soul)
school: Necromancy
level: 6
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: 60 feet
aliases:
  - Harm
damage:
  base: 14d6
  scaling:
    damage: null
    level: null
  types:
    - necrotic
saving_throw:
  skills:
    - Constitution
  succeeds: half damage
---
# Harm
*6th-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S
- **Duration:** Instantaneous

You unleash a virulent disease on a creature that you can see within range. The target must make a Constitution saving throw. On a failed save, it takes `dice:14d6|noform|noparens|avg` (`14d6`) necrotic damage, or half as much damage on a successful save. The damage can't reduce the target's hit points below 1. If the target fails the saving throw, its hit point maximum is reduced for 1 hour by an amount equal to the necrotic damage it took. Any effect that removes a disease allows a creature's hit point maximum to return to normal before that time passes.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [Sorcerer (Divine Soul)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE")

*Source: Player's Handbook p. 249. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
