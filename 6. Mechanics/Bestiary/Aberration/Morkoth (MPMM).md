---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/underwater
- monster/size/large
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
"name": "Morkoth"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"hp": !!int "165"
"hit_dice": "22d10 + 44"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "20"
- !!int "15"
- !!int "13"
"speed": "walk 25 ft., swim 50 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "10"
  "History": !!int "9"
  "Arcana": !!int "9"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 20"
"languages": "telepathy 120 ft."
"cr": "11"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The morkoth casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\nAt\
    \ will: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]]\n\
    \n3/day each: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/dimension-door.md\|dimension door]],\
    \ [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]],\
    \ [[/6. Mechanics/Spells/sending.md\|sending]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The morkoth can breathe air and water."
  "name": "Amphibious"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The morkoth makes either two Bite attacks and one Tentacles attack or three\
    \ Bite attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) slashing damage plus dice: 3d6|avg (3d6)\
    \ psychic damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 15 ft., one target.\
    \ Hit: dice: 3d8 + 2|avg (3d8 + 2) bludgeoning damage, and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]\
    \ (escape DC 14) if it is a Large or smaller creature. Until this grapple ends,\
    \ the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] and takes\
    \ dice: 3d8 + 2|avg (3d8 + 2) bludgeoning damage at the start of each of its\
    \ turns, and the morkoth can't use its tentacles on another target."
  "name": "Tentacles"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The morkoth projects a 30-foot cone of magical energy. Each creature in\
    \ that area must make a DC 17 Wisdom saving throw. On a failed save, the creature\
    \ is [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by the morkoth for 1 minute.\
    \ While [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] in this way, the target\
    \ tries to get as close to the morkoth as possible, using its actions to Dash\
    \ until it is within 5 feet of the morkoth. A [[6. Mechanics/Rules/conditions.md#charmed\|charmed]]\
    \ target can repeat the saving throw at the end of each of its turns and whenever\
    \ it takes damage, ending the effect on itself on a success. If a creature's saving\
    \ throw is successful or the effect ends for it, the creature has advantage on\
    \ saving throws against the morkoth's Hypnosis for 24 hours."
  "name": "Hypnosis"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the morkoth makes a successful saving throw against a spell or a spell\
    \ attack misses it, the morkoth can choose another creature (including the spellcaster)\
    \ it can see within 120 feet of it. The spell targets the chosen creature instead\
    \ of the morkoth. If the spell forced a saving throw, the chosen creature makes\
    \ its own save. If the spell was an attack, the attack roll is rerolled against\
    \ the chosen creature."
  "name": "Spell Reflection"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/aberration/token/morkoth.png"
aliases: ["Morkoth"]
---
# Morkoth
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 186, Volo's Guide to Monsters p. 177*  

Ancient and devious, morkoths are voracious collectors. Each one floats through the planes on a strange, mobile island, amassing the valuables, oddities, and castoffs of the multiverse in a massive, ever-growing collection.

The first morkoths arose in the Astral Plane when the [[6. Mechanics/Rules/conditions.md#petrified\|petrified]] body of a deity of greed and strife collided with a remnant of celestial matter imbued with life-giving magic. The collision released a storm of chaotic energy and sent countless islands spinning away into the void. Within some of them, bits of the god's [[6. Mechanics/Rules/conditions.md#petrified\|petrified]] flesh came back to life as morkoths: tentacled monstrosities brimming with malice and greed.

Morkoths are driven by greed and selfishness mixed with a yearning for conflict. They hoard vast stores of treasure, knowledge, and captives on their islands. Some of these prisoners are the descendants of people captured generations before; they might know of no other world outside their island. A morkoth may allow a visitor to bargain for something or someone it has claimed if that visitor offers the morkoth something it desires more. It shows no mercy, however, to those who break a deal or try to steal from it. A morkoth knows every person and object in its collection.

A morkoth's island has the qualities of a dreamscape. It holds a jumble of objects and creatures the morkoth has collected, some of which date from forgotten times. An island might have natural-looking illumination, but most are shrouded in twilight, and on any of them, mists and shadows can appear without notice. The environment is warm and wet, a subtropical or tropical climate that keeps the morkoth and its "guests" comfortable.

Each island glides on planar currents and is safe from most harmful external effects—one could float in the skies of Avernus in the Nine Hells without harm to it or its residents. A morkoth's island might be found anywhere from the bottom of the ocean to the void of the Astral Plane. Anything on or within a certain distance of a morkoth's isle is drawn with it in its journey through the planes. Thus, people from lost civilizations and creatures or objects from bygone ages might be found within a morkoth's dominion.

Some islands travel a specific route, arriving at the same destinations regularly over a cycle of years. Others are tied to a particular place or group of locales, and still others move erratically through the cosmos. Occasionally, a morkoth learns to direct its island's movement.

## A Morkoth's Lair

A morkoth claims dominion over an entire island, and it also maintains a central sanctum on that isle. This lair is most often a twisted network of narrow tunnels that connect several underground chambers, although other structural forms might be incorporated. The morkoth dwells among the creatures and objects it prizes most in a spacious vault at the center of the warren, where the celestial fragments that make up the island's core are also located. Sections of the lair and its center might be kept dry to better protect and preserve collected objects and creatures, but most of the lair is underwater.

A morkoth encountered in its lair has a challenge rating of 12 (8,400 XP).

## Stat Block

```ad-statblock
title: Morkoth
![[/6. Mechanics/Bestiary/Aberration/Token/morkoth.png#token]]
*Large aberration, Chaotic Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 22d10 + 44|text(165)` (22d10 + 44) 
- **Speed** walk 25 ft., swim 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|14 (+2)|14 (+2)|20 (+5)|15 (+2)|13 (+1)|

- **Proficiency Bonus** +4
- **Saving Throws** Dexterity +6, Intelligence +9, Wisdom +6
- **Skills** Arcana +9, History +9, Perception +10, Stealth +6
- **Senses** blindsight 30 ft., darkvision 120 ft., passive Perception 20
- **Languages** telepathy 120 ft.
- **Challenge** 11

## Traits

***Amphibious.*** The morkoth can breathe air and water.

***Spellcasting.*** The morkoth casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save DC 17):

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]]

**3/day each**: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/dimension-door.md\|dimension door]], [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]], [[/6. Mechanics/Spells/sending.md\|sending]]

