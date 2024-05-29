---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/vgm
  - monster/cr/7
  - monster/size/medium
  - monster/type/humanoid/any-race
statblock: inline
aliases:
  - Booyahg Slave of the Fiend
---
# [[5. Mechanics/Bestiary/Humanoid/Booyahg Slave Of The Fiend.md|Booyahg Slave of the Fiend]]
*Source: Volo's Guide to Monsters p. 42*

This goblin warlock serves a patron who can extract payment in flesh if the goblin doesn't do as promised. Often this patron is a coven of hags serving as the tribe's boss, a fiend that has made its way into the world, or an undying lord such as a lich or a vampire. (For more information on undying lord patrons, see the "Sword Coast Adventurer's Guide").

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

```statblock
"name": "Booyahg Slave Of The Fiend"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "12"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "7"
  "Religion": !!int "4"
  "Arcana": !!int "4"
  "Persuasion": !!int "7"
"damage_resistances": "slashing from nonmagical attacks not made with silvered weapons"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any two languages (usually Abyssal or Infernal)"
"cr": "7"
"traits":
- "desc": "The goblin's innate spellcasting ability is Charisma. It can innately cast\
    \ the following spells (spell save DC 15), requiring no material components:\n\
    \nAt will: [[5. Mechanics/Spells/Alter Self.md|alter self]], [[5. Mechanics/Spells/False Life.md|false life]],\
    \ [[5. Mechanics/Spells/Levitate.md|levitate]] (self only), [[5. Mechanics/Spells/Mage Armor.md|mage armor]]\
    \ (self only), [[5. Mechanics/Spells/Silent Image.md|silent image]]\n\n1/day each:\
    \ [[5. Mechanics/Spells/Feeblemind.md|feeblemind]], [[5. Mechanics/Spells/Finger Of Death.md|finger of death]],\
    \ [[5. Mechanics/Spells/Plane Shift.md|plane shift]]"
  "name": "Innate Spellcasting"
- "desc": "The goblin is a 17th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\nCantrips (at will): [[5. Mechanics/Spells/Eldritch Blast.md|eldritch blast]],\
    \ [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]], [[5. Mechanics/Spells/Friends.md|friends]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]], [[5. Mechanics/Spells/Shocking Grasp.md|shocking grasp]]\n\
    \n1st-5th level (4 slots): [[5. Mechanics/Spells/Banishment.md|banishment]],\
    \ [[5. Mechanics/Spells/Burning Hands.md|burning hands]], [[5. Mechanics/Spells/Flame Strike.md|flame strike]],\
    \ [[5. Mechanics/Spells/Hellish Rebuke.md|hellish rebuke]], [[5. Mechanics/Spells/Magic Circle.md|magic circle]],\
    \ [[5. Mechanics/Spells/Scorching Ray.md|scorching ray]], [[5. Mechanics/Spells/Scrying.md|scrying]],\
    \ [[5. Mechanics/Spells/Stinking Cloud.md|stinking cloud]], [[5. Mechanics/Spells/Suggestion.md|suggestion]],\
    \ [[5. Mechanics/Spells/Wall Of Fire.md|wall of fire]]"
  "name": "Spellcasting"
- "desc": "When the goblin makes an ability check or saving throw, it can add a d10\
    \ to the roll. It can do this after the roll is made but before any of the roll's\
    \ effects occur."
  "name": "Dark One's Own Luck (Recharges after a Short or Long Rest)"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d6)\
    \ bludgeoning damage plus 10 (3d6) fire damage."
  "name": "Mace"
"source":
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/booyahg-slave-of-the-fiend-vgm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
