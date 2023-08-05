---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/dusk-elf
statblock: true
statblock-link: "#^statblock"
"name": "Kasimir Velikov"
"size": "Medium"
"type": "humanoid"
"subtype": "Dusk elf"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "9"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "12"
- !!int "11"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any four languages"
"cr": "6"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Kasimir is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). Kasimir has\
    \ the following wizard spells prepared:\n\nCantrips (at will): [fire bolt](/compendium/spells/fire-bolt.md),\
    \ [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md),\
    \ [prestidigitation](/compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ 1st-level slots): [detect magic](/compendium/spells/detect-magic.md), [mage\
    \ armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md),\
    \ [shield](/compendium/spells/shield.md)\n\n2nd level (3 2nd-level slots):\
    \ [misty step](/compendium/spells/misty-step.md), [suggestion](/compendium/spells/suggestion.md)\n\
    \n3rd level (3 3rd-level slots): [counterspell](/compendium/spells/counterspell.md),\
    \ [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)\n\
    \n4th level (3 4th-level slots): [greater invisibility](/compendium/spells/greater-invisibility.md),\
    \ [ice storm](/compendium/spells/ice-storm.md)\n\n5th level (1 5th-level slots):\
    \ [cone of cold](/compendium/spells/cone-of-cold.md)"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Kasimir has advantage on saving throws against being [charmed](compendium/rules/conditions.md#charmed),\
    \ and magic can't put the him to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Kasimir wears a [ring of warmth](/compendium/items/ring-of-warmth.md) and\
    \ carries a spellbook containing all the spells he has prepared plus the following\
    \ spells: [arcane lock](/compendium/spells/arcane-lock.md), [comprehend languages](/compendium/spells/comprehend-languages.md),\
    \ [hold person](/compendium/spells/hold-person.md), [identify](/compendium/spells/identify.md),\
    \ [locate object](/compendium/spells/locate-object.md), [nondetection](/compendium/spells/nondetection.md),\
    \ [polymorph](/compendium/spells/polymorph.md), [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md),\
    \ and [wall of stone](/compendium/spells/wall-of-stone.md)."
  "name": "Special Equipment"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/kasimir-velikov.png"
aliases: ["Kasimir Velikov"]
---
# Kasimir Velikov
*Source: Curse of Strahd p. 233, Derived from Mage (MM)*  

```ad-statblock
title: Kasimir Velikov
![](/compendium/bestiary/npc/token/kasimir-velikov.png#token)
*Medium humanoid(Dusk elf), Neutral*

- **Armor Class** 12 (15 with [mage armor](/compendium/spells/mage-armor.md))
- **Hit Points** `dice: 9d8|text(40)` (9d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 9 (-1)|14 (+2)|11 (+0)|17 (+3)|12 (+1)|11 (+0)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +6, Wisdom +4
- **Skills** Arcana +6, History +6
- **Senses** darkvision 60 ft., passive Perception 11
- **Languages** any four languages
- **Challenge** 6

## Traits

***Fey Ancestry.*** Kasimir has advantage on saving throws against being [charmed](compendium/rules/conditions.md#charmed), and magic can't put the him to sleep.

***Special Equipment.*** Kasimir wears a [ring of warmth](/compendium/items/ring-of-warmth.md) and carries a spellbook containing all the spells he has prepared plus the following spells: [arcane lock](/compendium/spells/arcane-lock.md), [comprehend languages](/compendium/spells/comprehend-languages.md), [hold person](/compendium/spells/hold-person.md), [identify](/compendium/spells/identify.md), [locate object](/compendium/spells/locate-object.md), [nondetection](/compendium/spells/nondetection.md), [polymorph](/compendium/spells/polymorph.md), [protection from evil and good](/compendium/spells/protection-from-evil-and-good.md), and [wall of stone](/compendium/spells/wall-of-stone.md).

***Spellcasting.*** Kasimir is a 9th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 14, `dice: d20+6` (+6 to hit) with spell attacks). Kasimir has the following wizard spells prepared:

**Cantrips (at will)**: [fire bolt](/compendium/spells/fire-bolt.md), [light](/compendium/spells/light.md), [mage hand](/compendium/spells/mage-hand.md), [prestidigitation](/compendium/spells/prestidigitation.md)

**1st level (4 1st-level slots)**: [detect magic](/compendium/spells/detect-magic.md), [mage armor](/compendium/spells/mage-armor.md), [magic missile](/compendium/spells/magic-missile.md), [shield](/compendium/spells/shield.md)

**2nd level (3 2nd-level slots)**: [misty step](/compendium/spells/misty-step.md), [suggestion](/compendium/spells/suggestion.md)

**3rd level (3 3rd-level slots)**: [counterspell](/compendium/spells/counterspell.md), [fireball](/compendium/spells/fireball.md), [fly](/compendium/spells/fly.md)

**4th level (3 4th-level slots)**: [greater invisibility](/compendium/spells/greater-invisibility.md), [ice storm](/compendium/spells/ice-storm.md)

**5th level (1 5th-level slots)**: [cone of cold](/compendium/spells/cone-of-cold.md)

## Actions

***Dagger.*** *Melee or Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft. or range 20/60 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage.
```
^statblock

## Environment

urban