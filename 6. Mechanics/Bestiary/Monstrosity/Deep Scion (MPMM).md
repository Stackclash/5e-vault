---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/coastal
- monster/environment/underwater
- monster/size/medium
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Deep Scion"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"stats":
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "10"
- !!int "12"
- !!int "14"
"speed": "walk 30 ft. (20 ft. and swim 40 ft. in hybrid form)"
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "3"
"skillsaves":
  "Sleight of Hand": !!int "3"
  "Deception": !!int "6"
  "Stealth": !!int "3"
  "Insight": !!int "3"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Aquan, Common, thieves' cant"
"cr": "3"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The deep scion can breathe air and water."
  "name": "Amphibious (Hybrid Form Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The deep scion makes two Battleaxe attacks, or it makes one Bite attack\
    \ and two Claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: 8 (dice: 1d8 + 4|avg (1d8 + 4)) slashing damage, or 9 (dice: 1d10\
    \ + 4|avg (1d10 + 4)) slashing damage if used with two hands."
  "name": "Battleaxe"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d4 + 4|avg (1d4 + 4) piercing damage."
  "name": "Bite (Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) slashing damage."
  "name": "Claw (Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The deep scion emits a terrible scream audible within 300 feet. Creatures\
    \ within 30 feet of the deep scion must succeed on a DC 13 Wisdom saving throw\
    \ or be [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] until the end of the\
    \ deep scion's next turn. In water, the psychic screech also telepathically transmits\
    \ the deep scion's memories of the last 24 hours to its master, regardless of\
    \ distance, so long as it and its master are in the same body of water."
  "name": "Psychic Screech (Hybrid Form Only; Recharges after a Short or Long Rest)"
"bonus_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The deep scion transforms into a hybrid form (humanoid-piscine) or back\
    \ into its true form, which is humanlike. Its statistics, other than its speed,\
    \ are the same in each form. Any equipment it is wearing or carrying isn't transformed.\
    \ The deep scion reverts to its true form if it dies."
  "name": "Change Shape"
"source":
- "MPMM"
- "VGM"
"image": "/compendium/bestiary/monstrosity/token/deep-scion.png"
aliases: ["Deep Scion"]
---
# Deep Scion
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 88, Volo's Guide to Monsters p. 135*  

Deep scions began life as people who were stolen from shore or saved from sinking ships and offered a terrible bargain by an undersea power: surrender, body and soul, or drown. Those who submit are subjected to an ancient ritual widespread among evil aquatic creatures. Its methods are painful and the result never certain, but when it works, the magic transforms an air-breathing person into a shapeshifter that can take on an aquatic form.

A deep scion emerges from the depths in service to their underwater master, which is likely a kraken or some other ancient being of the deep. While wearing the mind and body of the person they once were as a sort of mask, the creature is bent on fulfilling their master's desires. Sometimes a deep scion returns to their former home—unexpectedly found alive when all hope was lost. At other times the deep scion takes on a new identity. In any case, it is the deep scion's duty to infiltrate the air-breathing world and report back to their master. When set to this task, a deep scion worms their way into the life of an unsuspecting enemy as a new friend, a lover, the perfect candidate for a job, or some other role that enables the minion to carry out their master's commands.

The training to which a deep scion is subjected rids it of empathy for those they spy on. Though a deep scion might behave as though infatuated, laugh at the joke of a friend, or appear incensed at some injustice, each of these acts is artificial to the deep scion, a means to an end. The creature believes that their true form is the shape they take when they return to the sea they think of as home. Ironically, however, a deep scion that is killed when in their piscine form is stripped of the magic that enabled them to transform, leaving behind the corpse of the person the deep scion once was.

```ad-statblock
title: Deep Scion
![[/6. Mechanics/Bestiary/Monstrosity/Token/deep-scion.png#token]]
*Medium monstrosity, Chaotic Evil*

- **Armor Class** 11 
- **Hit Points** `dice: 9d8 + 27|text(67)` (9d8 + 27) 
- **Speed** walk 30 ft. (20 ft. and swim 40 ft. in hybrid form)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|13 (+1)|16 (+3)|10 (+0)|12 (+1)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +3, Charisma +4
- **Skills** Deception +6, Insight +3, Sleight of Hand +3, Stealth +3
- **Senses** darkvision 120 ft., passive Perception 11
- **Languages** Aquan, Common, thieves' cant
- **Challenge** 3

## Traits

***Amphibious (Hybrid Form Only).*** The deep scion can breathe air and water.

## Actions

***Multiattack.*** The deep scion makes two Battleaxe attacks, or it makes one Bite attack and two Claw attacks.

***Battleaxe.*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: 8 (`dice: 1d8 + 4` (`1d8 + 4`)) slashing damage, or 9 (`dice: 1d10 + 4` (`1d10 + 4`)) slashing damage if used with two hands.

***Bite (Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one creature. Hit: `dice: 1d4 + 4` (`1d4 + 4`) piercing damage.

***Claw (Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+6` (+6 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 4` (`1d6 + 4`) slashing damage.

***Psychic Screech (Hybrid Form Only; Recharges after a Short or Long Rest).*** The deep scion emits a terrible scream audible within 300 feet. Creatures within 30 feet of the deep scion must succeed on a DC 13 Wisdom saving throw or be [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] until the end of the deep scion's next turn. In water, the psychic screech also telepathically transmits the deep scion's memories of the last 24 hours to its master, regardless of distance, so long as it and its master are in the same body of water.

## Bonus Actions

***Change Shape.*** The deep scion transforms into a hybrid form (humanoid-piscine) or back into its true form, which is humanlike. Its statistics, other than its speed, are the same in each form. Any equipment it is wearing or carrying isn't transformed. The deep scion reverts to its true form if it dies.
```
^statblock

## Environment

coastal, underwater