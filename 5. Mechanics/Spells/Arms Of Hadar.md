---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/warlock
  - spell/feat/magic-initiate
  - spell/level/1st-level
  - spell/school/conjuration
  - spell/subclass/aberrant-mind
classes:
  - Bard
  - Sorcerer (Aberrant Mind)
  - Warlock
school: Conjuration
level: 1
damage:
  base: 2d6
  scaling:
    damage: 1d6
    level: 2
  types:
    - necrotic
saving_throw:
  skills:
    - Strength
  succeeds: see spell description
ritual: false
time: 1 Action
duration: Instantaneous
range: Self (10-foot Radius)
somatic: true
verbal: true
area:
  shape: radius
  size: 10
aliases:
  - Arms of Hadar
---
# Arms of Hadar
*1st-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** Self (10-foot Radius)
- **Components:** V, S
- **Duration:** Instantaneous

You invoke the power of Hadar, the Dark Hunger. Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes `dice:2d6|noform|noparens|avg` (`2d6`) necrotic damage and can't take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [Sorcerer (Aberrant Mind)](/compendium/lists/list-spells-classes-aberrant-mind-tce.md "subclass=TCE"); [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]

**Feats**: [[/5. Mechanics/Lists/List Spells Feats Magic Initiate.md\|Magic Initiate]]

*Source: Player's Handbook p. 215*
