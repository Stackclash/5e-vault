---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/griffonssaddlebag3
- monster/cr/24
- monster/size/gargantuan
- monster/type/dragon/shapechanger
location: 
condition: healthy
images: []
relationships: []
aliases: [Duvra, Legendary Trickster]
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
*Source: The Griffon's Saddlebag, Book 3 p. 0*

As the guardian and patron of Breezehome, the metallic dragon Duvra is a mighty force of chaos and good. Through his copious use of transmutation magic and polymorphing effects, the trickster has mastered the art of shapechanging and altered his very essence accordingly. Although his age and power mean that his true form is still that of a behemoth dragon, he considers the form of a younger dragon or humanoid to be a better representation of his capricious soul.

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
"name": "Duvra, Legendary Trickster (GriffonsSaddlebag3)"
"size": "Gargantuan"
"type": "dragon"
"subtype": "shapechanger"
"alignment": "Chaotic Good"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "462"
"hit_dice": "25d20 + 200"
"modifier": !!int "4"
"stats":
  - !!int "28"
  - !!int "18"
  - !!int "27"
  - !!int "18"
  - !!int "15"
  - !!int "23"
"speed": "40 ft., fly 80 ft. (use creature's speed in beast or humanoid form)"
"saves":
  - "dexterity": "+11"
  - "constitution": "+16"
  - "wisdom": "+9"
  - "charisma": "+13"
"skillsaves":
  - "name": "[Deception](/compendium/rules/skills.md#Deception)"
    "desc": "+13"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+16"
  - "name": "[Sleight of Hand](/compendium/rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+11"
  - "name": "[Stealth](/compendium/rules/skills.md#Stealth)"
    "desc": "+18"
"damage_immunities": "cold"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 26"
"languages": "Common, Draconic, Thieves' cant"
"cr": "24"
"traits":
  - "desc": "Duvra's innate spellcasting ability is Charisma (spell save DC 21). Duvra\
      \ can innately cast the following spells, requiring no material components:\n\
      \nAt will: [mage hand](compendium/spells/mage-hand.md), [minor illusion](compendium/spells/minor-illusion.md)\n\
      \n3/day each: [mirror image](compendium/spells/mirror-image.md), [suggestion](compendium/spells/suggestion.md)\n\
      \n1/day each: [hypnotic pattern](compendium/spells/hypnotic-pattern.md),\
      \ [mislead](compendium/spells/mislead.md)"
    "name": "Innate Spellcasting"
  - "desc": "If Duvra fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Duvra can use his action to polymorph into a humanoid or beast that has\
      \ a challenge rating no higher than his own, or into a Medium or larger silver\
      \ dragon, or back into his true form, which is a young silver dragon. His statistics,\
      \ other than his speed, are the same in each form, as appropriate to his form;\
      \ for example, in the form of a panther, he would have a walking speed of 50\
      \ feet and a climbing speed of 40 feet, and he wouldn't be able to use his tail\
      \ attack. Any equipment he is wearing or carrying isn't transformed. He reverts\
      \ to his true form if he dies."
    "name": "Shapechanger"
  - "desc": "Duvra deals an extra 21 (6d6) damage when he hits a target with a weapon\
      \ attack and has advantage on the attack roll, or when the target is within\
      \ 5 feet of an ally of Duvra that isn't [incapacitated](/compendium/rules/conditions.md#Incapacitated)\
      \ and Duvra doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (Humanoid Form Only; 1/Turn)"
"actions":
  - "desc": "Duvra can use his Frightful Presence. In beast or dragon form, he then\
      \ makes three attacks: one with his bite and two with his claws, if able. In\
      \ humanoid form, he instead makes two attacks with his daggers."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft. (or 15 ft. if Gargantuan),\
      \ one target. Hit: 20 (2d10 + 9) piercing damage."
    "name": "Bite (Beast or Dragon Form Only)"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 5 ft. (or 10 ft. if Gargantuan),\
      \ one target. Hit: 16 (2d6 + 9) slashing damage."
    "name": "Claw (Beast or Dragon Form Only)"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft. (or 20 ft. if Gargantuan),\
      \ one target. Hit: 18 (2d8 + 9) bludgeoning damage."
    "name": "Tail (Beast or Dragon Form Only)"
  - "desc": "Melee  or Ranged Weapon Attack: +16 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 11 (1d4 + 9) piercing damage."
    "name": "Dagger (Humanoid Form Only)"
  - "desc": "Each creature of Duvra's choice that is within 120 feet of him and aware\
      \ of him must succeed on a DC 21 Wisdom saving throw or become [frightened](/compendium/rules/conditions.md#Frightened)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature is immune to Duvra's\
      \ Frightful Presence for the next 24 hours."
    "name": "Frightful Presence (Dragon Form Only)"
  - "desc": "Duvra uses one of the following breath weapons."
    "name": "Breath Weapons (Recharge 5-6)"
  - "desc": "Duvra exhales an icy blast in a 90-foot cone.\n\nEach creature in that\
      \ area must make a DC 23 Constitution saving throw, taking 67 (15d8) cold damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Cold Breath"
  - "desc": "Duvra exhales a wave of shapechanging magic in a 90-foot cone. An unwilling\
      \ creature in the area must succeed on a DC 17 Wisdom saving throw to resist\
      \ the transformation, and an unwilling shapechanger automatically succeeds on\
      \ the save.\n\nThe transformation lasts on each target for 1 minute, until the\
      \ target drops to 0 hit points or dies, or until Duvra's [concentration](/compendium/rules/conditions.md#Concentration)\
      \ ends (as if [concentrating](/compendium/rules/conditions.md#Concentration)\
      \ on a spell). The new form is the same for each target and can be any beast\
      \ whose challenge rating is equal to or less than that of the target with the\
      \ lowest challenge rating that failed the save (or the target's level, if it\
      \ doesn't have a challenge rating). The target's game statistics, including\
      \ mental ability scores, are replaced by the statistics of the chosen beast.\
      \ It retains its alignment and personality.\n\nEach target assumes the hit points\
      \ of its new form.\n\nWhen it reverts to its normal form, the target returns\
      \ to the number of hit points it had before it transformed. If it reverts as\
      \ a result of dropping to 0 hit points, any excess damage carries over to its\
      \ normal form. As long as the excess damage doesn't reduce the target's normal\
      \ form to 0 hit points, it isn't knocked [unconscious](/compendium/rules/conditions.md#Unconscious).\
      \ The target is limited in the actions it can perform by the nature of its new\
      \ form, and it can't speak, cast spells, or take any other action that requires\
      \ hands or speech. The target's gear melds into the new form. The target can't\
      \ activate, use, wield, or otherwise benefit from any of its equipment."
    "name": "Polymorphing Breath"
"legendary_actions":
  - "desc": "Duvra makes a Dexterity ([Stealth](/compendium/rules/skills.md#Stealth))\
      \ check or a Wisdom ([Perception](/compendium/rules/skills.md#Perception)) check."
    "name": "Hide/Seek"
  - "desc": "Duvra moves up to his speed."
    "name": "Move"
  - "desc": "Duvra makes a tail attack."
    "name": "Tail Attack (Beast or Dragon Form Only)"
  - "desc": "Duvra beats his wings. Each creature within 15 feet of Duvra must succeed\
      \ on a DC 24 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage\
      \ and be knocked [prone](/compendium/rules/conditions.md#Prone). Duvra can then\
      \ fly up to half his flying speed."
    "name": "Wing Attack (Dragon Form Only; Costs 2 Actions)"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes