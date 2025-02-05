---
obsidianUIMode: preview
statblock: inline
tags:
  - compendium/src/5e/cos
  - monster/cr/6
  - monster/size/medium
  - monster/type/undead
  - npc
location: null
condition: healthy
images:
  - 4. World Almanac/NPCs/img/sir-godfrey-gwilym.webp
relationships: []
aliases: []
pronounced: sir GOD-free GWIL-im
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: null
alignment: Lawful Evil
occupation: []
groups:
  - Order of the Silver Dragon
religions: []
personality: 'Stoic, honorable, deeply melancholic'
ideal: Redemption for the Order and peace for Barovia are my only pursuits.
bond: >-
  His unyielding loyalty to the Order of the Silver Dragon and the memory of
  Argynvost
flaw: >-
  His single-minded focus on the order's redemption can sometimes blind him to
  broader concerns or simpler joys
goals: >-
  To restore the honor of the Order of the Silver Dragon, to find peace in
  fulfilling his oath
likes: >-
  Acts of bravery and honor, the legacy of the Silver Dragon, those who seek
  justice
dislikes: >-
  Cowardice, betrayal, Strahd and his minions, the failure of the Order to
  protect Barovia
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
*Source: Curse of Strahd p. 139*

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
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "Sir Godfrey Gwilym (COS)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "13"
"ac_class": "broken chainmail"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"stats":
- !!int "18"
- !!int "14"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Strength": !!int "7"
  "Constitution": !!int "7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "6"
"traits":
- "desc": "Sir Godfrey is a 16th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 14, +6 to hit with spell attacks). He has the following paladin\
    \ spells prepared:\n\n1st level (4 slots): [[5. Mechanics/Spells/Command.md|command]],\
    \ [[5. Mechanics/Spells/Divine Favor.md|divine favor]], [[5. Mechanics/Spells/Thunderous Smite.md|thunderous smite]]\n\
    \n2nd level (3 slots): [[5. Mechanics/Spells/Branding Smite.md|branding smite]],\
    \ [[5. Mechanics/Spells/Magic Weapon.md|magic weapon]]\n\n3rd level (3 slots):\
    \ [[5. Mechanics/Spells/Blinding Smite.md|blinding smite]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]]\n\
    \n4th level (2 slots): [[5. Mechanics/Spells/Staggering Smite.md|staggering smite]]"
  "name": "Spellcasting"
- "desc": "The knight regains 10 hit points at the start of its turn. If the knight\
    \ takes fire or radiant damage, this trait doesn't function at the start of the\
    \ knight's next turn. The knight's body is destroyed only if it starts its turn\
    \ with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- "desc": "When the knight's body is destroyed, its soul lingers. After 24 hours,\
    \ the soul inhabits and animates another humanoid corpse on the same plane of\
    \ existence and regains all its hit points. While the soul is bodiless, a [[5. Mechanics/Spells/Wish.md|wish]]\
    \ spell can be used to force the soul to go to the afterlife and not return."
  "name": "Rejuvenation"
- "desc": "The knight is immune to effects that turn undead."
  "name": "Turn Immunity"
- "desc": "The knight knows the distance to and direction of any creature against\
    \ which it seeks revenge, even if the creature and the knight are on different\
    \ planes of existence. If the creature being tracked by the knight dies, the knight\
    \ knows."
  "name": "Vengeful Tracker"
"actions":
- "desc": "The knight makes two longsword attacks or two fist attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d10\
    \ + 4) slashing damage. If the target is a creature against which the knight has\
    \ sworn vengeance, the target takes an extra 14 (4d6) slashing damage."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6\
    \ + 4) bludgeoning damage. If the target is a creature against which the knight\
    \ has sworn vengeance, the target takes an extra 14 (4d6) bludgeoning damage.\
    \ Instead of dealing damage, the knight can grapple the target (escape DC 14)\
    \ provided the target is Large or smaller."
  "name": "Fist"
- "desc": "The knight targets one creature it can see within 30 feet of it and against\
    \ which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw.\
    \ On a failure, the target is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ until the knight deals damage to it, or until the end of the knight's next turn.\
    \ When the paralysis ends, the target is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ of the knight for 1 minute. The [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ target can repeat the saving throw at the end of each of its turns, with disadvantage\
    \ if it can see the knight, ending the [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ condition on itself on a success."
  "name": "Vengeful Glare"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/sir-godfrey-gwilym-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
