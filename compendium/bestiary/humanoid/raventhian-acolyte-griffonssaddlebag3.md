---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag3
- monster/cr/5
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Raventhian Acolyte"]
---
# [Raventhian Acolyte](compendium\bestiary\humanoid/raventhian-acolyte-griffonssaddlebag3.md)
*Source: The Griffon's Saddlebag, Book 3 p. 0*

The lingering cultists of the fallen Raventhia. They seek to revive their leader as a lich and finally destroy Val Linsin, the very stronghold their presence forced to create years ago.

```statblock
"name": "Raventhian Acolyte (GriffonsSaddlebag3)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "typically  Chaotic Evil"
"ac": !!int "14"
"ac_class": "[leather armor](compendium/items/leather-armor.md)"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "9"
- !!int "16"
- !!int "14"
- !!int "15"
- !!int "13"
- !!int "19"
"speed": "30 ft."
"skillsaves":
  "Religion": !!int "5"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "passive Perception 14"
"languages": "Common plus one other language"
"cr": "5"
"traits":
- "desc": "The acolyte is a 11th-level spellcaster. Its spellcasting ability is Charisma\
    \ (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell\
    \ slots when it finishes a short or long rest. It knows the following warlock\
    \ spells:\n\n1/day: [eyebite](compendium/spells/eyebite.md)\n\nCantrips\
    \ (at will): [chill touch](compendium/spells/chill-touch.md) (3d8), [mage hand](compendium/spells/mage-hand.md)\
    \ (appears as a raven), [minor illusion](compendium/spells/minor-illusion.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md)\n\n1st-5th level\
    \ (3 slots): [animate dead](compendium/spells/animate-dead.md), [blight](compendium/spells/blight.md),\
    \ [darkness](compendium/spells/darkness.md), [dream](compendium/spells/dream.md),\
    \ [fear](compendium/spells/fear.md), [fly](compendium/spells/fly.md), [gaseous\
    \ form](compendium/spells/gaseous-form.md) (self only; appears as a swarm of ravens),\
    \ [mirror image](compendium/spells/mirror-image.md), [misty step](compendium/spells/misty-step.md),\
    \ [polymorph](compendium/spells/polymorph.md), [scrying](compendium/spells/scrying.md)"
  "name": "Spellcasting"
- "desc": "The acolyte can mimic simple animal sounds and the voices of humanoids\
    \ it has heard. A creature that hears the acolyte mimicking sounds or voices in\
    \ this way can tell they are imitations with a successful DC 10 Wisdom ([Insight](/compendium/rules/skills.md#Insight))\
    \ check."
  "name": "Mimicry"
- "desc": "The acolyte can cast [find familiar](compendium/spells/find-familiar.md)\
    \ as a ritual. When it does so, the familiar takes the form of a raven, but it\
    \ has an Intelligence of 6, can understand Common, and has advantage on saving\
    \ throws against spells and other magical effects."
  "name": "Raven Servant"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage."
  "name": "Dagger"
"source":
- "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```