---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/medium
- monster/type/fiend/yugoloth
statblock: true
statblock-link: "#^statblock"
name: Hydroloth
ac: 15
hp: 135
hit_dice: 18d8 + 54
cr: '9'
stats: [
  12,
  21,
  16,
  19,
  10,
  14
]
source: [
  MPMM,
  MTF
]
aliases: ["Hydroloth"]
---
# Hydroloth
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 158, Mordenkainen's Tome of Foes p. 249*  

Like the thought-stealing waters of the River Styx they inhabit, hydroloths filch the memories of creatures they attack, stealing away thoughts for delivery to whatever master they happen to serve. Hydroloths also savor finding lost things, especially those that have been swallowed up in the deeps.

For amphibious assaults or underwater conflicts, hydroloths have no equal among yugoloths. They sometimes hire themselves out to attack and scuttle ships and raid coastal settlements.

```ad-statblock
title: Hydroloth
![](/compendium/bestiary/fiend/token/hydroloth.png#token)
*Medium fiend(yugoloth), Neutral Evil*

- **Armor Class** 15 
- **Hit Points** `dice: 18d8 + 54|text(135)` (18d8 + 54) 
- **Speed** walk 20 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|21 (+5)|16 (+3)|19 (+4)|10 (+0)|14 (+2)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** Insight +4, Perception +4
- **Senses** blindsight 60 ft., darkvision 60 ft., passive Perception 14
- **Damage Vulnerabilities** fire
- **Damage Resistances** cold; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** acid, poison
- **Condition Immunities** poisoned
- **Languages** Abyssal, Infernal, telepathy 60 ft.
- **Challenge** 9

## Traits

***Amphibious.*** The hydroloth can breathe air and water.

***Magic Resistance.*** The hydroloth has advantage on saving throws against spells and other magical effects.

***Secure Memory.*** The hydroloth is immune to the waters of the River Styx, as well as any effect that would steal or modify its memories or detect or read its thoughts.

***Watery Advantage.*** While submerged in liquid, the hydroloth has advantage on attack rolls.

***Spellcasting.*** The hydroloth casts one of the following spells, requiring no material components and using Intelligence as the spellcasting ability (spell save DC 16):

**At will**: [darkness](/compendium/spells/darkness.md), [detect magic](/compendium/spells/detect-magic.md), [dispel magic](/compendium/spells/dispel-magic.md), [invisibility](/compendium/spells/invisibility.md) (self only)

**3/day each**: [control water](/compendium/spells/control-water.md), [crown of madness](/compendium/spells/crown-of-madness.md), [fear](/compendium/spells/fear.md), [suggestion](/compendium/spells/suggestion.md)

## Actions

***Multiattack.*** The hydroloth makes two Bite or Claw attacks. It can replace one attack with a use of Spellcasting.

***Bite.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 5 ft., one target. Hit: `dice: 2d10 + 5|avg` (`2d10 + 5`) force damage plus `dice: 2d10|avg` (`2d10`) psychic damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 5 ft., one target.  Hit: `dice: 2d8 + 5|avg` (`2d8 + 5`) force damage plus `dice: 2d10|avg` (`2d10`) psychic damage.

***Steal Memory (1/Day).*** The hydroloth targets one creature it can see within 60 feet of it. The target takes `dice: 4d6|avg` (`4d6`) psychic damage, and it must make a DC 16 Intelligence saving throw. On a successful save, the target becomes immune to this hydroloth's Steal Memory for 24 hours. On a failed save, the target loses all proficiencies; it can't cast spells; it can't understand language; and if its Intelligence and Charisma scores are higher than 5, they become 5. Each time the target finishes a long rest, it can repeat the saving throw, ending the effect on itself on a success. A [greater restoration](/compendium/spells/greater-restoration.md) or [remove curse](/compendium/spells/remove-curse.md) spell cast on the target ends this effect early.

***Teleport.*** The hydroloth teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see.
```
^statblock