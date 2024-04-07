---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/9
- monster/size/medium
- monster/type/fey
statblock: inline
aliases: ["Ash Marshal"]
---
# [Ash Marshal](compendium/bestiary/fey/ash-marshal-saf.md)
*Source: Strongholds and Followers p. 183*

Tasked with defending and escorting guests to Arcadia, the Ash Marshal is also the only member of the Court to be regularly sent seeking across the planes, dispatched by Val to bring those who would harm his creation ^[The elves.] to justice. He is Val's timescape ^["Timescape" is the sages' term for the multiverse, or space-time.] hunter and as such carries much deep lore about the multiverse.

The Marshal calls upon Val to aid him and give him power in battle, and Val infuses his hunter with arcane power. His spellcasting relies on his ability to convince Val the need for aid is great.

## Tactics

The Marshal assumes that if Val has sent him to aid the concordant, then things must be dire. He surveys the battle and identifies the greatest immediate threat to the character who summoned him, and attacks with the Ashsword, hoping to censure the target, forcing them—or at least strongly encouraging them—to focus on the Marshal instead.

His spells are almost all offensive, but he is always ready with counterspell to thwart enemy spellcasters as well as banishment in case the enemy has summoned any members of the Court of All Flesh.

```statblock
"name": "Ash Marshal (SaF)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic"
"ac": !!int "20"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "20"
- !!int "12"
- !!int "21"
- !!int "14"
- !!int "17"
- !!int "16"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "9"
"skillsaves":
  "Nature": !!int "6"
  "Intimidation": !!int "7"
  "Athletics": !!int "9"
  "Religion": !!int "6"
  "Insight": !!int "7"
  "Perception": !!int "8"
"damage_resistances": "fire, lightning"
"senses": "passive Perception 21"
"languages": "Common, Elvish, Sylvan"
"cr": "9"
"traits":
- "desc": "The Ash Marshal's innate spellcasting ability is Charisma (spell save DC\
    \ 15). The Marshal can innately cast the following spells, requiring no material\
    \ components:\n\nAt will: [hunter's mark](compendium/spells/hunters-mark.md),\
    \ [branding smite](compendium/spells/branding-smite.md)\n\n1/day: [raise dead](compendium/spells/raise-dead.md)"
  "name": "innate"
- "desc": "The Marshal is a 9th-level spellcaster. His spellcasting ability is Charisma\
    \ (spell save DC 15, dice: d20+7 (+7 to hit) with spell attacks). The Marshal\
    \ has the following spells prepared:\n\nCantrips (at will): [fire bolt](compendium/spells/fire-bolt.md),\
    \ [mage hand](compendium/spells/mage-hand.md), [minor illusion](compendium/spells/minor-illusion.md),\
    \ [prestidigitation](compendium/spells/prestidigitation.md)\n\n1st level (4\
    \ slots): [detect magic](compendium/spells/detect-magic.md), [identify](compendium/spells/identify.md),\
    \ [magic missile](compendium/spells/magic-missile.md)\n\n2nd level (3 slots):\
    \ [detect thoughts](compendium/spells/detect-thoughts.md), [mirror image](compendium/spells/mirror-image.md),\
    \ [gust of wind](compendium/spells/gust-of-wind.md), [misty step](compendium/spells/misty-step.md)\n\
    \n3rd level (3 slots): [counterspell](compendium/spells/counterspell.md),\
    \ [fly](compendium/spells/fly.md), [fireball](compendium/spells/fireball.md)\n\
    \n4th level (3 slots): [banishment](compendium/spells/banishment.md), [dimension\
    \ door](compendium/spells/dimension-door.md)\n\n5th level (1 slots): [cone\
    \ of cold](compendium/spells/cone-of-cold.md), [hold monster](compendium/spells/hold-monster.md)"
  "name": "spells"
- "desc": "Magic cannot put the marshal to sleep."
  "name": "Fey Ancestry"
- "desc": "The marshal has advantage on saving throws against magic and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "As a member of the Court of Arcadia, the Ash Marshal can cast [dominate\
    \ monster](compendium/spells/dominate-monster.md) (DC 15) at will on any fey creature\
    \ or elf."
  "name": "Command Fey"
"actions":
- "desc": "The Marshal makes three Ashsword attacks. If two attacks hit the same target,\
    \ that target has disadvantage on any melee attacks that don't include the Marshal\
    \ for the next round."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 5|avg (1d8 + 5) piercing damage."
  "name": "Ashsword"
"source":
- "SaF"
"image": "compendium/bestiary/fey/token/ash-marshal-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```