---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/warlock
  - spell/class/wizard
  - spell/level/3rd-level
  - spell/school/conjuration
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
classes:
  - Bard (Magical Secrets)
  - Fighter (Eldritch Knight)
  - Rogue (Arcane Trickster)
  - Warlock
  - Wizard
school: Conjuration
level: 3
ritual: false
components: 'V, S, M (a vial of blood from a humanoid killed within the previous 24 hours)'
verbal: true
somatic: true
material: true
material_desc: a vial of blood from a humanoid killed within the previous 24 hours
time: 1 Action
duration: 'Concentration, up to 1 minute'
range: 30 feet
aliases:
  - Demon Within
damage:
  base: 4d6
  scaling:
    damage: null
    level: null
  types:
    - force
saving_throw:
  skills:
    - Wisdom
  succeeds: see spell description
---
# Demon Within
*3rd-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 30 feet
- **Components:** V, S, M (a vial of blood from a humanoid killed within the previous 24 hours)
- **Duration:** Concentration, up to 1 minute

One humanoid of your choice within range becomes a gateway for a demon to enter the plane of existence you are on. You choose the demon's type from among those of challenge rating of 4 or lower. The target must make a Wisdom saving throw. On a success, the gateway fails to open, and the spell has no effect. On a failed save, the target takes `dice:4d6|noform|noparens|avg` (`4d6`) force damage from the demon's attempt to claw its way through the gate. For the spell's duration, you can use a bonus action to further agitate the demon, dealing an additional `dice:2d6|noform|noparens|avg` (`2d6`) force damage to the target each time.

If the target drops to 0 hit points while affected by this spell, the demon tears through the body and appears in the same space as its now [[/5. Mechanics/Rules/Conditions.md#Incapacitated\|incapacitated]] or dead victim. You do not control this demon; it is free to either attack or leave the area as it chooses. The demon disappears after 24 hours or when it drops to 0 hit points.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[/5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [[/5. Mechanics/Lists/List Spells Classes Warlock.md\|Warlock]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 326*
