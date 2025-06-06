---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/cleric
  - spell/class/druid
  - spell/class/sorcerer
  - spell/level/5th-level
  - spell/school/conjuration
  - spell/subclass/circle-of-the-land
  - spell/subclass/divine-soul
  - spell/subclass/hedge-mage
  - spell/subclass/nature-domain
  - spell/subclass/swarmkeeper
  - spell/subclass/tempest-domain
classes:
  - Bard
  - Cleric
  - Cleric (Nature Domain)
  - Cleric (Tempest Domain)
  - Druid
  - Druid (Circle of the Land)
  - Ranger (Swarmkeeper)
  - Sorcerer
  - Sorcerer (Divine Soul)
  - Wizard (Hedge Mage)
school: Conjuration
level: 5
ritual: false
time: 1 Action
duration: Up to 10 minutes
components:
  - V
  - S
  - M
aliases:
  - Insect Plague
range: 300 feet
material: 'A few grains of sugar, some kernels of grain, and a smear of fat.'
damageType: Piercing
save:
  type: CON
  success: half
area:
  type: sphere
  size: 20
concentration: true
---
# Insect Plague
*5th-level, Conjuration*  
![[5. Mechanics/Spells/img/insect-plague.webp#right]]  

- **Casting time:** 1 Action
- **Range:** 300 feet
- **Components:** V, S, M (a few grains of sugar, some kernels of grain, and a smear of fat)
- **Duration:** Concentration, up to 10 minutes

Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. The sphere spreads around corners. The sphere remains for the duration, and its area is lightly obscured. The sphere's area is difficult terrain.

When the area appears, each creature in it must make a Constitution saving throw. A creature takes `dice:4d10|noform|noparens|avg` (`4d10`) piercing damage on a failed save, or half as much damage on a successful one. A creature must also make this saving throw when it enters the spell's area for the first time on a turn or ends its turn there.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, the damage increases by `dice:1d10|noform|noparens|avg|text(d10)` for each slot level above 5th.

**Classes**: [[5. Mechanics/Lists/List Spells Classes Tempest Domain.md\|Cleric (Tempest Domain)]]; [[5. Mechanics/Lists/List Spells Classes Circle Of The Land.md\|Druid (Circle of the Land)]]; [Ranger (Swarmkeeper)](compendium/lists/list-spells-classes-swarmkeeper-tce.md "subclass=TCE"); [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[5. Mechanics/Lists/List Spells Classes Nature Domain.md\|Cleric (Nature Domain)]]; [[5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [Sorcerer (Divine Soul)](compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE"); [Wizard (Hedge Mage)](compendium/lists/list-spells-classes-hedge-mage-griffonssaddlebag3.md "subclass=GriffonsSaddlebag3")

*Source: Player's Handbook p. 254. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
