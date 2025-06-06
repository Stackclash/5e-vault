---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: null
size: Huge
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/5
  - monster/size/huge
  - monster/type/plant
aliases:
  - Germination Stall
---
# [[5. Mechanics\Bestiary\Plant\Germination Stall (GRIFFONSSADDLEBAG2).md|Germination Stall]]
*Source: The Griffon's Saddlebag, Book 2 p. 342*

It's not entirely clear how seed coin pollinators manage to coalesce and combine into a germination stall, as it's never been witnessed directly. What has been recorded is that by all indications, a germination stall looks like almost every other merchant stall around it. They often have their own quirks, based on the appearance of their staff members, which are their pollinators. They rarely make any sales, as their inventory seems deliberately unappealing. Instead, the pollinators channel energy from the stall to produce seed coins which can be slipped into pockets, left on the street, or offered as alms to the poor.

```statblock
"name": "Germination Stall (GRIFFONSSADDLEBAG2)"
"size": "Huge"
"type": "plant"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d12 + 36"
"modifier": !!int "-5"
"stats":
  - !!int "10"
  - !!int "1"
  - !!int "17"
  - !!int "13"
  - !!int "10"
  - !!int "18"
"speed": "0 ft."
"saves":
  - "constitution": "+6"
  - "wisdom": "+3"
  - "charisma": "+7"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+10"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+10"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "blindsight 150 ft. (blind beyond this radius), passive Perception 10"
"languages": "the languages its staff knew in life"
"cr": "5"
"traits":
  - "desc": "The stall's innate spellcasting ability is Charisma (spell save DC 15).\
      \ The stall can innately cast the following spells, requiring no components:\n\
      \nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]],\
      \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n3/day each:\
      \ [[5. Mechanics/Spells/Comprehend Languages.md|comprehend languages]], [[5. Mechanics/Spells/Suggestion.md|suggestion]],\
      \ [[5. Mechanics/Spells/Unseen Servant.md|unseen servant]]\n\n1/day each: [[5. Mechanics/Spells/Create Food And Water.md|create\
      \ food and water]], [[5. Mechanics/Spells/Creation.md|creation]],\
      \ [[5. Mechanics/Spells/Geas.md|geas]], [[5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]]"
    "name": "Innate Spellcasting"
  - "desc": "Whenever a humanoid ends its turn within 60 feet of the stall, it must\
      \ make a DC 15 Wisdom saving throw. On a failed save, the creature has no hint\
      \ that it is gradually falling under the effects of the stall's enchantment.\
      \ If a creature succeeds on three of these saves, it is immune to this effect\
      \ for the next 24 hours. If the creature fails three of these saves, it becomes\
      \ [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] by the stall and must use\
      \ all its movement on its turns to get as close to the stall as possible. The\
      \ effect lasts for 24 hours or until the stall dies, is on a different plane\
      \ of existence than the target, or ends the effect on the creature as a bonus\
      \ action."
    "name": "Alluring Affluence"
  - "desc": "The stall comprises a staff of 5 (2d4) [[5. Mechanics/Bestiary/Plant/Seed Coin Pollinator (GRIFFONSSADDLEBAG2).md|seed coin pollinators]].\
      \ This staff collectively shares the stall's Innate Spellcasting and Magic Resistance\
      \ traits, they can't willingly move more than 150 feet away from the stall,\
      \ and they seek to defend the stall at all costs, including to their own peril.\
      \ Some of the stall's effects can use a member or members of its staff as the\
      \ point of origin."
    "name": "Dedicated Staff"
  - "desc": "The stall is indistinguishable from a normal merchant stall. However,\
      \ a creature that has [[/5. Mechanics/Rules/Senses.md#Truesight|truesight]] sees\
      \ a deep red aura radiating from the stall, and a creature within 30 feet of\
      \ it that is under the effect of a [[5. Mechanics/Spells/Detect Poison And Disease.md|detect poison and disease]]\
      \ spell senses the insidious nature of the stall and knows it is a plant creature."
    "name": "False Appearance"
  - "desc": "The stall has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The stall doesn't require sleep. If the stall spends 1 hour in direct\
      \ sunlight, it receives enough nourishment to sustain itself for one day. If\
      \ the stall dies, it decomposes and is reduced to dirt within 7 days."
    "name": "Unusual Nature"
"actions":
  - "desc": "The stall causes dark, creeping vines to protrude from itself and its\
      \ staff, lashing out at creatures nearby. Each creature of the stall's choice\
      \ within 10 feet of it or a member of its staff must succeed on a DC 14 Strength\
      \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
      \ by the vines for 1 minute. While [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
      \ in this way, a creature has disadvantage on saving throws against the stall's\
      \ Alluring Affluence. A creature [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
      \ by the vines can use its action to make a DC 14 Strength check, freeing itself\
      \ on a success. These vines disappear if the stall dies, or if it uses this\
      \ action again. It can also choose to end the effect early on any number of\
      \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] creatures it chooses\
      \ as a bonus action."
    "name": "Enthralling Vines"
  - "desc": "The stall attempts to magically compel one creature [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ by it that is within 5 feet of the stall or a member of its staff to swallow\
      \ a [[5. Mechanics/Bestiary/Plant/Seed Coin (GRIFFONSSADDLEBAG2).md|seed coin]].\
      \ The target must make a DC 10 Wisdom saving throw. On a failed save, the target\
      \ swallows the coin and is subjected to the seed coin's Infestation. When subjected\
      \ to the effect in this way, the diseased creature is killed in a number of\
      \ hours equal to half its Wisdom score, unless the disease is removed. If the\
      \ target successfully saves against this effect or the effect ends for it, it\
      \ regurgitates the coin and is no longer [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ by the stall, and it is immune to the stall's Alluring Affluence for the next\
      \ 24 hours."
    "name": "Hostile Takeover"
"source":
  - "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
