---
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Vistana Guard"]
---
# Vistana Guard
*Source: Curse of Strahd p. 28, Derived from Guard (MM)*  

```statblock
"name": "Vistana Guard"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
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
  "Perception": "+2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/8"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: 4 (dice: 1d6 + 1|avg (1d6 + 1)) piercing\
    \ damage, or 5 (dice: 1d8 + 1|avg (1d8 + 1)) piercing damage if used with\
    \ two hands to make a melee attack."
  "name": "Spear"
- "desc": "The Vistana targets one creature that it can see within 30 feet of it.\
    \ The target must succeed on a DC 10 Wisdom saving throw or be cursed. The Vistana\
    \ chooses the curse's effect from the options that follow; other Vistani curses\
    \ are possible. All such effects deal psychic damage to the Vistani who uttered\
    \ them when they end:\n\n- The target is unable to perform a certain kind of act\
    \ involving fine motor control, such as tying knots, writing, playing an instrument,\
    \ sewing, or casting spells that have somatic components. When this curse ends,\
    \ the Vistana takes dice: 1d6|avg (1d6) psychic damage.  \n- The target's\
    \ appearance changes in a sinister yet purely cosmetic way. For example, the curse\
    \ can place a scar on the target's face, turn the target's teeth into yellow fangs,\
    \ or give the target bad breath. When this curse ends, the Vistana takes dice:\
    \ 1d6|avg (1d6) psychic damage.  \n- A nonmagical item in the target's possession\
    \ (chosen by the DM) disappears and can't be found until the curse ends. The lost\
    \ item can weigh no more than 1 pound. When this curse ends, the Vistana takes\
    \ dice: 1d6|avg (1d6) psychic damage.  \n- The target gains vulnerability\
    \ to a damage type of the Vistana's choice. When this curse ends, the Vistana\
    \ takes dice: 3d6|avg (3d6) psychic damage.  \n- The target has disadvantage\
    \ on ability checks and saving throws tied to one ability score of the Vistana's\
    \ choice. When this curse ends, the Vistana takes dice: 3d6|avg (3d6) psychic\
    \ damage.  \n- The target's attunement to one magic item (chosen by the DM) ends,\
    \ and the target can't attune to the chosen item until the curse ends. When this\
    \ curse ends, the Vistana takes dice: 5d6|avg (5d6) psychic damage.  \n- The\
    \ target is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]],\
    \ or both. When this curse ends, the Vistana takes dice: 5d6|avg (5d6) psychic\
    \ damage.  \n\nThe curse lasts until ended with a [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
    \ spell, a [[5. Mechanics/Spells/Remove Curse.md|remove curse]] spell, or similar\
    \ magic. It doesn't end when the target dies. If a cursed target is returned to\
    \ life, the curse remains in effect."
  "name": "Curse (Recharges After a Long Rest)"
- "desc": "As an action, a Vistana can target a creature within 10 feet that the Vistana\
    \ can see. This magical ability, which the Vistani call the Evil Eye, duplicates\
    \ the duration and effect of the [[5. Mechanics/Spells/Animal Friendship.md|animal friendship]],\
    \ [[5. Mechanics/Spells/Charm Person.md|charm person]], or [[5. Mechanics/Spells/Hold Person.md|hold person]]\
    \ spell (Vistana's choice; spell DC 10), but requires neither somatic nor material\
    \ components. If the target succeeds on the save, the Vistana is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ until the end of the Vistana's next turn.\n\nA Vistana who uses Evil Eye can't\
    \ use it again before finishing a short or long rest. Once a target succeeds on\
    \ a saving throw against a Vistana's Evil Eye, it is immune to the Evil Eye of\
    \ all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "compendium/bestiary/humanoid/token/vistana-guard.png"
```
^statblock

## Environment

coastal, mountain, grassland, hill, urban, forest, desert