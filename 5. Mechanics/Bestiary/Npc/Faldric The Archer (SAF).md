---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/3
- monster/size/medium
- monster/type/humanoid/human
statblock: inline
aliases: ["Faldric the Archer"]
---
# [Faldric the Archer](compendium\bestiary\npc/faldric-the-archer-saf.md)
*Source: Strongholds and Followers p. 145*  

Faldric is a cruel opportunist who rose through the town guard in Bedegar until he attracted Saxton's attention. The former Baron of Bedegar would never have promoted a man like Faldric, but the old Baron is dead, and the new regent has use of a man willing to say "yes" to any order.

```statblock
"name": "Faldric the Archer (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Evil"
"ac": !!int "15"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"stats":
- !!int "11"
- !!int "16"
- !!int "13"
- !!int "11"
- !!int "14"
- !!int "13"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Perception": !!int "3"
  "Acrobatics": !!int "5"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "3"
"traits":
- "desc": "Faldric has advantage on Perception checks that rely on sight."
  "name": "Acute Sight"
"actions":
- "desc": "Faldric makes two attacks."
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: dice: d20+5 (+5 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 3|avg (1d8 + 3) piercing damage."
  "name": "Longbow"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage."
  "name": "Shortsword"
"reactions":
- "desc": "When a creature Faldric can see enters a space adjacent to Sir Pelliton,\
    \ Faldric may use his reaction to make a longbow attack against that creature.\
    \ If this attack is successful, the target is also knocked [[/5. Mechanics/Rules/Conditions.md#prone|prone]]."
  "name": "Pelliton's Archer"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Faldric%20the%20Archer.png"
```
^statblock