---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/5
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Mirrorlight Thief
---
# [[5. Mechanics/Bestiary/Humanoid/Mirrorlight Thief (GRIFFONSSADDLEBAG3).md|Mirrorlight Thief]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Mirrorlight thieves are capable rogues that specialize in evasive maneuvers and skulduggery of both hands and mind using illusions. Whether gained from exposure to mirrorlight crystals, training with them, or other sources of powerful illusory magic, these ne'er-do-wells can manifest illusory clones of themselves that can even turn corporeal temporarily—just long enough to stab you in the back.

```statblock
"name": "Mirrorlight Thief (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
"hp": !!int "49"
"hit_dice": "9d8 + 9"
"stats":
- !!int "12"
- !!int "18"
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "17"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "7"
"skillsaves":
  "Athletics": !!int "7"
  "Deception": !!int "6"
  "Stealth": !!int "10"
  "Perception": !!int "4"
  "Acrobatics": !!int "7"
  "Survival": !!int "4"
"senses": "passive Perception 10"
"languages": "Common, Thieves' cant, any 1 other"
"cr": "5"
"traits":
- "desc": "Its innate spellcasting ability is Charisma.\n\nThe thief can innately\
    \ cast minor illusion.\n"
  "name": "Innate Spellcasting"
- "desc": "On each of its turns, the thief can use a bonus action to take the Dash,\
    \ Disengage, or Hide action."
  "name": "Cunning Action"
- "desc": "If the thief is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the thief instead takes no damage if\
    \ it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "The thief deals an extra 14 (4d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of the thief that isn't incapacitated and the thief doesn't\
    \ have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
- "desc": "As a bonus action, the thief conjures a perfect illusory clone of itself\
    \ in an unoccupied space within 15 feet of it. The clone has 1 hit point, an AC\
    \ of 14, and a movement speed of 30 feet. The clone can't take actions, but can\
    \ move on the thief's turn (not provoking opportunity attacks), and counts as\
    \ a hostile creature to the thief's enemies. If the thief uses this action while\
    \ it has a clone projected, the previous clone is dispelled as the new one is\
    \ created."
  "name": "Mirrorlight Projection (3/Day)"
"actions":
- "desc": "The thief makes two weapon attacks. One attack can originate from the thief's\
    \ clone."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) piercing damage."
  "name": "Shortsword"
- "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4 + 4) piercing damage."
  "name": "Dagger"
"reactions":
- "desc": "When a creature the thief can see leaves the thief's reach, the thief causes\
    \ the clone to make a melee weapon attack (using the thief's Dexterity) against\
    \ that creature. On a hit, the target creature takes 8 radiant damage."
  "name": "Phantom Swipe"
- "desc": "The thief halves the damage it takes from an attack made against it, provided\
    \ it can see the attacker."
  "name": "Uncanny Dodge"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
