---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/6
- monster/size/medium
- monster/type/fey
statblock: inline
aliases: ["Orchid Count"]
---
# [[5. Mechanics\Bestiary\Fey\Orchid Count.md|Orchid Count]]
*Source: Strongholds and Followers p. 180*  

The dashing archer-sorcerer of the Court, the Count is often seen flanked by two Mantis Knights, dueling and carousing their way through Alloy, the City of Four Elements, known in some realms as the City of Brass.

Val counts on the Count, the renegade of the Arcadians, to disobey him. He can be found wherever he is told not to go. Tales of his daring midnight raids on Quadranar, the Fourth City of Ordos, are legendary—possibly some of them are true!

> [!quote]-  
> 
> "Why how now, mortal? Thy jaw hangeth slack. Hast thou never seen a sunrise before?"

## Tactics

The Count relies on his Now You See Me... Now You Don't... combo to get in and out of danger. He uses blur to avoid attacks and Tactical Advantage to maximize damage. He enjoys harrying spellcasters and using misty step to get behind enemy lines and attack whomever the enemy is trying to protect.

```statblock
"name": "Orchid Count"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic"
"ac": !!int "16"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "13"
- !!int "18"
- !!int "16"
- !!int "14"
- !!int "11"
- !!int "15"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "5"
  "Athletics": !!int "4"
  "Perception": !!int "6"
  "Acrobatics": !!int "7"
  "Survival": !!int "3"
"senses": "passive Perception 16"
"languages": "Common, Elvish, Sylvan"
"cr": "6"
"traits":
- "desc": "The count's innate spellcasting ability is Charisma (spell save DC 13).\
    \ He can innately cast the following spells, requiring no material components:\n\
    \nAt will: [[5. Mechanics/Spells/Misty Step.md|misty step]], [[5. Mechanics/Spells/Hunters Mark.md|hunter's mark]]\n\
    \n3/day: [[5. Mechanics/Spells/Blur.md|blur]], [[5. Mechanics/Spells/Mirror Image.md|mirror image]]"
  "name": "innate"
- "desc": "The count is unaffected by difficult terrain."
  "name": "Fey Step"
- "desc": "Magic cannot put the count to sleep."
  "name": "Fey Ancestry"
- "desc": "The count has advantage on saving throws against magic and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "As a member of the Court of Arcadia, the count can cast [[5. Mechanics/Spells/Dominate Monster.md|dominate monster]]\
    \ at will on any fey creature or elf. To avoid this effect, the target must make\
    \ a successful DC 13 Wisdom saving throw"
  "name": "Command Fey"
- "desc": "If the Count teleports next to an enemy, he immediately makes two rapier\
    \ attacks with advantage against that enemy."
  "name": "Now You See Me..."
- "desc": "As a reaction, if an enemy the Count can see makes a successful melee or\
    \ ranged attack roll against him, he casts misty step."
  "name": "Now You Don't... (Recharge 4-6)"
- "desc": "If the Count has advantage on an attack roll, he deals an extra dice:\
    \ 2d6|avg (2d6) damage."
  "name": "Tactical Advantage"
"actions":
- "desc": "The count makes three attacks with his rapier or longbow in any combination."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Rapier"
- "desc": "Ranged Weapon Attack: dice: d20+7 (+7 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 2d6 + 4|avg (2d6 + 4) piercing damage."
  "name": "Longbow"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Fey/token/orchid-count-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```