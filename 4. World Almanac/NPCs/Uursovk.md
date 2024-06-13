---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: >-
  https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/uursovk.jpg
relationships: []
tags:
  - npc
aliases:
  - Uursovk
pronounced: null
race: null
gender: null
age: null
alignment: Chaotic
occupation: null
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
> **Current Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |

# **`=this.file.name`**
*Source: Strongholds and Followers p. 172*

The Mad Oracle, the Madness-flesh, Uursovk may once have been a king or queen of Chaos itself. No one remembers that far back. Rumors are easy to come by, tales of things older than the Thrones themselves. Things of pure changing power, with no minds, no will except to remake the universe in their own terrible fluctuating imageless images.

Uursovk is the only member of the Court who is vulnerable to shapechanging magics, lacking sufficient will to prevent it.

Any image of Uursovk is by definition a facile rendering by lesser minds. Gazing upon the Mindwiper, one sees organs and limbs twisting and reshaping. Often one feels one is seeing many sides of the same beast at the same time, or an amalgam of many different creatures each superimposed over the others. But this is no image—their limbs meld into each other, twisting in torturous ways. Often the various appendages shudder, as though the creatures who once had these body parts are suffering incredible agony.

The smell itself is enough to choke someone, a rotting abattoir of putrid maggoty meat.

Uursovk is also known as the Oracle of the Court of All Flesh, occasionally making prophetic pronouncements that often come true. Uursovk's madness in no way impairs his second sight.

## Tactics

The Madness-flesh broadcasts an Insanity Field that interferes with conscious thought, causing nausea in intelligent creatures. Because its DC is based on Intelligence, maybe don't drop this guy next to the enemy magic-user. Fighters and rogues are more likely to fail their saves.

Just the sight of Uursovk ignites its Madness Aura, which blocks enemies' minds from being able to formulate the thoughts required to cast spells. This is a passive ability, though, so you don't have to burn an action to do it.

Uursovk's epic closer is Meld Flesh, which literally melts two adjacent enemies into one gestalt. Not as radical as it sounds, the gestalt creature can do anything the original two creatures could do, but it only gets one turn. This one prompts a Constitution saving throw, so it's a good option for hitting magic-users and glass cannons.

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
"name": "Uursovk"
"size": "Large"
"type": "aberration"
"alignment": "Chaotic"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "157"
"hit_dice": "15d10 + 75"
"stats":
- !!int "20"
- !!int "15"
- !!int "21"
- !!int "15"
- !!int "14"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Strength": !!int "9"
  "Constitution": !!int "9"
"damage_resistances": "psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]]"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Deep Speech, Primordial"
"cr": "9"
"traits":
- "desc": "The Court of All Flesh are beings of pure chaos. Because their minds are\
    \ pure disorder, they cannot be driven mad or [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ and any attempts to magically compel their behavior fails."
  "name": "Everchanging Changers"
- "desc": "Any creature that starts its turn within 10 feet of Uursovk must make a\
    \ DC 16 Intelligence saving throw. On a failure, the creature is [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ until the start of its next turn. On a success, the creature becomes immune\
    \ to Insanity Field for 24 hours."
  "name": "Insanity Field"
- "desc": "Uursovk has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Enemies within 60 feet who can see Uursovk make a successful DC 16 Intelligence\
    \ saving throw in order to cast a spell. Once a creature succeeds on this saving\
    \ throw, it becomes immune to Uursovk's Madness Aura for 24 hours."
  "name": "Madness Aura"
"actions":
- "desc": "Uursovk makes three attacks with bite or three attacks with bone spine."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 10\
    \ (1d10 + 5) piercing damage."
  "name": "Bite"
- "desc": "Ranged Weapon Attack: +6 to hit, range 60/180 ft., one target. Hit:\
    \ 11 (2d8 + 2) piercing damage."
  "name": "Bone Spine"
- "desc": "Uursovk targets two adjacent creatures, who must each make a DC 16 Constitution\
    \ saving throw. If both fail, they meld into one gestalt entity, shedding any\
    \ armor they were wearing. The gestalt entity is Medium and has hit points equal\
    \ to the sum of their hit points, has ability scores equal to the higher of each\
    \ score, and inherits any conditions of the targets. The new entity is treated\
    \ as an individual in combat, but can take any action that either original target\
    \ could take. At the end of each round, the two targets can make DC 16 Constitution\
    \ saving throws to revert to their original forms (still sans armor), but both\
    \ targets must succeed in order to end the effect. Otherwise, the effect ends\
    \ after 1 hour"
  "name": "Meld Flesh"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Uursovk.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
