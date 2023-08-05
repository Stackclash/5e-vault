---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
"name": "Bard"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "15"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "11"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "13"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
"skillsaves":
  "Perception": !!int "5"
  "Performance": !!int "6"
  "Acrobatics": !!int "4"
"senses": "passive Perception 15"
"languages": "any two languages"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bard casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)\n\
    \n1/day each: [charm person](/compendium/spells/charm-person.md), [invisibility](/compendium/spells/invisibility.md),\
    \ [sleep](/compendium/spells/sleep.md)"
  "name": "spells"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bard makes two Shortsword or Shortbow attacks. It can replace one attack\
    \ with a use of Spellcasting."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 80/320 ft., one\
    \ target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortbow"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each creature in a 15-foot cube originating from the bard must make a DC\
    \ 12 Constitution saving throw. On a failed save, a creature takes dice: 2d8|avg\
    \ (2d8) thunder damage and is pushed up to 10 feet away from the bard. On a\
    \ successful save, a creature takes half as much damage and isn't pushed."
  "name": "Cacophony (Recharge 4-6)"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The bard targets one creature within 30 feet of it. If the target can hear\
    \ the bard, the target must succeed on a DC 12 Charisma saving throw or have disadvantage\
    \ on ability checks, attack rolls, and saving throws until the start of the bard's\
    \ next turn."
  "name": "Taunt (2/Day)"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/humanoid/token/bard.png"
aliases: ["Bard"]
---
# Bard
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 59, Volo's Guide to Monsters p. 211*  

Bards are gifted poets, storytellers, and entertainers who travel far and wide. They're commonly found in taverns or in the company of jolly bands of adventurers, rough-and-tumble mercenaries, and wealthy patrons.

Each bard is a master of at least one type of performance. You may choose a bard's main type, or you may roll on the Bard [Performance](compendium/rules/skills.md#Performance) Types table to determine it.

**Bard Performance Types**

| dice: d10 | Performance Type |
|-----------|------------------|
| 1 | Poetry |
| 2 | Singing |
| 3 | Bagpipe |
| 4 | Flute |
| 5 | Dancing |
| 6 | Drum |
| 7 | Lute |
| 8 | Puppetry |
| 9 | Mime |
| 10 | Acting |
^bard-performance-types

```ad-statblock
title: Bard
![](/compendium/bestiary/humanoid/token/bard.png#token)
*Medium humanoid, Any alignment*

- **Armor Class** 15 ([chain shirt](/compendium/items/chain-shirt.md))
- **Hit Points** `dice: 8d8 + 8|text(44)` (8d8 + 8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|14 (+2)|12 (+1)|10 (+0)|13 (+1)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +4, Wisdom +3
- **Skills** Acrobatics +4, Perception +5, Performance +6
- **Senses** passive Perception 15
- **Languages** any two languages
- **Challenge** 2

***Spellcasting.*** The bard casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 12):

**At will**: [dancing lights](/compendium/spells/dancing-lights.md), [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)

**1/day each**: [charm person](/compendium/spells/charm-person.md), [invisibility](/compendium/spells/invisibility.md), [sleep](/compendium/spells/sleep.md)

## Actions

***Multiattack.*** The bard makes two Shortsword or Shortbow attacks. It can replace one attack with a use of Spellcasting.

***Shortsword.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.

***Shortbow.*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 80/320 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.

***Cacophony (Recharge 4-6).*** Each creature in a 15-foot cube originating from the bard must make a DC 12 Constitution saving throw. On a failed save, a creature takes `dice: 2d8|avg` (`2d8`) thunder damage and is pushed up to 10 feet away from the bard. On a successful save, a creature takes half as much damage and isn't pushed.

## Bonus Actions

***Taunt (2/Day).*** The bard targets one creature within 30 feet of it. If the target can hear the bard, the target must succeed on a DC 12 Charisma saving throw or have disadvantage on ability checks, attack rolls, and saving throws until the start of the bard's next turn.
```
^statblock

## Environment

urban