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
  - spell/class/wizard
  - spell/level/8th-level
  - spell/school/evocation
  - spell/subclass/divine-soul
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Druid
  - Sorcerer
  - Sorcerer (Divine Soul)
  - Wizard
school: Evocation
level: 8
ritual: false
components: 'V, S, M (fire and a piece of sunstone)'
verbal: true
somatic: true
material: true
material_desc: fire and a piece of sunstone
time: 1 Action
duration: Instantaneous
range: 150 feet
aliases:
  - Sunburst
damage:
  base: 12d6
  scaling:
    damage: null
    level: null
  types:
    - radiant
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: sphere
  size: 60
---
# Sunburst
*8th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 150 feet
- **Components:** V, S, M (fire and a piece of sunstone)
- **Duration:** Instantaneous

Brilliant sunlight flashes in a 60-foot radius centered on a point you choose within range. Each creature in that light must make a Constitution saving throw. On a failed save, a creature takes `dice:12d6|noform|noparens|avg` (`12d6`) radiant damage and is [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] for 1 minute. On a successful save, it takes half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] by this spell. Undead and oozes have disadvantage on this saving throw.

A creature [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]].

This spell dispels any darkness in its area that was created by a spell.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [Sorcerer (Divine Soul)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 279. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
