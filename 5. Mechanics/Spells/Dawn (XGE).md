---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/evocation
  - spell/subclass/divine-soul
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Sorcerer (Divine Soul)
  - Wizard
school: Evocation
level: 5
ritual: false
components: 'V, S, M (a sunburst pendant worth at least 100 gp)'
verbal: true
somatic: true
material: true
material_desc: a sunburst pendant worth at least 100 gp
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 60 feet
aliases:
  - Dawn
damage:
  base: 4d10
  scaling:
    damage: null
    level: null
  types:
    - radiant
saving_throw:
  skills:
    - Constitution
  succeeds: half damage
area:
  shape: sphere
  size: 30
---
# Dawn
*5th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 60 feet
- **Components:** V, S, M (a sunburst pendant worth at least 100 gp)
- **Duration:** Concentration, up to 1 minute

The light of dawn shines down on a location you specify within range. Until the spell ends, a 30-foot-radius, 40-foot-high cylinder of bright light glimmers there. This light is sunlight.

When the cylinder appears, each creature in it must make a Constitution saving throw, taking `dice:4d10|noform|noparens|avg` (`4d10`) radiant damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw whenever it ends its turn in the cylinder.

If you're within 60 feet of the cylinder, you can move it up to 60 feet as a bonus action on your turn.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [Sorcerer (Divine Soul)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Xanathar's Guide to Everything p. 153*
