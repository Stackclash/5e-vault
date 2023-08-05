---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/swamp
- monster/environment/underdark
- monster/size/medium
- monster/type/undead/sorcerer
statblock: true
statblock-link: "#^statblock"
"name": "Skull Lord"
"size": "Medium"
"type": "undead"
"subtype": "sorcerer"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "14"
- !!int "16"
- !!int "17"
- !!int "16"
- !!int "15"
- !!int "21"
"speed": "walk 30 ft."
"skillsaves":
  "Athletics": !!int "7"
  "Stealth": !!int "8"
  "Perception": !!int "12"
  "History": !!int "8"
"damage_resistances": "cold; necrotic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "poison"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, poisoned,\
  \ stunned, unconscious"
"senses": "darkvision 60 ft., passive Perception 22"
"languages": "all the languages it knew in life"
"cr": "15"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The skull, lord casts one of the following spells, using Charisma as the\
    \ spellcasting ability (spell save DC 18):\n\nAt will: [[/6. Mechanics/Spells/mage-hand.md\|mage hand]],\
    \ [[/6. Mechanics/Spells/message.md\|message]]\n\n1/day each: [[/6. Mechanics/Spells/cloudkill.md\|cloudkill]],\
    \ [[/6. Mechanics/Spells/cone-of-cold.md\|cone of cold]]\n\n2/day each: [dimension\
    \ door](/compendium/spells/dimension-door.md), [[/6. Mechanics/Spells/fear.md\|fear]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the skull lord is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half the damage, the skull lord instead takes no damage\
    \ if it succeeds on the saving throw and only half damage if it fails, provided\
    \ it isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Evasion"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the skull lord fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While within 30 feet of the skull lord, any Undead ally of the skull lord\
    \ makes saving throws with advantage, and that ally regains dice: 1d6|avg (1d6)\
    \ hit points whenever it starts its turn there."
  "name": "Master of the Grave"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The skull lord doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The skull lord makes three Bone Staff or Deathly Ray attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) bludgeoning damage plus dice: 6d6|avg\
    \ (6d6) necrotic damage."
  "name": "Bone Staff"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+10 (+10 to hit), range 60 ft., one target.\
    \ Hit: dice: 5d8 + 5|avg (5d8 + 5) necrotic damage."
  "name": "Deathly Ray"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The skull lord makes one Bone Staff or Deathly Ray attack."
  "name": "Attack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The skull lord moves up to its speed without provoking opportunity attack||opportunity\
    \ attacks."
  "name": "Move"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The skull lord summons up to five [[/6. Mechanics/Bestiary/Undead/Skeleton.md\|skeletons]]\
    \ or [[/6. Mechanics/Bestiary/Undead/zombie.md\|zombies]] in unoccupied spaces within\
    \ 30 feet of it. They remain until destroyed. Undead summoned in this way roll\
    \ initiative, act in the next available turn, and obey the skull lord. The skull\
    \ lord can have no more than five Undead summoned by this ability at a time."
  "name": "Summon Undead (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/undead/token/skull-lord.png"
aliases: ["Skull Lord"]
---
# Skull Lord
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 220, Mordenkainen's Tome of Foes p. 230*  

Skull lords have claimed vast regions of the Shadowfell as their dominion. From these blighted lands, they wage war against their rivals, commanding hordes of the undying in a bid to establish dominance. Yet skull lords always prove to be their own worst enemies; each is a combined being born from three hateful individuals, and they constantly plot against themselves.

Infighting and treachery brought skull lords into existence. The first of them appeared in the aftermath of Vecna's bid to conquer the world of Greyhawk, after the vampire Kas betrayed Vecna and took his eye and hand. In the confusion resulting from this turn of events, Vecna's warlords turned against each other, and his plans were dashed. In a rage, Vecna gathered up his generals and captains and bound them in groups of three, fusing them into abominations cursed to fight among themselves for all time. Since the first skull lords were exiled into the shadows, others have arisen, typically created from other leaders who betrayed their masters.

```ad-statblock
title: Skull Lord
![[/6. Mechanics/Bestiary/Undead/Token/skull-lord.png#token]]
*Medium undead(sorcerer), Lawful Evil*

- **Armor Class** 18 ([[/6. Mechanics/Items/plate-armor.md\|plate]])
- **Hit Points** `dice: 15d8 + 45|text(112)` (15d8 + 45) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|16 (+3)|17 (+3)|16 (+3)|15 (+2)|21 (+5)|

- **Proficiency Bonus** +5
- **Saving Throws** ⏤
- **Skills** Athletics +7, History +8, Perception +12, Stealth +8
- **Senses** darkvision 60 ft., passive Perception 22
- **Damage Resistances** cold; necrotic; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** blinded, charmed, deafened, exhaustion, frightened, poisoned, stunned, unconscious
- **Languages** all the languages it knew in life
- **Challenge** 15

## Traits

***Evasion.*** If the skull lord is subjected to an effect that allows it to make a Dexterity saving throw to take only half the damage, the skull lord instead takes no damage if it succeeds on the saving throw and only half damage if it fails, provided it isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

***Legendary Resistance (3/Day).*** If the skull lord fails a saving throw, it can choose to succeed instead.

***Master of the Grave.*** While within 30 feet of the skull lord, any Undead ally of the skull lord makes saving throws with advantage, and that ally regains `dice: 1d6` (`1d6`) hit points whenever it starts its turn there.

***Unusual Nature.*** The skull lord doesn't require air, food, drink, or sleep.

***Spellcasting.*** The skull, lord casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 18):

**At will**: [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]]

**1/day each**: [[/6. Mechanics/Spells/cloudkill.md\|cloudkill]], [[/6. Mechanics/Spells/cone-of-cold.md\|cone of cold]]

**2/day each**: [[/6. Mechanics/Spells/dimension-door.md\|dimension door]], [[/6. Mechanics/Spells/fear.md\|fear]]

## Actions

***Multiattack.*** The skull lord makes three Bone Staff or Deathly Ray attacks.

***Bone Staff.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3` (`1d8 + 3`) bludgeoning damage plus `dice: 6d6` (`6d6`) necrotic damage.

***Deathly Ray.*** *Ranged Spell Attack:* `dice: d20+10` (+10 to hit), range 60 ft., one target. Hit: `dice: 5d8 + 5` (`5d8 + 5`) necrotic damage.

## Legendary Actions

***Attack.*** The skull lord makes one Bone Staff or Deathly Ray attack.

***Move.*** The skull lord moves up to its speed without provoking opportunity attack||opportunity attacks.

***Summon Undead (Costs 2 Actions).*** The skull lord summons up to five [[/6. Mechanics/Bestiary/Undead/Skeleton.md\|skeletons]] or [[/6. Mechanics/Bestiary/Undead/zombie.md\|zombies]] in unoccupied spaces within 30 feet of it. They remain until destroyed. Undead summoned in this way roll initiative, act in the next available turn, and obey the skull lord. The skull lord can have no more than five Undead summoned by this ability at a time.
```
^statblock

## Environment

desert, swamp, underdark