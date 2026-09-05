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
  - 4. World Almanac\NPCs\img\rosavalda-rose-durst.webp
aliases:
  - Rosavalda "Rose" Durst
alignment: Lawful Good
description: >-
  Rose appears exactly as she did the day she died: a solemn, sharp-eyed
  ten-year-old girl in a plain traveling dress, dark hair kept neatly in place.
  She is quick to take charge of her younger brother Thorn, hushing his tears
  and speaking for both of them, and as a ghost she manifests the same
  protective bossiness she carried in life — tempered by the quiet, terrible
  knowledge that she is dead.
history: >-
  Rose was the elder child of Gustav and Elisabeth Durst, a wealthy Barovian
  family whose secret cult conducted debauched rituals beneath their townhouse
  in the village of Barovia. As their parents descended into madness and cult
  worship, Rose and Thorn were told frightening stories of a "monster" kept in
  the basement — a lie meant only to keep the children from the family's dungeon
  of horrors. Eventually Gustav and Elisabeth locked the children in the attic
  and simply forgot about them; Rose and Thorn starved to death there, never
  understanding what their family had truly done. Their spirits now linger in
  Death House: first as innocent illusions the haunted house conjures to lure
  travelers inside, and later — once their true, skeletal remains are found — as
  vengeful but still childlike ghosts who want nothing more than to keep their
  small family together.
relationships: []
partyRelationships: {}
location: null
pronounced: ROH-suh-VAL-duh DURST (called "Rose")
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 10
occupation: []
groups:
  - Durst Family
religions: []
personality: >-
  Protective and bossy toward her younger brother, masking her own fear with an
  insistence on being in charge; as a ghost she is coldly aware that she and
  Thorn are dead, though she still acts the part of the responsible big sister
ideal: 'Someone has to be strong and take charge, or everything falls apart.'
bond: 'Thorn is the only family I have left, and I won''t let anything happen to him.'
flaw: I like being in charge and get angry when other people tell me what to do.
goals: >-
  To keep Thorn safe and their small "family" of two together — though what
  would truly free her, unknowingly, is having their bones laid to rest together
  in the Durst family crypt beneath Death House.
likes: >-
  Her brother Thorn, her family's toys and keepsakes, being obeyed, order and
  routine
dislikes: >-
  The "monster" she believes lives in the basement, being ordered around,
  strangers disturbing her and Thorn's things, being left alone
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
"name": "Rosavalda \"Rose\" Durst (CoS)"
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
  - "desc": "Rose can see 60 feet into the Ethereal Plane when it is on the Material\
      \ Plane, and vice versa."
    "name": "Ethereal Sight"
  - "desc": "Rose can move through other creatures and objects as if they were difficult\
      \ terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
    "name": "Incorporeal Movement"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 17\
      \ (4d6 + 3) necrotic damage."
    "name": "Withering Touch"
  - "desc": "Rose enters the Ethereal Plane from the Material Plane, or vice versa.\
      \ It is visible on the Material Plane while it is in the Border Ethereal, and\
      \ vice versa, yet it can't affect or be affected by anything on the other plane."
    "name": "Etherealness"
  - "desc": "One humanoid that Rose can see within 5 feet of it must succeed on a\
      \ DC 13 Charisma saving throw or be possessed by Rose; Rose then disappears,\
      \ and the target is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ and loses control of its body. Rose now controls the body but doesn't deprive\
      \ the target of awareness. Rose can't be targeted by any attack, spell, or other\
      \ effect, except ones that turn undead, and it retains its alignment, Intelligence,\
      \ Wisdom, Charisma, and immunity to being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ and [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]. It otherwise\
      \ uses the possessed target's statistics, but doesn't gain access to the target's\
      \ knowledge, class features, or proficiencies.\n\nThe possession lasts until\
      \ the body drops to 0 hit points, Rose ends it as a bonus action, or Rose is\
      \ turned or forced out by an effect like the [[/5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]]\
      \ spell. When the possession ends, Rose reappears in an unoccupied space within\
      \ 5 feet of the body. The target is immune to this ghost's Possession for 24\
      \ hours after succeeding on the saving throw or after the possession ends."
    "name": "Possession (Recharge 6)"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/rosavalda-rose-durst-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
