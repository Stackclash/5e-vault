---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/23
- monster/size/large
- monster/type/fiend/demon
statblock: inline
aliases: ["Zuggtmoy"]
---
# [Zuggtmoy](compendium\bestiary\npc/zuggtmoy-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 281*  

The Demon Queen of Fungi, Lady of Rot and Decay, Zuggtmoy is an alien creature whose only desire is to infect the living with spores, transforming them into her mindless servants and, eventually, into decomposing hosts for the mushrooms, molds, and other fungi that she spawns.

Utterly inhuman, Zuggtmoy can mold her fungoid form into an approximation of a humanoid shape, including the skeletal-thin figure depicted in grimoires and ancient art, draped and veiled in mycelia and lichen. Indeed, much of her appearance and manner, and that of her servants, is a soulless mockery of mortal life and its many facets.

Zuggtmoy's cultists often follow her unwittingly. Most are fungi—infected to some degree, whether through inhaling her mind-controlling spores or being transformed to the point where flesh and fungus become one. Such cultists are fungal extensions of the Demon Queen's will.

Their devotion might begin with the seemingly harmless promises offered by exotic spores and mushrooms, but quickly consumes them, body and soul.

## Cultists of Zuggtmoy

> [!note]
> See the Cult of Zuggtmoy entry.

## Zuggtmoy's Lair

Zuggtmoy's principal lair is her palace on Shedaklah. It consists of two dozen mushrooms of pale yellow and rancid brown. These massive fungi are some of the largest in existence. They are surrounded by a field of acidic puffballs and poisonous vapors. The mushrooms themselves are all interconnected by bridges of shelf-fungi, and countless chambers have been hollowed out from within their rubbery, fibrous stalks.

```statblock
"name": "Zuggtmoy (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "304"
"hit_dice": "32d10 + 128"
"stats":
- !!int "22"
- !!int "15"
- !!int "18"
- !!int "20"
- !!int "19"
- !!int "24"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "11"
  "Constitution": !!int "11"
"skillsaves":
  "Perception": !!int "11"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- "desc": "Zuggtmoy casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt will:\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Locate Animals Or Plants.md|locate animals or plants]]\n\
    \n1/day each: [[5. Mechanics/Spells/Etherealness.md|etherealness]], [[5. Mechanics/Spells/Teleport.md|teleport]]\n\
    \n3/day each: [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Entangle.md|entangle]],\
    \ [[5. Mechanics/Spells/Plant Growth.md|plant growth]]"
  "name": "spells"
- "desc": "If Zuggtmoy fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Zuggtmoy has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Zuggtmoy makes three Pseudopod attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: dice:\
    \ 2d8 + 6|avg (2d8 + 6) force damage plus dice: 2d8|avg (2d8) poison damage."
  "name": "Pseudopod"
"bonus_actions":
- "desc": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius\
    \ sphere centered on her, and it lingers for 1 minute. Any creature in the cloud\
    \ when it appears, or that enters it later, must make a DC 19 Constitution saving\
    \ throw. On a successful save, the creature can't be infected by these spores\
    \ for 24 hours. On a failed save, the creature is infected with a disease called\
    \ the spores of Zuggtmoy, which lasts until the creature is cured of the disease\
    \ or dies. While infected in this way, the creature can't be reinfected, and it\
    \ must repeat the saving throw at the end of every 24 hours, ending the infection\
    \ on a success. On a failure, the infected creature's body is slowly taken over\
    \ by fungal growth, and after three such failed saves, the creature dies and is\
    \ reanimated as a [[5. Mechanics/Bestiary/Plant/Quaggoth Spore Servant.md|spore servant]]\
    \ if it's a type of creature that can be."
  "name": "Infestation Spores (3/Day)"
- "desc": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius\
    \ sphere centered on her, and it lingers for 1 minute. Humanoids and Beasts in\
    \ the cloud when it appears, or that enter it later, must make a DC 19 Wisdom\
    \ saving throw. On a successful save, a creature can't be infected by these spores\
    \ for 24 hours. On a failed save, the creature is infected with a disease called\
    \ the influence of Zuggtmoy for 24 hours. While infected in this way, the creature\
    \ is [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]] by her and can't be reinfected\
    \ by these spores."
  "name": "Mind Control Spores (Recharge 5-6)"
"reactions":
- "desc": "When Zuggtmoy is hit by an attack roll, one creature within 10 feet of\
    \ her that is [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]] by her is hit\
    \ by the attack instead."
  "name": "Protective Thrall"
"legendary_actions":
- "desc": "Zuggtmoy makes one Pseudopod attack."
  "name": "Attack"
- "desc": "One creature [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]] by Zuggtmoy\
    \ that she can see must use its reaction, if a available, to move up to its speed\
    \ as she directs or to make one weapon attack against a target that she designates."
  "name": "Exert Will"
"source":
- "MPMM"
- "MTF"
"image": "5. Mechanics/Bestiary/Npc/token/zuggtmoy.png"
```
^statblock