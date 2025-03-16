---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/3
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Heretic
---
# [[5. Mechanics/Bestiary/Humanoid/Heretic (GRIFFONSSADDLEBAG3).md|Heretic]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Heretics are tricksters that interface with deities but aren't called to serve a single one. These rogues are able to broker tenuous, temporary accords with them to cast a limited spectrum of magic. These Hereteics often play as pivotal roles in the Upper Planes' greater machinations as the clerics and paladins that devoutly serve them.

```statblock
"name": "Heretic (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "10"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "15"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "4"
  "Intelligence": !!int "2"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "6"
  "Religion": !!int "4"
  "Persuasion": !!int "4"
"senses": "passive Perception 13"
"languages": "Common, Thieves' cant, plus any one language"
"cr": "3"
"traits":
- "desc": "The heretic is an 8th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 13, +5 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following cleric spells:\n\
    \nCantrips (at will): [[5. Mechanics/Spells/Guidance.md|guidance]], [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]],\
    \ [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n1st-2nd level (2 slots):\
    \ [[5. Mechanics/Spells/Bless.md|bless]], [[5. Mechanics/Spells/Cure Wounds.md|cure wounds]],\
    \ [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]], [[5. Mechanics/Spells/Spiritual Weapon.md|spiritual weapon]]"
  "name": "Spellcasting"
- "desc": "If the heretic is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the heretic instead takes no damage if\
    \ it succeeds on the saving throw, and only half damage if it fails. It also gains\
    \ this benefit for any saving throw it makes to prevent radiant damage, even if\
    \ it's not a Dexterity saving throw."
  "name": "Evasion"
- "desc": "As a bonus action, the heretic can curse a creature it can see within 60\
    \ feet of it for 1 minute or until it uses this effect again. For the duration,\
    \ whenever the cursed creature makes a saving throw against a spell the heretic\
    \ casts, it must roll a d4 and subtract the number rolled from the total."
  "name": "Heretic's Curse"
- "desc": "The heretic deals an extra 14 (4d6) damage when it hits a target with a\
    \ weapon attack and has advantage on the attack roll, or when the target is within\
    \ 5 feet of an ally of the heretic that isn't incapacitated and the heretic doesn't\
    \ have disadvantage on the attack roll.\n\nIf the target is under the effects\
    \ of the Heretic's Curse, the heretic can choose for its Sneak Attack damage to\
    \ be radiant, and it can use its Sneak Attack against the target even if it doesn't\
    \ have advantage on the attack roll, but not if it has disadvantage on it."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage."
  "name": "Mace"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
