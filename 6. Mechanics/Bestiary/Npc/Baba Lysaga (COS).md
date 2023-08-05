---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
statblock: true
statblock-link: "#^statblock"
"name": "Baba Lysaga"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "20"
- !!int "17"
- !!int "13"
"speed": "walk 30 ft."
"saves":
  "Wisdom": !!int "7"
"skillsaves":
  "Religion": !!int "13"
  "Arcana": !!int "13"
"senses": "passive Perception 13"
"languages": "Abyssal, Common, Draconic, Dwarvish, Giant"
"cr": "11"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Baba Lysaga is a 16th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 17, dice: d20+9 (+9 to hit) with spell attacks). Baba Lysaga\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/acid-splash.md\|acid splash]],\
    \ [[/6. Mechanics/Spells/fire-bolt.md\|fire bolt]], [[/6. Mechanics/Spells/light.md\|light]],\
    \ [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]\n\
    \n1st level (4 1st-level slots): [[/6. Mechanics/Spells/detect-magic.md\|detect magic]],\
    \ [[/6. Mechanics/Spells/magic-missile.md\|magic missile]], [[/6. Mechanics/Spells/sleep.md\|sleep]],\
    \ [[/6. Mechanics/Spells/witch-bolt.md\|witch bolt]]\n\n2nd level (3 2nd-level slots):\
    \ [[/6. Mechanics/Spells/crown-of-madness.md\|crown of madness]], [enlarge/reduce](/compendium/spells/enlarge-reduce.md),\
    \ [[/6. Mechanics/Spells/misty-step.md\|misty step]]\n\n3rd level (3 3rd-level slots):\
    \ [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/fireball.md\|fireball]],\
    \ [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]]\n\n4th level (3 4th-level\
    \ slots): [[/6. Mechanics/Spells/blight.md\|blight]], [[/6. Mechanics/Spells/evards-black-tentacles.md\|Evard's black tentacles]],\
    \ [[/6. Mechanics/Spells/polymorph.md\|polymorph]]\n\n5th level (2 5th-level slots):\
    \ [[/6. Mechanics/Spells/cloudkill.md\|cloudkill]], [[/6. Mechanics/Spells/geas.md\|geas]],\
    \ [[/6. Mechanics/Spells/scrying.md\|scrying]]\n\n6th level (1 6th-level slots):\
    \ [[/6. Mechanics/Spells/programmed-illusion.md\|programmed illusion]], [[/6. Mechanics/Spells/true-seeing.md\|true seeing]]\n\
    \n7th level (1 7th-level slots): [[/6. Mechanics/Spells/finger-of-death.md\|finger of death]],\
    \ [[/6. Mechanics/Spells/mirage-arcane.md\|mirage arcane]]\n\n8th level (1 8th-level\
    \ slots): [[/6. Mechanics/Spells/power-word-stun.md\|power word stun]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Baba Lysaga can use an action to polymorph into a [[/6. Mechanics/Bestiary/Beast/Swarm Of Insects.md\|swarm of insects]]\
    \ (flies), or back into her true form. While in swarm form, she has a walking\
    \ speed of 5 feet and a flying speed of 30 feet. Anything she is wearing transforms\
    \ with her, but nothing she is carrying does."
  "name": "Shapechanger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Baba Lysaga is shielded against divination magic, as though protected by\
    \ a [[/6. Mechanics/Spells/nondetection.md\|nondetection]] spell."
  "name": "Blessing of Mother Night"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Baba Lysaga makes three attacks with her quarterstaff."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) bludgeoning damage, or 8 (dice: 1d8 +\
    \ 4|avg (1d8 + 4)) bludgeoning damage if wielded with two hands."
  "name": "Quarterstaff"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Baba Lysaga summons dice: 1d4|avg (1d4) swarms of insects. A summoned\
    \ swarm appears in an unoccupied space within 60 feet of Baba Lysaga and acts\
    \ as her ally. It remains until it dies or until Baba Lysaga dismisses it as an\
    \ action."
  "name": "Summon Swarms of Insects (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/baba-lysaga.png"
aliases: ["Baba Lysaga"]
---
# Baba Lysaga
*Source: Curse of Strahd p. 228*  

Two women gave life to Strahd von Zarovich. The first was Queen Ravenovia van Roeyen, Strahd's biological mother. The second was the queen's midwife, a devout follower of Mother Night named Baba Lysaga. Although it was the former who raised Strahd and enabled him to follow in his father's footsteps, it was the latter who sensed a potential for greatness and darkness in Strahd surpassing that of any other mortal. Lysaga believed then, as she believes now, that she is Strahd's true mother.

## Other Mother

When Strahd was still a baby in his crib, Baba Lysaga cast protective spells on him and crept into his nursery on stormy nights to sing magical rhymes to him. She also placed the "spark of magic" in him, ensuring that he would become a spellcaster.

Baba Lysaga's unhealthy attachment to the baby Strahd did not go unnoticed. After she received several disturbing reports, Queen Ravenovia was forced to banish the midwife from the kingdom. Lysaga never saw Strahd again, but she has succeeded in staying alive to witness the triumphs of her beloved boy, who, in her mind, is eternally blessed. Despite the horrors Strahd has wrought, Lysaga still envisions him as the perfect child she delivered into the world. Strahd is the only thing in her life that matters to her.

## Mother Nearest

During her exile, Baba Lysaga made countless sacrifices to Mother Night, pleading with the goddess to afflict Queen Ravenovia with ill health and visit death upon her. Lysaga eventually got her wish, and after Strahd settled in the valley of Barovia, Lysaga moved as close to him as she dared to.

In the filth-ridden depths of her heart, Lysaga knows that Strahd would never accept her as his true mother, nor could she bear his rejection. As a result, she has never confronted him. She would rather exist in perpetual denial, whiling away the days, months, and years practicing fell magic and looking for ways to help her "son."

## Raven Bane

Baba Lysaga has allies in Castle Ravenloft - a coven of witches. Through the aid of these witches, Lysaga recently uncovered a potential threat to Strahd: a secret society of wereravens called the Keepers of the Feather, a group that uses ordinary ravens as their spies.

Strahd doesn't consider the wereravens a serious threat, but Lysaga has chosen to make them the bane of her existence. After much searching and scrying, she discovered a wereraven refuge at the Wizard of Wines winery (chapter 12), and she has begun to wage war against it. In addition, she has forged an alliance with the mad druids that haunt Yester Hill (chapter 14), convincing them that she gave birth to Strahd, whom the druids consider a god. With the druids on her side, she expects to rid Barovia of its wereraven menace.

## Gifts of Mother Night

The goddess Mother Night has bestowed magical gifts on Baba Lysaga as rewards for her ceaseless devotion to Strahd. Her skin has the resilience of stone, she is resistant to harmful magic, and she is shielded against divination magic. Mother Night has also imparted to Lysaga the secret of longevity, which requires her to bathe in the blood of beasts on nights of the new moon. Failure to do so causes Lysaga to age rapidly, becoming mere dust and bones in a matter of seconds.

## Baba Lysaga's Traits

### Ideal

"No love is greater than a mother's love for her son."

### Bond

"I am the mother of Strahd. Anyone who disputes this fact can rot."

### Flaw

"I will not rest until the last of my son's enemies are destroyed."

## Stat Block

```ad-statblock
title: Baba Lysaga
![[/6. Mechanics/Bestiary/Npc/Token/baba-lysaga.png#token]]
*Medium humanoid(human, shapechanger), Chaotic Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** `dice: 16d8 + 48|text(120)` (16d8 + 48) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|10 (+0)|16 (+3)|20 (+5)|17 (+3)|13 (+1)|

- **Proficiency Bonus** +4
- **Saving Throws** Wisdom +7
- **Skills** Arcana +13, Religion +13
- **Senses** passive Perception 13
- **Languages** Abyssal, Common, Draconic, Dwarvish, Giant
- **Challenge** 11

## Traits

***Shapechanger.*** Baba Lysaga can use an action to polymorph into a [[/6. Mechanics/Bestiary/Beast/Swarm Of Insects.md\|swarm of insects]] (flies), or back into her true form. While in swarm form, she has a walking speed of 5 feet and a flying speed of 30 feet. Anything she is wearing transforms with her, but nothing she is carrying does.

***Blessing of Mother Night.*** Baba Lysaga is shielded against divination magic, as though protected by a [[/6. Mechanics/Spells/nondetection.md\|nondetection]] spell.

***Spellcasting.*** Baba Lysaga is a 16th-level spellcaster. Her spellcasting ability is Intelligence (spell save DC 17, `dice: d20+9` (+9 to hit) with spell attacks). Baba Lysaga has the following wizard spells prepared:

**Cantrips (at will)**: [[/6. Mechanics/Spells/acid-splash.md\|acid splash]], [[/6. Mechanics/Spells/fire-bolt.md\|fire bolt]], [[/6. Mechanics/Spells/light.md\|light]], [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]

**1st level (4 1st-level slots)**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/magic-missile.md\|magic missile]], [[/6. Mechanics/Spells/sleep.md\|sleep]], [[/6. Mechanics/Spells/witch-bolt.md\|witch bolt]]

**2nd level (3 2nd-level slots)**: [[/6. Mechanics/Spells/crown-of-madness.md\|crown of madness]], [enlarge/reduce](/compendium/spells/enlarge-reduce.md), [[/6. Mechanics/Spells/misty-step.md\|misty step]]

**3rd level (3 3rd-level slots)**: [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/fireball.md\|fireball]], [[/6. Mechanics/Spells/lightning-bolt.md\|lightning bolt]]

**4th level (3 4th-level slots)**: [[/6. Mechanics/Spells/blight.md\|blight]], [[/6. Mechanics/Spells/evards-black-tentacles.md\|Evard's black tentacles]], [[/6. Mechanics/Spells/polymorph.md\|polymorph]]

**5th level (2 5th-level slots)**: [[/6. Mechanics/Spells/cloudkill.md\|cloudkill]], [[/6. Mechanics/Spells/geas.md\|geas]], [[/6. Mechanics/Spells/scrying.md\|scrying]]

**6th level (1 6th-level slots)**: [[/6. Mechanics/Spells/programmed-illusion.md\|programmed illusion]], [[/6. Mechanics/Spells/true-seeing.md\|true seeing]]

**7th level (1 7th-level slots)**: [[/6. Mechanics/Spells/finger-of-death.md\|finger of death]], [[/6. Mechanics/Spells/mirage-arcane.md\|mirage arcane]]

**8th level (1 8th-level slots)**: [[/6. Mechanics/Spells/power-word-stun.md\|power word stun]]

## Actions

***Multiattack.*** Baba Lysaga makes three attacks with her quarterstaff.

***Quarterstaff.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 4` (`1d6 + 4`) bludgeoning damage, or 8 (`dice: 1d8 + 4` (`1d8 + 4`)) bludgeoning damage if wielded with two hands.

***Summon Swarms of Insects (Recharges after a Short or Long Rest).*** Baba Lysaga summons `dice: 1d4` (`1d4`) swarms of insects. A summoned swarm appears in an unoccupied space within 60 feet of Baba Lysaga and acts as her ally. It remains until it dies or until Baba Lysaga dismisses it as an action.
```
^statblock