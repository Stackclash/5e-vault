---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/1
- monster/environment/hill
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/elemental
statblock: inline
aliases: ["Firenewt Warlock of Imix"]
---
# [Firenewt Warlock of Imix](compendium/bestiary/elemental/firenewt-warlock-of-imix-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 125, Volo's Guide to Monsters p. 143*

Firenewts who serve Imix, Prince of Evil Fire, live in militaristic theocracies that revere elemental fire in its most destructive incarnation and promote aggression and cruelty. Firenewt warlocks of Imix lead these theocracies or serve as advisors to a high priest.

## Firenewts

Originally from the Elemental Plane of Fire, firenewts can be found on the Material Plane near hot springs and volcanoes. These amphibians need hot water to live, becoming sluggish after spending a week away from a source of moist heat. Firenewts therefore delve for sources of heat in the earth, and a firenewt lair features a network of channels and sluices to circulate hot liquid through the area.

```statblock
"name": "Firenewt Warlock of Imix (MPMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Typically  Neutral Evil"
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
"speed": "30 ft."
"damage_immunities": "fire"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Draconic, Ignan"
"cr": "1"
"traits":
- "desc": "The firenewt casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [guidance](compendium/spells/guidance.md),\
    \ [light](compendium/spells/light.md), [mage armor](compendium/spells/mage-armor.md),\
    \ [mage hand](compendium/spells/mage-hand.md), [prestidigitation](compendium/spells/prestidigitation.md)"
  "name": "spells"
- "desc": "The firenewt can breathe air and water."
  "name": "Amphibious"
- "desc": "Magical darkness doesn't impede the firenewt's [darkvision](/compendium/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- "desc": "When the firenewt reduces an enemy to 0 hit points, the firenewt gains\
    \ 5 temporary hit points."
  "name": "Imix's Blessing"
"actions":
- "desc": "The firenewt makes three Morningstar or Fire Ray attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 1|avg (1d8 + 1) piercing damage."
  "name": "Morningstar"
- "desc": "Ranged Spell Attack: dice: d20+4 (+4 to hit), range 120 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) fire damage."
  "name": "Fire Ray"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/elemental/token/firenewt-warlock-of-imix-mpmm.webp"
```
^statblock

## Environment

hill, mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```