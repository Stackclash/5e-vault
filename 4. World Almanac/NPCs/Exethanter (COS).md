---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/10
  - monster/size/medium
  - monster/type/undead
condition: healthy
images: []
aliases:
  - Exethanter
alignment: Chaotic Neutral
description: >-
  A decrepit, robed skeleton with red pinpoints of light burning in its eye
  sockets — once a proud archmage, now a lich whose mind and body are
  slowly falling apart.
history: >-
  An evil archmage who arrived at the long-abandoned Amber Temple
  generations after its original defenders had died, Exethanter breached
  its wards, bargained with a trapped vestige, and learned the secret of
  becoming a lich. He turned the skulls of the temple's fallen defenders
  into flameskulls and appointed himself the temple's new keeper — not to
  hoard its forbidden secrets, but to share them with anyone who came
  seeking power, Strahd von Zarovich included.
relationships: []
partyRelationships:
  Midnight Covenant: Acquaintance
location: '[[The Amber Temple]]'
pronounced: ex-ETH-an-ter
race: '[[5. Mechanics/Bestiary/Undead/Lich|Lich]]'
gender: male
age: null
occupation:
  - Self-appointed keeper of the Amber Temple
  - Former archmage
groups:
  - The Amber Temple's original order of wizards (last survivor)
religions: []
personality: >-
  Detached and scholarly, but his mind is fraying — he forgets his own name
  and struggles to complete his own thoughts.
ideal: >-
  Knowledge and power must be shared, not hoarded — even evil secrets
  deserve an audience.
bond: >-
  Bound eternally to the phylactery hidden in the temple's depths, and to
  the temple itself, which he has guarded since his transformation.
flaw: >-
  His memory is failing — he has forgotten his own name, his spells, and
  much of what he once knew.
goals: >-
  To continue watching over the Amber Temple and sharing its secrets,
  though he no longer fully remembers why.
likes: 'Visitors who ask questions, forbidden lore, being addressed with respect'
dislikes: >-
  Being forgotten himself, having his phylactery threatened, Strahd's
  growing indifference toward him
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
*Source: Curse of Strahd p. 189*

Exethanter was once a mortal archmage who arrived at [[The Amber Temple]] long after its original defenders — a secret society of good-aligned wizards — had died and turned against one another, corrupted by the evil vestiges they had imprisoned within. Breaching the temple's wards, Exethanter spoke to one of the trapped vestiges and learned the secret of becoming a lich.

## Keeper of Forbidden Secrets

After his transformation, Exethanter took over the temple, turning the skulls of its former defenders into flameskulls to serve as his guardians. Unlike the wizards before him, he chose not to hoard the temple's evil secrets — he shares them openly with anyone who comes seeking power, believing knowledge should circulate rather than be buried.

## A Pact Sealed in Blood

When [[Strahd Von Zarovich (COS)|Strahd]] first came to the temple seeking immortality, Exethanter sensed he was a man of destiny — though it was the temple's imprisoned evil vestiges that recognized in Strahd a darkness greater than their own. Strahd communed with them and forged the pact that transformed him into a vampire after he murdered his brother Sergei.

## A Mind Unraveling

The centuries have not been kind to Exethanter. His body and mind are falling apart; he has forgotten his own name and most of his prepared spells, retaining only his cantrips. He knows only that the Dark Powers who cursed Barovia were born within the temple's walls, and that they feed on the darkness Strahd represents. A [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]] spell would restore his memory and magic — and, with it, his willingness to share the temple's passwords and secrets with anyone who asks.

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
"name": "Exethanter (COS)"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "99"
"hit_dice": "18d8 + 54"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "16"
  - !!int "20"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "constitution": !!int "10"
  - "intelligence": !!int "12"
  - "wisdom": !!int "9"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+19"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+12"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+9"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Truesight|truesight]] 120 ft., passive Perception\
  \ 19"
"languages": "Common plus up to five other languages"
"cr": "10"
"traits":
  - "desc": "Exethanter is an 18th-level spellcaster. Its spellcasting ability is\
      \ Intelligence (spell save DC 20, +12 to hit with spell attacks). Exethanter\
      \ has the following wizard spells prepared:\n\n**Cantrips (at will):** [[/5. Mechanics/Spells/Mage Hand.md|mage\
      \ hand]], [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]],\
      \ [[/5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]"
    "name": "Spellcasting"
  - "desc": "If Exethanter fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "If it has a phylactery, a destroyed lich gains a new body in 1d10 days,\
      \ regaining all its hit points and becoming active again. The new body appears\
      \ within 5 feet of the phylactery."
    "name": "Rejuvenation"
  - "desc": "Exethanter has advantage on saving throws against any effect that turns\
      \ undead."
    "name": "Turn Resistance"
"actions":
  - "desc": "*Melee Spell Attack:* +12 to hit, reach 5 ft., one creature. *Hit:* 10\
      \ (3d6) cold damage. The target must succeed on a DC 18 Constitution saving\
      \ throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]] for 1 minute.\
      \ The target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Paralyzing Touch"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, Exethanter can expend a use to take one of the following actions. Exethanter\
  \ regains all expended uses at the start of each of their turns."
"legendary_actions":
  - "desc": "Exethanter casts a cantrip."
    "name": "Cantrip"
  - "desc": "Exethanter uses its Paralyzing Touch."
    "name": "Paralyzing Touch (Costs 2 Actions)"
  - "desc": "Exethanter fixes its gaze on one creature it can see within 10 feet of\
      \ it. The target must succeed on a DC 18 Wisdom saving throw against this magic\
      \ or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] for 1 minute.\
      \ The [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] target can repeat\
      \ the saving throw at the end of each of its turns, ending the effect on itself\
      \ on a success. If a target's saving throw is successful or the effect ends\
      \ for it, the target is immune to Exethanter's gaze for the next 24 hours."
    "name": "Frightening Gaze (Costs 2 Actions)"
  - "desc": "Each non-undead creature within 20 feet of Exethanter must make a DC\
      \ 18 Constitution saving throw against this magic, taking 21 (6d6) necrotic\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Disrupt Life (Costs 3 Actions)"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/exethanter-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
