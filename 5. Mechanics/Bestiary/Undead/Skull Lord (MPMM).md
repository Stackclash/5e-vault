---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 15
environments: 'desert, swamp, underdark'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/15
  - monster/environment/desert
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/undead/sorcerer
aliases:
  - Skull Lord
---
# [[5. Mechanics\Bestiary\Undead\Skull Lord (MPMM).md|Skull Lord]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 220, Mordenkainen's Tome of Foes p. 230*

Skull lords have claimed vast regions of the Shadowfell as their dominion. From these blighted lands, they wage war against their rivals, commanding hordes of the undying in a bid to establish dominance. Yet skull lords always prove to be their own worst enemies; each is a combined being born from three hateful individuals, and they constantly plot against themselves.

Infighting and treachery brought skull lords into existence. The first of them appeared in the aftermath of Vecna's bid to conquer the world of Greyhawk, after the vampire Kas betrayed Vecna and took his eye and hand. In the confusion resulting from this turn of events, Vecna's warlords turned against each other, and his plans were dashed. In a rage, Vecna gathered up his generals and captains and bound them in groups of three, fusing them into abominations cursed to fight among themselves for all time. Since the first skull lords were exiled into the shadows, others have arisen, typically created from other leaders who betrayed their masters.

```statblock
"name": "Skull Lord (MPMM)"
"size": "Medium"
"type": "undead"
"subtype": "sorcerer"
"alignment": "Typically  Lawful Evil"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate]]"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "3"
"stats":
  - !!int "14"
  - !!int "16"
  - !!int "17"
  - !!int "16"
  - !!int "15"
  - !!int "21"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+12"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+8"
"damage_resistances": "cold; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 22"
"languages": "all the languages it knew in life"
"cr": "15"
"traits":
  - "desc": "If the skull lord is subjected to an effect that allows it to make a\
      \ Dexterity saving throw to take only half the damage, the skull lord instead\
      \ takes no damage if it succeeds on the saving throw and only half damage if\
      \ it fails, provided it isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Evasion"
  - "desc": "If the skull lord fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "While within 30 feet of the skull lord, any Undead ally of the skull\
      \ lord makes saving throws with advantage, and that ally regains d6 hit points\
      \ whenever it starts its turn there."
    "name": "Master of the Grave"
  - "desc": "The skull lord doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The skull lord makes three Bone Staff or Deathly Ray attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) bludgeoning damage plus 21 (6d6) necrotic damage."
    "name": "Bone Staff"
  - "desc": "Ranged Spell Attack: +10 to hit, range 60 ft., one target. Hit: 27\
      \ (5d8 + 5) necrotic damage."
    "name": "Deathly Ray"
  - "desc": "The skull, lord casts one of the following spells, using Charisma as\
      \ the spellcasting ability (spell save DC 18):\n\nAt will: [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[5. Mechanics/Spells/Message.md|message]]\n\n2/day each: [[5. Mechanics/Spells/Dimension Door.md|dimension door]],\
      \ [[5. Mechanics/Spells/Fear.md|fear]]\n\n1/day each: [[5. Mechanics/Spells/Cloudkill.md|cloudkill]],\
      \ [[5. Mechanics/Spells/Cone Of Cold.md|cone of cold]]"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "The skull lord makes one Bone Staff or Deathly Ray attack."
    "name": "Attack"
  - "desc": "The skull lord moves up to its speed without provoking [[/5. Mechanics/Rules/Actions.md#Opportunity%20Attack|opportunity attacks]]."
    "name": "Move"
  - "desc": "The skull lord summons up to five [[5. Mechanics/Bestiary/Undead/Skeleton.md|skeletons]]\
      \ or [[5. Mechanics/Bestiary/Undead/Zombie.md|zombies]] in unoccupied spaces within\
      \ 30 feet of it. They remain until destroyed. Undead summoned in this way roll\
      \ initiative, act in the next available turn, and obey the skull lord. The skull\
      \ lord can have no more than five Undead summoned by this ability at a time."
    "name": "Summon Undead (Costs 2 Actions)"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Undead/token/skull-lord-mpmm.webp"
```
^statblock

## Environment

desert, swamp, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
