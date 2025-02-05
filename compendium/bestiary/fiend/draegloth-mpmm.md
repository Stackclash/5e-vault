---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: underdark
size: Large
tags:
- compendium/src/5e/mpmm
- monster/cr/7
- monster/environment/underdark
- monster/size/large
- monster/type/fiend/demon
aliases: ["Draegloth"]
---
# [Draegloth](compendium\bestiary\fiend/draegloth-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 98, Volo's Guide to Monsters p. 141*

A draegloth is a demon created by an elf priest of Lolth in an unholy, dangerous ritual in which it is infused with the fey essence of the creator and the fiendish essence of a [glabrezu](compendium/bestiary/fiend/glabrezu.md). This ritual rarely succeeds, but Lolth's faithful consider it worth the risk, as the resulting creature is gifted with innate magic and physical might. The draegloth usually serves its creator, lending its thirst for destruction to the creator's plans to triumph over rivals.

A draegloth is an ogre-sized, four-armed biped with purple skin and pale hair. Two of its arms are muscular, tipped with sharp claws; the other two are the size and shape of an elf's arms, capable of delicate movements. Although the creature is heavily muscled, it is graceful like an elf. Its bestial face features glowing red eyes, a doglike snout, and a mouth full of sharp teeth.

Among the drow noble houses of Menzoberranzan in the Forgotten Realms, a high priestess's successful creation of a draegloth is seen as a sign of Lolth's favor toward her house—and a sign of the demon lord's disregard for the family's rivals, who were not thus gifted. The creation prompts the leaders of the house to begin crafting new plans to strike at its rivals when the draegloth is fully grown. These plans use the draegloth in a significant role, because its abilities can turn the tide in a battle against a house that doesn't have a draegloth of its own.

Although draegloths plays an important part in the plans of Lolth's cult, a draegloth can't rise above the status of a favored servant to a priest in that cult. Before a draegloth is given any duties, it receives instruction in accepting the role set for it and not challenging authority. Most draegloths fiercely resent being given orders, but thanks to their training, they typically take out their frustration on their creator's enemies, rather than on their creator. A draegloth that can't suppress its ambitions might abandon its creator and strike out on its own. Whether these rebellious draegloths are part of Lolth's plan for sowing chaos is unclear.

```statblock
"name": "Draegloth (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"stats":
- !!int "20"
- !!int "15"
- !!int "18"
- !!int "13"
- !!int "11"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Perception": !!int "3"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Abyssal, Elvish, Undercommon"
"cr": "7"
"traits":
- "desc": "The draegloth casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 11):\n\
    \nAt will: [dancing lights](compendium/spells/dancing-lights.md), [darkness](compendium/spells/darkness.md)\n\
    \n1/day each: [confusion](compendium/spells/confusion.md), [faerie fire](compendium/spells/faerie-fire.md)"
  "name": "Spellcasting"
- "desc": "The draegloth has advantage on saving throws against being [charmed](/compendium/rules/conditions.md#Charmed),\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
"actions":
- "desc": "The draegloth makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 16\
    \ (2d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10\
    \ + 5) slashing damage."
  "name": "Claw"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/fiend/token/draegloth-mpmm.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```