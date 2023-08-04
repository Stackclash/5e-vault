---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/medium
- monster/type/aberration/beholder
statblock: true
statblock-link: "#^statblock"
name: Gauth
ac: 15
hp: 52
hit_dice: 7d8 + 21
cr: '6'
stats: [
  10,
  14,
  16,
  15,
  15,
  13
]
source: [
  MPMM,
  VGM
]
aliases: ["Gauth"]
---
# Gauth
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 133, Volo's Guide to Monsters p. 125*  

A gauth is a hungry, tyrannical creature similar to a beholder that eats magic and tries to exact tribute from anything weaker than itself. Its body is about 4 feet in diameter, with six eyestalks, a central eye (sometimes surrounded by multiple smaller eyes), and four small grasping tentacles near its mouth. It has color and texture variations similar to a true beholder.

A gauth can survive on meat but prefers to sustain itself with power drained from magic objects. If starved of magic for several weeks, it is forced back to its home plane, so it constantly seeks new items to drain. A gauth might employ creatures to bring it items that can provide it with sustenance.

When the ritual to summon a spectator goes wrong, a gauth might push itself through the flawed connection, arriving immediately or several minutes later. It might present itself as a beholder to ignorant creatures in an attempt to intimidate them, or as a spectator to its summoner in order to drain magic items it is expected to guard.

A [[/6. Mechanics/Bestiary/Aberration/Beholder.md\|beholder]] usually drives away or kills any gauths that enter its territory, but it might choose to force them to serve it as lieutenants. Gauths are less xenophobic than beholders, so they might form small clusters and work together, though they're just as likely to ignore each other entirely.

```ad-statblock
title: Gauth
![[/6. Mechanics/Bestiary/Aberration/Token/gauth.png#token]]
*Medium aberration(beholder), Lawful Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 7d8 + 21|text(52)` (7d8 + 21) 
- **Speed** walk 0 ft., fly 20 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|14 (+2)|16 (+3)|15 (+2)|15 (+2)|13 (+1)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +5, Wisdom +5, Charisma +4
- **Skills** Perception +5
- **Senses** darkvision 120 ft., passive Perception 15
- **Condition Immunities** prone
- **Languages** Deep Speech, Undercommon
- **Challenge** 6

## Traits

***Stunning Gaze.*** When a creature that can see the gauth's central eye starts its turn within 30 feet of the gauth, the gauth can force it to make a DC 14 Wisdom saving throw if the gauth isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]] and can see the creature. A creature that fails the save is [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] until the start of its next turn.

Unless surprised, a creature can avert its eyes at the start of its turn to avoid the saving throw. If the creature does so, it can't see the gauth until the start of its next turn, when it can avert its eyes again. If the creature looks at the gauth in the meantime, it must immediately make the save.

***Death Throes.*** When the gauth dies, the magical energy within it explodes, and each creature within 10 feet of it must make a DC 14 Dexterity saving throw, taking 13 (`dice: 3d8\|avg` (`3d8`)) force damage on a failed save, or half as much damage on a successful one.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 2d8\|avg` (`2d8`) piercing damage.

***Eye Rays.*** The gauth shoots three of the following magical eye rays at random (roll three `dice: d6\|avg` (`d6`)s, and reroll duplicates), targeting one to three creatures it can see within 120 feet of it:

- **1 Devour Magic Ray.** The target must succeed on a DC 14 Dexterity saving throw or have one of its magic items lose all magical properties until the start of the gauth's next turn. If the object is a charged item, it also loses `dice: 1d4\|avg` (`1d4`) charges. Determine the affected item randomly, ignoring single-use items such as potions and scrolls.  
- **2 Enervation Ray.** The target must make a DC 14 Constitution saving throw, taking 18 (`dice: 4d8\|avg` (`4d8`)) necrotic damage on a failed save, or half as much damage on a successful one.  
- **3 Fire Ray.** The target must succeed on a DC 14 Dexterity saving throw or take `dice: 4d10\|avg` (`4d10`) fire damage.  
- **4 Paralyzing Ray.** The target must succeed on a DC 14 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]] for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **5 Pushing Ray.** The target must succeed on a DC 14 Strength saving throw or be pushed up to 15 feet away from the gauth and have its speed halved until the start of the gauth's next turn.  
- **6 Sleep Ray.** The target must succeed on a DC 14 Wisdom saving throw or fall asleep and remain [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]] for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on Constructs and Undead.  
```
^statblock

## Environment

underdark