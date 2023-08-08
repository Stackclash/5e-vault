---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/humanoid/mongrelfolk
statblock: inline
---
# Clovin Belview
*Source: Curse of Strahd p. 147, Derived from Mongrelfolk (CoS)*  

```statblock
"name": "Clovin Belview"
"size": "Medium"
"type": "humanoid"
"subtype": "mongrelfolk"
"alignment": "Neutral Evil"
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
"senses": "passive Perception 12"
"languages": "Common"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The mongrelfolk has advantage on Wisdom ([[6. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks and on saving throws against being [[6. Mechanics/Rules/Conditions.md#blinded|blinded]],\
    \ [[6. Mechanics/Rules/Conditions.md#charmed|charmed]], [[6. Mechanics/Rules/Conditions.md#deafened|deafened]],\
    \ [[6. Mechanics/Rules/Conditions.md#frightened|frightened]], [[6. Mechanics/Rules/Conditions.md#stunned|stunned]],\
    \ or knocked [[6. Mechanics/Rules/Conditions.md#unconscious|unconscious]]."
  "name": "Two-Headed"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Clovin can mimic any sounds it has heard, including voices. A creature\
    \ that hears the sounds can tell they are imitations with a successful DC 12 Wisdom\
    \ (Insight) check."
  "name": "Mimicry"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Clovin makes two attacks: one with its bite and one with its claw or dagger."
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
"image": "6. Mechanics/Bestiary/Npc/token/clovin-belview.png"
```
^statblock