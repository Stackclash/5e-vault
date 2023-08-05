---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/tiny
- monster/type/dragon
statblock: true
statblock-link: "#^statblock"
"name": "Faerie Dragon (Green)"
"size": "Tiny"
"type": "dragon"
"alignment": "Chaotic Good"
"ac": !!int "15"
"hp": !!int "14"
"hit_dice": "4d4 + 4"
"stats":
- !!int "3"
- !!int "20"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "walk 10 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
  "Arcana": !!int "4"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Draconic, Sylvan"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast a number of spells, requiring no material components:\n\
    \n1/day each: [color spray](/compendium/spells/color-spray.md), [dancing lights](/compendium/spells/dancing-lights.md),\
    \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md),\
    \ [mirror image](/compendium/spells/mirror-image.md), [suggestion](/compendium/spells/suggestion.md)"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A faerie dragon's scales change hue as it ages, moving through all the\
    \ colors of the rainbow. All faerie dragons have innate spellcasting ability,\
    \ gaining new spells as they mature.\n\nRed—5 years or less\n\nOrange—6–10 years\n\
    \nYellow—11–20 years\n\nGreen—21–30 years\n\nBlue—31–40 years\n\nIndigo—41–50\
    \ years\n\nViolet—51 years or more\n\nA green or older faerie dragon's CR increases\
    \ to 2."
  "name": "The Colors of Age"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "As a bonus action, the dragon can magically turn [invisible](compendium/rules/conditions.md#invisible)\
    \ until its [concentration](compendium/rules/status.md#concentration) ends (as\
    \ if [concentration](compendium/rules/status.md#concentration) on a spell). Any\
    \ equipment the dragon wears or carries is [invisible](compendium/rules/conditions.md#invisible)\
    \ with it."
  "name": "Superior Invisibility"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Using telepathy, the dragon can magically communicate with any other faerie\
    \ dragon within 60 feet of it."
  "name": "Limited Telepathy"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The faerie dragon has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one creature.\
    \ Hit: 1 piercing damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon exhales a puff of euphoria gas at one creature within 5 feet\
    \ of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute,\
    \ the target can't take reactions and must roll a dice: d6|avg (d6) at the\
    \ start of each of its turns to determine its behavior during the turn:\n\n1–\
    4. The target takes no action or bonus action and uses all of its movement to\
    \ move in a random direction.\n\n5–6. The target doesn't move, and the only thing\
    \ it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect\
    \ on itself on a success."
  "name": "Euphoria Breath (Recharge 5-6)"
"source":
- "MM"
- "ToA"
"image": "/compendium/bestiary/dragon/token/faerie-dragon-green.png"
aliases: ["Faerie Dragon (Green)"]
---
# Faerie Dragon (Green)
*Source: Monster Manual p. 133, Tomb of Annihilation*  

A faerie dragon is a cat-sized dragon with butterfly wings. It wears a sharp-toothed grin and expresses its delight by the twitching of its tail, its merriment fading only if it is attacked.

## Invisible Tricksters

The only warning of a faerie dragon's presence is a stifled giggle. The dragon stays out of sight, watching invisibly as its victims contend with its pranks. When its fun is done, the dragon might reveal itself, depending on the disposition of its "prey."

## Friendly and Bright

A faerie dragon has a sharp mind, a fondness for treasure and good company, and a puckish sense of humor. Travelers can play to a faerie dragon's draconic nature by offering it "treasure" in the form of sweets, baked goods, and baubles in exchange for information or safe passage through its territory.

## The Colors of Age

A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.

| Dragon Color | Age Range |
|--------------|-----------|
| Red | 5 years or less |
| Orange | 6–10 years |
| Yellow | 11–20 years |
| Green | 21–30 years |
| Blue | 31–40 years |
| Indigo | 41–50 years |
| Violet | 51 years or more |
^dragon-color-age-range

