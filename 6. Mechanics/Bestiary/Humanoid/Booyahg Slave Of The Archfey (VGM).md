---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/environment/arctic
- monster/environment/forest
- monster/environment/mountain
- monster/environment/swamp
- monster/environment/urban
- monster/size/small
- monster/type/humanoid/goblinoid
statblock: true
statblock-link: "#^statblock"
"name": "Booyahg Slave of the Archfey"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "49"
"hit_dice": "11d8"
"stats":
- !!int "9"
- !!int "13"
- !!int "11"
- !!int "11"
- !!int "12"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Nature": !!int "2"
  "Deception": !!int "6"
  "Arcana": !!int "2"
  "Persuasion": !!int "6"
"condition_immunities": "charmed"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages (usually Sylvan), Goblin"
"cr": "4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goblin's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [[/6. Mechanics/Spells/disguise-self.md\|disguise self]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]]\
    \ (self only), [[/6. Mechanics/Spells/silent-image.md\|silent image]], [speak with\
    \ animals](/compendium/spells/speak-with-animals.md)\n\n1/day: [[/6. Mechanics/Spells/conjure-fey.md\|conjure fey]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goblin is an 11th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). It regains\
    \ its expended spell slots when it finishes a short or long rest. It knows the\
    \ following warlock spells:\n\nCantrips (at will): [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]],\
    \ [[/6. Mechanics/Spells/eldritch-blast.md\|eldritch blast]], [[/6. Mechanics/Spells/friends.md\|friends]],\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]],\
    \ [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]], [[/6. Mechanics/Spells/vicious-mockery.md\|vicious mockery]]\n\
    \n1st-5th level (3 5th-level slots): [[/6. Mechanics/Spells/blink.md\|blink]],\
    \ [[/6. Mechanics/Spells/charm-person.md\|charm person]], [[/6. Mechanics/Spells/dimension-door.md\|dimension door]],\
    \ [[/6. Mechanics/Spells/dominate-beast.md\|dominate beast]], [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]],\
    \ [[/6. Mechanics/Spells/fear.md\|fear]], [[/6. Mechanics/Spells/hold-monster.md\|hold monster]],\
    \ [[/6. Mechanics/Spells/misty-step.md\|misty step]], [[/6. Mechanics/Spells/phantasmal-force.md\|phantasmal force]],\
    \ [[/6. Mechanics/Spells/seeming.md\|seeming]], [[/6. Mechanics/Spells/sleep.md\|sleep]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Goblin can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "In response to taking damage, the goblin turns [[6. Mechanics/Rules/conditions.md#invisible\|invisible]]\
    \ and teleports up to 60 feet to an unoccupied space it can see. It remains [[6. Mechanics/Rules/conditions.md#invisible\|invisible]]\
    \ until the start of its next turn or until it attacks, makes a damage roll, or\
    \ casts a spell."
  "name": "Misty Escape (Recharges after a Short or Long Rest)"
"source":
- "VGM"
"image": "/compendium/bestiary/humanoid/token/booyahg-slave-of-the-archfey.png"
aliases: ["Booyahg Slave of the Archfey"]
---
# Booyahg Slave of the Archfey
*Source: Volo's Guide to Monsters p. 42, Derived from Warlock of the Archfey (VGM)*  

This goblin warlock serves a patron who can extract payment in flesh if the goblin doesn't do as promised. Often this patron is a coven of hags serving as the tribe's boss, a fiend that has made its way into the world, or an undying lord such as a lich or a vampire. (For more information on undying lord patrons, see the "Sword Coast Adventurer's Guide").

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

## Stat Block

```ad-statblock
title: Booyahg Slave of the Archfey
![[/6. Mechanics/Bestiary/Humanoid/Token/booyahg-slave-of-the-archfey.png#token]]
*Small humanoid(goblinoid), Any alignment*

- **Armor Class** 11 (14 with [[/6. Mechanics/Spells/mage-armor.md\|mage armor]])
- **Hit Points** `dice: 11d8|text(49)` (11d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|13 (+1)|11 (+0)|11 (+0)|12 (+1)|18 (+4)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +3, Charisma +6
- **Skills** Arcana +2, Deception +6, Nature +2, Persuasion +6
- **Senses** darkvision 60 ft., passive Perception 11
- **Condition Immunities** charmed
- **Languages** any two languages (usually Sylvan), Goblin
- **Challenge** 4

## Traits

***Nimble Escape.*** The Goblin can take the Disengage or Hide action as a bonus action on each of its turns.

***Innate Spellcasting.*** The goblin's innate spellcasting ability is Charisma. It can innately cast the following spells (spell save DC 15), requiring no material components:

**At will**: [[/6. Mechanics/Spells/disguise-self.md\|disguise self]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]] (self only), [[/6. Mechanics/Spells/silent-image.md\|silent image]], [[/6. Mechanics/Spells/speak-with-animals.md\|speak with animals]]

**1/day**: [[/6. Mechanics/Spells/conjure-fey.md\|conjure fey]]

***Spellcasting.*** The goblin is an 11th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 14, `dice: d20+6` (+6 to hit) with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:

**Cantrips (at will)**: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]], [[/6. Mechanics/Spells/eldritch-blast.md\|eldritch blast]], [[/6. Mechanics/Spells/friends.md\|friends]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]], [[/6. Mechanics/Spells/vicious-mockery.md\|vicious mockery]]

**1st-5th level (3 5th-level slots)**: [[/6. Mechanics/Spells/blink.md\|blink]], [[/6. Mechanics/Spells/charm-person.md\|charm person]], [[/6. Mechanics/Spells/dimension-door.md\|dimension door]], [[/6. Mechanics/Spells/dominate-beast.md\|dominate beast]], [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]], [[/6. Mechanics/Spells/fear.md\|fear]], [[/6. Mechanics/Spells/hold-monster.md\|hold monster]], [[/6. Mechanics/Spells/misty-step.md\|misty step]], [[/6. Mechanics/Spells/phantasmal-force.md\|phantasmal force]], [[/6. Mechanics/Spells/seeming.md\|seeming]], [[/6. Mechanics/Spells/sleep.md\|sleep]]

## Actions

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) piercing damage.

## Reactions

***Misty Escape (Recharges after a Short or Long Rest).*** In response to taking damage, the goblin turns [[6. Mechanics/Rules/conditions.md#invisible\|invisible]] and teleports up to 60 feet to an unoccupied space it can see. It remains [[6. Mechanics/Rules/conditions.md#invisible\|invisible]] until the start of its next turn or until it attacks, makes a damage roll, or casts a spell.
```
^statblock

## Environment

arctic, forest, mountain, swamp, urban