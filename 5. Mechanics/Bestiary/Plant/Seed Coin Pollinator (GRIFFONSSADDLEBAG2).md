---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1/8
environments: null
size: Medium
tags:
  - compendium/src/5e/griffonssaddlebag2
  - monster/cr/1-8
  - monster/size/medium
  - monster/type/plant
aliases:
  - Seed Coin Pollinator
---
# [[5. Mechanics\Bestiary\Plant\Seed Coin Pollinator (GRIFFONSSADDLEBAG2).md|Seed Coin Pollinator]]
*Source: The Griffon's Saddlebag, Book 2 p. 341*

Once a seed coin has fully taken root in its host's mind, it begins to burrow into their flesh. From there, it begins to expand its vines through the veins of the deceased creature, utilizing the abundant moisture, nutrients, and direct access to the body's brain and lungs. Once it has spread, it puppets the form with these vines, though the bulk of it resides in the unmoving lungs and skull cavity. This rapid growth strengthens the body's cell walls, making them heardier and more plant-like below the skin's surface. The appearance changes little, but the pollinator is most certainly a plant and not a humanoid.

```statblock
"name": "Seed Coin Pollinator (GRIFFONSSADDLEBAG2)"
"size": "Medium"
"type": "plant"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "7"
"hit_dice": "1d8 + 3"
"stats":
- !!int "10"
- !!int "10"
- !!int "17"
- !!int "10"
- !!int "10"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "5"
  "Persuasion": !!int "5"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]]"
"senses": "passive Perception 10"
"languages": "the languages its host knew in life"
"cr": "1/8"
"traits":
- "desc": "The pollinator is indistinguishable from a normal commoner, and it appears\
    \ and sounds exactly like the creature it was before becoming infested. However,\
    \ a creature that has [[/5. Mechanics/Rules/Senses.md#Truesight|truesight]] sees\
    \ a deep red aura radiating from the pollinator, and a creature within 30 feet\
    \ of it that is under the effect of a [[5. Mechanics/Spells/Detect Poison And Disease.md|detect poison and disease]]\
    \ spell senses the insidious nature of the pollinator and knows it is a plant\
    \ creature."
  "name": "False Appearance"
- "desc": "The pollinator doesn't require sleep. If the pollinator spends 1 hour in\
    \ direct sunlight, it receives enough nourishment to sustain itself for one day.\
    \ When the pollinator dies, it becomes an ordinary humanoid corpse."
  "name": "Unusual Nature"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4)\
    \ damage."
  "name": "Dagger"
- "desc": "The pollinator hurls a flurry of [[5. Mechanics/Bestiary/Plant/Seed Coin (GRIFFONSSADDLEBAG2).md|seed coins]]\
    \ at one creature it can see within 10 feet of it. The target must make a DC 10\
    \ Dexterity saving throw, taking 10 (4d4) bludgeoning damage on a failed save,\
    \ or half as much damage on a successful one. If the saving throw fails by 5 or\
    \ more, one of the seed coins gets lodged on the target's body (for example, in\
    \ a pocket or a fold in its clothing)."
  "name": "Coin Spray (Recharge 6)"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
