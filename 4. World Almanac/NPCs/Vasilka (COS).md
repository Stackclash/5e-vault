---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/5
  - monster/size/medium
  - monster/type/construct
condition: healthy
images: []
aliases:
  - Vasilka
alignment: Neutral
description: >-
  A young woman with alabaster skin and neatly bundled auburn hair,
  dressed in a torn and soiled red gown — beautiful until one draws
  close enough to see the seams where stolen body parts have been
  carefully stitched together beneath her powdered skin.
history: >-
  Vasilka is a flesh golem, painstakingly assembled by [[The Abbot
  (COS)|the Abbot]] of the Abbey of Saint Markovia from body parts
  plundered from graves in Krezk, and crafted to serve as a bride worthy
  of Strahd von Zarovich. She cannot speak, has no memories or will of
  her own, and obeys the Abbot's every command; he is currently teaching
  her etiquette and dance in preparation for presenting her to the
  vampire.
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Places of Interest/Abbey of Saint Markovia.md|Abbey of Saint Markovia]]'
pronounced: vah-SIL-kah
race: Flesh Golem (Construct)
gender: female
age: null
occupation:
  - Bride-to-be of Strahd (construct)
groups:
  - Abbey of Saint Markovia
religions: []
personality: 'Silent, obedient, hauntingly vacant — seems lost in her own thoughts'
ideal: Obedience to her creator's commands, absolute and unquestioning.
bond: The Abbot, her creator and only guide in the world.
flaw: >-
  She has no will of her own; if driven berserk by harm, she cannot stop
  attacking until the Abbot calms her or she is destroyed.
goals: >-
  To become a proper bride worthy of presenting to Strahd, exactly as
  the Abbot has designed her to be.
likes: "Order, calm, the Abbot's gentle instruction"
dislikes: "Being harmed or threatened, chaos, fire — flame leaves her disoriented and weak"
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
*Source: Curse of Strahd p. 151*

Vasilka is not a person but a masterwork of horror: a flesh golem stitched together by [[The Abbot (COS)|the Abbot]] from the bodies of the recently dead, built feature by feature to be the perfect bride for Strahd von Zarovich.

## The Abbot's Masterpiece

Dressed in a soiled red gown and taught to sit primly at the abbey's dinner table, Vasilka mimics a living woman convincingly at a distance — until anyone draws close enough to see the seams in her powdered skin. She cannot speak, offers no resistance, and obeys the Abbot's every instruction without question, currently being schooled in etiquette and dance for her eventual presentation to Strahd.

## No Will of Her Own

Vasilka has no memories, no voice beyond an unholy scream when harmed, and no goals beyond what the Abbot gives her. If pushed into a berserk rage, she will not stop attacking until the Abbot calms her or she is destroyed — a fact he guards carefully, since he has no wish to lose his life's great work before it is finished.

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
"name": "Vasilka (COS)"
"size": "Medium"
"type": "construct"
"alignment": "Neutral"
"ac": !!int "9"
"hp": !!int "93"
"hit_dice": "11d8 + 44"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "9"
  - !!int "18"
  - !!int "6"
  - !!int "10"
  - !!int "5"
"speed": "30 ft."
"damage_immunities": "lightning; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "5"
"traits":
  - "desc": "Whenever Vasilka starts its turn with 40 hit points or fewer, roll a\
      \ d6. On a 6, Vasilka goes berserk. On each of its turns while berserk, Vasilka\
      \ attacks the nearest creature it can see. If no creature is near enough to\
      \ move to and attack, Vasilka attacks an object, with preference for an object\
      \ smaller than itself. Once Vasilka goes berserk, it continues to do so until\
      \ it is destroyed or regains all its hit points.\n\nVasilka's creator, if within\
      \ 60 feet of the berserk golem, can try to calm it by speaking firmly and persuasively.\
      \ Vasilka must be able to hear its creator, who must take an action to make\
      \ a DC 15 Charisma ([[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]) check.\
      \ If the check succeeds, Vasilka ceases being berserk. If it takes damage while\
      \ still at 40 hit points or fewer, Vasilka might go berserk again."
    "name": "Berserk"
  - "desc": "If Vasilka takes fire damage, it has disadvantage on attack rolls and\
      \ ability checks until the end of its next turn."
    "name": "Aversion of Fire"
  - "desc": "Vasilka is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "Whenever Vasilka is subjected to lightning damage, it takes no damage\
      \ and instead regains a number of hit points equal to the lightning damage dealt."
    "name": "Lightning Absorption"
  - "desc": "Vasilka has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Vasilka's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "Vasilka makes two slam attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) bludgeoning damage."
    "name": "Slam"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/vasilka-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