CR 1 (200 XP) For a red, orange, or yellow faerie dragon; 2 (450 XP) for a green, blue, indigo, or violet faerie dragon

## Stat Block

```ad-statblock
title: Faerie Dragon (Green)
![](/compendium/bestiary/dragon/token/faerie-dragon-green.png#token)
*Tiny dragon, Chaotic Good*

- **Armor Class** 15 
- **Hit Points** `dice: 4d4 + 4|text(14)` (4d4 + 4) 
- **Speed** walk 10 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 3 (-4)|20 (+5)|13 (+1)|14 (+2)|12 (+1)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Arcana +4, Perception +3, Stealth +7
- **Senses** darkvision 60 ft., passive Perception 13
- **Languages** Draconic, Sylvan
- **Challenge** 2

## Traits

***The Colors of Age.*** A faerie dragon's scales change hue as it ages, moving through all the colors of the rainbow. All faerie dragons have innate spellcasting ability, gaining new spells as they mature.

Red—5 years or less

Orange—6–10 years

Yellow—11–20 years

Green—21–30 years

Blue—31–40 years

Indigo—41–50 years

Violet—51 years or more

A green or older faerie dragon's CR increases to 2.

***Superior Invisibility.*** As a bonus action, the dragon can magically turn [invisible](compendium/rules/conditions.md#invisible) until its [concentration](compendium/rules/status.md#concentration) ends (as if [concentration](compendium/rules/status.md#concentration) on a spell). Any equipment the dragon wears or carries is [invisible](compendium/rules/conditions.md#invisible) with it.

***Limited Telepathy.*** Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it.

***Magic Resistance.*** The faerie dragon has advantage on saving throws against spells and other magical effects.

***Innate Spellcasting.*** The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components:

**1/day each**: [color spray](/compendium/spells/color-spray.md), [dancing lights](/compendium/spells/dancing-lights.md), [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md), [mirror image](/compendium/spells/mirror-image.md), [suggestion](/compendium/spells/suggestion.md)

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one creature. Hit: 1 piercing damage.

***Euphoria Breath (Recharge 5-6).*** The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a `dice: d6|avg` (`d6`) at the start of each of its turns to determine its behavior during the turn:

1–4. The target takes no action or bonus action and uses all of its movement to move in a random direction.

5–6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success.

## Lair actions

As they are presented in the "Monster Manual", faerie dragons don't have access to lair actions while in their lairs. At your discretion, a [green](/compendium/bestiary/dragon/faerie-dragon-green.md) or [older faerie dragon](/compendium/bestiary/dragon/faerie-dragon-violet.md) can take one of the following lair actions on initiative count 20 (losing initiative ties):

- **Chaotic Aura.** The faerie dragon creates misdirecting currents of air and magic around itself. Until initiative count 20 on the next round, whenever a ranged attack roll misses the dragon, reroll the attack against a random creature within 30 feet of the dragon that doesn't have total cover against the attack.  
- **Grasping Plants.** The faerie dragon causes roots and vines to temporarily grow around it; until initiative count 20 on the next round, the ground within 20 feet of the dragon is "difficult terrain".  

## Regional effects

The region containing a faerie dragon's lair can be transformed by its presence, creating one or more of the following effects:

- **Compulsory Offering.** The first time a creature comes within 1 mile of the faerie dragon's lair, the creature must succeed on a DC 15 Wisdom saving throw or feel an overwhelming compulsion to leave an offering worth at least 5 gp stashed in an out-of-the-way place. The dragon immediately senses the location of this gift. A creature can be affected only once by this compulsion.  
- **Malleable Time.** Time is fluid within 1 mile of the faerie dragon's lair, flowing somewhere between half and twice its normal speed.  
- **Mischief Afoot.** Sapient creatures that spend a year within 5 miles of the faerie dragon's lair feel the persistent urge to play pranks on others.  

If the faerie dragon dies, these effects fade over the course of `dice: 1d10|avg` (`1d10`) days.
```
^statblock

## Environment

forest