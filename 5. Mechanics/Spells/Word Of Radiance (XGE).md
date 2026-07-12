---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/xge
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/feat/magic-initiate/cleric-spells
  - spell/level/cantrip
  - spell/optfeature/blessed-warrior
  - spell/optfeature/pact-of-the-tome
  - spell/school/evocation
  - spell/subclass/divine-soul
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Sorcerer (Divine Soul)
school: Evocation
level: 0
ritual: false
components: 'V, M (a holy symbol)'
verbal: true
somatic: false
material: true
material_desc: a holy symbol
time: 1 Action
duration: Instantaneous
range: 5 feet
aliases:
  - Word of Radiance
damage:
  base: 1d6
  scaling:
    damage: null
    level: null
  types:
    - radiant
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Word of Radiance
*cantrip, Evocation*  

- **Casting time:** 1 Action
- **Range:** 5 feet
- **Components:** V, M (a holy symbol)
- **Duration:** Instantaneous

You utter a divine word, and burning radiance erupts from you. Each creature of your choice that you can see within range must succeed on a Constitution saving throw or take `dice:1d6|noform|noparens|avg` (`1d6`) radiant damage.

The spell's damage increases by `dice:1d6|noform|noparens|avg` (`1d6`) when you reach 5th level (`dice:2d6|noform|noparens|avg` (`2d6`)), 11th level (`dice:3d6|noform|noparens|avg` (`3d6`)), and 17th level (`dice:4d6|noform|noparens|avg` (`4d6`)).

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [Sorcerer (Divine Soul)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE")

*Source: Xanathar's Guide to Everything p. 171*
