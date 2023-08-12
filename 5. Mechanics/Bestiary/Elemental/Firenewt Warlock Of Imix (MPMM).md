---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/elemental
statblock: inline
---
# Firenewt Warlock of Imix
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 125, Volo's Guide to Monsters p. 143*  

Firenewts who serve Imix, Prince of Evil Fire, live in militaristic theocracies that revere elemental fire in its most destructive incarnation and promote aggression and cruelty. Firenewt warlocks of Imix lead these theocracies or serve as advisors to a high priest.

## Firenewts

Originally from the Elemental Plane of Fire, firenewts can be found on the Material Plane near hot springs and volcanoes. These amphibians need hot water to live, becoming sluggish after spending a week away from a source of moist heat. Firenewts therefore delve for sources of heat in the earth, and a firenewt lair features a network of channels and sluices to circulate hot liquid through the area.

## Stat Block

```statblock
"name": "Firenewt Warlock of Imix"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "9"
- !!int "11"
- !!int "14"
"speed": "walk 30 ft."
"damage_immunities": "fire"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Draconic, Ignan"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The firenewt casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [[/5. Mechanics/Spells/Guidance.md|guidance]],\
    \ [[/5. Mechanics/Spells/Light.md|light]], [[/5. Mechanics/Spells/Mage Armor.md|mage armor]],\
    \ [[/5. Mechanics/Spells/Mage Hand.md|mage hand]], [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The firenewt can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Magical darkness doesn't impede the firenewt's [[5. Mechanics/Rules/Senses.md#darkvision|darkvision]]."
  "name": "Devil's Sight"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When the firenewt reduces an enemy to 0 hit points, the firenewt gains\
    \ 5 temporary hit points."
  "name": "Imix's Blessing"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The firenewt makes three Morningstar or Fire Ray attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 1|avg (1d8 + 1) piercing damage."
  "name": "Morningstar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Spell Attack: dice: d20+4 (+4 to hit), range 120 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) fire damage."
  "name": "Fire Ray"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Elemental/token/firenewt-warlock-of-imix.png"
```
^statblock

## Environment

hill, mountain, underdark