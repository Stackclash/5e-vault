---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/construct
statblock: true
statblock-link: "#^statblock"
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
    \ components:\n\n3/day each: [counterspell](/compendium/spells/counterspell.md),\
    \ [crown of madness](/compendium/spells/crown-of-madness.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md),\
    \ [telekinesis](/compendium/spells/telekinesis.md)"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "An animated object doesn't require air, food, drink, or sleep.\n\nThe magic\
    \ that animates an object is dispelled when the construct drops to 0 hit points.\
    \ An animated object reduced to 0 hit points becomes inanimate and is too damaged\
    \ to be of much use or value to anyone."
  "name": "Constructed Nature"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The portrait is [incapacitated](compendium/rules/conditions.md#incapacitated)\
    \ while in the area of an [antimagic field](/compendium/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the portrait\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or become [unconscious](compendium/rules/conditions.md#unconscious) for 1\
    \ minute."
  "name": "Antimagic Susceptibility"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While the figure in the portrait remains motionless, the portrait is indistinguishable\
    \ from a normal painting."
  "name": "False Appearance"
"source":
- "CoS"
"image": "/compendium/bestiary/construct/token/guardian-portrait.png"
aliases: ["Guardian Portrait"]
---
# Guardian Portrait
*Source: Curse of Strahd p. 227*  

A guardian portrait looks like a finely rendered and beautifully framed work of art, usually depicting someone important in a realistic manner. The picture and its frame are bound with powerful magic and are inseparable.

## Living Image

The eyes of the figure depicted in the painting are imbued with [darkvision](compendium/rules/senses.md#darkvision), and they appear to follow creatures that move in front of them.

## Innate Spells

When a guardian portrait attacks, the figure in the painting animates and moves as though alive (albeit in two dimensions). The guardian portrait has no effective melee attacks, but it has a repertoire of innate spells that it can cast. When it casts a spell, the figure painted on the canvas makes all the appropriate somatic gestures and verbal incantations for the spell.

## Stat Block

```ad-statblock
title: Guardian Portrait
![](/compendium/bestiary/construct/token/guardian-portrait.png#token)
*Medium construct, Unaligned*

- **Armor Class** 5 (natural armor)
- **Hit Points** `dice: 5d8|text(22)` (5d8) 
- **Speed** walk 0 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 1 (-5)| 1 (-5)|10 (+0)|14 (+2)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, frightened, grappled, paralyzed, petrified, poisoned, prone, restrained
- **Languages** Common, plus up to two other languages
- **Challenge** 1

## Traits

***Constructed Nature.*** An animated object doesn't require air, food, drink, or sleep.

The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

***Antimagic Susceptibility.*** The portrait is [incapacitated](compendium/rules/conditions.md#incapacitated) while in the area of an [antimagic field](/compendium/spells/antimagic-field.md). If targeted by [dispel magic](/compendium/spells/dispel-magic.md), the portrait must succeed on a Constitution saving throw against the caster's spell save DC or become [unconscious](compendium/rules/conditions.md#unconscious) for 1 minute.

***False Appearance.*** While the figure in the portrait remains motionless, the portrait is indistinguishable from a normal painting.

***Innate Spellcasting.*** The portrait's innate spellcasting ability is Intelligence (spell save DC 12). The portrait can innately cast the following spells, requiring no material components:

**3/day each**: [counterspell](/compendium/spells/counterspell.md), [crown of madness](/compendium/spells/crown-of-madness.md), [hypnotic pattern](/compendium/spells/hypnotic-pattern.md), [telekinesis](/compendium/spells/telekinesis.md)
```
^statblock