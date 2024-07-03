---
obsidianUIMode: preview
statblock: inline
tags:
  - compendium/src/5e/cos
  - monster/cr/5
  - monster/size/medium
  - monster/type/fiend
  - npc
location: null
condition: healthy
image: null
relationships: []
aliases: []
pronounced: null
race: null
gender: null
age: null
alignment: Neutral Evil
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
*Source: Curse of Strahd p. 48*

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
> [!div | no-t clean txt-c]
> ```dataviewjs
> await dv.view("npcRelationships", { current: dv.current() })
> ```

## Stats
```statblock
"name": "Morgantha"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "5"
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Abyssal, Common, Infernal, Primordial"
"cr": "5"
"traits":
- "desc": "Morgantha's innate spellcasting ability is Charisma (spell save DC 14,\
    \ +6 to hit with spell attacks). She can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]]\n\n2/day each: [[5. Mechanics/Spells/Plane Shift.md|plane\
    \ shift]] (self only), [[5. Mechanics/Spells/Ray Of Enfeeblement.md|ray of enfeeblement]],\
    \ [[5. Mechanics/Spells/Sleep.md|sleep]]"
  "name": "Innate Spellcasting"
- "desc": "Morgantha has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "A night hag carries two very rare magic items that she must craft for herself.\
    \ If either object is lost, the night hag will go to great lengths to retrieve\
    \ it, as creating a new tool takes time and effort.\n\nHeartstone: This lustrous\
    \ black gem allows a night hag to become ethereal while it is in her possession.\
    \ The touch of a heartstone also cures any disease. Crafting a heartstone takes\
    \ 30 days.\n\nSoul Bag: When an evil humanoid dies as a result of a night hag's\
    \ Nightmare Haunting, Morgantha catches the soul in this black sack made of stitched\
    \ flesh. A soul bag can hold only one evil soul at a time, and only the night\
    \ hag who crafted the bag can catch a soul with it. Crafting a soul bag takes\
    \ 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
  "name": "Night Hag Items"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws (Hag Form Only)"
- "desc": "Morgantha magically polymorphs into a Small or Medium female humanoid,\
    \ or back into her true form. Her statistics are the same in each form. Any equipment\
    \ she is wearing or carrying isn't transformed. She reverts to her true form if\
    \ she dies."
  "name": "Change Shape"
- "desc": "Morgantha magically enters the Ethereal Plane from the Material Plane,\
    \ or vice versa. To do so, Morgantha must have a heartstone in her possession."
  "name": "Etherealness"
- "desc": "While on the Ethereal Plane, Morgantha magically touches a sleeping humanoid\
    \ on the Material Plane. A [[5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]]\
    \ spell cast on the target prevents this contact, as does a magic circle. As long\
    \ as the contact persists, the target has dreadful visions. If these visions last\
    \ for at least 1 hour, the target gains no benefit from its rest, and its hit\
    \ point maximum is reduced by 5 (1d10). If this effect reduces the target's hit\
    \ point maximum to 0, the target dies, and if the target was evil, its soul is\
    \ trapped in Morgantha's soul bag. The reduction to the target's hit point maximum\
    \ lasts until removed by the  [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
    \ spell or similar magic."
  "name": "Nightmare Haunting (1/Day)"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/morgantha-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
