---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Medium
tags:
  - compendium/src/5e/vrgr
  - monster/cr/7
  - monster/size/medium
  - monster/type/undead
aliases:
  - Necrichor
---
# [[5. Mechanics\Bestiary\Undead\Necrichor (VRGR).md|Necrichor]]
*Source: Van Richten's Guide to Ravenloft p. 238*

A necrichor is a being of living blood, formed from the ichor of evil gods or the sludge in the crypts of failed liches. Despite the loss of a solid physical form, these foul creatures retain their terrible intellects and aspire to megalomaniacal goals—the first of which involves regaining a body. To do this, they seek servants to exact their will, coercing even the most stubborn potential minions by turning their own blood against them.

Necrichors prove exceptionally difficult to destroy, since they leave a trace of their essence within the veins of every creature they've controlled and can regenerate themselves from those creatures' blood. Unable to extinguish their horrific unlife, virtuous faiths and vigilant organizations (like the Order of the Guardians detailed in chapter 3) seal these viscous horrors in magically warded prisons. As ages pass, though, the knowledge of what these prisons contain and where some lie have been lost. And every imprisoned necrichor understands that its captivity might be lengthy, but time is of little consequence to the ageless.

```statblock
"name": "Necrichor (VRGR)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "2"
"stats":
  - !!int "8"
  - !!int "15"
  - !!int "17"
  - !!int "17"
  - !!int "13"
  - !!int "10"
"speed": "20 ft., climb 20 ft."
"saves":
  - "constitution": "+6"
  - "intelligence": "+6"
  - "wisdom": "+4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+9"
"damage_resistances": "acid, necrotic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]], [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 11"
"languages": "any three languages, telepathy 120 ft."
"cr": "7"
"traits":
  - "desc": "If the necrichor fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (2/Day)"
  - "desc": "Unless its lifeless remains are splashed with holy water or placed in\
      \ a vessel under the effects of the [[5. Mechanics/Spells/Hallow.md|hallow]] spell,\
      \ the destroyed necrichor re-forms in d10 days, regaining all its hits points\
      \ and appearing in the place it died or in the nearest unoccupied space."
    "name": "Rejuvenation"
  - "desc": "The necrichor can climb difficult surfaces, including upside down on\
      \ ceilings, without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "The necrichor doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The necrichor makes two attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 5\
      \ (1d6 + 2) necrotic damage, and the target must succeed on a DC 14 Constitution\
      \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
      \ until the start of the necrichor's next turn."
    "name": "Pseudopod"
  - "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one creature. Hit:\
      \ 12 (2d8 + 3) necrotic damage, and the target can't regain hit points until\
      \ the start of the necrichor's next turn."
    "name": "Necrotic Bolt"
  - "desc": "The necrichor targets a creature it can see within 5 feet of it that\
      \ is missing any of its hit points. If the target isn't a Construct or an Undead,\
      \ it must succeed on a DC 14 Constitution saving throw or the necrichor enters\
      \ the target's space and attaches itself to the target for 1 minute. While attached,\
      \ the necrichor takes only half damage dealt to it (round down), and the target\
      \ takes the remaining damage. The necrichor can attach to only one creature\
      \ at a time.\n\nThe attached necrichor can telepathically control the target's\
      \ move, action, or both. When controlled this way, the target can take only\
      \ the Attack action (necrichor chooses the target) or the Dash action. The attached\
      \ target can repeat the saving throw at the end of each of its turns, detaching\
      \ from the necrichor and forcing it to move into the nearest unoccupied space\
      \ on a success."
    "name": "Blood Puppeteering (Recharge 6)"
"source":
  - "VRGR"
"image": "5. Mechanics/Bestiary/Undead/token/necrichor-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
