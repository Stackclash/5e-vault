---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: 'mountain, underdark'
size: Medium
tags:
  - compendium/src/5e/mpmm
  - monster/cr/6
  - monster/environment/mountain
  - monster/environment/underdark
  - monster/size/medium
  - monster/type/humanoid/dwarf
aliases:
  - Duergar Warlord
---
# [[5. Mechanics\Bestiary\Humanoid\Duergar Warlord (MPMM).md|Duergar Warlord]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 111, Mordenkainen's Tome of Foes p. 192*

A warlord is cunning, inspiring, and merciless in equal parts. A skilled leader in battle, the warlord can use spikes of psionic energy to compel the warriors they command to fight harder.

## Duergar

> [!quote] A quote from Mordenkainen  
> 
> Duergar architecture is remarkable for its brutalist grandeur. It is not a style I would use for my towers—I prefer gold, gems, and tracery—but I admire the boldness of dwarven stonework.

> [!quote] A quote from Mordenkainen  
> 
> The mental power that duergar wield was given to them by illithids. But why would illithids create servants who could turn invisible or grow to ogre size?
> 
> Most likely because those servants would excel at herding their masters' other minions. In retrospect, it seems arguable that duergar escaped bondage because their jailers had given them the keys.

Duergar are dwarves of the deep reaches of the Underdark and other sunless realms. Their personalities and abilities have been deeply impacted by their ancestors' captivity and torment by mind flayers; they were infused with powerful psionic abilities but also a profound gloom. In some, this strain of sorrow inspires works of grand but melancholic beauty, while in others, it manifests as rage.

Like many who dwell in the Underdark, duergar must constantly be on guard against the raids and plots of their neighbors. To this end, duergar warriors fulfill a variety of combat roles, often marrying their fury in battle with their psionic abilities or training dangerous Underdark creatures as mounts.

Denigrated by some as joyless, duergar are in fact deeply passionate in all that they do—even if that passion rarely manifests as mirth. They bring an emotional intensity to their lives, whether they're exploring neighboring tunnels, defending their homes, engaging with their families, or crafting bold new works. The bonds of friendship and kinship are strong, though navigating the inevitable outbursts of frustration and despair is not always easy. Similarly, duergar tend to be very community-minded—in the Underdark, all must cooperate to survive.

Among the duergar of the Forgotten Realms, creation is a fiercely passionate process. They tend to favor works that are sturdy and grand, but in a bare, stripped-down fashion that favors geometric forms. The strongholds they design are blocky and stark, and the weapons they forge are blatantly tools of violence. While others may decry their creations as cold and bare of ornamentation to the point of austerity, duergar see them as honoring the materials used and honest about their purpose.

```statblock
"name": "Duergar Warlord (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "20"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate armor]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "75"
"hit_dice": "10d8 + 30"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "17"
  - !!int "12"
  - !!int "12"
  - !!int "14"
"speed": "25 ft."
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Dwarvish, Undercommon"
"cr": "6"
"traits":
  - "desc": "The duergar has advantage on saving throws against spells and the [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], and [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]\
      \ conditions."
    "name": "Duergar Resilience"
  - "desc": "While in sunlight, the duergar has disadvantage on attack rolls, as well\
      \ as on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The duergar makes three Psychic-Attuned Hammer or Javelin attacks and\
      \ uses Call to Attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10\
      \ + 4) bludgeoning damage, or 15 (2d10 + 4) bludgeoning damage while under the\
      \ effect of Enlarge, plus 5 (d10) psychic damage."
    "name": "Psychic-Attuned Hammer"
  - "desc": "Melee  or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 30/120\
      \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 11 (2d6 + 4) piercing\
      \ damage while under the effect of Enlarge."
    "name": "Javelin"
  - "desc": "Up to three allies within 120 feet of this duergar that can hear it can\
      \ each use their reaction to make one weapon attack."
    "name": "Call to Attack"
  - "desc": "The duergar magically turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ for up to 1 hour or until it attacks, it forces a creature to make a saving\
      \ throw, or its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
      \ is broken (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]]\
      \ on a spell). Any equipment the duergar wears or carries is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ with it."
    "name": "Invisibility (Recharge 4-6)"
"bonus_actions":
  - "desc": "For 1 minute, the duergar magically increases in size, along with anything\
      \ it is wearing or carrying. While enlarged, the duergar is Large, doubles its\
      \ damage dice on Strength-based weapon attacks (included in the attacks), and\
      \ makes Strength checks and Strength saving throws with advantage. If the duergar\
      \ lacks the room to become Large, it attains the maximum size possible in the\
      \ space available."
    "name": "Enlarge (Recharges after a Short or Long Rest)"
"reactions":
  - "desc": "When an ally that the duergar can see makes a d20 roll, the duergar can\
      \ roll a d6, and the ally can add the number rolled to the d20 by taking 3 (d6)\
      \ psychic damage."
    "name": "Scouring Instruction"
"source":
  - "MPMM"
  - "MTF"
"image": "5. Mechanics/Bestiary/Humanoid/token/duergar-warlord-mpmm.webp"
```
^statblock

## Environment

mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
