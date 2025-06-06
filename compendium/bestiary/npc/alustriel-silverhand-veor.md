---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/21
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/wizard
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/alustriel-silverhand.webp
relationships: []
aliases: [Alustriel Silverhand]
pronounced: 
race: 
gender: 
age: 
alignment: Chaotic Good
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
*Source: Vecna: Eve of Ruin p. 242*

Lady Alustriel Silverhand, called the Shining Lady, has been an influential wizard and proponent of good across Toril for centuries. Alustriel is one of the Seven Sisters—immortal daughters of Mystra, the god of magic. The divine energy Mystra passed to Alustriel grants Alustriel incredible power over arcane magic.

Alustriel's youthful appearance as a human woman with silver hair gives no hint of her supernaturally extended life span. She typically wears long robes and wields a unicorn-headed staff, her *Staff of Silverymoon*.

## Personality

Alustriel's primary concerns are to spread kindness, reward virtue, and promote a culture of compassion throughout the multiverse. She is good at building alliances and quick to intervene when she senses a threat to the forces of good. She has traveled far and established safe houses across the planes—such as her sanctum in the city of Sigil. Alustriel doesn't seek personal glory or wealth; her style of influencing the cosmos is quiet yet steady.

## History

Like other Chosen of Mystra, Alustriel is concerned with preserving the Weave, the primary incarnation of magic that permeates Toril. She believes that the Weave favors those who act with mercy and compassion, seeks to deliver lives of security for all, and bolsters people's efforts when they seek to right wrongs and combat evil.

Nowhere are Alustriel and her deeds better known than in the Silver Marches and its capital, Silverymoon. Alustriel ruled Silverymoon for centuries, once disguised as a wizard named Elué Dualen and then later in her true form. She helped create Silverymoon's famous Moonbridge and co-founded the Lady's College, the first school in Faerûn for mages as students rather than as apprentices in service.

Alustriel stepped down as Silverymoon's high mage more than a century ago. Her son, Methrammar Aerasumé, now leads the city and works to uphold his mother's legacy.

Alustriel has partaken in countless adventures before and after her tenure as Silverymoon's high mage. She has befriended famous adventurers such as Drizzt Do'Urden, worked with prominent organizations like the Harpers, and helped prevent or undo many kinds of evil.

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
"name": "Alustriel Silverhand (VEoR)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, wizard"
"alignment": "Chaotic Good"
"ac": !!int "15"
"ac_class": "18 with [mage armor](compendium/spells/mage-armor.md)"
"hp": !!int "272"
"hit_dice": "32d8 + 128"
"modifier": !!int "5"
"stats":
  - !!int "12"
  - !!int "20"
  - !!int "18"
  - !!int "24"
  - !!int "23"
  - !!int "22"
"speed": "30 ft."
"saves":
  - "constitution": "+11"
  - "intelligence": "+14"
  - "wisdom": "+13"
"skillsaves":
  - "name": "[Arcana](/compendium/rules/skills.md#Arcana)"
    "desc": "+14"
  - "name": "[History](/compendium/rules/skills.md#History)"
    "desc": "+14"
  - "name": "[Insight](/compendium/rules/skills.md#Insight)"
    "desc": "+13"
  - "name": "[Religion](/compendium/rules/skills.md#Religion)"
    "desc": "+14"
"damage_resistances": "radiant"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "passive Perception 16"
"languages": "Common, Draconic, Elvish"
"cr": "21"
"traits":
  - "desc": "Whenever a creature on the same plane of existence as Alustriel speaks\
      \ Alustriel's name, Alustriel hears her name and the next nine words the speaker\
      \ utters."
    "name": "Ear of the Chosen"
  - "desc": "If Alustriel fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Alustriel carries a magic staff known as the Staff of Silverymoon. In\
      \ the hands of anyone other than Alustriel, the Staff of Silverymoon is a [Staff\
      \ of Power](compendium/items/staff-of-power.md)."
    "name": "Special Equipment"
"actions":
  - "desc": "Alustriel makes three Staff of Silverymoon attacks or two Reproving Ray\
      \ attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14\
      \ (2d8 + 5) bludgeoning damage plus 38 (7d10) radiant damage."
    "name": "Staff of Silverymoon"
  - "desc": "Ranged Spell Attack: +14 to hit, range 120 ft., one target. Hit:\
      \ 65 (9d12 + 7) force damage, and if the target is a creature, it must make\
      \ a DC 22 Charisma saving throw. On a failed save, the target has the [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
      \ condition until the start of Alustriel's next turn. On a successful save,\
      \ the target's speed is reduced by 10 feet until the start of Alustriel's next\
      \ turn."
    "name": "Reproving Ray"
  - "desc": "Alustriel summons a 60-foot cone of silver fire. Each creature in that\
      \ area must make a DC 22 Dexterity saving throw, taking 77 (14d10) radiant damage\
      \ on a failed save or half as much damage on a successful one. Additionally,\
      \ Alustriel or one creature of her choice within 60 feet of her then regains\
      \ 10 (3d6) hit points."
    "name": "Argent Blaze (Requires Silver Fire)"
  - "desc": "Alustriel casts one of the following spells, using Intelligence as the\
      \ spellcasting ability (spell save DC 22):\n\nAt will: [Dancing Lights](compendium/spells/dancing-lights.md),\
      \ [Detect Magic](compendium/spells/detect-magic.md), [Mage Armor](compendium/spells/mage-armor.md)\
      \ (self only), [Mage Hand](compendium/spells/mage-hand.md)\n\n2/day each:\
      \ [Detect Thoughts](compendium/spells/detect-thoughts.md), [Dispel Magic](compendium/spells/dispel-magic.md),\
      \ [Tongues](compendium/spells/tongues.md)\n\n1/day each: [Telepathy](compendium/spells/telepathy.md),\
      \ [Teleport](compendium/spells/teleport.md), [Time Stop](compendium/spells/time-stop.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Brilliant silver fire harmlessly wreathes Alustriel and empowers her.\
      \ The silver fire lasts for 1 hour or until she has the [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
      \ condition or uses another bonus action to quench it. While wreathed in silver\
      \ fire, Alustriel gains truesight within 30 feet and can use her Argent Blaze\
      \ action. In addition, Alustriel is unaffected by magic that would ascertain\
      \ her alignment, creature type, thoughts, or truthfulness."
    "name": "Silver Fire (2/Day)"
"reactions":
  - "desc": "Alustriel interrupts a creature she can see within 60 feet of herself\
      \ that is casting a spell. If the spell is 5th level or lower, it fails and\
      \ has no effect. If the spell is 6th level or higher, Alustriel makes an Intelligence\
      \ check (DC 10 plus the spell's level). On a successful check, the spell fails\
      \ and has no effect. Whatever the spell's level, the caster takes 11 (2d10)\
      \ radiant damage if the spell fails."
    "name": "Shining Counterspell"
"source":
  - "VEoR"
"image": "compendium/bestiary/npc/token/alustriel-silverhand-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes