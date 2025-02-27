---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Small
tags:
  - compendium/src/5e/vgm
  - monster/cr/1-4
  - monster/size/small
  - monster/type/humanoid/goblinoid
aliases:
  - Booyahg Caster
---
# [[5. Mechanics\Bestiary\Humanoid\Booyahg Caster (VGM).md|Booyahg Caster]]
*Source: Volo's Guide to Monsters p. 42*

This goblin served under a hobgoblin wizard, stole a look at its master's spellbook, and learned a little wizardry by aping the gestures and words it remembered. The goblin can cast a randomly determined 1st-level wizard spell once per day. Intelligence is its spellcasting ability.

## Booyahgs

Spellcasters of any sort among the goblins are rare. Goblins typically lack the intelligence and patience needed to learn and practice wizardry, and they fare poorly even when given access to the necessary training and knowledge. Sorcerers are less prevalent among them than in many other races, and Khurgorbaeyag seems to dislike sharing his divine power with his followers. And although many goblins would readily offer anything to have the abilities of a warlock, the patrons that grant such power know a goblin is unlikely to be able to uphold its end of any bargain.

Even when a goblin is born with the ability to become a spellcaster, the knowledge and talent necessary to carry on the tradition rarely persists for more than a couple of generations. Because they have so little experience with magic, goblins make no distinction between its forms. To them all magic is "booyahg," and the word is part of the name they give to any of its practitioners.

A goblin with access to booyahg becomes a member of the lashers and can often rise to the role of boss.

```statblock
"name": "Booyahg Caster (VGM)"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather armor]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "7"
"hit_dice": "2d6"
"stats":
- !!int "8"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "8"
- !!int "8"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "6"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "Common, Goblin"
"cr": "1/4"
"traits":
- "desc": "The goblin can cast a randomly determined 1st-level wizard spell once per\
    \ day. Intelligence is its spellcasting ability (spell save DC 10, +2 to hit with\
    \ spell attacks).\n"
  "name": "Spellcasting"
- "desc": "The goblin can take the Disengage or Hide action as a bonus action on each\
    \ of its turns."
  "name": "Nimble Escape"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) slashing damage."
  "name": "Scimitar"
- "desc": "Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit:\
    \ 5 (1d6 + 2) piercing damage."
  "name": "Shortbow"
"source":
- "VGM"
"image": "5. Mechanics/Bestiary/Humanoid/token/booyahg-caster-vgm.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
