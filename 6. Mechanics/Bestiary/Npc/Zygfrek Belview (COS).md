---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/humanoid/mongrelfolk
statblock: inline
---
# Zygfrek Belview
*Source: Curse of Strahd p. 148, Derived from Mongrelfolk (CoS)*  

```statblock
"name": "Zygfrek Belview"
"size": "Medium"
"type": "humanoid"
"subtype": "mongrelfolk"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "12"
- !!int "9"
- !!int "15"
- !!int "9"
- !!int "10"
- !!int "6"
"speed": "walk 20 ft."
"skillsaves":
  "Deception": !!int "2"
  "Stealth": !!int "3"
  "Perception": !!int "2"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mongrelfolk has darkvision out to a range of 60 feet."
  "name": "Darkvision"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zygfrek can mimic any sounds it has heard, including voices. A creature\
    \ that hears the sounds can tell they are imitations with a successful DC 12 Wisdom\
    \ (Insight) check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zygfrek makes two attacks: one with its bite and one with its claw or dagger."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 1|avg (1d4 + 1) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4 + 1|avg (1d4 + 1) slashing damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 1|avg (1d4 + 1) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "6. Mechanics/Bestiary/Npc/token/zygfrek-belview.png"
```
^statblock