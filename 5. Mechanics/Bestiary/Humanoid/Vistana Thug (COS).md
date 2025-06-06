---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\2
environments: null
size: Medium
tags:
  - compendium/src/5e/cos
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Vistana Thug
---
# [[5. Mechanics\Bestiary\Humanoid\Vistana Thug (COS).md|Vistana Thug]]
*Source: Curse of Strahd p. 28*

```statblock
"name": "Vistana Thug (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "11"
"ac_class": "[[5. Mechanics/Items/Leather Armor.md|leather armor]]"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"modifier": !!int "0"
"stats":
  - !!int "15"
  - !!int "11"
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+2"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/2"
"traits":
  - "desc": "The thug has advantage on an attack roll against a creature if at least\
      \ one of the thug's allies is within 5 feet of the creature and the ally isn't\
      \ [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]."
    "name": "Pack Tactics"
"actions":
  - "desc": "The thug makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5\
      \ (1d6 + 2) bludgeoning damage."
    "name": "Mace"
  - "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
      \ 5 (d10) piercing damage."
    "name": "Heavy Crossbow"
  - "desc": "10\n\n- The target is unable to perform a certain kind of act involving\
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
  - "desc": "10\n\nA Vistana who uses Evil Eye can't use it again before finishing\
      \ a short or long rest. Once a target succeeds on a saving throw against a Vistana's\
      \ Evil Eye, it is immune to the Evil Eye of all Vistani for 24 hours."
    "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
  - "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/vistana-thug-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
