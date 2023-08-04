---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/arctic
- monster/size/huge
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
name: Abominable Yeti
ac: 15
hp: 137
hit_dice: 11d12 + 66
cr: '9'
stats: [
  24,
  10,
  22,
  9,
  13,
  9
]
source: [
  MM,
  SKT,
  WDMM,
  EGW,
  IDRotF,
  CM
]
aliases: ["Abominable Yeti"]
---
# Abominable Yeti
*Source: Monster Manual p. 306, Storm King's Thunder, Waterdeep: Dungeon of the Mad Mage, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden, Candlekeep Mysteries*  

A yeti's windborne howl sounds out across remote mountains, striking fear into the hearts of the scattered miners and herders that dwell there. These hulking creatures stalk alpine peaks in a ceaseless hunt for food. Their snow-white fur lets them move like ghosts against the frozen landscape. A yeti's icy simian eyes can freeze its prey in place.

## Keen Hunters

Folk of the high peaks travel in groups and go armed, knowing that yetis can smell living flesh from miles away. When it finds prey, a yeti moves quickly over ice and stone to claim its meal, howling to the thrill of the hunt. Even in a blizzard, the scent of its quarry draws the yeti through the cold and snow.

Yetis hunt in solitude or in small family groups. When creatures flee from a yeti or engage it in battle, other yetis might catch the scent of blood and close in. The territorial yetis fight one another for the spoils of such battles, and yetis slain in the fight are also eaten, amid euphoric howls.

## Terrifying Howlers

Before an avalanche, a blizzard, or a deadly frost, the yetis' howls sweep down the mountain slopes on the icy wind. Some people of the alpine peaks believe that the voices of loved ones killed in avalanches and blizzards sound out in the wails of the yetis, crying warnings of ill omen. More pragmatic folk attest that the yeti's howl is a reminder that, despite the great accomplishments of civilization, the civilized become the hunted in nature's untamed domain.

## Brutal Rampagers

When mountain herds are abundant, yetis stay clear of humanoid realms. Driven by hunger, they attack humanoid settlements in waves, breaking down gates and stockade walls that once might have daunted them, then devouring the creatures within.

Devious mountain folk sometimes use the yetis as unwitting weapons. A warlord might lay down slaughtered sheep or goats to draw yetis into an enemy's camp, sowing chaos and thinning the ranks before battle. Mountain clan chiefs, wanting to expand their territory, overhunt local game to diminish the yetis' food supplies, inspiring attacks on humanoid settlements that are swiftly annexed in the aftermath.

## Abominable Yetis

An abominable yeti is larger than a normal yeti, standing three times as tall as a human. It typically lives and hunts alone, though a pair of abominable yetis might live together long enough to raise young. These towering yetis are highly territorial and savage, attacking and devouring any warm-blooded creatures they encounter, then scattering the bones across the ice and snow.

> [!quote]- A quote from Kelesta Hawke of the Emerald Enclave  
> 
> On your guard! That's not the wind howling!


## Stat Block

```ad-statblock
title: Abominable Yeti
![[/6. Mechanics/Bestiary/Monstrosity/Token/abominable-yeti.png#token]]
*Huge monstrosity, Chaotic Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 11d12 + 66|text(137)` (11d12 + 66) 
- **Speed** walk 40 ft., climb 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|24 (+7)|10 (+0)|22 (+6)| 9 (-1)|13 (+1)| 9 (-1)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** Perception +5, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 15
- **Damage Immunities** cold
- **Languages** Yeti
- **Challenge** 9

## Traits

***Fear of Fire.*** If the yeti takes fire damage, it has disadvantage on attack rolls and ability checks until the end of its next turn.

***Keen Smell.*** The yeti has advantage on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on smell.

***Snow Camouflage.*** The yeti has advantage on Dexterity ([[6. Mechanics/Rules/skills.md#Stealth\|Stealth]]) checks made to hide in snowy terrain.

## Actions

***Multiattack.*** The yeti can use its Chilling Gaze and makes two claw attacks.

***Claw.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 7\|avg` (`2d6 + 7`) slashing damage plus `dice: 2d6\|avg` (`2d6`) cold damage.

***Chilling Gaze.*** The yeti targets one creature it can see within 30 feet of it. If the target can see the yeti, the target must succeed on a DC 18 Constitution saving throw against this magic or take `dice: 6d6\|avg` (`6d6`) cold damage and then be [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]] for 1 minute, unless it is immune to cold damage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If the target's saving throw is successful, or if the effect ends on it, the target is immune to this yeti's gaze for 1 hour.

***Cold Breath (Recharge 6).*** The yeti exhales a 30-foot cone of frigid air. Each creature in that area must make a DC 18 Constitution saving throw, taking 45 (`dice: 10d8\|avg` (`10d8`)) cold damage on a failed save, or half as much damage on a successful one.
```
^statblock

## Environment

arctic