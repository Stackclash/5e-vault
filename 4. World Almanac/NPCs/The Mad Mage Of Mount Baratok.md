---
obsidianUIMode: preview
statblock: inline
pronounced: 
race: 
sex: male
age: 
alignment: 
condition: healthy
occupation: 
group: 
religions: 
location: 
personality: ""
ideal: 
bond: 
flaw: 
goals: 
likes: 
dislikes: 
tags:
- compendium/src/5e/cos
- monster/cr/12
- monster/size/medium
- monster/type/humanoid/human
aliases: ["The Mad Mage of Mount Baratok"]
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  "`INPUT[text:pronounced]`"
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Sex** | `INPUT[inlineSelect(option(male),option(female)):sex]` |
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
> [!info|bg-c-purple]- Overview
TBD

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

## Stats
```statblock
"name": "The Mad Mage of Mount Baratok (CoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Neutral"
"ac": !!int "12"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "History": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "damage from spells; nonmagical bludgeoning, piercing, slashing\
  \ (from stoneskin)"
"senses": "passive Perception 12"
"languages": "any six languages"
"cr": "12"
"traits":
- "desc": "The mad mage is an 18th-level spellcaster. His spellcasting ability is\
    \ Intelligence (spell save DC 17, dice: d20+9 (+9 to hit) with spell attacks).\
    \ He can cast [[5. Mechanics/Spells/Disguise Self.md\|disguise self]] and [[5. Mechanics/Spells/Invisibility.md\|invisibility]]\
    \ at will and has the following wizard spells prepared:\n\nAt will: [disguise\
    \ self](compendium/spells/disguise-self.md), [[5. Mechanics/Spells/Invisibility.md\|invisibility]]\n\
    \nCantrips (at will): [[5. Mechanics/Spells/Fire Bolt.md\|fire bolt]], [[5. Mechanics/Spells/Light.md\|light]],\
    \ [[5. Mechanics/Spells/Mage Hand.md\|mage hand]], [[5. Mechanics/Spells/Prestidigitation.md\|prestidigitation]],\
    \ [[5. Mechanics/Spells/Shocking Grasp.md\|shocking grasp]]\n\n1st level (4 slots):\
    \ [[5. Mechanics/Spells/Detect Magic.md\|detect magic]], [[5. Mechanics/Spells/Mage Armor.md\|mage armor]],\
    \ [[5. Mechanics/Spells/Magic Missile.md\|magic missile]], [[5. Mechanics/Spells/Shield.md\|shield]]\n\
    \n2nd level (3 slots): [[5. Mechanics/Spells/Mirror Image.md\|mirror image]],\
    \ [[5. Mechanics/Spells/Misty Step.md\|misty step]], [[5. Mechanics/Spells/Web.md\|web]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Counterspell.md\|counterspell]],\
    \ [[5. Mechanics/Spells/Fly.md\|fly]], [[5. Mechanics/Spells/Lightning Bolt.md\|lightning bolt]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Mordenkainens Faithful Hound.md\|Mordenkainen's faithful hound]],\
    \ [[5. Mechanics/Spells/Polymorph.md\|polymorph]], [[5. Mechanics/Spells/Stoneskin.md\|stoneskin]]\n\
    \n5th level (3 slots): [[5. Mechanics/Spells/Bigbys Hand.md\|Bigby's hand]], [cone\
    \ of cold](compendium/spells/cone-of-cold.md), [[5. Mechanics/Spells/Scrying.md\|scrying]]\n\
    \n6th level (1 slots): [[5. Mechanics/Spells/True Seeing.md\|true seeing]]\n\n\
    7th level (1 slots): [[5. Mechanics/Spells/Mordenkainens Magnificent Mansion.md\|Mordenkainen's magnificent mansion]]\n\
    \n8th level (1 slots): [[5. Mechanics/Spells/Mind Blank.md\|mind blank]]\n\n9th\
    \ level (1 slots): [[5. Mechanics/Spells/Time Stop.md\|time stop]]"
  "name": "spells"
- "desc": "The Mad Mage has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/the-mad-mage-of-mount-baratok.png"
```
^statblock

## Acquaintances
> [!column|dataview] Acquaintances
>> [!metadata|text-Center bg-c-green]- Friends & Family
>> TBD
>
>> [!metadata|text-Center bg-c-red]- Rivals
>> TBD
>

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes