---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
relationships: []
tags: 
aliases: []
pronounced: 
race: 
gender: 
age: 
alignment: 
occupation: 
groups: []
religions: []
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
The fortune-teller Madam Eva lives among the Vistani but isn't truly one of them. She appears to be in her seventies, but she is, in fact, much older.

## Royal Blood

Madam Eva is Strahd's half-sister, though Strahd is unaware of this fact. Her real name is Katarina, and she is the daughter of a Vistani woman whom King Barov, Strahd's father, took to his bed during one of his many crusades. Madam Eva knows she is Strahd's half-sister but has told no one of the royal blood flowing through her veins.

## Mother Night

Over four hundred years ago, Katarina came to Barovia and insinuated herself into Strahd's court, working as a maid in Castle Ravenloft. She came to know the castle like the back of her hand, and she was present for the wedding of Sergei and Tatyana. After Strahd went mad and murdered his brother, she fled the castle and took refuge with the Vistani. Later, she forged a pact with the goddess Mother Night, trading her youth for the power to undo the evil that Strahd had wrought. Mother Night transformed Katarina into an ageless crone gifted with the power of magical foresight. In the guise of Madam Eva, she uses this ability to help Strahd. She can send her Vistani out in their wagons to visit other worlds and bring adventurers to Strahd's domain, in hopes that they will find a way to destroy the vampire or set Strahd free.

## For the Love of Strahd

The Dark Powers of Ravenloft would consider Madam Eva a worthy choice to replace Strahd as the master of Ravenloft, but she has all the power she desires and doesn't seek to supplant him. She would rather help Strahd find someone else to succeed him, although she has grave doubts about her ability to locate such an individual.

None of Madam Eva's Vistani kin know her true identity or purpose. They puzzle over her desire to remain in Barovia.

## Madam Eva's Traits

### Ideal

"I wish Strahd to be free of his curse."

### Bond

"The Vistani are my people now."

### Flaw

"The people whose fates I divine aren't important. They are but the means to an end."

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
"name": "Madam Eva (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "10"
"hp": !!int "88"
"hit_dice": "16d8 + 16"
"stats":
- !!int "8"
- !!int "11"
- !!int "12"
- !!int "17"
- !!int "20"
- !!int "18"
"speed": "20 ft."
"saves":
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "8"
  "Deception": !!int "8"
  "Religion": !!int "7"
  "Insight": !!int "13"
  "Perception": !!int "9"
  "Arcana": !!int "7"
"senses": "passive Perception 19"
"languages": "Abyssal, Common, Elvish, Infernal"
"cr": "10"
"traits":
- "desc": "Madam Eva is a 16th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (spell save DC 17, dice: d20+9 (+9 to hit) with spell attacks). Madam Eva\
    \ has the following cleric spells prepared:\n\nCantrips (at will): light,\
    \ mending, sacred flame, thaumaturgy\n\n1st level (4 slots): bane, command,\
    \ detect evil and good, protection from evil and good\n\n2nd level (3 slots):\
    \ lesser restoration, protection from poison, spiritual weapon\n\n3rd level\
    \ (3 slots): create food and water, speak with dead, spirit guardians\n\n4th\
    \ level (3 slots): divination, freedom of movement, guardian of faith\n\n5th\
    \ level (2 slots): greater restoration, raise dead\n\n6th level (1 slots):\
    \ find the path, harm, true seeing\n\n7th level (1 slots): fire storm, regenerate\n\
    \n8th level (1 slots): earthquake"
  "name": "spells"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d4|avg (1d4) piercing damage."
  "name": "Dagger"
- "desc": "Madam Eva targets one creature that she can see within 30 feet of her.\
    \ The target must succeed on a DC 17 Wisdom saving throw or be cursed. While cursed,\
    \ the target is blinded and deafened. The curse lasts until ended with a greater\
    \ restoration spell, a remove curse spell, or similar magic. When the curse ends,\
    \ Madam Eva takes dice: 5d6|avg (5d6) psychic damage."
  "name": "Curse (Recharges after a Long Rest)"
- "desc": "Madam Eva targets one creature that she can see within 10 feet of her and\
    \ casts one of the following spells on the target (save DC 17), requiring neither\
    \ somatic nor material components to do so: animal friendship, charm person, or\
    \ hold person. If the target succeeds on the initial saving throw, Madam Eva is\
    \ blinded until the end of her next turn. Once a target succeeds on a saving throw\
    \ against this effect, it is immune to the Evil Eye power of all Vistani for 24\
    \ hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/madam-eva.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes