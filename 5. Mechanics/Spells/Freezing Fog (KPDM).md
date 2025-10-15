---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/school/conjuration
  - spell/subclass/arcane-trickster
classes:
  - Bard (Magical Secrets)
  - Druid
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Conjuration
level: 3
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 'Concentration, up to 5 minutes'
range: 100 feet
aliases:
  - Freezing Fog
damage:
  base: 2d6
  scaling:
    damage: 1d6
    level: 4
  types:
    - cold
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: sphere
  size: 20
---
# Freezing Fog
*3rd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 100 feet
- **Components:** V, S
- **Duration:** Concentration, up to 5 minutes

The spell creates a 20-foot-radius sphere of mist similar to a [[/5. Mechanics/Spells/Fog Cloud.md\|fog cloud]] spell centered on a point you can see within range. The cloud spreads around corners, and the area it occupies is heavily obscured. A wind of moderate or greater velocity (at least 10 miles per hour) disperses it in 1 round. The fog is freezing cold; any creature that ends its turn in the area must make a Constitution saving throw. It takes `dice:2d6|noform|noparens|avg` (`2d6`) cold damage and gains one level of [[/5. Mechanics/Rules/Conditions.md#Exhaustion\|exhaustion]] on a failed save, or takes half as much damage and no [[/5. Mechanics/Rules/Conditions.md#Exhaustion\|exhaustion]] on a successful one.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 3rd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 73*
