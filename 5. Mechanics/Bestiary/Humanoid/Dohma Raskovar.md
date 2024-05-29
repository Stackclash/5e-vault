---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/5
- monster/size/medium
- monster/type/humanoid/leader
- monster/type/humanoid/orc
statblock: inline
aliases: ["Dohma Raskovar"]
---
# [[5. Mechanics/Bestiary/Humanoid/Dohma Raskovar.md|Dohma Raskovar]]
*Source: Flee, Mortals! (Packet 1) p. 8*

```statblock
"name": "Dohma Raskovar"
"size": "Medium"
"type": "humanoid"
"subtype": "orc, Leader"
"alignment": "Lawful Evil"
"ac": !!int "14"
"ac_class": "[[5. Mechanics/Items/Chain Shirt.md|chain shirt]]"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"stats":
- !!int "17"
- !!int "12"
- !!int "18"
- !!int "16"
- !!int "15"
- !!int "16"
"speed": "35 ft."
"saves":
  "Wisdom": !!int "5"
  "Strength": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Intimidation": !!int "6"
  "Athletics": !!int "6"
  "Deception": !!int "6"
  "Insight": !!int "5"
  "Perception": !!int "5"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]]"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Orc"
"cr": "5"
"traits":
- "desc": "If Raskovar fails a saving throw, he can expend a use of his Dohma Rally\
    \ without gaining its benefits (no action required), and succeed on the save instead."
  "name": "Adrenaline Rush"
- "desc": "When Raskovar isn't [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ and he is reduced to 0 hit points but not killed outright, he can make an attack\
    \ against a hostile creature (no action required) before the hit point reduction\
    \ is resolved. If the attack hits and its damage reduces the target to 0 hit points,\
    \ Raskovar drops to 1 hit point instead of 0 hit points."
  "name": "Relentless (1/Turn)"
"actions":
- "desc": "Raskovar makes three Repeating Crossbow attacks or two War Mace attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) bludgeoning damage, and the target is dazed until the end of their next\
    \ turn."
  "name": "War Mace"
- "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
    \ 7 (1d12 + 1) piercing damage, and the target's speed is reduced by 10 feet until\
    \ the end of their next turn."
  "name": "Repeating Crossbow"
- "desc": "Raskovar gains the benefits of the Dodge action, and ten orc blitzers appear\
    \ in unoccupied spaces within 30 feet of him."
  "name": "Reinforcements (1/Day)"
"bonus_actions":
- "desc": "Raskovar regains 20 hit points, and he gains resistance to bludgeoning,\
    \ piercing, and slashing damage until the end of his next turn."
  "name": "Dohma Rally (3/Day)"
"reactions":
- "desc": "When a creature Raskovar can see within 30 feet of him fails an ability\
    \ check or misses with an attack roll, that creature can reroll the check or attack,\
    \ choosing either result."
  "name": "On the House"
"legendary_actions":
- "desc": "Raskovar has three villain actions. He can take each action once during\
    \ an encounter after an enemy creature's turn. He can take these actions in any\
    \ order but can only use one per round."
  "name": ""
- "desc": "Each creature of Raskovar's choice within 60 feet of him that can hear\
    \ him can move up to their speed. After this movement, each enemy within 5 feet\
    \ of at least one creature who moved must make a DC 15 Wisdom saving throw or\
    \ be [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] of Raskovar for\
    \ 1 minute (save ends at end of turn)."
  "name": "Action 1: Close In"
- "desc": "Each creature of Raskovar's choice within 60 feet of him that can hear\
    \ him can make a Strength (Athletics) check with advantage to grapple an enemy\
    \ within their reach (no action required). Then Raskovar can move up to his speed."
  "name": "Action 2: Lockdown"
- "desc": "Raskovar moves up to his speed without provoking opportunity attacks. At\
    \ the end of the movement, he can make up to five War Mace attacks with advantage."
  "name": "Action 3: Do It Myself"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```