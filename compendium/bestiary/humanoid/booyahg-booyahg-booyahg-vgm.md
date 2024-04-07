---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/vgm
- monster/cr/6
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
aliases: ["Booyahg Booyahg Booyahg"]
---
# [Booyahg Booyahg Booyahg](compendium/bestiary/humanoid/booyahg-booyahg-booyahg-vgm.md)
*Source: Volo's Guide to Monsters p. 43*

This goblin is a sorcerer with the wild magic origin whose every casting, including cantrips, is accompanied by a wild magic surge. Each time the goblin casts a spell, there is an accompanying surge of wild magic; roll on the [Wild Magic Surge](compendium/tables/wild-magic-surge.md) table in the "Player's Handbook" to determine the wild magic effect.

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

```statblock
"name": "Booyahg Booyahg Booyahg (VGM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
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
"speed": "30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "6"
"traits":
- "desc": "The goblin is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). The goblin\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [fire bolt](compendium/spells/fire-bolt.md),\
    \ [light](compendium/spells/light.md), [mage hand](compendium/spells/mage-hand.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ slots): [detect magic](compendium/spells/detect-magic.md), [mage armor](compendium/spells/mage-armor.md),\
    \ [magic missile](compendium/spells/magic-missile.md), [shield](compendium/spells/shield.md)\n\
    \n2nd level (3 slots): [misty step](compendium/spells/misty-step.md), [suggestion](compendium/spells/suggestion.md)\n\
    \n3rd level (3 slots): [counterspell](compendium/spells/counterspell.md),\
    \ [fireball](compendium/spells/fireball.md), [fly](compendium/spells/fly.md)\n\
    \n4th level (3 slots): [greater invisibility](compendium/spells/greater-invisibility.md),\
    \ [ice storm](compendium/spells/ice-storm.md)\n\n5th level (1 slots): [cone\
    \ of cold](compendium/spells/cone-of-cold.md)"
  "name": "spells"
- "desc": "Each time the goblin casts a spell (including cantrips), there is an accompanying\
    \ surge of wild magic; roll on the [Wild Magic Surge](compendium/tables/wild-magic-surge.md)\
    \ table in the \"Player's Handbook\" to determine the wild magic effect."
  "name": "Wild Magic"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "VGM"
"image": "compendium/bestiary/humanoid/token/booyahg-booyahg-booyahg-vgm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```