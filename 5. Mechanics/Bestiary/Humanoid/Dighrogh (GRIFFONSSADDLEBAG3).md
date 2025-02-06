---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(GRIFFONSSADDLEBAG3)
  - monster\Cr\1
  - monster\Size\Medium
  - monster\Type\Humanoid\Dighrogh
aliases:
  - Dighrogh
---
# [[5. Mechanics\Bestiary\Humanoid\Dighrogh (GRIFFONSSADDLEBAG3).md|Dighrogh]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Dighrogh are repulsive, frog-faced humanoids that reek of muck and acrid mineral deposits, and lurk in the abandoned or disused tunnels beneath Ilridun. Many stories tell of entrepreneurial miners losing their lives to dighrogh, who are capable of swallowing entire dwarves whole. Dighrogh were once a massive threat to the city in its early years of expansion and are universally despised throughout Ilridun and its populace. Despite the efforts of the Order of the Enlightened Matrons, these creatures continue to survive and threaten miners beneath the city. Clever enough to be dangerous on their own, some dighrogh have also been known to serve powerful, aberrant forces from the Realm Below.

```statblock
"name": "Dighrogh (GRIFFONSSADDLEBAG3)"
"size": "Medium"
"type": "humanoid"
"subtype": "dighrogh"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d8 + 6"
"stats":
- !!int "14"
- !!int "13"
- !!int "14"
- !!int "6"
- !!int "9"
- !!int "5"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "3"
  "Perception": !!int "1"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Undercommon"
"cr": "1"
"traits":
- "desc": "The dighrogh can hold its breath for 15 minutes."
  "name": "Hold Breath"
- "desc": "The dighrogh's long jump is up to 20 feet and its high jump is up to 10\
    \ feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "The dighrogh makes three attacks: one with its bite and two with its claws.\
    \ It can use its Enlarge or Swallow in place of its bite attack."
  "name": "Multiattack"
- "desc": "For 1 minute, the dighrogh magically increases in size, along with anything\
    \ it is wearing or carrying. While enlarged, the dighrogh is Large, doubles its\
    \ damage dice on Strengthbased weapon attacks (included in the attacks), and makes\
    \ Strength checks and Strength saving throws with advantage. If the dighrogh lacks\
    \ the room to become Large, it attains the maximum size possible in the space\
    \ available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage, or 9 (2d6 + 2) piercing damage while enlarged, and if\
    \ the target is at least one size smaller than the dighrogh, it is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
    \ (escape DC 12). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
    \ and the dighrogh can't bite another target."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) slashing damage, or 7 (2d4 + 2) slashing damage while enlarged."
  "name": "Claw"
- "desc": "The dighrogh attempts to swallow a target it is grappling that is at least\
    \ one size smaller than it. The target must succeed on a DC 12 Strength saving\
    \ throw or be swallowed, ending the grapple. The swallowed target is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
    \ and [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], it has total cover\
    \ against attacks and other effects outside the dighrogh, and it takes 5 (2d4)\
    \ acid damage at the start of each of the dighrogh's turns. The dighrogh can have\
    \ only one target swallowed at a time. If the dighrogh dies, a swallowed creature\
    \ is no longer [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] by it\
    \ and can escape from the corpse using 5 feet of movement, exiting [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Swallow"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
