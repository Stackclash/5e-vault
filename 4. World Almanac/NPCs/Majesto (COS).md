---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1
  - monster/size/tiny
  - monster/type/fiend/devil
condition: healthy
images:
  - 4. World Almanac\NPCs\img\060-cos05-11.webp
aliases:
  - Majesto
alignment: Lawful Evil
description: >-
  Majesto is Lady Fiona Wachter’s pet imp, a small devil kept hidden at
  Wachterhaus and used as living proof of her cult’s claimed infernal favor.
history: >-
  Majesto stands invisibly at the center of a pentagram during Fiona Wachter’s
  rituals for her most devoted followers, then scatters a handful of electrum
  coins as if bestowed by “princes of darkness,” reinforcing her claim to speak
  for infernal powers. It otherwise stays out of sight and fights only if Fiona
  herself is threatened.
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Places of Interest/Wachterhaus.md|Wachterhaus]]'
pronounced: muh-JES-toh
race: Imp (devil)
gender: male
age: null
occupation:
  - Familiar
groups:
  - Fiona Wachter’s Cult
religions: []
personality: 'Sly, theatrical, utterly devoted to Fiona'
ideal: Whatever serves my mistress serves me.
bond: 'Fiona Wachter, the woman it serves and the only master it answers to.'
flaw: >-
  It loves the theater of its tricks more than discretion, risking exposure for
  a good show.
goals: >-
  Help Fiona Wachter grow her devil-worshipping cult and, in time, see her seize
  control of Vallaki.
likes: 'Trickery, frightening zealots, mischief'
dislikes: 'Being ignored, anything that threatens Fiona’s schemes'
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
*Source: Curse of Strahd p. 115*

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
"name": "Majesto (COS)"
"size": "Tiny"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "13"
"hp": !!int "10"
"hit_dice": "3d4 + 3"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "17"
  - !!int "13"
  - !!int "11"
  - !!int "12"
  - !!int "14"
"speed": "20 ft., fly 40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ not made with silvered weapons"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 120 ft., passive Perception\
  \ 11"
"languages": "Infernal, Common"
"cr": "1"
"traits":
  - "desc": "Majesto can use its action to polymorph into a beast form that resembles\
      \ a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb\
      \ 20 ft.), or back into its true form. Its statistics are the same in each form,\
      \ except for the speed changes noted. Any equipment it is wearing or carrying\
      \ isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "Magical darkness doesn't impede Majesto's darkvision."
    "name": "Devil's Sight"
  - "desc": "Majesto has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5 (1d4\
      \ + 3) piercing damage, and the target must make a DC 11 Constitution saving\
      \ throw, taking 10 (3d6) poison damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Sting (Bite in Beast Form)"
  - "desc": "Majesto magically turns [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ until it attacks, or until its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
      \ ends (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]]\
      \ on a spell). Any equipment Majesto wears or carries is [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
      \ with it."
    "name": "Invisibility"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/majesto-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
