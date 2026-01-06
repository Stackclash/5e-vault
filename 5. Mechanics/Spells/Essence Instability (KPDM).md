---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/transmutation
classes:
  - Bard (Magical Secrets)
  - Sorcerer
  - Wizard
school: Transmutation
level: 5
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 1 minute
range: 120 feet
aliases:
  - Essence Instability
damage:
  base: 2d6
  scaling:
    damage: 1d6
    level: 6
  types:
    - poison
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Essence Instability
*5th-level, Transmutation*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** 1 minute

You cause the target to radiate a harmful aura. Both the target and every creature beginning or ending its turn within 20 feet of the target suffer `dice:2d6|noform|noparens|avg` (`2d6`) poison damage per round. The target can make a Constitution saving throw each round to negate the damage and end the affliction. Success means the target no longer takes damage from the aura, but the aura still persists around the target for the full duration.

Creatures affected by the aura must make a successful Constitution saving throw each round to negate the damage. The aura moves with the original target and is unaffected by [[/5. Mechanics/Spells/Gust Of Wind.md\|gust of wind]] and similar spells.

The aura does not detect as magical or poison, and is [[/5. Mechanics/Rules/Conditions.md#Invisible\|invisible]], odorless, and intangible (though the spell's presence can be detected on the original target). [[/5. Mechanics/Spells/Protection From Poison.md\|Protection from poison]] negates the spell's effects on targets but will not dispel the aura. A foot of metal or stone, two inches of lead, or a force effect such as [[/5. Mechanics/Spells/Mage Armor.md\|mage armor]] or [[/5. Mechanics/Spells/Wall Of Force.md\|wall of force]] will block it.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the aura lasts 1 minute longer and the poison damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 5th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 68*
