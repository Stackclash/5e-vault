---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/large
- monster/type/aberration/mind-flayer
statblock: true
statblock-link: "#^statblock"
name: Elder Brain
ac: 10
hp: 210
hit_dice: 20d10 + 100
cr: '14'
stats: [
  15,
  10,
  20,
  21,
  19,
  24
]
source: [
  MPMM,
  VGM
]
aliases: ["Elder Brain"]
---
# Elder Brain
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 120, Volo's Guide to Monsters p. 173*  

The ultimate expression of mind flayer domination, an elder brain sprawls within a vat of viscous brine, cared for by mind flayer minions as it touches the thoughts of creatures near and far. It scrawls upon the canvas of the creatures' minds, rewriting their thoughts and authoring their dreams.

An elder brain sustains itself by consuming the brains of other creatures. If its mind flayer servants don't bring meals directly to it, the elder brain reaches out with tendrils of thought, compelling creatures to come to it so that it can feed on them.

When a mind flayer perishes, the elder brain's servants feed its brain to their master, which then absorbs the knowledge and experience contained therein. Mind flayers conceive of this oneness with the elder brain as a sacred state akin to an afterlife.

## Hive Mind

Elder brains are so-called among non-illithids because they act as the central communication hub for an entire mind flayer colony, just as a brain does for a living body. Linked to the elder brain, the colony acts like a single organism, acting in concert as if each illithid were the digit of a hand.

An elder brain considers itself and its desires the most important things in the multiverse, and the mind flayers in its colony nothing more than extensions of its will. Each presides over its colony according to its own unique personality and storehouse of collected knowledge and experience. Some elder brains reign as tyrants, while others serve as sages, counselors, and repositories of information and lore for the mind flayers that protect and nourish them.

## An Elder Brain's Lair

The lair of an elder brain lies deep in the heart of a mind flayer colony. The brain dwells in a dimly glowing brine pool filled with brackish water infused with its vital fluids and psionic energy.

An elder brain's ambitions are always tempered by its relative immobility. Although its telepathic senses can reach for miles, moving anywhere is always a dangerous proposition. If forced outside its brine pool, an elder brain swiftly expires, and transporting an elder brain in its pool through confining and tortuous subterranean tunnels frequently proves difficult or impossible.

## Stat Block

