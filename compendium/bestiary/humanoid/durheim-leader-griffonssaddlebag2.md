---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/11
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Durheim Leader"]
---
# [Durheim Leader](compendium\bestiary\humanoid/durheim-leader-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2 p. 354*

Within the walls and courtyards of Durheim Monastery, the Leader serves as spiritual and secular advisor. In this role, they give lectures and interpretations of Lightseer Attiskin's teachings and philosophies, and ensure that both the living and the dead can walk their respective paths safely.

```statblock
"name": "Durheim Leader (GriffonsSaddlebag2)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Good"
"ac": !!int "19"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"stats":
- !!int "13"
- !!int "18"
- !!int "16"
- !!int "12"
- !!int "20"
- !!int "15"
"speed": "60 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "8"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
  "Strength": !!int "5"
  "Constitution": !!int "7"
"skillsaves":
  "Investigation": !!int "5"
  "Insight": !!int "9"
  "Perception": !!int "9"
  "Acrobatics": !!int "8"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "truesight 60 ft., passive Perception 19"
"languages": "all, telepathy 60 ft."
"cr": "11"
"traits":
- "desc": "If the leader is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the leader instead takes no damage if\
    \ it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "The leader can cast [mage hand](compendium/spells/mage-hand.md) at will,\
    \ requiring no verbal or somatic components. The leader can cast this spell and\
    \ control the hand as a bonus action, and when the leader casts the spell, it\
    \ can make the hand [invisible](/compendium/rules/conditions.md#Invisible)."
  "name": "Spirit Hand"
- "desc": "When the leader hits a creature with a melee attack, it can force the target\
    \ to make a DC 17 Constitution saving throw. On a failed save, the target is [stunned](/compendium/rules/conditions.md#Stunned)\
    \ until the end of the leader's next turn."
  "name": "Stunning Strike (1/Turn)"
- "desc": "The leader's weapon attacks are magical, and its Spirit Strike can hit\
    \ targets on the Ethereal Plane."
  "name": "Supernatural Attacks"
- "desc": "While the leader is wearing no armor and wielding no shield, its AC includes\
    \ its Wisdom modifier."
  "name": "Unarmored Defense"
- "desc": "As a bonus action, the leader can magically turn [invisible](/compendium/rules/conditions.md#Invisible)\
    \ until the start of its next turn, or until it makes an attack or casts a spell."
  "name": "Invisibility (3/Day)"
"actions":
- "desc": "The leader makes four attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +9 to hit, reach 30 ft., one target. Hit: 10 (1d10\
    \ + 5) force damage."
  "name": "Spirit Strike"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 9 (1d10\
    \ + 4) bludgeoning damage."
  "name": "Unarmed Strike"
"reactions":
- "desc": "When the leader is hit by a ranged weapon attack, it deflects the missile,\
    \ reducing the damage by 26 (1d10 + 21). If the damage is reduced to 0, the leader\
    \ catches the missile if it's small enough to hold in one hand and the leader\
    \ has a hand free. It can then make a ranged weapon attack with the caught missile,\
    \ which has an attack bonus of +8, a normal range of 20 feet, and a long range\
    \ of 60 feet. On a hit, the target takes 9 (1d10 + 4) damage of the missile's\
    \ type."
  "name": "Deflect Missile"
- "desc": "When the leader is hit by an attack, it partially slips into the Border\
    \ Ethereal, reducing the damage it takes from the attack by 16 (2d10 + 5)."
  "name": "Phase (5/Day)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```