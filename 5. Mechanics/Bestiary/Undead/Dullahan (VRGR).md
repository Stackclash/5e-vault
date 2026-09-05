---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: []
size: Medium
alignment: Unaligned
ac: 16
hp: 135
type: undead
tags:
  - monster
  - compendium/src/5e/vrgr
  - monster/cr/10
  - monster/size/medium
  - monster/type/undead
aliases:
  - Dullahan
---
# [[/5. Mechanics/Bestiary/Undead/Dullahan (VRGR).md|Dullahan]]
*Source: Van Richten's Guide to Ravenloft p. 233*

Dullahans are headless undead warriors—the remains of villains who let vengeance consume them. These decapitated hunters haunt the areas where they were slain, butchering innocents in search of their severed heads or to quench their thirst for revenge.

Wicked knights or commanders in life, dullahans adhere to twisted codes of chivalry or soldiership. These fallen champions consider a specific location their battlefield. This gives rise to stories of haunted battlegrounds, ruins, roads, river crossings and other strategic locations where a dullahan continues a terrifying campaign against the living. In death, dullahans are often rejoined by those who followed them in life, either in the form of lesser undead, like skeletons or wights, or terrifying mounts, like warhorse skeletons or nightmares.

## Headless Hunts

Dullahans are known for seeking their lost heads, giving rise to regional legends of headless hunters and endless searches. The Dullahan Legends table suggests dullahan hauntings that might be the stuff of local legends.

**Dullahan Legends**

`dice: [[/5. Mechanics/Bestiary/Undead/Dullahan (VRGR).md#^dullahan-legends]]`

| dice: d4 | Haunting |
|----------|----------|
| 1 | A dullahan pursues anyone who has one of the shards of its shattered skull. |
| 2 | A vain dullahan pursues it own relatives, seeking to claim a head with its family resemblance. |
| 3 | A greedy dullahan seeks to recover its bejeweled helmet, caring nothing for the head that wears it. |
| 4 | Two dullahans seek the same head, both believing they're the actual owner. |
^dullahan-legends

```statblock
"name": "Dullahan (VRGR)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "[[/5. Mechanics/Items/Breastplate.md|breastplate]]"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "16"
  - !!int "11"
  - !!int "15"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "constitution": !!int "7"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
"damage_resistances": "cold, lightning, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"gear":
  - "[[/5. Mechanics/Items/Battleaxe.md|battleaxe]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Truesight|truesight]] 120 ft., passive Perception\
  \ 16"
"languages": "understands the languages it knew in life but can't speak"
"cr": "10"
"traits":
  - "desc": "If the dullahan is reduced to 0 hit points, it doesn't die or fall [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]].\
      \ Instead, it regains 97 hit points. In addition, it summons three [[/5. Mechanics/Bestiary/Undead/Deaths Head (VRGR).md|death's\
      \ heads]], one of each type,\
      \ in unoccupied spaces within 5 feet of it. The death's heads are under the\
      \ dullahan's control and act immediately after the dullahan in the initiative\
      \ order. Additionally, the dullahan can now use the options in the \"Mythic\
      \ Actions\" section. Award a party an additional 5,900 XP (11,800 XP total)\
      \ for defeating the dullahan after it uses Headless Summoning."
    "name": "Headless Summoning (Recharges after a Short or Long Rest)"
  - "desc": "If the dullahan fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (2/Day)"
  - "desc": "The dullahan doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The dullahan makes two attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 8 (1d8\
      \ + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands,\
      \ plus 11 (2d10) necrotic damage. If the dullahan scores a critical hit against\
      \ a creature, the target must succeed on a DC 15 Constitution saving throw or\
      \ the dullahan cuts off the target's head. The target dies if it can't survive\
      \ without the lost head. A creature that doesn't have or need a head, or has\
      \ legendary actions, instead takes an extra 27 (6d8) slashing damage."
    "name": "Battleaxe"
  - "desc": "*Ranged Spell Attack:* +7 to hit, range 120 ft., one target. *Hit:* 14\
      \ (2d10 + 3) fire damage."
    "name": "Fiery Skull"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the dullahan can expend a use to take one of the following actions. The\
  \ dullahan regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The dullahan makes one attack."
    "name": "Attack"
  - "desc": "Each creature of the dullahan's choice within 30 feet of it must succeed\
      \ on a DC 15 Wisdom saving throw or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ of the dullahan until the end of its next turn."
    "name": "Frightful Presence (Costs 2 Actions)"
  - "desc": "The dullahan moves up to its speed without provoking opportunity attacks\
      \ and makes one Battleaxe attack with advantage. If the attack hits, but is\
      \ not a critical hit, the attack deals an extra 27 (6d8) necrotic damage."
    "name": "Head Hunt (Costs 3 Actions)"
"mythic_description": "If the dullahan's Headless Summoning trait is active, it can\
  \ use the options below as legendary actions."
"mythic_actions":
  - "desc": "The dullahan makes a Battleaxe attack, and then one [[/5. Mechanics/Bestiary/Undead/Deaths Head (VRGR).md|death's head]]\
      \ the dullahan can see within 30 feet of it can use its reaction to make a melee\
      \ attack."
    "name": "Coordinated Assault"
  - "desc": "An echoing shriek issues from the dullahan's headless stump. Each creature\
      \ of the dullahan's choice within 10 feet of it must make a DC 15 Wisdom saving\
      \ throw. Each creature takes 16 (3d10) psychic damage on a failed save, or half\
      \ as much damage on a successful one. If one or more creatures fail the saving\
      \ throw, the dullahan gains 10 temporary hit points."
    "name": "Headless Wail (Costs 2 Actions)"
"source":
  - "VRGR"
"image": "/5. Mechanics/Bestiary/Undead/token/dullahan-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('views/monsterHarvesterTable', { current: dv.current() })
```
