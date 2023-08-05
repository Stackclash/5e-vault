---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/forest
- monster/environment/hill
- monster/environment/swamp
- monster/size/small
- monster/type/fey
statblock: true
statblock-link: "#^statblock"
"name": "Redcap"
"size": "Small"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "45"
"hit_dice": "6d6 + 24"
"stats":
- !!int "18"
- !!int "13"
- !!int "18"
- !!int "10"
- !!int "12"
- !!int "9"
"speed": "walk 25 ft."
"skillsaves":
  "Athletics": !!int "6"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Sylvan"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The redcap has disadvantage on Dexterity ([[6. Mechanics/Rules/skills.md#Stealth\|Stealth]])\
    \ checks."
  "name": "Iron Boots"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While grappling, the redcap is considered to be Medium. Also, wielding\
    \ a heavy weapon doesn't impose disadvantage on its attack rolls."
  "name": "Outsize Strength"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The redcap makes three Wicked Sickle attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 4|avg (2d4 + 4) slashing damage."
  "name": "Wicked Sickle"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The redcap moves up to its speed to a creature it can see and kicks with\
    \ its iron boots. The target must succeed on a DC 14 Dexterity saving throw or\
    \ take dice: 3d10 + 4|avg (3d10 + 4) bludgeoning damage and be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]]."
  "name": "Ironbound Pursuit"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/fey/token/redcap.png"
aliases: ["Redcap"]
---
# Redcap
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 208, Volo's Guide to Monsters p. 188*  

A redcap is a homicidal Fey creature born of blood lust. Redcaps, although small, have formidable strength, which they use to hunt and kill without hesitation or regret.

In the Feywild, or where that plane touches the material world at a fey crossing, if a sentient creature acts on an intense desire for bloodshed, one or more redcaps might appear where the blood of a slain person soaks the ground. At first, new redcaps look like tiny bloodstained mushrooms just pushing their caps out of the soil. When moonlight shines on one of these caps, a creature that resembles a wizened and undersized gnome with a hunched back and a sinewy frame springs from the earth. The creature has a pointed leather cap, clothing of similar material, heavy iron boots, and a heavy bladed weapon. From the moment redcaps awaken, they desire only murder and carnage, and they constantly seek to satisfy these cravings.

Redcaps lack subtlety. They live for direct confrontation and the mayhem of mortal combat. Even if a redcap wanted to be stealthy, the creature's iron boots force them to take ponderous, thunderous steps. When a redcap is near potential prey, though, they can close the distance quickly and get in a vicious swing of their weapon before the target can react.

Redcaps' desire to slay is rooted in their will to survive. To sustain their unnatural existence, they must soak their hats in the fresh blood of their victims. When redcaps are born, their hats are coated with wet blood, and they know that if the blood isn't replenished at least once every three days, they will vanish as if they had never been.

Some redcaps can sense the being whose murderous acts led to their birth. They typically use this innate connection to find their creator and make that creature their first victim, though they might instead seek out their maker to enjoy proximity to a kindred spirit. Although redcaps don't usually operate in groups, an individual responsible for the creation of multiple redcaps at the same site could attract the entire group to serve as cohorts, emulating that individual's murderous handiwork. Some hags and wicked mages know methods to call redcaps out of the Feywild and might likewise put teams of them to work as grisly servants.

In any case, if a redcap works with another being, the redcap demands to be paid in victims. A patron who tries to stifle a redcap's natural and necessary urge for blood risks becoming the redcap's next target.

```ad-statblock
title: Redcap
![[/6. Mechanics/Bestiary/Fey/Token/redcap.png#token]]
*Small fey, Chaotic Evil*

- **Armor Class** 14 (natural armor)
- **Hit Points** `dice: 6d6 + 24|text(45)` (6d6 + 24) 
- **Speed** walk 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|13 (+1)|18 (+4)|10 (+0)|12 (+1)| 9 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Athletics +6, Perception +3
- **Senses** darkvision 60 ft., passive Perception 13
- **Languages** Common, Sylvan
- **Challenge** 3

## Traits

***Iron Boots.*** The redcap has disadvantage on Dexterity ([[6. Mechanics/Rules/skills.md#Stealth\|Stealth]]) checks.

***Outsize Strength.*** While grappling, the redcap is considered to be Medium. Also, wielding a heavy weapon doesn't impose disadvantage on its attack rolls.

## Actions

***Multiattack.*** The redcap makes three Wicked Sickle attacks.

***Wicked Sickle.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 4` (`2d4 + 4`) slashing damage.

***Ironbound Pursuit.*** The redcap moves up to its speed to a creature it can see and kicks with its iron boots. The target must succeed on a DC 14 Dexterity saving throw or take `dice: 3d10 + 4` (`3d10 + 4`) bludgeoning damage and be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].
```
^statblock

## Environment

forest, hill, swamp