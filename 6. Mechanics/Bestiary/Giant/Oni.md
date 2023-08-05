---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/environment/urban
- monster/size/large
- monster/type/giant
statblock: true
statblock-link: "#^statblock"
"name": "Oni"
"size": "Large"
"type": "giant"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"stats":
- !!int "19"
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "15"
"speed": "walk 30 ft., fly 30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "3"
  "Wisdom": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "8"
  "Perception": !!int "4"
  "Arcana": !!int "5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Giant"
"cr": "7"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The oni's innate spellcasting ability is Charisma (spell save DC 13). The\
    \ oni can innately cast the following spells, requiring no material components:\n\
    \nAt will: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]]\n\
    \n1/day each: [[/6. Mechanics/Spells/charm-person.md\|charm person]], [cone of\
    \ cold](/compendium/spells/cone-of-cold.md), [[/6. Mechanics/Spells/gaseous-form.md\|gaseous form]],\
    \ [[/6. Mechanics/Spells/sleep.md\|sleep]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The oni's weapon attacks are magical."
  "name": "Magic Weapons"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The oni regains 10 hit points at the start of its turn if it has at least\
    \ 1 hit point."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The oni makes two attacks, either with its claws or its glaive."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage."
  "name": "Claw (Oni Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d10 + 4|avg (2d10 + 4) slashing damage, or 9 (dice: 1d10 +\
    \ 4|avg (1d10 + 4)) slashing damage in Small or Medium form."
  "name": "Glaive"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The oni magically polymorphs into a Small or Medium humanoid, into a Large\
    \ giant, or back into its true form. Other than its size, its statistics are the\
    \ same in each form. The only equipment that is transformed is its glaive, which\
    \ shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts\
    \ to its true form, and its glaive reverts to its normal size."
  "name": "Change Shape"
"source":
- "MM"
- "PotA"
- "SKT"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "EGW"
- "TCE"
- "WBtW"
- "JttRC"
- "KftGV"
"image": "/compendium/bestiary/giant/token/oni.png"
aliases: ["Oni"]
---
# Oni
*Source: Monster Manual p. 239, Princes of the Apocalypse, Storm King's Thunder, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Explorer's Guide to Wildemount, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight, Journeys through the Radiant Citadel, Keys from the Golden Vault*  

In nursery rhymes, oni are fearsome bogeymen that haunt the nightmares of children and adults alike, yet they are very real and always hungry. They find human babies especially delicious. Oni look like demonic ogres with blue or green skin, dark hair, and a pair of short ivory horns protruding from their foreheads. Their eyes are dark with strikingly white pupils, and their teeth and claws are jet black.

## Night Haunters

By the light of day, an oni hides its true form with magic, gaining the trust of those it intends to betray when darkness descends. These creatures can change their size as well as their shape, appearing as humanoids as they pass through towns, pretending to be travelers, woodcutters, or frontier folk. In such a form, an oni takes stock of the selection of humanoids in a settlement and devises ways to abduct and devour some of them.

## Magical Ogres

Oni are sometimes called ogre mages because of their innate magical ability. Though they are only distantly related to true ogres, they share the ogres' habit of joining forces with other evil creatures. An oni serves a master if doing so proves lucrative or provides it with a luxurious, well-defended home. Oni covet magic, and they work for evil wizards and hags in exchange for useful magic items.

> [!quote]- A quote from Children's rhyme  
> 
> Lock the door, blow out the light;
> 
> The hungry oni haunts the night.
> 
> Hide and tremble, little one;
> 
> The oni wants to have some fun.
> 
> Hear it scratching on the door;
> 
> See its shadow cross the floor.
> 
> The sun won't rise for quite a while;
> 
> Till then, beware the oni's smile.


## Stat Block

```ad-statblock
title: Oni
![[/6. Mechanics/Bestiary/Giant/Token/oni.png#token]]
*Large giant, Lawful Evil*

- **Armor Class** 16 ([[/6. Mechanics/Items/chain-mail.md\|chain mail]])
- **Hit Points** `dice: 13d10 + 39|text(110)` (13d10 + 39) 
- **Speed** walk 30 ft., fly 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|11 (+0)|16 (+3)|14 (+2)|12 (+1)|15 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +3, Constitution +6, Wisdom +4, Charisma +5
- **Skills** Arcana +5, Deception +8, Perception +4
- **Senses** darkvision 60 ft., passive Perception 14
- **Languages** Common, Giant
- **Challenge** 7

## Traits

***Magic Weapons.*** The oni's weapon attacks are magical.

***Regeneration.*** The oni regains 10 hit points at the start of its turn if it has at least 1 hit point.

***Innate Spellcasting.*** The oni's innate spellcasting ability is Charisma (spell save DC 13). The oni can innately cast the following spells, requiring no material components:

**At will**: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]]

**1/day each**: [[/6. Mechanics/Spells/charm-person.md\|charm person]], [[/6. Mechanics/Spells/cone-of-cold.md\|cone of cold]], [[/6. Mechanics/Spells/gaseous-form.md\|gaseous form]], [[/6. Mechanics/Spells/sleep.md\|sleep]]

## Actions

***Multiattack.*** The oni makes two attacks, either with its claws or its glaive.

***Claw (Oni Form Only).*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4` (`1d8 + 4`) slashing damage.

***Glaive.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 10 ft., one target. Hit: `dice: 2d10 + 4` (`2d10 + 4`) slashing damage, or 9 (`dice: 1d10 + 4` (`1d10 + 4`)) slashing damage in Small or Medium form.

***Change Shape.*** The oni magically polymorphs into a Small or Medium humanoid, into a Large giant, or back into its true form. Other than its size, its statistics are the same in each form. The only equipment that is transformed is its glaive, which shrinks so that it can be wielded in humanoid form. If the oni dies, it reverts to its true form, and its glaive reverts to its normal size.
```
^statblock

## Environment

forest, urban