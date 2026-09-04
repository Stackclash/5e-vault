---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/1-8
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\baron-vargas-vallakovich.webp
aliases:
  - Baron Vargas Vallakovich
  - Vargas Vallakovich
alignment: Neutral Evil
description: >-
  A paranoid, image-obsessed nobleman who believes enough manufactured cheer
  can shield Vallaki from Strahd's shadow. He wears his breastplate and
  rapier even at rest in his own library, flanked always by his two mastiffs
  and his monstrous enforcer, [[Izek Strazni (COS)|Izek Strazni]].
history: >-
  The Vallakovich line traces itself to Boris Vallakovich, the ancestor who
  founded Vallaki not long after Strahd's armies conquered the valley; the
  family has long believed itself of superior blood to the von Zarovich
  line, though no one living bears much resemblance to the founder's statue
  in the town square. Vargas has convinced himself that if he can make
  everyone in Vallaki happy, the town will somehow slip free of Strahd's
  grasp, and he stages one hollow festival after another - the Wolf's Head
  Jamboree, then the Festival of the Blazing Sun - to prove it. Those who
  mock his "All will be well!" catchphrase or question his authority are
  declared spies of the devil Strahd and thrown in the stocks, or dragged to
  his mansion so he can personally "purge" them of their evil. Two of his
  household staff, his butler and his wife's lady-in-waiting, vanished
  without a trace in the past week, and though he has charged
  [[Izek Strazni (COS)|Izek Strazni]] with finding them, no answers have
  come.
relationships: []
partyRelationships:
  Midnight Covenant: Friendly
location: '[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]'
pronounced: VAR-gas val-lah-KO-vich
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 43
occupation:
  - Burgomaster of Vallaki
groups:
  - House Vallakovich
religions:
  - The Morninglord
personality: 'Authoritarian, paranoid, obsessed with maintaining a façade of happiness'
ideal: All will be well if we just keep pretending it is.
bond: >-
  His family's legacy of ruling Vallaki, his desperate need to keep the town
  safe from Strahd's influence
flaw: >-
  His denial of Vallaki's real problems and his tyrannical methods of enforcing
  happiness
goals: ' To keep Vallaki free from Strahd''s influence, to maintain order at all costs'
likes: 'Obedience, festivals, public displays of happiness'
dislikes: 'Dissent, failure, anything that threatens his control or Vallaki''s ''happiness'''
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
*Source: Curse of Strahd p. 105*

Baron Vargas Vallakovich is the self-appointed burgomaster of Vallaki, a ruthless heel who prides himself on his good breeding and finely honed leadership skills - or so he believes. Convinced that ceaseless festivals and forced cheer can hold Strahd's darkness at bay, he rules the town through denial, paranoia, and the occasional public stoning.

## All Will Be Well

The baron has staged one festival after another for years, most recently the grim Wolf's Head Jamboree, with its parade of wolves' heads on pikes, and now the upcoming Festival of the Blazing Sun. Most Vallakians consider the festivals pointless, even dangerous, but Vargas is convinced that if he can make everyone in Vallaki happy, the town will somehow slip free of Strahd's grasp. His catchphrase, "All will be well!", has become a bitter, tired punchline among the people he governs.

## A Brittle Tyrant

The baron has a brittle ego and lashes out at anyone who mocks his festivals or treats him disrespectfully. Malcontents are declared "spies of the devil Strahd," thrown in the stocks in the town square, or brought to the mansion so the baron can personally purge them of their "evil" - a fate that befell the shoemaker Udo Lukovich, still chained in a closet off the baron's library for the crime of a rude sign. Behind the paranoia is real fear: two of his household staff, his butler and his wife's lady-in-waiting, vanished without a trace in the past week, and his efforts to find them through [[Izek Strazni (COS)|Izek Strazni]] have turned up nothing.

## Household and Habits

Vargas never goes anywhere without his two black mastiffs, and he wears his breastplate and rapier even while relaxing in his library - a habit that betrays how little safety he actually feels. His household includes his wife, [[Lady Lydia Petrovna (COS)|Lady Lydia Petrovna]]; his son, [[Victor Vallakovich (COS)|Victor Vallakovich]]; and his brutal enforcer, [[Izek Strazni (COS)|Izek Strazni]], who keeps the baron's enemies at bay through fear alone.

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
"name": "Baron Vargas Vallakovich (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "[[/5. Mechanics/Items/Breastplate.md|breastplate]]"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "11"
  - !!int "12"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+5"
"gear":
  - "[[/5. Mechanics/Items/Rapier.md|rapier]]"
"senses": "passive Perception 12"
"languages": "any two languages"
"cr": "1/8"
"actions":
  - "desc": "*Melee Weapon Attack:* +3 to hit, reach 5 ft., one target. *Hit:* 5 (1d8\
      \ + 1) piercing damage."
    "name": "Rapier"
"reactions":
  - "desc": "Vargas adds 2 to its AC against one melee attack that would hit it. To\
      \ do so, Vargas must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/baron-vargas-vallakovich-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
