---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/elf
statblock: true
statblock-link: "#^statblock"
"name": "Drow Priestess of Lolth"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "16"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "17"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Religion": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "8"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]]\n\n1/day each:\
    \ [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]],\
    \ [[/6. Mechanics/Spells/levitate.md\|levitate]] (self only)"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (save DC 14, dice: d20+6 (+6 to hit) with spell attacks). The drow has the\
    \ following cleric spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/guidance.md\|guidance]],\
    \ [[/6. Mechanics/Spells/poison-spray.md\|poison spray]], [[/6. Mechanics/Spells/resistance.md\|resistance]],\
    \ [[/6. Mechanics/Spells/spare-the-dying.md\|spare the dying]], [[/6. Mechanics/Spells/thaumaturgy.md\|thaumaturgy]]\n\
    \n1st level (4 1st-level slots): [[/6. Mechanics/Spells/animal-friendship.md\|animal friendship]],\
    \ [[/6. Mechanics/Spells/cure-wounds.md\|cure wounds]], [[/6. Mechanics/Spells/detect-poison-and-disease.md\|detect poison and disease]],\
    \ [[/6. Mechanics/Spells/ray-of-sickness.md\|ray of sickness]]\n\n2nd level (3 2nd-level\
    \ slots): [[/6. Mechanics/Spells/lesser-restoration.md\|lesser restoration]], [protection\
    \ from poison](/compendium/spells/protection-from-poison.md), [[/6. Mechanics/Spells/web.md\|web]]\n\
    \n3rd level (3 3rd-level slots): [[/6. Mechanics/Spells/conjure-animals.md\|conjure animals]]\
    \ (2 [[/6. Mechanics/Bestiary/Beast/Giant Spider.md\|giant spiders]]), [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]]\n\
    \n4th level (3 4th-level slots): [[/6. Mechanics/Spells/divination.md\|divination]],\
    \ [[/6. Mechanics/Spells/freedom-of-movement.md\|freedom of movement]]\n\n5th level\
    \ (2 5th-level slots): [[/6. Mechanics/Spells/insect-plague.md\|insect plague]],\
    \ [[/6. Mechanics/Spells/mass-cure-wounds.md\|mass cure wounds]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow makes two scourge attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage plus dice: 5d6|avg (5d6)\
    \ poison damage."
  "name": "Scourge"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The drow attempts to magically summon a [[/6. Mechanics/Bestiary/Fiend/Yochlol.md\|yochlol]]\
    \ with a 30|30 percent|30% summoning chance% chance chance of success. If the\
    \ attempt fails, the drow takes dice: 1d10|avg (1d10) psychic damage. Otherwise,\
    \ the summoned demon appears in an unoccupied space within 60 feet of its summoner,\
    \ acts as an ally of its summoner, and can't summon other demons. It remains for\
    \ 10 minutes, until it or its summoner dies, or until its summoner dismisses it\
    \ as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
"image": "/compendium/bestiary/humanoid/token/drow-priestess-of-lolth.png"
aliases: ["Drow Priestess of Lolth"]
---
# Drow Priestess of Lolth
*Source: Monster Manual p. 129, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Ghosts of Saltmarsh*  

Female drow with blood ties to a noble house are molded and trained from birth to become priestesses of Lolth. The Spider Queen doesn't allow male drow to hold such positions.

Such priestesses execute the will of the Spider Queen, and as a result, they wield tremendous power and influence in drow society. The matron mothers who rule the drow houses are the most powerful of Lolth's priestesses, but they must constantly balance their devotion to the Spider Queen with their devotion to their families.

## Drow

Tens of thousands of years ago, the elves were divided, with those of benevolent disposition battling those that were selfish and cruel. The war among elvenkind ended when the good elves banished their malevolent kin to the subterranean depths. Here, in the lightless caverns and endless warrens of twisting passages, the dark elves-the drow-found refuge. They also found leadership in the only elven deity who had not forsaken them. At her command, the dark elves built an empire in the underworld.

### Children of Lolth

The drow worship Lolth, a deity who resides in the Abyss. Known as the Spider Queen or the Demon Queen of Spiders, she is the figure around which the dark elves have built their subterranean civilization. Whatever she demands, the drow do. The wickedest of elves, drow are seldom seen by the surface world. Though they plot to destroy the elves that banished them, they no longer see themselves as exiles. They are the destined rulers of the darkness, and when Lolth commands them to rise up and destroy their surface-dwelling kin, they will.

### Creatures of Darkness

The drow have lived underground for so long that they have evolved to their surroundings and can see in the dark. However, they can no longer stand sunlight. When slaves are in short supply in the Underdark, the drow send raiding parties to the surface to capture humanoids under cover of darkness, bringing them back to their cities to be tortured into submission. Beyond those occasional excursions, the drow are content to remain in their subterranean realm, where they feel secure and in control.

### Underdark Cities

The dark elves build fantastic cities in enormous caverns where food and water are abundant. Their ability to sculpt stone rivals that of the greatest dwarf artisans, yet their structures retain a decidedly elven aesthetic. Though appearing delicate, drow settlements are structurally sound and remarkably resilient. The drow like to hollow out enormous stalagmites and stalactites, creating populated spires that rise from the floors and ceilings. A drow city is a sprawling metropolis enclosed by high walls. Non-drow visitors must conduct their business outside the walls under watchful eyes. The drow raise and keep giant spiders to help protect their cities against intruders, even as they drape those cities in beautiful webbing, creating a gossamer snare to catch flying enemies that would otherwise soar over the walls.

### Drow Magic

Just as the drow have adapted to underground life, so too has their magic. In addition to using that magic to carve their cities from stone, they empower their weapons, create dangerous new magic items, and summon demons from the Abyss. Drow spellcasters are supremely arrogant and never hesitate to use their magic in the most abhorrent ways.

### Arms and Armor

Drow craft weapons made of adamantine, a dark and supernaturally hard metal. Drow artisans adorn their weapons and armor with web-like filigree and spider motifs, and mages sometimes imbue items with magic to enhance their effectiveness. However, such magic fades when exposed to sunlight, so that magical drow weapons and armor rarely retain their enhancement bonuses and magical properties when brought to the surface.

### Cutthroat Politics

Drow politics are cutthroat and rife with intrigue. When drow work together, it is typically to destroy a common foe and ensure their own survival, and such alliances are short lived and fraught with peril.

Drow society is divided into noble houses, each ruled by a matron who seeks to raise the prestige and power of her house above all others. Other high-ranking members of the house are blood relatives, while the middling ranks are flush with drow from weaker families that have sworn fealty to the greater house. Clinging precariously to the bottom rung of a house's social ladder are the house slaves, made up of drow of low birth and the occasional non-drow captive.

### Matriarchal Rule

Lolth, through her faithful priestesses, dictates the rules of drow society, ensuring that her orders and plots are carried out. Since Lolth is prone to manifesting on the Material Plane and directly punishing those that disobey her, the drow have learned to heed what she says and do as her priestesses command.

In drow society, males are subservient to females. A male drow might lead an Underdark patrol or a raiding party to the surface, but he reports to a female drow-either the matron of his house or one of her hand-picked female subordinates. Although male drow can fill almost any function in drow society, they can't be priests, nor can they rule a house.

### Poison Predilection

Distilled from spider venom and the flora of the Underdark, poison can be found in abundance among the drow, and it plays an important part in their culture and politics. Drow mages concoct a viscid toxin that leaves enemies [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]]. Drow warriors coat their blades and crossbow bolts with this venom, looking forward to the interrogation and torture that follows combat.

