---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Small
tags:
  - compendium/src/5e/kpdm
  - monster/cr/2
  - monster/size/small
  - monster/type/fiend
aliases:
  - Kuunganisha
---
# [[5. Mechanics\Bestiary\Fiend\Kuunganisha (KPDM).md|Kuunganisha]]
*Source: Deep Magic p. 297*

The kuunganisha is a type of fiend that appears to have been specifically created by the powers of villainy to serve as a familiar. An evil [[5. Mechanics/Classes/Warlock.md|warlock]] who has the [[5. Mechanics/Optional Features/Pact Of The Chain.md|Pact of the Chain]] can summon a kuunganisha in place of a [[5. Mechanics/Bestiary/Fiend/Quasit.md|quasit]] or an [[5. Mechanics/Bestiary/Fiend/Imp.md|imp]], while a [[5. Mechanics/Classes/Wizard.md|wizard]] can acquire one only by casting a [[5. Mechanics/Spells/Planar Binding.md|planar binding]] spell (though the kuunganisha serves the [[5. Mechanics/Classes/Wizard.md|wizard]] permanently in this case, rather than for just 24 hours).

## Familiar

If a kuunganisha agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the kuunganisha senses, as long as they are within 1 mile of each other. While the kuunganisha is within 10 feet of its master, the master gains the kuunganisha's Magic Resistance trait. If its master causes it physical harm, or if it simply chooses to do so, the kuunganisha will abandon its service as a familiar, breaking the telepathic bond.

```statblock
"name": "Kuunganisha (KPDM)"
"size": "Small"
"type": "fiend"
"alignment": "Any Evil alignment"
"ac": !!int "13"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "6"
- !!int "17"
- !!int "11"
- !!int "10"
- !!int "12"
- !!int "13"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "3"
"damage_resistances": "fire; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks not made with silver"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Abyssal, Common, Infernal"
"cr": "2"
"traits":
- "desc": "Magical darkness doesn't impede the fiend's darkvision."
  "name": "Fiend Sight"
- "desc": "The kuunganisha has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "The kuunganisha regains 1 hp at the start of its turn if it has at least\
    \ 1 hp."
  "name": "Regeneration"
- "desc": "The master of a kuunganisha familiar can cast a spell through the creature,\
    \ using the fiend's senses to target the spell. The range limitations are treated\
    \ as if the spell originated from the kuunganisha, not the master. The spell effect\
    \ occurs on the kuunganisha's turn, though the master must cast the spell during\
    \ the master's turn. Concentration spells must still be maintained by the master."
  "name": "Will of the Master"
"actions":
- "desc": "The kuunganisha makes one claw attack and one bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) piercing damage, and the target must succeed on a DC 13 Constitution saving\
    \ throw or take 5 (2d4) poison damage and become [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
    \ + 3) slashing damage."
  "name": "Claw"
- "desc": "The kuunganisha magically turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
    \ until it attacks, or until its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
    \ ends (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]] on\
    \ a spell). Any equipment the fiend wears or carries becomes [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
    \ with it."
  "name": "Invisibility"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
