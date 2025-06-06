---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - compendium/src/5e/cos
  - monster/cr/1
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Vistana Spy
---
# [[5. Mechanics\Bestiary\Humanoid\Vistana Spy (COS).md|Vistana Spy]]
*Source: Curse of Strahd p. 28*

```statblock
"name": "Vistana Spy (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "10"
  - !!int "12"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Sleight%20of%20Hand|Sleight of Hand]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"senses": "passive Perception 16"
"languages": "any two languages"
"cr": "1"
"traits":
  - "desc": "On each of its turns, the spy can use a bonus action to take the Dash,\
      \ Disengage, or Hide action."
    "name": "Cunning Action"
  - "desc": "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon\
      \ attack and has advantage on the attack roll, or when the target is within\
      \ 5 feet of an ally of the spy that isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ and the spy doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "The spy makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) piercing damage."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit:\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Hand Crossbow"
  - "desc": "13\n\n- The target is unable to perform a certain kind of act involving\
      \ fine motor control, such as tying knots, writing, playing an instrument, sewing,\
      \ or casting spells that have somatic components. When this curse ends, the\
      \ Vistana takes d6 psychic damage.  \n- The target's appearance changes in a\
      \ sinister yet purely cosmetic way. For example, the curse can place a scar\
      \ on the target's face, turn the target's teeth into yellow fangs, or give the\
      \ target bad breath. When this curse ends, the Vistana takes d6 psychic damage.\
      \  \n- A nonmagical item in the target's possession (chosen by the DM) disappears\
      \ and can't be found until the curse ends. The lost item can weigh no more than\
      \ 1 pound. When this curse ends, the Vistana takes d6 psychic damage.  \n- The\
      \ target gains vulnerability to a damage type of the Vistana's choice. When\
      \ this curse ends, the Vistana takes 3d6 psychic damage.  \n- The target has\
      \ disadvantage on ability checks and saving throws tied to one ability score\
      \ of the Vistana's choice. When this curse ends, the Vistana takes 3d6 psychic\
      \ damage.  \n- The target's attunement to one magic item (chosen by the DM)\
      \ ends, and the target can't attune to the chosen item until the curse ends.\
      \ When this curse ends, the Vistana takes 5d6 psychic damage.  \n- The target\
      \ is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
      \ or both. When this curse ends, the Vistana takes 5d6 psychic damage.  \n\n\
      The curse lasts until ended with a [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
      \ spell, a [[5. Mechanics/Spells/Remove Curse.md|remove curse]] spell, or similar\
      \ magic. It doesn't end when the target dies. If a cursed target is returned\
      \ to life, the curse remains in effect."
    "name": "Curse (Recharges After a Long Rest)"
  - "desc": "13\n\nA Vistana who uses Evil Eye can't use it again before finishing\
      \ a short or long rest. Once a target succeeds on a saving throw against a Vistana's\
      \ Evil Eye, it is immune to the Evil Eye of all Vistani for 24 hours."
    "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
  - "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/vistana-spy-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
