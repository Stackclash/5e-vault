---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: >-
  https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/lord-rall.jpg
relationships: []
tags:
  - npc
aliases:
  - Lord Rall
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
*Source: Strongholds and Followers p. 171*

The Vizier of the Court, Lord Rall is Maladar's personal wizard. Once Lord Rall had a more conventional form, but he forgot it somewhere and never seemed to notice. As he demonstrates in battle, he can reform himself out of any old organs you may have lying around.

Rall is precise and surgical. Tactical. He likes experimenting on his enemies. He is fascinated by creatures with one set form. Creatures who find their identities wrapped up in their shape. How strange, Lord Rall thinks. Imagine what a different person you would be if you wore your brains on the outside. Or if you had many fewer, or many more, limbs. Only fools fear change.

Rall has no ambition, does not plot or scheme. For this reason he does not rise higher than vizier to this, the lower court. But neither does he need fear betrayal.

## Tactics

Rall is a potent wizard. Unlike the Queen of Bone, Rall is not particularly interested in helping his allies, preferring to drop cloudkill on his enemies or lock them in place with black tentacles.

Lord Rall channels his power through The Staff of Changing ^[Like all the servitor items, it possesses no magic of its own, so the players don't suddenly come into possession of a powerful artifact if they kill Lord Rall.], molding enemies to suit his terrible whims. Because of his deep understanding of form and changing, he does not need to concentrate on this. He fully expects to be able to turn every enemy in the battle into slimy things, given time.

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
"name": "Lord Rall"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic"
"ac": !!int "12"
"ac_class": "15 with [[5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "30 ft., fly 10 ft. (hover)"
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "5"
  "Intelligence": !!int "8"
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "5"
  "History": !!int "8"
  "Arcana": !!int "8"
"damage_resistances": "psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]]"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Deep Speech, Primordial"
"cr": "8"
"traits":
- "desc": "Lord Rall is a 10th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 16, +8 to hit with spell attacks). He has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]], [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Mage Armor.md|mage armor]], [[5. Mechanics/Spells/Magic Missile.md|magic\
    \ missile]], [[5. Mechanics/Spells/Sleep.md|sleep]]\n\
    \n2nd level (3 slots): [[5. Mechanics/Spells/Ray Of Enfeeblement.md|ray of enfeeblement]],\
    \ [[5. Mechanics/Spells/Mirror Image.md|mirror image]]\n\n3rd level (3 slots):\
    \ [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]], [[5. Mechanics/Spells/Haste.md|haste]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Evards Black Tentacles.md|black tentacles]],\
    \ [[5. Mechanics/Spells/Blight.md|blight]]\n\n5th level (2 slots): [[5. Mechanics/Spells/Cloudkill.md|cloudkill]]"
  "name": "Spellcasting"
- "desc": "The Court of All Flesh are beings of pure chaos. Because their minds are\
    \ pure disorder, they cannot be driven mad or [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ and any attempts to magically compel their behavior fails."
  "name": "Everchanging Changers"
- "desc": "Lord Rall is immune to any spell or effect that would alter his form."
  "name": "Formless Shape"
- "desc": "As an action, Lord Rall can polymorph into a Small or Medium creature or\
    \ back into his true form. His statistics, other than his size, are the same in\
    \ each form. Any worn or carried equipment isn't transformed. He reverts to his\
    \ true form if he dies."
  "name": "Shapechanger"
"actions":
- "desc": "Lord Rall makes two melee attacks with the Staff of Changing."
  "name": "Multiattack"
- "desc": "Rall's staff remakes a target into any shape he desires. He casts polymorph\
    \ from it as an action. The range is 30 feet, and the Wisdom saving throw has\
    \ a DC of 16. Lord Rall does not need to concentrate on this spell to maintain\
    \ it."
  "name": "The Staff of Changing (Recharge 5-6)"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 8 (2d6\
    \ + 1) bludgeoning damage, or 10 (2d8 + 1) bludgeoning damage if wielded with\
    \ two hands."
  "name": "Greatstaff"
- "desc": "When he drops to 0 hit points, Lord Rall can reform himself from any corpse\
    \ within 120 feet instead of falling [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]].\
    \ Lord Rall does not need to see the corpse in order to use it. The process happens\
    \ in an instant, and the newly formed Lord Rall appears with only half of his\
    \ maximum hit points."
  "name": "Any Pile of Organs Will Do (Recharge 6-6)"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Lord\
  \ Rall.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
