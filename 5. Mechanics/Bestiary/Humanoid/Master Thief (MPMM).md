---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/5
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: inline
aliases: ["Master Thief"]
---
# [[5. Mechanics\Bestiary\Humanoid\Master Thief (MPMM).md|Master Thief]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 174*  

Master thieves are known for perpetrating daring heists. They tend to develop a romanticized reputation. A master thief might "retire" from hands-on work to run a thieves' guild, spearhead some covert enterprise, or enjoy a quiet life of luxury.

When a master thief completes a challenging heist, they often leave behind a calling card to taunt their victims. You may roll on the Master Thief Calling Cards table to determine what a master thief leaves behind.

**Master Thief Calling Cards**

| dice: d10 | Calling Card |
|-----------|--------------|
| 1 | Tiny, folded paper cat |
| 2 | Red bird feather |
| 3 | Rose petal |
| 4 | Figurine made from twigs and twine |
| 5 | Small note with the words "It's been fun!" written on it in an ornate script |
| 6 | Glass bead that looks like an eye |
| 7 | Pistachio shells |
| 8 | Two playing cards balanced against each other, resembling a tent |
| 9 | Worthless coin with a bite mark in it |
| 10 | Chalk or charcoal sketch of a domino mask |
^master-thief-calling-cards

```statblock
"name": "Master Thief (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"hp": !!int "84"
"hit_dice": "13d8 + 26"
"stats":
- !!int "11"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "11"
- !!int "12"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "7"
  "Intelligence": !!int "3"
"skillsaves":
  "Athletics": !!int "3"
  "Sleight of Hand": !!int "7"
  "Stealth": !!int "7"
  "Perception": !!int "3"
  "Acrobatics": !!int "7"
"senses": "passive Perception 13"
"languages": "any one language (usually Common) plus thieves' cant"
"cr": "5"
"traits":
- "desc": "If the thief is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the thief instead takes no damage if\
    \ it succeeds on the saving throw and only half damage if it fails, provided the\
    \ thief isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Evasion"
"actions":
- "desc": "The thief makes three Shortsword or Shortbow attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage plus dice: 1d6|avg\
    \ (1d6) poison damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice: d20+7 (+7 to hit), range 80/320 ft., one\
    \ target. Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage plus dice: 1d6|avg\
    \ (1d6) poison damage."
  "name": "Shortbow"
"bonus_actions":
- "desc": "The thief takes the [[/5. Mechanics/Rules/Actions.md#Dash|Dash]], [[/5. Mechanics/Rules/Actions.md#Disengage|Disengage]],\
    \ or [[/5. Mechanics/Rules/Actions.md#Hide|Hide]] action."
  "name": "Cunning Action"
"reactions":
- "desc": "The thief halves the damage that it takes from an attack that hits it.\
    \ The thief must be able to see the attacker."
  "name": "Uncanny Dodge"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/humanoid/token/master-thief.png"
```
^statblock

## Environment

urban

## Harvester Table
```dataviewjs
await dv.view("monsterHarvesterTable", {current: dv.current()})
```