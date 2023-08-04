---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/swamp
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Ghast
ac: 13
hp: 36
hit_dice: 8d8
cr: '2'
stats: [
  16,
  17,
  10,
  11,
  10,
  8
]
source: [
  MM,
  CoS,
  PotA,
  ToA,
  WDH,
  WDMM,
  GoS,
  DC,
  DIP,
  SDW,
  BGDIA,
  DSotDQ
]
aliases: ["Ghast"]
---
# Ghast
*Source: Monster Manual p. 148, Curse of Strahd, Princes of the Apocalypse, Tomb of Annihilation, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh, Divine Contention, Dragon of Icespire Peak, Sleeping Dragon's Wake, Baldur's Gate: Descent Into Avernus, Dragonlance: Shadow of the Dragon Queen*  

Ghouls roam the night in packs, driven by an insatiable hunger for humanoid flesh.

## Devourers of Flesh

Like maggots or carrion beetles, ghouls thrive in places rank with decay and death. A ghoul haunts a place where it can gorge on dead flesh and decomposing organs. When it can't feed on the dead, it pursues living creatures and attempts to make corpses of them. Though they gain no nourishment from the corpses they devour, ghouls are driven by an unending hunger that compels them to consume. A ghoul's undead flesh never rots, and this monster can persist in a crypt or tomb for untold ages without feeding.

## Abyssal Origins

Ghouls trace their origins to the Abyss. Doresain, the first of their kind, was an elf worshiper of Orcus. Turning against his own people, he feasted on humanoid flesh to honor the Demon Prince of Undeath. As a reward for his service, Orcus transformed Doresain into the first ghoul. Doresain served Orcus faithfully in the Abyss, creating ghouls from the demon lord's other servants until an incursion by Yeenoghu, the demonic Gnoll Lord, robbed Doresain of his abyssal domain. When Orcus would not intervene on his behalf, Doresain turned to the elf gods for salvation, and they took pity on him and helped him escape certain destruction. Since then, elves have been immune to the ghouls' paralytic touch.

## Ghasts

Orcus sometimes infuses a ghoul with a stronger dose of abyssal energy, making a ghast. Whereas ghouls are little more than savage beasts, a ghast is cunning and can inspire a pack of ghouls to follow its commands.

## Stat Block

```ad-statblock
title: Ghast
![[/6. Mechanics/Bestiary/Undead/Token/ghast.png#token]]
*Medium undead, Chaotic Evil*

- **Armor Class** 13 
- **Hit Points** `dice: 8d8|text(36)` (8d8) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|17 (+3)|10 (+0)|11 (+0)|10 (+0)| 8 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Resistances** necrotic
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, poisoned
- **Languages** Common
- **Challenge** 2

## Traits

***Stench.*** Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] until the start of its next turn. On a successful saving throw, the creature is immune to the ghast's Stench for 24 hours.

***Turn Defiance.*** The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead.

## Actions

***Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one creature. Hit: `dice: 2d8 + 3\|avg` (`2d8 + 3`) piercing damage.

***Claws.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 3\|avg` (`2d6 + 3`) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]] for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock

## Environment

underdark, swamp, urban