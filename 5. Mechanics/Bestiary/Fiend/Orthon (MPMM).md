---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: 'desert, underdark, urban'
size: Large
tags:
  - compendium/src/5e/mpmm
  - monster/cr/10
  - monster/environment/desert
  - monster/environment/underdark
  - monster/environment/urban
  - monster/size/large
  - monster/type/fiend/devil
aliases:
  - Orthon
---
# [[5. Mechanics\Bestiary\Fiend\Orthon (MPMM).md|Orthon]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 205, Mordenkainen's Tome of Foes p. 169*

When an archduke of the Nine Hells needs a creature tracked, found, and either done away with or captured, the task usually falls to an orthon. These devils are infernal bounty hunters, tireless in their pursuit of their quarry across the multiverse.

Orthons are infamous for their sharp senses. Because an orthon can become invisible at will, its quarry is often unaware of being hunted until the orthon strikes. This invisibility can be disrupted when the devil is attacked, however, so a strong counterattack is often the best defense against it.

Orthons value the challenge of the chase and the thrill of one-on-one combat above all else. An orthon's first loyalty is to its archduke, but one with no immediate assignment might work for anyone who promises it a worthy struggle against a lethal foe. Because they travel widely, orthons are unequaled as guides through the layers of the Nine Hells.

```statblock
"name": "Orthon (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Typically  Lawful Evil"
"ac": !!int "17"
"ac_class": "[[5. Mechanics/Items/Half Plate Armor.md|half plate]]"
"hp": !!int "105"
"hit_dice": "10d10 + 50"
"modifier": !!int "3"
"stats":
  - !!int "22"
  - !!int "16"
  - !!int "21"
  - !!int "15"
  - !!int "15"
  - !!int "16"
"speed": "30 ft., climb 30 ft."
"saves":
  - "dexterity": "+7"
  - "constitution": "+9"
  - "wisdom": "+6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+10"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+11"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Survival|Survival]]"
    "desc": "+10"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., truesight 30 ft., passive Perception 20"
"languages": "Common, Infernal, telepathy 120 ft."
"cr": "10"
"traits":
  - "desc": "The orthon has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d4 + 6) force damage, and the target must make a DC 17 Constitution saving\
      \ throw, taking 22 (4d10) poison damage on a failed save, or half as much damage\
      \ on a successful one. On a failure, the target is [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ for 1 minute. The [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]] target\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success."
    "name": "Infernal Dagger"
  - "desc": "Ranged Weapon Attack: +7 to hit, range 100/400 ft., one target. Hit:\
      \ 14 (2d10 + 3) force damage. The target also suffers one of the following effects\
      \ of the orthon's choice; the orthon can't use the same effect two rounds in\
      \ a row:\n\n- Acid. The target must make a DC 17 Constitution saving throw,\
      \ taking an additional 17 (5d6) acid damage on a failed save, or half as much\
      \ damage on a successful one.  \n- Blindness. The target takes 5 (d10) radiant\
      \ damage. In addition, the target and all other creatures within 20 feet of\
      \ it must each make a successful DC 17 Dexterity saving throw or be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
      \ until the end of the orthon's next turn.  \n- Concussion. The target and\
      \ each creature within 20 feet of it must make a DC 17 Constitution saving throw,\
      \ taking 13 (2d12) thunder damage on a failed save, or half as much damage on\
      \ a successful one.  \n- Entanglement. The target must make a successful\
      \ DC 17 Dexterity saving throw or be [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]\
      \ for 1 hour by strands of sticky webbing. The target can escape by taking an\
      \ action to make a DC 17 Strength or Dexterity check and succeeding.  \n- Paralysis.\
      \ The target takes 22 (4d10) lightning damage and must make a successful DC\
      \ 17 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
      \ for 1 minute. The [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]] target\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success.  \n- Tracking. For the next 24 hours, the orthon\
      \ knows the direction and distance to the target, as long as it's on the same\
      \ plane of existence. If the target is on a different plane, the orthon knows\
      \ which one, but not the exact location there.  "
    "name": "Brass Crossbow"
"bonus_actions":
  - "desc": "The orthon becomes [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]].\
      \ Any equipment it wears or carries is also [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ as long as the equipment is on its person. This invisibility ends immediately\
      \ after it makes an attack roll or is hit by an attack roll."
    "name": "Invisibility Field (Recharge 4-6)"
"reactions":
  - "desc": "In response to dropping to 15 hit points or fewer, the orthon explodes.\
      \ All other creatures within 30 feet of it must each make a DC 17 Dexterity\
      \ saving throw, taking 9 (2d8) fire damage plus 9 (2d8) thunder damage on a\
      \ failed save, or half as much damage on a successful one. The orthon, its infernal\
      \ dagger, and its brass crossbow are destroyed."
    "name": "Explosive Retribution"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Fiend/token/orthon-mpmm.webp"
```
^statblock

## Environment

desert, underdark, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
