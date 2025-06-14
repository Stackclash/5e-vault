---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/10
  - monster/size/medium
  - monster/type/fey
aliases:
  - Sidereal Vizier
---
# [[5. Mechanics\Bestiary\Fey\Sidereal Vizier (SAF).md|Sidereal Vizier]]
*Source: Strongholds and Followers p. 184*

Val's magus, the Vizier is the most powerful mage in Arcadia. When a concordant petitions the Court for an ally, the Vizier reviews their case and chooses who among the Arcadians to send. Thus, when the Sidereal Vizier arrives on the battlefield, it is because he chose to come, deeming the situation dire enough, or the concordant pious enough, to attend to the matter personally.

All the members of the Court of Arcadia are noble, but only the Vizier is an actual celestial, one of the true elves who once lived in the Mundane World but journeyed with Val to attend him in Arcadia. Nine feet tall, perfect in form, the Vizier has skin of a literal starfield. A window into the night sky, constellations recognizable.

The Vizier does not behave like a thing summoned. He takes charge, he runs the battle. When the duration of his summoning is over, he leaves because he chose to leave.

> [!quote]  
> 
> "Great power is granted you, concordant. For behold: I arrive."

## Tactics

If a spell can solve the problem, the Vizier knows it and has it prepared. The list below is only one possible configuration. The Vizier uses maze if there's an obvious enemy boss, and deploys chain lightning to deal with mobs of enemies.

```statblock
"name": "Sidereal Vizier (SAF)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic"
"ac": !!int "17"
"ac_class": "natural armor; 19 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "152"
"hit_dice": "18d10 + 53"
"modifier": !!int "4"
"stats":
  - !!int "16"
  - !!int "18"
  - !!int "16"
  - !!int "20"
  - !!int "18"
  - !!int "19"
"speed": "30 ft."
"saves":
  - "strength": "+7"
  - "constitution": "+7"
  - "wisdom": "+8"
  - "charisma": "+8"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+9"
"senses": "passive Perception 22"
"languages": "Common, Elvish, Sylvan"
"cr": "10"
"traits":
  - "desc": "The Vizier is a 15th-level spellcaster. His spellcasting ability is Intelligence\
      \ (spell save DC 17, +9 to hit with spell attacks). The Vizier has the following\
      \ wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
      \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
      \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
      \ slots): [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Identify.md|identify]],\
      \ [[5. Mechanics/Spells/Mage Armor.md|mage armor]], [[5. Mechanics/Spells/Magic Missile.md|magic missile]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]],\
      \ [[5. Mechanics/Spells/Mirror Image.md|mirror image]], [[5. Mechanics/Spells/Scorching Ray.md|scorching ray]],\
      \ [[5. Mechanics/Spells/Misty Step.md|misty step]]\n\n3rd level (3 slots):\
      \ [[5. Mechanics/Spells/Counterspell.md|counterspell]], [[5. Mechanics/Spells/Fly.md|fly]],\
      \ [[5. Mechanics/Spells/Fireball.md|fireball]]\n\n4th level (3 slots): [[5. Mechanics/Spells/Banishment.md|banishment]],\
      \ [[5. Mechanics/Spells/Dimension Door.md|dimension door]]\n\n5th level (2 slots):\
      \ [[5. Mechanics/Spells/Cone Of Cold.md|cone of cold]], [[5. Mechanics/Spells/Hold Monster.md|hold monster]]\n\
      \n6th level (1 slots): [[5. Mechanics/Spells/Chain Lightning.md|chain lightning]]\n\
      \n7th level (1 slots): [[5. Mechanics/Spells/Finger Of Death.md|finger of death]]\n\
      \n8th level (1 slots): [[5. Mechanics/Spells/Maze.md|maze]]\n\nHe casts these\
      \ spells on himself before combat."
    "name": "Spellcasting"
  - "desc": "The Sidereal Vizier's innate spellcasting ability is Intelligence (spell\
      \ save DC 17). He can innately cast the following spells, requiring no material\
      \ components:\n\nAt will: [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Dominate Person.md|dominate\
      \ person]]\n\n1/day: [[5. Mechanics/Spells/Power Word Stun.md|power word stun]]"
    "name": "Innate Spellcasting"
  - "desc": "Magic cannot put the vizier to sleep."
    "name": "Fey Ancestry"
  - "desc": "The Vizier has advantage on saving throws against magic and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "As a member of the Court of Arcadia, the Sidereal Vizier can cast [[5. Mechanics/Spells/Dominate Monster.md|dominate\
      \ monster]] (DC 17) at will on any fey\
      \ creature or elf."
    "name": "Command Fey"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) piercing damage."
    "name": "Longsword"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Sidereal%20Vizier.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
