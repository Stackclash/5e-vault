---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 9
environments: underdark
size: Large
tags:
- compendium/src/5e/mpmm
- monster/cr/9
- monster/environment/underdark
- monster/size/large
- monster/type/aberration/mind-flayer
aliases: ["Ulitharid"]
---
# [Ulitharid](compendium\bestiary\aberration/ulitharid-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 249, Volo's Guide to Monsters p. 175*

Very rarely, when a tadpole from the brine pool of an [elder brain](compendium/bestiary/aberration/elder-brain-mpmm.md) is implanted into a creature, that creature transforms into an ulitharid: a larger and more potent [mind flayer](compendium/bestiary/aberration/mind-flayer.md) with six tentacles. Illithids innately recognize that an ulitharid's survival is more important than their own. An [elder brain's](compendium/bestiary/aberration/elder-brain-mpmm.md) reaction to the rise of an ulitharid varies. In most colonies, the ulitharid becomes an elder brain's most favored servant, invested with power and authority. In others, the [elder brain](compendium/bestiary/aberration/elder-brain-mpmm.md) perceives an ulitharid as a potential rival and manipulates or quashes the ulitharid's ambitions accordingly.

When an ulitharid finds sharing leadership with an [elder brain](compendium/bestiary/aberration/elder-brain-mpmm.md) insufferable, it breaks off from the colony, taking a group of [mind flayers](compendium/bestiary/aberration/mind-flayer.md) with it, and moves to another location to form a new colony. After the death of the ulitharid's body, a special process transforms its brain into a new [elder brain](compendium/bestiary/aberration/elder-brain-mpmm.md) for the colony.

This process doesn't work on the brain of an ulitharid that dies a natural death, as such brains are too decrepit to be used. Instead, each ulitharid carries a psionically enhanced staff; when the ulitharid is ready to give up its life, it attaches the staff to the back of its head, and the staff cracks open its skull, enabling its brain to be extracted. The brain and the staff are then planted in the ulitharid's corpse, causing it to dissolve into ichor. This psionically potent slime helps to fuel the transformation of the area into a brine pool for the embryonic [elder brain](compendium/bestiary/aberration/elder-brain-mpmm.md).

```statblock
"name": "Ulitharid (MPMM)"
"size": "Large"
"type": "aberration"
"subtype": "mind flayer"
"alignment": "Typically  Lawful Evil"
"ac": !!int "15"
"ac_class": "[breastplate](compendium/items/breastplate.md)"
"hp": !!int "127"
"hit_dice": "17d10 + 14"
"stats":
- !!int "15"
- !!int "12"
- !!int "15"
- !!int "21"
- !!int "19"
- !!int "21"
"speed": "30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "8"
  "Intelligence": !!int "9"
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Arcana": !!int "9"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Deep Speech, Undercommon, telepathy 2 miles"
"cr": "9"
"traits":
- "desc": "The ulitharid casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\nAt\
    \ will: [detect thoughts](compendium/spells/detect-thoughts.md), [levitate](compendium/spells/levitate.md)\n\
    \n1/day each: [dominate monster](compendium/spells/dominate-monster.md), [feeblemind](compendium/spells/feeblemind.md),\
    \ [mass suggestion](compendium/spells/mass-suggestion.md), [plane shift](compendium/spells/plane-shift.md)\
    \ (self only), [project image](compendium/spells/project-image.md), [scrying](compendium/spells/scrying.md),\
    \ [telekinesis](compendium/spells/telekinesis.md)"
  "name": "Spellcasting (Psionics)"
- "desc": "The ulitharid is aware of the presence of creatures within 2 miles of it\
    \ that have an Intelligence score of 4 or higher. It knows the distance and direction\
    \ to each creature, as well as each creature's intelligence score, but can't sense\
    \ anything else about it. A creature protected by a [mind blank](compendium/spells/mind-blank.md)\
    \ spell, a [nondetection](compendium/spells/nondetection.md) spell, or similar\
    \ magic can't be perceived in this manner."
  "name": "Creature Sense"
- "desc": "The ulitharid has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "If an elder brain establishes a psychic link with the ulitharid, the elder\
    \ brain can form a psychic link with any other creature the ulitharid can detect\
    \ using its Creature Sense. Any such link ends if the creature falls outside the\
    \ telepathy ranges of both the ulitharid and the elder brain. The ulitharid can\
    \ maintain its psychic link with the elder brain regardless of the distance between\
    \ them, so long as they are both on the same plane of existence. If the ulitharid\
    \ is more than 5 miles away from the elder brain, it can end the psychic link\
    \ at any time (no action required)."
  "name": "Psionic Hub"
"actions":
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 27\
    \ (4d10 + 5) psychic damage. If the target is Large or smaller, it is [grappled](/compendium/rules/conditions.md#Grappled)\
    \ (escape DC 14) and must succeed on a DC 17 Intelligence saving throw or be [stunned](/compendium/rules/conditions.md#Stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
    \ Humanoid [grappled](/compendium/rules/conditions.md#Grappled) by the ulitharid.\
    \ Hit: 55 (10d10) piercing damage. If this damage reduces the target to 0 hit\
    \ points, the ulitharid kills the target by extracting and devouring its brain."
  "name": "Extract Brain"
- "desc": "The ulitharid magically emits psychic energy in a 60-foot cone. Each creature\
    \ in that area must succeed on a DC 17 Intelligence saving throw or take 31 (4d12\
    \ + 5) psychic damage and be [stunned](/compendium/rules/conditions.md#Stunned)\
    \ for 1 minute. A target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/aberration/token/ulitharid-mpmm.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```