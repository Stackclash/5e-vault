---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/druid
  - spell/class/sorcerer
  - spell/level/2nd-level
  - spell/school/evocation
  - spell/subrace/genasi-fire
  - spell/subrace/tiefling-mephistopheles
classes:
  - Bard (Magical Secrets)
  - Druid
  - Sorcerer
school: Evocation
level: 2
ritual: false
components: 'V, S, M (leaf of sumac)'
verbal: true
somatic: true
material: true
material_desc: leaf of sumac
time: 1 Bonus Action
duration: 'Concentration, up to 10 minutes'
range: Self
aliases:
  - Flame Blade
damage:
  base: 3d6
  scaling:
    damage: 1d6
    level: 4
  types:
    - fire
area:
  shape: sphere
  size: 10
---
# Flame Blade
*2nd-level, Evocation*  

- **Casting time:** 1 Bonus Action
- **Range:** Self
- **Components:** V, S, M (leaf of sumac)
- **Duration:** Concentration, up to 10 minutes

You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.

You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes `dice:3d6|noform|noparens|avg` (`3d6`) fire damage.

The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet.

**At Higher Levels.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by `dice:1d6|noform|noparens|avg|text(1d6)` for every two slot levels above 2nd.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]

*Source: Player's Handbook p. 242. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
