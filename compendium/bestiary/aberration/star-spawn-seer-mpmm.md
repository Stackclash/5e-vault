---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
name: Star Spawn Seer
ac: 17
hp: 153
hit_dice: 18d8 + 72
cr: '13'
stats: [
  14,
  12,
  18,
  22,
  19,
  16
]
source: [
  MPMM,
  MTF
]
aliases: ["Star Spawn Seer"]
---
# Star Spawn Seer
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 230, Mordenkainen's Tome of Foes p. 236*  

A star spawn seer is most often encountered as the leader of a cult dedicated to one or more Elder Evils. Usually, the seer is the only cult member that grasps the full extent of the horror the cult is venerating. The seer's goal is to tap into vast energy sources and perform the dire rites that will extend a bridge between the Material Plane and the squirming chaos of an Elder Evil's realm.

An entity that appears as a star spawn seer in the Material Plane usually arrives disembodied. When a warlock or other spellcaster establishes communication with it, the seer-entity takes control of the mortal, transforming it into a star spawn seer. Whoever the mortal once was largely vanishes beneath the mass of tumorous skin than builds up in strange whorls all over the seer's body. The mortal's hands become bulky, flipper-like appendages able to grasp the seer's strange staff formed of a blend of flesh, bone, and star stuff.

A star spawn seer is almost always accompanied by one or more star spawn hulks (also in this book). Not only is a hulk a powerful combatant, but when a seer deals psychic damage to a hulk, the hulk isn't hurt, and the effect ricochets off and expands to assault other creatures.

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
title: Star Spawn Seer
![](/compendium/bestiary/aberration/token/star-spawn-seer.png#token)
*Medium aberration, Neutral Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 18d8 + 72|text(153)` (18d8 + 72) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|12 (+1)|18 (+4)|22 (+6)|19 (+4)|16 (+3)|

- **Proficiency Bonus** +5
- **Saving Throws** Dexterity +6, Intelligence +11, Wisdom +9, Charisma +8
- **Skills** Perception +9
- **Senses** darkvision 60 ft., passive Perception 19
- **Damage Resistances** cold; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** psychic
- **Condition Immunities** charmed, frightened
- **Languages** Common, Deep Speech, Undercommon
- **Challenge** 13

## Traits

***Out-Of-Phase Movement.*** The seer can move through other creatures and objects as if they were difficult terrain, and its movement doesn't provoke opportunity attack||opportunity attacks.

Each creature it moves through takes `dice: 1d10|avg` (`1d10`) psychic damage; no creature can take this damage more than once per turn.

The seer takes `dice: 1d10|avg` (`1d10`) force damage if it ends its turn inside an object.

## Actions

***Multiattack.*** The seer makes two Comet Staff or Psychic Orb attacks.

***Comet Staff.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 6|avg` (`1d8 + 6`) bludgeoning damage plus `dice: 4d8|avg` (`4d8`) psychic damage, and if the target is a creature, it must succeed on a DC 19 Constitution saving throw or be [incapacitated](compendium/rules/conditions.md#incapacitated) until the end of its next turn.

***Psychic Orb.*** *Ranged Spell Attack:* `dice: d20+11` (+11 to hit), range 120 feet, one creature. Hit: `dice: 5d10|avg` (`5d10`) psychic damage.

***Collapse Distance (Recharge 6).*** The seer warps space around one creature it can see within 30 feet of it. That creature must make a DC 19 Wisdom saving throw. On a failed save, the target, along with any equipment it is wearing or carrying, is teleported up to 60 feet to an unoccupied space the seer can see, and then each creature within 10 feet of the target's original space takes `dice: 6d12|avg` (`6d12`) psychic damage. On a successful save, the target takes `dice: 3d12|avg` (`3d12`) psychic damage and isn't teleported.

## Reactions

***Bend Space.*** When the seer would be hit by an attack roll, it teleports, along with any equipment it is wearing or carrying, exchanging positions with another star spawn it can see within 60 feet of it. The other star spawn is hit by the attack instead.
```
^statblock

## Environment

mountain, swamp, urban