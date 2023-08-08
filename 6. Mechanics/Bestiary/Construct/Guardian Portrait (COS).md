---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/construct
statblock: inline
---
# Guardian Portrait
*Source: Curse of Strahd p. 227*  

A guardian portrait looks like a finely rendered and beautifully framed work of art, usually depicting someone important in a realistic manner. The picture and its frame are bound with powerful magic and are inseparable.

## Living Image

The eyes of the figure depicted in the painting are imbued with [[6. Mechanics/Rules/Senses.md#darkvision|darkvision]], and they appear to follow creatures that move in front of them.

## Innate Spells

When a guardian portrait attacks, the figure in the painting animates and moves as though alive (albeit in two dimensions). The guardian portrait has no effective melee attacks, but it has a repertoire of innate spells that it can cast. When it casts a spell, the figure painted on the canvas makes all the appropriate somatic gestures and verbal incantations for the spell.

## Stat Block

```statblock
"name": "Guardian Portrait"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "5"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "1"
- !!int "1"
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "10"
"speed": "walk 0 ft."
"damage_immunities": "poison"
"condition_immunities": "charmed, exhaustion, frightened, grappled, paralyzed, petrified,\
  \ poisoned, prone, restrained"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, plus up to two other languages"
"cr": "1"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The portrait's innate spellcasting ability is Intelligence (spell save\
    \ DC 12). The portrait can innately cast the following spells, requiring no material\
    \ components:\n\n3/day each: [[/6. Mechanics/Spells/Counterspell.md|counterspell]],\
    \ [[/6. Mechanics/Spells/Crown Of Madness.md|crown of madness]], [[/6. Mechanics/Spells/Hypnotic Pattern.md|hypnotic pattern]],\
    \ [[/6. Mechanics/Spells/Telekinesis.md|telekinesis]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "An animated object doesn't require air, food, drink, or sleep.\n\nThe magic\
    \ that animates an object is dispelled when the construct drops to 0 hit points.\
    \ An animated object reduced to 0 hit points becomes inanimate and is too damaged\
    \ to be of much use or value to anyone."
  "name": "Constructed Nature"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The portrait is [[6. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ while in the area of an [[/6. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
    \ If targeted by [[/6. Mechanics/Spells/Dispel Magic.md|dispel magic]], the portrait\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or become [[6. Mechanics/Rules/Conditions.md#unconscious|unconscious]] for 1\
    \ minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the figure in the portrait remains motionless, the portrait is indistinguishable\
    \ from a normal painting."
  "name": "False Appearance"
"source":
- "CoS"
"image": "6. Mechanics/Bestiary/Construct/token/guardian-portrait.png"
```
^statblock