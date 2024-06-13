---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: 4. World Almanac/NPCs/img/bael.webp
relationships: []
tags:
  - npc
aliases:
  - Bael
pronounced: null
race: null
gender: null
age: null
alignment: Lawful Evil
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 54, Mordenkainen's Tome of Foes p. 170*

With the Blood War between devils and demons raging for eons and no end in sight, opportunities abound for ambitious archdevils to win fame, glory, and power in the ongoing struggle. Duke Bael, one of Mammon's most important vassals, has won fame and acclaim for his victories. Charged with leading sixty-six companies of [[5. Mechanics/Bestiary/Fiend/Barbed Devil.md|barbed devils]], Bael has proven to be a tactical genius, earning esteem for himself and his master as a result of victory after victory over the abyssal host. Mammon relies on Bael to safeguard his holdings because of Bael's battle acumen. During a time when so many other archdevils have lost their positions, Mammon has never been ousted, which is a testament to Bael's skill on the battlefield.

For his accomplishments, Bael has been granted the title of Bronze General. His accolades notwithstanding, he has had a difficult time navigating the quagmire of infernal politics. His critics call him naive, though never to his face. His primary interest has always been leading soldiers in battle, so he finds it frustrating to have his ambitions of ascending to a higher rank constantly stymied by politically shrewd rivals.

Bael prefers to make servants out of his adversaries, and mortals bound to his service earn their wretched place by falling victim to his superior stratagems. Bael gladly spares the lives of those he defeats—if they pledge their souls and service to him. Demons are an exception; although he is willing to corrupt almost any other foes, he always destroys demons he defeats.

Bael also welcomes mortals into his service if they can provide him with an advantage in his politicking. He recruits savvy individuals and relies on them to represent his interests at Mammon's court, which leaves him free to pursue his battle lust.

Despite his lack of interest in affairs outside battle, or perhaps because of it, Bael has gained a small following of cultists. Those who worship at his altar call him the King of Hell, and the most deluded believe that he is the lord of all devils. In arcane circles, certain writings, such as the dreaded Book of Fire, say that Bael revealed the invisibility spell to the world, though some scholars of magic hotly refute such claims. Bael is sometimes depicted as a toad, a cat, a human, or some combination of these forms.

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
"name": "Bael"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate]]"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "24"
- !!int "17"
- !!int "20"
- !!int "21"
- !!int "24"
- !!int "24"
"speed": "30 ft."
"saves":
  "Charisma": !!int "13"
  "Dexterity": !!int "9"
  "Intelligence": !!int "11"
  "Constitution": !!int "11"
"skillsaves":
  "Intimidation": !!int "13"
  "Perception": !!int "13"
  "Persuasion": !!int "13"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 23"
"languages": "all, telepathy 120 ft."
"cr": "19"
"traits":
- "desc": "Bael casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt will:\
    \ [[5. Mechanics/Spells/Alter Self.md|alter self]] (can become Medium), [[5. Mechanics/Spells/Charm Person.md|charm person]],\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
    \ [[5. Mechanics/Spells/Major Image.md|major image]]\n\n1/day: [[5. Mechanics/Spells/Dominate Monster.md|dominate monster]]\n\
    \n3/day each: [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Fly.md|fly]],\
    \ [[5. Mechanics/Spells/Suggestion.md|suggestion]], [[5. Mechanics/Spells/Wall Of Fire.md|wall of fire]]"
  "name": "Spellcasting"
- "desc": "Any creature, other than a devil, that starts its turn within 10 feet of\
    \ Bael must succeed on a DC 22 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ of him until the start of its next turn. A creature succeeds on this saving\
    \ throw automatically if Bael wishes it or if he is [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]."
  "name": "Dread"
- "desc": "If Bael fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Bael have advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "Bael regains 20 hit points at the start of his turn. If he takes cold or\
    \ radiant damage, this trait doesn't function at the start of his next turn. Bael\
    \ dies only if he starts his turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Bael makes two Hellish Morningstar attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, reach 20 ft., one target. Hit: 16\
    \ (2d8 + 7) force damage plus 9 (2d8) necrotic damage."
  "name": "Hellish Morningstar"
- "desc": "Each of Bael's allies within 60 feet of him can't be [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] until the end of\
    \ his next turn."
  "name": "Infernal Command"
- "desc": "Bael teleports, along with any equipment he is wearing or carrying, up\
    \ to 120 feet to an unoccupied space he can see."
  "name": "Teleport"
"legendary_actions":
- "desc": "Bael uses Spellcasting or Teleport."
  "name": "Fiendish Magic"
- "desc": "Bael uses Infernal Command."
  "name": "Infernal Command"
- "desc": "Bael makes one Hellish Morningstar attack."
  "name": "Attack (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "4. World Almanac/NPCs/token/bael-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
