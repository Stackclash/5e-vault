---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/cleric
- monster/type/humanoid/elf
statblock: true
statblock-link: "#^statblock"
"name": "Drow Matron Mother"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, elf"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "247"
"hit_dice": "33d8 + 99"
"stats":
- !!int "12"
- !!int "18"
- !!int "16"
- !!int "17"
- !!int "21"
- !!int "22"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "11"
  "Constitution": !!int "9"
"skillsaves":
  "Stealth": !!int "10"
  "Religion": !!int "9"
  "Insight": !!int "11"
  "Perception": !!int "11"
"condition_immunities": "charmed, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "Elvish, Undercommon"
"cr": "20"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 20):\n\nAt will:\
    \ [[/6. Mechanics/Spells/command.md\|command]], [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]],\
    \ [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/thaumaturgy.md\|thaumaturgy]]\n\
    \n1/day each: [[/6. Mechanics/Spells/clairvoyance.md\|clairvoyance]], [[/6. Mechanics/Spells/darkness.md\|darkness]],\
    \ [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]],\
    \ [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]], [[/6. Mechanics/Spells/gate.md\|gate]],\
    \ [[/6. Mechanics/Spells/levitate.md\|levitate]] (self only), [[/6. Mechanics/Spells/suggestion.md\|suggestion]]\n\
    \n2/day each: [[/6. Mechanics/Spells/banishment.md\|banishment]], [[/6. Mechanics/Spells/blade-barrier.md\|blade barrier]],\
    \ [[/6. Mechanics/Spells/cure-wounds.md\|cure wounds]], [[/6. Mechanics/Spells/hold-person.md\|hold person]],\
    \ [[/6. Mechanics/Spells/plane-shift.md\|plane shift]], [[/6. Mechanics/Spells/silence.md\|silence]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow wields a [[/6. Mechanics/Items/tentacle-rod.md\|tentacle rod]]."
  "name": "Special Equipment"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow makes two Demon Staff attacks or one Demon Staff attack and three\
    \ Tentacle Rod attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) bludgeoning damage, or 8 (dice: 1d8 +\
    \ 4|avg (1d8 + 4)) bludgeoning damage if used with two hands, plus dice: 4d6|avg\
    \ (4d6) psychic damage. The target must succeed on a DC 19 Wisdom saving throw\
    \ or become [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] of the drow\
    \ for 1 minute. The [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Demon Staff"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 15 ft., one creature.\
    \ Hit: dice: 1d6|avg (1d6) bludgeoning damage. If the target is hit three\
    \ times by the [[/6. Mechanics/Items/tentacle-rod.md\|rod]] on one turn, the target\
    \ must succeed on a DC 15 Constitution saving throw or suffer the following effects\
    \ for 1 minute: the target's speed is halved, it has disadvantage on Dexterity\
    \ saving throws, and it can't use reactions. Moreover, on each of its turns, it\
    \ can take either an action or a bonus action, but not both. At the end of each\
    \ of its turns, it can repeat the saving throw, ending the effect on itself on\
    \ a success."
  "name": "Tentacle Rod"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A 10-foot-radius, 40-foot-high column of divine fire sprouts in an area\
    \ up to 120 feet away from the drow. Each creature in the column must make a DC\
    \ 20 Dexterity saving throw, taking 14 (dice: 4d6|avg (4d6)) fire damage and\
    \ 14 (dice: 4d6|avg (4d6)) radiant damage on a failed save, or half as much\
    \ damage on a successful one."
  "name": "Divine Flame (2/Day)"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow bestows the Spider Queen's blessing on one ally she can see within\
    \ 30 feet of her. The ally takes dice: 2d6|avg (2d6) psychic damage but has\
    \ advantage on the next attack roll it makes before the end of its next turn."
  "name": "Lolth's Fickle Favor"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow magically summons a [[/6. Mechanics/Bestiary/Fiend/Glabrezu.md\|glabrezu]]\
    \ or a [[/6. Mechanics/Bestiary/Fiend/Yochlol.md\|yochlol]]. The summoned creature\
    \ appears in an unoccupied space within 60 feet of its summoner, acts as an ally\
    \ of its summoner, and can't summon other demons. It remains for 10 minutes, until\
    \ it or its summoner dies, or until its summoner dismisses it as an action."
  "name": "Summon Servant (1/Day)"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "An allied demon within 30 feet of the drow uses its reaction to make one\
    \ attack against a target of the drow's choice that she can see."
  "name": "Compel Demon"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow makes one Demon Staff attack."
  "name": "Demon Staff"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/humanoid/token/drow-matron-mother.png"
aliases: ["Drow Matron Mother"]
---
# Drow Matron Mother
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 104, Mordenkainen's Tome of Foes p. 186*  

Among drow followers of Lolth, each noble house is led by a matron mother, an influential priestess of Lolth charged with carrying out the god's will while also advancing the interests of the family. Matron mothers embody the scheming and treachery associated with the Queen of Spiders. Each stands at the center of a vast conspiratorial web, with demons, spiders, and conscripted soldiers positioned between them and their enemies. Although matron mothers command great power, that power depends on maintaining the Spider Queen's favor, and the goddess sometimes capriciously takes back what she has given. The stat block here represents a matron mother at the height of her power.

A matron mother is almost never encountered alone. She is typically accompanied by a [[/6. Mechanics/Bestiary/Humanoid/Drow Favored Consort (MPMM).md\|drow favored consort]] and a [[/6. Mechanics/Bestiary/Humanoid/Drow House Captain (MPMM).md\|drow house captain]], each of whom appears in this book. Other Underdark creatures might also be in the priestess's presence, providing protection or advice.

## Mothers of Rebellion

Some matron mothers renounce Lolth and join the war against their former goddess. Such drow could be of any alignment, and they lose the following abilities in the stat block: Lolth's Fickle Favor, Summon Servant, and Compel Demon. Even without these abilities, drow matron mothers are formidable opponents, and several of them hold positions of great influence in the Underdark armies arrayed against the followers of Lolth.

## A Matron Mother's Lair

The palace of a drow matron mother is her home and fortress. Sigils throughout the building allow the matron mother to use the following lair actions while within it.

Any temple of Lolth also functions as a matron mother's lair while she is inside it, unless she has renounced Lolth or another matron mother is present. When two or more matron mothers gather within a temple of their goddess, none of them can use it as their lair.

## Stat Block

```ad-statblock
title: Drow Matron Mother
![[/6. Mechanics/Bestiary/Humanoid/Token/drow-matron-mother.png#token]]
*Medium humanoid(cleric, elf), Neutral Evil*

- **Armor Class** 17 ([[/6. Mechanics/Items/half-plate-armor.md\|half plate]])
- **Hit Points** `dice: 33d8 + 99|text(247)` (33d8 + 99) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|18 (+4)|16 (+3)|17 (+3)|21 (+5)|22 (+6)|

- **Proficiency Bonus** +6
- **Saving Throws** Constitution +9, Wisdom +11, Charisma +12
- **Skills** Insight +11, Perception +11, Religion +9, Stealth +10
- **Senses** darkvision 120 ft., passive Perception 21
- **Condition Immunities** charmed, frightened, poisoned
- **Languages** Elvish, Undercommon
- **Challenge** 20

## Traits

***Fey Ancestry.*** The drow has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]], and magic can't put the drow to sleep.

***Special Equipment.*** The drow wields a [[/6. Mechanics/Items/tentacle-rod.md\|tentacle rod]].

***Sunlight Sensitivity.*** While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

***Spellcasting.*** The drow casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 20):

**At will**: [[/6. Mechanics/Spells/command.md\|command]], [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]], [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/thaumaturgy.md\|thaumaturgy]]

**1/day each**: [[/6. Mechanics/Spells/clairvoyance.md\|clairvoyance]], [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]], [[/6. Mechanics/Spells/gate.md\|gate]], [[/6. Mechanics/Spells/levitate.md\|levitate]] (self only), [[/6. Mechanics/Spells/suggestion.md\|suggestion]]

**2/day each**: [[/6. Mechanics/Spells/banishment.md\|banishment]], [[/6. Mechanics/Spells/blade-barrier.md\|blade barrier]], [[/6. Mechanics/Spells/cure-wounds.md\|cure wounds]], [[/6. Mechanics/Spells/hold-person.md\|hold person]], [[/6. Mechanics/Spells/plane-shift.md\|plane shift]], [[/6. Mechanics/Spells/silence.md\|silence]]

## Actions

***Multiattack.*** The drow makes two Demon Staff attacks or one Demon Staff attack and three Tentacle Rod attacks.

***Demon Staff.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 4` (`1d6 + 4`) bludgeoning damage, or 8 (`dice: 1d8 + 4` (`1d8 + 4`)) bludgeoning damage if used with two hands, plus `dice: 4d6` (`4d6`) psychic damage. The target must succeed on a DC 19 Wisdom saving throw or become [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] of the drow for 1 minute. The [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Tentacle Rod.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 15 ft., one creature. Hit: `dice: 1d6` (`1d6`) bludgeoning damage. If the target is hit three times by the [[/6. Mechanics/Items/tentacle-rod.md\|rod]] on one turn, the target must succeed on a DC 15 Constitution saving throw or suffer the following effects for 1 minute: the target's speed is halved, it has disadvantage on Dexterity saving throws, and it can't use reactions. Moreover, on each of its turns, it can take either an action or a bonus action, but not both. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success.

***Divine Flame (2/Day).*** A 10-foot-radius, 40-foot-high column of divine fire sprouts in an area up to 120 feet away from the drow. Each creature in the column must make a DC 20 Dexterity saving throw, taking 14 (`dice: 4d6` (`4d6`)) fire damage and 14 (`dice: 4d6` (`4d6`)) radiant damage on a failed save, or half as much damage on a successful one.

## Bonus Actions

***Lolth's Fickle Favor.*** The drow bestows the Spider Queen's blessing on one ally she can see within 30 feet of her. The ally takes `dice: 2d6` (`2d6`) psychic damage but has advantage on the next attack roll it makes before the end of its next turn.

***Summon Servant (1/Day).*** The drow magically summons a [[/6. Mechanics/Bestiary/Fiend/Glabrezu.md\|glabrezu]] or a [[/6. Mechanics/Bestiary/Fiend/Yochlol.md\|yochlol]]. The summoned creature appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action.

## Legendary Actions

***Compel Demon.*** An allied demon within 30 feet of the drow uses its reaction to make one attack against a target of the drow's choice that she can see.

***Demon Staff.*** The drow makes one Demon Staff attack.

***Cast a Spell (Costs 2 Actions).*** The drow uses Spellcasting.

## Lair actions

On initiative count 20 (losing initiative ties), the drow can take one of the following lair actions when in her lair; she can't take the same lair action two rounds in a row:

- **Perceive Interlopers.** The drow projects her mind throughout her lair, marking any potential threats against her or her retinue. Until initiative count 20 of the next round, hostile creatures within the lair can't become hidden from her and gain no benefit from the [[6. Mechanics/Rules/conditions.md#invisible\|invisible]] condition against her.  
- **Spectral Web.** A glistening spectral spider web erupts from a point the drow can see within 120 feet of her. Each creature within 60 feet of that point must succeed a DC 19 Dexterity saving throw or be [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **Telekinetic Throw.** The drow targets one creature she can see within 60 feet of her and attempts to expel it from her presence. The target must succeed on a DC 19 Strength saving throw or be flung `2d6 × 10` feet through the air. A creature smashed into a solid object takes `dice: 1d6` (`1d6`) bludgeoning damage for every 10 feet moved. If released in midair, the creature takes falling damage as normal.  
```
^statblock

## Environment

underdark