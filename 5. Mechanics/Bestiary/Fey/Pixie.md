---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: forest
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/1-4
  - monster/environment/forest
  - monster/size/tiny
  - monster/type/fey
aliases:
  - Pixie
---
# [[5. Mechanics\Bestiary\Fey\Pixie.md|Pixie]]
*Source: Monster Manual p. 253*

Standing barely a foot tall, pixies resemble diminutive elves with gossamer wings like those of dragonflies or butterflies, bright as the clear dawn and as luminous as the full moonrise.

Curious as cats and shy as deer, pixies go where they please. They like to spy on other creatures and can barely contain their excitement around them. The urge to introduce themselves and strike up a friendship is almost overwhelming; only a pixie's fear of being captured or attacked stays its hand. Those who wander through a pixie's glade might never see the creatures, yet hear the occasional giggle, gasp, or sigh.

Pixies array themselves like princes and princesses of the fey, wearing flowing gowns and doublets of silk that sparkle like moonlight on a pond. Some dress in acorns, leaves, bark, and the pelts of tiny woodland beasts. They take great pride in their regalia and beam with joy when they are complimented on their ensembles.

## Magical Faerie Folk

With their innate power of invisibility, pixies rarely appear unless they wish to be seen. In the Feywild and on the Material Plane, pixies etch patterns of frost on winter ponds and rouse the buds in springtime. They cause flowers to sparkle with summer dew, and color the leaves with the blazing hues of autumn.

## Pixie Dust

When pixies fly visibly, a shower of sparkling dust follows in their wake like the glittering tail of a shooting star. A mere sprinkle of pixie dust is said to be able to grant the power of flight, confuse a creature hopelessly, or send foes into a magical slumber.

Only pixies can use their dust to its full potential, but these fey are constantly sought out by mages and monsters seeking to study or master their power.

## Tiny Tricksters

While the arrival of visitors piques their curiosity, pixies are too shy to reveal themselves at first. They study the visitors from afar to gauge their temperament or play harmless tricks on them to measure their reactions. For example, pixies might tie a dwarf's boots together, create illusions of strange creatures or treasures, or use dancing lights to lead interlopers astray. If the visitors respond with hostility, the pixies give them a wide berth. If the visitors are good natured, the pixies are likely to be emboldened and more friendly. The fey might even emerge and offer to guide their "guests" along a safe route or invite them to a tiny yet satisfying feast prepared in their honor.

## Opposed to Violence

Unlike their fey cousins, the sprites, pixies abhor weapons and would sooner flee than get into a physical altercation with any enemy.

> [!quote] A quote from Rivergleam, pixie fashionista  
> 
> Petal gowns and acorn caps are so last summer!


```statblock
"name": "Pixie"
"size": "Tiny"
"type": "fey"
"alignment": "Neutral Good"
"ac": !!int "15"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"modifier": !!int "5"
"stats":
  - !!int "2"
  - !!int "20"
  - !!int "8"
  - !!int "10"
  - !!int "14"
  - !!int "15"
"speed": "10 ft., fly 30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+7"
"senses": "passive Perception 14"
"languages": "Sylvan"
"cr": "1/4"
"traits":
  - "desc": "The pixie's innate spellcasting ability is Charisma (spell save DC 12).\
      \ It can innately cast the following spells, requiring only its pixie dust as\
      \ a component:\n\nAt will: [[5. Mechanics/Spells/Druidcraft.md|druidcraft]]\n\
      \n1/day each: [[5. Mechanics/Spells/Confusion.md|confusion]], [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]],\
      \ [[5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]], [[5. Mechanics/Spells/Detect Thoughts.md|detect\
      \ thoughts]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
      \ [[5. Mechanics/Spells/Entangle.md|entangle]], [[5. Mechanics/Spells/Fly.md|fly]],\
      \ [[5. Mechanics/Spells/Phantasmal Force.md|phantasmal force]], [[5. Mechanics/Spells/Polymorph.md|polymorph]],\
      \ [[5. Mechanics/Spells/Sleep.md|sleep]]"
    "name": "Innate Spellcasting"
  - "desc": "The pixie has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The pixie magically turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ until its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]] ends\
      \ (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]] on a\
      \ spell). Any equipment the pixie wears or carries is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ with it."
    "name": "Superior Invisibility"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Fey/token/pixie.webp"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
