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
name: Faerie Dragon (Blue)
ac: 15
hp: 14
hit_dice: 4d4 + 4
cr: '2'
stats: [
  3,
  20,
  13,
  14,
  12,
  16
]
source: [
  MM
]
aliases: ["Faerie Dragon (Blue)"]
---
*Source: Monster Manual p. 133*  

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
title: Faerie Dragon (Blue)
![[token/faerie-dragon-blue.png#token]]
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

***Superior Invisibility.*** As a bonus action, the dragon can magically turn [invisible](/6. Mechanics/rules/conditions.md#invisible) until its [concentration](/6. Mechanics/rules/status.md#concentration) ends (as if [concentration](/6. Mechanics/rules/status.md#concentration) on a spell). Any equipment the dragon wears or carries is [invisible](/6. Mechanics/rules/conditions.md#invisible) with it.

***Limited Telepathy.*** Using telepathy, the dragon can magically communicate with any other faerie dragon within 60 feet of it.

***Magic Resistance.*** The faerie dragon has advantage on saving throws against spells and other magical effects.

***Innate Spellcasting.*** The dragon's innate spellcasting ability is Charisma (spell save DC 13). It can innately cast a number of spells, requiring no material components:

**1/day each**: [color spray](/6. Mechanics/spells/color-spray.md), [dancing lights](/6. Mechanics/spells/dancing-lights.md), [mage hand](/6. Mechanics/spells/mage-hand.md), [major image](/6. Mechanics/spells/major-image.md), [minor illusion](/6. Mechanics/spells/minor-illusion.md), [mirror image](/6. Mechanics/spells/mirror-image.md), [suggestion](/6. Mechanics/spells/suggestion.md)

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one creature. Hit: 1 piercing damage.

***Euphoria Breath (Recharge 5-6).*** The dragon exhales a puff of euphoria gas at one creature within 5 feet of it. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute, the target can't take reactions and must roll a `dice: d6|avg` (`d6`) at the start of each of its turns to determine its behavior during the turn:

1–4. The target takes no action or bonus action and uses all of its movement to move in a random direction.

5–6. The target doesn't move, and the only thing it can do on its turn is make a DC 11 Wisdom saving throw, ending the effect on itself on a success.

## Lair actions

As they are presented in the "Monster Manual", faerie dragons don't have access to lair actions while in their lairs. At your discretion, a [green](/6. Mechanics/bestiary/dragon/faerie-dragon-green.md) or [older faerie dragon](/6. Mechanics/bestiary/dragon/faerie-dragon-violet.md) can take one of the following lair actions on initiative count 20 (losing initiative ties):

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