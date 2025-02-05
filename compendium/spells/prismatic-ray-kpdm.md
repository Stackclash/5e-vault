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
level: 5th-level
range: false
school: Evocation
time: 1 action
duration: Instantaneous
components: V, S
aliases: ["Prismatic Ray"]
---
# Prismatic Ray
*5th-level, Evocation*  

- **Casting time:** 1 action
- **Range:** 100 feet
- **Components:** V, S
- **Duration:** Instantaneous

A ray of shifting color springs from your hand. Make a ranged spell attack against a single creature you can see within range. The ray's effect and the saving throw that applies to it depend on which color is dominant when the beam strikes its target, determined by rolling a `dice:d8|noform|avg` (`d8`).

**Prismatic Ray Colors**

`dice: [](prismatic-ray-kpdm.md#^prismatic-ray-colors)`

| dice: d8 | Color | Effect | Saving Throw |
|----------|-------|--------|--------------|
| 1 | Red | `dice:8d10\|noform\|avg` (`8d10`) fire damage | Dexterity |
| 2 | Orange | `dice:8d10\|noform\|avg` (`8d10`) acid damage | Dexterity |
| 3 | Yellow | `dice:8d10\|noform\|avg` (`8d10`) lightning damage | Dexterity |
| 4 | Green | Target [poisoned](/compendium/rules/conditions.md#Poisoned) | Constitution |
| 5 | Blue | Target [deafened](/compendium/rules/conditions.md#Deafened) | Constitution |
| 6 | Indigo | Target [frightened](/compendium/rules/conditions.md#Frightened) | Wisdom |
| 7 | Violet | Target [stunned](/compendium/rules/conditions.md#Stunned) | Constitution |
| 8 | Shifting ray | Target [blinded](/compendium/rules/conditions.md#Blinded) | Constitution |
^prismatic-ray-colors

A target takes half as much damage on a successful Dexterity saving throw. A successful Constitution or Wisdom saving throw negates the effect of a ray that inflicts a condition on the target; on a failed save, the target is affected for 5 rounds or until the effect is negated. If the result of your attack roll is a critical hit, you can choose the color of the beam that hits the target, but the attack does not deal additional damage.

**Classes**: [Bard](list-spells-classes-bard); [Sorcerer](list-spells-classes-sorcerer); [Wizard](list-spells-classes-wizard)

*Source: Deep Magic p. 100*