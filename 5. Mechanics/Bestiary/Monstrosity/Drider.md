---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: underdark
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/6
  - monster/environment/underdark
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Drider
---
# [[5. Mechanics\Bestiary\Monstrosity\Drider.md|Drider]]
*Source: Monster Manual p. 120, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

When a drow shows great promise, Lolth summons it to the Demonweb Pits for a test of faith and strength. Those that pass the test rise higher in the Spider Queen's favor. Those that fail are transformed into driders-a horrid hybrid of a drow and a giant spider that serves as a living reminder of Lolth's power. Only drow can be turned into driders, and the power to create these creatures resides with Lolth alone.

## Scarred for Life

Drow transformed into driders return to the Material Plane as twisted and debased creatures. Driven by madness, they disappear into the Underdark to become hermits and hunters, either wandering alone or leading packs of giant spiders.

On rare occasion, a drider returns to the fringes of drow society despite its curse, most often to fulfill some longstanding vow or vendetta from its former life. Drow fear and shun the driders, holding them in lower esteem than slaves. However, they tolerate the presence of these creatures as living representatives of Lolth's will, and a reminder of the fate that awaits all who fail the Spider Queen.

> [!quote] A quote from Pellanistra the drider  
> 
> I failed the Spider Queen once. Never again.


```statblock
"name": "Drider"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "16"
  - !!int "18"
  - !!int "13"
  - !!int "14"
  - !!int "12"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+9"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Elvish, Undercommon"
"cr": "6"
"traits":
  - "desc": "The drider's innate spellcasting ability is Wisdom (spell save DC 13).\
      \ The drider can innately cast the following spells, requiring no material components:\n\
      \nAt will: [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]]\n\n1/day\
      \ each: [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Faerie Fire.md|faerie fire]]"
    "name": "Innate Spellcasting"
  - "desc": "The drider has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ and magic can't put the drider to sleep."
    "name": "Fey Ancestry"
  - "desc": "The drider can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "While in sunlight, the drider has disadvantage on attack rolls, as well\
      \ as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The drider ignores movement restrictions caused by webbing."
    "name": "Web Walker"
"actions":
  - "desc": "The drider makes three attacks, either with its longsword or its longbow.\
      \ It can replace one of those attacks with a bite attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2\
      \ (d4) piercing damage plus 9 (2d8) poison damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
    "name": "Longsword"
  - "desc": "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit:\
      \ 7 (1d8 + 3) piercing damage plus 4 (d8) poison damage."
    "name": "Longbow"
"source":
  - "MM"
  - "VEoR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/drider.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