## Actions

***Multiattack.*** The morkoth makes either two Bite attacks and one Tentacles attack or three Bite attacks.

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 2` (`2d6 + 2`) slashing damage plus `dice: 3d6` (`3d6`) psychic damage.

***Tentacles.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 15 ft., one target. Hit: `dice: 3d8 + 2` (`3d8 + 2`) bludgeoning damage, and the target is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 14) if it is a Large or smaller creature. Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] and takes `dice: 3d8 + 2` (`3d8 + 2`) bludgeoning damage at the start of each of its turns, and the morkoth can't use its tentacles on another target.

***Hypnosis.*** The morkoth projects a 30-foot cone of magical energy. Each creature in that area must make a DC 17 Wisdom saving throw. On a failed save, the creature is [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by the morkoth for 1 minute. While [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] in this way, the target tries to get as close to the morkoth as possible, using its actions to Dash until it is within 5 feet of the morkoth. A [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] target can repeat the saving throw at the end of each of its turns and whenever it takes damage, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature has advantage on saving throws against the morkoth's Hypnosis for 24 hours.

## Reactions

***Spell Reflection.*** If the morkoth makes a successful saving throw against a spell or a spell attack misses it, the morkoth can choose another creature (including the spellcaster) it can see within 120 feet of it. The spell targets the chosen creature instead of the morkoth. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature.

## Lair actions

On initiative count 20 (losing initiative ties), the morkoth can take one of the following lair actions:

- **Cast a Spell.** The morkoth casts [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], or [[/6. Mechanics/Spells/misty-step.md\|misty step]], using Intelligence as its spellcasting ability and without expending a spell slot.  
- **Hypnotize.** The morkoth uses its Hypnosis action, originating at a point within 120 feet of itself. It doesn't need to see the effect's point of origin.  

## Regional effects

The island surrounding a morkoth's lair is warped by the creature's presence, creating the following effects:

- **Alter Water.** With a thought (no action required), the morkoth can initiate a change in the water within its lair that takes effect 1 minute later. The water can be as breathable and clear as air, or it can be normal water (ranging in clarity from murky to clear).  
- **Locate Creatures and Objects.** The morkoth is aware of any new arrival, whether an object or a creature, on its island or in its sanctum. As an action, the morkoth can locate any one creature or object on the island. Visitors to the island feel as though they are being watched, even when they aren't.  
- **Lost Possessions.** Each time a creature that has been on the island for less than a year finishes a short or long rest, it must make a DC 10 Intelligence saving throw. On a failure, the creature has misplaced one possession (chosen by the player, if the creature is that player's character). The possession remains nearby but concealed for a short time, so it can be recovered with a successful DC 15 Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) check. An object that is misplaced but not recovered ends up in the morkoth's lair 1 hour later. If the creature later goes to the morkoth's lair, its lost possessions stand out in its perception and are easily recovered.  
- **Supernatural Lure.** Entrances to the morkoth's lair have an enchantment that the morkoth can activate or suppress at any time while it's in its lair and not [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]. Any creature within 30 feet of such an entrance and able to see it must make a DC 15 Wisdom saving throw. On a failed save, the creature feels an intense urge to use its movement on each of its turns to enter the lair and to move toward the morkoth's location (the target doesn't realize it's heading toward a creature). The target moves toward the morkoth by the most direct route. As soon as it can see the morkoth, the target can repeat the saving throw, ending the effect on itself on a success. It can also repeat the saving throw at the end of each of its turns and every time it takes damage.  

If the morkoth dies, these regional effects end immediately.
```
^statblock

## Environment

coastal, underwater