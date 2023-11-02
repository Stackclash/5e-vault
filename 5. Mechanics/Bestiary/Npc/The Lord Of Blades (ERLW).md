---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/erlw
- monster/cr/18
- monster/size/medium
- monster/type/humanoid/warforged
statblock: inline
aliases: ["The Lord of Blades"]
---
# [The Lord of Blades](compendium\bestiary\npc/the-lord-of-blades-erlw.md)
*Source: Eberron: Rising from the Last War p. 300*  

The Lord of Blades is a warforged warlord who has broken all ties with his former masters. He has established a nation for his people deep in the Mournland, centered in a great fortress where warforged from all over Khorvaire can come and feel a sense of belonging. No one knows what the Lord of Blades plans for his followers, but many fear that he intends to build a legion of warforged zealots, primed to march from the Mournland to unleash destruction on their former masters.

Some tales assert that the Lord of Blades led the warforged armies of Cyre in the Last War. Others cast him as a newer warforged, perhaps the last to come out of the Cannith creation forges before the Thronehold Accords led to their dismantling. One story claims the Lord of Blades caused the destruction of Cyre and warns that he plans to repeat the Day of Mourning in each of the remaining Five Nations. Whatever the truth, he has become a beacon for warforged everywhere.

## Warforged Nature

The Lord of Blades doesn't require air, food, drink, or sleep.

```statblock
"name": "The Lord of Blades (ERLW)"
"size": "Medium"
"type": "humanoid"
"subtype": "warforged"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "195"
"hit_dice": "23d8 + 92"
"stats":
- !!int "20"
- !!int "15"
- !!int "18"
- !!int "19"
- !!int "17"
- !!int "18"
"speed": "40 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "10"
  "Strength": !!int "11"
  "Constitution": !!int "10"
"skillsaves":
  "Athletics": !!int "11"
  "Perception": !!int "9"
  "History": !!int "10"
  "Arcana": !!int "10"
"damage_resistances": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "passive Perception 19"
"languages": "Common, Draconic, Dwarvish, Elvish"
"cr": "18"
"traits":
- "desc": "The Lord of Blades is a 20th-level spellcaster. His spellcasting ability\
    \ is Intelligence (spell save DC 18, dice: d20+10 (+10 to hit) with spell attacks).\
    \ He has the following artificer spells prepared:\n\nCantrips (at will): [fire\
    \ bolt](compendium/spells/fire-bolt.md) (see \"Actions\" below), [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Mending.md|mending]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Expeditious Retreat.md|expeditious retreat]],\
    \ [[5. Mechanics/Spells/Sanctuary.md|sanctuary]], [[5. Mechanics/Spells/Thunderwave.md|thunderwave]]\n\
    \n2nd level (3 slots): [[5. Mechanics/Spells/Blur.md|blur]], [[5. Mechanics/Spells/Heat Metal.md|heat metal]],\
    \ [[5. Mechanics/Spells/Scorching Ray.md|scorching ray]], [[5. Mechanics/Spells/See Invisibility.md|see invisibility]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
    \ [[5. Mechanics/Spells/Fly.md|fly]], [[5. Mechanics/Spells/Haste.md|haste]]\n\n4th\
    \ level (3 slots): [[5. Mechanics/Spells/Freedom Of Movement.md|freedom of movement]],\
    \ [[5. Mechanics/Spells/Mordenkainens Faithful Hound.md|Mordenkainen's faithful hound]]\n\
    \n5th level (2 slots): [[5. Mechanics/Spells/Animate Objects.md|animate objects]],\
    \ [[5. Mechanics/Spells/Wall Of Force.md|wall of force]]"
  "name": "spells"
- "desc": "Any critical hit against the Lord of Blades becomes a normal hit."
  "name": "Adamantine Plating"
- "desc": "A creature that grapples the Lord of Blades or is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ by him takes dice: 3d8|avg (3d8) slashing damage. A creature takes dice:\
    \ 3d8|avg (3d8) slashing damage if it starts its turn grappling or being [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ by the Lord of Blades."
  "name": "Bladed Armor"
- "desc": "If the Lord of Blades moves at least 10 feet straight toward a target and\
    \ then hits it with his adamantine sixblade on the same turn, the target takes\
    \ an extra dice: 2d10|avg (2d10) slashing damage. If the target is a creature,\
    \ it must succeed on a DC 19 Strength saving throw or be pushed up to 10 feet\
    \ away and knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Charge"
- "desc": "The Lord of Blades has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]],\
    \ is immune to disease, and magic can't put him to sleep."
  "name": "Warforged Resilience"
"actions":
- "desc": "The Lord of Blades makes three attacks: two with his adamantine sixblade\
    \ and one with his bladed wings."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+11 (+11 to hit), reach 10 ft., one target.\
    \ Hit: dice: 3d10 + 5|avg (3d10 + 5) slashing damage plus dice: 2d6|avg\
    \ (2d6) force damage."
  "name": "Adamantine Sixblade"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+11 (+11 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d6 + 5|avg (1d6 + 5) slashing\
    \ damage."
  "name": "Bladed Wings"
- "desc": "Ranged Spell Attack: dice: d20+10 (+10 to hit), range 120 ft., one\
    \ target. Hit: dice: 4d10|avg (4d10) fire damage."
  "name": "Fire Bolt (Cantrip)"
"legendary_actions":
- "desc": "The Lord of Blades makes one weapon attack."
  "name": "Attack"
- "desc": "The Lord of Blades casts one of his cantrips."
  "name": "Cantrip"
- "desc": "The Lord of Blades casts a spell of 2nd level or lower from his spell list\
    \ that takes 1 action to cast."
  "name": "Cast a Spell (Costs 2 Actions)"
- "desc": "The Lord of Blades moves up to his speed without provoking opportunity\
    \ attacks, then makes one attack with his adamantine sixblade. He can make one\
    \ bladed wings attack against each creature he moves past."
  "name": "Blade Dash (Costs 3 Actions)"
"source":
- "ERLW"
"image": "compendium/bestiary/npc/token/the-lord-of-blades.png"
```
^statblock