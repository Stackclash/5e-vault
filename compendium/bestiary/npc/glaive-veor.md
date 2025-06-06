---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/11
- monster/size/medium
- monster/type/construct/warforged
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/glaive.webp
relationships: []
aliases: [Glaive]
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
*Source: Vecna: Eve of Ruin p. 81*

Since the Mournland's earliest days, Glaive has wielded her namesake weapon in service to the Lord of Blades' bloody conquest of the blighted region. Among the blades, Glaive is best known for her talent at self-modification. "Glaive" is etched onto the back of her neck-plate. It is the only name Glaive has ever known, and fellow blades don't dare call her anything else. Mournland adventurers, however, refer to the terrifying commander by another name: Kill Switch.

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
"name": "Glaive (VEoR)"
"size": "Medium"
"type": "construct"
"subtype": "warforged"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "187"
"hit_dice": "22d8 + 88"
"modifier": !!int "3"
"stats":
  - !!int "20"
  - !!int "16"
  - !!int "19"
  - !!int "11"
  - !!int "16"
  - !!int "9"
"speed": "30 ft. (50 ft. with overdrive)"
"saves":
  - "strength": "+9"
  - "dexterity": "+7"
  - "wisdom": "+7"
"skillsaves":
  - "name": "[Athletics](/compendium/rules/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+7"
  - "name": "[Survival](/compendium/rules/skills.md#Survival)"
    "desc": "+7"
"damage_resistances": "poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "passive Perception 17"
"languages": "Common"
"cr": "11"
"traits":
  - "desc": "When Glaive takes cold damage, her Overdrive immediately recharges."
    "name": "Heatsink"
  - "desc": "Glaive has advantage on attack rolls if at least one ally is within 5\
      \ feet of the creature she's attacking and the ally doesn't have the [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
      \ condition."
    "name": "Pack Tactics"
"actions":
  - "desc": "Glaive makes two Spiked Glaive attacks and two Serrated Bolt attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 10\
      \ (1d10 + 5) piercing or slashing damage, or 14 (1d10 + 9) piercing or slashing\
      \ damage if Glaive is in overdrive."
    "name": "Spiked Glaive"
  - "desc": "Ranged Weapon Attack: +7 to hit, range 60 ft., one target. Hit: 13\
      \ (3d6 + 3) piercing damage. If Glaive has advantage on the attack roll, the\
      \ serrated bolt lodges in the target, and the target's speed is reduced by 10\
      \ feet until the serrated bolt is removed. A target's speed can be reduced by\
      \ only one serrated bolt at a time. A creature can use its action to remove\
      \ a serrated bolt lodged in itself or another creature within its reach; when\
      \ the bolt is removed from a creature, that creature takes 5 (2d4) slashing\
      \ damage."
    "name": "Serrated Bolt"
"bonus_actions":
  - "desc": "Glaive enters a state of overdrive that lasts for 1 minute or until she\
      \ has the [incapacitated](/compendium/rules/conditions.md#Incapacitated) condition.\
      \ While in overdrive, Glaive gains the following benefits:\n\n- Glaive has advantage\
      \ on Strength checks and Strength saving throws.  \n- When Glaive makes a melee\
      \ weapon attack, she gains a +4 bonus to the damage roll.  \n- Glaive's speed\
      \ increases to 50 feet.  "
    "name": "Overdrive (Recharges after Finishing a Short or Long Rest)"
"reactions":
  - "desc": "In response to being hit by a weapon attack, Glaive reduces the damage\
      \ by 11 (2d10)."
    "name": "Self-Preservation"
"source":
  - "VEoR"
"image": "compendium/bestiary/npc/token/glaive-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes