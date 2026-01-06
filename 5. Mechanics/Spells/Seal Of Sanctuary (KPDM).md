---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/wizard
  - spell/level/7th-level
  - spell/ritual
  - spell/school/abjuration
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Wizard
school: Abjuration
level: 7
ritual: true
components: 'V, S, M (incense and special inks worth 250 gp, which the spell consumes)'
verbal: true
somatic: true
material: true
material_desc: 'incense and special inks worth 250 gp, which the spell consumes'
time: 1 minute
duration: 24 hours
range: Touch
aliases:
  - Seal of Sanctuary
damage:
  base: 10d8
  scaling:
    damage: null
    level: null
  types:
    - radiant
saving_throw:
  skills:
    - Charisma
  succeeds: see spell description
---
# Seal of Sanctuary
*7th-level, Abjuration (ritual)*  

- **Casting time:** 1 minute unless cast as a ritual
- **Range:** Touch
- **Components:** V, S, M (incense and special inks worth 250 gp, which the spell consumes)
- **Duration:** 24 hours

You inscribe an angelic seal on the ground, the floor, or other solid surface of a structure. The seal creates a spherical sanctuary with a radius of 50 feet, centered on the seal. For the duration, aberrations, elementals, fey, fiends, and undead that approach to within 5 feet of the boundary know they are about to come into contact with a deadly barrier. If such a creature moves so as to touch the boundary, or tries to cross the boundary by any means, including teleportation and extradimensional travel, it must make a Charisma saving throw. On a failed save, it takes `dice:10d8|noform|noparens|avg` (`10d8`) radiant damage, is repelled to 5 feet outside the boundary, and can't target anything inside the boundary with attacks, spells, or abilities until the spell ends. On a successful save, the creature takes half as much radiant damage and can cross the boundary. If the creature is a fiend that isn't on its home plane, it is immediately destroyed (no saving throw) instead of taking damage.

Aberrations, elementals, fey, and undead that are within 50 feet of the seal (inside the boundary) have disadvantage on ability checks, attack rolls, and saving throws, and each such creature takes `dice:2d8|noform|noparens|avg` (`2d8`) radiant damage at the start of its turn.

Creatures other than aberrations, elementals, fey, fiends, and undead can't be [[/5. Mechanics/Rules/Conditions.md#Charmed\|charmed]] or [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] while within 50 feet of the seal.

The seal has AC 18, 50 hit points, resistance to bludgeoning, piercing, and slashing damage, and immunity to psychic and poison damage. Ranged attacks against the seal are made with disadvantage. If it is scribed on the surface of an object that is later destroyed (such as a wooden door), the seal is not damaged and remains in place, perhaps suspended in midair. The spell ends only if the seal is reduced to 0 hit points.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 177*
