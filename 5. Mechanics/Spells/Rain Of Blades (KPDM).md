---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/kpdm
  - spell/class/bard/magical-secrets
  - spell/class/cleric
  - spell/class/paladin
  - spell/level/5th-level
  - spell/school/conjuration
  - spell/subclass/divine-soul/good
classes:
  - Bard (Magical Secrets)
  - Cleric
  - Paladin
  - 'Sorcerer (Divine Soul, Good)'
school: Conjuration
level: 5
ritual: false
components: 'V, S, M (shard of metal from a weapon)'
verbal: true
somatic: true
material: true
material_desc: shard of metal from a weapon
time: 1 Action
duration: 4 rounds
range: 25 feet
aliases:
  - Rain of Blades
damage:
  base: 6d6
  scaling:
    damage: null
    level: 6
  types:
    - slashing
saving_throw:
  skills:
    - Charisma
  succeeds: half damage
---
# Rain of Blades
*5th-level, Conjuration*  

- **Casting time:** 1 Action
- **Range:** 25 feet
- **Components:** V, S, M (shard of metal from a weapon)
- **Duration:** 4 rounds

You call down a rain of swords, spears, and axes. The blades fill 150 square feet (six 5-foot squares, a circle 15 feet in diameter, or any other pattern you want as long as it forms one contiguous space at least 5 feet wide in all places. The blades deal `dice:6d6|noform|noparens|avg` (`6d6`) slashing damage to each creature in the area at the moment the spell is cast, or half as much damage on a successful Dexterity saving throw.

An intelligent undead injured by the blades is [[/5. Mechanics/Rules/Conditions.md#Frightened\|frightened]] for `dice:1d4|noform|noparens|avg` (`1d4`) rounds if it fails a Charisma saving throw. Most of the blades break or are driven into the ground on impact, but enough survive intact that any single piercing or slashing melee weapon can be salvaged from the affected area and used normally if it is claimed before the spell ends. When the duration expires, all the blades (including the one that was salvaged) disappear.

**At Higher Levels.** When you cast this spell using a spell slot of 6th level or higher, an unbroken blade can be picked up and used as a magical [[/5. Mechanics/Items/1 Weapon.md\|+1 weapon]] until it disappears.

**Classes**: [[/5. Mechanics/Lists/List Spells Classes Bard.md\|Bard (Magical Secrets)]]; [[/5. Mechanics/Lists/List Spells Classes Cleric.md\|Cleric]]; [[/5. Mechanics/Lists/List Spells Classes Paladin.md\|Paladin]]; [Sorcerer (Divine Soul, Good)](/compendium/lists/list-spells-classes-divine-soul-xge.md "subclass=XGE")

*Source: Deep Magic p. 101*
