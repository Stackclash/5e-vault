---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/2
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\luvash.webp
aliases:
  - Luvash
alignment: Chaotic Evil
relationships: []
partyRelationships: {}
location: null
pronounced: null
race: null
gender: null
age: null
occupation: []
groups: []
religions: []
personality: null
ideal: null
bond: null
flaw: null
goals: null
likes: null
dislikes: null
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
*Source: Curse of Strahd p. 121*

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
"name": "Luvash (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "[[/5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "11"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "strength": !!int "4"
  - "dexterity": !!int "5"
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+4"
"gear":
  - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
  - "[[/5. Mechanics/Items/Scimitar.md|scimitar]]"
"senses": "passive Perception 10"
"languages": "any two languages"
"cr": "2"
"actions":
  - "desc": "Luvash makes three melee attacks: two with its scimitar and one with\
      \ its dagger. Or Luvash makes two ranged attacks with its daggers."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6 (1d6\
      \ + 3) slashing damage."
    "name": "Scimitar"
  - "desc": "*Melee  or Ranged Weapon Attack:* +5 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 5 (1d4 + 3) piercing damage."
    "name": "Dagger"
  - "desc": "12\n\n- The target is unable to perform a certain kind of act involving\
      \ fine motor control, such as tying knots, writing, playing an instrument, sewing,\
      \ or casting spells that have somatic components. When this curse ends, the\
      \ Vistana takes 1d6 psychic damage.  \n- The target's appearance changes in\
      \ a sinister yet purely cosmetic way. For example, the curse can place a scar\
      \ on the target's face, turn the target's teeth into yellow fangs, or give the\
      \ target bad breath. When this curse ends, the Vistana takes 1d6 psychic damage.\
      \  \n- A nonmagical item in the target's possession (chosen by the DM) disappears\
      \ and can't be found until the curse ends. The lost item can weigh no more than\
      \ 1 pound. When this curse ends, the Vistana takes 1d6 psychic damage.  \n-\
      \ The target gains vulnerability to a damage type of the Vistana's choice. When\
      \ this curse ends, the Vistana takes 3d6 psychic damage.  \n- The target has\
      \ disadvantage on ability checks and saving throws tied to one ability score\
      \ of the Vistana's choice. When this curse ends, the Vistana takes 3d6 psychic\
      \ damage.  \n- The target's attunement to one magic item (chosen by the DM)\
      \ ends, and the target can't attune to the chosen item until the curse ends.\
      \ When this curse ends, the Vistana takes 5d6 psychic damage.  \n- The target\
      \ is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
      \ or both. When this curse ends, the Vistana takes 5d6 psychic damage.  \n\n\
      The curse lasts until ended with a [[/5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
      \ spell, a [[/5. Mechanics/Spells/Remove Curse.md|remove curse]] spell, or similar\
      \ magic. It doesn't end when the target dies. If a cursed target is returned\
      \ to life, the curse remains in effect."
    "name": "Curse (Recharges After a Long Rest)"
  - "desc": "12\n\nA Vistana who uses Evil Eye can't use it again before finishing\
      \ a short or long rest. Once a target succeeds on a saving throw against a Vistana's\
      \ Evil Eye, it is immune to the Evil Eye of all Vistani for 24 hours."
    "name": "Evil Eye (Recharges after a Short or Long Rest)"
"reactions":
  - "desc": "Luvash adds 2 to its AC against one melee attack that would hit it. To\
      \ do so, Luvash must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/luvash-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
