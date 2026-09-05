---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/10
  - monster/size/medium
  - monster/type/celestial
condition: healthy
images: []
aliases:
  - The Abbot
alignment: Lawful Evil
relationships: []
partyRelationships: {}
location: null
pronounced: null
race: Deva (celestial)
gender: male
age: null
occupation:
  - Master of the Abbey of Saint Markovia
groups: []
religions: []
personality: >-
  Serene, paternal, and soft-spoken on the surface; underneath, prideful and
  utterly convinced of his own goodness no matter what he does in its name.
ideal: >-
  I want to rid Barovia of its sickness. By giving the devil his heart's desire,
  I bring salvation to him and his land.
bond: 'I love the creatures I create, including my beautiful golems and mongrelfolk.'
flaw: 'I can''t be corrupted. My heart is pure, my intentions noble and good.'
goals: >-
  To cure Strahd's "malady" by reuniting him with a bride built from the dead,
  believing this will finally lift Barovia's curse.
likes: 'Healing the sick, refining his creations, being thanked for his good works'
dislikes: 'Being doubted, imperfection, anything that reminds him of his fall from grace'
description: >-
  A strikingly handsome human priest in his late twenties or early thirties — in
  truth a deva, an angel who has walked Barovia for over a century.
history: >-
  Sent from the Upper Planes to honor the legacy of Saint Markovia, the Abbot
  reopened her abbey in Krezk and spent decades tending the sick, believing he
  could bring Barovia some small measure of light. When the sickly, inbred
  Belview family came seeking a cure, his healing gave way to a prideful
  obsession with perfecting them, and a Barovian lord who called himself Vasili
  von Holtz — Strahd in disguise — supplied him with forbidden lore from the
  Amber Temple to finish the job, transforming the Belviews into mongrelfolk.
  Strahd then confided his "curse" to the Abbot and let the deva believe
  reuniting him with his lost love could end it. The Abbot is now convinced the
  cure is a bride stitched together from the bodies of dead women, and has
  completed a flesh golem he is teaching etiquette so she can be presented to
  Strahd — corrupted, but still unable to see it in himself.
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
*Source: Curse of Strahd p. 151*

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
"name": "The Abbot (COS)"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "18"
  - !!int "17"
  - !!int "20"
  - !!int "20"
"speed": "30 ft., fly 90 ft."
"saves":
  - "wisdom": !!int "9"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+9"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"gear":
  - "[[/5. Mechanics/Items/Mace.md|mace]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 120 ft., passive Perception\
  \ 19"
"languages": "all, telepathy 120 ft."
"cr": "10"
"traits":
  - "desc": "The Abbot's spellcasting ability is Charisma (spell save DC 17). The\
      \ Abbot can innately cast the following spells, requiring only verbal components:\n\
      \n**At will:** [[/5. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]]\n\
      \n**1/day each:** [[/5. Mechanics/Spells/Commune.md|commune]], [[/5. Mechanics/Spells/Raise Dead.md|raise dead]]"
    "name": "Innate Spellcasting"
  - "desc": "The Abbot's weapon attacks are magical. When The Abbot hits with any\
      \ weapon, the weapon deals an extra 4d8 radiant damage (included in the attack)."
    "name": "Angelic Weapons"
  - "desc": "The Abbot has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "The Abbot makes two melee attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 7 (1d6\
      \ + 4) bludgeoning damage plus 18 (4d8) radiant damage."
    "name": "Mace"
  - "desc": "The Abbot touches another creature. The target magically regains 20 (4d8\
      \ + 2) hit points and is freed from any curse, disease, poison, blindness, or\
      \ deafness."
    "name": "Healing Touch (3/Day)"
  - "desc": "The Abbot magically polymorphs into a humanoid or beast that has a challenge\
      \ rating equal to or less than its own, or back into its true form. It reverts\
      \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
      \ or borne by the new form (The Abbot's choice).\n\nIn a new form, The Abbot\
      \ retains its game statistics and ability to speak, but its AC, movement modes,\
      \ Strength, Dexterity, and special senses are replaced by those of the new form,\
      \ and it gains any statistics and capabilities (except class features, legendary\
      \ actions, and lair actions) that the new form has but that it lacks."
    "name": "Change Shape"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/the-abbot-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
