---
obsidianUIMode: preview
statblock: inline
location: >-
  [[4. World Almanac/Places of Interest/The Wizard of Wines.md|The Wizard of
  Wines]]
condition: healthy
image: null
relationships:
  - Davian Martikov|father
tags:
  - npc
aliases: null
pronounced: AY-dree-an MAR-ti-kov
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 37
alignment: Neutral Good
occupation:
  - Vintner
groups:
  - Keepers of the Feather
religions: null
personality: 'Hardworking, practical, deeply loyal to his family and cause'
ideal: We must protect our own and fight against the darkness that encroaches.
bond: His family's legacy and the secret mission of the Keepers of the Feather.
flaw: >-
  Tends to prioritize the greater good over individual needs, which can
  sometimes alienate those close to him.
goals:
  - >-
    To restore the Wizard of Wines to full production, to aid in the fight
    against Strahd.
likes: 'The craft of winemaking, birds, the quiet of nature.'
dislikes: >-
  Threats to his family and winery, Strahd and his minions, failure to protect
  his loved ones
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
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

# **`=this.file.name`**

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
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Add Relationship"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Remove Relationship"
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock

```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details
He is a [[Wereraven (VRGR)]] 

### General Notes
