---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/size/huge
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Adult Blue Dracolich
ac: 19
hp: 225
hit_dice: 18d12 + 108
cr: '17'
stats: [
  25,
  10,
  23,
  16,
  15,
  19
]
source: [
  MM,
  WDMM,
  CM,
  JttRC
]
aliases: ["Adult Blue Dracolich"]
---
*Source: Monster Manual p. 84, Waterdeep: Dungeon of the Mad Mage, Candlekeep Mysteries, Journeys through the Radiant Citadel*  

Even as long-lived as they are, all dragons must eventually die. This thought doesn't sit well with many dragons, some of which allow themselves to be transformed by necromantic energy and ancient rituals into powerful undead dracoliches. Only the most narcissistic dragons choose this path, knowing that by doing so, they sever all ties to their kin and the dragon gods.

## Beyond Death

A dracolich retains its shape and size upon transforming, its skin and scales drawing tight to its bones or sloughing away to leave a skeletal form behind. Its eyes appear as glowing points of light floating in shadowy sockets, hinting at the malevolence of its undead mind.

Though many dragons pursue vain goals of destruction and dominance, dracoliches are more nefarious than the most evil dragons, driven to rule over all. A dracolich is a fiendishly intelligent tyrant that crafts complex webs of foul schemes, attracting servants motivated by greed and a lust for power. Acting from the shadows and actively plotting to keep its existence a secret, a dracolich is a cunning and challenging foe.

## Dracolich Phylacteries

Creating a dracolich requires the cooperation of the dragon and a group of mages or cultists that can perform the proper ritual. During the ritual, the dragon consumes a toxic brew that slays it instantly. The attendant spellcasters then ensnare its spirit and transfer it to a special gemstone that functions like a lich's phylactery. As the dragon's flesh rots away, the spirit inside the gem returns to animate the dragon's bones.

If a dracolich's physical form is ever destroyed, its spirit returns to the gem as long as the two are on the same plane. If the gem comes into contact with another dragon's corpse, the dracolich's spirit can take possession of that corpse to become a new dracolich. If the dracolich's spirit gem is taken to another plane, the dracolich's spirit has nowhere to go when its undead body is destroyed and simply passes into the afterlife.

## Dracolich Template

Only an ancient or adult true dragon can be transformed into a dracolich. Younger dragons that attempt to undergo the transformation die, as do other creatures that aren't true dragons but possess the dragon type, such as pseudodragons and wyverns. A shadow dragon can't be transformed into a dracolich, for it has already lost too much of its physical form.

When a dragon becomes a dracolich, it retains its statistics except as described below. The dragon loses any trait, such as Amphibious, that assumes a living physiology. The dracolich might retain or lose any or all of its lair actions or inherit new ones, as the DM sees fit.

### Type

The dracolich's type changes from dragon to undead, and it no longer requires air, food, drink, or sleep.

### Damage Resistance

The dracolich has resistance to necrotic damage.

### Damage Immunities

The dracolich has immunity to poison. It also retains any immunities it had prior to becoming a dracolich.

### Condition Immunities

The dracolich can't be [charmed](/6. Mechanics/rules/conditions.md#charmed), [frightened](/6. Mechanics/rules/conditions.md#frightened), [paralyzed](/6. Mechanics/rules/conditions.md#paralyzed), or [poisoned](/6. Mechanics/rules/conditions.md#poisoned). It also doesn't suffer from [exhaustion](/6. Mechanics/rules/conditions.md#exhaustion).

### Magic Resistance

The dracolich has advantage on saving throws against spells and other magical effects.

## Stat Block

```ad-statblock
title: Adult Blue Dracolich
![[token/adult-blue-dracolich.png#token]]
*Huge undead, Lawful Evil*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 18d12 + 108|text(225)` (18d12 + 108) 
- **Speed** walk 40 ft., burrow 30 ft., fly 80 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|25 (+7)|10 (+0)|23 (+6)|16 (+3)|15 (+2)|19 (+4)|

- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +6, Constitution +12, Wisdom +8, Charisma +10
- **Skills** Perception +14, Stealth +6
- **Senses** blindsight 60 ft., darkvision 120 ft., passive Perception 24
- **Damage Resistances** necrotic
- **Damage Immunities** lightning, poison
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, poisoned
- **Languages** Common, Draconic
- **Challenge** 17

## Traits

***Legendary Resistance (3/Day).*** If the dracolich fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** The dracolich has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 10 ft., one target. Hit: `dice: 2d10 + 7|avg` (`2d10 + 7`) piercing damage plus `dice: 1d10|avg` (`1d10`) lightning damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 7|avg` (`2d6 + 7`) slashing damage.

***Tail.*** *Melee Weapon Attack:* `dice: d20+13` (+13 to hit), reach 15 ft., one target. Hit: `dice: 2d8 + 7|avg` (`2d8 + 7`) bludgeoning damage.

***Frightful Presence.*** Each creature of the dracolich's choice that is within 120 feet of the dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become [frightened](/6. Mechanics/rules/conditions.md#frightened) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours.

***Lightning Breath (Recharge 5-6).*** The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (`dice: 12d10|avg` (`12d10`)) lightning damage on a failed save, or half as much damage on a successful one.

## Legendary Actions

***Detect.*** The dracolich makes a Wisdom ([Perception](/6. Mechanics/rules/skills.md#Perception)) check.

***Tail Attack.*** The dracolich makes a tail attack.

***Wing Attack (Costs 2 Actions).*** The dracolich beats its tattered wings. Each creature within 10 feet of the dracolich must succeed on a DC 21 Dexterity saving throw or take `dice: 2d6 + 7|avg` (`2d6 + 7`) bludgeoning damage and be knocked [prone](/6. Mechanics/rules/conditions.md#prone). After beating its wings this way, the dracolich can fly up to half its flying speed.

## Additional sources



## Lair actions

On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:

- Part of the ceiling collapses above one creature that the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Dexterity saving throw or take `dice: 3d6|avg` (`3d6`) bludgeoning damage and be knocked [prone](/6. Mechanics/rules/conditions.md#prone) and buried. The buried target is [restrained](/6. Mechanics/rules/conditions.md#restrained) and unable to breathe or stand up. A creature can take an action to make a DC 10 Strength check, ending the buried state on a success.  
- A cloud of sand swirls about in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners. Each creature in the cloud must succeed on a DC 15 Constitution saving throw or be [blinded](/6. Mechanics/rules/conditions.md#blinded) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- Lightning arcs, forming a 5-foot-wide line between two of the lair's solid surfaces that the dragon can see. They must be within 120 feet of the dragon and 120 feet of each other. Each creature in that line must succeed on a DC 15 Dexterity saving throw or take `dice: 3d6|avg` (`3d6`) lightning damage.  


## Regional effects

The region containing a legendary blue dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:

- Thunderstorms rage within 6 miles of the lair.  
- Dust devils scour the land within 6 miles of the lair. A dust devil has the statistics of an air elemental, but it can't fly, has a speed of 50 feet, and has an Intelligence and Charisma of 1 (-5).  
- Hidden sinkholes form in and around the dragon's lair. A sinkhole can be spotted from a safe distance with a successful DC 20 Wisdom ([Perception](/6. Mechanics/rules/skills.md#Perception)) check. Otherwise, the first creature to step on the thin crust covering the sinkhole must succeed on a DC 15 Dexterity saving throw or fall `1d6 × 10` feet into the sinkhole.  

If the dragon dies, the dust devils disappear immediately, and the thunderstorms abate within `dice: 1d10|avg` (`1d10`) days. Any sinkholes remain where they are.

```
^statblock

## Environment

desert