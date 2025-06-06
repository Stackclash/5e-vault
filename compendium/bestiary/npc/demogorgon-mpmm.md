---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/mpmm
- monster/cr/26
- monster/size/huge
- monster/type/fiend/demon
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/demogorgon.webp
relationships: []
aliases: [Demogorgon]
pronounced: 
race: 
gender: 
age: 
alignment: Chaotic Evil
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 90, Mordenkainen's Tome of Foes p. 144*

> [!quote] A quote from Mordenkainen  
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
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Add Relationship.md"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Remove Relationship.md"
```
> [!div | no-t clean txt-c]
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "Demogorgon (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "22"
"ac_class": "natural armor"
"hp": !!int "464"
"hit_dice": "32d12 + 256"
"modifier": !!int "2"
"stats":
  - !!int "29"
  - !!int "14"
  - !!int "26"
  - !!int "20"
  - !!int "17"
  - !!int "25"
"speed": "50 ft., swim 50 ft."
"saves":
  - "dexterity": "+10"
  - "constitution": "+16"
  - "wisdom": "+11"
  - "charisma": "+15"
"skillsaves":
  - "name": "[Insight](/compendium/rules/skills.md#Insight)"
    "desc": "+11"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+19"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 29"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
  - "desc": "If Demogorgon fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Demogorgon has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Demogorgon has advantage on saving throws against being [blinded](/compendium/rules/conditions.md#Blinded),\
      \ [deafened](/compendium/rules/conditions.md#Deafened), [stunned](/compendium/rules/conditions.md#Stunned),\
      \ or knocked [unconscious](/compendium/rules/conditions.md#Unconscious)."
    "name": "Two Heads"
"actions":
  - "desc": "Demogorgon makes two Tentacle attacks. He can replace one attack with\
      \ a use of Gaze."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 28\
      \ (3d12 + 9) force damage. If the target is a creature, it must succeed on a\
      \ DC 23 Constitution saving throw, or its hit point maximum is reduced by an\
      \ amount equal to the damage taken. This reduction lasts until the target finishes\
      \ a long rest. The target dies if its hit point maximum is reduced to 0."
    "name": "Tentacle"
  - "desc": "Demogorgon turns his magical gaze toward one creature he can see within\
      \ 120 feet of him. The target must succeed on a DC 23 Wisdom saving throw or\
      \ suffer one of the following effects (choose one or roll a d6):\n\n- 1–2\
      \ Beguiling Gaze. The target is [stunned](/compendium/rules/conditions.md#Stunned)\
      \ until the start of Demogorgon's next turn or until Demogorgon is no longer\
      \ within line of sight.  \n- 3–4 Confusing Gaze. The target suffers the\
      \ effect of the [confusion](compendium/spells/confusion.md) spell without making\
      \ a saving throw. The effect lasts until the start of Demogorgon's next turn.\
      \ Demogorgon doesn't need to concentrate on the spell.  \n- 5–6 Hypnotic Gaze.\
      \ The target is [charmed](/compendium/rules/conditions.md#Charmed) by Demogorgon\
      \ until the start of Demogorgon's next turn. Demogorgon chooses how the [charmed](/compendium/rules/conditions.md#Charmed)\
      \ target uses its action, reaction, and movement.  "
    "name": "Gaze"
  - "desc": "Demogorgon casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt\
      \ will: [detect magic](compendium/spells/detect-magic.md), [major image](compendium/spells/major-image.md)\n\
      \n3/day each: [dispel magic](compendium/spells/dispel-magic.md), [fear](compendium/spells/fear.md),\
      \ [telekinesis](compendium/spells/telekinesis.md)\n\n1/day each: [feeblemind](compendium/spells/feeblemind.md),\
      \ [project image](compendium/spells/project-image.md)"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "Demogorgon uses Gaze and must use either Beguiling Gaze or Confusing\
      \ Gaze."
    "name": "Gaze"
  - "desc": "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 20\
      \ (2d10 + 9) bludgeoning damage plus 11 (2d10) necrotic damage."
    "name": "Tail"
  - "desc": "Demogorgon uses Spellcasting."
    "name": "Cast a Spell (Costs 2 Actions)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Demogorgon can take\
      \ one of the following lair actions; he can't take the same lair action two\
      \ rounds in a row:"
    "name": ""
  - "desc": "- Darkness. Demogorgon casts the [darkness](compendium/spells/darkness.md)\
      \ spell four times, targeting different areas with the spell. Demogorgon doesn't\
      \ need to concentrate on the spells, which end on initiative count 20 of the\
      \ next round.  \n- Illusory Duplicate. Demogorgon creates an illusory duplicate\
      \ of himself, which appears in his space and lasts until initiative count 20\
      \ of the next round. On his turn, Demogorgon can move the illusory duplicate\
      \ a distance equal to his walking speed (no action required). The first time\
      \ a creature or an object interacts physically with Demogorgon (for example,\
      \ by hitting him with an attack), there is a 50 percent chance that the illusory\
      \ duplicate is affected, not Demogorgon, in which case the illusion disappears.\
      \  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Demogorgon's lair is warped by his magic, creating\
      \ one or more of the following effects:"
    "name": ""
  - "desc": "- Beguiling Realm. Within 6 miles of the lair, all Charisma ([Persuasion](/compendium/rules/skills.md#Persuasion))\
      \ and Charisma ([Performance](/compendium/rules/skills.md#Performance)) checks\
      \ have disadvantage, and all Charisma ([Deception](/compendium/rules/skills.md#Deception))\
      \ and Charisma ([Intimidation](/compendium/rules/skills.md#Intimidation)) checks\
      \ have advantage.  \n- Frenzied Animals. Beasts within 1 mile of the lair\
      \ become frenzied and violent—even creatures that are normally docile. Within\
      \ that area, any ability check involving Animal Handling has disadvantage. \
      \ \n- Venomous Beasts. The area within 6 miles of the lair becomes overpopulated\
      \ with [poisonous snakes](compendium/bestiary/beast/poisonous-snake.md) and\
      \ other venomous Beasts.  "
    "name": ""
  - "desc": "If Demogorgon dies, these effects fade over the course of d10 days."
    "name": ""
"source":
  - "MPMM"
  - "MTF"
"image": "compendium/bestiary/npc/token/demogorgon-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes