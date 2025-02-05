---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/19
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/wizard
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/tasha-the-witch.webp
relationships: []
aliases: [Tasha the Witch]
pronounced: 
race: 
gender: 
age: 
alignment: Chaotic Neutral
occupation: 
groups: []
religions: []
personality: 
ideal: 
bond: 
flaw: 
goals: 
likes: 
dislikes: 
partyRelationships: {}
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('imageCarousel', {current: dv.current()})
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
> **Current Location** | `INPUT[suggester(optionQuery(#location)):location]` |
> **Party Relationship** | `$=await dv.view('metaBindInput', {type: 'inlineSelect', options: ['option(Stranger)','option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page('Configuration').active_party).file.name]})` |

# **`=this.file.name`**
*Source: Vecna: Eve of Ruin p. 252*

Tasha's path to greatness began when she was adopted by the arch-hag Baba Yaga, who named her Natasha. Tasha went on to create various spells, including Tasha's Hideous Laughter, and her magic-fueled ambitions brought her into contact with demons and demon lords, which she subjugated and used against her enemies. On the Material Plane, she became known as Iggwilv the Witch Queen and wrote the Demonomicon of Iggwilv, the greatest of all treatises on the Abyss and its demonic inhabitants. In recent years, Tasha sequestered herself in the Feywild, achieving incredible power and slowly turning into a Fey creature. Tasha became Zybilna, archfey of the domain of Prismeer.

## Answering the Summons

When Zybilna received Alustriel Silverhand's summons to combat Vecna, the archfey was sorely needed in Prismeer. As a compromise, and to honor Tasha's friendship with Alustriel, Zybilna sent a version of herself from the past to Alustriel's side. The Tasha who appears in*Vecna: Eve of Ruin*is a powerful wizard, though she is not yet a witch queen or an archfey.

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
    str: "Remove Relationship"
```
> [!div | no-t clean txt-c]
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "Tasha the Witch (VEoR)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, wizard"
"alignment": "Chaotic Neutral"
"ac": !!int "19"
"ac_class": "[robe of the archmagi](compendium/items/robe-of-the-archmagi.md)"
"hp": !!int "210"
"hit_dice": "28d8 + 84"
"stats":
- !!int "10"
- !!int "18"
- !!int "17"
- !!int "23"
- !!int "12"
- !!int "22"
"speed": "30 ft."
"saves":
  "Charisma": !!int "12"
  "Wisdom": !!int "7"
  "Intelligence": !!int "12"
"skillsaves":
  "History": !!int "12"
  "Arcana": !!int "18"
  "Persuasion": !!int "12"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [frightened](/compendium/rules/conditions.md#Frightened)"
"senses": "passive Perception 11"
"languages": "Abyssal, Celestial, Common, Draconic, Elvish, Infernal, Sylvan"
"cr": "19"
"traits":
- "desc": "Tasha casts one of the following spells, using Intelligence as the spellcasting\
    \ ability (spell save DC 22, +14 to hit with spell attacks):\n\nAt will: [Detect\
    \ Magic](compendium/spells/detect-magic.md), [Disguise Self](compendium/spells/disguise-self.md),\
    \ [Dispel Magic](compendium/spells/dispel-magic.md), [Light](compendium/spells/light.md),\
    \ [Mage Hand](compendium/spells/mage-hand.md), [Message](compendium/spells/message.md),\
    \ [Prestidigitation](compendium/spells/prestidigitation.md), [Tasha's Hideous\
    \ Laughter](compendium/spells/tashas-hideous-laughter.md)\n\n1/day each: [Maze](compendium/spells/maze.md),\
    \ [Telekinesis](compendium/spells/telekinesis.md)\n\n2/day: [Polymorph](compendium/spells/polymorph.md)"
  "name": "Spellcasting"
- "desc": "If Tasha fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Tasha has advantage on saving throws against spells and other magical effects.\
    \ (This trait is bestowed by her Robe of the Archmagi.)"
  "name": "Magic Resistance"
- "desc": "Tasha wears a [Robe of the Archmagi](compendium/items/robe-of-the-archmagi.md)."
  "name": "Special Equipment"
"actions":
- "desc": "Tasha makes two Caustic Blast attacks and uses Psychic Whip once."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: +14 to hit, reach 5 ft. or range 120 ft.,\
    \ one target. Hit: 21 (6d4 + 6) acid damage."
  "name": "Caustic Blast"
- "desc": "Tasha psychically lashes out at one creature she can see within 90 feet\
    \ of herself. The target must make a DC 20 Intelligence saving throw. On a failed\
    \ save, the target takes 21 (6d6) psychic damage and has the [stunned](/compendium/rules/conditions.md#Stunned)\
    \ condition until the start of Tasha's next turn. On a successful save, the target\
    \ takes half as much damage only."
  "name": "Psychic Whip"
"bonus_actions":
- "desc": "For 1 minute, Tasha gains a flying speed of 30 feet, is immune to poison\
    \ damage and the [poisoned](/compendium/rules/conditions.md#Poisoned) condition,\
    \ and has advantage on attack rolls against any creature that doesn't have all\
    \ its hit points. These benefits end early if Tasha has the [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
    \ condition or if she uses another bonus action to dismiss them."
  "name": "Abyssal Visage (2/Day)"
"reactions":
- "desc": "Immediately after Tasha takes damage, she unleashes arcane energy in a\
    \ 10-foot-radius sphere centered on herself. All other creatures in that area\
    \ must make a DC 20 Dexterity saving throw, taking 19 (3d12) lightning damage\
    \ on a failed save or half as much damage on a successful one. Tasha then teleports,\
    \ along with any equipment she is wearing or carrying, to an unoccupied space\
    \ she can see within 60 feet of herself."
  "name": "Arcane Rebuff"
"source":
- "VEoR"
"image": "compendium/bestiary/npc/token/tasha-the-witch-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes