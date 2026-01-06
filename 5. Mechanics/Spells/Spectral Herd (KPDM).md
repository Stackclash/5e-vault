---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/paladin
  - spell/level/4th-level
  - spell/school/conjuration
  - spell/subclass/divine-soul/good
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Paladin
  - 'Sorcerer (Divine Soul, Good)'
school: Conjuration
level: 4
ritual: false
components: 'V, S'
verbal: true
somatic: true
material: false
material_desc: ''
time: 1 Action
duration: 1 minute
range: 30 feet
aliases:
  - Spectral Herd
damage:
  base: 3d6
  scaling:
    damage: null
    level: 5
  types:
    - bludgeoning
saving_throw:
  skills:
    - Dexterity
  succeeds: see spell description
---
# Spectral Herd
*4th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 30 feet
- **Components:** V, S
- **Duration:** 1 minute

You summon a spectral herd of ponies to drag off a creature that you can see within range. The target must be Large or smaller. If it fails a Dexterity saving throw, a spectral rope wraps around the target, which falls [[/5. Mechanics/Rules/Conditions.md#Prone\|prone]] and is [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]], and is immediately pulled 60 feet behind the galloping herd, in a direction of your choosing. The target also takes `dice:3d6|noform|noparens|avg` (`3d6`) bludgeoning damage from being dragged across the ground.

While the target is [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] in this way, it is dragged another 60 feet and takes another `dice:3d6|noform|noparens|avg` (`3d6`) bludgeoning damage at the start of each of your turns. The ponies continue running in the chosen direction for the duration of the spell. Once the direction is chosen, you can't change it, but the ponies do swerve around impassable obstacles. They ignore difficult terrain and are immune to damage.

The [[/5. Mechanics/Rules/Conditions.md#Restrained\|restrained]] creature can escape by using its action to make a successful Strength or Dexterity check against your spell save DC. The spectral rope can't be severed.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, one additional creature can be targeted for each slot level above 4th.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Paladin.md\|Paladin]]; [Sorcerer (Divine Soul, Good)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE")

*Source: Deep Magic p. 107*
