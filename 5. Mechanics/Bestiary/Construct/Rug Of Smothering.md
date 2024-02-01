---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/2
- monster/size/large
- monster/type/construct
statblock: inline
aliases: ["Rug of Smothering"]
---
# [[5. Mechanics/Bestiary/Construct/Rug Of Smothering.md|Rug of Smothering]]
*Source: Monster Manual p. 20, Curse of Strahd. Available in the SRD.*  

Would-be thieves and careless heroes arrive at the doorsteps of an enemy's abode, eyes and ears alert for traps, only to end their quest prematurely as the rugs beneath their feet animate and smother them to death.

A rug of smothering can be made in many different forms, from a finely woven carpet fit for a queen to a coarse mat in a peasant's hovel. Creatures with the ability to sense magic detect the rug's false magical aura.

In some cases, a rug of smothering is disguised as a [[5. Mechanics/Items/Carpet Of Flying.md|carpet of flying]] or another beneficial magic item. However, a character who stands or sits on the rug, or who attempts to utter a word of command, is quickly trapped as the rug of smothering rolls itself tightly around its victim.

## Animated Objects

Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.

### Constructed Nature

An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

```statblock
"name": "Rug of Smothering"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d10"
"stats":
- !!int "17"
- !!int "14"
- !!int "10"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "10 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "2"
"traits":
- "desc": "The rug is [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ while in the area of an [[5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
    \ If targeted by [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the rug must\
    \ succeed on a Constitution saving throw against the caster's spell save DC or\
    \ fall [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]] for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "While it is grappling a creature, the rug takes only half the damage dealt\
    \ to it, and the creature [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ by the rug takes the other half."
  "name": "Damage Transfer"
- "desc": "While the rug remains motionless, it is indistinguishable from a normal\
    \ rug."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one Medium\
    \ or smaller creature. Hit: The creature is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 13). Until this grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], and at risk of suffocating,\
    \ and the rug can't smother another target. In addition, at the start of each\
    \ of the target's turns, the target takes dice: 2d6 + 3|avg (2d6 + 3) bludgeoning\
    \ damage."
  "name": "Smother"
"source":
- "MM"
- "CoS"
- "HotDQ"
- "SKT"
- "ToA"
- "WDH"
- "GoS"
- "DIP"
- "SDW"
- "BGDIA"
- "EGW"
- "CM"
- "WBtW"
- "KftGV"
- "DoDk"
"image": "5. Mechanics/Bestiary/Construct/token/rug-of-smothering.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```