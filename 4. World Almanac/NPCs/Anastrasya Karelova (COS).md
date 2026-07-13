---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/5
  - monster/size/medium
  - monster/type/undead
condition: healthy
images:
  - 4. World Almanac\NPCs\img\anastrasya-karelova.webp
aliases:
  - Anastrasya Karelova
alignment: Neutral Evil
relationships: []
partyRelationships:
  Midnight Covenant: Enemy
location: '[[4. World Almanac/Places of Interest/Castle Ravenloft.md|Castle Ravenloft]]'
pronounced: ah-nah-STRAH-sya ka-REL-o-va
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: female
age: 28
occupation: []
groups: []
religions: []
personality: 'Aristocratic, manipulative, fiercely loyal to Strahd.'
ideal: Power and status are everything; those without them are to be used as pawns.
bond: Her allegiance to Strahd and her noble lineage
flaw: Her overconfidence in her schemes and underestimation of others
goals: 'To maintain her position of power, to serve Strahd''s interests'
likes: 'Luxury, power, control over others'
dislikes: 'Disloyalty, failure, threats to her status'
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
*Source: Curse of Strahd p. 93*

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
"name": "Anastrasya Karelova (COS)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "16"
  - !!int "16"
  - !!int "11"
  - !!int "10"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+6"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 60 ft., passive Perception\
  \ 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
  - "desc": "Anastrasya regains 10 hit points at the start of its turn if it has at\
      \ least 1 hit point and isn't in sunlight or running water. If Anastrasya takes\
      \ radiant damage or damage from [[/5. Mechanics/Items/Holy Water Flask.md|holy water]],\
      \ this trait doesn't function at the start of Anastrasya's next turn."
    "name": "Regeneration"
  - "desc": "Anastrasya can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "Anastrasya has the following flaws:\n\n- **Forbiddance.** Anastrasya\
      \ can't enter a residence without an invitation from one of the occupants. \
      \ \n- **Harmed by Running Water.** Anastrasya takes 20 acid damage when it ends\
      \ its turn in running water.  \n- **Stake to the Heart.** Anastrasya is destroyed\
      \ if a piercing weapon made of wood is driven into its heart while it is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ in its resting place.  \n- **Sunlight Hypersensitivity.** Anastrasya takes\
      \ 20 radiant damage when it starts its turn in sunlight. While in sunlight,\
      \ it has disadvantage on attack rolls and ability checks  "
    "name": "Vampire Weaknesses"
"actions":
  - "desc": "Anastrasya makes two attacks, only one of which can be a bite attack."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one willing creature,\
      \ or a creature that is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ by Anastrasya, [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]],\
      \ or [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]]. *Hit:* 6 (1d6\
      \ + 3) piercing damage plus 7 (2d6) necrotic damage. The target's hit point\
      \ maximum is reduced by an amount equal to the necrotic damage taken, and Anastrasya\
      \ regains hit points equal to that amount. The reduction lasts until the target\
      \ finishes a long rest. The target dies if this effect reduces its hit point\
      \ maximum to 0."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one creature. *Hit:* 8\
      \ (2d4 + 3) slashing damage. Instead of dealing damage, Anastrasya can grapple\
      \ the target (escape DC 13)."
    "name": "Claws"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/anastrasya-karelova-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
