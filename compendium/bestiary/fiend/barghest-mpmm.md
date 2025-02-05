---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: forest, grassland, hill, mountain, underdark
size: Large
tags:
- compendium/src/5e/mpmm
- monster/cr/4
- monster/environment/forest
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/size/large
- monster/type/fiend
aliases: ["Barghest"]
---
# [Barghest](compendium\bestiary\fiend/barghest-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 60, Volo's Guide to Monsters p. 123*

Long ago, the god Maglubiyet—conqueror and then lord of early goblinoids—bargained with the General of Gehenna for aid. The General provided yugoloths, which then died in service to Maglubiyet. Yet when the time came to honor his part of the compact, Maglubiyet reneged on the deal. In vengeance, the General of Gehenna created the soul-devouring barghests to devour goblinoid souls.

The mission of every barghest, implanted in it by the General of Gehenna, is to consume souls. It eats these souls by devouring the bodies of those it kills, preferring goblinoids.

A barghest hungers for the day when it can complete its mission, return to Gehenna, and serve the General directly in his yugoloth legions, but it doesn't kill goblinoids indiscriminately. By devouring the souls of goblinoid leaders and other powerful individuals, a barghest earns elevated status in the afterlife. Barghests typically keep their true nature secret, preying on the occasional lone goblin when the opportunity arises, until they reach adulthood and are capable of seeking out stronger prey. A barghest avoids contact with large, open fires.

Any conflagration larger than its body acts as a gateway to Gehenna and banishes it to that plane, where it is likely to be slain or enslaved by a yugoloth for its failure.

```statblock
"name": "Barghest (MPMM)"
"size": "Large"
"type": "fiend"
"alignment": "Typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "19"
- !!int "15"
- !!int "14"
- !!int "13"
- !!int "12"
- !!int "14"
"speed": "60 ft. (30 ft. in goblin form)"
"skillsaves":
  "Intimidation": !!int "4"
  "Deception": !!int "4"
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_resistances": "cold; lightning; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 15"
"languages": "Abyssal, Common, Goblin, Infernal, telepathy 60 ft."
"cr": "4"
"traits":
- "desc": "The barghest casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 12):\n\nAt will:\
    \ [levitate](compendium/spells/levitate.md), [minor illusion](compendium/spells/minor-illusion.md),\
    \ [pass without trace](compendium/spells/pass-without-trace.md)\n\n1/day each:\
    \ [charm person](compendium/spells/charm-person.md), [dimension door](compendium/spells/dimension-door.md),\
    \ [suggestion](compendium/spells/suggestion.md)"
  "name": "Spellcasting"
- "desc": "When the barghest starts its turn engulfed in flames that are at least\
    \ 10 feet high or wide, it must succeed on a DC 15 Charisma saving throw or be\
    \ instantly banished to Gehenna"
  "name": "Fire Banishment"
- "desc": "The barghest can feed on the corpse of a Fey or Humanoid it killed within\
    \ the past 10 minutes. This feeding takes at least 1 minute, and it destroys the\
    \ corpse. The victim's soul is trapped in the barghest for 24 hours, after which\
    \ time it is digested and the person is incapable of being revived. If the barghest\
    \ dies before the soul is digested, the soul is released. While a soul is trapped\
    \ in the barghest, any magic that tries to restore the soul to life has a 50 percent\
    \ chance of failing and being wasted."
  "name": "Soul Feeding"
"actions":
- "desc": "The barghest makes one Bite attack and one Claw attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) slashing damage."
  "name": "Claw"
"bonus_actions":
- "desc": "The barghest transforms into a Small goblin or back into its true form.\
    \ Other than its size and speed, its statistics are the same in each form. Any\
    \ equipment it is wearing or carrying isn't transformed. The barghest reverts\
    \ to its true form if it dies."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/fiend/token/barghest-mpmm.webp"
```
^statblock

## Environment

forest, grassland, hill, mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```