> [!quote] Variant: Drow Magic Armor and Weapons
> 
> Drow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.
> 
> - A drow wearing a +1 chain shirt and carrying a +1 shortsword has AC 16 and a +1 bonus on attack and damage rolls with shortsword attacks.  
> - A drow elite warrior wearing +2 studded leather and carrying a +2 shortsword has AC 20 and a +2 bonus on attack and damage rolls with shortsword attacks.  
> - A drow priestess of Lolth wearing +3 scale mail has AC 19.  
^variant-drow-magic-armor-and-weapons

> [!quote]- A quote from Nelar Autumnwell, elf cleric of Corellon Larethian  
> 
> Such depravity. Such terrifying cruelty. They are the vile poison that plagues all elvenkind.


## Stat Block

```ad-statblock
title: Drow Priestess of Lolth
![[/6. Mechanics/Bestiary/Humanoid/Token/drow-priestess-of-lolth.png#token]]
*Medium humanoid(elf), Neutral Evil*

- **Armor Class** 16 ([[/6. Mechanics/Items/scale-mail.md\|scale mail]])
- **Hit Points** `dice: 13d8 + 13|text(71)` (13d8 + 13) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|14 (+2)|12 (+1)|13 (+1)|17 (+3)|18 (+4)|

- **Proficiency Bonus** +3
- **Saving Throws** Constitution +4, Wisdom +6, Charisma +7
- **Skills** Insight +6, Perception +6, Religion +4, Stealth +5
- **Senses** darkvision 120 ft., passive Perception 16
- **Languages** Elvish, Undercommon
- **Challenge** 8

## Traits

***Fey Ancestry.*** The drow has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#charmed\|charmed]], and magic can't put the drow to sleep.

***Sunlight Sensitivity.*** While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) checks that rely on sight.

***Innate Spellcasting.*** The drow's spellcasting ability is Charisma (spell save DC 15). She can innately cast the following spells, requiring no material components:

**At will**: [[/6. Mechanics/Spells/dancing-lights.md\|dancing lights]]

**1/day each**: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/faerie-fire.md\|faerie fire]], [[/6. Mechanics/Spells/levitate.md\|levitate]] (self only)

***Spellcasting.*** The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom (save DC 14, `dice: d20+6` (+6 to hit) with spell attacks). The drow has the following cleric spells prepared:

**Cantrips (at will)**: [[/6. Mechanics/Spells/guidance.md\|guidance]], [[/6. Mechanics/Spells/poison-spray.md\|poison spray]], [[/6. Mechanics/Spells/resistance.md\|resistance]], [[/6. Mechanics/Spells/spare-the-dying.md\|spare the dying]], [[/6. Mechanics/Spells/thaumaturgy.md\|thaumaturgy]]

**1st level (4 1st-level slots)**: [[/6. Mechanics/Spells/animal-friendship.md\|animal friendship]], [[/6. Mechanics/Spells/cure-wounds.md\|cure wounds]], [[/6. Mechanics/Spells/detect-poison-and-disease.md\|detect poison and disease]], [[/6. Mechanics/Spells/ray-of-sickness.md\|ray of sickness]]

**2nd level (3 2nd-level slots)**: [[/6. Mechanics/Spells/lesser-restoration.md\|lesser restoration]], [[/6. Mechanics/Spells/protection-from-poison.md\|protection from poison]], [[/6. Mechanics/Spells/web.md\|web]]

**3rd level (3 3rd-level slots)**: [[/6. Mechanics/Spells/conjure-animals.md\|conjure animals]] (2 [[/6. Mechanics/Bestiary/Beast/Giant Spider.md\|giant spiders]]), [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]]

**4th level (3 4th-level slots)**: [[/6. Mechanics/Spells/divination.md\|divination]], [[/6. Mechanics/Spells/freedom-of-movement.md\|freedom of movement]]

**5th level (2 5th-level slots)**: [[/6. Mechanics/Spells/insect-plague.md\|insect plague]], [[/6. Mechanics/Spells/mass-cure-wounds.md\|mass cure wounds]]

## Actions

***Multiattack.*** The drow makes two scourge attacks.

***Scourge.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2` (`1d6 + 2`) piercing damage plus `dice: 5d6` (`5d6`) poison damage.

***Summon Demon (1/Day).*** The drow attempts to magically summon a [[/6. Mechanics/Bestiary/Fiend/Yochlol.md\|yochlol]] with a 30|30 percent|30% summoning chance% chance chance of success. If the attempt fails, the drow takes `dice: 1d10` (`1d10`) psychic damage. Otherwise, the summoned demon appears in an unoccupied space within 60 feet of its summoner, acts as an ally of its summoner, and can't summon other demons. It remains for 10 minutes, until it or its summoner dies, or until its summoner dismisses it as an action.
```
^statblock

## Environment

underdark