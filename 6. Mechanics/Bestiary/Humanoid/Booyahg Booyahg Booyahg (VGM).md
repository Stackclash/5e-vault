---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/environment/urban
- monster/size/small
- monster/type/humanoid/goblinoid
statblock: inline
---
# Booyahg Booyahg Booyahg
*Source: Volo's Guide to Monsters p. 43, Derived from Mage (MM)*  

This goblin is a sorcerer with the wild magic origin whose every casting, including cantrips, is accompanied by a wild magic surge. Each time the goblin casts a spell, there is an accompanying surge of wild magic; roll on the Wild Magic Surge table in the "Player's Handbook" to determine the wild magic effect.

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

## Stat Block

```statblock
"name": "Booyahg Booyahg Booyahg"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any four languages, Goblin"
"cr": "6"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The goblin is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). The goblin\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
    \ [[/6. Mechanics/Spells/Light.md|light]], [[/6. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[/6. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
    \ 1st-level slots): [[/6. Mechanics/Spells/Detect Magic.md|detect magic]], [mage\
    \ armor](/compendium/spells/mage-armor.md), [[/6. Mechanics/Spells/Magic Missile.md|magic missile]],\
    \ [[/6. Mechanics/Spells/Shield.md|shield]]\n\n2nd level (3 2nd-level slots):\
    \ [[/6. Mechanics/Spells/Misty Step.md|misty step]], [[/6. Mechanics/Spells/Suggestion.md|suggestion]]\n\
    \n3rd level (3 3rd-level slots): [[/6. Mechanics/Spells/Counterspell.md|counterspell]],\
    \ [[/6. Mechanics/Spells/Fireball.md|fireball]], [[/6. Mechanics/Spells/Fly.md|fly]]\n\
    \n4th level (3 4th-level slots): [[/6. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
    \ [[/6. Mechanics/Spells/Ice Storm.md|ice storm]]\n\n5th level (1 5th-level slots):\
    \ [[/6. Mechanics/Spells/Cone Of Cold.md|cone of cold]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Goblin can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each time the goblin casts a spell (including cantrips), there is an accompanying\
    \ surge of wild magic; roll on the Wild Magic Surge table in the \"Player's Handbook\"\
    \ to determine the wild magic effect."
  "name": "Wild Magic"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "VGM"
"image": "6. Mechanics/Bestiary/Humanoid/token/booyahg-booyahg-booyahg.png"
```
^statblock

## Environment

urban