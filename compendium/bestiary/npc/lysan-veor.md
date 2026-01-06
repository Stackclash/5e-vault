---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/8
- monster/size/medium
- monster/type/humanoid/gith
condition: healthy
images: []
relationships: []
aliases: [Lysan]
alignment: Lawful Neutral
partyRelationships: {}
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('imageCarousel', {current: dv.current()})
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
> **Party Relationship** | `$=await dv.view('metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page('Configuration').active_party).file.name]})` |

# **`=this.file.name`**
*Source: Vecna: Eve of Ruin*

TBD

## Traits/Goals
> [!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-gray] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-gray] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-gray] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`

> [!column|dataview] Goals
>> `INPUT[textArea:goals]`

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
> `$=await dv.view("npcRelationships", { current: dv.current() })`

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
"name": "Lysan (VEoR)"
"size": "Medium"
"type": "humanoid"
"subtype": "gith"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"ac_class": "[plate armor](/compendium/items/plate-armor.md)"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "15"
  - !!int "14"
  - !!int "14"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "constitution": !!int "5"
  - "intelligence": !!int "5"
  - "wisdom": !!int "5"
"senses": "passive Perception 12"
"languages": "Gith"
"cr": "8"
"traits":
  - "desc": "Lysan's innate spellcasting ability is Intelligence (spell save DC 13,\
      \ +5 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring no components:\n\n**At will:** [mage hand](/compendium/spells/mage-hand.md)\
      \ (the hand is invisible)\n\n**3/day each:** [jump](/compendium/spells/jump.md),\
      \ [misty step](/compendium/spells/misty-step.md), [nondetection](/compendium/spells/nondetection.md)\
      \ (self only), [tongues](/compendium/spells/tongues.md)\n\n**1/day each:** [plane\
      \ shift](/compendium/spells/plane-shift.md), [telekinesis](/compendium/spells/telekinesis.md)"
    "name": "Innate Spellcasting (Psionics)"
"actions":
  - "desc": "Lysan makes two silver greatsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d6 + 6) slashing damage plus 10 (3d6) psychic damage. This is a magic weapon\
      \ attack. On a critical hit against a target in an astral body (as with the\
      \ [astral projection](/compendium/spells/astral-projection.md) spell), Lysan\
      \ can cut the silvery cord that tethers the target to its material body, instead\
      \ of dealing damage."
    "name": "Silver Greatsword"
"source":
  - "VEoR"
"image": "/compendium/bestiary/npc/token/lysan-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes