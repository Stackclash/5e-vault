---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
image: compendium/bestiary/npc/img/sir-godfrey-gwilym.webp
relationships: []
tags: 
aliases: [Sir Godfrey Gwilym]
pronounced: 
race: 
gender: 
age: 
alignment: Lawful Evil
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
    str: add
  - type: input
    str: relationship
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
    str: remove
  - type: input
    str: relationship
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Sir Godfrey Gwilym (CoS)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "13"
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
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed), [exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#frightened), [paralyzed](/compendium/rules/conditions.md#paralyzed),\
  \ [poisoned](/compendium/rules/conditions.md#poisoned), [stunned](/compendium/rules/conditions.md#stunned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "6"
"traits":
- "desc": "Sir Godfrey is a 16th-level spellcaster. His spellcasting ability is Wisdom\
    \ (spell save DC 14, dice: d20+6 (+6 to hit) with spell attacks). He has the\
    \ following paladin spells prepared:\n\n1st level (4 slots): [command](compendium/spells/command.md),\
    \ [divine favor](compendium/spells/divine-favor.md), [thunderous smite](compendium/spells/thunderous-smite.md)\n\
    \n2nd level (3 slots): [branding smite](compendium/spells/branding-smite.md),\
    \ [magic weapon](compendium/spells/magic-weapon.md)\n\n3rd level (3 slots):\
    \ [blinding smite](compendium/spells/blinding-smite.md), [dispel magic](compendium/spells/dispel-magic.md)\n\
    \n4th level (2 slots): [staggering smite](compendium/spells/staggering-smite.md)"
  "name": "spells"
- "desc": "The knight regains 10 hit points at the start of its turn. If the knight\
    \ takes fire or radiant damage, this trait doesn't function at the start of the\
    \ knight's next turn. The knight's body is destroyed only if it starts its turn\
    \ with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- "desc": "When the knight's body is destroyed, its soul lingers. After 24 hours,\
    \ the soul inhabits and animates another humanoid corpse on the same plane of\
    \ existence and regains all its hit points. While the soul is bodiless, a [wish](compendium/spells/wish.md)\
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
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d10 + 4|avg (2d10 + 4) slashing damage. If the target is a\
    \ creature against which the knight has sworn vengeance, the target takes an extra\
    \ dice: 4d6|avg (4d6) slashing damage."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) bludgeoning damage. If the target is\
    \ a creature against which the knight has sworn vengeance, the target takes an\
    \ extra dice: 4d6|avg (4d6) bludgeoning damage. Instead of dealing damage,\
    \ the knight can grapple the target (escape DC 14) provided the target is Large\
    \ or smaller."
  "name": "Fist"
- "desc": "The knight targets one creature it can see within 30 feet of it and against\
    \ which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw.\
    \ On a failure, the target is [paralyzed](/compendium/rules/conditions.md#paralyzed)\
    \ until the knight deals damage to it, or until the end of the knight's next turn.\
    \ When the paralysis ends, the target is [frightened](/compendium/rules/conditions.md#frightened)\
    \ of the knight for 1 minute. The [frightened](/compendium/rules/conditions.md#frightened)\
    \ target can repeat the saving throw at the end of each of its turns, with disadvantage\
    \ if it can see the knight, ending the [frightened](/compendium/rules/conditions.md#frightened)\
    \ condition on itself on a success."
  "name": "Vengeful Glare"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/sir-godfrey-gwilym-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes