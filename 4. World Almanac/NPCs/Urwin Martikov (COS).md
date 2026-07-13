---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/2
  - monster/size/medium
  - monster/type/humanoid/human
  - monster/type/humanoid/shapechanger
condition: healthy
images: []
aliases:
  - Urwin Martikov
alignment: Lawful Good
relationships:
  - Danika Dorakova (COS)|wife
  - Davian Martikov (COS)|father
  - Bray Martikov (COS)|son
  - Brom Martikov (COS)|son
partyRelationships:
  Midnight Covenant: Ally
location: '[[4. World Almanac/Shops/Blue Water Inn.md|Blue Water Inn]]'
pronounced: UR-win MAR-ti-kov
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 36
occupation:
  - Innkeeper
  - Cook
groups:
  - Keepers of the Feather
religions: []
personality: 'Warm, protective, quietly stubborn'
ideal: A safe hearth and a full cup can hold back even Strahd’s darkness.
bond: >-
  His wife Danika, their sons Bray and Brom, and the Blue Water Inn he has
  sworn to keep as a sanctuary.
flaw: >-
  His pride won’t let him admit fault to his father, even when reconciliation
  matters more than being right.
goals: >-
  Clear his name in Davian’s eyes, keep the Blue Water Inn a safe haven for
  Vallaki, and protect the Keepers of the Feather’s secret from Strahd and the
  burgomaster alike.
likes: >-
  Good wine (even his family’s cheaper vintages), a full taproom, quiet nights
  when no one needs saving
dislikes: >-
  Being blamed for the stolen gem, his father’s suspicion, watching Vallaki
  suffer under the baron’s festivals
description: >-
  Urwin Martikov is the innkeeper of the [[Blue Water Inn]] in Vallaki and a
  high-ranking member of the Keepers of the Feather, the secret society of
  wereravens working against Strahd from within the town.
history: >-
  The middle son of [[Davian Martikov (COS)|Davian Martikov]], Urwin grew up
  tending the family vineyard until, ten years ago, one of the winery’s three
  magic gems was dug up and stolen while he stood watch. Davian became
  convinced Urwin had shirked his duty to be with his betrothed, Danika, and
  the two men have been at odds ever since; Urwin denies the accusation to
  this day. He and Danika later married and left the winery to open the Blue
  Water Inn in Vallaki, building it into both a sanctuary for frightened
  locals and a covert waypoint for the Keepers of the Feather.
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
*Source: Curse of Strahd p. 98*

Urwin Martikov keeps the [[Blue Water Inn]], Vallaki's main gathering place, and considers it a sanctuary from the horrors of Barovia. He is a wereraven and a high-ranking member of the Keepers of the Feather, the secret society working to undermine Strahd from the shadows.

## Bad Blood
Ten years ago, one of the Wizard of Wines' three magic gems vanished from the vineyard while Urwin stood watch. His father, [[Davian Martikov (COS)|Davian Martikov]], is certain Urwin shirked his duty to spend time with his betrothed, Danika, that night, and the two have been at odds ever since - Urwin and Danika now refer to Davian only as "the old crow." Urwin denies the accusation to this day, and the rift has kept him away from the family winery for years.

## A Sanctuary in Vallaki
Together with [[Danika Dorakova (COS)|Danika]], Urwin built the Blue Water Inn into more than a tavern: it is a safe harbor for frightened locals and a covert waypoint for the Keepers of the Feather. At any given time a handful of fellow wereravens linger at the inn, perched on the roof in raven form or resting inside in human guise. Urwin cooks the meals himself, while Danika runs the bar and their sons, [[Bray Martikov (COS)|Bray]] and [[Brom Martikov (COS)|Brom]], get underfoot.

## Hidden Currents
Urwin keeps a wary, curious eye on the town's dangers even as he plays the good-natured host - most recently a long-term guest calling himself Rictavio, unaware the man is the vampire hunter Rudolph van Richten in disguise.

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
"name": "Urwin Martikov (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "31"
"hit_dice": "7d8"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "11"
  - !!int "13"
  - !!int "15"
  - !!int "14"
"speed": "30 ft. (fly 50 ft. in raven and hybrid forms)"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+6"
"gear":
  - "[[/5. Mechanics/Items/Hand Crossbow.md|hand crossbow]]"
  - "[[/5. Mechanics/Items/Shortsword.md|shortsword]]"
"senses": "passive Perception 16"
"languages": "Common (can't speak in raven form)"
"cr": "2"
"traits":
  - "desc": "Urwin can use its action to polymorph into a raven-humanoid hybrid or\
      \ into a raven, or back into its human form. Its statistics, other than its\
      \ size, are the same in each form. Any equipment it is wearing or carrying isn't\
      \ transformed. It reverts to its human form if it dies."
    "name": "Shapechanger"
  - "desc": "Urwin can mimic simple sounds it has heard, such as a person whispering,\
      \ a baby crying, or an animal chittering. A creature that hears the sounds can\
      \ tell they are imitations with a successful DC 10 Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]])\
      \ check."
    "name": "Mimicry"
  - "desc": "Urwin regains 10 hit points at the start of its turn. If Urwin takes\
      \ damage from a silvered weapon or a spell, this trait doesn't function at the\
      \ start of Urwin's next turn. Urwin dies only if it starts its turn with 0 hit\
      \ points and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "Urwin makes two weapon attacks, one of which can be with its hand crossbow."
    "name": "Multiattack (Human or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 1 piercing\
      \ damage in raven form, or 4 (1d4 + 2) piercing damage in hybrid form. If the\
      \ target is humanoid, it must succeed on a DC 10 Constitution saving throw or\
      \ be cursed with wereraven [[/5. Mechanics/Rules/Variant Rules/Player Characters As Lycanthropes (MM).md|lycanthropy]]."
    "name": "Beak (Raven or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5 (1d6\
      \ + 2) piercing damage."
    "name": "Shortsword (Human or Hybrid Form Only)"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 30/120 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage."
    "name": "Hand Crossbow (Human or Hybrid Form Only)"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/urwin-martikov-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
