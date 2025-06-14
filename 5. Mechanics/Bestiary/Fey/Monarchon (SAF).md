---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/7
  - monster/size/medium
  - monster/type/fey
aliases:
  - Monarchon
---
# [[5. Mechanics\Bestiary\Fey\Monarchon (SAF).md|Monarchon]]
*Source: Strongholds and Followers p. 179*

The Monarchon is the embodiment of youth and death, spring and fall. It is gay and sprightly and a harbinger of doom. Once, mortals knew that to gaze upon the death's-head skull of the Monarchon spelled the end. Now, it's been so long since last the Arcadians lived in the Mundane World that mortals must learn these lessons all over again.

The Monarchon enjoys speaking with those who summoned her, but she speaks in cryptic, open poetry. This language is perfectly clear to other created fey, the naiads and dryads and centaurs, but is usually opaque to mortals.

> [!quote]  
> 
> "Trees grow roots, but also leaves."
> 
> "We were fools to think we could change the stars."
> 
> "Something inside has stopped pretending."
> 
> "I have tasted your grace, and felt it diffuse around me."
> 
> "You came to change directions. Which way do you face now?"

Pretty cringey. But don't say that around the Monarchon—she might turn your face inside out.

When not withering or hypnotizing her enemies, she is pleasant to be around. She is fascinated by mortals. Loves watching the artfully slow decay of their flesh into inevitable death. If she had her way, she'd stick around for the final myocardial infarction and then celebrate your death, possibly by baking your corpse into bread. So weird.

## Tactics

The Monarchon can fly—I mean, of course she can, look at those wings. She prefers to fly around the battlefield, casting spells and hypnotizing enemies. The saving throw for her Hypnotic Display is Wisdom-based, so she often targets melee fighters or rogues. She won't bother using it on enemy shamans or priests.

Finally, if she is attacked or otherwise there is great need, she will land and use her Withering Touch. This is something of a last resort—she prefers to use this ability on enemies close to death.

```statblock
"name": "Monarchon (SAF)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "13d10 + 39"
"modifier": !!int "2"
"stats":
  - !!int "11"
  - !!int "15"
  - !!int "16"
  - !!int "12"
  - !!int "19"
  - !!int "14"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  - "wisdom": "+7"
  - "charisma": "+5"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Medicine|Medicine]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+4"
"senses": "passive Perception 20"
"languages": "Common, Elvish, Sylvan"
"cr": "7"
"traits":
  - "desc": "The Monarchon is a 7th-level spellcaster. Her spellcasting ability is\
      \ Wisdom (spell save DC 15, +7 to hit with spell attacks). The Monarchon has\
      \ the following cleric spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Guidance.md|guidance]],\
      \ [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]]\n\n1st level (4 slots):\
      \ [[5. Mechanics/Spells/Bane.md|bane]], [[5. Mechanics/Spells/Bless.md|bless]], [[5. Mechanics/Spells/Command.md|command]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Hold Person.md|hold person]],\
      \ [[5. Mechanics/Spells/Zone Of Truth.md|zone of truth]]\n\n3rd level (3 slots):\
      \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Revivify.md|revivify]]\n\
      \n4th level (1 slots): [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Death Ward.md|death\
      \ ward]]"
    "name": "Spellcasting"
  - "desc": "The monarchon's innate spellcasting ability is Wisdom (spell save DC\
      \ 15). The monarchon can innately cast the following spells, requiring no material\
      \ components:\n\nAt will: [[5. Mechanics/Spells/Enthrall.md|enthrall]], [[5. Mechanics/Spells/Sleep.md|sleep]]"
    "name": "Innate Spellcasting"
  - "desc": "Magic cannot put the Monarchon to sleep."
    "name": "Fey Ancestry"
  - "desc": "The Monarchon has advantage on saving throws against magic and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "As a member of the Court of Arcadia, the Monarchon can cast [[5. Mechanics/Spells/Dominate Monster.md|dominate\
      \ monster]] (DC 15) at will on any fey\
      \ creature or elf."
    "name": "Command Fey"
"actions":
  - "desc": "Melee Spell Attack: +7 to hit, reach 5 ft., one creature. Hit: 15\
      \ (2d10 + 4) necrotic damage."
    "name": "Withering Touch"
  - "desc": "The Monarchon spreads her wings and their false eyes pulsate with a rainbow\
      \ of colors, targeting one creature she can see within 30 feet. If the target\
      \ can see the Monarchon, the target must succeed on a DC 15 Wisdom saving throw\
      \ against this magic or be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ until the end of the Monarchon's next turn. The [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ target is [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]. If the target's\
      \ saving throw is successful, the target is immune to the Monarchon's gaze for\
      \ 24 hours."
    "name": "Hypnotic Display"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Monarchon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
