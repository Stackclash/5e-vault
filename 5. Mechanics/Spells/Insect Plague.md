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
  - spell/level/5th-level
  - spell/school/conjuration
  - spell/subclass/circle-of-the-land/desert
  - spell/subclass/divine-soul
  - spell/subclass/hedge-mage
  - spell/subclass/nature-domain
  - spell/subclass/swarmkeeper
  - spell/subclass/tempest-domain
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Cleric (Nature Domain)
  - Cleric (Tempest Domain)
  - Druid
  - 'Druid (Circle of the Land, Desert)'
  - Ranger (Swarmkeeper)
  - Sorcerer
  - Sorcerer (Divine Soul)
  - Wizard (Hedge Mage)
school: Conjuration
level: 5
ritual: false
components: 'V, S, M (a few grains of sugar, some kernels of grain, and a smear of fat)'
verbal: true
somatic: true
material: true
material_desc: 'a few grains of sugar, some kernels of grain, and a smear of fat'
time: 1 Action
duration: 'Concentration, up to 10 minutes'
range: 300 feet
aliases:
  - Insect Plague
damage:
  base: 4d10
  scaling:
    damage: 1d10
    level: 6
  types:
    - piercing
saving_throw:
  skills:
    - Constitution
  succeeds: half damage
area:
  shape: sphere
  size: 20
---
# Insect Plague
*5th-level, Conjuration*  
![[/5. Mechanics/Spells/img/insect-plague.webp#right]]  

- **Casting time:** 1 Action
- **Range:** 300 feet
- **Components:** V, S, M (a few grains of sugar, some kernels of grain, and a smear of fat)
- **Duration:** Concentration, up to 10 minutes

Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain.

When the area appears, each creature in it must make a Constitution saving throw. A creature takes `dice:4d10|noform|noparens|avg` (`4d10`) piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the damage increases by `dice:1d10|noform|noparens|avg|text(1d10)` for each slot level above 5th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Nature Domain.md\|Cleric (Nature Domain)]]; [[/5. Mechanics/Lists/List Spells Classes Tempest Domain.md\|Cleric (Tempest Domain)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Circle Of The Land.md\|Druid (Circle of the Land, Desert)]]; [[/5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [Ranger (Swarmkeeper)](/compendium/lists/list-spells-classes-swarmkeeper-tce.md "subclass=TCE"); [Sorcerer (Divine Soul)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [[/5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [Wizard (Hedge Mage)](/compendium/lists/list-spells-classes-hedge-mage-griffonssaddlebag3.md "subclass=GriffonsSaddlebag3")

*Source: Player's Handbook p. 254. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
