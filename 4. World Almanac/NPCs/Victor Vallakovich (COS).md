---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\005-cos02-02.webp
aliases:
  - Victor Vallakovich
alignment: Neutral Evil
description: >-
  A thin, awkward young man with a premature streak of gray in his dark
  hair, Victor has abandoned his family in favor of a spellbook he found in
  his father's library. He wants nothing more than to vanish through a
  doorway of his own making and never see Barovia again.
history: >-
  Years ago Victor found an old spellbook hidden in the mansion's library
  and began teaching himself magic in secret, eventually retreating to the
  mansion's attic to avoid his mother's fussing and his father's
  disapproving glares. His mother's rival, [[Lady Fiona Wachter (COS)|Lady
  Fiona Wachter]], once tried to marry her daughter [[Stella Wachter
  (COS)|Stella Wachter]] to him to gain a foothold in the burgomaster's
  household, but Victor showed no interest in Stella and spoke to her so
  cruelly that she lost her mind. He has since thrown himself entirely into
  deciphering his spellbook's most advanced text: an incomplete
  teleportation circle spell. He has already inscribed a flawed version of
  the circle on his workroom floor and tested it twice on servants he
  compelled with suggestion - both were torn apart and vanished in flashes
  of purple light. Undeterred, Victor keeps refining the circle, certain
  that escape from Barovia is only one working spell away.
relationships: []
partyRelationships:
  Midnight Covenant: Ally
location: '[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]'
pronounced: VIK-tor val-lah-KO-vich
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 25
occupation:
  - Self-taught wizard
groups:
  - House Vallakovich
religions: []
personality: Awkward, reclusive, morbidly curious, alternates between sulking and cruelty
ideal: There has to be a way out of this cursed valley, and he will find it, whatever the cost.
bond: His flawed, half-built teleportation circle - his only hope of escaping Barovia forever
flaw: >-
  His reckless magical experiments have already gotten two servants killed,
  and it hasn't given him a moment's pause
goals: To perfect his teleportation circle and escape Barovia forever, abandoning his parents to their fate
likes: Solitude, old spellbooks, dissecting the mechanics of magic, being left alone
dislikes: His mother's relentless cheer, his father's disapproval, Stella Wachter, being disturbed while working
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
*Source: Curse of Strahd p. 105*

Victor Vallakovich is the burgomaster's strange, reclusive son - a self-taught mage who has all but vanished from his own family in favor of a spellbook, a locked attic workroom, and a desperate plan to escape Barovia forever.

## A Secret Education

Years ago, Victor found an old spellbook in his father's library and began teaching himself the art of spellcasting, hiding his growing talent from his parents. His bedroom betrays none of it - it's stocked only with innocuous books of fables and heraldry - but he now spends nearly all his time in a workroom hidden in the mansion's attic, its door carved with a warning skull and warded with a glyph of warding. There he practices minor necromancy on animated cat skeletons and keeps painted wooden dolls dressed in his childhood clothes, which he pretends are disobedient pupils.

## A Cruel Betrothal

[[Lady Fiona Wachter (COS)|Lady Fiona Wachter]] once conspired to marry her daughter, [[Stella Wachter (COS)|Stella Wachter]], to Victor as a way to gain a foothold inside the burgomaster's mansion. Victor showed no interest in Stella whatsoever, and spoke to her with such cruelty that she lost her mind - a fact Fiona has never forgiven, even as she keeps the scheme's failure quiet.

## The Flawed Circle

Victor's spellbook contains an incomplete teleportation circle spell, along with the sigil sequences of three permanent circles elsewhere whose locations aren't recorded. He has inscribed his own flawed version of the circle on his workroom floor, hidden beneath a rug, and has already tested it twice - each time compelling a reluctant servant with suggestion to stand on it, only to watch them torn apart and vanish in a flash of purple light. He doesn't yet know how to fix the circle, but he has no intention of stopping until it works, certain that it's his only way out of Barovia.

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
"name": "Victor Vallakovich (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
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
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "6"
"traits":
  - "desc": "Victor is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 14, +6 to hit with spell attacks). Victor has the following\
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
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/victor-vallakovich-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
