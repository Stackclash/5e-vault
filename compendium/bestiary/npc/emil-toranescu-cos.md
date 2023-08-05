---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/forest
- monster/environment/hill
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
statblock: true
statblock-link: "#^statblock"
"name": "Emil Toranescu"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "72"
"hit_dice": "9d8 + 18"
"stats":
- !!int "15"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "walk 30 ft. (40 ft. in wolf form)"
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 14"
"languages": "Common (can't speak in wolf form)"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Emil can use its action to polymorph into a wolf-humanoid hybrid or into\
    \ a wolf, or back into its true form, which is humanoid. Its statistics, other\
    \ than its AC, are the same in each form. Any equipment it is wearing or carrying\
    \ isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Emil has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Emil makes two attacks: two with its spear (humanoid form) or one with\
    \ its bite and one with its claws (hybrid form)."
  "name": "Multiattack (Humanoid or Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage. If the target is a humanoid,\
    \ it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf\
    \ lycanthropy."
  "name": "Bite (Wolf or Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d4 + 2|avg (2d4 + 2) slashing damage."
  "name": "Claws (Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one creature. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing\
    \ damage, or 6 (dice: 1d8 + 2|avg (1d8 + 2)) piercing damage if used with\
    \ two hands to make a melee attack."
  "name": "Spear (Humanoid Form Only)"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/emil-toranescu.png"
aliases: ["Emil Toranescu"]
---
# Emil Toranescu
*Source: Curse of Strahd p. 81, Derived from Werewolf (MM)*  

```ad-statblock
title: Emil Toranescu
![](/compendium/bestiary/npc/token/emil-toranescu.png#token)
*Medium humanoid(human, shapechanger), Chaotic Evil*

- **Armor Class** 11 (12 from natural armor in wolf or hybrid form)
- **Hit Points** `dice: 9d8 + 18|text(72)` (9d8 + 18) 
- **Speed** walk 30 ft. (40 ft. in wolf form)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|15 (+2)|13 (+1)|14 (+2)|10 (+0)|11 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +4
- **Senses** passive Perception 14
- **Damage Immunities** bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Languages** Common (can't speak in wolf form)
- **Challenge** 3

## Traits

***Shapechanger.*** Emil can use its action to polymorph into a wolf-humanoid hybrid or into a wolf, or back into its true form, which is humanoid. Its statistics, other than its AC, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.

***Keen Hearing and Smell.*** Emil has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing or smell.

## Actions

***Multiattack (Humanoid or Hybrid Form Only).*** Emil makes two attacks: two with its spear (humanoid form) or one with its bite and one with its claws (hybrid form).

***Bite (Wolf or Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage. If the target is a humanoid, it must succeed on a DC 12 Constitution saving throw or be cursed with werewolf lycanthropy.

***Claws (Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 2d4 + 2|avg` (`2d4 + 2`) slashing damage.

***Spear (Humanoid Form Only).*** *Melee or Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft. or range 20/60 ft., one creature. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage, or 6 (`dice: 1d8 + 2|avg` (`1d8 + 2`)) piercing damage if used with two hands to make a melee attack.
```
^statblock

## Environment

forest, hill