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
  - Physiker
---
# [[5. Mechanics\Bestiary\Humanoid\Physiker (GRIFFONSSADDLEBAG3).md|Physiker]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Although primarily found in the Medica Meridia, anyone can become a physiker with the proper training—typically through years of apprenticeship. These skilled martial artists utilize their abundant knowledge of the body's "fresh" and "saltwater" energy meridians to heal with acupuncture and tattoos, but also to precisely debilitate their foes. In Ilridun, any ship or group with a physiker, especially one sponsored by the Medica Meridia, is afforded additional respect and deference by Ilridun's citizens. Given the city's position as a bustling naval hub, physikers can often be found on land and sea across the world, carried by the tides of fate towards their inevitable destinies.

```statblock
"name": "Physiker (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "typically  Neutral Good"
"ac": !!int "17"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"modifier": !!int "4"
"stats":
  - !!int "13"
  - !!int "18"
  - !!int "14"
  - !!int "11"
  - !!int "17"
  - !!int "10"
"speed": "50 ft."
"saves":
  - "strength": "+4"
  - "dexterity": "+7"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Medicine|Medicine]]"
    "desc": "+9"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "passive Perception 13"
"languages": "Common plus one other language"
"cr": "5"
"traits":
  - "desc": "If the physiker is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, the physiker instead takes no damage\
      \ if it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "The physiker's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "When the physiker hits a creature with a blowgun needle or unarmed strike,\
      \ it can choose one of the following options:\n\n- Disable. The next attack\
      \ roll the target makes before the end of the physiker's next turn is made with\
      \ disadvantage.  \n- Expose. The next attack roll made against the target\
      \ before the end of the physiker's next turn is made with advantage.  "
    "name": "Pointed Strikes (1/Turn)"
  - "desc": "When the physiker hits a creature with a melee attack, it can force the\
      \ target to make a DC 14 Constitution saving throw. On a failed save, the target\
      \ is [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]] until the end of the\
      \ physiker's next turn."
    "name": "Stunning Strike (Recharge 5-6)"
  - "desc": "While the physiker is wearing no armor and wielding no shield, its AC\
      \ includes its Wisdom modifier."
    "name": "Unarmored Defense"
"actions":
  - "desc": "The physiker makes three attacks. It can use its Restoring Touch in place\
      \ of one attack."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 7 (1d6 + 4) piercing damage."
    "name": "Blowgun Needle"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) bludgeoning damage."
    "name": "Unarmed Strike"
  - "desc": "The physiker casts the [[5. Mechanics/Spells/Enhance Ability.md|enhance ability]]\
      \ spell. When cast in this way, the spell has a range of 20 feet."
    "name": "Embolden (Recharges after a Short or Long Rest)"
  - "desc": "The physiker touches a creature or harmlessly launches a blowgun needle\
      \ at a creature within 20 feet of it. The target regains 30 (4d8 + 12) hit points.\n\
      \nOnce a creature regains hit points in this way, it can't do so again until\
      \ it finishes a short or long rest."
    "name": "Restoring Touch (4/Day)"
"reactions":
  - "desc": "When the physiker is hit by a ranged weapon attack, it deflects the missile,\
      \ reducing the damage it takes from the attack by 19 (1d10 + 14). If the damage\
      \ is reduced to 0, the physiker catches the missile if it's small enough to\
      \ hold in one hand and the physiker has a hand free. It can then make a ranged\
      \ weapon attack with the caught missile, which has an attack bonus of +7, a\
      \ normal range of 20 feet, and a long range of 60 feet. On a hit, the target\
      \ takes 7 (1d6 + 4) damage of the missile's type."
    "name": "Deflect Missile"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
