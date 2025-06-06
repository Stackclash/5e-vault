---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: null
size: Medium
tags:
  - compendium/src/5e/vgm
  - monster/cr/4
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Booyahg Slave of the Archfey
---
# [[5. Mechanics\Bestiary\Humanoid\Booyahg Slave Of The Archfey (VGM).md|Booyahg Slave of the Archfey]]
*Source: Volo's Guide to Monsters p. 42*

This goblin warlock serves a patron who can extract payment in flesh if the goblin doesn't do as promised. Often this patron is a coven of hags serving as the tribe's boss, a fiend that has made its way into the world, or an undying lord such as a lich or a vampire. (For more information on undying lord patrons, see the "Sword Coast Adventurer's Guide").

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

```statblock
"name": "Booyahg Slave Of The Archfey (VGM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "11"
"ac_class": "14 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "49"
"hit_dice": "11d8"
"modifier": !!int "1"
"stats":
  - !!int "9"
  - !!int "13"
  - !!int "11"
  - !!int "11"
  - !!int "12"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "wisdom": "+3"
  - "charisma": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+6"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages (usually Sylvan), Goblin"
"cr": "4"
"traits":
  - "desc": "The goblin is an 11th-level spellcaster. Its spellcasting ability is\
      \ Charisma (spell save DC 14, +6 to hit with spell attacks). It regains its\
      \ expended spell slots when it finishes a short or long rest. It knows the following\
      \ warlock spells:\n\nCantrips (at will): [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
      \ [[5. Mechanics/Spells/Eldritch Blast.md|eldritch blast]], [[5. Mechanics/Spells/Friends.md|friends]],\
      \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
      \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]], [[5. Mechanics/Spells/Vicious Mockery.md|vicious mockery]]\n\
      \n1st-5th level (3 slots): [[5. Mechanics/Spells/Blink.md|blink]], [[5. Mechanics/Spells/Charm Person.md|charm person]],\
      \ [[5. Mechanics/Spells/Dimension Door.md|dimension door]], [[5. Mechanics/Spells/Dominate Beast.md|dominate beast]],\
      \ [[5. Mechanics/Spells/Faerie Fire.md|faerie fire]], [[5. Mechanics/Spells/Fear.md|fear]],\
      \ [[5. Mechanics/Spells/Hold Monster.md|hold monster]], [[5. Mechanics/Spells/Misty Step.md|misty step]],\
      \ [[5. Mechanics/Spells/Phantasmal Force.md|phantasmal force]], [[5. Mechanics/Spells/Seeming.md|seeming]],\
      \ [[5. Mechanics/Spells/Sleep.md|sleep]]"
    "name": "Spellcasting"
  - "desc": "The goblin's innate spellcasting ability is Charisma. It can innately\
      \ cast the following spells (spell save DC 15), requiring no material components:\n\
      \nAt will: [[5. Mechanics/Spells/Disguise Self.md|disguise self]], [[5. Mechanics/Spells/Mage Armor.md|mage armor]]\
      \ (self only), [[5. Mechanics/Spells/Silent Image.md|silent image]], [[5. Mechanics/Spells/Speak With Animals.md|speak with\
      \ animals]]\n\n1/day: [[5. Mechanics/Spells/Conjure Fey.md|conjure fey]]"
    "name": "Innate Spellcasting"
  - "desc": "The goblin"
    "name": "Nimble Escape"
"actions":
  - "desc": "Melee  or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"reactions":
  - "desc": "In response to taking damage, the goblin turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ and teleports up to 60 feet to an unoccupied space it can see. It remains\
      \ [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]] until the start of\
      \ its next turn or until it attacks, makes a damage roll, or casts a spell."
    "name": "Misty Escape (Recharges after a Short or Long Rest)"
"source":
  - "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/booyahg-slave-of-the-archfey-vgm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
