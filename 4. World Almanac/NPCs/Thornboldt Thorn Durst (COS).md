---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/3
  - monster/size/small
  - monster/type/undead
condition: healthy
images:
  - 4. World Almanac\NPCs\img\thornboldt-thorn-durst.webp
aliases:
  - Thornboldt "Thorn" Durst
alignment: Lawful Good
description: >-
  Thorn appears just as he did in life: a small, wide-eyed seven-year-old boy
  clutching a stuffed doll, prone to weeping and quick to hide behind his
  older sister. As a ghost he retains every bit of that fragility — he
  fights only when cornered, and mostly just wants to be left with his
  sister and his toy.
history: >-
  Thorn was the younger child of Gustav and Elisabeth Durst, born into a
  wealthy Barovian family whose secret cult conducted debauched rituals
  beneath their townhouse in the village of Barovia. As their parents
  descended into madness, Thorn and his sister Rose were told frightening
  stories of a "monster" kept in the basement — a lie meant to keep the
  children from the family's dungeon of horrors. Eventually Gustav and
  Elisabeth locked the children in the attic and simply forgot about them;
  Thorn and Rose starved to death there together, never understanding what
  their family had truly done. His spirit now lingers in Death House
  alongside Rose's: first as an innocent illusion the haunted house conjures
  to lure travelers inside, and later — once his true, skeletal remains are
  found — as a frightened but still childlike ghost who only wants to keep
  his sister close.
relationships: []
partyRelationships: {}
location: null
pronounced: 'THORN-bohlt DURST (called "Thorn")'
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 7
occupation: []
groups:
  - Durst Family
religions: []
personality: >-
  Timid and easily frightened, clinging to his sister Rose and his stuffed
  doll for comfort; as a ghost he weeps and panics rather than fights, and
  possessing a host leaves them jumpy and tearful
ideal: "As long as Rose is with me, I don't have to be brave by myself."
bond: My stuffed doll and my sister Rose are the only things I have left to hold on to.
flaw: I'm scared of everything, including my own shadow, and weep with despair when things don't go my way.
goals: >-
  To stay close to Rose and never be left alone again — though what would
  truly free him, unknowingly, is having his bones laid to rest in the Durst
  family crypt beneath Death House.
likes: His sister Rose, his stuffed doll, being comforted and reassured, familiar things left undisturbed
dislikes: >-
  The "monster" he believes lives in the basement, being alone or forgotten,
  loud noises and sudden threats, strangers who frighten him
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
*Source: Curse of Strahd p. 217*

Thornboldt "Thorn" Durst is the younger of the two ghost children who haunt [[/4. World Almanac/Places of Interest/Death House.md|Death House]] in the [[/4. World Almanac/Settlements/Village of Barovia.md|village of Barovia]] — a frightened seven-year-old boy who never once stopped believing his big sister [[/4. World Almanac/NPCs/Rosavalda Rose Durst (COS).md|Rose]] could keep him safe, right up until they starved to death together.

## A House of Secrets

Long before Thorn was born, the wealthy Durst family used their townhouse to host a secret cult devoted to summoning malevolent extraplanar entities. As the cult's activities grew more depraved, Gustav and Elisabeth Durst warned their children never to go down to the basement, claiming a "monster" was kept trapped there. In truth, the sounds Thorn heard through the floorboards at night were the screams of the cult's sacrificial victims.

## Locked Away and Forgotten

As their parents spiraled further into madness — and after the birth and death of a stillborn third child, Walter — Thorn and Rose were locked in the attic and abandoned. Too young to understand what his family had done, Thorn starved to death clutching his stuffed doll, comforted to the end by his sister's presence.

## A House That Won't Let Go

Death House now conjures illusions of Thorn and Rose — living, weeping children in the street outside — to lure travelers into the house. These illusions don't know they aren't real, and vanish the moment they're harmed or forced back inside. The true ghost of Thorn lingers deeper in the house, in the room where he died (area 20), still clutching his doll; he knows full well that he's dead, and he fights only when cornered, panicking and weeping rather than pressing an attack. Like his sister, he is terrified of being abandoned again, and the only way to grant him peace is to lay his skeletal remains in his family crypt in the dungeon below.

## Thornboldt "Thorn" Durst's Traits

### Flaw

"I'm scared of everything, including my own shadow, and weep with despair when things don't go my way."

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
"name": "Thornboldt \"Thorn\" Durst (CoS)"
"size": "Small"
"type": "undead"
"alignment": "Lawful Good"
"ac": !!int "11"
"hp": !!int "35"
"hit_dice": "10d6"
"modifier": !!int "1"
"stats":
  - !!int "7"
  - !!int "13"
  - !!int "10"
  - !!int "10"
  - !!int "12"
  - !!int "17"
"speed": "0 ft., fly 40 ft. (hover)"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 11"
"languages": "Common"
"cr": "3"
"traits":
  - "desc": "Thorn can see 60 feet into the Ethereal Plane when it is on the Material\
      \ Plane, and vice versa."
    "name": "Ethereal Sight"
  - "desc": "Thorn can move through other creatures and objects as if they were difficult\
      \ terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (4d6 + 3) necrotic damage."
    "name": "Withering Touch"
  - "desc": "Thorn enters the Ethereal Plane from the Material Plane, or vice versa.\
      \ It is visible on the Material Plane while it is in the Border Ethereal, and\
      \ vice versa, yet it can't affect or be affected by anything on the other plane."
    "name": "Etherealness"
  - "desc": "One humanoid that Thorn can see within 5 feet of it must succeed on a\
      \ DC 13 Charisma saving throw or be possessed by Thorn; Thorn then disappears,\
      \ and the target is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ and loses control of its body. Thorn now controls the body but doesn't deprive\
      \ the target of awareness. Thorn can't be targeted by any attack, spell, or\
      \ other effect, except ones that turn undead, and it retains its alignment,\
      \ Intelligence, Wisdom, Charisma, and immunity to being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ and [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]. It otherwise\
      \ uses the possessed target's statistics, but doesn't gain access to the target's\
      \ knowledge, class features, or proficiencies.\n\nThe possession lasts until\
      \ the body drops to 0 hit points, Thorn ends it as a bonus action, or Thorn\
      \ is turned or forced out by an effect like the [[/5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]]\
      \ spell. When the possession ends, Thorn reappears in an unoccupied space within\
      \ 5 feet of the body. The target is immune to this ghost's Possession for 24\
      \ hours after succeeding on the saving throw or after the possession ends."
    "name": "Possession (Recharge 6)"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/thornboldt-thorn-durst-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
