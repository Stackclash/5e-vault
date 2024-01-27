---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
relationships:
  - Ireena Kolyana|sister
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
> ![[4. World Almanac/NPCs/img/izek-strazni.webp|cover hm-sm]] 
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Gender** | `INPUT[inlineSelect(option(male),option(female)):gender]` |
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
Izek and his sister were born in Vallaki. One morning, their father and their uncle took them fishing on Lake Zarovich. On the way back to town, a dire wolf attacked Izek and bit off his right arm. His father carried Izek back to town while his uncle distracted the beast. His sister ran and hid in the woods and was never seen again.

Unlike his sister, Izek was born without a soul. As time wore on, he forgot his lost sister and learned to cope with his disability.

## Orphaned Killer

Izek's parents succumbed to their grief, leaving him an orphan. He became a sociopath. Other children ruthlessly mocked him because of his dead family and his missing arm, but he was a large boy and had no trouble killing them and disposing of their bodies. He was eventually caught in the act and brought to the burgomaster. Instead of punishing the boy for his crimes, Baron Vallakovich pardoned Izek and took him into his home. Izek has been loyal to the burgomaster ever since, enjoying the power of his position and the comforts of his master's mansion. When he isn't enforcing the burgomaster's will, Izek drinks copious amounts of wine.

## Fiendish Gift

After years of doing Baron Vallakovich's dirty work, Izek awakened from a drunken stupor one morning to find that he had grown a new arm to replace the one he had lost.

The new appendage has barbed spines, elongated fingers, and long nails. He can create fire with the snap of his fiendish fingers and has used the flames to put the fear of the devil in every Vallakian.

## Doll Collector

Perhaps more disturbing than his fiendish arm and his murderous nature is Izek's collection of dolls, which he keeps in his bedroom in the burgomaster's mansion. Izek often has dreams of a beautiful young woman, and for years he has forced a local toymaker named Gadof Blinsky to craft dolls in her likeness. The woman is Ireena Kolyana, although Izek doesn't know her name.

## Family Is Forever

Izek has dreams of Ireena. If he spots her, he tries to take her by force to the burgomaster's mansion. If he succeeds, he holds her captive in his bedroom (chapter 5, area N3j). Unknown to Izek and Ireena, they are brother and sister. Ireena fled after Izek was attacked by the dire wolf and became lost in the woods. She wandered for days in shock until she was found and adopted by Kolyan Indirovich in the village of Barovia. Izek covets her in an unwholesome way and won't allow anyone or anything to come between them.

## Izek Strazni's Traits

### Ideal

"Fear is a powerful weapon. I use it to get what I want."

### Bond

"I am loyal to my master, Baron Vallakovich, for he brought me into his home. I owe him my life, but he isn't family."

### Flaw

"I would do anything, kill anything, to find my sister."

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
"name": "Izek Strazni (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "14"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "9"
- !!int "15"
"speed": "30 ft."
"skillsaves":
  "Intimidation": !!int "8"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "5"
"traits":
- "desc": "A melee weapon deals one extra die of its damage when Izek hits with it\
    \ (included in the attack)."
  "name": "Brute"
"actions":
- "desc": "Izek makes two attacks with his battleaxe."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) slashing damage, or dice: 2d10 + 4|avg\
    \ (2d10 + 4) when used with two hands."
  "name": "Battleaxe"
- "desc": "Ranged Spell Attack: dice: d20+5 (+5 to hit), range 60 ft., one target.\
    \ Hit: dice: 3d6|avg (3d6) fire damage. If the target is a flammable object\
    \ that isn't being worn or carried, it catches fire."
  "name": "Hurl Flame"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/izek-strazni.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes