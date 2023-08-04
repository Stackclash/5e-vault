---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/environment/desert
- monster/environment/forest
- monster/environment/hill
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Revenant
ac: 13
hp: 136
hit_dice: 16d8 + 64
cr: '5'
stats: [
  18,
  14,
  18,
  13,
  16,
  18
]
source: [
  MM,
  CoS,
  PotA,
  ToA,
  WDMM,
  ERLW,
  EGW,
  MOT,
  CRCotN,
  JttRC
]
aliases: ["Revenant"]
---
# Revenant
*Source: Monster Manual p. 259, Curse of Strahd, Princes of the Apocalypse, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Critical Role: Call of the Netherdeep, Journeys through the Radiant Citadel*  

A revenant forms from the soul of a mortal who met a cruel and undeserving fate. It claws its way back into the world to seek revenge against the one who wronged it. The revenant reclaims its mortal body and superficially resembles a zombie. However, instead of lifeless eyes, a revenant's eyes burn with resolve and flare in the presence of its adversary. If the revenant's original body was destroyed or is otherwise unavailable, the spirit of the revenant enters another humanoid corpse. Regardless of the body the revenant uses as a vessel, its adversary always recognizes the revenant for what it truly is.

## Hunger for Revenge

A revenant has only one year to exact revenge. When its adversary dies, or if the revenant fails to kill its adversary before its time runs out, it crumbles to dust and its soul fades into the afterlife. If its foe is too powerful for the revenant to destroy on its own, it seeks worthy allies to help it fulfill its quest.

## Divine Justice

No magic can hide a creature pursued by a revenant, which always knows the direction and distance between it and the target of its vengeance. In cases where the revenant seeks revenge against more than one adversary, it pursues them one at a time, starting with the creature that dealt it the killing blow. If the revenant's body is destroyed, its soul flies forth to seek out a new corpse in which to resume its hunt.

## Undead Nature

A revenant doesn't require air, food, drink, or sleep.

## Stat Block

```ad-statblock
title: Revenant
![[/6. Mechanics/Bestiary/Undead/Token/revenant.png#token]]
*Medium undead, Neutral*

- **Armor Class** 13 ([[/6. Mechanics/Items/leather-armor.md\|leather armor]])
- **Hit Points** `dice: 16d8 + 64|text(136)` (16d8 + 64) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|14 (+2)|18 (+4)|13 (+1)|16 (+3)|18 (+4)|

- **Proficiency Bonus** +3
- **Saving Throws** Strength +7, Constitution +7, Wisdom +6, Charisma +7
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 13
- **Damage Resistances** necrotic, psychic
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, poisoned, stunned
- **Languages** the languages it knew in life
- **Challenge** 5

## Traits

***Regeneration.*** The revenant regains 10 hit points at the start of its turn. If the revenant takes fire or radiant damage, this trait doesn't function at the start of the revenant's next turn. The revenant's body is destroyed only if it starts its turn with 0 hit points and doesn't regenerate.

***Rejuvenation.*** When the revenant's body is destroyed, its soul lingers. After 24 hours, the soul inhabits and animates another humanoid corpse on the same plane of existence and regains all its hit points. While the soul is bodiless, a [[/6. Mechanics/Spells/wish.md\|wish]] spell can be used to force the soul to go to the afterlife and not return.

***Turn Immunity.*** The revenant is immune to effects that turn undead.

***Vengeful Tracker.*** The revenant knows the distance to and direction of any creature against which it seeks revenge, even if the creature and the revenant are on different planes of existence. If the creature being tracked by the revenant dies, the revenant knows.

## Actions

***Multiattack.*** The revenant makes two fist attacks.

***Fist.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 4\|avg` (`2d6 + 4`) bludgeoning damage. If the target is a creature against which the revenant has sworn vengeance, the target takes an extra 14 (`dice: 4d6\|avg` (`4d6`)) bludgeoning damage. Instead of dealing damage, the revenant can grapple the target (escape DC 14) provided the target is Large or smaller.

***Vengeful Glare.*** The revenant targets one creature it can see within 30 feet of it and against which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw. On a failure, the target is [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]] until the revenant deals damage to it, or until the end of the revenant's next turn. When the paralysis ends, the target is [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] of the revenant for 1 minute. The [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] target can repeat the saving throw at the end of each of its turns, with disadvantage if it can see the revenant, ending the [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] condition on itself on a success.
```
^statblock

## Environment

forest, swamp, hill, urban, desert, arctic