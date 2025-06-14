---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 9
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/9
  - monster/size/medium
  - monster/type/fey
aliases:
  - Ash Marshal
---
# [[5. Mechanics\Bestiary\Fey\Ash Marshal (SAF).md|Ash Marshal]]
*Source: Strongholds and Followers p. 183*

Tasked with defending and escorting guests to Arcadia, the Ash Marshal is also the only member of the Court to be regularly sent seeking across the planes, dispatched by Val to bring those who would harm his creation ^[The elves.] to justice. He is Val's timescape ^["Timescape" is the sages' term for the multiverse, or space-time.] hunter and as such carries much deep lore about the multiverse.

The Marshal calls upon Val to aid him and give him power in battle, and Val infuses his hunter with arcane power. His spellcasting relies on his ability to convince Val the need for aid is great.

## Tactics

The Marshal assumes that if Val has sent him to aid the concordant, then things must be dire. He surveys the battle and identifies the greatest immediate threat to the character who summoned him, and attacks with the Ashsword, hoping to censure the target, forcing them—or at least strongly encouraging them—to focus on the Marshal instead.

His spells are almost all offensive, but he is always ready with counterspell to thwart enemy spellcasters as well as banishment in case the enemy has summoned any members of the Court of All Flesh.

```statblock
"name": "Ash Marshal (SAF)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic"
"ac": !!int "20"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate armor]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "21"
  - !!int "14"
  - !!int "17"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "strength": "+9"
  - "constitution": "+9"
  - "wisdom": "+7"
  - "charisma": "+7"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+7"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Nature|Nature]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+6"
"damage_resistances": "fire, lightning"
"senses": "passive Perception 21"
"languages": "Common, Elvish, Sylvan"
"cr": "9"
"traits":
  - "desc": "The Marshal is a 9th-level spellcaster. His spellcasting ability is Charisma\
      \ (spell save DC 15, +7 to hit with spell attacks). The Marshal has the following\
      \ spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
      \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]],\
      \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n1st level (4\
      \ slots): [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Identify.md|identify]],\
      \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]]\n\n2nd level (3 slots):\
      \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Mirror Image.md|mirror image]],\
      \ [[5. Mechanics/Spells/Gust Of Wind.md|gust of wind]], [[5. Mechanics/Spells/Misty Step.md|misty step]]\n\
      \n3rd level (3 slots): [[5. Mechanics/Spells/Counterspell.md|counterspell]],\
      \ [[5. Mechanics/Spells/Fly.md|fly]], [[5. Mechanics/Spells/Fireball.md|fireball]]\n\
      \n4th level (3 slots): [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Dimension Door.md|dimension\
      \ door]]\n\n5th level (1 slots): [[5. Mechanics/Spells/Cone Of Cold.md|cone\
      \ of cold]], [[5. Mechanics/Spells/Hold Monster.md|hold monster]]"
    "name": "Spellcasting"
  - "desc": "The Ash Marshal's innate spellcasting ability is Charisma (spell save\
      \ DC 15). The Marshal can innately cast the following spells, requiring no material\
      \ components:\n\nAt will: [[5. Mechanics/Spells/Hunters Mark.md|hunter's mark]],\
      \ [[5. Mechanics/Spells/Branding Smite.md|branding smite]]\n\n1/day: [[5. Mechanics/Spells/Raise Dead.md|raise\
      \ dead]]"
    "name": "Innate Spellcasting"
  - "desc": "Magic cannot put the marshal to sleep."
    "name": "Fey Ancestry"
  - "desc": "The marshal has advantage on saving throws against magic and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "As a member of the Court of Arcadia, the Ash Marshal can cast [[5. Mechanics/Spells/Dominate Monster.md|dominate\
      \ monster]] (DC 15) at will on any fey\
      \ creature or elf."
    "name": "Command Fey"
"actions":
  - "desc": "The Marshal makes three Ashsword attacks. If two attacks hit the same\
      \ target, that target has disadvantage on any melee attacks that don't include\
      \ the Marshal for the next round."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d8\
      \ + 5) piercing damage."
    "name": "Ashsword"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Ash%20Marshal.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
