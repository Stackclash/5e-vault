---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/12
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images: []
aliases:
  - The Mad Mage of Mount Baratok
alignment: Chaotic Neutral
description: >-
  A wild-eyed man in tattered black robes, his hair and beard long, dark,
  and streaked with gray, power crackling visibly behind his eyes — as
  likely to appear first in the shape of an elk as a man.
history: >-
  Beneath the madness is Mordenkainen, an archmage of Oerth and leader of
  the Circle of Eight, who came to Barovia more than a year ago hoping to
  free its people from Strahd's tyranny. He underestimated the vampire's
  hold over the land, and their battle at Castle Ravenloft ended with
  Mordenkainen thrown from a precipice into Tser Falls, his staff and
  spellbook lost. He survived the fall and retreated into the mountains
  around Mount Baratok, where the shock of his defeat broke his mind. He
  has since cast mind blank on himself, a spell that — while active —
  prevents any magic from restoring his sanity or his memory of who he
  truly is.
relationships: []
partyRelationships: {}
location: null
pronounced: BAR-uh-tok
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 300
occupation:
  - Archmage
  - Circle of Eight (former leader)
groups:
  - Circle of Eight
religions: []
personality: >-
  While mad: paranoid and violent, convinced enemies are hunting him
  everywhere. Once restored: stubborn, taciturn, and utterly certain of
  his own authority.
ideal: Power exists to end tyranny, whatever the cost to the one who wields it.
bond: >-
  The Circle of Eight, his fellow archmages on Oerth, from whom his
  madness and this land have cut him off.
flaw: His overconfidence led him to challenge Strahd directly in single combat — and lose catastrophically.
goals: >-
  To recover his stolen staff and spellbook, shed his madness, and find
  a way to defeat Strahd and go home.
likes: 'Solitude, the company of true equals, forbidden lore'
dislikes: 'Being underestimated, fools, Strahd von Zarovich'
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
*Source: Curse of Strahd p. 39*

Encountered wandering the base of Mount Baratok — sometimes as an elk, sometimes as a wild-eyed man in tattered black robes — the Mad Mage is a broken remnant of one of the multiverse's great archmages, driven to raving paranoia by a single catastrophic defeat.

## A Fallen Archmage

Beneath the madness is Mordenkainen, an archmage of Oerth and leader of the Circle of Eight, who came to Barovia to free its people from Strahd's tyranny and grievously underestimated what he was up against. Their battle at Castle Ravenloft ended with Mordenkainen hurled from a precipice into Tser Falls, his staff and spellbook lost to the river below. He survived, but the shock and humiliation of his defeat shattered his mind — and in a moment of paranoid clarity, he cast mind blank on himself, a spell that now actively blocks any attempt to restore his sanity.

## Mordenkainen's Mansion

If freed from his madness, the archmage reveals an extradimensional mansion hidden on the mountainside, created with Mordenkainen's magnificent mansion, where he offers food and safe rest to anyone who helped him. He is unfailingly polite to genuine allies and utterly unwilling to suffer fools — and once his wits return, he sets out alone to recover his staff and spellbook, wanting no help that might tempt anyone toward theft.

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
"name": "The Mad Mage Of Mount Baratok (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"ac_class": "15 with [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "20"
  - !!int "15"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "9"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+13"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+13"
"damage_resistances": "damage from spells; nonmagical bludgeoning, piercing, slashing\
  \ (from stoneskin)"
"gear":
  - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
"senses": "passive Perception 12"
"languages": "any six languages"
"cr": "12"
"traits":
  - "desc": "The mad mage is an 18th-level spellcaster. His spellcasting ability is\
      \ Intelligence (spell save DC 17, +9 to hit with spell attacks). He can cast\
      \ [[/5. Mechanics/Spells/Disguise Self.md|disguise self]] and [[/5. Mechanics/Spells/Invisibility.md|invisibility]]\
      \ at will and has the following wizard spells prepared:\n\n**Cantrips (at will):**\
      \ [[/5. Mechanics/Spells/Fire Bolt.md|fire bolt]], [[/5. Mechanics/Spells/Light.md|light]],\
      \ [[/5. Mechanics/Spells/Mage Hand.md|mage hand]], [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]],\
      \ [[/5. Mechanics/Spells/Shocking Grasp.md|shocking grasp]]\n\n**1st level (4 slots):**\
      \ [[/5. Mechanics/Spells/Detect Magic.md|detect magic]], [[/5. Mechanics/Spells/Mage Armor.md|mage armor]],\
      \ [[/5. Mechanics/Spells/Magic Missile.md|magic missile]], [[/5. Mechanics/Spells/Shield.md|shield]]\n\
      \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Mirror Image.md|mirror image]],\
      \ [[/5. Mechanics/Spells/Misty Step.md|misty step]], [[/5. Mechanics/Spells/Web.md|web]]\n\
      \n**3rd level (3 slots):** [[/5. Mechanics/Spells/Counterspell.md|counterspell]],\
      \ [[/5. Mechanics/Spells/Fly.md|fly]], [[/5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]\n\
      \n**4th level (3 slots):** [[/5. Mechanics/Spells/Mordenkainens Faithful Hound.md|Mordenkainen's faithful hound]],\
      \ [[/5. Mechanics/Spells/Polymorph.md|polymorph]], [[/5. Mechanics/Spells/Stoneskin.md|stoneskin]]\n\
      \n**5th level (3 slots):** [[/5. Mechanics/Spells/Bigbys Hand.md|Bigby's hand]],\
      \ [[/5. Mechanics/Spells/Cone Of Cold.md|cone of cold]], [[/5. Mechanics/Spells/Scrying.md|scrying]]\n\
      \n**6th level (1 slots):** [[/5. Mechanics/Spells/True Seeing.md|true seeing]]\n\
      \n**7th level (1 slots):** [[/5. Mechanics/Spells/Mordenkainens Magnificent Mansion.md|Mordenkainen's magnificent mansion]]\n\
      \n**8th level (1 slots):** [[/5. Mechanics/Spells/Mind Blank.md|mind blank]]\n\n\
      **9th level (1 slots):** [[/5. Mechanics/Spells/Time Stop.md|time stop]]"
    "name": "Spellcasting"
  - "desc": "The Mad Mage has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/the-mad-mage-of-mount-baratok-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
