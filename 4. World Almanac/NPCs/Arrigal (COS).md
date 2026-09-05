---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/8
  - monster/size/medium
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\arrigal.webp
aliases:
  - Arrigal
alignment: Neutral Evil
description: >-
  A lean, calculating man in studded leather armor, quieter and far more
  dangerous than his brute of an elder brother — Arrigal smiles easily and kills
  just as easily when it serves him.
history: >-
  Arrigal and his elder brother [[Luvash (COS)|Luvash]] inherited leadership of
  their Vistani camp when its elders died, and both pledged the camp's loyalty
  to Strahd von Zarovich without hesitation. Where Luvash rules through fear and
  brute force, Arrigal works through cunning, theft, and the occasional quiet
  murder — delivering anything useful or dangerous to Strahd that falls into his
  hands, and killing to keep it if he must.
relationships: []
partyRelationships: {}
location: '[[4. World Almanac/Settlements/Vallaki.md|Vallaki]]'
pronounced: AH-ri-gal
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 35
occupation:
  - Assassin
groups:
  - Vistani (Vallaki camp)
religions: []
personality: 'Charismatic, ruthless, cunning'
ideal: >-
  Loyalty to family and clan above all else, but personal gain is a close
  second.
bond: His brother Luvash and niece Arabelle
flaw: Greed and self-interest often overshadow his better judgement
goals: 'To protect and serve his Vistani clan, to amass personal wealth and power'
likes: 'Wealth, power, the respect of his peers'
dislikes: 'The forces of Strahd (publicly), betrayal, weakness'
---
> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
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
> **Party Relationship** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` |

# **`=this.file.name`**
*Source: Curse of Strahd p. 121*

TBD

> [!column|no-t flex]
>> [!metadata|text-Center] Description
>> `INPUT[textArea:description]`
>
>> [!metadata|text-Center] History
>> `INPUT[textArea:history]`

## Traits/Goals
> [!column|no-t flex]
>> [!metadata|text-Center bg-c-yellow] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-pink] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-brown] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-orange] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`
>
>> [!metadata|text-Center] Goals
>> `INPUT[textArea:goals]`

## Player-Facing
> [!metadata|text-Center] What the Party Knows
> `INPUT[textArea:player_impression]`

## Secrets
`INPUT[textArea:secrets]`

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
> `$=await dv.view("views/npcRelationships", { current: dv.current() })`

## Quests
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const quests = dc.useQuery(`@page and #quest and connected(${currentPage.$link})`)
  const columns = [
    {
      id: 'Quest',
      value: (row) => row.$link
    },
    {
      id: 'Description',
      value: (row) => row.$frontmatter.description.raw || ''
    },
    {
      id: 'Involvement',
      value: (row) => row.$frontmatter.npcs.raw.find(n => n.name.includes(currentPage.$name)).description || ''
    }
  ]
  
  return <dc.Table rows={quests} columns={columns}/>
}
```

## Stats
```statblock
"name": "Arrigal (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "[[/5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "intelligence": !!int "4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Acrobatics|Acrobatics]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+9"
"damage_resistances": "poison"
"gear":
  - "[[/5. Mechanics/Items/Light Crossbow.md|light crossbow]]"
  - "[[/5. Mechanics/Items/Shortsword.md|shortsword]]"
"senses": "passive Perception 13"
"languages": "Thieves' cant plus any two languages"
"cr": "8"
"traits":
  - "desc": "During its first turn, Arrigal has advantage on attack rolls against\
      \ any creature that hasn't taken a turn. Any hit Arrigal scores against a [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]]\
      \ creature is a critical hit."
    "name": "Assassinate"
  - "desc": "If Arrigal is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, Arrigal instead takes no damage if\
      \ it succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "Arrigal deals an extra 14 (4d6) damage when it hits a target with a weapon\
      \ attack and has advantage on the attack roll, or when the target is within\
      \ 5 feet of an ally of Arrigal that isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ and Arrigal doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "Arrigal makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 6 (1d6\
      \ + 3) piercing damage, and the target must make a DC 15 Constitution saving\
      \ throw, taking 24 (7d6) poison damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 80/320 ft., one target. *Hit:*\
      \ 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution\
      \ saving throw, taking 24 (7d6) poison damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Light Crossbow"
  - "desc": "11\n\n- The target is unable to perform a certain kind of act involving\
      \ fine motor control, such as tying knots, writing, playing an instrument, sewing,\
      \ or casting spells that have somatic components. When this curse ends, the\
      \ Vistana takes 1d6 psychic damage.  \n- The target's appearance changes in\
      \ a sinister yet purely cosmetic way. For example, the curse can place a scar\
      \ on the target's face, turn the target's teeth into yellow fangs, or give the\
      \ target bad breath. When this curse ends, the Vistana takes 1d6 psychic damage.\
      \  \n- A nonmagical item in the target's possession (chosen by the DM) disappears\
      \ and can't be found until the curse ends. The lost item can weigh no more than\
      \ 1 pound. When this curse ends, the Vistana takes 1d6 psychic damage.  \n-\
      \ The target gains vulnerability to a damage type of the Vistana's choice. When\
      \ this curse ends, the Vistana takes 3d6 psychic damage.  \n- The target has\
      \ disadvantage on ability checks and saving throws tied to one ability score\
      \ of the Vistana's choice. When this curse ends, the Vistana takes 3d6 psychic\
      \ damage.  \n- The target's attunement to one magic item (chosen by the DM)\
      \ ends, and the target can't attune to the chosen item until the curse ends.\
      \ When this curse ends, the Vistana takes 5d6 psychic damage.  \n- The target\
      \ is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
      \ or both. When this curse ends, the Vistana takes 5d6 psychic damage.  \n\n\
      The curse lasts until ended with a [[/5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
      \ spell, a [[/5. Mechanics/Spells/Remove Curse.md|remove curse]] spell, or similar\
      \ magic. It doesn't end when the target dies. If a cursed target is returned\
      \ to life, the curse remains in effect."
    "name": "Curse (Recharges After a Long Rest)"
  - "desc": "11\n\nA Vistana who uses Evil Eye can't use it again before finishing\
      \ a short or long rest. Once a target succeeds on a saving throw against a Vistana's\
      \ Evil Eye, it is immune to the Evil Eye of all Vistani for 24 hours."
    "name": "Evil Eye (Recharges after a Short or Long Rest)"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/arrigal-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
