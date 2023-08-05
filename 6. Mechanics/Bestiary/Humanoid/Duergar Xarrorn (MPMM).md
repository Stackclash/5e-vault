---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/mountain
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/dwarf
statblock: true
statblock-link: "#^statblock"
"name": "Duergar Xarrorn"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "10"
- !!int "9"
"speed": "walk 25 ft."
"damage_resistances": "poison"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Dwarvish, Undercommon"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The duergar has advantage on saving throws against spells and the [[6. Mechanics/Rules/conditions.md#charmed\|charmed]],\
    \ [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]], and [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]]\
    \ conditions."
  "name": "Duergar Resilience"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the duergar has disadvantage on attack rolls, as well\
    \ as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 10 ft., one target.\
    \ Hit: dice: 1d12 + 3|avg (1d12 + 3) piercing damage, or 16 (dice: 2d12 +\
    \ 3|avg (2d12 + 3)) piercing damage while under the effect of Enlarge, plus\
    \ dice: 1d6|avg (1d6) fire damage."
  "name": "Fire Lance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "From its fire lance, the duergar shoots a 15-foot cone of fire or a line\
    \ of fire 30 feet long and 5 feet wide. Each creature in that area must make a\
    \ DC 12 Dexterity saving throw, taking 10 (dice: 3d6|avg (3d6)) fire damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Fire Spray (Recharge 5-6)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The duergar magically turns [[6. Mechanics/Rules/conditions.md#invisible\|invisible]]\
    \ for up to 1 hour or until it attacks, it forces a creature to make a saving\
    \ throw, or its [[6. Mechanics/Rules/status.md#concentration\|concentration]] is broken\
    \ (as if [[6. Mechanics/Rules/status.md#concentration\|concentration]] on a spell).\
    \ Any equipment the duergar wears or carries is [[6. Mechanics/Rules/conditions.md#invisible\|invisible]]\
    \ with it."
  "name": "Invisibility (Recharges after a Short or Long Rest)"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "For 1 minute, the duergar magically increases in size, along with anything\
    \ it is wearing or carrying. While enlarged, the duergar is Large, doubles its\
    \ damage dice on Strength-based weapon attacks (included in the attacks), and\
    \ makes Strength checks and Strength saving throws with advantage. If the duergar\
    \ lacks the room to become Large, it attains the maximum size possible in the\
    \ space available."
  "name": "Enlarge (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/humanoid/token/duergar-xarrorn.png"
aliases: ["Duergar Xarrorn"]
---
# Duergar Xarrorn
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 111, Mordenkainen's Tome of Foes p. 193*  

Xarrorn are specialists who construct weapons using a mixture of alchemy and psionics.

## Duergar

> [!quote]- A quote from Mordenkainen  
> 
> Duergar architecture is remarkable for its brutalist grandeur. It is not a style I would use for my towers—I prefer gold, gems, and tracery—but I admire the boldness of dwarven stonework.

> [!quote]- A quote from Mordenkainen  
> 
> The mental power that duergar wield was given to them by illithids. But why would illithids create servants who could turn invisible or grow to ogre size?
> 
> Most likely because those servants would excel at herding their masters' other minions. In retrospect, it seems arguable that duergar escaped bondage because their jailers had given them the keys.

Duergar are dwarves of the deep reaches of the Underdark and other sunless realms. Their personalities and abilities have been deeply impacted by their ancestors' captivity and torment by mind flayers; they were infused with powerful psionic abilities but also a profound gloom. In some, this strain of sorrow inspires works of grand but melancholic beauty, while in others, it manifests as rage.

Like many who dwell in the Underdark, duergar must constantly be on guard against the raids and plots of their neighbors. To this end, duergar warriors fulfill a variety of combat roles, often marrying their fury in battle with their psionic abilities or training dangerous Underdark creatures as mounts.

Denigrated by some as joyless, duergar are in fact deeply passionate in all that they do—even if that passion rarely manifests as mirth. They bring an emotional intensity to their lives, whether they're exploring neighboring tunnels, defending their homes, engaging with their families, or crafting bold new works. The bonds of friendship and kinship are strong, though navigating the inevitable outbursts of frustration and despair is not always easy. Similarly, duergar tend to be very community-minded—in the Underdark, all must cooperate to survive.

Among the duergar of the Forgotten Realms, creation is a fiercely passionate process. They tend to favor works that are sturdy and grand, but in a bare, stripped-down fashion that favors geometric forms. The strongholds they design are blocky and stark, and the weapons they forge are blatantly tools of violence. While others may decry their creations as cold and bare of ornamentation to the point of austerity, duergar see them as honoring the materials used and honest about their purpose.

## Stat Block

```ad-statblock
title: Duergar Xarrorn
![[/6. Mechanics/Bestiary/Humanoid/Token/duergar-xarrorn.png#token]]
*Medium humanoid(dwarf), Any alignment*

- **Armor Class** 18 ([[/6. Mechanics/Items/plate-armor.md\|plate armor]])
- **Hit Points** `dice: 4d8 + 8|text(26)` (4d8 + 8) 
- **Speed** walk 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|11 (+0)|14 (+2)|11 (+0)|10 (+0)| 9 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 120 ft., passive Perception 10
- **Damage Resistances** poison
- **Languages** Dwarvish, Undercommon
- **Challenge** 2

## Traits

***Duergar Resilience.*** The duergar has advantage on saving throws against spells and the [[6. Mechanics/Rules/conditions.md#charmed\|charmed]], [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]], and [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] conditions.

***Sunlight Sensitivity.*** While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

## Actions

***Fire Lance.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 10 ft., one target. Hit: `dice: 1d12 + 3` (`1d12 + 3`) piercing damage, or 16 (`dice: 2d12 + 3` (`2d12 + 3`)) piercing damage while under the effect of Enlarge, plus `dice: 1d6` (`1d6`) fire damage.

***Fire Spray (Recharge 5-6).*** From its fire lance, the duergar shoots a 15-foot cone of fire or a line of fire 30 feet long and 5 feet wide. Each creature in that area must make a DC 12 Dexterity saving throw, taking 10 (`dice: 3d6` (`3d6`)) fire damage on a failed save, or half as much damage on a successful one.

***Invisibility (Recharges after a Short or Long Rest).*** The duergar magically turns [[6. Mechanics/Rules/conditions.md#invisible\|invisible]] for up to 1 hour or until it attacks, it forces a creature to make a saving throw, or its [[6. Mechanics/Rules/status.md#concentration\|concentration]] is broken (as if [[6. Mechanics/Rules/status.md#concentration\|concentration]] on a spell). Any equipment the duergar wears or carries is [[6. Mechanics/Rules/conditions.md#invisible\|invisible]] with it.

## Bonus Actions

***Enlarge (Recharges after a Short or Long Rest).*** For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available.
```
^statblock

## Environment

mountain, underdark