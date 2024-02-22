---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/cr/2
- monster/size/medium
- monster/type/monstrosity
statblock: inline
aliases: ["Swarm of Gremishkas"]
---
# [[5. Mechanics\Bestiary\Monstrosity\Swarm Of Gremishkas.md|Swarm of Gremishkas]]
*Source: Van Richten's Guide to Ravenloft p. 235*  

Gremishkas are the vicious products of mistakes made by novice spellcasters seeking to create life. The results are cat-sized, magically unstable creatures with a taste for the trappings of magic—particularly spellbooks, spell components, familiars, and the like. Gremishkas delight in tormenting magic-users, holding vicious grudges against those who gave them life as they infest the walls of spellcasters' homes or the surrounding lands.

Despite their feral appearances, gremishkas are cunning creatures. They might imitate the sounds of whimpering children or wounded animals to coax victims into tight quarters. While they favor attacking spellcasters, gremishkas are opportunistic hunters and lash out at anything they think they can overwhelm—or just get a bite of.

Gremishkas have an unstable relationship with magic. Spells cast near a gremishka might rebound onto those nearby or cause the monster to explode, its scaly chunks rapidly reforming into duplicate gremishkas. These spontaneously created swarms can rapidly turn a single annoying gremishka into a chittering, magic-reflecting wave of teeth and claws.

```statblock
"name": "Swarm Of Gremishkas"
"size": "Medium"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "24"
"hit_dice": "7d6"
"stats":
- !!int "12"
- !!int "14"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "4"
"speed": "25 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]"
"senses": "darkvision 30 ft., passive Perception 14"
"languages": "understands Common but can't speak"
"cr": "2"
"traits":
- "desc": "The swarm automatically succeeds on saving throws against spells of 3rd\
    \ level or lower, and the attack rolls of such spells always miss it."
  "name": "Limited Spell Immunity"
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny gremishka. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 0 ft., one target\
    \ in the swarm's space. Hit: dice: 3d6 + 2|avg (3d6 + 2) piercing damage,\
    \ or dice: 1d6 + 2|avg (1d6 + 2) piercing damage if the swarm has half of\
    \ its hit points or fewer, plus dice: 2d6|avg (2d6) force damage."
  "name": "Bites"
"reactions":
- "desc": "In response to a spell attack roll missing the swarm, the swarm causes\
    \ that spell to hit another creature of its choice within 30 feet of it that it\
    \ can see."
  "name": "Spell Redirection"
"source":
- "VRGR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/swarm-of-gremishkas-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```