---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/ranger
  - spell/level/4th-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Druid
  - Ranger
school: Conjuration
level: 4
ritual: false
components: 'V, S, M (a drop of honey)'
verbal: true
somatic: true
material: true
material_desc: a drop of honey
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 60 feet
aliases:
  - Storm of Wings
damage:
  base: 4d6
  scaling:
    damage: null
    level: null
  types:
    - necrotic
    - poison
    - slashing
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: sphere
  size: 15
---
# Storm of Wings
*4th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a drop of honey)
- **Duration:** Concentration, up to 1 minute

You create a storm of spectral birds, bats, or flying insects in a 15-foot-radius sphere on a point you can see within range. The storm spreads around corners, and its area is lightly obscured. Each creature in the storm when it appears and each a creature that starts its turn in the storm is affected by the storm.

As a bonus action on your turn, you can move the storm up to 30 feet. As an action on your turn, you can change the storm from one type to another, such as from a storm of bats to a storm of insects.

**Bats**. The creature takes `dice:4d6|noform|noparens|avg` (`4d6`) necrotic damage, and its speed is halved while within the storm as the bats cling to it and drain its blood.

**Birds**. The creature takes `dice:4d6|noform|noparens|avg` (`4d6`) slashing damage, and it has disadvantage on attack rolls while within the storm as the birds fly in the way of the creature's attacks.

**Insects**. The creature takes `dice:4d6|noform|noparens|avg` (`4d6`) poison damage, and it must make a Constitution saving throw each time it casts a spell while within the storm. On a failed save, the creature fails to cast the spell, losing the action but not the spell slot.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]

*Source: Deep Magic p. 110*
