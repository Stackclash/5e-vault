---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: null
size: Medium
tags:
  - compendium/src/5e/tgs1
  - monster/cr/11
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Nicrone Dendallen
---
# [[5. Mechanics\Bestiary\Humanoid\Nicrone Dendallen (TGS1).md|Nicrone Dendallen]]
*Source: The Griffon's Saddlebag, Book 1*

Nicrone Dendallen is a human wizard whose passion for self-improvement has become an obsession, focused on removing the inherent limits of his own mortality. His focus on gaining power through sacrifice at any cost attracts dedicated sycophants. Their beliefs make them eager to recklessly endanger their lives for the chance to earn powerful rewards from his hand.

Dedicated and tenacious followers of Dendallen are given tokens of his appreciation: terrifying items made by Dendallen himself, each enchanted with a grotesque balance of strength and consequence.

While Dendallen is a master of the necromantic arts, his frustration with the limits of his mortal body makes him scoff at those who pursue longevity through undeath's tenuous hold on existence. Only under extreme circumstances—or the promise of extreme rewards—is he willing to work with undead creatures or the magic that enables them.

## Teachings of Dendallen

Dendallen's belief that self-sacrifice leads to self-improvement is a fervent mantra held by his followers. In general, those that subscribe to Dendallen's teachings believe that in order to truly become greater, you must be willing to let go of the mortal trappings that bind you. The major tenets of Dendallen are as follows:

### Embrace Self-Sacrifice

To forget the familiar as a price for greatness is admirable.

### Conquer your Limits

To become more powerful is to embrace the purpose of life.

### Enforce your Will

To conquer all obstacles in your path is to ensure success.

## Followers of Dendallen

Use the [[5. Mechanics/Bestiary/Humanoid/Cultist.md|cultist]] and [[5. Mechanics/Bestiary/Humanoid/Cult Fanatic.md|cult fanatic]] statistics for followers of Dendallen. Dendallen's more powerful followers can use other humanoid stat blocks that fit your setting and party level. These leaders are groomed to be more formidable than those deemed undeserving, unproven, or mediocre.

Typically, these trusted followers of Dendallen will have overt visual ailments or symptoms of disease, but will be notably more powerful because of it. Elite followers such as this will occasionally wield a Remnant of Dendallen, bestowed unto them after they complete a dangerous or otherwise notable feat of faith, loyalty and self-sacrifice. Upon defeating such a creature, your party can take the Remnant for themselves. The particular Remnant each follower wields is up to you, but should be scaled relative to the creature's challenge rating.

## Slaying Nicrone Dendallen

Killing Nicrone allows for his spirit to return at a later time. His final mortal words should capture his beliefs and foreshadow his return, such as "Giving up your weaknesses grants power beyond compare!"

```statblock
"name": "Nicrone Dendallen (TGS1)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "130"
"hit_dice": "20d8 + 40"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "20"
- !!int "13"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "9"
  "History": !!int "9"
  "Arcana": !!int "9"
"damage_resistances": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "passive Perception 11"
"languages": "Common, any three others"
"cr": "11"
"traits":
- "desc": "Dendallen is a 19th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Chill Touch.md|chill touch]],\
    \ [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]], [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Poison Spray.md|poison spray]], [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/False Life.md|false life]], [[5. Mechanics/Spells/Inflict Wounds.md|inflict\
    \ wounds]], [[5. Mechanics/Spells/Magic Missile.md|magic missile]],\
    \ [[5. Mechanics/Spells/Shield.md|shield]]\n\n2nd level (3 slots): [[5. Mechanics/Spells/Blindness Deafness.md|blindness/deafness]],\
    \ [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Hold Person.md|hold person]],\
    \ [[5. Mechanics/Spells/Ray Of Enfeeblement.md|ray of enfeeblement]]\n\n3rd level\
    \ (3 slots): [[5. Mechanics/Spells/Bestow Curse.md|bestow curse]], [[5. Mechanics/Spells/Counterspell.md|counterspell]],\
    \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Haste.md|haste]],\
    \ [[5. Mechanics/Spells/Slow.md|slow]]\n\n4th level (3 slots): [[5. Mechanics/Spells/Blight.md|blight]],\
    \ [[5. Mechanics/Spells/Confusion.md|confusion]], [[5. Mechanics/Spells/Phantasmal Killer.md|phantasmal killer]]\n\
    \n5th level (3 slots): [[5. Mechanics/Spells/Cloudkill.md|cloudkill]], [[5. Mechanics/Spells/Telekinesis.md|telekinesis]],\
    \ [[5. Mechanics/Spells/Wall Of Force.md|wall of force]]\n\n6th level (2 slots):\
    \ [[5. Mechanics/Spells/Circle Of Death.md|circle of death]], [[5. Mechanics/Spells/Disintegrate.md|disintegrate]]\n\
    \n7th level (1 slots): [[5. Mechanics/Spells/Finger Of Death.md|finger of death]],\
    \ [[5. Mechanics/Spells/Prismatic Spray.md|prismatic spray]]\n\n8th level (1 slots):\
    \ [[5. Mechanics/Spells/Feeblemind.md|feeblemind]]\n\n9th level (1 slots): [[5. Mechanics/Spells/Weird.md|weird]]"
  "name": "Spellcasting"
- "desc": "This staff has 3 charges and regains 1d3 expended charges daily at dawn.\
    \ On a hit, it deals damage as a normal quarterstaff, and Dendallen can expend\
    \ 1 charge to deal an extra 11 (2d10) necrotic damage to the target. In addition,\
    \ the target must succeed on a DC 15 Constitution saving throw or have disadvantage\
    \ for 1 hour on any ability check or saving throw that uses Strength or Constitution."
  "name": "Staff of Withering"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d8)\
    \ bludgeoning damage."
  "name": "Staff of Withering"
"source":
- "tgs1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
