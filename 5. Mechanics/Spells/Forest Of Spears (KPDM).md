---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/druid
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/evocation
classes:
  - Bard
  - Druid
  - Wizard
school: Evocation
level: 5
damage:
  base: 5d8
  scaling:
    damage: null
    level: null
  types:
    - piercing
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
ritual: false
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 120 feet
somatic: true
verbal: true
material: a sliver of stone
area:
  shape: sphere
  size: 30
aliases:
  - Forest of Spears
---
# Forest of Spears
*5th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S, M (a sliver of stone)
- **Duration:** Concentration, up to 1 minute

A forest of stone spears rises up from the ground in a 30-foot radius around a point you designate within range. Creatures in the area take `dice:5d8|noform|noparens|avg` (`5d8`) piercing damage and are [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]]. A successful Dexterity saving throw reduces the damage by half and negates the [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] condition. A creature that starts its turn in the area and is already [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] by the spears takes an extra `dice:2d8|noform|noparens|avg` (`2d8`) damage from the pain of being held aloft as well as bleeding from its wounds.

A creature [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] by the spears can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a successful save, it frees itself.

For the duration of the spell, the area is difficult terrain. The spears (AC 14) can be damaged; they are immune to piercing damage and have resistance to bludgeoning and slashing damage from nonmagical attacks. If a 5-foot square section of spears takes 15 damage, that's enough to free a [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] creature or clear the section of spears.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 71*
