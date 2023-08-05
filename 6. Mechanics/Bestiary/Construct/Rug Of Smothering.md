---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/large
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
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
"speed": "walk 10 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, frightened, paralyzed, petrified,\
  \ poisoned"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The rug is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]\
    \ while in the area of an [[/6. Mechanics/Spells/antimagic-field.md\|antimagic field]].\
    \ If targeted by [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], the rug must\
    \ succeed on a Constitution saving throw against the caster's spell save DC or\
    \ fall [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]] for 1 minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While it is grappling a creature, the rug takes only half the damage dealt\
    \ to it, and the creature [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]\
    \ by the rug takes the other half."
  "name": "Damage Transfer"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the rug remains motionless, it is indistinguishable from a normal\
    \ rug."
  "name": "False Appearance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one Medium\
    \ or smaller creature. Hit: The creature is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]\
    \ (escape DC 13). Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]],\
    \ [[6. Mechanics/Rules/conditions.md#blinded\|blinded]], and at risk of suffocating,\
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
"image": "/compendium/bestiary/construct/token/rug-of-smothering.png"
aliases: ["Rug of Smothering"]
---
# Rug of Smothering
*Source: Monster Manual p. 20, Curse of Strahd, Hoard of the Dragon Queen, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Ghosts of Saltmarsh, Dragon of Icespire Peak, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Explorer's Guide to Wildemount, Candlekeep Mysteries, The Wild Beyond the Witchlight, Keys from the Golden Vault*  

Would-be thieves and careless heroes arrive at the doorsteps of an enemy's abode, eyes and ears alert for traps, only to end their quest prematurely as the rugs beneath their feet animate and smother them to death.

A rug of smothering can be made in many different forms, from a finely woven carpet fit for a queen to a coarse mat in a peasant's hovel. Creatures with the ability to sense magic detect the rug's false magical aura.

In some cases, a rug of smothering is disguised as a carpet of flying or another beneficial magic item. However, a character who stands or sits on the rug, or who attempts to utter a word of command, is quickly trapped as the rug of smothering rolls itself tightly around its victim.

## Animated Objects

Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.

### Constructed Nature

An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

## Stat Block

```ad-statblock
title: Rug of Smothering
![[/6. Mechanics/Bestiary/Construct/Token/rug-of-smothering.png#token]]
*Large construct, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 6d10|text(33)` (6d10) 
- **Speed** walk 10 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|14 (+2)|10 (+0)| 1 (-5)| 3 (-4)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 6
- **Damage Immunities** poison, psychic
- **Condition Immunities** blinded, charmed, deafened, frightened, paralyzed, petrified, poisoned
- **Languages** —
- **Challenge** 2

## Traits

***Antimagic Susceptibility.*** The rug is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]] while in the area of an [[/6. Mechanics/Spells/antimagic-field.md\|antimagic field]]. If targeted by [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]] for 1 minute.

***Damage Transfer.*** While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] by the rug takes the other half.

***False Appearance.*** While the rug remains motionless, it is indistinguishable from a normal rug.

## Actions

***Smother.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one Medium or smaller creature. Hit: The creature is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 13). Until this grapple ends, the target is [[6. Mechanics/Rules/conditions.md#restrained\|restrained]], [[6. Mechanics/Rules/conditions.md#blinded\|blinded]], and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes `dice: 2d6 + 3` (`2d6 + 3`) bludgeoning damage.
```
^statblock