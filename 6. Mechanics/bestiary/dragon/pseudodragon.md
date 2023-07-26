---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/hill
- monster/environment/mountain
- monster/environment/urban
- monster/size/tiny
- monster/type/dragon
statblock: true
statblock-link: "#^statblock"
name: Pseudodragon
ac: 13
hp: 7
hit_dice: 2d4 + 2
cr: 1/4
stats: [
  6,
  15,
  13,
  10,
  12,
  10
]
source: [
  MM,
  RoT,
  ToA,
  WDMM,
  GoS,
  ERLW,
  IMR,
  EGW,
  IDRotF
]
aliases: ["Pseudodragon"]
---
*Source: Monster Manual p. 254, The Rise of Tiamat, Tomb of Annihilation, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Eberron: Rising from the Last War, Infernal Machine Rebuild, Explorer's Guide to Wildemount, Icewind Dale: Rime of the Frostmaiden*  

The elusive pseudodragon dwells in the quiet places of the world, making its home in the hollows of trees and small caves. With its red-brown scales, horns, and a maw filled with sharp teeth, a pseudodragon resembles a tiny red dragon but its disposition is playful.

## Quiet and Defensive

Pseudodragons have little interest in other creatures, and they avoid them whenever possible. If it is attacked, a pseudodragon fights back using the poisonous stinger at the tip of its tail, one jab of which can put a creature into a catatonic state that can last for hours.

## Draconic Familiars

Mages often seek out pseudodragons, whose agreeable disposition, telepathic ability, and resistance to magic make them superior familiars. Pseudodragons are selective when it comes to choosing companions, but they can sometimes be won over with gifts of food or treasure. When a pseudodragon finds an agreeable companion, it bonds with that person as long as it is treated fairly.

A pseudodragon puts up with no ill treatment, and it abandons a manipulative or abusive companion without warning.

## Language of Emotion

Pseudodragons can't speak, but they communicate using a limited form of telepathy that allows them to share basic ideas such as hunger, curiosity, or affection. When it bonds with a companion, a pseudodragon can communicate what it sees and hears even over long distances.

A pseudodragon often vocalizes animal noises. A rasping purr indicates pleasure, while a hiss means unpleasant surprise. A bird-like chirping represents desire, and a growl always means anger or discontent.

> [!quote] Variant: Pseudodragon Familiar
> 
> Some pseudodragons are willing to serve spellcasters as a familiar. Such pseudodragons have the following trait.
^variant-pseudodragon-familiar

## Familiar

The pseudodragon can serve another creature as a familiar, forming a magic, telepathic bond with that willing companion. While the two are bonded, the companion can sense what the pseudodragon senses as long as they are within 1 mile of each other. While the pseudodragon is within 10 feet of its companion, the companion shares the pseudodragon's Magic Resistance trait. At any time and for any reason, the pseudodragon can end its service as a familiar, ending the telepathic bond.

## Stat Block

```ad-statblock
title: Pseudodragon
![[token/pseudodragon.png#token]]
*Tiny dragon, Neutral Good*

- **Armor Class** 13 
- **Hit Points** `dice: 2d4 + 2|text(7)` (2d4 + 2) 
- **Speed** walk 15 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|15 (+2)|13 (+1)|10 (+0)|12 (+1)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +3, Stealth +4
- **Senses** blindsight 10 ft., darkvision 60 ft., passive Perception 13
- **Languages** understands Common and Draconic but can't speak
- **Challenge** 1/4

## Traits

***Keen Senses.*** The pseudodragon has advantage on Wisdom ([Perception](/6. Mechanics/rules/skills.md#Perception)) checks that rely on sight, hearing, or smell.

***Magic Resistance.*** The pseudodragon has advantage on saving throws against spells and other magical effects.

***Limited Telepathy.*** The pseudodragon can magically communicate simple ideas, emotions, and images telepathically with any creature within 100 feet of it that can understand a language.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage.

***Sting.*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one creature. Hit: `dice: 1d4 + 2|avg` (`1d4 + 2`) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or become [poisoned](/6. Mechanics/rules/conditions.md#poisoned) for 1 hour. If the saving throw fails by 5 or more, the target falls [unconscious](/6. Mechanics/rules/conditions.md#unconscious) for the same duration, or until it takes damage or another creature uses an action to shake it awake.
```
^statblock

## Environment

mountain, forest, hill, urban, desert, coastal