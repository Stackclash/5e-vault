---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/mountain
- monster/size/medium
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
"name": "Star Spawn Larva Mage"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "168"
"hit_dice": "16d8 + 96"
"stats":
- !!int "17"
- !!int "12"
- !!int "23"
- !!int "18"
- !!int "12"
- !!int "16"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "6"
"skillsaves":
  "Perception": !!int "6"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "psychic"
"condition_immunities": "charmed, frightened, paralyzed, petrified, poisoned, restrained"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Deep Speech"
"cr": "16"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mage casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 16):\n\nAt will:\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]],\
    \ [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]]\n\n1/day: [dominate\
    \ monster](/compendium/spells/dominate-monster.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the mage is reduced to 0 hit points, it breaks apart into a [swarm\
    \ of insects](/compendium/bestiary/beast/swarm-of-insects.md) in the same space.\
    \ Unless the swarm is destroyed, the mage reforms from it 24 hours later."
  "name": "Return to Worms"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mage makes three Slam or Eldritch Bolt attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 10 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) bludgeoning damage, and the target must\
    \ succeed on a DC 19 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]]\
    \ until the end of its next turn."
  "name": "Slam"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+8 (+8 to hit), range 60 ft., one target.\
    \ Hit: dice: 3d10 + 3|avg (3d10 + 3) force damage."
  "name": "Eldritch Bolt"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each creature other than a star spawn within 10 feet of the mage must succeed\
    \ on a DC 19 Dexterity saving throw or take dice: 5d8|avg (5d8) necrotic damage\
    \ and be [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] and [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]\
    \ by masses of swarming worms. The affected creature takes dice: 5d8|avg (5d8)\
    \ necrotic damage at the start of each of the mage's turns. The creature can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Plague of Worms (Recharge 6)"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When a creature within 20 feet of the mage fails a saving throw, the mage\
    \ gains 10 temporary hit points."
  "name": "Feed on Weakness"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mage makes one Slam attack."
  "name": "Slam"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mage makes one Eldritch Bolt attack."
  "name": "Eldritch Bolt (Costs 2 Actions)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each creature [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] by\
    \ the mage's Plague of Worms takes dice: 3d8|avg (3d8) necrotic damage, and\
    \ the mage gains 6 temporary hit points."
  "name": "Feed (Costs 3 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/aberration/token/star-spawn-larva-mage.png"
aliases: ["Star Spawn Larva Mage"]
---
# Star Spawn Larva Mage
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 228, Mordenkainen's Tome of Foes p. 235*  

A larva mage is a nightmarish combination of a mortal body and otherworldly substance. When a powerful cultist of a wormlike entity such as Kyuss or Kezef—usually a warlock or other spellcaster—contacts the comet-borne emissary of an Elder Evil, the emissary can merge with a mortal consciousness to create a larva mage. None of the original cultist's personality survives the transformation; what emerges is wholly alien.

## Star Spawn

> [!quote]- A quote from Mordenkainen  
> 
> Stars don't spawn these creatures.
> 
> Such beautiful lights shouldn't be blamed for such balefulness.

The Material Plane represents only one small part of the multiverse. Beyond the best-known planes of existence lie realms alien to mortal life. Some are so hostile that even a moment's contact is enough to break a mortal's mind. Yet beings do exist that are native to these realms: entities that are ever hungering, searching, warring, and sometimes dreaming. These Elder Evils are far older than most of the mortal peoples and always inimical to such creatures' minds.

However much they might desire to enter and dominate the Material Plane, the Elder Evils are unable or unwilling to leave their realms. Some are imprisoned in their dimensions by external forces, some are inextricably bound to their home realities, and others simply can't find any way out.

The creatures known as star spawn are the heralds, servants, and soldiers of the Elder Evils, capable of taking on forms that can journey to the Material Plane. They arrive most often in the wake of a comet—or perhaps this phenomenon merely signals that star spawn are in the vicinity and available for communication. When the signs are right, cultists gather together, read aloud their blasphemous texts, and conduct the mind-searing rituals that guide star spawn into the world.

### Elder Evil Blessings

Disciples of certain Elder Evils can bestow supernatural gifts on those who serve that cult, including star spawn. The following powers are unique to specific cults; typically a creature has only one.

- Cult of Atropus, the World Born Dead  
- Cult of Borem, of the Lake of Boiling Mud  
- Cult of Haask, the Voice of Hargut  
- Cult of Tharizdun, the Chained God  
- Cult of Tyranthraxus, the Flamed One  

## Stat Block

```ad-statblock
title: Star Spawn Larva Mage
![[/6. Mechanics/Bestiary/Aberration/Token/star-spawn-larva-mage.png#token]]
*Medium aberration, Chaotic Evil*

- **Armor Class** 16 (natural armor)
- **Hit Points** `dice: 16d8 + 96|text(168)` (16d8 + 96) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|12 (+1)|23 (+6)|18 (+4)|12 (+1)|16 (+3)|

- **Proficiency Bonus** +5
- **Saving Throws** Dexterity +6, Wisdom +6, Charisma +8
- **Skills** Perception +6
- **Senses** darkvision 60 ft., passive Perception 16
- **Damage Resistances** cold; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** psychic
- **Condition Immunities** charmed, frightened, paralyzed, petrified, poisoned, restrained
- **Languages** Deep Speech
- **Challenge** 16

## Traits

***Return to Worms.*** When the mage is reduced to 0 hit points, it breaks apart into a [[/6. Mechanics/Bestiary/Beast/swarm-of-insects.md\|swarm of insects]] in the same space. Unless the swarm is destroyed, the mage reforms from it 24 hours later.

***Spellcasting.*** The mage casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 16):

**At will**: [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/message.md\|message]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]]

**1/day**: [[/6. Mechanics/Spells/dominate-monster.md\|dominate monster]]

## Actions

***Multiattack.*** The mage makes three Slam or Eldritch Bolt attacks.

***Slam.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 10 ft., one target. Hit: `dice: 1d8 + 3` (`1d8 + 3`) bludgeoning damage, and the target must succeed on a DC 19 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] until the end of its next turn.

***Eldritch Bolt.*** *Ranged Spell Attack:* `dice: d20+8` (+8 to hit), range 60 ft., one target. Hit: `dice: 3d10 + 3` (`3d10 + 3`) force damage.

***Plague of Worms (Recharge 6).*** Each creature other than a star spawn within 10 feet of the mage must succeed on a DC 19 Dexterity saving throw or take `dice: 5d8` (`5d8`) necrotic damage and be [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] and [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] by masses of swarming worms. The affected creature takes `dice: 5d8` (`5d8`) necrotic damage at the start of each of the mage's turns. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

## Reactions

***Feed on Weakness.*** When a creature within 20 feet of the mage fails a saving throw, the mage gains 10 temporary hit points.

## Legendary Actions

***Slam.*** The mage makes one Slam attack.

***Eldritch Bolt (Costs 2 Actions).*** The mage makes one Eldritch Bolt attack.

***Feed (Costs 3 Actions).*** Each creature [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] by the mage's Plague of Worms takes `dice: 3d8` (`3d8`) necrotic damage, and the mage gains 6 temporary hit points.
```
^statblock

## Environment

mountain