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
  - spell/level/6th-level
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
level: 6
ritual: false
components: 'V, S, M (a magnifying glass)'
verbal: true
somatic: true
material: true
material_desc: a magnifying glass
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: Self (60-foot Line)
aliases:
  - Sunbeam
damage:
  base: 6d8
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
  shape: line
  size: 60
---
# Sunbeam
*6th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** Self (60-foot Line)
- **Components:** V, S, M (a magnifying glass)
- **Duration:** Concentration, up to 1 minute

A beam of brilliant light flashes out from your hand in a 5-foot-wide, 60-foot-long line. Each creature in the line must make a Constitution saving throw. On a failed save, a creature takes `dice:6d8|noform|noparens|avg` (`6d8`) radiant damage and is [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] until your next turn. On a successful save, it takes half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] by this spell. Undead and oozes have disadvantage on this saving throw.

You can create a new line of radiance as your action on any turn until the spell ends.

For the duration, a mote of brilliant radiance shines in your hand. It sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light is sunlight.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [Sorcerer (Divine Soul)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Player's Handbook p. 279. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
