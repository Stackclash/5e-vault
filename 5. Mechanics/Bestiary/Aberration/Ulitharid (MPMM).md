---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/underdark
- monster/size/large
- monster/type/aberration/mind-flayer
aliases: ["Ulitharid"]
---
# Ulitharid
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 249, Volo's Guide to Monsters p. 175*  

Very rarely, when a tadpole from the brine pool of an [[5. Mechanics/Bestiary/Aberration/Elder Brain (MPMM).md|elder brain]] is implanted into a creature, that creature transforms into an ulitharid: a larger and more potent [[5. Mechanics/Bestiary/Aberration/Mind Flayer.md|mind flayer]] with six tentacles. Illithids innately recognize that an ulitharid's survival is more important than their own. An [[5. Mechanics/Bestiary/Aberration/Elder Brain (MPMM).md|elder brain's]] reaction to the rise of an ulitharid varies. In most colonies, the ulitharid becomes an elder brain's most favored servant, invested with power and authority. In others, the [[5. Mechanics/Bestiary/Aberration/Elder Brain (MPMM).md|elder brain]] perceives an ulitharid as a potential rival and manipulates or quashes the ulitharid's ambitions accordingly.

When an ulitharid finds sharing leadership with an [[5. Mechanics/Bestiary/Aberration/Elder Brain (MPMM).md|elder brain]] insufferable, it breaks off from the colony, taking a group of [[5. Mechanics/Bestiary/Aberration/Mind Flayer.md|mind flayers]] with it, and moves to another location to form a new colony. After the death of the ulitharid's body, a special process transforms its brain into a new [[5. Mechanics/Bestiary/Aberration/Elder Brain (MPMM).md|elder brain]] for the colony.

This process doesn't work on the brain of an ulitharid that dies a natural death, as such brains are too decrepit to be used. Instead, each ulitharid carries a psionically enhanced staff; when the ulitharid is ready to give up its life, it attaches the staff to the back of its head, and the staff cracks open its skull, enabling its brain to be extracted. The brain and the staff are then planted in the ulitharid's corpse, causing it to dissolve into ichor. This psionically potent slime helps to fuel the transformation of the area into a brine pool for the embryonic [[5. Mechanics/Bestiary/Aberration/Elder Brain (MPMM).md|elder brain]].

```statblock
"name": "Ulitharid"
"size": "Large"
"type": "aberration"
"subtype": "mind flayer"
"alignment": "Typically  Lawful Evil"
"ac": !!int "15"
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
  "Charisma": "+9"
  "Wisdom": "+8"
  "Intelligence": "+9"
"skillsaves":
  "Stealth": "+5"
  "Insight": "+8"
  "Perception": "+8"
  "Arcana": "+9"
"senses": "darkvision 120 ft., passive Perception 18"
"languages": "Deep Speech, Undercommon, telepathy 2 miles"
"cr": "9"
"traits":
- "desc": "The ulitharid casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 17):\n\nAt\
    \ will: [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Levitate.md|levitate]]\n\
    \n1/day each: [[5. Mechanics/Spells/Dominate Monster.md|dominate monster]], [[5. Mechanics/Spells/Feeblemind.md|feeblemind]],\
    \ [[5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]], [[5. Mechanics/Spells/Plane Shift.md|plane shift]]\
    \ (self only), [[5. Mechanics/Spells/Project Image.md|project image]], [[5. Mechanics/Spells/Scrying.md|scrying]],\
    \ [[5. Mechanics/Spells/Telekinesis.md|telekinesis]]"
  "name": "spells"
- "desc": "The ulitharid is aware of the presence of creatures within 2 miles of it\
    \ that have an Intelligence score of 4 or higher. It knows the distance and direction\
    \ to each creature, as well as each creature's intelligence score, but can't sense\
    \ anything else about it. A creature protected by a [[5. Mechanics/Spells/Mind Blank.md|mind blank]]\
    \ spell, a [[5. Mechanics/Spells/Nondetection.md|nondetection]] spell, or similar\
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
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 10 ft., one creature.\
    \ Hit: 27 (dice: 4d10 + 5|avg (4d10 + 5)) psychic damage. If the target\
    \ is Large or smaller, it is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 14) and must succeed on a DC 17 Intelligence saving throw or be [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]\
    \ until this grapple ends."
  "name": "Tentacles"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ Humanoid [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] by the ulitharid.\
    \ Hit: 55 (dice: 10d10|avg (10d10)) piercing damage. If this damage reduces\
    \ the target to 0 hit points, the ulitharid kills the target by extracting and\
    \ devouring its brain."
  "name": "Extract Brain"
- "desc": "The ulitharid magically emits psychic energy in a 60-foot cone. Each creature\
    \ in that area must succeed on a DC 17 Intelligence saving throw or take 31 (dice:\
    \ 4d12 + 5|avg (4d12 + 5)) psychic damage and be [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]\
    \ for 1 minute. A target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/aberration/token/ulitharid.png"
```
^statblock

## Environment

underdark