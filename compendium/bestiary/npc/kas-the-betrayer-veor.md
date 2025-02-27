---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/23
- monster/size/medium
- monster/type/undead/vampire
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/kas-the-betrayer.webp
relationships: []
aliases: [Kas the Betrayer]
pronounced: 
race: 
gender: 
age: 
alignment: Neutral Evil
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
*Source: Vecna: Eve of Ruin p. 244*

The Betrayer, the Bloody Handed, the Destroyer—Kas has earned many epithets during his long existence. He is a vampire, legendary swordfighter, and ruthless warlord, and he is driven primarily by one thing: his hatred for Vecna.

Kas resembles a well-muscled, raven-haired, human man in his thirties, though he is far older. His fangs reveal his vampiric nature.

## Personality

Kas is cruel, spiteful, and unrelenting in his pursuit of vengeance against Vecna. He readily lies, breaks promises, betrays allies, and taunts those who fall for his ruses. Kas has little use for those who can't validate his superiority or help advance his goals.

In*Vecna: Eve of Ruin*, Kas fools Tasha and Alustriel, two incredibly powerful wizards. In addition to defeating Vecna, Kas desperately wants the wizards to witness and acknowledge his strength.

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
> [!div | no-t clean txt-c]
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "Kas the Betrayer (VEoR)"
"size": "Medium"
"type": "undead"
"subtype": "vampire"
"alignment": "Neutral Evil"
"ac": !!int "18"
"ac_class": "[plate](compendium/items/plate-armor.md)"
"hp": !!int "315"
"hit_dice": "30d8 + 180"
"stats":
- !!int "26"
- !!int "20"
- !!int "22"
- !!int "24"
- !!int "19"
- !!int "26"
"speed": "40 ft."
"saves":
  "Charisma": !!int "15"
  "Wisdom": !!int "11"
  "Constitution": !!int "13"
"skillsaves":
  "Deception": !!int "22"
  "Stealth": !!int "12"
  "Perception": !!int "11"
  "Arcana": !!int "14"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "Abyssal, Common, Draconic, Infernal"
"cr": "23"
"traits":
- "desc": "Kas adds 1d10 to his initiative rolls. He has advantage on attack rolls\
    \ against any creature that has the [frightened](/compendium/rules/conditions.md#Frightened)\
    \ condition."
  "name": "Eager Betrayer"
- "desc": "If Kas fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Kas regains 20 hit points at the start of his turn if he has at least 1\
    \ hit point. If he takes radiant damage, this trait doesn't function at the start\
    \ of his next turn."
  "name": "Regeneration"
- "desc": "Kas wears the [Crown of Lies](compendium/items/crown-of-lies-veor.md) (see\
    \ the Introduction of Vecna: Eve of Ruin)."
  "name": "Special Equipment"
- "desc": "Kas can climb difficult surfaces, including upside down on ceilings, without\
    \ needing to make an ability check."
  "name": "Spider Climb"
- "desc": "Kas doesn't require a coffin, and he drinks blood to sow terror rather\
    \ than for sustenance. If destroyed, Kas revives in 1d100 nights in an unoccupied\
    \ space in Tovag, his Domain of Dread. He can be permanently destroyed only by\
    \ having a stake driven through his heart and then being beheaded. The stake must\
    \ be cut from a tree growing in soil from Oerth, Kas's home world."
  "name": "Strength of the Night"
- "desc": "While in sunlight, Kas takes 20 radiant damage at the start of his turn,\
    \ has disadvantage on attack rolls and ability checks, and can't use his Change\
    \ Shape bonus action."
  "name": "Sunlight Hypersensitivity"
"actions":
- "desc": "Kas makes three Vengeful Sword attacks. He can replace one of these attacks\
    \ with a Bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 20 (2d8\
    \ + 11) slashing damage. The sword scores a critical hit on a roll of 19 or 20."
  "name": "Vengeful Sword"
- "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one creature. Hit: 11\
    \ (1d6 + 8) piercing damage plus 10 (3d6) necrotic damage. The target's hit point\
    \ maximum is reduced by an amount equal to the necrotic damage taken, and Kas\
    \ regains a number of hit points equal to that amount. The reduction lasts until\
    \ the target finishes a long rest. The target dies if its hit point maximum is\
    \ reduced to 0. A Humanoid slain in this way and then buried rises the following\
    \ night as a vampire spawn under Kas's control."
  "name": "Bite"
"bonus_actions":
- "desc": "Kas transforms into a Medium cloud of mist. While in this form, Kas has\
    \ a flying speed of 20 feet, can hover, and can enter a hostile creature's space\
    \ and stop there. While in mist form, Kas can pass through a space without squeezing\
    \ as long as air can pass through that space, but he can't pass through water.\
    \ Kas has advantage on Strength, Dexterity, and Constitution saving throws, and\
    \ he is immune to all nonmagical damage except the damage he takes as part of\
    \ his Vampire Weaknesses trait. While in mist form, Kas can't take any actions,\
    \ speak, or manipulate objects."
  "name": "Change Shape"
- "desc": "Kas targets one creature he can see within 60 feet of himself. The target\
    \ must succeed on a DC 23 Wisdom saving throw or have the [frightened](/compendium/rules/conditions.md#Frightened)\
    \ condition until the start of Kas's next turn."
  "name": "Menacing Glare"
"reactions":
- "desc": "Kas adds 3 to his AC against one melee attack roll that would hit him.\
    \ He then makes one Vengeful Sword attack against the attacker if it is within\
    \ his reach. On a hit, the target takes an additional 9 (2d8) slashing damage."
  "name": "Parrying Riposte"
"legendary_actions":
- "desc": "Kas moves up to his speed without provoking opportunity attacks."
  "name": "Move"
- "desc": "Kas makes one Vengeful Sword attack."
  "name": "Sword (Costs 2 Actions)"
- "desc": "Kas magically summons a specter. The specter appears in an unoccupied space\
    \ within 30 feet of Kas, whom it obeys. The specter takes its turn immediately\
    \ after Kas. It lasts for 1 hour, until Kas dies, or until Kas dismisses it as\
    \ a bonus action. Kas can't have more than two specters summoned at a time."
  "name": "Rise, Fallen Soldier (Costs 3 Actions)"
"source":
- "VEoR"
"image": "compendium/bestiary/npc/token/kas-the-betrayer-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes