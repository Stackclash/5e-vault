---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/level/3rd-level
  - spell/school/conjuration
classes:
  - Bard (Magical Secrets)
  - Druid
school: Conjuration
level: 3
ritual: false
components: 'V, M (a flower petal or a drop of blood)'
verbal: true
somatic: false
material: true
material_desc: a flower petal or a drop of blood
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 120 feet
aliases:
  - Dryad's Kiss
damage:
  base: 3d8
  scaling:
    damage: null
    level: 5
  types:
    - necrotic
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
---
# Dryad's Kiss
*3rd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, M (a flower petal or a drop of blood)
- **Duration:** Concentration, up to 1 minute

You perform an ancient incantation that summons flora from the fey realm. A creature you can see within range is covered with small, purple buds and takes `dice:3d8|noform|noparens|avg` (`3d8`) necrotic damage; a successful Wisdom saving throw negates the damage but doesn't prevent the plant growth. The buds can be removed by the target or an ally of the target within 5 feet who uses an action to make a successful Intelligence ([[/5. Mechanics/Rules/Skills.md#Nature\|Nature]]) or Wisdom ([[/5. Mechanics/Rules/Skills.md#Medicine\|Medicine]]) check against your spell save DC, or by a [[/5. Mechanics/Spells/Greater Restoration.md\|greater restoration]] or [[/5. Mechanics/Spells/Blight.md\|blight]] spell. While the buds remain, whenever the target takes damage from a source other than this spell, one bud blossoms into a purple and yellow flower that deals an extra `dice:1d8|noform|noparens|avg` (`1d8`) necrotic damage to the target. Once four blossoms have formed in this way, the buds can no longer be removed by nonmagical means. The buds and blossoms wilt and fall away when the spell ends, provided the creature is still alive.

If a creature affected by this spell dies, sweet-smelling blossoms quickly cover its body. The flowers wilt and die after one month.

**At Higher Levels.** If this spell is cast using a spell slot of 5th level or higher, the number of targets increases by one for every two slot levels above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]

*Source: Deep Magic p. 65*
