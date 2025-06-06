---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/cleric
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/8th-level
  - spell/school/evocation
  - spell/subclass/divine-soul
classes:
  - Bard
  - Cleric
  - Druid
  - Sorcerer
  - Sorcerer (Divine Soul)
  - Wizard
school: Evocation
level: 8
ritual: false
time: 1 Action
duration: Instantaneous
components:
  - V
  - S
  - M
aliases:
  - Sunburst
range: 150 feet
material: Fire and a piece of sunstone.
damageType: Radiant
save:
  type: CON
  success: half
area:
  type: cylinder
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

**Classes**: [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [Sorcerer (Divine Soul)](compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE")

*Source: Player's Handbook p. 279. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
