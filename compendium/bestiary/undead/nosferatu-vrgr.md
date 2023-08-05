---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
"name": "Nosferatu"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "17"
"hp": !!int "85"
"hit_dice": "9d8 + 45"
"stats":
- !!int "20"
- !!int "18"
- !!int "21"
- !!int "6"
- !!int "17"
- !!int "14"
"speed": "walk 40 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "8"
"skillsaves":
  "Stealth": !!int "10"
  "Perception": !!int "6"
"damage_resistances": "necrotic"
"condition_immunities": "charmed, frightened"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "the languages it knew in life"
"cr": "8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The nosferatu regains 10 hit points at the start of each of its turns if\
    \ it has at least 1 hit point and isn't in sunlight. If the nosferatu takes radiant\
    \ damage, this trait doesn't function until the start of the nosferatu's next\
    \ turn."
  "name": "Regeneration"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The nosferatu can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The nosferatu takes 20 radiant damage when it starts its turn in sunlight.\
    \ While in sunlight, it has disadvantage on attack rolls and ability checks."
  "name": "Sunlight Hypersensitivity"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The nosferatu doesn't require air."
  "name": "Unusual Nature"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The nosferatu makes two Claw attacks followed by one Bite attack. If both\
    \ Claw attacks hit the same creature, the Bite attack is made with advantage."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 5|avg (1d8 + 5) slashing damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d8 + 5|avg (1d8 + 5) piercing damage plus dice: 2d6|avg (2d6)\
    \ necrotic damage. If the target is missing any of its hit points, it instead\
    \ takes dice: 2d10|avg (2d10) necrotic damage.\n\nThe target's hit point maximum\
    \ is reduced by an amount equal to the necrotic damage taken, and the nosferatu\
    \ regains hit points equal to that amount. The reduction lasts until the target\
    \ finishes a long rest. The target dies if its hit point maximum is reduced to\
    \ 0. A Humanoid slain in this way and then buried in the ground rises as a nosferatu\
    \ after dice: 1d10|avg (1d10) days."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The nosferatu vomits blood in a 15-foot cone. Each creature in that area\
    \ must make a DC 16 Constitution saving throw. On a failed save, a creature takes\
    \ dice: 4d8|avg (4d8) necrotic damage, and it can't regain hit points for\
    \ 1 minute. On a successful save, the creature takes half as much damage with\
    \ no additional effects."
  "name": "Blood Disgorge (Recharge 5-6)"
"source":
- "VRGR"
"image": "/compendium/bestiary/undead/token/nosferatu.png"
aliases: ["Nosferatu"]
---
# Nosferatu
*Source: Van Richten's Guide to Ravenloft p. 239*  

Vicious, undead hunters, nosferatu possess the endless thirst of vampires but none of their grace. For them, existence is nothing more than an everlasting string of cold, desperate nights punctuated by crimson splashes of momentary warmth and lucidity. These joys are fleeting, as their blood addiction can never be quelled.

Nosferatu feed on anything with blood. Heaps of mutilated rats and stables turned into slaughterhouses are typical first signs of a nosferatu's predation. When the sun interrupts their hunts, nosferatu retreat to favored ruins, sewers, or caves, caring nothing for their lair's comfort. Rather than retiring to crypts, they seek filthy or inaccessible fissures, places any living soul would avoid.

For a few moments after feeding, nosferatu are lucid and capable of considering more than their next meal. In these instants, nosferatu recollect glimpses of what they once were, beings who knew pride, intention, and a world beyond the shadows. They might even momentarily be convinced to converse with other creatures. However, those who talk with nosferatu typically find them selfish, duplicitous creatures whose memories are faded and whose basic respect for life is long dead.

```ad-statblock
title: Nosferatu
![](/compendium/bestiary/undead/token/nosferatu.png#token)
*Medium undead, Unaligned*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 9d8 + 45|text(85)` (9d8 + 45) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|18 (+4)|21 (+5)| 6 (-2)|17 (+3)|14 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +7, Constitution +8, Wisdom +6
- **Skills** Perception +6, Stealth +10
- **Senses** darkvision 120 ft., passive Perception 16
- **Damage Resistances** necrotic
- **Condition Immunities** charmed, frightened
- **Languages** the languages it knew in life
- **Challenge** 8

## Traits

***Regeneration.*** The nosferatu regains 10 hit points at the start of each of its turns if it has at least 1 hit point and isn't in sunlight. If the nosferatu takes radiant damage, this trait doesn't function until the start of the nosferatu's next turn.

***Spider Climb.*** The nosferatu can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Sunlight Hypersensitivity.*** The nosferatu takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.

***Unusual Nature.*** The nosferatu doesn't require air.

## Actions

***Multiattack.*** The nosferatu makes two Claw attacks followed by one Bite attack. If both Claw attacks hit the same creature, the Bite attack is made with advantage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 5|avg` (`1d8 + 5`) slashing damage.

***Bite.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one creature. Hit: `dice: 1d8 + 5|avg` (`1d8 + 5`) piercing damage plus `dice: 2d6|avg` (`2d6`) necrotic damage. If the target is missing any of its hit points, it instead takes `dice: 2d10|avg` (`2d10`) necrotic damage.

The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the nosferatu regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0. A Humanoid slain in this way and then buried in the ground rises as a nosferatu after `dice: 1d10|avg` (`1d10`) days.

***Blood Disgorge (Recharge 5-6).*** The nosferatu vomits blood in a 15-foot cone. Each creature in that area must make a DC 16 Constitution saving throw. On a failed save, a creature takes `dice: 4d8|avg` (`4d8`) necrotic damage, and it can't regain hit points for 1 minute. On a successful save, the creature takes half as much damage with no additional effects.
```
^statblock