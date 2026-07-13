---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/humanoid/dusk-elf
condition: healthy
images:
  - 4. World Almanac\NPCs\img\kasimir-velikov.webp
aliases:
  - Kasimir Velikov
alignment: Neutral
relationships: []
partyRelationships: {}
location: null
pronounced: 'KAH-sih-meer VEL-ih-kov'
race: Dusk Elf
gender: male
age: 340
occupation:
  - Hermit scholar
  - Amber Temple watcher
groups:
  - Vistani (adopted)
  - Dusk elves (last of)
religions: []
personality: >-
  Grief-stricken, guarded, and quietly vengeful — a scholar-turned-spy
  consumed by regret.
ideal: I failed my people and my sister, and now I must atone or be damned.
bond: >-
  I seek to return my long-dead sister, Patrina, to life — even at the cost
  of my own life.
flaw: I believe my sister can be redeemed.
goals: >-
  To uncover the Amber Temple's secrets and find a way to restore his sister
  Patrina to flesh and blood.
likes: 'Old lore, solitude, the old Vistani ways'
dislikes: 'The modern Vistani leadership, Strahd, reminders of his mutilation'
description: >-
  A mutilated, grief-stricken dusk elf who conceals his ear-shorn head
  beneath a cowl, centuries of guilt etched into his bearing.
history: >-
  Kasimir's people, the dusk elves, were nearly annihilated by Strahd's
  armies and surrendered what remained of themselves into Vistani care. He
  took the name of the Vistana who welcomed his clan and has lived among
  their descendants ever since, though he thinks them fallen from the nobler
  ways of the past. His sister, Patrina Velikovna, went to Castle Ravenloft
  believing herself Strahd's rightful consort; when it became clear Strahd
  would never love her, her own people — Kasimir among them — stoned her to
  death to keep her from Strahd's bed. Strahd took his fury out on the dusk
  elves in turn, butchering their women and cutting off Kasimir's ears as
  punishment for inciting the killing. Now Patrina speaks to him in dreams
  from her tomb in the catacombs of Ravenloft, insisting death has cleansed
  her — and Kasimir, unaware she means to use him, believes the Amber Temple
  holds the secret to restoring her to life and ending his own guilt.
---
> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
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
> **Party Relationship** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` |

# **`=this.file.name`**
*Source: Curse of Strahd p. 233*

Kasimir, a mutilated and grief-stricken dusk elf, has been trapped in Barovia for centuries. His people were on the verge of being annihilated by Strahd's armies when they surrendered. Strahd left the few survivors to the mercy of the Vistani, who bore them to the valley of Barovia, where they have lived ever since.

## Old Friends

Kasimir's allegiance to the Vistani is so strong that he adopted the name of the Vistana who welcomed him into his clan, a man named Velikov. Although Velikov passed away more than a century ago, Kasimir continues to live among Velikov's descendants. Unfortunately, in his view, these modern Vistani are neither as noble nor as enlightened as their forebears. Not one to press the issue, Kasimir hopes to outlive the present leadership and see a return to the old ways.

## Dreams of the Damned

Kasimir's sister, [[Patrina Velikovna (COS)|Patrina Velikovna]], is sealed in the catacombs below Castle Ravenloft. Convinced that she was the concubine of the devil Strahd, Kasimir and his fellow dusk elves stoned Patrina to death. As punishment for depriving him of his bride, Strahd butchered all the women in the dusk elf tribe, and Kasimir's ears were cut off to punish him for instigating the stoning. He wears a cowl to conceal his mutilation.

Kasimir's feeling of loss is tinged with simmering rage. Patrina now speaks to her brother in dreams, telling him how years of guilt and regret have dispelled all evil thoughts from her mind and cleansed her tortured soul. But Kasimir remains unconvinced by her assertions, because he knows that Strahd has corrupted Patrina and led her down a path of evil and deceit. For that reason, Kasimir wants to see the vampire destroyed so that his sister can be rescued from her eternal damnation.

## Secrets of the Amber Temple

Patrina has told Kasimir that the Amber Temple, an ancient vault hidden in the Barovian mountains, is where Strahd forged his pact with evil powers and discovered how to become a vampire. Kasimir has been spying on the temple for years, but he needs adventurers to help him survive its perils. He thinks that the secret to breaking Strahd's pact and freeing Barovia from its curse might be hidden there, but more important, he believes that the Amber Temple holds the secret to bringing the ancient dead back to life.

With the characters' help, Kasimir thinks he might be able to find out how to restore Patrina to flesh and blood, whereupon he can travel to Castle Ravenloft and end his sister's torment. Kasimir has no inkling that Patrina is using him for exactly that purpose, and that her ultimate goal is to become as powerful a vampire as Strahd.

## Kasimir Velikov's Traits

### Ideal

"I failed my people and my sister, and now I must atone or be damned."

### Bond

"I seek to return my long-dead sister, Patrina, to life—even at the cost of my own life."

### Flaw

"I believe my sister can be redeemed."

> [!column|no-t flex]
>> [!metadata|text-Center] Description
>> `INPUT[textArea:description]`
>
>> [!metadata|text-Center] History
>> `INPUT[textArea:history]`

## Traits/Goals
> [!column|no-t flex]
>> [!metadata|text-Center bg-c-yellow] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-pink] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-brown] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-orange] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`
>
>> [!metadata|text-Center] Goals
>> `INPUT[textArea:goals]`

## Player-Facing
> [!metadata|text-Center] What the Party Knows
> `INPUT[textArea:player_impression]`

## Secrets
`INPUT[textArea:secrets]`

## Relationships
`BUTTON[add-relationship,remove-relationship]`
```meta-bind-button
style: primary
label: Add Relationship
id: add-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Add Relationship.md"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Remove Relationship.md"
```
> [!div | no-t clean txt-c]
> `$=await dv.view("views/npcRelationships", { current: dv.current() })`

## Quests
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const quests = dc.useQuery(`@page and #quest and connected(${currentPage.$link})`)
  const columns = [
    {
      id: 'Quest',
      value: (row) => row.$link
    },
    {
      id: 'Description',
      value: (row) => row.$frontmatter.description.raw || ''
    },
    {
      id: 'Involvement',
      value: (row) => row.$frontmatter.npcs.raw.find(n => n.name.includes(currentPage.$name)).description || ''
    }
  ]
  
  return <dc.Table rows={quests} columns={columns}/>
}
```

## Stats
```statblock
"name": "Kasimir Velikov (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "Dusk elf"
"alignment": "Neutral"
"ac": !!int "12"
"ac_class": "15 with [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "40"
"hit_dice": "9d8"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "11"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "6"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+6"
"gear":
  - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 11"
"languages": "any four languages"
"cr": "6"
"traits":
  - "desc": "Kasimir is a 9th-level spellcaster. His spellcasting ability is Intelligence\
      \ (spell save DC 14, +6 to hit with spell attacks). Kasimir has the following\
      \ wizard spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
      \ [[/5. Mechanics/Spells/Light.md|light]], [[/5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\n**1st level\
      \ (4 slots):** [[/5. Mechanics/Spells/Detect Magic.md|detect magic]], [[/5. Mechanics/Spells/Mage Armor.md|mage armor]],\
      \ [[/5. Mechanics/Spells/Magic Missile.md|magic missile]], [[/5. Mechanics/Spells/Shield.md|shield]]\n\
      \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Misty Step.md|misty step]], [[/5. Mechanics/Spells/Suggestion.md|suggestion]]\n\
      \n**3rd level (3 slots):** [[/5. Mechanics/Spells/Counterspell.md|counterspell]],\
      \ [[/5. Mechanics/Spells/Fireball.md|fireball]], [[/5. Mechanics/Spells/Fly.md|fly]]\n\
      \n**4th level (3 slots):** [[/5. Mechanics/Spells/Greater Invisibility.md|greater invisibility]],\
      \ [[/5. Mechanics/Spells/Ice Storm.md|ice storm]]\n\n**5th level (1 slots):** [[/5. Mechanics/Spells/Cone Of Cold.md|cone\
      \ of cold]]"
    "name": "Spellcasting"
  - "desc": "Kasimir has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ and magic can't put him to sleep."
    "name": "Fey Ancestry"
  - "desc": "Kasimir wears a [[/5. Mechanics/Items/Ring Of Warmth.md|ring of warmth]]\
      \ and carries a spellbook containing all the spells he has prepared plus the\
      \ following spells: [[/5. Mechanics/Spells/Arcane Lock.md|arcane lock]], [[/5. Mechanics/Spells/Comprehend Languages.md|comprehend\
      \ languages]], [[/5. Mechanics/Spells/Hold Person.md|hold person]],\
      \ [[/5. Mechanics/Spells/Identify.md|identify]], [[/5. Mechanics/Spells/Locate Object.md|locate object]],\
      \ [[/5. Mechanics/Spells/Nondetection.md|nondetection]], [[/5. Mechanics/Spells/Polymorph.md|polymorph]],\
      \ [[/5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]],\
      \ and [[/5. Mechanics/Spells/Wall Of Stone.md|wall of stone]]."
    "name": "Special Equipment"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/kasimir-velikov-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
