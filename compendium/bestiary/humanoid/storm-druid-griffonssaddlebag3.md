---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/6
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Storm Druid"]
---
# [Storm Druid](compendium\bestiary\humanoid/storm-druid-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Members of a circle of druids that revere the might of the world's tempests, storm druids sometimes find passage on ships around as navigators themselves. Druids of this circle can transform their bodies into streaking bolts of lightning, allowing them to reach far-flung locations in a single (dangerous) bound.

```statblock
"name": "Storm Druid (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "15"
"ac_class": "[hide armor](compendium/items/hide-armor.md)"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "11"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "18"
- !!int "13"
"speed": "30 ft."
"skillsaves":
  "Nature": !!int "3"
  "Perception": !!int "7"
"damage_resistances": "lightning"
"senses": "passive Perception 17"
"languages": "Common, Druidic, and any one language"
"cr": "6"
"traits":
- "desc": "The druid is a 10th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 15, +7 to hit with spell attacks). It has the following druid\
    \ spells prepared:\n\nCantrips (at will): [druidcraft](compendium/spells/druidcraft.md),\
    \ [guidance](compendium/spells/guidance.md), [shillelagh](compendium/spells/shillelagh.md),\
    \ [shocking grasp](compendium/spells/shocking-grasp.md) (range of 30 feet)\n\n\
    1st level (4 slots): [fog cloud](compendium/spells/fog-cloud.md), [jump](compendium/spells/jump.md),\
    \ [thunderwave](compendium/spells/thunderwave.md)\n\n2nd level (3 slots):\
    \ [gust of wind](compendium/spells/gust-of-wind.md), [hold person](compendium/spells/hold-person.md),\
    \ [shatter](compendium/spells/shatter.md)\n\n3rd level (3 slots): [call lightning](compendium/spells/call-lightning.md),\
    \ [lightning bolt](compendium/spells/lightning-bolt.md), [sleet storm](compendium/spells/sleet-storm.md),\
    \ [wind wall](compendium/spells/wind-wall.md)\n\n4th level (3 slots): [control\
    \ water](compendium/spells/control-water.md), [ice storm](compendium/spells/ice-storm.md)\n\
    \n5th level (2 slots): [commune with nature](compendium/spells/commune-with-nature.md),\
    \ [conjure elemental](compendium/spells/conjure-elemental.md)"
  "name": "Spellcasting"
- "desc": "If the druid is hit by a melee attack while it has temporary hit points\
    \ from its Lightning Leap action, the attacker takes 5 (1d10) lightning damage."
  "name": "Lightning Body"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit (+7 to hit with shillelagh), reach 5 ft.,\
    \ one target. Hit: 4 (1d8) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage\
    \ with shillelagh."
  "name": "Quarterstaff"
- "desc": "The druid transforms into a streaking bolt of lightning, which surges forward\
    \ in a line that's 5 feet wide and up to 60 feet long in a direction it chooses.\
    \ The druid returns to its normal form in the nearest unoccupied space at the\
    \ end of the line. Twice while transformed, it can stop the line short and continue\
    \ in a different direction for up to the remaining length of the line before transforming\
    \ back into its normal form.\n\nEach creature within the line of lightning must\
    \ make a DC 15 Dexterity saving throw. A creature takes 21 (2d10 + 10) lightning\
    \ damage on a failed save, or half as much damage on a successful one. The druid\
    \ then returns to its normal form and gains 15 temporary hit points. These temporary\
    \ hit points remain for 10 minutes."
  "name": "Lightning Leap (2/Day)"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```