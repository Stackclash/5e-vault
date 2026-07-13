---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-8
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images: []
aliases:
  - Nikolai Wachter
alignment: Lawful Neutral
description: >-
  Nikolai Wachter is one of [[Lady Fiona Wachter (COS)|Lady Fiona Wachter]]'s
  two grown sons - a brash, hard-drinking young nobleman who spends his
  nights carousing at the Blue Water Inn rather than enduring his mother's
  household. He and his brother Karl are said to be the spitting image of
  their late father, for whom Nikolai is named.
history: >-
  Raised in the gloom of Wachterhaus, Nikolai and his brother Karl grew into
  restless young men with little of their mother's ambition and none of her
  patience for the family's crumbling fortunes. They know that
  [[Lady Fiona Wachter (COS)|Fiona]] leads some kind of cult from the
  house's cellar, but not its darkest secret - that she keeps their late
  father's gentle-reposed corpse in her bed. The brothers avoid Wachterhaus
  by day, drinking and trading dares at the Blue Water Inn, and their
  recklessness has already caused real trouble in town: sneaking into
  Arasek's Stockyard on a bet, one of the brothers rocked a caged
  saber-toothed tiger's wagon and let it loose on Vallaki's streets.
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Places of Interest/Wachterhaus.md|Wachterhaus]]'
pronounced: NIK-oh-lye VAHK-ter
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 27
occupation:
  - Nobleman of House Wachter
groups:
  - House Wachter
religions: []
personality: Brash, hard-drinking, quick to boast, secretly aimless
ideal: Live for tonight's bottle and tomorrow's dare - Vallaki offers nothing else worth wanting.
bond: His brother, Karl - his only real companion in drink and mischief
flaw: >-
  His recklessness and thirst for a dare have nearly gotten him and Karl
  killed, from goading each other in the taproom to freeing a
  saber-toothed tiger on a bet
goals: To burn through his mother's coin and find some fleeting thrill to make life in cursed Vallaki bearable
likes: Wine, dares, gossip about outsiders, staying out of Wachterhaus
dislikes: His mother's lectures and her cult, sobriety, the burgomaster's festivals
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
*Source: Curse of Strahd p. 110*

Nikolai Wachter and his brother Karl are brothers of noble birth - brash drunkards always looking for trouble, though smart enough not to pick fights with well-armed strangers. Their mother, [[Lady Fiona Wachter (COS)|Fiona Wachter]], is an influential figure in town, but her sons never talk about her.

## Trouble in the Taproom

The Wachter brothers aren't home during the day, since neither cares to attend their mother or listen to her tiresome prattle. Characters are as likely to find them at the Blue Water Inn or wandering the streets of Vallaki as at Wachterhaus, where they're usually passed out after a night of heavy drinking. They'd rather hear tales of a stranger's harrowing adventures, or talk of freeing Vallaki from the burgomaster's madness, than think about home.

## No Ambition, No Secrets Kept

Nikolai and Karl have none of their mother's ambition or her mean temper. They know she's built some kind of cult, but not that she sleeps beside their dead father's preserved corpse - news that would turn them against her instantly if they learned it. Mostly, they want only to spend their mother's money and make the best of a miserable life, trapped as they are within Vallaki's walls under Strahd's shadow and the burgomaster's rule.

## The Loosed Tiger

On a dare, Nikolai or Karl once snuck into Arasek's Stockyard and rocked the wagon holding [[Rictavio (COS)|Rictavio]]'s captive saber-toothed tiger, letting the enraged beast smash free and prowl the streets of Vallaki. When questioned afterward, the brothers swore they'd been at the festival the whole time.

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
"name": "Nikolai Wachter (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"ac_class": "[[/5. Mechanics/Items/Breastplate.md|breastplate]]"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "11"
  - !!int "12"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+5"
"gear":
  - "[[/5. Mechanics/Items/Rapier.md|rapier]]"
"senses": "passive Perception 12"
"languages": "any two languages"
"cr": "1/8"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 5 (1d8\
      \ + 1) piercing damage."
    "name": "Rapier"
"reactions":
  - "desc": "Nikolai adds 2 to its AC against one melee attack that would hit it.\
      \ To do so, Nikolai must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/nikolai-wachter-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
