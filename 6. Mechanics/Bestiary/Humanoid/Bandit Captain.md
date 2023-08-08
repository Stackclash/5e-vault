---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/hill
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: inline
---
# Bandit Captain
*Source: Monster Manual p. 344, Princes of the Apocalypse, Storm King's Thunder, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Storm Lord's Wrath, Baldur's Gate: Descent Into Avernus, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Mythic Odysseys of Theros, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries, Curse of Strahd, Critical Role: Call of the Netherdeep, Light of Xaryxis, Dragonlance: Shadow of the Dragon Queen, Keys from the Golden Vault*  

It takes a strong personality, ruthless cunning, and a silver tongue to keep a gang of bandits in line. The bandit captain has these qualities in spades.

In addition to managing a crew of selfish malcontents, the pirate captain is a variation of the bandit captain, with a ship to protect and command. To keep the crew in line, the captain must mete out rewards and punishment on a regular basis.

More than treasure, a bandit captain or pirate captain craves infamy. A prisoner who appeals to the captain's vanity or ego is more likely to be treated fairly than a prisoner who does not or claims not to know anything of the captain's colorful reputation.

```statblock
"name": "Bandit Captain"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Lawful alignment"
"ac": !!int "15"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "15"
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
"speed": "walk 30 ft."
"saves":
  "Dexterity": !!int "5"
  "Wisdom": !!int "2"
  "Strength": !!int "4"
"skillsaves":
  "Athletics": !!int "4"
  "Deception": !!int "4"
"senses": "passive Perception 10"
"languages": "any two languages"
"cr": "2"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The captain makes three melee attacks: two with its scimitar and one with\
    \ its dagger. Or the captain makes two ranged attacks with its daggers."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee or Ranged Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 3|avg (1d4 + 3) piercing\
    \ damage."
  "name": "Dagger"
"reactions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The captain adds 2 to its AC against one melee attack that would hit it.\
    \ To do so, the captain must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "PotA"
- "SKT"
- "ToA"
- "WDH"
- "WDMM"
- "GoS"
- "DC"
- "DIP"
- "SLW"
- "BGDIA"
- "IMR"
- "EGW"
- "MOT"
- "IDRotF"
- "CM"
- "CoS"
- "CRCotN"
- "LoX"
- "DSotDQ"
- "KftGV"
"image": "6. Mechanics/Bestiary/Humanoid/token/bandit-captain.png"
```
^statblock

## Environment

coastal, hill, arctic, urban, forest, desert