---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
image: compendium/bestiary/npc/img/sul-khatesh.webp
relationships: []
tags: 
aliases: [Sul Khatesh]
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
*Source: Eberron: Rising from the Last War p. 304*

Sul Khatesh is known as the Keeper of Secrets and the Queen of Shadows. She embodies the fears and superstitions surrounding magic, from malevolent warlocks to mad wizards, from deadly curses to magical power that draws those who wield it deeper into darkness.

Sul Khatesh is subtler than the Rage of War. She empowers warlocks and whispers secrets into the minds of wizards and artificers, helping them master spells and create relics they could never shape on their own. But few of those inspired by Sul Khatesh understand what forces they are dealing with, or recognize the danger inherent in her gifts.

## The Queen of Shadows

An entity of shadow, Sul Khatesh can assume any form. Her favored shape is a twelve-foot-tall humanoid figure draped in a flowing, hooded robe formed of swirling mist and clinging shadow.

## Minions

Most of Sul Khatesh's followers are wizards and warlocks, and she is one of the primary patrons for warlocks in Khorvaire. Covens devoted to the Queen of Shadows use dark magic and fear to dominate whole communities, while isolated warlocks make pacts with Sul Khatesh to pursue power and revenge. By sharing her power in this way, the overlord perpetuates the image of the evil warlock, inciting fear that strengthens the Keeper of Secrets even more.

Sul Khatesh's chief agent among the Lords of Dust is the rakshasa Hektula, who serves as the librarian in the demonic citadel of Ashtakala. Known as the First Scribe, Hektula presides over an immense trove of arcane knowledge and artifacts.

## Immortal Nature

An overlord doesn't require air, food, drink or sleep. It also can't die permanently. Upon its death, it reforms elsewhere in the multiverse and becomes active again at a time set by the DM.

In the first days of the world, the children of Khyber rose from the darkness to reign over Eberron. The greatest among them were the overlords, who held dominion over a world of fear, war, and death until the children of Eberron and Siberys rose up against them. Armies of dragons fought against the fiends of Khyber. And though the overlords couldn't be destroyed, the couatl sacrificed their lives to build a prison of celestial light: a silver flame that bound the overlords in Khyber once more. These bonds have held for countless generations, but the overlords still yearn to break free and reclaim the world above.

As long as the overlords are bound by the Silver Flame, they can't physically manifest in the world. But each overlord embodies a particular aspect of evil, which grows in strength as their servants—the fiends known as the Lords of Dust—scheme to unleash their ancient masters. The overlords gain strength when mortals embrace the dark paths laid down for them. And as they grow stronger, they gain more influence.

Some thirty overlords are bound in Khyber. Two are described here: Rak Tulkhesh and Sul Khatesh, both of whom remain imprisoned and can't take physical form. The stat blocks provided here reflect the powers they would wield if they were ever unleashed upon the world.

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
"name": "Sul Khatesh (ERLW)"
"size": "Large"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "22"
"hp": !!int "475"
"hit_dice": "50d10 + 200"
"stats":
- !!int "18"
- !!int "21"
- !!int "19"
- !!int "30"
- !!int "22"
- !!int "25"
"speed": "40 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "15"
  "Wisdom": !!int "14"
  "Intelligence": !!int "18"
  "Constitution": !!int "12"
