---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/size/large
- monster/type/fiend
statblock: true
statblock-link: "#^statblock"
"name": "Barghest"
"size": "Large"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "19"
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "14"
"speed": "walk 60 ft. (30 ft. in goblin form)"
"skillsaves":
  "Intimidation": !!int "4"
  "Deception": !!int "4"
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 15"
"languages": "Abyssal, Common, Goblin, Infernal, telepathy 60 ft."
"cr": "4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The barghest casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 12):\n\nAt will:\
    \ [[/6. Mechanics/Spells/levitate.md\|levitate]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]],\
    \ [[/6. Mechanics/Spells/pass-without-trace.md\|pass without trace]]\n\n1/day each:\
    \ [[/6. Mechanics/Spells/charm-person.md\|charm person]], [[/6. Mechanics/Spells/dimension-door.md\|dimension door]],\
    \ [[/6. Mechanics/Spells/suggestion.md\|suggestion]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the barghest starts its turn engulfed in flames that are at least\
    \ 10 feet high or wide, it must succeed on a DC 15 Charisma saving throw or be\
    \ instantly banished to Gehenna"
  "name": "Fire Banishment"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The barghest can feed on the corpse of a Fey or Humanoid it killed within\
    \ the past 10 minutes. This feeding takes at least 1 minute, and it destroys the\
    \ corpse. The victim's soul is trapped in the barghest for 24 hours, after which\
    \ time it is digested and the person is incapable of being revived. If the barghest\
    \ dies before the soul is digested, the soul is released. While a soul is trapped\
    \ in the barghest, any magic that tries to restore the soul to life has a 50%\
    \ chance chance of failing and being wasted."
  "name": "Soul Feeding"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The barghest makes one Bite attack and one Claw attack."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage."
  "name": "Claw"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The barghest transforms into a Small goblin or back into its true form.\
    \ Other than its size and speed, its statistics are the same in each form. Any\
    \ equipment it is wearing or carrying isn't transformed. The barghest reverts\
    \ to its true form if it dies."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/fiend/token/barghest.png"
aliases: ["Barghest"]
---
# Barghest
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 60, Volo's Guide to Monsters p. 123*  

Long ago, the god Maglubiyet—conqueror and then lord of early goblinoids—bargained with the General of Gehenna for aid. The General provided yugoloths, which then died in service to Maglubiyet. Yet when the time came to honor his part of the compact, Maglubiyet reneged on the deal. In vengeance, the General of Gehenna created the soul-devouring barghests to devour goblinoid souls.

The mission of every barghest, implanted in it by the General of Gehenna, is to consume souls. It eats these souls by devouring the bodies of those it kills, preferring goblinoids.

A barghest hungers for the day when it can complete its mission, return to Gehenna, and serve the General directly in his yugoloth legions, but it doesn't kill goblinoids indiscriminately. By devouring the souls of goblinoid leaders and other powerful individuals, a barghest earns elevated status in the afterlife. Barghests typically keep their true nature secret, preying on the occasional lone goblin when the opportunity arises, until they reach adulthood and are capable of seeking out stronger prey. A barghest avoids contact with large, open fires.

Any conflagration larger than its body acts as a gateway to Gehenna and banishes it to that plane, where it is likely to be slain or enslaved by a yugoloth for its failure.

```ad-statblock
title: Barghest
![[/6. Mechanics/Bestiary/Fiend/Token/barghest.png#token]]
*Large fiend, Neutral Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 8d10 + 16|text(60)` (8d10 + 16) 
- **Speed** walk 60 ft. (30 ft. in goblin form)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)|15 (+2)|14 (+2)|13 (+1)|12 (+1)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Deception +4, Intimidation +4, Perception +5, Stealth +4
- **Senses** blindsight 60 ft., darkvision 60 ft., passive Perception 15
- **Damage Resistances** cold; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** acid, poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, Common, Goblin, Infernal, telepathy 60 ft.
- **Challenge** 4

## Traits

***Fire Banishment.*** When the barghest starts its turn engulfed in flames that are at least 10 feet high or wide, it must succeed on a DC 15 Charisma saving throw or be instantly banished to Gehenna

***Soul Feeding.*** The barghest can feed on the corpse of a Fey or Humanoid it killed within the past 10 minutes. This feeding takes at least 1 minute, and it destroys the corpse. The victim's soul is trapped in the barghest for 24 hours, after which time it is digested and the person is incapable of being revived. If the barghest dies before the soul is digested, the soul is released. While a soul is trapped in the barghest, any magic that tries to restore the soul to life has a 50% chance chance of failing and being wasted.

***Spellcasting.*** The barghest casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 12):

**At will**: [[/6. Mechanics/Spells/levitate.md\|levitate]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]], [[/6. Mechanics/Spells/pass-without-trace.md\|pass without trace]]

**1/day each**: [[/6. Mechanics/Spells/charm-person.md\|charm person]], [[/6. Mechanics/Spells/dimension-door.md\|dimension door]], [[/6. Mechanics/Spells/suggestion.md\|suggestion]]

## Actions

***Multiattack.*** The barghest makes one Bite attack and one Claw attack.

***Bite.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 4` (`2d8 + 4`) piercing damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 4` (`1d8 + 4`) slashing damage.

## Bonus Actions

***Change Shape.*** The barghest transforms into a Small goblin or back into its true form. Other than its size and speed, its statistics are the same in each form. Any equipment it is wearing or carrying isn't transformed. The barghest reverts to its true form if it dies.
```
^statblock

## Environment

forest, grassland, hill, mountain, underdark