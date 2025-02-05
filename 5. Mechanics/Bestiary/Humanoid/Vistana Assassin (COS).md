---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: null
size: Medium
tags:
  - compendium/src/5e/cos
  - monster/cr/8
  - monster/size/medium
  - monster/type/humanoid/any-race
aliases:
  - Vistana Assassin
---
# [[5. Mechanics\Bestiary\Humanoid\Vistana Assassin (COS).md|Vistana Assassin]]
*Source: Curse of Strahd p. 28*

```statblock
"name": "Vistana Assassin (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "15"
"ac_class": "[[5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "6"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Thieves' cant plus any two languages"
"cr": "8"
"traits":
- "desc": "During its first turn, the assassin has advantage on attack rolls against\
    \ any creature that hasn't taken a turn. Any hit the assassin scores against a\
    \ [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]] creature is a critical\
    \ hit."
  "name": "Assassinate"
- "desc": "If the assassin is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, the assassin instead takes no damage\
    \ if it succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "The assassin deals an extra 14 (4d6) damage when it hits a target with\
    \ a weapon attack and has advantage on the attack roll, or when the target is\
    \ within 5 feet of an ally of the assassin that isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
    \ and the assassin doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "The assassin makes two shortsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage, and the target must make a DC 15 Constitution saving throw,\
    \ taking 24 (7d6) poison damage on a failed save, or half as much damage on a\
    \ successful one."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit:\
    \ 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving\
    \ throw, taking 24 (7d6) poison damage on a failed save, or half as much damage\
    \ on a successful one."
  "name": "Light Crossbow"
- "desc": "11\n\n- The target is unable to perform a certain kind of act involving\
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
- "desc": "11\n\nA Vistana who uses Evil Eye can't use it again before finishing a\
    \ short or long rest. Once a target succeeds on a saving throw against a Vistana's\
    \ Evil Eye, it is immune to the Evil Eye of all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/vistana-assassin-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
