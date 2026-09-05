---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/3
  - monster/size/medium
  - monster/type/humanoid/human
  - monster/type/humanoid/shapechanger
condition: healthy
images:
  - 4. World Almanac\NPCs\img\zuleika-toranescu.webp
aliases:
  - Zuleika Toranescu
alignment: Chaotic Evil
description: >-
  A werewolf in shredded clothes who kneels for hours before the pack's crude
  idol of Mother Night, praying in a low, unbroken murmur. Grief has hollowed
  her, but there's a coiled violence beneath the mourning.
history: >-
  Zuleika is Emil Toranescu's mate. When Strahd's dire wolves dragged Emil away
  to Castle Ravenloft, Kiril Stoyanovich forbade her from hunting and set her to
  guard the pack's kidnapped children at the Shrine of Mother Night instead — a
  punishment disguised as duty. Believing Emil dead by Strahd's hand, she prays
  daily to Mother Night for a sign that the goddess might sway Strahd into
  releasing him. She lacks the strength or allies to move against Kiril alone,
  and the rest of the pack — having watched what happened to Emil — won't risk
  Strahd's wrath by helping her.
relationships: []
partyRelationships: {}
location: null
pronounced: zoo-LAY-kah tor-uh-NES-koo
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 26
occupation:
  - Keeper of the Shrine of Mother Night
  - Guard of the kidnapped children
groups:
  - Children of Mother Night
religions:
  - Mother Night
personality: 'Devout and grief-stricken, with a quiet, patient rage simmering underneath'
ideal: >-
  Mother Night sees every wrong done to the faithful and will grant them justice
  in time.
bond: I would burn all of Barovia to have Emil returned to me.
flaw: >-
  My grief has made me patient to the point of paralysis — I wait for others to
  act rather than act myself.
goals: >-
  See Kiril Stoyanovich dead and Emil returned to her, whatever the cost to
  herself.
likes: 'Mother Night''s shrine, quiet devotion, the memory of Emil'
dislikes: 'Kiril Stoyanovich, cowardice, empty prayers'
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
*Source: Curse of Strahd p. 204*

TBD

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
"name": "Zuleika Toranescu (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"ac_class": "12 natural armor in wolf or hybrid form"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "13"
  - !!int "14"
  - !!int "10"
  - !!int "11"
  - !!int "10"
"speed": "30 ft. (40 ft. in wolf form)"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+3"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"gear":
  - "[[/5. Mechanics/Items/Spear.md|spear]]"
"senses": "passive Perception 14"
"languages": "Common (can't speak in wolf form)"
"cr": "3"
"traits":
  - "desc": "Zuleika can use its action to polymorph into a wolf-humanoid hybrid or\
      \ into a wolf, or back into its true form, which is humanoid. Its statistics,\
      \ other than its AC, are the same in each form. Any equipment it is wearing\
      \ or carrying isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "Zuleika has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
"actions":
  - "desc": "Zuleika makes two attacks: two with its spear (humanoid form) or one\
      \ with its bite and one with its claws (hybrid form)."
    "name": "Multiattack (Humanoid or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 6 (1d8\
      \ + 2) piercing damage. If the target is a humanoid, it must succeed on a DC\
      \ 12 Constitution saving throw or be cursed with werewolf [[/5. Mechanics/Rules/Variant Rules/Player Characters As Lycanthropes (MM).md|lycanthropy]]."
    "name": "Bite (Wolf or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one creature. *Hit:* 7\
      \ (2d4 + 2) slashing damage."
    "name": "Claws (Hybrid Form Only)"
  - "desc": "*Melee  or Ranged Weapon Attack:* +4 to hit, reach 5 ft. or range 20/60\
      \ ft., one creature. *Hit:* 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing\
      \ damage if used with two hands to make a melee attack."
    "name": "Spear (Humanoid Form Only)"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/zuleika-toranescu-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
