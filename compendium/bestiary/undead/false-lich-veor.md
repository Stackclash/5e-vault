---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 21
environments: 
size: Medium
tags:
- compendium/src/5e/veor
- monster/cr/21
- monster/size/medium
- monster/type/undead
aliases: ["False Lich"]
---
# [False Lich](compendium\bestiary\undead/false-lich-veor.md)
*Source: Vecna: Eve of Ruin p. 220*

Occasionally, liches create nefarious magical copies of themselves to fool enemies, to guard treasure, or for other inscrutable reasons.

To create a false lich, a lich binds a shred of its life force to a corpse in a profane ritual. This transforms the corpse into a near-identical copy of the lich with immense necrotic power and some of its creator's arcane prowess. The creator then embeds enchanted gemstones into the corpse's eye sockets; the gems allow the false lich to trap creatures' souls and transfer the souls to its creator.

A false lich often gradually gains a sense of self-identity. While many false liches remain steadfastly loyal to their creators, others resent their creators for imprisoning and abandoning them.

```statblock
"name": "False Lich (VEoR)"
"size": "Medium"
"type": "undead"
"alignment": "typically  Neutral Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "199"
"hit_dice": "21d8 + 105"
"stats":
- !!int "10"
- !!int "16"
- !!int "20"
- !!int "25"
- !!int "19"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "9"
  "Wisdom": !!int "11"
  "Intelligence": !!int "14"
  "Constitution": !!int "12"
"damage_immunities": "necrotic; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [stunned](/compendium/rules/conditions.md#Stunned)"
"senses": "truesight 60 ft., passive Perception 14"
"languages": "Abyssal, Common, Draconic, Dwarvish, Elvish, Giant, Infernal, Primordial,\
  \ Undercommon"
"cr": "21"
"traits":
- "desc": "The false lich casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 22):\n\nAt will: [Detect Magic](compendium/spells/detect-magic.md), [Fly](compendium/spells/fly.md),\
    \ [Mage Hand](compendium/spells/mage-hand.md), [Prestidigitation](compendium/spells/prestidigitation.md)\n\
    \n1/day each: [Globe of Invulnerability](compendium/spells/globe-of-invulnerability.md),\
    \ [Hold Monster](compendium/spells/hold-monster.md)\n\n3/day each: [Dispel\
    \ Magic](compendium/spells/dispel-magic.md), [Invisibility](compendium/spells/invisibility.md)\
    \ (self only)"
  "name": "Spellcasting"
- "desc": "If the false lich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The false lich has advantage on saving throws against spells and magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The false lich makes two Death Rend attacks and uses Bloodcurdling Lament\
    \ if available."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: +14 to hit, reach 5 ft., one target. Hit: 23 (3d10\
    \ + 7) necrotic damage."
  "name": "Death Rend"
- "desc": "The false lich emits a hideous shriek charged with malignant energy. Each\
    \ creature within 30 feet of the false lich must succeed on a DC 22 Wisdom saving\
    \ throw or have the [frightened](/compendium/rules/conditions.md#Frightened) condition\
    \ for 1 minute. While [frightened](/compendium/rules/conditions.md#Frightened)\
    \ in this way, a creature also has the [unconscious](/compendium/rules/conditions.md#Unconscious)\
    \ condition. An affected creature can repeat the saving throw at the end of each\
    \ of its turns, ending the effect on itself on a success."
  "name": "Bloodcurdling Lament (Recharge 5-6)"
"bonus_actions":
- "desc": "The false lich targets one creature it can see within 120 feet of itself.\
    \ The target must make a DC 22 Charisma saving throw; if the target has the [unconscious](/compendium/rules/conditions.md#Unconscious)\
    \ condition, it has disadvantage on this saving throw. The target takes 21 (6d6)\
    \ force damage on a failed save or half as much damage on a successful one. The\
    \ false lich then regains a number of hit points equal to the amount of force\
    \ damage taken.\n\nIf this damage reduces the target to 0 hit points, the target\
    \ immediately dies, its body disappears, and its soul is trapped inside one of\
    \ the soul gems within the false lich's skull. After 24 hours, the gem transfers\
    \ the soul to the false lich's creator.\n\nWhen the false lich is reduced to 0\
    \ hit points, it is destroyed and disintegrates, leaving behind the gems. Crushing\
    \ a gem releases any souls trapped within, at which point the soul's body re-forms\
    \ in an unoccupied space nearest to the gem and in the same state as it was when\
    \ its soul was trapped."
  "name": "Soul Siphon"
"legendary_actions":
- "desc": "The false lich, along with anything it is wearing or carrying, teleports\
    \ to an unoccupied space it can see within 60 feet of itself. It then makes one\
    \ Death Rend attack if possible."
  "name": "Spiteful Teleport"
- "desc": "The false lich uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"source":
- "VEoR"
"image": "compendium/bestiary/undead/token/false-lich-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```