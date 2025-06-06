---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/4
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Durheim Guide
---
# [[5. Mechanics\Bestiary\Humanoid\Durheim Guide (GRIFFONSSADDLEBAG2).md|Durheim Guide]]
*Source: The Griffon's Saddlebag, Book 2 p. 353*

When Durheim monks have honed their soul to the point where the Walking the Liminal Path is the next stage of their destiny, they begin their journey as Guides. Along the Path, they travel across the land and dutifully seek out struggling spirits. When they feel the time is right, they return to record their experiences. As the main body of the Monastery's membership, Guides are often someone's first introduction to the Order.

```statblock
"name": "Durheim Guide (GRIFFONSSADDLEBAG2)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Good"
"ac": !!int "16"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "14"
  - !!int "11"
  - !!int "17"
  - !!int "13"
"speed": "50 ft."
"saves":
  - "strength": "+3"
  - "dexterity": "+5"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]"
    "desc": "+2"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "passive Perception 13"
"languages": "Common, plus two other languages"
"cr": "4"
"traits":
  - "desc": "The guide can see up to 60 feet into the Ethereal Plane."
    "name": "Ethereal Sight"
  - "desc": "If the guide is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, the guide instead takes no damage if\
      \ it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "The guide can cast [[5. Mechanics/Spells/Mage Hand.md|mage hand]] at will,\
      \ requiring no verbal or somatic components. The guide can cast this spell and\
      \ control the hand as a bonus action, and when the guide casts the spell, it\
      \ can make the hand [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]."
    "name": "Spirit Hand"
  - "desc": "When the guide hits a creature with a melee attack, it can force the\
      \ target to make a DC 13 Constitution saving throw. On a failed save, the target\
      \ is [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]] until the end of the\
      \ guide's next turn."
    "name": "Stunning Strike (1/Turn)"
  - "desc": "The guide's weapon attacks are magical, and its Spirit Strike can hit\
      \ targets on the Ethereal Plane."
    "name": "Supernatural Attacks"
  - "desc": "While the guide is wearing no armor and wielding no shield, its AC includes\
      \ its Wisdom modifier."
    "name": "Unarmored Defense"
"actions":
  - "desc": "The guide makes three attacks."
    "name": "Multiattack"
  - "desc": "Melee Spell Attack: +5 to hit, reach 30 ft., one target. Hit: 6 (1d6\
      \ + 3) force damage."
    "name": "Spirit Strike"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) bludgeoning damage."
    "name": "Unarmed Strike"
"reactions":
  - "desc": "In response to being hit by a ranged weapon attack, the guide deflects\
      \ the missile. The damage it takes from the attack is reduced by 18 (1d10 +\
      \ 13). If the damage is reduced to 0, the guide catches the missile if it's\
      \ small enough to hold in one hand and the guide has a hand free. It can then\
      \ make a ranged weapon attack with the caught missile, which has an attack bonus\
      \ of +5, a normal range of 20 feet, and a long range of 60 feet. On a hit, the\
      \ target takes 6 (1d6 + 3) damage of the missile's type."
    "name": "Deflect Missile"
"source":
  - "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
