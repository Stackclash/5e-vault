---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/environment/hill
- monster/environment/mountain
- monster/size/huge
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Adult Red Dracolich
ac: 19
hp: 256
hit_dice: 19d12 + 133
cr: '17'
stats: [
  27,
  10,
  25,
  16,
  13,
  21
]
source: [
  TCE
]
aliases: ["Adult Red Dracolich"]
---
# Adult Red Dracolich
*Source: Tasha's Cauldron of Everything p. 137, Derived from Adult Red Dragon (MM)*  

```ad-statblock
title: Adult Red Dracolich
![](/compendium/bestiary/undead/token/adult-red-dracolich.png#token)
*Huge undead, Chaotic Evil*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 19d12 + 133|text(256)` (19d12 + 133) 
- **Speed** walk 40 ft., climb 40 ft., fly 80 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|27 (+8)|10 (+0)|25 (+7)|16 (+3)|13 (+1)|21 (+5)|

- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +6, Constitution +13, Wisdom +7, Charisma +11
- **Skills** Perception +13, Stealth +6
- **Senses** blindsight 60 ft., darkvision 120 ft., passive Perception 23
- **Damage Resistances** necrotic
- **Damage Immunities** fire, poison
- **Condition Immunities** charmed, frightened, paralyzed, poisoned, exhaustion
- **Languages** Common, Draconic
- **Challenge** 17

## Traits

***Legendary Resistance (3/Day).*** If the dracolich fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** The dracolich has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+14` (+14 to hit), reach 10 ft., one target. Hit: `dice: 2d10 + 8|avg` (`2d10 + 8`) piercing damage plus `dice: 2d6|avg` (`2d6`) fire damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+14` (+14 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 8|avg` (`2d6 + 8`) slashing damage.

***Tail.*** *Melee Weapon Attack:* `dice: d20+14` (+14 to hit), reach 15 ft., one target. Hit: `dice: 2d8 + 8|avg` (`2d8 + 8`) bludgeoning damage.

***Frightful Presence.*** Each creature of the dracolich's choice that is within 120 feet of the dracolich and aware of it must succeed on a DC 19 Wisdom saving throw or become [frightened](compendium/rules/conditions.md#frightened) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours.

***Fire Breath (Recharge 5-6).*** The dracolich exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (`dice: 18d6|avg` (`18d6`)) fire damage on a failed save, or half as much damage on a successful one.

## Legendary Actions

***Detect.*** The dracolich makes a Wisdom ([Perception](compendium/rules/skills.md#Perception)) check.

***Tail Attack.*** The dracolich makes a tail attack.

***Wing Attack (Costs 2 Actions).*** The dracolich beats its wings. Each creature within 10 feet of the dracolich must succeed on a DC 22 Dexterity saving throw or take `dice: 2d6 + 8|avg` (`2d6 + 8`) bludgeoning damage and be knocked [prone](compendium/rules/conditions.md#prone). The dracolich can then fly up to half its flying speed.

## Additional sources



## Lair actions

On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:

- Magma erupts from a point on the ground the dragon can see within 120 feet of it, creating a 20-foot-high, 5-foot-radius geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (`dice: 6d6|avg` (`6d6`)) fire damage on a failed save, or half as much damage on a successful one.  
- A tremor shakes the lair in a 60-foot radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked [prone](compendium/rules/conditions.md#prone).  
- Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The sphere spreads around corners, and its area is lightly obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be [poisoned](compendium/rules/conditions.md#poisoned) until the end of its turn. While [poisoned](compendium/rules/conditions.md#poisoned) in this way, a creature is [incapacitated](compendium/rules/conditions.md#incapacitated).  


## Regional effects

The region containing a legendary red dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:

- Small earthquakes are common within 6 miles of the dragon's lair.  
- Water sources within 1 mile of the lair are supernaturally warm and tainted by sulfur.  
- Rocky fissures within 1 mile of the dragon's lair form portals to the Elemental Plane of Fire, allowing creatures of elemental fire into the world to dwell nearby.  

If the dragon dies, these effects fade over the course of `dice: 1d10|avg` (`1d10`) days.

```
^statblock

## Environment

mountain, hill