---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/10
  - monster/size/large
  - monster/type/construct
statblock: inline
aliases:
  - Nature
---
# [[5. Mechanics/Bestiary/Construct/Nature.md|Nature]]
*Source: Strongholds and Followers p. 232*

Chief amongst the Knights of Axiom is Nature. The Law of Nature states that all actions must proceed according to the fundamental axioms of the universe.. Magic is a tool used by those who would bypass those laws and act on the world using their will alone. This cannot be permitted. Nature can reflexively attempt to counter a spell as it's being cast, pointing at the caster and bellowing, "OBEY!" or "CONFORM!"

Nature has no particular interest in the local phenomenon humans call "nature." Plants and streams and such. To the Inexorables, "Nature" is stars and elementary particles. The world Men inhabit is messy but legal as far as the Inexorables are concerned. Until someone starts using magic.

## Tactics

Nature's counterspell reaction has a range of 60 feet, so Nature can pummel easy-to-reach enemies while keeping tabs on enemy wizards and denying them their spells. Nature also abhors creatures who travel to other planes under their own power, especially fiends and members of the Court of All Flesh, whom the Inexorables hate above all others.

```statblock
"name": "Nature"
"size": "Large"
"type": "construct"
"alignment": "Lawful"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "190"
"hit_dice": "20d10 + 80"
"stats":
- !!int "20"
- !!int "11"
- !!int "18"
- !!int "15"
- !!int "18"
- !!int "20"
"speed": "40 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "4"
  "Wisdom": !!int "8"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 60 ft., passive Perception 14"
"languages": "all those of the creature who summoned it"
"cr": "10"
"traits":
- "desc": "Nature's innate spellcasting ability is Charisma (spell save DC 17). It\
    \ can innately cast the following spells, requiring no material components:\n\n\
    3/day: [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Counterspell.md|counterspell]]"
  "name": "innate"
- "desc": "Allies within 20 feet have advantage on all saving throws."
  "name": "The Law of Nature"
- "desc": "The Inexorables are immune to any effects that would slow them or deny\
    \ them actions or movement."
  "name": "Inexorable"
- "desc": "As a reaction to missing an attack, Nature makes a DC 15 Wisdom saving\
    \ throw. On a successful save, the original attack is successful."
  "name": "By Will Alone"
"actions":
- "desc": "Nature makes two slam attacks or makes one slam attack and casts banishment."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 10 ft., one target.\
    \ Hit: dice:2d6 + 5|text(12) (2d6 + 5) bludgeoning damage plus dice:4d8|text(18)\
    \ (4d8) force damage."
  "name": "Slam"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Construct/token/nature-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
