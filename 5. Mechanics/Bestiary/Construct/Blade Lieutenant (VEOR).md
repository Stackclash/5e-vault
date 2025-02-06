---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 9
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(VEOR)
  - monster\Cr\9
  - monster\Size\Medium
  - monster\Type\Construct\Warforged
aliases:
  - Blade Lieutenant
---
# [[5. Mechanics\Bestiary\Construct\Blade Lieutenant (VEOR).md|Blade Lieutenant]]
*Source: Vecna: Eve of Ruin p. 209*

Blade lieutenants lead subordinates on raids on behalf of the Lord of Blades. Soldiers who fail to meet a lieutenant's demands are harshly disciplined.

## Blades of Eberron

In the aftermath of Eberron's Last War, a warforged called the Lord of Blades rose to fill the power vacuum left in the devastated Mournland. The Lord of Blades' followers, known as blades, formed a cult of personality that deifies the Lord of Blades and preaches a bloody, jingoistic doctrine of warforged superiority. The primary tenet of the blades is that non-warforged on the continent of Khorvaire must be slaughtered.

```statblock
"name": "Blade Lieutenant (VEOR)"
"size": "Medium"
"type": "construct"
"subtype": "warforged"
"alignment": "typically  Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "153"
"hit_dice": "18d8 + 72"
"stats":
- !!int "18"
- !!int "13"
- !!int "19"
- !!int "14"
- !!int "14"
- !!int "17"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Intelligence": !!int "6"
"skillsaves":
  "Intimidation": !!int "7"
  "Insight": !!int "6"
  "Perception": !!int "6"
"damage_resistances": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "passive Perception 16"
"languages": "Common"
"cr": "9"
"traits":
- "desc": "The lieutenant has advantage on an attack roll against a creature if at\
    \ least one of the lieutenant's allies is within 5 feet of the creature and the\
    \ ally doesn't have the [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
    \ condition."
  "name": "Pack Tactics"
"actions":
- "desc": "The lieutenant makes three Longsword or Javelin Launcher attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 17 (3d8\
    \ + 4) slashing damage, or 20 (3d10 + 4) slashing damage if used with two hands."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: +8 to hit, range 30/120 ft., one target. Hit:\
    \ 14 (3d6 + 4) piercing damage, and the target has the [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]\
    \ condition."
  "name": "Javelin Launcher"
"bonus_actions":
- "desc": "The lieutenant targets one ally it can see within 30 feet of itself. If\
    \ the target can see or hear the lieutenant, the target can make one melee attack\
    \ using its reaction, if available, and has advantage on the attack roll."
  "name": "Command Ally"
- "desc": "The lieutenant ends the [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ and [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] conditions on itself\
    \ and each creature of its choice that it can see within 30 feet of itself."
  "name": "Rally the Troops (1/Day)"
"reactions":
- "desc": "The lieutenant adds 3 to its AC against one melee attack that would hit\
    \ it. To do so, the lieutenant must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Construct/token/blade-lieutenant-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
