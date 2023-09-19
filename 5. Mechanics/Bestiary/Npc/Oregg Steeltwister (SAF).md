---
cssclass: json5e-monster
tags:
- compendium/src/5e/saf
- monster/size/medium
- monster/type/humanoid/orc
aliases: ["Oregg Steeltwister"]
---
# Oregg Steeltwister
*Source: Strongholds and Followers p. 142*  

This orc, the only sorcerer in the White Tusk clan, is Bonebreaker Dorokor's lieutenant and master of discipline. He does not fully understand Dorokor's schemes and games of diplomacy, but follows her instructions dutifully, hoping one day to win not just her favor, but also her heart.

When Dorokor is not around, he grumbles about keeping the human boy Edmund hostage, and resents Dorokor's gentle treatment of the boy. He longs to be free of Castle Rend and to face the bounty hunters tracking their clan head-on. At least then he and his people could die gloriously in battle, rather than living a dreary life within stone walls.

As master of discipline, Oregg's favorite way to get an orc to behave or torture prisoners is to lock them in their own armor and cast heat metal to sear their flesh. He has practiced this spell for years, bartering with the druids of other orc tribes to unlock its magical secrets.

```statblock
"name": "Oregg Steeltwister"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "15"
- !!int "12"
- !!int "16"
- !!int "9"
- !!int "11"
- !!int "18"
"speed": "30 ft."
"saves":
  "Wisdom": "+3"
  "Strength": "+5"
"skillsaves":
  "Athletics": "+5"
  "Arcana": "+5"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Orc, Common"
"cr": "5"
"traits":
- "desc": "Oregg Steeltwister is a 5th-level\n\nspellcaster. His spellcasting ability\
    \ modifier is\n\nCharisma (spell save DC 15, dice: d20+7 (+7 to hit) with spell\n\
    \nattacks). He has the following sorcerer spells prepared:\n\nCantrips (at will):\
    \ firebolt, [[5. Mechanics/Spells/Message.md|message]], [[5. Mechanics/Spells/Poison Spray.md|poison spray]],\
    \ [[5. Mechanics/Spells/True Strike.md|true strike]]\n\n1st level (4 1st-level\
    \ slots): [[5. Mechanics/Spells/Magic Missile.md|magic missile]], [[5. Mechanics/Spells/Shield.md|shield]]\n\
    \n2nd level (3 2nd-level slots): [[5. Mechanics/Spells/Heat Metal.md|heat metal]]\n\
    \n3rd level (2 3rd-level slots): [[5. Mechanics/Spells/Fly.md|fly]], [[5. Mechanics/Spells/Fireball.md|fireball]]"
  "name": "spells"
- "desc": "As a bonus action, the orc can move up to its speed toward a hostile creature\
    \ it can see."
  "name": "Aggressive"
- "desc": "Whenever Oregg casts a spell of 1st level or higher, he gains a number\
    \ of temporary hit points equal to Xdice: d10|avg (d10), where X is the level\
    \ of the spell."
  "name": "Rune-Tattooed"
"actions":
- "desc": "Oregg makes two longsword attacks and can cast a cantrip as a bonus action."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 2|avg (1d10 + 2) slashing damage."
  "name": "Longsword"
- "desc": "Ranged Spell Attack: dice: d20+7 (+7 to hit), range 120 ft., one target.\
    \ Hit: dice: 2d10|avg (2d10) fire damage."
  "name": "Firebolt"
- "desc": "One creature within 10 feet of Oregg must make a successful DC 15 Constitution\
    \ saving throw or take dice: 2d12|avg (2d12) poison damage."
  "name": "Poison Spray"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Oregg%20Steeltwister.png"
```
^statblock