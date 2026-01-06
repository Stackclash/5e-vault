---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/druid
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/4th-level
  - spell/school/necromancy
  - spell/subclass/arcane-trickster
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Druid
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Wizard
school: Necromancy
level: 4
ritual: false
components: 'V, S, M (a vial of poison)'
verbal: true
somatic: true
material: true
material_desc: a vial of poison
time: 1 Action
duration: Instantaneous
range: Self (10-foot Radius)
aliases:
  - Doom of Serpent Coils
damage:
  base: 4d6
  scaling:
    damage: null
    level: null
  types:
    - poison
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
area:
  shape: radius
  size: 10
---
# Doom of Serpent Coils
*4th-level, Necromancy*  

- **Casting time:** 1 Action
- **Range:** Self (10-foot Radius)
- **Components:** V, S, M (a vial of poison)
- **Duration:** Instantaneous

You drink a dose of venom or other poison and spread the effect to other living things around you. If the poison normally allows a saving throw, your save automatically fails. You suffer the effect of the poison normally before spreading the poison to all other living creatures within 10 feet of you. Instead of making the usual saving throw against the poison, each creature around you makes a Constitution saving throw against the spell. On a successful save, a target suffers no damage or other effect from the poison and is immune to further castings of *doom of serpent coils* for 24 hours. On a failed save, a target doesn't suffer the poison's usual effect; instead, it takes `dice:4d6|noform|noparens|avg` (`4d6`) poison damage and is [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]]. While [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] in this way, a creature repeats the saving throw at the end of each of its turns. On a subsequent failed save, it takes `dice:4d6|noform|noparens|avg` (`4d6`) poison damage and is still [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]]. On a subsequent successful save, it is no longer [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] and is immune to further *castings of doom of serpent coils* for 24 hours.

Multiple castings of this spell have no additional effect on creatures that are already [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] by it. The effect can be ended by protection from poison or comparable magic.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 62*
