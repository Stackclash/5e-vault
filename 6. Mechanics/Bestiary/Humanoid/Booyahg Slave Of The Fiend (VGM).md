---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/environment/arctic
- monster/environment/desert
- monster/environment/underdark
- monster/environment/urban
- monster/size/small
- monster/type/humanoid/goblinoid
statblock: true
statblock-link: "#^statblock"
"name": "Booyahg Slave of the Fiend"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "7"
  "Religion": !!int "4"
  "Arcana": !!int "4"
  "Persuasion": !!int "7"
"damage_resistances": "slashing from nonmagical attacks not made with silvered weapons"
"senses": "darkvision 60 ft., darkvision 60 ft., passive Perception 11"
"languages": "any two languages (usually Abyssal or Infernal), Goblin"
"cr": "7"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goblin's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [[/6. Mechanics/Spells/alter-self.md\|alter self]], [[/6. Mechanics/Spells/false-life.md\|false life]],\
    \ [[/6. Mechanics/Spells/levitate.md\|levitate]] (self only), [[/6. Mechanics/Spells/mage-armor.md\|mage armor]]\
    \ (self only), [[/6. Mechanics/Spells/silent-image.md\|silent image]]\n\n1/day each:\
    \ [[/6. Mechanics/Spells/feeblemind.md\|feeblemind]], [[/6. Mechanics/Spells/finger-of-death.md\|finger of death]],\
    \ [[/6. Mechanics/Spells/plane-shift.md\|plane shift]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goblin is a 17th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, dice: d20+7 (+7 to hit) with spell attacks). It regains\
    \ its expended spell slots when it finishes a short or long rest. It knows the\
    \ following warlock spells:\n\nCantrips (at will): [[/6. Mechanics/Spells/eldritch-blast.md\|eldritch blast]],\
    \ [[/6. Mechanics/Spells/fire-bolt.md\|fire bolt]], [[/6. Mechanics/Spells/friends.md\|friends]],\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]],\
    \ [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]], [[/6. Mechanics/Spells/shocking-grasp.md\|shocking grasp]]\n\
    \n1st-5th level (4 5th-level slots): [[/6. Mechanics/Spells/banishment.md\|banishment]],\
    \ [[/6. Mechanics/Spells/burning-hands.md\|burning hands]], [[/6. Mechanics/Spells/flame-strike.md\|flame strike]],\
    \ [[/6. Mechanics/Spells/hellish-rebuke.md\|hellish rebuke]], [[/6. Mechanics/Spells/magic-circle.md\|magic circle]],\
    \ [[/6. Mechanics/Spells/scorching-ray.md\|scorching ray]], [[/6. Mechanics/Spells/scrying.md\|scrying]],\
    \ [[/6. Mechanics/Spells/stinking-cloud.md\|stinking cloud]], [[/6. Mechanics/Spells/suggestion.md\|suggestion]],\
    \ [[/6. Mechanics/Spells/wall-of-fire.md\|wall of fire]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the goblin makes an ability check or saving throw, it can add a dice:\
    \ d10|avg (d10) to the roll. It can do this after the roll is made but before\
    \ any of the roll's effects occur."
  "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Goblin can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6|avg (1d6) bludgeoning damage plus dice: 3d6|avg (3d6)\
    \ fire damage."
  "name": "Mace"
"source":
- "VGM"
"image": "/compendium/bestiary/humanoid/token/booyahg-slave-of-the-fiend.png"
aliases: ["Booyahg Slave of the Fiend"]
---
# Booyahg Slave of the Fiend
*Source: Volo's Guide to Monsters p. 42, Derived from Warlock of the Fiend (VGM)*  

This goblin warlock serves a patron who can extract payment in flesh if the goblin doesn't do as promised. Often this patron is a coven of hags serving as the tribe's boss, a fiend that has made its way into the world, or an undying lord such as a lich or a vampire. (For more information on undying lord patrons, see the "Sword Coast Adventurer's Guide").

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

## Stat Block

```ad-statblock
title: Booyahg Slave of the Fiend
![[/6. Mechanics/Bestiary/Humanoid/Token/booyahg-slave-of-the-fiend.png#token]]
*Small humanoid(goblinoid), Any alignment*

- **Armor Class** 12 (15 with [[/6. Mechanics/Spells/mage-armor.md\|mage armor]])
- **Hit Points** `dice: 12d8 + 24|text(78)` (12d8 + 24) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|14 (+2)|15 (+2)|12 (+1)|12 (+1)|18 (+4)|

- **Proficiency Bonus** +3
- **Saving Throws** Wisdom +4, Charisma +7
- **Skills** Arcana +4, Deception +7, Persuasion +7, Religion +4
- **Senses** darkvision 60 ft., darkvision 60 ft., passive Perception 11
- **Damage Resistances** slashing from nonmagical attacks not made with silvered weapons
- **Languages** any two languages (usually Abyssal or Infernal), Goblin
- **Challenge** 7

## Traits

***Dark One's Own Luck (Recharges after a Short or Long Rest).*** When the goblin makes an ability check or saving throw, it can add a `dice: d10` (`d10`) to the roll. It can do this after the roll is made but before any of the roll's effects occur.

***Nimble Escape.*** The Goblin can take the Disengage or Hide action as a bonus action on each of its turns.

***Innate Spellcasting.*** The goblin's innate spellcasting ability is Charisma. It can innately cast the following spells (spell save DC 15), requiring no material components:

**At will**: [[/6. Mechanics/Spells/alter-self.md\|alter self]], [[/6. Mechanics/Spells/false-life.md\|false life]], [[/6. Mechanics/Spells/levitate.md\|levitate]] (self only), [[/6. Mechanics/Spells/mage-armor.md\|mage armor]] (self only), [[/6. Mechanics/Spells/silent-image.md\|silent image]]

**1/day each**: [[/6. Mechanics/Spells/feeblemind.md\|feeblemind]], [[/6. Mechanics/Spells/finger-of-death.md\|finger of death]], [[/6. Mechanics/Spells/plane-shift.md\|plane shift]]

***Spellcasting.*** The goblin is a 17th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, `dice: d20+7` (+7 to hit) with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:

**Cantrips (at will)**: [[/6. Mechanics/Spells/eldritch-blast.md\|eldritch blast]], [[/6. Mechanics/Spells/fire-bolt.md\|fire bolt]], [[/6. Mechanics/Spells/friends.md\|friends]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]], [[/6. Mechanics/Spells/shocking-grasp.md\|shocking grasp]]

**1st-5th level (4 5th-level slots)**: [[/6. Mechanics/Spells/banishment.md\|banishment]], [[/6. Mechanics/Spells/burning-hands.md\|burning hands]], [[/6. Mechanics/Spells/flame-strike.md\|flame strike]], [[/6. Mechanics/Spells/hellish-rebuke.md\|hellish rebuke]], [[/6. Mechanics/Spells/magic-circle.md\|magic circle]], [[/6. Mechanics/Spells/scorching-ray.md\|scorching ray]], [[/6. Mechanics/Spells/scrying.md\|scrying]], [[/6. Mechanics/Spells/stinking-cloud.md\|stinking cloud]], [[/6. Mechanics/Spells/suggestion.md\|suggestion]], [[/6. Mechanics/Spells/wall-of-fire.md\|wall of fire]]

## Actions

***Mace.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d6` (`1d6`) bludgeoning damage plus `dice: 3d6` (`3d6`) fire damage.
```
^statblock

## Environment

arctic, desert, underdark, urban