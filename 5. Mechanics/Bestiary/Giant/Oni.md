---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: 'forest, urban'
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/7
  - monster/environment/forest
  - monster/environment/urban
  - monster/size/large
  - monster/type/giant
aliases:
  - Oni
---
# [[5. Mechanics\Bestiary\Giant\Oni.md|Oni]]
*Source: Monster Manual p. 239, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

In nursery rhymes, oni are fearsome bogeymen that haunt the nightmares of children and adults alike, yet they are very real and always hungry. They find human babies especially delicious. Oni look like demonic ogres with blue or green skin, dark hair, and a pair of short ivory horns protruding from their foreheads. Their eyes are dark with strikingly white pupils, and their teeth and claws are jet black.

## Night Haunters

By the light of day, an oni hides its true form with magic, gaining the trust of those it intends to betray when darkness descends. These creatures can change their size as well as their shape, appearing as humanoids as they pass through towns, pretending to be travelers, woodcutters, or frontier folk. In such a form, an oni takes stock of the selection of humanoids in a settlement and devises ways to abduct and devour some of them.

## Magical Ogres

Oni are sometimes called ogre mages because of their innate magical ability. Though they are only distantly related to true ogres, they share the ogres' habit of joining forces with other evil creatures. An oni serves a master if doing so proves lucrative or provides it with a luxurious, well-defended home. Oni covet magic, and they work for evil wizards and hags in exchange for useful magic items.

> [!quote] A quote from Children's rhyme  
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


```statblock
"name": "Oni"
"size": "Large"
"type": "giant"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "[[5. Mechanics/Items/Chain Mail.md|chain mail]]"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "11"
  - !!int "16"
  - !!int "14"
  - !!int "12"
  - !!int "15"
"speed": "30 ft., fly 30 ft."
"saves":
  - "dexterity": "+3"
  - "constitution": "+6"
  - "wisdom": "+4"
  - "charisma": "+5"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Giant"
"cr": "7"
"traits":
  - "desc": "The oni's innate spellcasting ability is Charisma (spell save DC 13).\
      \ The oni can innately cast the following spells, requiring no material components:\n\
      \nAt will: [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Invisibility.md|invisibility]]\n\
      \n1/day each: [[5. Mechanics/Spells/Charm Person.md|charm person]], [[5. Mechanics/Spells/Cone Of Cold.md|cone of\
      \ cold]], [[5. Mechanics/Spells/Gaseous Form.md|gaseous form]],\
      \ [[5. Mechanics/Spells/Sleep.md|sleep]]"
    "name": "Innate Spellcasting"
  - "desc": "The oni's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The oni regains 10 hit points at the start of its turn if it has at least\
      \ 1 hit point."
    "name": "Regeneration"
"actions":
  - "desc": "The oni makes two attacks, either with its claws or its glaive."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) slashing damage."
    "name": "Claw (Oni Form Only)"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15\
      \ (2d10 + 4) slashing damage, or 9 (1d10 + 4) slashing damage in Small or Medium\
      \ form."
    "name": "Glaive"
  - "desc": "The oni magically polymorphs into a Small or Medium humanoid, into a\
      \ Large giant, or back into its true form. Other than its size, its statistics\
      \ are the same in each form. The only equipment that is transformed is its glaive,\
      \ which shrinks so that it can be wielded in humanoid form. If the oni dies,\
      \ it reverts to its true form, and its glaive reverts to its normal size."
    "name": "Change Shape"
"source":
  - "MM"
  - "TCE"
"image": "5. Mechanics/Bestiary/Giant/token/oni.webp"
```
^statblock

## Environment

forest, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
