---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/desert
- monster/environment/forest
- monster/environment/hill
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/any-race
statblock: true
statblock-link: "#^statblock"
"name": "Vistana Bandit"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Lawful alignment"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "walk 30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/8"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) slashing damage."
  "name": "Scimitar"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+3 (+3 to hit), range 80/320 ft., one\
    \ target. Hit: dice: 1d8 + 1|avg (1d8 + 1) piercing damage."
  "name": "Light Crossbow"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The Vistana targets one creature that it can see within 30 feet of it.\
    \ The target must succeed on a DC 10 Wisdom saving throw or be cursed. The Vistana\
    \ chooses the curse's effect from the options that follow; other Vistani curses\
    \ are possible. All such effects deal psychic damage to the Vistani who uttered\
    \ them when they end:\n\n- The target is unable to perform a certain kind of act\
    \ involving fine motor control, such as tying knots, writing, playing an instrument,\
    \ sewing, or casting spells that have somatic components. When this curse ends,\
    \ the Vistana takes dice: 1d6|avg (1d6) psychic damage.  \n- The target's\
    \ appearance changes in a sinister yet purely cosmetic way. For example, the curse\
    \ can place a scar on the target's face, turn the target's teeth into yellow fangs,\
    \ or give the target bad breath. When this curse ends, the Vistana takes dice:\
    \ 1d6|avg (1d6) psychic damage.  \n- A nonmagical item in the target's possession\
    \ (chosen by the DM) disappears and can't be found until the curse ends. The lost\
    \ item can weigh no more than 1 pound. When this curse ends, the Vistana takes\
    \ dice: 1d6|avg (1d6) psychic damage.  \n- The target gains vulnerability\
    \ to a damage type of the Vistana's choice. When this curse ends, the Vistana\
    \ takes dice: 3d6|avg (3d6) psychic damage.  \n- The target has disadvantage\
    \ on ability checks and saving throws tied to one ability score of the Vistana's\
    \ choice. When this curse ends, the Vistana takes dice: 3d6|avg (3d6) psychic\
    \ damage.  \n- The target's attunement to one magic item (chosen by the DM) ends,\
    \ and the target can't attune to the chosen item until the curse ends. When this\
    \ curse ends, the Vistana takes dice: 5d6|avg (5d6) psychic damage.  \n- The\
    \ target is [blinded](compendium/rules/conditions.md#blinded), [deafened](compendium/rules/conditions.md#deafened),\
    \ or both. When this curse ends, the Vistana takes dice: 5d6|avg (5d6) psychic\
    \ damage.  \n\nThe curse lasts until ended with a [greater restoration](/compendium/spells/greater-restoration.md)\
    \ spell, a [remove curse](/compendium/spells/remove-curse.md) spell, or similar\
    \ magic. It doesn't end when the target dies. If a cursed target is returned to\
    \ life, the curse remains in effect."
  "name": "Curse (Recharges After a Long Rest)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "As an action, a Vistana can target a creature within 10 feet that the Vistana\
    \ can see. This magical ability, which the Vistani call the Evil Eye, duplicates\
    \ the duration and effect of the [animal friendship](/compendium/spells/animal-friendship.md),\
    \ [charm person](/compendium/spells/charm-person.md), or [hold person](/compendium/spells/hold-person.md)\
    \ spell (Vistana's choice; spell DC 10), but requires neither somatic nor material\
    \ components. If the target succeeds on the save, the Vistana is [blinded](compendium/rules/conditions.md#blinded)\
    \ until the end of the Vistana's next turn.\n\nA Vistana who uses Evil Eye can't\
    \ use it again before finishing a short or long rest. Once a target succeeds on\
    \ a saving throw against a Vistana's Evil Eye, it is immune to the Evil Eye of\
    \ all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "/compendium/bestiary/humanoid/token/vistana-bandit.png"
aliases: ["Vistana Bandit"]
---
# Vistana Bandit
*Source: Curse of Strahd p. 28, Derived from Bandit (MM)*  

```ad-statblock
title: Vistana Bandit
![](/compendium/bestiary/humanoid/token/vistana-bandit.png#token)
*Medium humanoid(any race), Any Non-Lawful alignment*

- **Armor Class** 12 ([leather armor](/compendium/items/leather-armor.md))
- **Hit Points** `dice: 2d8 + 2|text(11)` (2d8 + 2) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|12 (+1)|12 (+1)|10 (+0)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** passive Perception 10
- **Languages** any one language (usually Common)
- **Challenge** 1/8

## Actions

***Scimitar.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 1|avg` (`1d6 + 1`) slashing damage.

***Light Crossbow.*** *Ranged Weapon Attack:* `dice: d20+3` (+3 to hit), range 80/320 ft., one target. Hit: `dice: 1d8 + 1|avg` (`1d8 + 1`) piercing damage.

***Curse (Recharges After a Long Rest).*** The Vistana targets one creature that it can see within 30 feet of it. The target must succeed on a DC 10 Wisdom saving throw or be cursed. The Vistana chooses the curse's effect from the options that follow; other Vistani curses are possible. All such effects deal psychic damage to the Vistani who uttered them when they end:

- The target is unable to perform a certain kind of act involving fine motor control, such as tying knots, writing, playing an instrument, sewing, or casting spells that have somatic components. When this curse ends, the Vistana takes `dice: 1d6|avg` (`1d6`) psychic damage.  
- The target's appearance changes in a sinister yet purely cosmetic way. For example, the curse can place a scar on the target's face, turn the target's teeth into yellow fangs, or give the target bad breath. When this curse ends, the Vistana takes `dice: 1d6|avg` (`1d6`) psychic damage.  
- A nonmagical item in the target's possession (chosen by the DM) disappears and can't be found until the curse ends. The lost item can weigh no more than 1 pound. When this curse ends, the Vistana takes `dice: 1d6|avg` (`1d6`) psychic damage.  
- The target gains vulnerability to a damage type of the Vistana's choice. When this curse ends, the Vistana takes `dice: 3d6|avg` (`3d6`) psychic damage.  
- The target has disadvantage on ability checks and saving throws tied to one ability score of the Vistana's choice. When this curse ends, the Vistana takes `dice: 3d6|avg` (`3d6`) psychic damage.  
- The target's attunement to one magic item (chosen by the DM) ends, and the target can't attune to the chosen item until the curse ends. When this curse ends, the Vistana takes `dice: 5d6|avg` (`5d6`) psychic damage.  
- The target is [blinded](compendium/rules/conditions.md#blinded), [deafened](compendium/rules/conditions.md#deafened), or both. When this curse ends, the Vistana takes `dice: 5d6|avg` (`5d6`) psychic damage.  

The curse lasts until ended with a [greater restoration](/compendium/spells/greater-restoration.md) spell, a [remove curse](/compendium/spells/remove-curse.md) spell, or similar magic. It doesn't end when the target dies. If a cursed target is returned to life, the curse remains in effect.

***Evil Eye (Recharges after a Short or Long Rest).*** As an action, a Vistana can target a creature within 10 feet that the Vistana can see. This magical ability, which the Vistani call the Evil Eye, duplicates the duration and effect of the [animal friendship](/compendium/spells/animal-friendship.md), [charm person](/compendium/spells/charm-person.md), or [hold person](/compendium/spells/hold-person.md) spell (Vistana's choice; spell DC 10), but requires neither somatic nor material components. If the target succeeds on the save, the Vistana is [blinded](compendium/rules/conditions.md#blinded) until the end of the Vistana's next turn.

A Vistana who uses Evil Eye can't use it again before finishing a short or long rest. Once a target succeeds on a saving throw against a Vistana's Evil Eye, it is immune to the Evil Eye of all Vistani for 24 hours.
```
^statblock

## Environment

coastal, hill, arctic, urban, forest, desert