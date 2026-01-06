---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/phb
  - spell/class/bard/magical-secrets
  - spell/class/paladin
  - spell/class/ranger
  - spell/level/1st-level
  - spell/school/evocation
  - spell/subclass/forge-domain
  - spell/subrace/tiefling-zariel
classes:
  - Bard (Magical Secrets)
  - Cleric (Forge Domain)
  - Paladin
  - Ranger
school: Evocation
level: 1
ritual: false
components: V
verbal: true
somatic: false
material: false
material_desc: ''
time: 1 Bonus Action
duration: 'Concentration, up to 1 minute'
range: Self
aliases:
  - Searing Smite
damage:
  base: 1d6
  scaling:
    damage: 1d6
    level: 2
  types:
    - fire
saving_throw:
  skills:
    - Constitution
  succeeds: see spell description
---
# Searing Smite
*1st-level, Evocation*  

- **Casting time:** 1 Bonus Action
- **Range:** Self
- **Components:** V
- **Duration:** Concentration, up to 1 minute

The next time you hit a creature with a melee weapon attack during the spell's duration, your weapon flares with white-hot intensity, and the attack deals an extra `dice:1d6|noform|noparens|avg` (`1d6`) fire damage to the target and causes the target to ignite in flames. At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes `dice:1d6|noform|noparens|avg` (`1d6`) fire damage. On a successful save, the spell ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by `dice:1d6|noform|noparens|avg|text(1d6)` for each slot level above 1st.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [Cleric (Forge Domain)](/compendium/lists/list-spells-classes-forge-domain-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Paladin.md\|Paladin]]; [[/5. Mechanics/Lists/List Spells Classes Ranger.md\|Ranger]]

*Source: Player's Handbook p. 274*
