---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
relationships:
  - Luvash|brother
tags: 
aliases: []
pronounced: 
race: 
gender: 
age: 
alignment: Neutral Evil
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
> ![[4. World Almanac/NPCs/img/arrigal.webp|cover hm-sm]] 
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
"name": "Arrigal (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "11"
- !!int "16"
- !!int "14"
- !!int "13"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "6"
  "Intelligence": !!int "4"
"skillsaves":
  "Deception": !!int "3"
  "Stealth": !!int "9"
  "Perception": !!int "3"
  "Acrobatics": !!int "6"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Thieves' cant plus any two languages"
"cr": "8"
"traits":
- "desc": "During its first turn, Arrigal has advantage on attack rolls against any\
    \ creature that hasn't taken a turn. Any hit Arrigal scores against a surprised\
    \ creature is a critical hit."
  "name": "Assassinate"
- "desc": "If Arrigal is subjected to an effect that allows it to make a Dexterity\
    \ saving throw to take only half damage, Arrigal instead takes no damage if it\
    \ succeeds on the saving throw, and only half damage if it fails."
  "name": "Evasion"
- "desc": "Arrigal deals an extra dice: 4d6|avg (4d6) damage when it hits a target\
    \ with a weapon attack and has advantage on the attack roll, or when the target\
    \ is within 5 feet of an ally of Arrigal that isn't incapacitated and Arrigal\
    \ doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "Arrigal makes two shortsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) piercing damage, and the target must\
    \ make a DC 15 Constitution saving throw, taking dice: 7d6|avg (7d6) poison\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice: d20+6 (+6 to hit), range 80/320 ft., one\
    \ target. Hit: dice: 1d8 + 3|avg (1d8 + 3) piercing damage, and the target\
    \ must make a DC 15 Constitution saving throw, taking dice: 7d6|avg (7d6)\
    \ poison damage on a failed save, or half as much damage on a successful one."
  "name": "Light Crossbow"
- "desc": "11\n\n- The target is unable to perform a certain kind of act involving\
    \ fine motor control, such as tying knots, writing, playing an instrument, sewing,\
    \ or casting spells that have somatic components. When this curse ends, the Vistana\
    \ takes dice: 1d6|avg (1d6) psychic damage.  \n- The target's appearance changes\
    \ in a sinister yet purely cosmetic way. For example, the curse can place a scar\
    \ on the target's face, turn the target's teeth into yellow fangs, or give the\
    \ target bad breath. When this curse ends, the Vistana takes dice: 1d6|avg (1d6)\
    \ psychic damage.  \n- A nonmagical item in the target's possession (chosen by\
    \ the DM) disappears and can't be found until the curse ends. The lost item can\
    \ weigh no more than 1 pound. When this curse ends, the Vistana takes dice: 1d6|avg\
    \ (1d6) psychic damage.  \n- The target gains vulnerability to a damage type\
    \ of the Vistana's choice. When this curse ends, the Vistana takes dice: 3d6|avg\
    \ (3d6) psychic damage.  \n- The target has disadvantage on ability checks and\
    \ saving throws tied to one ability score of the Vistana's choice. When this curse\
    \ ends, the Vistana takes dice: 3d6|avg (3d6) psychic damage.  \n- The target's\
    \ attunement to one magic item (chosen by the DM) ends, and the target can't attune\
    \ to the chosen item until the curse ends. When this curse ends, the Vistana takes\
    \ dice: 5d6|avg (5d6) psychic damage.  \n- The target is blinded, deafened,\
    \ or both. When this curse ends, the Vistana takes dice: 5d6|avg (5d6) psychic\
    \ damage.  \n\nThe curse lasts until ended with a greater restoration spell, a\
    \ remove curse spell, or similar magic. It doesn't end when the target dies. If\
    \ a cursed target is returned to life, the curse remains in effect."
  "name": "Curse (Recharges After a Long Rest)"
- "desc": "11\n\nA Vistana who uses Evil Eye can't use it again before finishing a\
    \ short or long rest. Once a target succeeds on a saving throw against a Vistana's\
    \ Evil Eye, it is immune to the Evil Eye of all Vistani for 24 hours."
  "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/arrigal.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes