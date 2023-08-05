---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/tce
- monster/size/large
- monster/type/fiend
statblock: true
statblock-link: "#^statblock"
"name": "Fiendish Spirit (Demon, 8th-Level Spell)"
"size": "Large"
"type": "fiend"
"alignment": "Unaligned"
"ac": !!int "20"
"hp": !!int "80"
"stats":
- !!int "13"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "10"
- !!int "16"
"speed": "walk 40 ft., climb 40 ft. (demon only), fly 60 ft. (devil only)"
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The fiend has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the fiend drops to 0 hit points or the spell ends, the fiend explodes,\
    \ and each creature within 10 feet of it must make a Dexterity saving throw against\
    \ your spell save DC. A creature takes 2d10 + summonSpellLevel fire damage on\
    \ a failed save, or half as much damage on a successful one."
  "name": "Death Throes (Demon Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Magical darkness doesn't impede the fiend's darkvision."
  "name": "Devil's Sight (Devil Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The fiend makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d12 + 3 + summonSpellLevel necrotic damage."
  "name": "Bite (Demon Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: the summoner's spell attack modifier to hit, reach\
    \ 5 ft., one target. Hit: 1d8 + 3 + summonSpellLevel slashing damage. Immediately\
    \ after the attack hits or misses, the fiend can magically teleport up to 30 feet\
    \ to an unoccupied space it can see."
  "name": "Claws (Yugoloth Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: the summoner's spell attack modifier to hit, range\
    \ 150 ft., one target. Hit: 2d6 + 3 + summonSpellLevel fire damage. If the target\
    \ is a flammable object that isn't being worn or carried, it also catches fire."
  "name": "Hurl Flame (Devil Only)"
"source":
- "TCE"
"image": "/compendium/bestiary/fiend/token/fiendish-spirit.png"
aliases: ["Fiendish Spirit (Demon, 8th-Level Spell)"]
---
# Fiendish Spirit (Demon, 8th-Level Spell)
*Source: Tasha's Cauldron of Everything p. 112*  

```ad-statblock
title: Fiendish Spirit (Demon, 8th-Level Spell)
![[/6. Mechanics/Bestiary/Fiend/Token/fiendish-spirit.png#token]]
*Large fiend, Unaligned*

- **Armor Class** 20 (natural armor)
- **Hit Points** 80  (50 + 15 for each spell level above 6th)
- **Speed** walk 40 ft., climb 40 ft. (demon only), fly 60 ft. (devil only)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|13 (+1)|16 (+3)|15 (+2)|10 (+0)|10 (+0)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** fire
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, Infernal, telepathy 60 ft.
- **Challenge** 

## Traits

***Magic Resistance.*** The fiend has advantage on saving throws against spells and other magical effects.

***Death Throes (Demon Only).*** When the fiend drops to 0 hit points or the spell ends, the fiend explodes, and each creature within 10 feet of it must make a Dexterity saving throw against your spell save DC. A creature takes `2d10 + summonSpellLevel` fire damage on a failed save, or half as much damage on a successful one.

***Devil's Sight (Devil Only).*** Magical darkness doesn't impede the fiend's darkvision.

## Actions

***Multiattack.*** The fiend makes a number of attacks equal to half this spell's level (rounded down).

***Bite (Demon Only).*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d12 + 3 + summonSpellLevel` necrotic damage.

***Claws (Yugoloth Only).*** *Melee Weapon Attack:* the summoner's spell attack modifier to hit, reach 5 ft., one target. Hit: `1d8 + 3 + summonSpellLevel` slashing damage. Immediately after the attack hits or misses, the fiend can magically teleport up to 30 feet to an unoccupied space it can see.

***Hurl Flame (Devil Only).*** *Ranged Spell Attack:* the summoner's spell attack modifier to hit, range 150 ft., one target. Hit: `2d6 + 3 + summonSpellLevel` fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire.
```
^statblock