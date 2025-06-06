---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: null
size: Small
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/3
  - monster/size/small
  - monster/type/fiend/devil
  - monster/type/fiend/shapechanger
aliases:
  - Crimson Legion Imp
---
# [[5. Mechanics\Bestiary\Fiend\Crimson Legion Imp (GRIFFONSSADDLEBAG2).md|Crimson Legion Imp]]
*Source: The Griffon's Saddlebag, Book 2 p. 344*

The Crimson Legionnaires are a swift, decisive, and efficient unit of infantry. In stark contrast to typical imps, Crimson Legion imps are zealous and obedient followers, known throughout the Lower Planes for their stubborn devotion to Malfuriel. With invisibility and silvered tongues, the art of war is second nature to them, and ensures that any battlefield conflict is skewed in their favor. They make frequent use of their shapechanging, becoming rats, hawks, and centipedes in order to scout, spy, or conceal their true numbers. 

Made larger by fiendish blood magic, these imps are otherwise similar in appearance to their lesser brethren. Red skin in various shades, poison-dripping scorpion tail, bat-like wings and unique patterns of horns upon their heads all serve as identifying features. 

```statblock
"name": "Crimson Legion Imp (GRIFFONSSADDLEBAG2)"
"size": "Small"
"type": "fiend"
"subtype": "devil, shapechanger"
"alignment": "Lawful Evil"
"ac": !!int "14"
"hp": !!int "49"
"hit_dice": "9d6 + 18"
"modifier": !!int "4"
"stats":
  - !!int "9"
  - !!int "18"
  - !!int "15"
  - !!int "12"
  - !!int "14"
  - !!int "15"
"speed": "25 ft., fly 50 ft."
"saves":
  - "strength": "+1"
  - "charisma": "+4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+6"
"damage_resistances": "cold, necrotic"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Infernal, Common"
"cr": "3"
"traits":
  - "desc": "The imp can use its action to polymorph into a beast form that resembles\
      \ a giant rat (speed 30 ft.), a blood hawk (10 ft., fly 60 ft.), or a giant\
      \ centipede (30 ft., climb 30 ft.), or back into its true form. Its statistics\
      \ are the same in each form, except for the speed changes noted. Any equipment\
      \ it is wearing or carrying isn't transformed. It reverts to its true form if\
      \ it dies."
    "name": "Shapechanger"
  - "desc": "The imp is immune to the diseases described in the [[5. Mechanics/Tables/Bloodmire Diseases (GRIFFONSSADDLEBAG2).md|Bloodmire Diseases]]\
      \ table."
    "name": "Bloodmire Adaptation"
  - "desc": "Magical darkness doesn't impede the imp's darkvision."
    "name": "Devil's Sight"
  - "desc": "The imp has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The imp has advantage on an attack roll against a creature if at least\
      \ one of the imp's allies is within 5 feet of the creature and the ally isn't\
      \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Pack Tactics"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) piercing damage, and the target must make a DC 12 Constitution saving\
      \ throw, taking 14 (4d6)  necrotic damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Sting (Bite or Beak in Beast Form)"
  - "desc": "The imp magically turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ until it attacks or until its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
      \ ends (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]]\
      \ on a spell). Any equipment the imp wears or carries is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ with it."
    "name": "Invisibility"
"source":
  - "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
