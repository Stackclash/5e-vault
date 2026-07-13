---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/3
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\ismark-kolyanovich.webp
aliases:
  - Ismark Kolyanovich
alignment: Lawful Good
description: >-
  Ismark Kolyanovich is a young, sharp-eyed swordsman known throughout
  Barovia as "Ismark the Lesser," having spent most of his life in the
  shadow of his father, the burgomaster. He carries himself with practiced
  ease in the tavern, but a fierce protectiveness surfaces the moment his
  sister or Strahd come up in conversation.
relationships: []
partyRelationships:
  Midnight Covenant: Ally
location: '[[4. World Almanac/Settlements/Village of Barovia.md|Village of Barovia]]'
pronounced: IS-mark KOHL-yan-o-vich
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 25
occupation:
  - Burgomaster
groups: []
religions: []
personality: 'Protective, responsible, deeply concerned for his sister''s safety'
ideal: 'Duty above all, especially to family and those under my care.'
bond: His late father's legacy and his sister's safety
flaw: Can be overly cautious and sometimes distrustful of strangers
goals: 'To secure a safe place for Ireena, away from Strahd’s reach'
likes: 'Quiet moments of peace, strong leadership, loyalty'
dislikes: 'Threats to his family, Strahd''s minions, chaos'
history: >-
  The son of Kolyan Indirovich, the village's burgomaster, Ismark has
  spent years training with sword and crossbow, nursing a private
  ambition to one day confront and kill Strahd himself. He is far less
  dour than most Barovians, willing to buy strangers a drink and speak
  plainly about the horrors stalking his home — at least on the subject
  of his adopted sister [[Ireena Kolyana (COS)|Ireena]] and the vampire
  who covets her. With his father's death, Ismark has taken on the burden
  of protecting Ireena himself, and he means to see her escorted to
  safety in Vallaki, even though moving her outside the mansion's wards
  leaves her exposed to Strahd. If offered aid, he does everything in his
  power to see his sister safely away — and, if the chance arises, to
  stand against Strahd at the party's side.
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
*Source: Curse of Strahd p. 43*

Ismark Kolyanovich is a young, sharp-eyed swordsman known throughout Barovia as "Ismark the Lesser," having spent most of his life in the shadow of his father, the burgomaster. He carries himself with practiced ease in the tavern, but a fierce protectiveness surfaces the moment his sister or Strahd come up in conversation.

## Ismark the Lesser

Found most nights nursing a glass of wine alone at a corner table in the Blood of the Vine tavern, Ismark isn't a typically dour Barovian — he'll invite strangers to join him and offer to pay for their wine. He is as tight-lipped as any other villager unless the talk turns to his sister or to Strahd, on which subjects he knows everything the rest of the village knows: chiefly that, for some unknown reason, Strahd is attracted to Ireena and desires her above all others.

## A Brother's Vow

Ismark has spent most of his adult life training with weapons in the hope of one day confronting and killing Strahd. He asks any capable strangers he meets for aid protecting his adopted sister, [[Ireena Kolyana (COS)|Ireena Kolyana]], and wants to see her escorted to Vallaki, beyond the sight — and he hopes, the reach — of Castle Ravenloft. He knows moving her is a gamble, since she's vulnerable to Strahd outside the mansion's wards, but he's heard that Vallaki is well-defended. If the party agrees to help, he takes them to the burgomaster's residence to meet her. Should the party ask him to come along, he agrees, provided Ireena is taken somewhere safe first.

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
"name": "Ismark Kolyanovich (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "17"
"ac_class": "[[/5. Mechanics/Items/Splint Armor.md|splint armor]]"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "14"
  - !!int "10"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
"gear":
  - "[[/5. Mechanics/Items/Heavy Crossbow.md|heavy crossbow]]"
  - "[[/5. Mechanics/Items/Longsword.md|longsword]]"
  - "[[/5. Mechanics/Items/Shortsword.md|shortsword]]"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "3"
"actions":
  - "desc": "Ismark makes two longsword attacks. If it has a shortsword drawn, it\
      \ can also make a shortsword attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7 (1d8\
      \ + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
    "name": "Longsword"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6\
      \ + 3) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 100/400 ft., one target. *Hit:*\
      \ 6 (1d10 + 1) piercing damage."
    "name": "Heavy Crossbow"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/ismark-kolyanovich-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
