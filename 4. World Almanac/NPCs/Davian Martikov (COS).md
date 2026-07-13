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
images:
  - 4. World Almanac\NPCs\img\davian-martikov.webp
aliases:
  - Davian Martikov
alignment: Lawful Good
description: >-
  Davian Martikov is the old, suspicious patriarch of the Martikov family and
  current owner of the [[The Wizard of Wines|Wizard of Wines]] winery, and
  like his children, a wereraven and senior member of the Keepers of the
  Feather.
history: >-
  The winery passed to the Martikov line generations ago through a marriage
  between the Krezkov and Martikov families, and the whole family was later
  touched by lycanthropy, becoming wereravens loyal to the Keepers of the
  Feather. Davian has run the vineyard for decades, but ten years ago one of
  its three magic "seed" gems was stolen while his son
  [[Urwin Martikov (COS)|Urwin]] stood watch; Davian has never forgiven him
  for it, and the two remain estranged. In recent weeks Baba Lysaga's
  scarecrows and a band of evil druids have stolen the remaining two gems and
  driven Davian's family from the winery entirely, leaving the vineyard's
  future in doubt.
relationships:
  - Adrian Martikov|son
  - Elvir Martikov|son
  - Urwin Martikov (COS)|son
  - Stefania Martikov|daughter
partyRelationships:
  Midnight Covenant: Ally
location: >-
  [[4. World Almanac/Places of Interest/The Wizard of Wines.md|The Wizard of
  Wines]]
pronounced: DAY-vee-an MAR-ti-kov
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 61
occupation:
  - Vintner
  - Winery Owner
groups:
  - Keepers of the Feather
religions: []
personality: 'Suspicious, gruff, stubbornly proud'
ideal: >-
  The vineyard is the valley’s lifeblood, and protecting it is the family’s
  sacred duty above all else.
bond: >-
  The Wizard of Wines winery his family has tended for generations, and the
  good name he refuses to see tarnished by a son’s mistake.
flaw: Once convinced he’s right, he cannot let a grudge go, not even against his own son.
goals: >-
  Recover the vineyard’s three stolen magic gems, drive off Baba Lysaga’s
  scarecrows and the druids squatting in his winery, and restore the Wizard
  of Wines to its former glory.
likes: 'Well-tended grapevines, a full cellar, the memory of his late wife Angelika'
dislikes: 'Baba Lysaga’s scarecrows, thieves, being defied - especially by Urwin'
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
*Source: Curse of Strahd p. 173*

Davian Martikov is the old, suspicious patriarch of the Martikov family, current owner of the [[The Wizard of Wines|Wizard of Wines]] winery, and a wereraven elder among the Keepers of the Feather.

## The Old Crow
Ten years ago, one of the vineyard's three magic gems was dug up and stolen. Davian is certain his middle son, [[Urwin Martikov (COS)|Urwin]], shirked his watch that night to be with his betrothed, and the two have been at odds ever since - Urwin and Danika now refer to Davian only as "the old crow" behind his back.

## A Winery Under Siege
Baba Lysaga's scarecrow constructs have been raiding the vineyard for weeks, and evil druids have since stolen the remaining two gems and poisoned the fermentation vats, driving Davian and his family into the woods. He is desperate for outside help to reclaim the winery and recover the gems before the vines - and Barovia's last real comfort - die for good.

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
"name": "Davian Martikov (COS)"
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
  - "desc": "Davian can use its action to polymorph into a raven-humanoid hybrid or\
      \ into a raven, or back into its human form. Its statistics, other than its\
      \ size, are the same in each form. Any equipment it is wearing or carrying isn't\
      \ transformed. It reverts to its human form if it dies."
    "name": "Shapechanger"
  - "desc": "Davian can mimic simple sounds it has heard, such as a person whispering,\
      \ a baby crying, or an animal chittering. A creature that hears the sounds can\
      \ tell they are imitations with a successful DC 10 Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]])\
      \ check."
    "name": "Mimicry"
  - "desc": "Davian regains 10 hit points at the start of its turn. If Davian takes\
      \ damage from a silvered weapon or a spell, this trait doesn't function at the\
      \ start of Davian's next turn. Davian dies only if it starts its turn with 0\
      \ hit points and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "Davian makes two weapon attacks, one of which can be with its hand crossbow."
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
"image": "/4. World Almanac/NPCs/token/davian-martikov-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
