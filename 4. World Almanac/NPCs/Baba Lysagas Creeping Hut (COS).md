---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/11
  - monster/size/gargantuan
  - monster/type/construct
condition: dead
images:
  - 4. World Almanac\NPCs\img\baba-lysagas-creeping-hut.webp
aliases:
  - Baba Lysaga's Creeping Hut
alignment: Unaligned
relationships: []
partyRelationships: {}
location: null
pronounced: null
race: Animated Construct
gender: null
age: null
occupation: []
groups: []
religions: []
personality: >-
  None — a mindless construct with no will of its own beyond Baba Lysaga's
  commands.
ideal: null
bond: null
flaw: null
goals: >-
  Whatever Baba Lysaga commands — historically, guarding her and attacking
  intruders at the Ruins of Berez.
likes: null
dislikes: null
description: >-
  A gargantuan, ramshackle wooden hut on huge spidery roots, animated by a
  stolen magic gem — now inert since the gem was torn from it.
history: >-
  Baba Lysaga built the hut atop the rotted stump of a long-felled giant tree,
  giving it a crude semblance of life only after embedding a stolen magic
  gemstone — one of three that once kept the Wizard of Wines vineyard
  flourishing — in a cavity beneath its floorboards. Whenever she willed it, the
  hut tore its roots free and stalked the Ruins of Berez as her guardian and war
  engine. The gem has since been torn out and the hut left inert.
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
*Source: Curse of Strahd p. 226*

Baba Lysaga built a hut atop the rotting stump of a giant tree that was felled long ago. It was only after she embedded a magic gemstone in the hut that the whole thing was imbued with a semblance of life. When she wills it to do so, the hut pulls its gigantic roots free of the earth and shambles around like a spidery behemoth, shaking the ground with every step. The hut attacks with its flailing and stomping roots. It can also use its roots to fling large rocks.

## Hut Interior

The hut is a 15-foot-square, ramshackle wooden building with a gently sloping thatch roof. Its furnishings have been bolted to the floor, since the hut lurches from side to side when it walks.

## Heart of the Hut

The gemstone that has given life to Baba Lysaga's hut was previously buried in the Wizard of Wines vineyard. The gem was one of three imbued with life-giving magic that made the grapevines in the vineyard healthier, guaranteeing the finest wines. Baba Lysaga stole one of the gems and perverted its magic, using it instead to animate her wooden hut.

Removing the gem from the hut renders the hut [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]. That task is easier said than done, however. The glowing green gem is contained in a cavity in the stump, beneath the rotted floorboards of the hut. The floorboards can be ripped up with a successful DC 14 Strength check or smashed by dealing 10 damage to them. Once the floorboards are out of the way, a creature can reach into the cavity and snatch the gem. But if someone attempts this while the hut is alive, the cavity sprouts wooden teeth, becoming a mouth that bites anything that tries to remove the gem; a creature trying to remove the gem must make a DC 20 Dexterity saving throw. On a successful save, the creature claims the stone without getting bitten. On a failed save, the creature is bitten for `dice:3d6|noform|noparens|avg|text(10)` (`3d6`) piercing damage and fails to obtain the gem.

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
"name": "Baba Lysagas Creeping Hut (COS)"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "263"
"hit_dice": "17d20 + 85"
"modifier": !!int "-2"
"stats":
  - !!int "26"
  - !!int "7"
  - !!int "20"
  - !!int "1"
  - !!int "3"
  - !!int "3"
"speed": "30 ft."
"saves":
  - "constitution": !!int "9"
  - "wisdom": !!int "0"
  - "charisma": !!int "0"
"damage_immunities": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Blindsight|blindsight]] 120 ft. (blind beyond\
  \ this radius), passive Perception 6"
"languages": ""
"cr": "11"
"traits":
  - "desc": "An animated object doesn't require air, food, drink, or sleep.\n\nThe\
      \ magic that animates an object is dispelled when the construct drops to 0 hit\
      \ points. An animated object reduced to 0 hit points becomes inanimate and is\
      \ too damaged to be of much use or value to anyone."
    "name": "Constructed Nature"
  - "desc": "The hut is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ while the magic gem that animates it is in the area of an [[/5. Mechanics/Spells/Antimagic Field.md|antimagic field]].\
      \ If targeted by [[/5. Mechanics/Spells/Dispel Magic.md|dispel magic]], the hut\
      \ must succeed on a Constitution saving throw against the caster's spell save\
      \ DC or fall [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]] for\
      \ 1 minute."
    "name": "Antimagic Susceptibility"
  - "desc": "The hut deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The hut makes three attacks with its roots. It can replace one of these\
      \ attacks with a rock attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 60 ft., one target. *Hit:* 30\
      \ (4d10 + 8) bludgeoning damage."
    "name": "Root"
  - "desc": "*Ranged Weapon Attack:* +12 to hit, range 120 ft., one target. *Hit:*\
      \ 21 (3d8 + 8) bludgeoning damage."
    "name": "Rock"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/baba-lysagas-creeping-hut-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
