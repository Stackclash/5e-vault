---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Tiny
tags:
  - compendium/src/5e/kpdm
  - monster/cr/1
  - monster/size/tiny
  - monster/type/dragon
aliases:
  - Crimson Drake
---
# [[5. Mechanics\Bestiary\Dragon\Crimson Drake (KPDM).md|Crimson Drake]]
*Source: Deep Magic p. 296*

An evil drake that resembles a pseudodragon, the crimson drake is a popular familiar among evil [[5. Mechanics/Classes/Wizard School Of Evocation.md|evokers]], particularly those who favor fire magic. An evil [[5. Mechanics/Classes/Warlock.md|warlock]] who has the [[5. Mechanics/Optional Features/Pact Of The Chain.md|Pact of the Chain]] can acquire a crimson drake companion in place of a [[5. Mechanics/Bestiary/Fiend/Quasit.md|quasit]], while an evil [[5. Mechanics/Classes/Wizard.md|wizard]] can procure the services of one through treats and sacrifices worth at least 150 gp.

## Familiar

If a crimson drake agrees to serve another creature as a familiar, it forms a telepathic bond with its master. While the two are bonded, the master can sense what the crimson drake senses, as long as they are within 1 mile of each other. While the crimson drake is within 10 feet of its master, the master shares the drake's Magic Resistance trait. At any time and for any reason, the drake can abandon its service as a familiar, ending the telepathic bond.

```statblock
"name": "Crimson Drake (KPDM)"
"size": "Tiny"
"type": "dragon"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "54"
"hit_dice": "12d4 + 24"
"stats":
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "8"
- !!int "9"
- !!int "14"
"speed": "15 ft., fly 80 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Perception": !!int "1"
  "Acrobatics": !!int "4"
"damage_immunities": "fire"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common, Draconic, telepathy 60 ft."
"cr": "1"
"traits":
- "desc": "The drake has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The crimson drake makes one bite attack and one stinger attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 2) piercing damage plus 4 (1d8) fire damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
    \ + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving\
    \ throw or become [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] for 1 hour.\
    \ If the saving throw fails by 5 or more, the target takes 2 (1d4) poison damage\
    \ at the start of each of its turns for 3 rounds. A target [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
    \ in this way can the saving throw at the end of each of its turns, ending the\
    \ condition on a success."
  "name": "Stinger"
- "desc": "The drake exhales fire in a 15-foot cone. Each target in that cone takes\
    \ 18 (4d8) fire damage, or half as much damage with a successful DC 12 Dexterity\
    \ saving throw."
  "name": "Breath Weapon (Recharge 6)"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