```ad-statblock
title: Elder Brain
![[/6. Mechanics/Bestiary/Aberration/Token/elder-brain.png#token]]
*Large aberration(mind flayer), Lawful Evil*

- **Armor Class** 10 
- **Hit Points** `dice: 20d10 + 100|text(210)` (20d10 + 100) 
- **Speed** walk 5 ft., swim 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|10 (+0)|20 (+5)|21 (+5)|19 (+4)|24 (+7)|

- **Proficiency Bonus** +5
- **Saving Throws** Intelligence +10, Wisdom +9, Charisma +12
- **Skills** Arcana +10, Deception +12, Insight +14, Intimidation +12, Persuasion +12
- **Senses** blindsight 120 ft., passive Perception 14
- **Languages** understands Common, Deep Speech, and Undercommon but can't speak, telepathy 5 miles
- **Challenge** 14

## Traits

***Creature Sense.*** The elder brain is aware of creatures within 5 miles of it that have an Intelligence score of 4 or higher. It knows the distance and direction to each creature, as well as each one's Intelligence score, but can't sense anything else about it. A creature protected by a [[/6. Mechanics/Spells/mind-blank.md\|mind blank]] spell, a [[/6. Mechanics/Spells/nondetection.md\|nondetection]] spell, or similar magic can't be perceived in this manner.

***Legendary Resistance (3/Day).*** If the elder brain fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** The elder brain has advantage on saving throws against spells and other magical effects.

***Telepathic Hub.*** The elder brain can use its telepathy to initiate and maintain telepathic conversations with up to ten creatures at a time. The elder brain can let those creatures telepathically hear each other while connected in this way.

***Spellcasting (Psionics).*** The elder brain casts one of the following spells, requiring no spell components and using Intelligence as the spellcasting ability (spell save DC 18):

**At will**: [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/levitate.md\|levitate]]

**1/day each**: [[/6. Mechanics/Spells/dominate-monster.md\|dominate monster]], [[/6. Mechanics/Spells/plane-shift.md\|plane shift]] (self only)

**3/day**: [[/6. Mechanics/Spells/modify-memory.md\|modify memory]]

## Actions

***Tentacle.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 30 ft., one target. Hit: `dice: 4d8 + 2\|avg` (`4d8 + 2`) bludgeoning damage. If the target is a Huge or smaller creature, it is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 15) and takes `dice: 1d8 + 5\|avg` (`1d8 + 5`) psychic damage at the start of each of its turns until the grapple ends. The elder brain can have up to four targets [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] at a time.

***Mind Blast (Recharge 5-6).*** Creatures of the elder brain's choice within 60 feet of it must succeed on a DC 18 Intelligence saving throw or take `dice: 5d10 + 5\|avg` (`5d10 + 5`) psychic damage and be [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] for 1 minute. A target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

## Bonus Actions

***Psychic Link.*** The elder brain targets one [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]] creature it senses with its Creature Sense trait and establishes a psychic link with the target. Until the link ends, the elder brain can perceive everything the target senses. The target becomes aware that something is linked to its mind once it is no longer [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]], and the elder brain can terminate the link at any time (no action required). The target can use an action on its turn to attempt to break the link, doing so with a successful DC 18 Charisma saving throw. On a successful save, the target takes `dice: 3d6\|avg` (`3d6`) psychic damage. The link also ends if the target and the elder brain are more than 5 miles apart. The elder brain can form psychic links with up to ten creatures at a time.

***Sense Thoughts.*** The elder brain targets a creature with which it has a psychic link. The elder brain gains insight into the target's emotional state and foremost thoughts (including worries, loves, and hates).

## Legendary Actions

***Break Concentration.*** The elder brain targets one creature within 120 feet of it with which it has a psychic link. The elder brain breaks the creature's [[6. Mechanics/Rules/status.md#concentration\|concentration]] on a spell it has cast. The creature also takes `dice: 1d4\|avg` (`1d4`) psychic damage per level of the spell.

***Psychic Pulse.*** The elder brain targets one creature within 120 feet of it with which it has a psychic link. The target and enemies of the elder brain within 30 feet of target take `dice: 3d6\|avg` (`3d6`) psychic damage.

***Sever Psychic Link.*** The elder brain targets one creature within 120 feet of it with which it has a psychic link. The elder brain ends the link, causing the creature to have disadvantage on all ability checks, attack rolls, and saving throws until the end of the creature's next turn.

***Tentacle (Costs 2 Actions).*** The elder brain makes one Tentacle attack.

## Lair actions

On initiative count 20 (losing initiative ties), an elder brain can take one of the following lair actions; the elder brain can't take the same lair action two rounds in a row:

- **Force Wall.** The elder brain casts [[/6. Mechanics/Spells/wall-of-force.md\|wall of force]].  
- **Psionic Anchor.** The elder brain targets one creature it can sense within 120 feet of it and anchors it by sheer force of will. The target must make a DC 18 Charisma saving throw. On a failed save, its speed is reduced to 0, and it can't teleport. It can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **Psychic Inspiration.** The elder brain targets one friendly creature it can sense within 120 feet of it. The target has a flash of inspiration and gains advantage on one attack roll, ability check, or saving throw it makes before the end of its next turn.  

## Regional effects

The territory within 5 miles of an elder brain is altered by the creature's psionic presence, which creates one or more of the following effects:

- **Paranoia.** Creatures within 5 miles of an elder brain feel as if they are being followed, even when they're not.  
- **Psychic Whispers.** Any creature with which the elder brain has formed a psychic link hears faint, incomprehensible whispers in the deepest recesses of its mind. This psychic detritus consists of the elder brain's stray thoughts commingled with those of other creatures to which it is linked.  
- **Telepathic Eavesdropping.** The elder brain can overhear any telepathic conversation within 5 miles of it. The creature that initiated the telepathic conversation makes a DC 18 Wisdom saving throw when telepathic contact is first established. If the save is successful, the creature is aware that something is eavesdropping. The nature of the eavesdropper isn't revealed.  

If the elder brain dies, these effects immediately end.
```
^statblock

## Environment

underdark