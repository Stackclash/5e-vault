---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/size/large
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
"name": "Shoosuva"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "18"
- !!int "13"
- !!int "17"
- !!int "7"
- !!int "14"
- !!int "9"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "5"
  "Constitution": !!int "6"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Abyssal, Gnoll, telepathy 120 ft."
"cr": "8"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The shoosuva makes one Bite attack and one Tail Stinger attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 4d10 + 4|avg (4d10 + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 15 ft., one creature.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) piercing damage, and the target must succeed\
    \ on a DC 14 Constitution saving throw or become [poisoned](compendium/rules/conditions.md#poisoned).\
    \ While [poisoned](compendium/rules/conditions.md#poisoned) in this way, the target\
    \ is also [paralyzed](compendium/rules/conditions.md#paralyzed). The target can\
    \ repeat the saving throw at the end of each of its turns, ending the effect on\
    \ itself on a success."
  "name": "Tail Stinger"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When it reduces a creature to 0 hit points with a melee attack on its turn,\
    \ the shoosuva can move up to half its speed and make one Bite attack."
  "name": "Rampage"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/fiend/token/shoosuva.png"
aliases: ["Shoosuva"]
---
# Shoosuva
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 216, Volo's Guide to Monsters p. 137*  

> [!quote]- A quote from Mordenkainen  
> 
> What? Are you expecting me to comment on these creatures? Fine, how's this: a loyal pet deserves a loyal pet.

> [!quote]- A quote from Tasha  
> 
> Trust Mordenkainen to look down on any sort of companionship—even the slavering, venomous, demonic puppy kind.

A shoosuva is a hyena-demon gifted by [Yeenoghu](/compendium/bestiary/npc/yeenoghu-mpmm.md) to an especially powerful worshiper (typically a [fang of Yeenoghu](/compendium/bestiary/fiend/gnoll-fang-of-yeenoghu.md)). A shoosuva manifests shortly after a Yeenoghu-worshiping war band achieves a great victory, emerging from a billowing, fetid cloud of smoke as it arrives from the Abyss. In battle, the demon wraps its slavering jaws around one victim while lashing out with the poisonous stinger on its tail to bring down another. A creature immobilized by the poison becomes easy pickings for any nearby members of the war band.

Each shoosuva is bonded to a particular worshiper of Yeenoghu and fights alongside its master. A gnoll that has been gifted with a shoosuva is second only to a flind in status within a war band dedicated to Yeenoghu.

```ad-statblock
title: Shoosuva
![](/compendium/bestiary/fiend/token/shoosuva.png#token)
*Large fiend(demon), Chaotic Evil*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 16d10 + 48|text(136)` (16d10 + 48) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|13 (+1)|17 (+3)| 7 (-2)|14 (+2)| 9 (-1)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +4, Constitution +6, Wisdom +5
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 12
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison
- **Condition Immunities** charmed, frightened, poisoned
- **Languages** Abyssal, Gnoll, telepathy 120 ft.
- **Challenge** 8

## Actions

***Multiattack.*** The shoosuva makes one Bite attack and one Tail Stinger attack.

***Bite.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 4d10 + 4|avg` (`4d10 + 4`) piercing damage.

***Tail Stinger.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 15 ft., one creature. Hit: `dice: 2d8 + 4|avg` (`2d8 + 4`) piercing damage, and the target must succeed on a DC 14 Constitution saving throw or become [poisoned](compendium/rules/conditions.md#poisoned). While [poisoned](compendium/rules/conditions.md#poisoned) in this way, the target is also [paralyzed](compendium/rules/conditions.md#paralyzed). The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

## Bonus Actions

***Rampage.*** When it reduces a creature to 0 hit points with a melee attack on its turn, the shoosuva can move up to half its speed and make one Bite attack.
```
^statblock

## Environment

coastal, forest, grassland, hill