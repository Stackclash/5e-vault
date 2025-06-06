---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/5th-level
  - spell/school/evocation
classes:
  - Bard
  - Sorcerer
  - Wizard
school: Evocation
level: 5
ritual: false
time: 1 Action
duration: Instantaneous
components:
  - V
  - S
aliases:
  - Prismatic Ray
---
# Prismatic Ray
*5th-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 100 feet
- **Components:** V, S
- **Duration:** Instantaneous

A ray of shifting color springs from your hand. Make a ranged spell attack against a single creature you can see within range. The ray's effect and the saving throw that applies to it depend on which color is dominant when the beam strikes its target, determined by rolling a `dice:d8|noform|noparens|avg` (`d8`).

**Prismatic Ray Colors**

`dice: [[Prismatic Ray (KPDM).md#^prismatic-ray-colors]]`

| dice: d8 | Color | Effect | Saving Throw |
|----------|-------|--------|--------------|
| 1 | Red | `dice:8d10\|noform\|noparens\|avg` (`8d10`) fire damage | Dexterity |
| 2 | Orange | `dice:8d10\|noform\|noparens\|avg` (`8d10`) acid damage | Dexterity |
| 3 | Yellow | `dice:8d10\|noform\|noparens\|avg` (`8d10`) lightning damage | Dexterity |
| 4 | Green | Target [[/5. Mechanics/Rules/Conditions.md#Poisoned\|poisoned]] | Constitution |
| 5 | Blue | Target [[/5. Mechanics/Rules/Conditions.md#Deafened\|deafened]] | Constitution |
| 6 | Indigo | Target [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] | Wisdom |
| 7 | Violet | Target [[/5. Mechanics/Rules/Conditions.md#Stunned\|stunned]] | Constitution |
| 8 | Shifting ray | Target [[/5. Mechanics/Rules/Conditions.md#Blinded\|blinded]] | Constitution |
^prismatic-ray-colors

A target takes half as much damage on a successful Dexterity saving throw. A successful Constitution or Wisdom saving throw negates the effect of a ray that inflicts a condition on the target; on a failed save, the target is affected for 5 rounds or until the effect is negated. If the result of your attack roll is a critical hit, you can choose the color of the beam that hits the target, but the attack does not deal additional damage.

**Classes**: [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]

*Source: Deep Magic p. 100*
