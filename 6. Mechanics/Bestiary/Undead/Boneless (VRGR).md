---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Boneless
ac: 12
hp: 26
hit_dice: 4d8 + 8
cr: '1'
stats: [
  16,
  14,
  15,
  1,
  10,
  1
]
source: [
  VRGR
]
aliases: ["Boneless"]
---
# Boneless
*Source: Van Richten's Guide to Ravenloft p. 228*  

Not all animate corpses shamble from their graves. Boneless are undead remains devoid of skeletons. Most rise from the bodies of those who've suffered brutal ends, such as deliberate skinning or crushing. Deathless malice infuses what remains, their husks flopping and slithering in pursuit of vengeance or at the whims of sinister masters. Slipping through cracks and under doors, these stealthy undead seek to adorn living frames once more, wrapping themselves around their victims and wringing them to death in their full-body grip.

Boneless arise in a variety of forms. While the animate skins of specific creatures are the most common, foul spellcasters might create these horrors from the scraps of failed experiments, necromantic slurries, heaps of discarded hair, abattoirs, and charnel concoctions. These origins don't affect a boneless's statistics but lend it distinct forms.

Whether through accident or depraved genius, some villains use one corpse to create two separate undead. Boneless might adorn the frames of other undead, like skeletons or zombies. The sight of a boneless peeling itself from its independently undead frame haunts the nightmares of many seasoned monster hunters.

```ad-statblock
title: Boneless
![[/6. Mechanics/Bestiary/Undead/Token/boneless.png#token]]
*Medium undead, Unaligned*

- **Armor Class** 12 
- **Hit Points** `dice: 4d8 + 8|text(26)` (4d8 + 8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|14 (+2)|15 (+2)| 1 (-5)|10 (+0)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Stealth +4
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** bludgeoning, poison
- **Condition Immunities** charmed, exhaustion, frightened
- **Languages** understands the languages it knew in life but can't speak
- **Challenge** 1

## Traits

***Compression.*** The boneless can move through any opening at least 1 inch wide without squeezing. It can also squeeze to fit into a space that a Tiny creature could fit in.

***Unusual Nature.*** The boneless doesn't require sleep.

## Actions

***Multiattack.*** The boneless makes two Slam attacks. If both attacks hit a Large or smaller creature, the creature is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] (escape DC 13), and the boneless can use Crushing Embrace.

***Slam.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d4 + 3\|avg` (`1d4 + 3`) bludgeoning damage.

***Crushing Embrace.*** The boneless wraps its body around a Large or smaller creature [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] by it. While the boneless is attached, the target is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] and is unable to breathe. The target must succeed on a DC 13 Strength saving throw at the start of each of the boneless' turns or take `dice: 1d4 + 3\|avg` (`1d4 + 3`) bludgeoning damage. If something moves the target, the boneless moves with it. The boneless can detach itself by spending 5 feet of its movement. A creature, including the target, can use its action to try to detach the boneless and force it to move into the nearest unoccupied space, doing so with a successful DC 13 Strength check. When the boneless dies, it detaches from any creature it is attached to.
```
^statblock