---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/underdark
- monster/environment/urban
- monster/size/large
- monster/type/fiend/devil
statblock: true
statblock-link: "#^statblock"
"name": "Orthon"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "17"
"hp": !!int "105"
"hit_dice": "10d10 + 50"
"stats":
- !!int "22"
- !!int "16"
- !!int "21"
- !!int "15"
- !!int "15"
- !!int "16"
"speed": "walk 30 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "11"
  "Perception": !!int "10"
  "Survival": !!int "10"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "charmed, exhaustion, poisoned"
"senses": "darkvision 120 ft., truesight 30 ft., passive Perception 20"
"languages": "Common, Infernal, telepathy 120 ft."
"cr": "10"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The orthon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 6|avg (2d4 + 6) force damage, and the target must make\
    \ a DC 17 Constitution saving throw, taking 22 (dice: 4d10|avg (4d10)) poison\
    \ damage on a failed save, or half as much damage on a successful one. On a failure,\
    \ the target is [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute.\
    \ The [poisoned](compendium/rules/conditions.md#poisoned) target can repeat the\
    \ saving throw at the end of each of its turns, ending the effect on itself on\
    \ a success."
  "name": "Infernal Dagger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+7 (+7 to hit), range 100/400 ft., one\
    \ target. Hit: dice: 2d10 + 3|avg (2d10 + 3) force damage. The target also\
    \ suffers one of the following effects of the orthon's choice; the orthon can't\
    \ use the same effect two rounds in a row:\n\n- Acid. The target must make\
    \ a DC 17 Constitution saving throw, taking an additional 17 (dice: 5d6|avg\
    \ (5d6)) acid damage on a failed save, or half as much damage on a successful\
    \ one.  \n- Blindness. The target takes dice: 1d10|avg (1d10) radiant\
    \ damage. In addition, the target and all other creatures within 20 feet of it\
    \ must each make a successful DC 17 Dexterity saving throw or be [blinded](compendium/rules/conditions.md#blinded)\
    \ until the end of the orthon's next turn.  \n- Concussion. The target and\
    \ each creature within 20 feet of it must make a DC 17 Constitution saving throw,\
    \ taking 13 (dice: 2d12|avg (2d12)) thunder damage on a failed save, or half\
    \ as much damage on a successful one.  \n- Entanglement. The target must make\
    \ a successful DC 17 Dexterity saving throw or be [restrained](compendium/rules/conditions.md#restrained)\
    \ for 1 hour by strands of sticky webbing. The target can escape by taking an\
    \ action to make a DC 17 Strength or Dexterity check and succeeding.  \n- Paralysis.\
    \ The target takes dice: 4d10|avg (4d10) lightning damage and must make a\
    \ successful DC 17 Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed)\
    \ for 1 minute. The [paralyzed](compendium/rules/conditions.md#paralyzed) target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success.  \n- Tracking. For the next 24 hours, the orthon\
    \ knows the direction and distance to the target, as long as it's on the same\
    \ plane of existence. If the target is on a different plane, the orthon knows\
    \ which one, but not the exact location there.  "
  "name": "Brass Crossbow"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The orthon becomes [invisible](compendium/rules/conditions.md#invisible).\
    \ Any equipment it wears or carries is also [invisible](compendium/rules/conditions.md#invisible)\
    \ as long as the equipment is on its person. This invisibility ends immediately\
    \ after it makes an attack roll or is hit by an attack roll."
  "name": "Invisibility Field (Recharge 4-6)"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "In response to dropping to 15 hit points or fewer, the orthon explodes.\
    \ All other creatures within 30 feet of it must each make a DC 17 Dexterity saving\
    \ throw, taking 9 (dice: 2d8|avg (2d8)) fire damage plus dice: 2d8|avg (2d8)\
    \ thunder damage on a failed save, or half as much damage on a successful one.\
    \ The orthon, its infernal dagger, and its brass crossbow are destroyed."
  "name": "Explosive Retribution"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/fiend/token/orthon.png"
aliases: ["Orthon"]
---
# Orthon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 205, Mordenkainen's Tome of Foes p. 169*  

When an archduke of the Nine Hells needs a creature tracked, found, and either done away with or captured, the task usually falls to an orthon. These devils are infernal bounty hunters, tireless in their pursuit of their quarry across the multiverse.

Orthons are infamous for their sharp senses. Because an orthon can become invisible at will, its quarry is often unaware of being hunted until the orthon strikes. This invisibility can be disrupted when the devil is attacked, however, so a strong counterattack is often the best defense against it.

Orthons value the challenge of the chase and the thrill of one-on-one combat above all else. An orthon's first loyalty is to its archduke, but one with no immediate assignment might work for anyone who promises it a worthy struggle against a lethal foe. Because they travel widely, orthons are unequaled as guides through the layers of the Nine Hells.

```ad-statblock
title: Orthon
![](/compendium/bestiary/fiend/token/orthon.png#token)
*Large fiend(devil), Lawful Evil*

- **Armor Class** 17 ([half plate](/compendium/items/half-plate-armor.md))
- **Hit Points** `dice: 10d10 + 50|text(105)` (10d10 + 50) 
- **Speed** walk 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|22 (+6)|16 (+3)|21 (+5)|15 (+2)|15 (+2)|16 (+3)|

- **Proficiency Bonus** +4
- **Saving Throws** Dexterity +7, Constitution +9, Wisdom +6
- **Skills** Perception +10, Stealth +11, Survival +10
- **Senses** darkvision 120 ft., truesight 30 ft., passive Perception 20
- **Damage Resistances** cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** fire, poison
- **Condition Immunities** charmed, exhaustion, poisoned
- **Languages** Common, Infernal, telepathy 120 ft.
- **Challenge** 10

## Traits

***Magic Resistance.*** The orthon has advantage on saving throws against spells and other magical effects.

## Actions

***Infernal Dagger.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 6|avg` (`2d4 + 6`) force damage, and the target must make a DC 17 Constitution saving throw, taking 22 (`dice: 4d10|avg` (`4d10`)) poison damage on a failed save, or half as much damage on a successful one. On a failure, the target is [poisoned](compendium/rules/conditions.md#poisoned) for 1 minute. The [poisoned](compendium/rules/conditions.md#poisoned) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Brass Crossbow.*** *Ranged Weapon Attack:* `dice: d20+7` (+7 to hit), range 100/400 ft., one target. Hit: `dice: 2d10 + 3|avg` (`2d10 + 3`) force damage. The target also suffers one of the following effects of the orthon's choice; the orthon can't use the same effect two rounds in a row:

- **Acid.** The target must make a DC 17 Constitution saving throw, taking an additional 17 (`dice: 5d6|avg` (`5d6`)) acid damage on a failed save, or half as much damage on a successful one.  
- **Blindness.** The target takes `dice: 1d10|avg` (`1d10`) radiant damage. In addition, the target and all other creatures within 20 feet of it must each make a successful DC 17 Dexterity saving throw or be [blinded](compendium/rules/conditions.md#blinded) until the end of the orthon's next turn.  
- **Concussion.** The target and each creature within 20 feet of it must make a DC 17 Constitution saving throw, taking 13 (`dice: 2d12|avg` (`2d12`)) thunder damage on a failed save, or half as much damage on a successful one.  
- **Entanglement.** The target must make a successful DC 17 Dexterity saving throw or be [restrained](compendium/rules/conditions.md#restrained) for 1 hour by strands of sticky webbing. The target can escape by taking an action to make a DC 17 Strength or Dexterity check and succeeding.  
- **Paralysis.** The target takes `dice: 4d10|avg` (`4d10`) lightning damage and must make a successful DC 17 Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed) for 1 minute. The [paralyzed](compendium/rules/conditions.md#paralyzed) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **Tracking.** For the next 24 hours, the orthon knows the direction and distance to the target, as long as it's on the same plane of existence. If the target is on a different plane, the orthon knows which one, but not the exact location there.  

## Bonus Actions

***Invisibility Field (Recharge 4-6).*** The orthon becomes [invisible](compendium/rules/conditions.md#invisible). Any equipment it wears or carries is also [invisible](compendium/rules/conditions.md#invisible) as long as the equipment is on its person. This invisibility ends immediately after it makes an attack roll or is hit by an attack roll.

## Reactions

***Explosive Retribution.*** In response to dropping to 15 hit points or fewer, the orthon explodes. All other creatures within 30 feet of it must each make a DC 17 Dexterity saving throw, taking 9 (`dice: 2d8|avg` (`2d8`)) fire damage plus `dice: 2d8|avg` (`2d8`) thunder damage on a failed save, or half as much damage on a successful one. The orthon, its infernal dagger, and its brass crossbow are destroyed.
```
^statblock

## Environment

desert, underdark, urban