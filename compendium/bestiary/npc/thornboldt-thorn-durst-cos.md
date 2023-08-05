---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/underdark
- monster/environment/urban
- monster/size/small
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
"name": "Thornboldt Thorn Durst"
"size": "Small"
"type": "undead"
"alignment": "Lawful Good"
"ac": !!int "11"
"hp": !!int "35"
"hit_dice": "10d6"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "17"
"speed": "walk 0 ft., fly 40 ft. (hover)"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Common"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Thorn can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Thorn can move through other creatures and objects as if they were difficult\
    \ terrain. It takes dice: 1d10|avg (1d10) force damage if it ends its turn\
    \ inside an object."
  "name": "Incorporeal Movement"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 4d6 + 3|avg (4d6 + 3) necrotic damage."
  "name": "Withering Touch"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Thorn enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "One humanoid that Thorn can see within 5 feet of it must succeed on a DC\
    \ 13 Charisma saving throw or be possessed by Thorn; Thorn then disappears, and\
    \ the target is [incapacitated](compendium/rules/conditions.md#incapacitated)\
    \ and loses control of its body. Thorn now controls the body but doesn't deprive\
    \ the target of awareness. Thorn can't be targeted by any attack, spell, or other\
    \ effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [charmed](compendium/rules/conditions.md#charmed)\
    \ and [frightened](compendium/rules/conditions.md#frightened). It otherwise uses\
    \ the possessed target's statistics, but doesn't gain access to the target's knowledge,\
    \ class features, or proficiencies.\n\nThe possession lasts until the body drops\
    \ to 0 hit points, Thorn ends it as a bonus action, or Thorn is turned or forced\
    \ out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, Thorn reappears in an unoccupied space within\
    \ 5 feet of the body. The target is immune to this ghost's Possession for 24 hours\
    \ after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/thornboldt-thorn-durst.png"
aliases: ["Thornboldt Thorn Durst"]
---
# Thornboldt Thorn Durst
*Source: Curse of Strahd p. 217, Derived from Ghost (MM)*  

```ad-statblock
title: Thornboldt Thorn Durst
![](/compendium/bestiary/npc/token/thornboldt-thorn-durst.png#token)
*Small undead, Lawful Good*

- **Armor Class** 11 
- **Hit Points** `dice: 10d6|text(35)` (10d6) 
- **Speed** walk 0 ft., fly 40 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|13 (+1)|10 (+0)|10 (+0)|12 (+1)|17 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 11
- **Damage Resistances** acid; fire; lightning; thunder; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** cold, necrotic, poison
- **Condition Immunities** charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained
- **Languages** Common
- **Challenge** 3

## Traits

***Ethereal Sight.*** Thorn can see 60 feet into the Ethereal Plane when it is on the Material Plane, and vice versa.

***Incorporeal Movement.*** Thorn can move through other creatures and objects as if they were difficult terrain. It takes `dice: 1d10|avg` (`1d10`) force damage if it ends its turn inside an object.

## Actions

***Withering Touch.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 4d6 + 3|avg` (`4d6 + 3`) necrotic damage.

***Etherealness.*** Thorn enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane.

***Possession (Recharge 6).*** One humanoid that Thorn can see within 5 feet of it must succeed on a DC 13 Charisma saving throw or be possessed by Thorn; Thorn then disappears, and the target is [incapacitated](compendium/rules/conditions.md#incapacitated) and loses control of its body. Thorn now controls the body but doesn't deprive the target of awareness. Thorn can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being [charmed](compendium/rules/conditions.md#charmed) and [frightened](compendium/rules/conditions.md#frightened). It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.

The possession lasts until the body drops to 0 hit points, Thorn ends it as a bonus action, or Thorn is turned or forced out by an effect like the [dispel evil and good](/compendium/spells/dispel-evil-and-good.md) spell. When the possession ends, Thorn reappears in an unoccupied space within 5 feet of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends.
```
^statblock

## Environment

underdark, urban