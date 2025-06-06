---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/saf
- monster/cr/6
- monster/size/medium
- monster/type/aberration
location: 
condition: healthy
images: 
- https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/korsoth-vastikan.jpg
relationships: []
aliases: [Korsoth Vastikan]
pronounced: 
race: 
gender: 
age: 
alignment: Chaotic
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
partyRelationships: {}
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('imageCarousel', {current: dv.current()})
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
*Source: Strongholds and Followers p. 168*

Once a rival to Maladar Dictum, then-Duke Vastikan was brought low by a mob of ratcatchers. He returned to the Sea of Eternal Change, licked his wounds, and conferred with the ghosts of forgotten sages chasing the lore of formkilling.

Now, armed with this ancient knowledge, Vastikan has clawed his way back into the king and queen's favor. He is a hunter, a thief, and a master of deceit. His voice is a low whisper, a sneer. He does not like the Mundane World, finding it overly suffused with law.

## Tactics

It takes a lot to trigger Formkiller. Vastikan must hit a target three times out of four, and the target has to fail a Constitution saving throw.

But if they fail, the results are interesting. According to the rules, the change lasts only 1 hour. According to the rules. According to these rules I made up. I mean, all rules are made up, aren't they? How long would Formkiller last if you made the rules? It's your game!

For extra spice, consider using the original 1970s reincarnation rules. 2% chance of turning into a raccoon! 4% chance of turning into a hawk! 3% chance you're a badger ^[Badger? We ain't got no badger. We don't need no badgers. I don't have to show you any stinkin' badgers!]!

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

## Stats
```statblock
"name": "Korsoth Vastikan (SaF)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic"
"ac": !!int "16"
"ac_class": "[studded leather armor](compendium/items/studded-leather-armor.md)"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "4"
"stats":
  - !!int "13"
  - !!int "18"
  - !!int "14"
  - !!int "11"
  - !!int "13"
  - !!int "12"
"speed": "40 ft."
"saves":
  - "dexterity": "+7"
  - "wisdom": "+4"
"skillsaves":
  - "name": "[Acrobatics](/compendium/rules/skills.md#Acrobatics)"
    "desc": "+7"
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Investigation](/compendium/rules/skills.md#Investigation)"
    "desc": "+3"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+7"
  - "name": "[Survival](/compendium/rules/skills.md#Survival)"
    "desc": "+4"
"damage_resistances": "psychic"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [petrified](/compendium/rules/conditions.md#Petrified)"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Deep Speech, Primordial"
"cr": "6"
"traits":
  - "desc": "The Court of All Flesh are beings of pure chaos. Because their minds\
      \ are pure disorder, they cannot be driven mad or [charmed](/compendium/rules/conditions.md#Charmed)\
      \ and any attempts to magically compel their behavior fails."
    "name": "Everchanging Changers"
  - "desc": "Vastikan is immune to any spell or effect that would alter his form."
    "name": "Formless Shape"
  - "desc": "If Vastikan hits a target with three arrows in one round, the target\
      \ must make a DC 12 Constitution saving throw or lose its native form. Roll\
      \ on the Reincarnation table to determine the target's new form. The target\
      \ reverts to its original form after 1 hour. ^[Or does it?] A target that succeeds\
      \ on its saving throw becomes immune to Formkiller for 24 hours."
    "name": "Formkiller"
"actions":
  - "desc": "Vastikan makes four longbow attacks."
    "name": "Multiattack"
  - "desc": "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit:\
      \ 8 (1d8 + 4) piercing damage."
    "name": "Longbow"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) piercing damage."
    "name": "Shortsword"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Korsoth%20Vastikan.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes