---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/17
- monster/size/medium
- monster/type/fiend/devil
- monster/type/fiend/wizard
condition: healthy
images: []
relationships: []
aliases: [Nyssa Otellion]
alignment: Typically  Lawful Evil
partyRelationships: {}
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
> **Party Relationship** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page('Configuration').active_party).file.name]})` |

# **`=this.file.name`**
*Source: Vecna: Eve of Ruin p. 157*

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
"name": "Nyssa Otellion (VEoR)"
"size": "Medium"
"type": "fiend"
"subtype": "devil, wizard"
"alignment": "Typically  Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "202"
"hit_dice": "27d8 + 81"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "17"
  - !!int "22"
  - !!int "23"
  - !!int "18"
"speed": "30 ft., fly 50 ft."
"saves":
  - "intelligence": !!int "12"
  - "wisdom": !!int "12"
"skillsaves":
  - "name": "[Arcana](/compendium/rules/skills.md#Arcana)"
    "desc": "+12"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, lightning, poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "[darkvision](/compendium/rules/senses.md#Darkvision) 120 ft., passive Perception\
  \ 16"
"languages": "Draconic, Infernal, telepathy 120 ft."
"cr": "17"
"traits":
  - "desc": "Magical darkness doesn't impede Nyssa's [darkvision](/compendium/rules/senses.md#Darkvision)."
    "name": "Devil's Sight"
  - "desc": "Nyssa has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Nyssa makes three Bite or Lightning Strike attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d10 + 2) piercing damage plus 14 (4d6) lightning damage."
    "name": "Bite"
  - "desc": "*Ranged Spell Attack:* +12 to hit, range 120 ft., one target. *Hit:*\
      \ 36 (8d8) lightning damage."
    "name": "Lightning Strike"
  - "desc": "Nyssa casts one of the following spells, using Intelligence as the spellcasting\
      \ ability (spell save DC 20):\n\n**At will:** [disguise self](/compendium/spells/disguise-self.md),\
      \ [mage hand](/compendium/spells/mage-hand.md), [minor illusion](/compendium/spells/minor-illusion.md)\n\
      \n**2/day each:** [charm person](/compendium/spells/charm-person.md), [dispel\
      \ magic](/compendium/spells/dispel-magic.md), [greater invisibility](/compendium/spells/greater-invisibility.md),\
      \ [wall of force](/compendium/spells/wall-of-force.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Nyssa teleports, along with any equipment it is wearing or carrying,\
      \ up to 30 feet to an unoccupied space that it can see."
    "name": "Teleport"
"source":
  - "VEoR"
"image": "/compendium/bestiary/npc/token/nyssa-otellion-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes