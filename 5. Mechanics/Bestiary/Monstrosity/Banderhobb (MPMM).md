---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: urban
size: Large
tags:
  - compendium/src/5e/mpmm
  - monster/cr/5
  - monster/environment/urban
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Banderhobb
---
# [[5. Mechanics\Bestiary\Monstrosity\Banderhobb (MPMM).md|Banderhobb]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 56, Volo's Guide to Monsters p. 122*

A banderhobb is a hybrid of shadow and flesh. Through vile magic, these components take on an enormous and horrific upright shape resembling a bipedal toad. In this form, a banderhobb temporarily serves its creator as a thug, a thief, and a kidnapper that swallows the unwary.

Hags have devised a ritual for creating banderhobbs—a hag who knows the ritual might be willing to teach it for the right price. Some other wicked Fey and powerful Fiends also know of the process, as do a few mortal mages.

During its brief existence, a banderhobb attempts to carry out its creator's bidding. It accomplishes its mission with no concern for the harm it suffers or causes. Its only desire is to serve and succeed. A banderhobb that is assigned to track down a target is particularly dangerous when it is provided with a lock of hair, a personal belonging, or another object connected to the target. Possession of such an item allows it to sense the creature's location from as far as a mile away.

A banderhobb fulfills its duties until its existence ends. When it expires, usually several days after its birth, it leaves behind only tarry goo and wisps of shadow. Legends tell of an ominous tower in the Shadowfell where the shadows sometimes reform and banderhobbs roam.

```statblock
"name": "Banderhobb (MPMM)"
"size": "Large"
"type": "monstrosity"
"alignment": "Typically  Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "84"
"hit_dice": "8d10 + 40"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "20"
  - !!int "11"
  - !!int "14"
  - !!int "8"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+7"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "understands Common and the languages of its creator but can't speak"
"cr": "5"
"traits":
  - "desc": "If the banderhobb has even a tiny piece of a creature or an object in\
      \ its possession, such as a lock of hair or a splinter of wood, it knows the\
      \ most direct route to that creature or object if it is within 1 mile of the\
      \ banderhobb."
    "name": "Resonant Connection"
"actions":
  - "desc": "The banderhobb makes one Bite attack and one Tongue attack. It can replace\
      \ one attack with a use of Shadow Step."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15\
      \ (3d6 + 5) piercing damage, and the target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 16) if it is a Large or smaller creature. Until this grapple ends,\
      \ the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], and\
      \ the banderhobb can't use its Bite attack or Tongue attack on another target."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 15 ft., one creature. Hit:\
      \ 10 (3d6) necrotic damage, and the target must make a DC 16 Strength saving\
      \ throw. On a failed save, the target is pulled to a space within 5 feet of\
      \ the banderhobb."
    "name": "Tongue"
  - "desc": "The banderhobb teleports up to 30 feet to an unoccupied space of dim\
      \ light or darkness that it can see."
    "name": "Shadow Step"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one Medium or smaller\
      \ creature [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]] by the banderhobb.\
      \ Hit: 15 (3d6 + 5) piercing damage. The creature is also swallowed, and the\
      \ grapple ends. The swallowed creature is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
      \ and [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], it has total\
      \ cover against attacks and other effects outside the banderhobb, and it takes\
      \ 10 (3d6) necrotic damage at the start of each of the banderhobb's turns. A\
      \ creature reduced to 0 hit points in this way stops taking the necrotic damage\
      \ and becomes stable.\n\nThe banderhobb can have only one creature swallowed\
      \ at a time. While the banderhobb isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]],\
      \ it can regurgitate the creature at any time (no action required) in a space\
      \ within 5 feet of it. The creature exits [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ If the banderhobb dies, it likewise regurgitates a swallowed creature."
    "name": "Swallow"
"bonus_actions":
  - "desc": "While in dim light or darkness, the banderhobb takes the [[/5. Mechanics/Rules/Actions.md#Hide|Hide]]\
      \ action."
    "name": "Shadow Stealth"
"source":
  - "MPMM"
  - "VGM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/banderhobb-mpmm.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
