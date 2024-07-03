---
obsidianUIMode: preview
statblock: inline
tags:
  - compendium/src/5e/cos
  - monster/cr/5
  - monster/size/medium
  - monster/type/undead
  - npc
location: "[[4. World Almanac/Places of Interest/Castle Ravenloft.md|Castle Ravenloft]]"
condition: healthy
image: 4. World Almanac/NPCs/img/anastrasya-karelova.webp
relationships:
  - Strahd Von Zarovich|cousin
aliases: []
pronounced: ah-nah-STRAH-sya ka-REL-o-va
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: female
age: 28
alignment: Neutral Evil
occupation: []
groups:
  - Castle Ravenloft's Court
religions:
  - Cult of Strahd
personality: Aristocratic, manipulative, fiercely loyal to Strahd.
ideal: Power and status are everything; those without them are to be used as pawns.
bond: Her allegiance to Strahd and her noble lineage
flaw: Her overconfidence in her schemes and underestimation of others
goals: To maintain her position of power, to serve Strahd's interests
likes: Luxury, power, control over others
dislikes: Disloyalty, failure, threats to her status
partyRelationships: {}
---

> [!infobox | wsmall]
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
> **Party Relationship** | `$=await dv.view('metaBindInput', {type: 'inlineSelect', options: ['option(Stranger)','option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page('Configuration').active_party).file.name]})` |

# **`=this.file.name`**
*Source: Curse of Strahd p. 93*

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
"name": "Anastrasya Karelova"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "6"
  "Wisdom": !!int "3"
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- "desc": "Anastrasya regains 10 hit points at the start of its turn if it has at\
    \ least 1 hit point and isn't in sunlight or running water. If Anastrasya takes\
    \ radiant damage or damage from holy water, this trait doesn't function at the\
    \ start of Anastrasya's next turn."
  "name": "Regeneration"
- "desc": "Anastrasya can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "Anastrasya has the following flaws:\n\nForbiddance. Anastrasya can't\
    \ enter a residence without an invitation from one of the occupants.\n\nHarmed\
    \ by Running Water. Anastrasya takes 20 acid damage when it ends its turn in\
    \ running water.\n\nStake to the Heart. Anastrasya is destroyed if a piercing\
    \ weapon made of wood is driven into its heart while it is [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ in its resting place.\n\nSunlight Hypersensitivity. Anastrasya takes 20 radiant\
    \ damage when it starts its turn in sunlight. While in sunlight, it has disadvantage\
    \ on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- "desc": "Anastrasya makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one willing creature, or\
    \ a creature that is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] by Anastrasya,\
    \ [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]], or [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]].\
    \ Hit: 6 (1d6 + 3) piercing damage plus 7 (2d6) necrotic damage. The target's\
    \ hit point maximum is reduced by an amount equal to the necrotic damage taken,\
    \ and Anastrasya regains hit points equal to that amount. The reduction lasts\
    \ until the target finishes a long rest. The target dies if this effect reduces\
    \ its hit point maximum to 0."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (2d4\
    \ + 3) slashing damage. Instead of dealing damage, Anastrasya can grapple the\
    \ target (escape DC 13)."
  "name": "Claws"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/anastrasya-karelova-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
