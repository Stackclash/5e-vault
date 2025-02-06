---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(KPDM)
  - monster\Cr\2
  - monster\Size\Large
  - monster\Type\Construct
aliases:
  - Nisruel's Coachfly
---
# [[5. Mechanics\Bestiary\Construct\Nisruels Coachfly (KPDM).md|Nisruel's Coachfly]]
*Source: Deep Magic p. 287*

*This long, narrow contraption resembles a clockwork dragonfly that's larger than a horse. It is fashioned from silver and lapis lazuli, with panes of delicate-looking multicolored stained glass for wings. The back of the construct contains a hollow that looks like it could hold one or more occupants.*

Decades ago, the noble half-elf wizard Nisruel created a beautiful clockwork construct fashioned after the enormous dragonflies of her marshy homeland. Though she was usually content to teleport when she wanted to go somewhere, sometimes Nisruel wanted to travel in style—so she crafted this construct to impress her friends and others in the elven court. Word of her wondrous carriage spread throughout the land shortly after she revealed it, and Nisruel enjoyed receiving recognition for her work. Sadly, her fame also drew the ire of her rival, the sorceress Ymelda, who lured Nisruel and her construct into the web of a gargantuan spider before ambushing the wizard with foul magic. Both Nisruel and Ymelda died in this struggle, but Nisruel's construct survived intact, and it still lies caught up in the webs of the great arachnid, awaiting rescue.

```statblock
"name": "Nisruels Coachfly (KPDM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d10 + 16"
"stats":
- !!int "12"
- !!int "18"
- !!int "14"
- !!int "3"
- !!int "10"
- !!int "1"
"speed": "20 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "4"
"damage_immunities": "poison, psychic, radiant"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "darkvision 90 ft., passive Perception 14"
"languages": "understands Common and Elvish but can't speak"
"cr": "2"
"traits":
- "desc": "One Medium creature, two Small creatures, or four Tiny creatures can comfortably\
    \ fit inside the compartment at the rear of the coachfly. A creature inside the\
    \ compartment is protected from the effects of wind, rain, and snow, and can share\
    \ any spell it casts on itself with the coachfly if the spell also affects constructs.\
    \ A creature can enter or leave the compartment as an action but cannot fall out\
    \ even if the coachfly is upside down and has advantage on grapple checks to avoid\
    \ being dragged out. Creatures in the compartment also have total cover against\
    \ all attacks, though if the coachfly fails a saving throw against an area attack\
    \ that deals damage, those in the compartment take half as much damage. If the\
    \ coachfly is destroyed, occupants are ejected into an unoccupied space within\
    \ 5 feet of it.\n\nAn occupant of the compartment can direct the coachfly to move\
    \ and to make attacks against a target within range. Only one occupant can direct\
    \ the coachfly in each round, even if it has multiple occupants. If the coachfly\
    \ is not being controlled, it moves and attacks only to defend itself."
  "name": "Compartment"
- "desc": "The coachfly is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The coachfly has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The coachfly makes two Light Ray attacks."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 13\
    \ (2d8 + 4) radiant damage. A creature struck by the ray must also make a successful\
    \ DC 14 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
    \ until the end of its next turn."
  "name": "Light Ray"
"source":
- "KPDM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
