---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/15
- monster/size/medium
- monster/type/undead/vampire
- monster/type/undead/wizard
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/strahd-master-of-death-house.webp
relationships: []
aliases: [Strahd, Master of Death House]
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
*Source: Vecna: Eve of Ruin p. 251*

Strahd von Zarovich is the Darklord of Barovia, a Domain of Dread. Little happens there without the Darklord's knowledge, although Strahd rarely pays attention to what he considers the uninteresting dealings of lesser beings.

## History

In life, Strahd von Zarovich was a prince, a soldier, and a conqueror. His thirst for power never sated, Strahd made a pact with the Dark Powers to become immortal. Meanwhile, Strahd's evil deepened, until in a jealous rage he murdered his brother, Sergei. Sergei's betrothed, Tatyana, leapt from a tower to escape Strahd and vanished into the Mists rising around Barovia as Strahd slew everyone else in the castle. He had become a vampire, and Barovia became a Domain of Dread.

Now the Dark Powers keep Strahd trapped in his realm, tormenting him with his inability to escape for all eternity. He spends his days amusing himself as best he can, terrorizing Barovia's people and savoring the fear and worship he commands.

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
"name": "Strahd, Master of Death House (VEoR)"
"size": "Medium"
"type": "undead"
"subtype": "vampire, wizard"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d8 + 64"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "18"
  - !!int "20"
  - !!int "15"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "dexterity": "+9"
  - "wisdom": "+7"
  - "charisma": "+9"
"skillsaves":
  - "name": "[Arcana](/compendium/rules/skills.md#Arcana)"
    "desc": "+15"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+12"
  - "name": "[Religion](/compendium/rules/skills.md#Religion)"
    "desc": "+10"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+14"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Abyssal, Common, Draconic, Elvish, Giant, Infernal"
"cr": "15"
"traits":
  - "desc": "If Strahd fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "When Strahd is reduced to 0 hit points, he dissolves into mist and immediately\
      \ teleports to his lair in Castle Ravenloft. After d4 hours, Strahd re-forms\
      \ in a random unoccupied space within his lair, regaining all his hit points."
    "name": "Master of the House"
  - "desc": "Strahd regains 20 hit points at the start of his turn if he has at least\
      \ 1 hit point. If he takes radiant damage, this trait doesn't function at the\
      \ start of his next turn."
    "name": "Regeneration"
  - "desc": "Strahd can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "Strahd has the following flaws:\n\n- Harmed by Running Water. While\
      \ in running water, Strahd takes 20 acid damage if he ends his turn there, and\
      \ he can't use his Change Shape.  \n- Sunlight Hypersensitivity. While in\
      \ sunlight, Strahd takes 20 radiant damage at the start of his turn, has disadvantage\
      \ on attack rolls and ability checks, and can't use his Change Shape bonus action.\
      \  "
    "name": "Vampire Weaknesses"
"actions":
  - "desc": "Strahd makes two Death Strike attacks. He can replace one of these attacks\
      \ with Blighted Fire if available."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) slashing damage plus 14 (4d6) necrotic damage. If the target is a creature,\
      \ Strahd can forgo dealing slashing damage; the target then has the [grappled](/compendium/rules/conditions.md#Grappled)\
      \ condition (escape DC 18) instead. Strahd can grapple only one creature at\
      \ a time."
    "name": "Death Strike"
  - "desc": "Strahd summons shadowy, necrotic fire that fills a 20-foot-radius sphere\
      \ centered on a point he can see within 90 feet of himself. Each creature in\
      \ that area must make a DC 18 Dexterity saving throw, taking 14 (4d6) fire damage\
      \ plus 14 (4d6) necrotic damage on a failed save or half as much damage on a\
      \ successful one."
    "name": "Blighted Fire (Recharge 5-6)"
  - "desc": "Strahd targets one Humanoid he can see within 30 feet of himself. The\
      \ target must succeed on a DC 17 Wisdom saving throw or have the [charmed](/compendium/rules/conditions.md#Charmed)\
      \ condition. The [charmed](/compendium/rules/conditions.md#Charmed) target regards\
      \ Strahd as a trusted friend to be heeded and protected. The target isn't under\
      \ Strahd's control, but it takes Strahd's requests and actions in the most favorable\
      \ way.\n\nEach time Strahd or his companions deal damage to the target, it can\
      \ repeat the saving throw, ending the effect on itself on a success. Otherwise,\
      \ the effect lasts 24 hours or until Strahd is reduced to 0 hit points, is on\
      \ a different plane of existence than the target, or uses a bonus action to\
      \ end the effect."
    "name": "Charm"
  - "desc": "Strahd casts one of the following spells, using Intelligence as the spellcasting\
      \ ability (spell save DC 18):\n\nAt will: [Detect Thoughts](compendium/spells/detect-thoughts.md),\
      \ [Fog Cloud](compendium/spells/fog-cloud.md), [Mage Hand](compendium/spells/mage-hand.md)\n\
      \n2/day each: [Animate Dead](compendium/spells/animate-dead.md) (as an action),\
      \ [Gust of Wind](compendium/spells/gust-of-wind.md), [Mirror Image](compendium/spells/mirror-image.md),\
      \ [Nondetection](compendium/spells/nondetection.md)\n\n1/day each: [Greater\
      \ Invisibility](compendium/spells/greater-invisibility.md), [Polymorph](compendium/spells/polymorph.md),\
      \ [Scrying](compendium/spells/scrying.md) (as an action)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature that has\
      \ the [charmed](/compendium/rules/conditions.md#Charmed) or [grappled](/compendium/rules/conditions.md#Grappled)\
      \ condition. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage.\
      \ The target's hit point maximum is reduced by an amount equal to the necrotic\
      \ damage taken, and Strahd regains a number of hit points equal to that amount.\
      \ The reduction lasts until the target finishes a long rest. The target dies\
      \ if its hit point maximum is reduced to 0. A Humanoid slain in this way and\
      \ then buried rises the following night as a vampire spawn under Strahd's control."
    "name": "Bite"
  - "desc": "Strahd transforms into a new form or back into his true form. Anything\
      \ he is wearing transforms with him, but nothing he is carrying does. He reverts\
      \ to his true form if he dies. When transforming into a new form, Strahd chooses\
      \ one of the following options:"
    "name": "Change Shape"
  - "desc": "Strahd transforms into a Tiny bat (flying speed 30 ft.) or a Medium wolf\
      \ (speed 40 ft.). While in that form, he can't speak, and he retains his game\
      \ statistics other than his size and speed."
    "name": "Beast Form"
  - "desc": "Strahd transforms into a Medium cloud of mist. While in this form, Strahd\
      \ has a flying speed of 20 feet, can hover, and can enter a hostile creature's\
      \ space and stop there. While in mist form, Strahd can pass through a space\
      \ without squeezing as long as air can pass through that space, but he can't\
      \ pass through water. Strahd has advantage on Strength, Dexterity, and Constitution\
      \ saving throws, and he is immune to all nonmagical damage except the damage\
      \ he takes as part of his Vampire Weaknesses trait. While in mist form, Strahd\
      \ can't take any actions, speak, or manipulate objects."
    "name": "Mist Form"
"legendary_actions":
  - "desc": "Strahd moves up to his speed without provoking opportunity attacks."
    "name": "Cunning Escape"
  - "desc": "Strahd makes one Death Strike attack."
    "name": "Strike (Costs 2 Actions)"
"source":
  - "VEoR"
"image": "compendium/bestiary/npc/token/strahd-master-of-death-house-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes