---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-4
  - monster/size/medium
  - monster/type/humanoid/mongrelfolk
condition: healthy
images:
  - 4. World Almanac\NPCs\img\zygfrek-belview.webp
aliases:
  - Zygfrek Belview
alignment: Any alignment
description: >-
  Zygfrek stands 4 feet, 7 inches tall. Lizard scales cover the left side
  of her face and body, tufts of gray wolf fur the right, with pale human
  skin showing between. One eye is feline, and her hands resemble a
  cat's paws with opposable thumbs. She has a gruff voice and wears a
  gray cloak with black fur trim.
history: >-
  Zygfrek is one of the Belview family, transformed generations ago by
  [[The Abbot (COS)|the Abbot]] at the family's own desperate request for
  bestial "perfection." Alongside her partner [[Otto Belview (COS)|Otto
  Belview]], she guards the abbey's north gate by day and digs up fresh
  graves in Krezk by night, resenting every imagined slight along the
  way.
relationships: []
partyRelationships: {}
location: >-
  [[4. World Almanac/Places of Interest/Abbey of Saint Markovia.md|Abbey of
  Saint Markovia]]
pronounced: ZIG-freck BEL-view
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 46
occupation:
  - Gate guard
  - Gravedigger
groups:
  - Belview family
religions:
  - The Morninglord
personality: 'Gruff, defensive, quietly resentful'
ideal: "I don't like the way people judge me all the time."
bond: >-
  Her partner in guarding and grave-robbing, [[Otto Belview (COS)|Otto
  Belview]], is the closest thing she has to someone who doesn't flinch
  from her.
flaw: She lashes out at the first hint of mockery, real or imagined.
goals: To be left alone to do her work without anyone's judgment
likes: Darkness, her fur-trimmed cloak, solitude
dislikes: Stares, whispers, being laughed at
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
*Source: Curse of Strahd p. 148*

Zygfrek Belview shares gate duty — and grave-robbing duty — with [[Otto Belview (COS)|Otto Belview]] at the Abbey of Saint Markovia.

## The Belview Family

The Belviews came to the abbey generations ago, a family of sickly, inbred lepers begging for salvation. [[The Abbot (COS)|The Abbot]] — a deva in disguise — cured their leprosy, but no magic could mend the deeper imperfections bred into their bloodline, and his failure to perfect them became an obsession. The Belviews, though, never wanted to be ordinary: they begged him for the eyes of a cat, the wings of a bat, the strength of a mule, the guile of a snake. A traveling lord named Vasili von Holtz — secretly [[Strahd Von Zarovich (COS)|Strahd von Zarovich]] himself — supplied the Abbot with forbidden lore looted from the Amber Temple to finish what pity had started. The transformation left the family mad, mongrel, and strangely content. Most of them have lived — and been confined — as the abbey's mongrelfolk ever since.

## Not So Good at Guarding

Zygfrek and Otto are loyal servants of [[The Abbot (COS)|the Abbot]], though neither is much of a guard — both are as likely to be asleep under a pile of musty furs as awake at their post. By night, the pair cover themselves in nets of twigs and pine needles and creep down into Krezk to rob fresh graves for the Abbot's experiments. Zygfrek's madness runs to quiet resentment: she is certain that everyone around her is judging her, and she meets the smallest slight — real or imagined — with a gruff, defensive snarl.

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
"name": "Zygfrek Belview (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "mongrelfolk"
"alignment": "Lawful Evil"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"modifier": !!int "-1"
"stats":
  - !!int "12"
  - !!int "9"
  - !!int "15"
  - !!int "9"
  - !!int "10"
  - !!int "6"
"speed": "20 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+3"
"gear":
  - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 12"
"languages": "Common"
"cr": "1/4"
"traits":
  - "desc": "The mongrelfolk has darkvision out to a range of 60 feet."
    "name": "Darkvision"
  - "desc": "Zygfrek can mimic any sounds it has heard, including voices. A creature\
      \ that hears the sounds can tell they are imitations with a successful DC 12\
      \ Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]]) check."
    "name": "Mimicry"
"actions":
  - "desc": "Zygfrek makes two attacks: one with its bite and one with its claw or\
      \ dagger."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3 (1d4\
      \ + 1) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 3 (1d4\
      \ + 1) slashing damage."
    "name": "Claw"
  - "desc": "*Melee  or Ranged Weapon Attack:* +3 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 3 (1d4 + 1) piercing damage."
    "name": "Dagger"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/zygfrek-belview-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
