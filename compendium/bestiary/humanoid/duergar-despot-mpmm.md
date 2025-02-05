---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: mountain, underdark
size: Medium
tags:
- compendium/src/5e/mpmm
- monster/cr/12
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/dwarf
aliases: ["Duergar Despot"]
---
# [Duergar Despot](compendium\bestiary\humanoid/duergar-despot-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 107, Mordenkainen's Tome of Foes p. 188*

Duergar despots replace parts of their bodies with mechanical devices that they control through their psionic abilities.

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
"name": "Duergar Despot (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "119"
"hit_dice": "14d8 + 56"
"stats":
- !!int "20"
- !!int "5"
- !!int "19"
- !!int "15"
- !!int "14"
- !!int "13"
"speed": "25 ft."
"saves":
  "Wisdom": !!int "6"
  "Constitution": !!int "8"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Dwarvish, Undercommon"
"cr": "12"
"traits":
- "desc": "The duergar casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 12):\n\nAt\
    \ will: [mage hand](compendium/spells/mage-hand.md), [minor illusion](compendium/spells/minor-illusion.md)\n\
    \n1/day: [stinking cloud](compendium/spells/stinking-cloud.md)"
  "name": "Spellcasting (Psionics)"
- "desc": "The duergar has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "When the duergar suffers a critical hit or is reduced to 0 hit points,\
    \ psychic energy erupts from its frame to deal 14 (4d6) psychic damage to each\
    \ creature within 5 feet of it."
  "name": "Psychic Engine"
- "desc": "While in sunlight, the duergar has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](/compendium/rules/skills.md#Perception)) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "The duergar makes two Iron Fist attacks and two Stomping Foot attacks.\
    \ After one of the attacks, the duergar can move up to its speed without provoking\
    \ [opportunity attacks](/compendium/rules/actions.md#Opportunity%20Attack). It\
    \ can replace one of the attacks with a use of Flame Jet."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 23 (4d8\
    \ + 5) bludgeoning damage. If the target is a Large or smaller creature, it must\
    \ succeed on a DC 17 Strength saving throw or be pushed up to 30 feet away in\
    \ a straight line and be knocked [prone](/compendium/rules/conditions.md#Prone)."
  "name": "Iron Fist"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 10 (1d10\
    \ + 5) bludgeoning damage, or 21 (3d10 + 5) to a [prone](/compendium/rules/conditions.md#Prone)\
    \ target."
  "name": "Stomping Foot"
- "desc": "The duergar spews flames in a line 100 feet long and 5 feet wide. Each\
    \ creature in the line must make a DC 16 Dexterity saving throw, taking 18 (4d8)\
    \ fire damage on a failed save, or half as much damage on a successful one."
  "name": "Flame Jet"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/humanoid/token/duergar-despot-mpmm.webp"
```
^statblock

## Environment

mountain, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```