"skillsaves":
  "Religion": !!int "18"
  "Insight": !!int "14"
  "History": !!int "18"
  "Arcana": !!int "18"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed), [exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#frightened), [paralyzed](/compendium/rules/conditions.md#paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#petrified), [poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "truesight 120 ft., passive Perception 16"
"languages": "all, telepathy 150 ft."
"cr": "28"
"traits":
- "desc": "Sul Khatesh's spellcasting ability is Intelligence (spell save DC 26, dice:\
    \ d20+18 (+18 to hit) with spell attacks). She can innately cast the following\
    \ spells, requiring no material components:\n\nAt will: [counterspell](compendium/spells/counterspell.md),\
    \ [detect magic](compendium/spells/detect-magic.md), [detect thoughts](compendium/spells/detect-thoughts.md),\
    \ [dispel magic](compendium/spells/dispel-magic.md), [eyebite](compendium/spells/eyebite.md),\
    \ [fireball](compendium/spells/fireball.md), [lightning bolt](compendium/spells/lightning-bolt.md),\
    \ [shield](compendium/spells/shield.md)\n\n1/day each: [foresight](compendium/spells/foresight.md),\
    \ [gate](compendium/spells/gate.md), [power word kill](compendium/spells/power-word-kill.md),\
    \ [teleport](compendium/spells/teleport.md)\n\n3/day each: [chain lightning](compendium/spells/chain-lightning.md),\
    \ [create undead](compendium/spells/create-undead.md), [dream](compendium/spells/dream.md),\
    \ [hold monster](compendium/spells/hold-monster.md), [mass suggestion](compendium/spells/mass-suggestion.md),\
    \ [scrying](compendium/spells/scrying.md)"
  "name": "innate"
- "desc": "If Sul Khatesh fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Sul Khatesh has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Sul Khatesh has advantage on Constitution saving throws to maintain [concentration](/compendium/rules/conditions.md#concentration)."
  "name": "Master of Magic"
"actions":
- "desc": "Sul Khatesh makes four attacks with Arcane Blast."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: dice: d20+18 (+18 to hit), range 120 ft., one\
    \ target. Hit: dice: 1d10 + 10|avg (1d10 + 10) force damage."
  "name": "Arcane Blast"
- "desc": "Melee Weapon Attack: dice: d20+12 (+12 to hit), reach 5 ft., one target.\
    \ Hit: dice: 5d12 + 4|avg (5d12 + 4) force damage."
  "name": "Magic Staff"
- "desc": "Sul Khatesh conjures orbs of magical energy that plummet to the ground\
    \ at three different points she can see within 1 mile of her. Each creature in\
    \ a 40-foot-radius sphere centered on each point must make a DC 26 Dexterity saving\
    \ throw, taking dice: 11d12|avg (11d12) force damage on a failed save or half\
    \ as much damage on a successful one. A creature in the area of more than one\
    \ arcane burst is affected only once. The area of each arcane burst then acts\
    \ as an [antimagic field](compendium/spells/antimagic-field.md) for 1 hour. Sul\
    \ Khatesh and spells she casts are unaffected by these fields."
  "name": "Arcane Cataclysm (Recharges after a Long Rest)"
- "desc": "Sul Khatesh magically polymorphs into a humanoid, beast, or giant that\
    \ has a challenge rating no higher than her own, or back into her true form. She\
    \ reverts to her true form if she dies. Any equipment she is wearing or carrying\
    \ is absorbed or borne by the new form (Sul Khatesh's choice).\n\nIn a new form,\
    \ Sul Khatesh retains her alignment, hit points, Hit Dice, ability to speak, proficiencies,\
    \ Legendary Resistance, and Intelligence, Wisdom, and Charisma scores, as well\
    \ as this action. Her statistics and capabilities are otherwise replaced by those\
    \ of the new form, except any class features or legendary actions of that form."
  "name": "Change Shape"
"legendary_actions":
- "desc": "Sul Khatesh makes two attacks with her Arcane Blast or one attack with\
    \ her magic staff."
  "name": "Attack"
- "desc": "Sul Khatesh targets a creature within 120 feet of her who is concentrating\
    \ on a spell. The target must succeed on a DC 26 Constitution saving throw or\
    \ its [concentration](/compendium/rules/conditions.md#concentration) is broken\
    \ on the spell, and Sul Khatesh gains 5 temporary hit points per level of that\
    \ spell."
  "name": "Consume Magic (Costs 2 Actions)"
- "desc": "Sul Khatesh whispers an arcane secret into the mind of a creature she can\
    \ see within 60 feet of her. The target must succeed on a DC 26 Wisdom saving\
    \ throw or expend one of its spell slots of 3rd level or lower and deal dice:\
    \ 4d12|avg (4d12) force damage to each creature within 30 feet of it. A creature\
    \ that fails the saving throw but can't expend a spell slot is instead [stunned](/compendium/rules/conditions.md#stunned)\
    \ until the end of its next turn."
  "name": "Maddening Secrets (Costs 3 Actions)"
"source":
- "ERLW"
"image": "compendium/bestiary/npc/token/sul-khatesh-erlw.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes