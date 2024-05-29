---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/veor
  - monster/cr/6
  - monster/size/medium
  - monster/type/construct
statblock: inline
aliases:
  - Moonlight Guardian
---
# [[5. Mechanics/Bestiary/Construct/Moonlight Guardian.md|Moonlight Guardian]]
*Source: Vecna: Eve of Ruin p. 227*

> [!quote]- A quote from Werthil,Kender Adventurer  
> 
> Thought it was a person at first, but then I saw its head. Next, its arm. I knew I had to run.

Moonlight guardians are gleaming bipedal statues made of silver and mithral. They were originally created by a desperate mage on Krynn who drew the Moon card from a Deck of Many Things. The mage wished for a retinue of bodyguards ideally suited to fighting lycanthropes and other shapeshifting creatures. In response, the Moon card spawned the first moonlight guardian.

A moonlight guardian's body is infused with magical moonlight that the creature can channel into its blows. It can also unleash searing blasts of lunar energy that can expose shapeshifters by forcing them into their true forms.

```statblock
"name": "Moonlight Guardian"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "14d8 + 42"
"stats":
- !!int "19"
- !!int "9"
- !!int "16"
- !!int "6"
- !!int "12"
- !!int "6"
"speed": "30 ft."
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison, radiant"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 11"
"languages": "understands the languages of its creator but can't speak"
"cr": "6"
"traits":
- "desc": "The guardian is immune to any spell or other effect that would alter its\
    \ form."
  "name": "Immutable Form"
- "desc": "The guardian has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Whenever the guardian is subjected to radiant damage, it takes no damage\
    \ and instead regains a number of hit points equal to the radiant damage."
  "name": "Radiant Absorption"
"actions":
- "desc": "The guardian makes two Moonlight Slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
    \ + 4) bludgeoning damage plus 4 (1d8) radiant damage."
  "name": "Moonlight Slam"
- "desc": "The guardian unleashes a magical blast of moonlight in a line 60 feet long\
    \ and 5 feet wide. Each creature in that area must make a DC 14 Dexterity saving\
    \ throw. Creatures that aren't in their true form have disadvantage on the save.\
    \ On a failed save, a creature takes 22 (5d8) radiant damage, and if it isn't\
    \ in its true form, it is forced into its true form and can't change forms until\
    \ the end of the guardian's next turn. On a successful save, a creature takes\
    \ half as much damage only."
  "name": "Moonlight Blast (Recharge 5-6)"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Construct/token/moonlight-guardian-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
