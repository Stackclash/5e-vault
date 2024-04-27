---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: 4. World Almanac/NPCs/img/demogorgon.webp
relationships: []
tags: null
aliases:
  - Demogorgon
pronounced: null
race: null
gender: null
age: null
alignment: Chaotic Evil
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 90, Mordenkainen's Tome of Foes p. 144*

> [!quote]- A quote from Mordenkainen  
> 
> Are two heads better than one? In Demogorgon's case, the two double the horror and the chaos.

Prince of Demons, the Sibilant Beast, and Master of the Spiraling Depths, Demogorgon is the embodiment of chaos, confusion, and destruction, seeking to corrupt all that is good and undermine order in the multiverse, to see everything dragged howling into the infinite depths of the Abyss.

The demon lord is a meld of different forms. He has a saurian lower body and clawed, webbed feet; suckered tentacles sprout from the shoulders of his great apelike torso, which is surmounted by two hideous simian heads named Aameul and Hathradiah. Their gaze brings bewilderment and confusion to any who confront them.

Similarly, the spiraling Y sign of Demogorgon's cult drives those who contemplate it for too long to delirium. As a result, all followers of the Prince of Demons break with reality sooner or later.

## Cultists of Demogorgon

> [!note]
> See the Cult of Demogorgon entry.

## Demogorgon's Lair

Demogorgon makes his lair in a palace called Abysm, found on a layer of the Abyss known as the Gaping Maw. Demogorgon's lair is a place of confusion and duality; the portion of the palace that lies above water takes the form of two serpentine towers, each crowned by a skull-shaped minaret. There, Demogorgon's heads contemplate the mysteries of the arcane while arguing about how best to obliterate their rivals. The bulk of this palace extends deep underwater, in chill and darkened caverns.

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
"name": "Demogorgon"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "464"
"hit_dice": "32d12 + 256"
"stats":
- !!int "29"
- !!int "14"
- !!int "26"
- !!int "20"
- !!int "17"
- !!int "25"
"speed": "50 ft., swim 50 ft."
"saves":
  "Charisma": !!int "15"
  "Dexterity": !!int "10"
  "Wisdom": !!int "11"
  "Constitution": !!int "16"
"skillsaves":
  "Insight": !!int "11"
  "Perception": !!int "19"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 29"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
- "desc": "Demogorgon casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt will:\
    \ [[5. Mechanics/Spells/Detect Magic.md|detect magic]], [[5. Mechanics/Spells/Major Image.md|major image]]\n\
    \n1/day each: [[5. Mechanics/Spells/Feeblemind.md|feeblemind]], [[5. Mechanics/Spells/Project Image.md|project image]]\n\
    \n3/day each: [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Fear.md|fear]],\
    \ [[5. Mechanics/Spells/Telekinesis.md|telekinesis]]"
  "name": "Spellcasting"
- "desc": "If Demogorgon fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Demogorgon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Demogorgon has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]],\
    \ [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]],\
    \ or knocked [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]."
  "name": "Two Heads"
"actions":
- "desc": "Demogorgon makes two Tentacle attacks. He can replace one attack with a\
    \ use of Gaze."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+17 (+17) to hit, reach 10 ft., one\
    \ target. Hit: dice:3d12 + 9|text(28) (3d12 + 9) force damage. If the target\
    \ is a creature, it must succeed on a DC 23 Constitution saving throw, or its\
    \ hit point maximum is reduced by an amount equal to the damage taken. This reduction\
    \ lasts until the target finishes a long rest. The target dies if its hit point\
    \ maximum is reduced to 0."
  "name": "Tentacle"
- "desc": "Demogorgon turns his magical gaze toward one creature he can see within\
    \ 120 feet of him. The target must succeed on a DC 23 Wisdom saving throw or suffer\
    \ one of the following effects (choose one or roll a dice: d6|avg|noform (d6)):\n\
    \n- 1–2 Beguiling Gaze. The target is [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]\
    \ until the start of Demogorgon's next turn or until Demogorgon is no longer within\
    \ line of sight.  \n- 3–4 Confusing Gaze. The target suffers the effect of\
    \ the [[5. Mechanics/Spells/Confusion.md|confusion]] spell without making a saving\
    \ throw. The effect lasts until the start of Demogorgon's next turn. Demogorgon\
    \ doesn't need to concentrate on the spell.  \n- 5–6 Hypnotic Gaze. The target\
    \ is [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]] by Demogorgon until the\
    \ start of Demogorgon's next turn. Demogorgon chooses how the [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ target uses its action, reaction, and movement.  "
  "name": "Gaze"
"legendary_actions":
- "desc": "Demogorgon uses Gaze and must use either Beguiling Gaze or Confusing Gaze."
  "name": "Gaze"
- "desc": "Melee Weapon Attack: dice: d20+17 (+17) to hit, reach 15 ft., one\
    \ target. Hit: dice:2d10 + 9|text(20) (2d10 + 9) bludgeoning damage plus\
    \ dice:2d10|text(11) (2d10) necrotic damage."
  "name": "Tail"
- "desc": "Demogorgon uses Spellcasting."
  "name": "Cast a Spell (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), Demogorgon can take one\
    \ of the following lair actions; he can't take the same lair action two rounds\
    \ in a row:"
  "name": ""
- "desc": "- Darkness. Demogorgon casts the [[5. Mechanics/Spells/Darkness.md|darkness]]\
    \ spell four times, targeting different areas with the spell. Demogorgon doesn't\
    \ need to concentrate on the spells, which end on initiative count 20 of the next\
    \ round.  \n- Illusory Duplicate. Demogorgon creates an illusory duplicate\
    \ of himself, which appears in his space and lasts until initiative count 20 of\
    \ the next round. On his turn, Demogorgon can move the illusory duplicate a distance\
    \ equal to his walking speed (no action required). The first time a creature or\
    \ an object interacts physically with Demogorgon (for example, by hitting him\
    \ with an attack), there is a 50% chance chance that the illusory duplicate is\
    \ affected, not Demogorgon, in which case the illusion disappears.  "
  "name": ""
"regional_effects":
- "desc": "The region containing Demogorgon's lair is warped by his magic, creating\
    \ one or more of the following effects:"
  "name": ""
- "desc": "- Beguiling Realm. Within 6 miles of the lair, all Charisma ([[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]])\
    \ and Charisma ([[/5. Mechanics/Rules/Skills.md#Performance|Performance]]) checks\
    \ have disadvantage, and all Charisma ([[/5. Mechanics/Rules/Skills.md#Deception|Deception]])\
    \ and Charisma ([[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]) checks\
    \ have advantage.  \n- Frenzied Animals. Beasts within 1 mile of the lair\
    \ become frenzied and violent—even creatures that are normally docile. Within\
    \ that area, any ability check involving Animal Handling has disadvantage.  \n\
    - Venomous Beasts. The area within 6 miles of the lair becomes overpopulated\
    \ with [[5. Mechanics/Bestiary/Beast/Poisonous Snake.md|poisonous snakes]] and other\
    \ venomous Beasts.  "
  "name": ""
- "desc": "If Demogorgon dies, these effects fade over the course of dice: 1d10|avg|noform\
    \ (1d10) days."
  "name": ""
"source":
- "MPMM"
- "MTF"
"image": "4. World Almanac/NPCs/token/demogorgon-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
