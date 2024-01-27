---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
relationships:
  - Bray Martikov|son
  - Brom Martikov|son
  - Danika Dorakova|wife
  - Davian Martikov|father
tags: 
aliases: 
pronounced: 
race: 
gender: 
age: 
alignment: 
occupation: 
groups: 
religions: 
personality: 
ideal: 
bond: 
flaw: 
goals: 
likes: 
dislikes: 
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  "`INPUT[text:pronounced]`"
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Sex** | `INPUT[inlineSelect(option(male),option(female)):gender]` |
> **Age** | `INPUT[number:age]` |
> **Alignment** | `INPUT[inlineSelect(option(lawful good),option(neutral good),option(chaotic good),option(lawful neutral),option(neutral),option(chaotic neutral),option(lawful evil),option(netural evil),option(chaotic evil)):alignment]` |
> **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `INPUT[inlineList:occupation]` |
> **Group(s)** | `INPUT[inlineList:groups]` |
> **Religion(s)** | `INPUT[inlineList:religions]` |
> **Current Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |

# **`=this.file.name`**
TBD

## Traits/Goals
> [!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `INPUT[text:personality]`
>
>> [!metadata|text-Center bg-c-gray] Ideal
>> `INPUT[text:ideal]`
>
>> [!metadata|text-Center bg-c-gray] Bond
>> `INPUT[text:bond]`
>
>> [!metadata|text-Center bg-c-gray] Flaw
>> `INPUT[text:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[text:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[text:dislikes]`

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
    str: add
  - type: input
    str: relationship
```
```meta-bind-button
style: primary
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: remove
  - type: input
    str: relationship
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Urwin Martikov (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "11"
- !!int "13"
- !!int "15"
- !!int "14"
"speed": "30 ft. (fly 50 ft. in raven and hybrid forms)"
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Common (can't speak in raven form)"
"cr": "2"
"traits":
- "desc": "Urwin can use its action to polymorph into a raven-humanoid hybrid or into\
    \ a raven, or back into its human form. Its statistics, other than its size, are\
    \ the same in each form. Any equipment it is wearing or carrying isn't transformed.\
    \ It reverts to its human form if it dies."
  "name": "Shapechanger"
- "desc": "Urwin can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
- "desc": "Urwin regains 10 hit points at the start of its turn. If Urwin takes damage\
    \ from a silvered weapon or a spell, this trait doesn't function at the start\
    \ of Urwin's next turn. Urwin dies only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Urwin makes two weapon attacks, one of which can be with its hand crossbow."
  "name": "Multiattack (Human or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage in raven form, or dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage in hybrid form. If the target is humanoid, it must succeed on a DC 10\
    \ Constitution saving throw or be cursed with wereraven lycanthropy."
  "name": "Beak (Raven or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortsword (Human or Hybrid Form Only)"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Hand Crossbow (Human or Hybrid Form Only)"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/urwin-martikov.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
