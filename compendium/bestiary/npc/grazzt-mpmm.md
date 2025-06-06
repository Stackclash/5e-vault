---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/mpmm
- monster/cr/24
- monster/size/large
- monster/type/fiend/demon
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/grazzt.webp
relationships: []
aliases: [Graz'zt]
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 148, Mordenkainen's Tome of Foes p. 149*

The appearance of this demon lord is a warning that not all that is beautiful is good. Every plane and curve of his nine-foot-tall body, every glance of his burning eyes, promises a mixture of pleasure and pain. Graz'zt can transform himself at will, appearing in any humanlike form that pleases him or his onlookers, all equally tempting in their own ways. In every form, though, a subtle wrongness pervades his beauty, from the cruel cast of his features to the six fingers on each hand and six toes on each foot.

Graz'zt surrounds himself with the finest of things and the most attractive of servants, and he adorns himself in silks and leathers both striking and disturbing in their workmanship. His lair and those of his cultists are pleasure palaces where nothing is forbidden save moderation and kindness.

Cults devoted to him are secret societies of indulgence, often using their debauchery to subjugate others through blackmail, addiction, and manipulation. They wear alabaster masks with ecstatic expressions and ostentatious dress and body ornamentation to their secret assignations.

Although he prefers charm and subtle manipulation, Graz'zt is capable of terrible violence when provoked. He wields the greatsword Angdrelve, also called Wave of Sorrow, whose wavy, razor-edged blade drips acid at his command.

## Cultists of Graz'zt

> [!note]
> See the Cult of Graz'zt entry.

## Graz'zt's Lair

Graz'zt's principal lair is his Argent Palace, a grandiose structure in the city of Zelatar, found within his abyssal domain of Azzatar. Graz'zt's demonic influence radiates outward in a tangible ripple, warping reality around him. Given enough time in a single location, Graz'zt can twist it with his power.

Graz'zt's lair is a den of ostentation and hedonism. It is adorned with finery and decorations so decadent that even the wealthiest of mortals would blush at the excess. Within Graz'zt's lairs, devotees and subjects alike are forced to slake Graz'zt's thirst for pageantry.

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
"name": "Graz'zt (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "346"
"hit_dice": "33d10 + 165"
"modifier": !!int "2"
"stats":
  - !!int "22"
  - !!int "15"
  - !!int "21"
  - !!int "23"
  - !!int "21"
  - !!int "26"
"speed": "40 ft."
"saves":
  - "dexterity": "+9"
  - "constitution": "+12"
  - "wisdom": "+12"
"skillsaves":
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+15"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+12"
  - "name": "[Persuasion](/compendium/rules/skills.md#Persuasion)"
    "desc": "+15"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "24"
"traits":
  - "desc": "If Graz'zt fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Graz'zt has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Graz'zt makes two Wave of Sorrow attacks. He can replace one attack with\
      \ a use of Spellcasting."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20\
      \ (4d6 + 6) force damage plus 14 (4d6) acid damage."
    "name": "Wave of Sorrow (Greatsword)"
  - "desc": "Graz'zt teleports, along with any equipment he is wearing or carrying,\
      \ up to 120 feet to an unoccupied space he can see."
    "name": "Teleport"
  - "desc": "Graz'zt casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt\
      \ will: [charm person](compendium/spells/charm-person.md), [detect magic](compendium/spells/detect-magic.md),\
      \ [dispel magic](compendium/spells/dispel-magic.md)\n\n3/day each: [darkness](compendium/spells/darkness.md),\
      \ [dominate person](compendium/spells/dominate-person.md), [telekinesis](compendium/spells/telekinesis.md),\
      \ [teleport](compendium/spells/teleport.md)\n\n1/day each: [dominate monster](compendium/spells/dominate-monster.md),\
      \ [greater invisibility](compendium/spells/greater-invisibility.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Graz'zt transforms into a form that resembles a Medium Humanoid or back\
      \ into his true form. Aside from his size, his statistics are the same in each\
      \ form. Any equipment he is wearing or carrying isn't transformed."
    "name": "Change Shape"
"reactions":
  - "desc": "Graz'zt tries to interrupt a spell he sees a creature casting within\
      \ 60 feet of him. If the spell is 3rd level or lower, the spell fails and has\
      \ no effect. If the spell is 4th level or higher, Graz'zt makes a Charisma check\
      \ against a DC of 10 + the spell's level. On a success, the spell fails and\
      \ has no effect."
    "name": "Negate Spell (Recharge 5-6)"
"legendary_actions":
  - "desc": "Graz'zt uses Spellcasting or Teleport."
    "name": "Abyssal Magic"
  - "desc": "Graz'zt makes one Wave of Sorrow attack."
    "name": "Attack"
  - "desc": "One creature [charmed](/compendium/rules/conditions.md#Charmed) by Graz'zt\
      \ that Graz'zt can see must use its reaction to move up to its speed as Graz'zt\
      \ directs."
    "name": "Dance, My Puppet!"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Graz'zt can take one\
      \ of the following lair actions; he can't take the same lair action two rounds\
      \ in a row:"
    "name": ""
  - "desc": "- Command. Graz'zt casts the command spell on every creature of his\
      \ choice in the lair. He needn't see each one, but he must be aware that an\
      \ individual is in the lair to target that creature. He issues the same command\
      \ to all the targets.  \n- Conjure Mirrors. Smooth surfaces within the lair\
      \ become as reflective as a polished mirror. Until a different lair action is\
      \ used, creatures within the lair have disadvantage on Dexterity ([Stealth](/compendium/rules/skills.md#Stealth))\
      \ checks made to hide.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Graz'zt's lair is warped by his magic, creating\
      \ one or more of the following effects:"
    "name": ""
  - "desc": "- Agitated Beasts. Wild beasts within 6 miles of the lair break into\
      \ frequent conflicts and coupling, mirroring the behavior that occurs during\
      \ their mating seasons.  \n- Beguiling Realm. Within 6 miles of the lair,\
      \ all Wisdom ([Insight](/compendium/rules/skills.md#Insight)) checks have disadvantage,\
      \ and all Charisma ([Deception](/compendium/rules/skills.md#Deception)) and\
      \ Charisma ([Persuasion](/compendium/rules/skills.md#Persuasion)) checks have\
      \ advantage.  \n- Mirrors Everywhere. Flat surfaces within 1 mile of the\
      \ lair that are made of stone or metal become highly reflective, as though polished\
      \ to a shine. These surfaces become supernaturally mirrorlike.  "
    "name": ""
  - "desc": "If Graz'zt dies, these effects fade over the course of d10 days."
    "name": ""
"source":
  - "MPMM"
  - "MTF"
"image": "compendium/bestiary/npc/token/grazzt-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes