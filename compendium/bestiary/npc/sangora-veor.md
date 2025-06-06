---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/13
- monster/size/medium
- monster/type/undead/shapechanger
location: 
condition: healthy
images: []
relationships: []
aliases: [Sangora]
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
*Source: Vecna: Eve of Ruin*

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
"name": "Sangora (VEoR)"
"size": "Medium"
"type": "undead"
"subtype": "shapechanger"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "18"
  - !!int "17"
  - !!int "15"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "dexterity": "+9"
  - "wisdom": "+7"
  - "charisma": "+9"
"skillsaves":
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+9"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "the languages it knew in life"
"cr": "13"
"traits":
  - "desc": "If Sangora isn't in sunlight or running water, it can use its action\
      \ to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true\
      \ form.\n\nWhile in bat form, Sangora can't speak, its walking speed is 5 feet,\
      \ and it has a flying speed of 30 feet. Its statistics, other than its size\
      \ and speed, are unchanged. Anything it is wearing transforms with it, but nothing\
      \ it is carrying does. It reverts to its true form if it dies.\n\nWhile in mist\
      \ form, Sangora can't take any actions, speak, or manipulate objects. It is\
      \ weightless, has a flying speed of 20 feet, can hover, and can enter a hostile\
      \ creature's space and stop there. In addition, if air can pass through a space,\
      \ the mist can do so without squeezing, and it can't pass through water. It\
      \ has advantage on Strength, Dexterity, and Constitution saving throws, and\
      \ it is immune to all nonmagical damage, except the damage it takes from sunlight."
    "name": "Shapechanger"
  - "desc": "If Sangora fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "When it drops to 0 hit points outside its resting place, Sangora transforms\
      \ into a cloud of mist (as in the Shapechanger trait) instead of falling [unconscious](/compendium/rules/conditions.md#Unconscious),\
      \ provided that it isn't in sunlight or running water. If it can't transform,\
      \ it is destroyed.\n\nWhile it has 0 hit points in mist form, it can't revert\
      \ to its vampire form, and it must reach its resting place within 2 hours or\
      \ be destroyed. Once in its resting place, it reverts to its vampire form. It\
      \ is then [paralyzed](/compendium/rules/conditions.md#Paralyzed) until it regains\
      \ at least 1 hit point. After spending 1 hour in its resting place with 0 hit\
      \ points, it regains 1 hit point."
    "name": "Misty Escape"
  - "desc": "Sangora regains 20 hit points at the start of its turn if it has at least\
      \ 1 hit point and isn't in sunlight or running water. If Sangora takes radiant\
      \ damage or damage from holy water, this trait doesn't function at the start\
      \ of Sangora's next turn."
    "name": "Regeneration"
  - "desc": "Sangora can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "Sangora has the following flaws:\n\n- Forbiddance. Sangora can't\
      \ enter a residence without an invitation from one of the occupants.  \n- Harmed\
      \ by Running Water. Sangora takes 20 acid damage if it ends its turn in running\
      \ water.  \n- Stake to the Heart. If a piercing weapon made of wood is driven\
      \ into Sangora's heart while Sangora is [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
      \ in its resting place, Sangora is [paralyzed](/compendium/rules/conditions.md#Paralyzed)\
      \ until the stake is removed.  \n- Sunlight Hypersensitivity. Sangora takes\
      \ 20 radiant damage when it starts its turn in sunlight. While in sunlight,\
      \ it has disadvantage on attack rolls and ability checks.  "
    "name": "Vampire Weaknesses"
"actions":
  - "desc": "Sangora makes two attacks, only one of which can be a bite attack."
    "name": "Multiattack (Vampire Form Only)"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8\
      \ (1d8 + 4) bludgeoning damage. Instead of dealing damage, Sangora can grapple\
      \ the target (escape DC 18)."
    "name": "Unarmed Strike (Vampire Form Only)"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature,\
      \ or a creature that is [grappled](/compendium/rules/conditions.md#Grappled)\
      \ by Sangora, [incapacitated](/compendium/rules/conditions.md#Incapacitated),\
      \ or [restrained](/compendium/rules/conditions.md#Restrained). Hit: 7 (1d6\
      \ + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit point\
      \ maximum is reduced by an amount equal to the necrotic damage taken, and Sangora\
      \ regains hit points equal to that amount. The reduction lasts until the target\
      \ finishes a long rest. The target dies if this effect reduces its hit point\
      \ maximum to 0. A humanoid slain in this way and then buried in the ground rises\
      \ the following night as a [vampire spawn](compendium/bestiary/undead/vampire-spawn.md)\
      \ under Sangora's control."
    "name": "Bite (Bat or Vampire Form Only)"
  - "desc": "Sangora targets one humanoid it can see within 30 feet of it. If the\
      \ target can see Sangora, the target must succeed on a DC 17 Wisdom saving throw\
      \ against this magic or be [charmed](/compendium/rules/conditions.md#Charmed)\
      \ by Sangora. The [charmed](/compendium/rules/conditions.md#Charmed) target\
      \ regards Sangora as a trusted friend to be heeded and protected. Although the\
      \ target isn't under Sangora's control, it takes Sangora's requests or actions\
      \ in the most favorable way it can, and it is a willing target for Sangora's\
      \ bite attack.\n\nEach time Sangora or Sangora's companions do anything harmful\
      \ to the target, it can repeat the saving throw, ending the effect on itself\
      \ on a success. Otherwise, the effect lasts 24 hours or until Sangora is destroyed,\
      \ is on a different plane of existence than the target, or takes a bonus action\
      \ to end the effect."
    "name": "Charm"
  - "desc": "Sangora magically calls 2d4 swarms of [bats](compendium/bestiary/beast/swarm-of-bats.md)\
      \ or [rats](compendium/bestiary/beast/swarm-of-rats.md), provided that the sun\
      \ isn't up. While outdoors, Sangora can call 3d6 [wolves](compendium/bestiary/beast/wolf.md)\
      \ instead. The called creatures arrive in d4 rounds, acting as allies of Sangora\
      \ and obeying its spoken commands. The beasts remain for 1 hour, until Sangora\
      \ dies, or until Sangora dismisses them as a bonus action."
    "name": "Children of the Night (1/Day)"
"legendary_actions":
  - "desc": "Sangora moves up to its speed without provoking opportunity attacks."
    "name": "Move"
  - "desc": "Sangora makes one unarmed strike."
    "name": "Unarmed Strike"
  - "desc": "Sangora makes one bite attack."
    "name": "Bite (Costs 2 Actions)"
"source":
  - "VEoR"
"image": "compendium/bestiary/npc/token/sangora-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes