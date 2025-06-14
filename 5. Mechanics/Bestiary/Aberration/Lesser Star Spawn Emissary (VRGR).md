---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 19
environments: null
size: Medium
tags:
  - compendium/src/5e/vrgr
  - monster/cr/19
  - monster/size/medium
  - monster/type/aberration
aliases:
  - Lesser Star Spawn Emissary
---
# [[5. Mechanics\Bestiary\Aberration\Lesser Star Spawn Emissary (VRGR).md|Lesser Star Spawn Emissary]]
*Source: Van Richten's Guide to Ravenloft p. 245*

A star spawn emissary's lesser form allows it to appear as any creature. Emissaries have no misplaced pride and just as readily appear as people, animals, or other creatures—the more unassuming, the better. Should it reveal its true form, an emissary appears as a roughly bipedal mass of agitated organs, self-cannibalizing alien orifices, and appendages suggestive of forms it has previously assumed.

## Star Spawn Emissary

Few understand the full hungry hostility of the multiverse. Star spawn emissaries are the fingers of alien realms, digits that tip the scales of reality toward terror. Heralded by ominous astrological events, these ravenous invaders make worlds ready for unimaginable masters or distant, greater manifestations of themselves. Employing their malleable forms, emissaries work to undermine perceptions of order, trust, and reality on global scales, readying worlds for sanity-shattering revelations and cascading apocalypses. Only when truly threatened, or when their foes have lost all hope, do emissaries reveal their actual, impossible forms.

### Forms of the Emissary

Star spawn emissaries can assume two forms: a lesser form suited to infiltration and a greater, physically overwhelming form. To destroy an emissary, characters must reduce each of its forms to 0 hit points one after another. Typically, a star spawn emissary is initially encountered in its lesser form. When this form is destroyed, the emissary's body collapses into a gory slurry. It then instantly returns in its greater form. Only if the emissary is defeated in its greater form does the star spawn die.

After finishing a long rest, a greater star spawn emissary regains its lesser form if it was destroyed. When an emissary transitions from one form to another, it loses all the traits and actions of the previous form and gains those of the new form.

```statblock
"name": "Lesser Star Spawn Emissary (VRGR)"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "241"
"hit_dice": "21d8 + 147"
"modifier": !!int "4"
"stats":
  - !!int "21"
  - !!int "18"
  - !!int "24"
  - !!int "25"
  - !!int "20"
  - !!int "23"
"speed": "40 ft., fly 40 ft. (hover)"
"saves":
  - "intelligence": "+13"
  - "wisdom": "+11"
  - "charisma": "+12"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+19"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+18"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+11"
"damage_resistances": "acid, force, necrotic, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 1,000 ft."
"cr": "19"
"traits":
  - "desc": "When the emissary drops to 0 hit points, its body melts away. A greater\
      \ star spawn emissary instantly appears in an unoccupied space within 60 feet\
      \ of where the lesser emissary disappeared. The greater emissary uses the lesser\
      \ emissary's initiative count."
    "name": "Aberrant Rejuvenation"
  - "desc": "If the emissary fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The emissary doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The emissary makes three attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 16\
      \ (2d10 + 5) piercing damage plus 13 (3d8) acid damage."
    "name": "Lashing Maw"
  - "desc": "Ranged Spell Attack: +13 to hit, range 120 ft., one creature. Hit:\
      \ 18 (2d10 + 7) psychic damage."
    "name": "Psychic Orb"
  - "desc": "The emissary polymorphs into a Small or Medium creature of its choice\
      \ or back into its true form. Its statistics, other than its size, are the same\
      \ in each form. Any equipment it is wearing or carrying isn't transformed."
    "name": "Change Shape"
"legendary_actions":
  - "desc": "The emissary makes a Psychic Orb attack."
    "name": "Psychic Orb"
  - "desc": "The emissary teleports to an unoccupied space it can see within 30 feet\
      \ of it and can make a Lashing Maw attack."
    "name": "Teleportation Maw (Costs 2 Actions)"
  - "desc": "The emissary targets a creature it can see within 30 feet of it and psychically\
      \ lashes at that creature's mind. The target must succeed on a DC 21 Wisdom\
      \ saving throw or take 36 (8d8) psychic damage and be [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
      \ until the start of its next turn."
    "name": "Psychic Lash (Costs 3 Actions)"
"source":
  - "VRGR"
"image": "5. Mechanics/Bestiary/Aberration/token/lesser-star-spawn-emissary-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
