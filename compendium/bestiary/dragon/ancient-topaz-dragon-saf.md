---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 20
environments: 
size: Gargantuan
tags:
- compendium/src/5e/saf
- monster/cr/20
- monster/size/gargantuan
- monster/type/dragon
aliases: ["Ancient Topaz Dragon"]
---
# [Ancient Topaz Dragon](compendium\bestiary\dragon/ancient-topaz-dragon-saf.md)
*Source: Strongholds and Followers p. 217*

The youngest species, the most enthusiastic about the world, the one you're most likely to meet, topaz dragons study magic obsessively, and their older kin consider this juvenile. When you're older you'll realize magic is just ambient interference from overlapping manifolds constrained by oblique functions. Well, poo on that, look, I made a fireball!

They're fascinated by it, and they collect scrolls and tomes like other dragons hoard gold pieces and gemstones, which the topaz dragons find vaguely threatening. Why the obsession with gemstones in particular? Why would you sleep on a bed of them if you weren't trying to make a statement? I don't sleep on a bed of scales. Harumph.

They all seem like absentminded professors. They accumulate so much lore that they spend all their time categorizing it, and just when they have everything neatly filed away they realize this one treatise doesn't fit any classification and the whole thing must be redone from scratch. Ugh. It will take millennia at this rate.

They're approachable and easy to talk to as long as you don't mind never getting a straight answer. You'd think they'd be experts on everything, considering how many books they have, but the opposite is true. They can imagine anything and defend it with references, many of which contradict each other.

```statblock
"name": "Ancient Topaz Dragon (SaF)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral Good"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "231"
"hit_dice": "22d20 + 0"
"stats":
- !!int "20"
- !!int "24"
- !!int "10"
- !!int "22"
- !!int "16"
- !!int "20"
"speed": "40 ft., fly 80 ft. (hover)"
"saves":
  "Charisma": !!int "11"
  "Dexterity": !!int "13"
  "Wisdom": !!int "9"
  "Intelligence": !!int "12"
"skillsaves":
  "Religion": !!int "12"
  "Insight": !!int "9"
  "Perception": !!int "9"
  "Arcana": !!int "12"
"damage_vulnerabilities": "psychic"
"damage_resistances": "bludgeoning, slashing, piercing from nonmagical weapons"
"damage_immunities": "fire, lightning"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 25"
"languages": "Common, Draconic, telepathy 120 ft."
"cr": "20"
"traits":
- "desc": "[Gemstone Dragon Psionics](/compendium/rules/variant-rules/gemstone-dragon-psionics-saf.md).\
    \ Charges: 22 • Recharge: 1d10 • Fracture: 23"
  "name": ""
- "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "All allies within 30 feet gain +6 on Intelligence checks and saving throws."
  "name": "Uplift Aura"
"actions":
- "desc": "The dragon makes three attacks: one with its bite and two with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 16\
    \ (2d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 12\
    \ (2d6 + 5) slashing damage."
  "name": "Claw"
- "desc": "Melee Weapon Attack: +11 to hit; reach 20 ft., one target. Hit: 14\
    \ (2d8 + 5) bludgeoning damage."
  "name": "Tail"
"legendary_actions":
- "desc": "The dragon makes a Wisdom ([Perception](/compendium/rules/skills.md#Perception))\
    \ Check."
  "name": "Detect"
- "desc": "The dragon uses a [psionic ability](compendium/lists/list-optfeaturetype-psi-man.md)."
  "name": "Psionics"
- "desc": "The dragon releases a wave of telekinetic energy from its mind. Every creature\
    \ within 15 feet must make a DC 24 Intelligence saving throw or take 13 (2d6 +\
    \ 6) force damage and be knocked [prone](/compendium/rules/conditions.md#Prone).\
    \ The dragon then can move up to half its movement speed."
  "name": "Psionic Shift (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), the dragon takes a lair\
    \ action to cause one of the following effects. The dragon can't use the same\
    \ effect two rounds in a row."
  "name": ""
- "desc": "- The dragon manifests [another world](compendium/optional-features/another-world-saf.md)\
    \ at no cost. It affects up to four creatures.  \n- The dragon remembers a 5th-level\
    \ spell it once researched, and casts it. Its spellcasting ability is Intelligence,\
    \ and the save DC to resist its spells is 21.  \n- The dragon remembers [counterspell](compendium/spells/counterspell.md)\
    \ and can cast it as a reaction within the next minute. The dragon's spellcasting\
    \ ability is Intelligence.  "
  "name": ""
"regional_effects":
- "desc": "Intelligent creatures who sleep within 12 miles of a topaz dragon's lair\
    \ dream of ancient lore they never studied, and in these dreams they hold conversations\
    \ with sages speaking languages the dreamer does not know, but in the dream can\
    \ speak and understand."
  "name": ""
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Large%20Topaz%20Dragon.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```