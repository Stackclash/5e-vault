---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG2)
  - monster\Cr\5
  - monster\Size\Medium
  - monster\Type\Humanoid\Any Race
aliases:
  - Cartographer's Agent
---
# [[5. Mechanics\Bestiary\Humanoid\Cartographers Agent (GRIFFONSSADDLEBAG2).md|Cartographer's Agent]]
*Source: The Griffon's Saddlebag, Book 2 p. 337*

Most members of The Cartographer's Guild are simple mapmakers or merchants, but a special division known as The Cartographer's Agents handles the faction's dirtier business. These are the individuals that track and follow adventurers, using them as pawns to wear down the defenses of various dungeons and similar challenging locations. If these unknowing adventurers fall in combat, these agents are the ones that retrieve their belongings and treasures to fill the guild's coffers. If they survive, the agents can either finish them off and claim the wealth, or loot any leftover treasure that they were unable to acquire.

```statblock
"name": "Cartographers Agent (GRIFFONSSADDLEBAG2)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
"hp": !!int "104"
"hit_dice": "19d8 + 19"
"stats":
- !!int "13"
- !!int "18"
- !!int "12"
- !!int "17"
- !!int "14"
- !!int "15"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "7"
  "Intelligence": !!int "6"
"skillsaves":
  "Sleight of Hand": !!int "10"
  "Deception": !!int "5"
  "Stealth": !!int "10"
  "Investigation": !!int "6"
  "Perception": !!int "5"
  "Acrobatics": !!int "7"
"senses": "passive Perception 15"
"languages": "Common, Thieves' cant"
"cr": "5"
"traits":
- "desc": "On each of its turns, the agent can use a bonus action to take the [[/5. Mechanics/Rules/Actions.md#Dash|Dash]],\
    \ [[/5. Mechanics/Rules/Actions.md#Disengage|Disengage]], or [[/5. Mechanics/Rules/Actions.md#Hide|Hide]]\
    \ action."
  "name": "Cunning Action"
- "desc": "If the agent is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the agent instead takes no damage if\
    \ it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "The agent has a +3 bonus to any ability check it makes using [[5. Mechanics/Items/Cartographers Tools.md|cartographer's\
    \ tools]], in addition to the ability\
    \ modifier used for the check."
  "name": "Expert Cartography"
- "desc": "The agent deals an extra 21 (6d6) damage when it hits a target with a weapon\
    \ attack and has advantage on the attack roll, or when the target is within 5\
    \ feet of an ally of the agent that isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
    \ and the agent doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "The agent makes two attacks with its dagger."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 6 (1d4+ 4) piercing damage."
  "name": "Dagger"
- "desc": "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit:\
    \ 8 (1d8 + 4) piercing damage."
  "name": "Light Crossbow"
"reactions":
- "desc": "The agent halves the damage that it takes from an attack that hits it.\
    \ The agent must be able to see the attacker."
  "name": "Uncanny Dodge"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
