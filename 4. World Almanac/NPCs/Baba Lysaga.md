---
obsidianUIMode: preview
statblock: 'true'
tags:
  - compendium/src/5e/cos
  - monster/cr/11
  - monster/size/medium
  - monster/type/humanoid/human
  - monster/type/humanoid/shapechanger
location: '[[4. World Almanac/Places of Interest/Ruins of Berez.md|Ruins of Berez]]'
condition: healthy
image: 4. World Almanac/NPCs/img/baba-lysaga.webp
relationships: []
aliases:
  - Baba Lysaga
pronounced: BAH-bah LEE-sah-gah
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 532
alignment: Chaotic Evil
occupation: null
groups: []
religions: []
personality: 'Mad, obsessed, powerful'
ideal: No love is greater than a mother's love for her son.
bond: I am the mother of Strahd. Anyone who disputes this fact can rot.
flaw: >-
  I will not rest until the last of my son's enemies are destroyed. Her
  obsession with Strahd blinds her to other threats
goals:
  - ' To aid Strahd, to destroy his enemies, to gain more arcane power'
likes: 'Magic, Strahd, her creeping hut'
dislikes: 'Intruders in Berez, those who oppose Strahd, the light'
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
> ```
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Gender** | `INPUT[inlineSelect(option(male),option(female)):gender]` |
> **Age** | `INPUT[number:age]` |
> **Alignment** | `INPUT[inlineSelect(option(Lawful Good),option(Neutral Good),option(Chaotic Good),option(Lawful Neutral),option(Neutral),option(Chaotic Neutral),option(Lawful Evil),option(Neutral Evil),option(Chaotic Evil)):alignment]` |
> **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `INPUT[inlineList:occupation]` |
> **Group(s)** | `INPUT[inlineList:groups]` |
> **Religion(s)** | `INPUT[inlineList:religions]` |
> **Current Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |

# **`=this.file.name`**
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

## Traits/Goals
> [!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-gray] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-gray] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-gray] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`

> [!column|dataview] Goals
>> `INPUT[textArea:goals]`

## Relationships
`BUTTON[add-relationship,remove-relationship]`
```meta-bind-button
style: primary
label: Add Relationship
id: add-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Add Relationship"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: remove
  - type: input
    str: relationship
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Baba Lysaga"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "18"
- !!int "10"
- !!int "16"
- !!int "20"
- !!int "17"
- !!int "13"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "7"
"skillsaves":
  "Religion": !!int "13"
  "Arcana": !!int "13"
"senses": "passive Perception 13"
"languages": "Abyssal, Common, Draconic, Dwarvish, Giant"
"cr": "11"
"traits":
- "desc": "Baba Lysaga is a 16th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 17, +9 to hit with spell attacks). Baba Lysaga has the following\
    \ wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Acid Splash.md|acid splash]],\
    \ [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]], [[5. Mechanics/Spells/Light.md|light]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]], [[5. Mechanics/Spells/Sleep.md|sleep]],\
    \ [[5. Mechanics/Spells/Witch Bolt.md|witch bolt]]\n\n2nd level (3 slots): [[5. Mechanics/Spells/Crown Of Madness.md|crown\
    \ of madness]], [[5. Mechanics/Spells/Enlarge Reduce.md|enlarge/reduce]],\
    \ [[5. Mechanics/Spells/Misty Step.md|misty step]]\n\n3rd level (3 slots): [[5. Mechanics/Spells/Dispel Magic.md|dispel\
    \ magic]], [[5. Mechanics/Spells/Fireball.md|fireball]],\
    \ [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]\n\n4th level (3 slots):\
    \ [[5. Mechanics/Spells/Blight.md|blight]], [[5. Mechanics/Spells/Evards Black Tentacles.md|Evard's black tentacles]],\
    \ [[5. Mechanics/Spells/Polymorph.md|polymorph]]\n\n5th level (2 slots): [[5. Mechanics/Spells/Cloudkill.md|cloudkill]],\
    \ [[5. Mechanics/Spells/Geas.md|geas]], [[5. Mechanics/Spells/Scrying.md|scrying]]\n\
    \n6th level (1 slots): [[5. Mechanics/Spells/Programmed Illusion.md|programmed illusion]],\
    \ [[5. Mechanics/Spells/True Seeing.md|true seeing]]\n\n7th level (1 slots):\
    \ [[5. Mechanics/Spells/Finger Of Death.md|finger of death]], [[5. Mechanics/Spells/Mirage Arcane.md|mirage arcane]]\n\
    \n8th level (1 slots): [[5. Mechanics/Spells/Power Word Stun.md|power word stun]]"
  "name": "Spellcasting"
- "desc": "Baba Lysaga can use an action to polymorph into a [[5. Mechanics/Bestiary/Beast/Swarm Of Insects.md|swarm of insects]]\
    \ (flies), or back into her true form. While in swarm form, she has a walking\
    \ speed of 5 feet and a flying speed of 30 feet. Anything she is wearing transforms\
    \ with her, but nothing she is carrying does."
  "name": "Shapechanger"
- "desc": "Baba Lysaga is shielded against divination magic, as though protected by\
    \ a [[5. Mechanics/Spells/Nondetection.md|nondetection]] spell."
  "name": "Blessing of Mother Night"
"actions":
- "desc": "Baba Lysaga makes three attacks with her quarterstaff."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if wielded with two\
    \ hands."
  "name": "Quarterstaff"
- "desc": "Baba Lysaga summons 1d4 swarms of insects. A summoned swarm appears in\
    \ an unoccupied space within 60 feet of Baba Lysaga and acts as her ally. It remains\
    \ until it dies or until Baba Lysaga dismisses it as an action."
  "name": "Summon Swarms of Insects (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/baba-lysaga-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
