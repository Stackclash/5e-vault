---
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Vistana Spy"]
---
# Vistana Spy
*Source: Curse of Strahd p. 28, Derived from Spy (MM)*  

```statblock
"name": "Vistana Spy"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Sleight of Hand": "+4"
  "Deception": "+5"
  "Stealth": "+4"
  "Investigation": "+5"
  "Insight": "+4"
  "Perception": "+6"
  "Persuasion": "+5"
"senses": "passive Perception 16"
"languages": "any two languages"
"cr": "1"
"traits":
- "desc": "On each of its turns, the spy can use a bonus action to take the Dash,\
    \ Disengage, or Hide action."
  "name": "Cunning Action"
- "desc": "The spy deals an extra 7 (dice: 2d6|avg (2d6)) damage when it hits\
    \ a target with a weapon attack and has advantage on the attack roll, or when\
    \ the target is within 5 feet of an ally of the spy that isn't [[\5. Mechanics\Rules\Conditions.md#incapacitated|incapacitated]]\
    \ and the spy doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "The spy makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 5 (dice: 1d6 + 2|avg (1d6 + 2)) piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: 5 (dice: 1d6 + 2|avg (1d6 + 2)) piercing damage."
  "name": "Hand Crossbow"
- "desc": "The Vistana targets one creature that it can see within 30 feet of it.\
    \ The target must succeed on a DC 13 Wisdom saving throw or be cursed. The Vistana\
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
    \ target is [[\5. Mechanics\Rules\Conditions.md#blinded|blinded]], [[\5. Mechanics\Rules\Conditions.md#deafened|deafened]],\
    \ or both. When this curse ends, the Vistana takes dice: 5d6|avg (5d6) psychic\
    \ damage.  \n\nThe curse lasts until ended with a [[5. Mechanics\Spells\Greater Restoration.md|greater restoration]]\
    \ spell, a [[5. Mechanics\Spells\Remove Curse.md|remove curse]] spell, or similar\
    \ magic. It doesn't end when the target dies. If a cursed target is returned to\
    \ life, the curse remains in effect."
  "name": "Curse (Recharges After a Long Rest)"
- "desc": "As an action, a Vistana can target a creature within 10 feet that the Vistana\
    \ can see. This magical ability, which the Vistani call the Evil Eye, duplicates\
    \ the duration and effect of the [[5. Mechanics\Spells\Animal Friendship.md|animal friendship]],\
    \ [[5. Mechanics\Spells\Charm Person.md|charm person]], or [[5. Mechanics\Spells\Hold Person.md|hold person]]\
    \ spell (Vistana's choice; spell DC 13), but requires neither somatic nor material\
    \ components. If the target succeeds on the save, the Vistana is [[\5. Mechanics\Rules\Conditions.md#blinded|blinded]]\
    \ until the end of the Vistana's next turn.\n\nA Vistana who uses Evil Eye can't\
    \ use it again before finishing a short or long rest. Once a target succeeds on\
    \ a saving throw against a Vistana's Evil Eye, it is immune to the Evil Eye of\
    \ all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "compendium/bestiary/humanoid/token/vistana-spy.png"
```
^statblock

## Environment

urban