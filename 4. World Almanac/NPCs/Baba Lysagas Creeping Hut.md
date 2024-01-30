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
> **Pronounced:**  `INPUT[text:pronounced]`
> ![[4. World Almanac/NPCs/img/baba-lysagas-creeping-hut.webp|cover hm-sm]] 
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
Baba Lysaga built a hut atop the rotting stump of a giant tree that was felled long ago. It was only after she embedded a magic gemstone in the hut that the whole thing was imbued with a semblance of life. When she wills it to do so, the hut pulls its gigantic roots free of the earth and shambles around like a spidery behemoth, shaking the ground with every step. The hut attacks with its flailing and stomping roots. It can also use its roots to fling large rocks.

## Hut Interior

The hut is a 15-foot-square, ramshackle wooden building with a gently sloping thatch roof. Its furnishings have been bolted to the floor, since the hut lurches from side to side when it walks.

## Heart of the Hut

The gemstone that has given life to Baba Lysaga's hut was previously buried in the Wizard of Wines vineyard. The gem was one of three imbued with life-giving magic that made the grapevines in the vineyard healthier, guaranteeing the finest wines. Baba Lysaga stole one of the gems and perverted its magic, using it instead to animate her wooden hut.

Removing the gem from the hut renders the hut incapacitated. That task is easier said than done, however. The glowing green gem is contained in a cavity in the stump, beneath the rotted floorboards of the hut. The floorboards can be ripped up with a successful DC 14 Strength check or smashed by dealing 10 damage to them. Once the floorboards are out of the way, a creature can reach into the cavity and snatch the gem. But if someone attempts this while the hut is alive, the cavity sprouts wooden teeth, becoming a mouth that bites anything that tries to remove the gem; a creature trying to remove the gem must make a DC 20 Dexterity saving throw. On a successful save, the creature claims the stone without getting bitten. On a failed save, the creature is bitten for `dice: 3d6|avg` (`3d6`) piercing damage and fails to obtain the gem.

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
"name": "Baba Lysaga's Creeping Hut (CoS)"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "16"
"hp": !!int "263"
"hit_dice": "17d20 + 85"
"stats":
- !!int "26"
- !!int "7"
- !!int "20"
- !!int "1"
- !!int "3"
- !!int "3"
"speed": "30 ft."
"saves":
  "Charisma": !!int "0"
  "Wisdom": !!int "0"
  "Constitution": !!int "9"
"damage_immunities": "poison, psychic"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, paralyzed,\
  \ petrified, prone"
"senses": "blindsight 120 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "11"
"traits":
- "desc": "An animated object doesn't require air, food, drink, or sleep.\n\nThe magic\
    \ that animates an object is dispelled when the construct drops to 0 hit points.\
    \ An animated object reduced to 0 hit points becomes inanimate and is too damaged\
    \ to be of much use or value to anyone."
  "name": "Constructed Nature"
- "desc": "The hut is incapacitated while the magic gem that animates it is in the\
    \ area of an antimagic field. If targeted by dispel magic, the hut must succeed\
    \ on a Constitution saving throw against the caster's spell save DC or fall unconscious\
    \ for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "The hut deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The hut makes three attacks with its roots. It can replace one of these\
    \ attacks with a rock attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12 to hit), reach 60 ft., one target.\
    \ Hit: dice: 4d10 + 8|avg (4d10 + 8) bludgeoning damage."
  "name": "Root"
- "desc": "Ranged Weapon Attack: dice: d20+12 (+12 to hit), range 120 ft., one\
    \ target. Hit: dice: 3d8 + 8|avg (3d8 + 8) bludgeoning damage."
  "name": "Rock"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/baba-lysagas-creeping-hut.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes