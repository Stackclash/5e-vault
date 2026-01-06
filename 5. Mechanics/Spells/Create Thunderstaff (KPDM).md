---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/wizard
  - spell/level/7th-level
  - spell/school/transmutation
classes:
  - Bard (Magical Secrets)
  - Wizard
school: Transmutation
level: 7
ritual: false
components: 'V, S, M (a quarterstaff)'
verbal: true
somatic: true
material: true
material_desc: a quarterstaff
time: 10 minutes
duration: Instantaneous
range: Touch
aliases:
  - Create Thunderstaff
damage:
  base: 1d8
  scaling:
    damage: null
    level: null
  types:
    - thunder
---
# Create Thunderstaff
*7th-level, Transmutation*  

- **Casting time:** 10 minutes
- **Range:** Touch
- **Components:** V, S, M (a quarterstaff)
- **Duration:** Instantaneous

After casting this spell on a normal quarterstaff, the staff must then be mounted in a noisy location, such as a busy marketplace, and left there for 60 days. During that time, the staff gradually absorbs ambient sound.

After 60 days, the staff is fully charged and can't absorb any more sound. At that point, it becomes a thunderstaff, a +1 quarterstaff that has 10 charges. When you hit on a melee attack with the staff and expend 1 charge, the target takes an extra `dice:1d8|noform|noparens|avg` (`1d8`) thunder damage. You can cast a [[/5. Mechanics/Spells/Thunderwave.md\|thunderwave]] spell from the staff as a bonus action by expending 2 charges. The staff cannot be recharged.

If the final charge is not expended within 60 days, the staff becomes nonmagical again.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]

*Source: Deep Magic p. 55*
