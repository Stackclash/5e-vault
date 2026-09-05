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
condition: dead
images:
  - 4. World Almanac\NPCs\img\kiril-stoyanovich.webp
aliases:
  - Kiril Stoyanovich
alignment: Chaotic Evil
description: >-
  A broad-shouldered, grey-muzzled werewolf who rules through fear rather than
  charisma — scarred, humorless, and utterly certain that cruelty is what keeps
  his pack alive. In human form he carries himself like a warlord; in wolf and
  hybrid form his fur is shot through with streaks of white.
history: >-
  Kiril has led the Children of Mother Night for years, arming kidnapped
  children with spears and forcing them to fight to the death in the pack's
  stone ring so that only the "strongest" survivor is turned into a werewolf.
  When Emil Toranescu challenged that practice and split the pack's loyalties,
  Kiril vanished for several days. He returned with a pack of dire wolves loyal
  to Strahd von Zarovich and word that the vampire disapproved of any fracture
  in his werewolf servants. The dire wolves dragged Emil away to Castle
  Ravenloft, and Kiril reasserted his dominance — ruling now through fear of
  Strahd's wrath as much as his own.
relationships: []
partyRelationships:
  Midnight Covenant: Enemy
location: null
pronounced: KEER-il stoy-uh-NO-vich
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 47
occupation:
  - Pack leader
  - Strahd's enforcer among the werewolves
groups:
  - Children of Mother Night
religions:
  - Mother Night
personality: 'Domineering, ruthless, and quick to violence when his authority is questioned'
ideal: >-
  Strength and purity ensure the pack's survival — only the strongest deserve to
  lead or belong.
bond: >-
  The dire wolves Strahd lent him are proof that Mother Night's chosen cannot be
  unseated.
flaw: >-
  His cruelty toward the pack's children is breeding quiet enemies he refuses to
  see.
goals: >-
  Keep unquestioned control of the pack, and stay useful enough to Strahd that
  the dire wolves back him again if he's ever challenged.
likes: 'Fear, deference, the hunt, Strahd''s favor'
dislikes: 'Dissent, weakness, being made to look foolish in front of the pack'
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
*Source: Curse of Strahd p. 203*

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
"name": "Kiril Stoyanovich (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"ac_class": "12 natural armor in wolf or hybrid form"
"hp": !!int "90"
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
  - "desc": "Kiril can use its action to polymorph into a wolf-humanoid hybrid or\
      \ into a wolf, or back into its true form, which is humanoid. Its statistics,\
      \ other than its AC, are the same in each form. Any equipment it is wearing\
      \ or carrying isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "Kiril has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
"actions":
  - "desc": "Kiril makes two attacks: two with its spear (humanoid form) or one with\
      \ its bite and one with its claws (hybrid form)."
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
"image": "/4. World Almanac/NPCs/token/kiril-stoyanovich-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
