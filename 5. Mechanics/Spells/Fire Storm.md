---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/druid
  - spell/class/sorcerer
  - spell/level/7th-level
  - spell/school/evocation
  - spell/subclass/divine-soul
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Druid
  - Sorcerer
  - Sorcerer (Divine Soul)
school: Evocation
level: 7
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: Instantaneous
range: 150 feet
aliases:
  - Fire Storm
damage:
  base: 7d10
  scaling:
    damage: null
    level: null
  types:
    - fire
saving_throw:
  skills:
    - Dexterity
  succeeds: half damage
area:
  shape: cube
  size: 10
---
# Fire Storm
*7th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S
- **Duration:** Instantaneous

A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face of another cube. Each creature in the area must make a Dexterity saving throw. It takes `dice:7d10|noform|noparens|avg` (`7d10`) fire damage on a failed save, or half as much damage on a successful one.

The fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [Sorcerer (Divine Soul)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]

*Source: Player's Handbook p. 242. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
