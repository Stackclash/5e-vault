---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/environment/desert
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/environment/urban
- monster/size/small
- monster/type/humanoid/goblinoid
statblock: true
statblock-link: "#^statblock"
"name": "Booyahg Slave of the Great Old One"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "9"
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
  "History": !!int "4"
  "Arcana": !!int "4"
"damage_resistances": "psychic"
"senses": "darkvision 60 ft., darkvision 60 ft., passive Perception 11"
"languages": "any two languages, telepathy 30 ft., Goblin"
"cr": "6"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goblin's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/jump.md\|jump]],\
    \ [[/6. Mechanics/Spells/levitate.md\|levitate]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]]\
    \ (self only), [[/6. Mechanics/Spells/speak-with-dead.md\|speak with dead]]\n\n1/day\
    \ each: [[/6. Mechanics/Spells/arcane-gate.md\|arcane gate]], [[/6. Mechanics/Spells/true-seeing.md\|true seeing]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goblin is a 14th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, dice: d20+7 (+7 to hit) with spell attacks). It regains\
    \ its expended spell slots when it finishes a short or long rest. It knows the\
    \ following warlock spells:\n\nCantrips (at will): [[/6. Mechanics/Spells/chill-touch.md\|chill touch]],\
    \ [[/6. Mechanics/Spells/eldritch-blast.md\|eldritch blast]], [[/6. Mechanics/Spells/guidance.md\|guidance]],\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]],\
    \ [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]], [[/6. Mechanics/Spells/shocking-grasp.md\|shocking grasp]]\n\
    \n1st-5th level (3 5th-level slots): [[/6. Mechanics/Spells/armor-of-agathys.md\|armor of Agathys]],\
    \ [[/6. Mechanics/Spells/arms-of-hadar.md\|arms of Hadar]], [[/6. Mechanics/Spells/crown-of-madness.md\|crown of madness]],\
    \ [[/6. Mechanics/Spells/clairvoyance.md\|clairvoyance]], [[/6. Mechanics/Spells/contact-other-plane.md\|contact other plane]],\
    \ [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/dimension-door.md\|dimension door]],\
    \ [[/6. Mechanics/Spells/dissonant-whispers.md\|dissonant whispers]], [[/6. Mechanics/Spells/dominate-beast.md\|dominate beast]],\
    \ [[/6. Mechanics/Spells/telekinesis.md\|telekinesis]], [[/6. Mechanics/Spells/vampiric-touch.md\|vampiric touch]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "At the start of each of the goblin's turns, each creature of its choice\
    \ within 5 feet of it must succeed on a DC 15 Wisdom saving throw or take dice:\
    \ 3d6|avg (3d6) psychic damage, provided that the goblin isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]."
  "name": "Whispering Aura"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Goblin can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "VGM"
"image": "/compendium/bestiary/humanoid/token/booyahg-slave-of-the-great-old-one.png"
aliases: ["Booyahg Slave of the Great Old One"]
---
# Booyahg Slave of the Great Old One
*Source: Volo's Guide to Monsters p. 42, Derived from Warlock of the Great Old One (VGM)*  

This goblin warlock serves a patron who can extract payment in flesh if the goblin doesn't do as promised. Often this patron is a coven of hags serving as the tribe's boss, a fiend that has made its way into the world, or an undying lord such as a lich or a vampire. (For more information on undying lord patrons, see the "Sword Coast Adventurer's Guide").

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

## Stat Block

```ad-statblock
title: Booyahg Slave of the Great Old One
![[/6. Mechanics/Bestiary/Humanoid/Token/booyahg-slave-of-the-great-old-one.png#token]]
*Small humanoid(goblinoid), Any alignment*

- **Armor Class** 12 (15 with [[/6. Mechanics/Spells/mage-armor.md\|mage armor]])
- **Hit Points** `dice: 14d8 + 28|text(91)` (14d8 + 28) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|14 (+2)|15 (+2)|12 (+1)|12 (+1)|18 (+4)|

- **Proficiency Bonus** +3
- **Saving Throws** Wisdom +4, Charisma +7
- **Skills** Arcana +4, History +4
- **Senses** darkvision 60 ft., darkvision 60 ft., passive Perception 11
- **Damage Resistances** psychic
- **Languages** any two languages, telepathy 30 ft., Goblin
- **Challenge** 6

## Traits

***Whispering Aura.*** At the start of each of the goblin's turns, each creature of its choice within 5 feet of it must succeed on a DC 15 Wisdom saving throw or take `dice: 3d6` (`3d6`) psychic damage, provided that the goblin isn't [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]].

***Nimble Escape.*** The Goblin can take the Disengage or Hide action as a bonus action on each of its turns.

***Innate Spellcasting.*** The goblin's innate spellcasting ability is Charisma. It can innately cast the following spells (spell save DC 15), requiring no material components:

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/jump.md\|jump]], [[/6. Mechanics/Spells/levitate.md\|levitate]], [[/6. Mechanics/Spells/mage-armor.md\|mage armor]] (self only), [[/6. Mechanics/Spells/speak-with-dead.md\|speak with dead]]

**1/day each**: [[/6. Mechanics/Spells/arcane-gate.md\|arcane gate]], [[/6. Mechanics/Spells/true-seeing.md\|true seeing]]

***Spellcasting.*** The goblin is a 14th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, `dice: d20+7` (+7 to hit) with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells:

**Cantrips (at will)**: [[/6. Mechanics/Spells/chill-touch.md\|chill touch]], [[/6. Mechanics/Spells/eldritch-blast.md\|eldritch blast]], [[/6. Mechanics/Spells/guidance.md\|guidance]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]], [[/6. Mechanics/Spells/shocking-grasp.md\|shocking grasp]]

**1st-5th level (3 5th-level slots)**: [[/6. Mechanics/Spells/armor-of-agathys.md\|armor of Agathys]], [[/6. Mechanics/Spells/arms-of-hadar.md\|arms of Hadar]], [[/6. Mechanics/Spells/crown-of-madness.md\|crown of madness]], [[/6. Mechanics/Spells/clairvoyance.md\|clairvoyance]], [[/6. Mechanics/Spells/contact-other-plane.md\|contact other plane]], [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/dimension-door.md\|dimension door]], [[/6. Mechanics/Spells/dissonant-whispers.md\|dissonant whispers]], [[/6. Mechanics/Spells/dominate-beast.md\|dominate beast]], [[/6. Mechanics/Spells/telekinesis.md\|telekinesis]], [[/6. Mechanics/Spells/vampiric-touch.md\|vampiric touch]]

## Actions

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 2` (`1d4 + 2`) piercing damage.
```
^statblock

## Environment

desert, hill, mountain, underdark, urban