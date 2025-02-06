---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\8
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(COS)
  - monster\Cr\1 8
  - monster\Size\Medium
  - monster\Type\Humanoid\Any Race
aliases:
  - Vistana Guard
---
# [[5. Mechanics\Bestiary\Humanoid\Vistana Guard (COS).md|Vistana Guard]]
*Source: Curse of Strahd p. 28*

```statblock
"name": "Vistana Guard (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Chain Shirt.md|chain shirt]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/8"
"actions":
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing\
    \ damage if used with two hands to make a melee attack."
  "name": "Spear"
- "desc": "10\n\n- The target is unable to perform a certain kind of act involving\
    \ fine motor control, such as tying knots, writing, playing an instrument, sewing,\
    \ or casting spells that have somatic components. When this curse ends, the Vistana\
    \ takes 1d6 psychic damage.  \n- The target's appearance changes in a sinister\
    \ yet purely cosmetic way. For example, the curse can place a scar on the target's\
    \ face, turn the target's teeth into yellow fangs, or give the target bad breath.\
    \ When this curse ends, the Vistana takes 1d6 psychic damage.  \n- A nonmagical\
    \ item in the target's possession (chosen by the DM) disappears and can't be found\
    \ until the curse ends. The lost item can weigh no more than 1 pound. When this\
    \ curse ends, the Vistana takes 1d6 psychic damage.  \n- The target gains vulnerability\
    \ to a damage type of the Vistana's choice. When this curse ends, the Vistana\
    \ takes 3d6 psychic damage.  \n- The target has disadvantage on ability checks\
    \ and saving throws tied to one ability score of the Vistana's choice. When this\
    \ curse ends, the Vistana takes 3d6 psychic damage.  \n- The target's attunement\
    \ to one magic item (chosen by the DM) ends, and the target can't attune to the\
    \ chosen item until the curse ends. When this curse ends, the Vistana takes 5d6\
    \ psychic damage.  \n- The target is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], or both. When this curse\
    \ ends, the Vistana takes 5d6 psychic damage.  \n\nThe curse lasts until ended\
    \ with a [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]] spell,\
    \ a [[5. Mechanics/Spells/Remove Curse.md|remove curse]] spell, or similar magic.\
    \ It doesn't end when the target dies. If a cursed target is returned to life,\
    \ the curse remains in effect."
  "name": "Curse (Recharges After a Long Rest)"
- "desc": "10\n\nA Vistana who uses Evil Eye can't use it again before finishing a\
    \ short or long rest. Once a target succeeds on a saving throw against a Vistana's\
    \ Evil Eye, it is immune to the Evil Eye of all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/vistana-guard-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
