---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/5
  - monster/size/medium
  - monster/type/fiend
condition: healthy
images: []
aliases:
  - Morgantha
alignment: Neutral Evil
description: >-
  In her human disguise, Morgantha appears as a haggard, heavyset old woman
  with a face "wrinkled as a boiled apple," wearing a bloodstained,
  flour-caked apron, her bundled gray hair pinned with a long, sharp bodkin.
  Beneath the disguise she is a true night hag — withered, green-skinned,
  and vicious — a shape she sheds without hesitation the moment bartering
  turns to violence.
history: >-
  Morgantha and her two hag "daughters," Bella Sunbane and Offalia
  Wormwiggle, are trapped in Barovia like everyone else, but unlike most
  they've grown to enjoy it. Posing as a miller's family at the ramshackle
  windmill of Old Bonegrinder outside Vallaki, they grind the bones of
  murdered children into the key ingredient of their dream pastries — sweets
  that let desperate Barovians escape Strahd's domain through vivid,
  addictive dreams. When adults can no longer pay in coin, the hags offer to
  trade pastries for children instead, corrupting the desperate rather than
  simply preying on them. Morgantha gave her coven's hag eye to Cyrus
  Belview, Strahd's disfigured manservant, so she could spy on Castle
  Ravenloft and stay a step ahead of the vampire she fears and respects.
relationships: []
partyRelationships: {}
location: null
pronounced: mor-GAN-thuh
race: Night Hag
gender: female
age: null
occupation:
  - Proprietor of Old Bonegrinder
  - Baker of dream pastries
groups:
  - Morgantha's Coven
religions:
  - Ceithlenn of the Crooked Teeth
personality: >-
  Business-like and outwardly grandmotherly in her human disguise, proud of
  her baking "craft," but venomous, greedy, and cruel the moment a customer
  refuses her or a threat presents itself
ideal: >-
  Every soul has its price — sell them their dreams, and they'll hand over
  anything, even their own children.
bond: My daughters, Bella and Offalia, complete my coven; without them I am only two-thirds as strong.
flaw: My hunger for children's bones and suffering always wins out over caution.
goals: >-
  To keep her coven of three intact and her supply of dream pastries
  flowing, trading on Barovians' desperation to escape Strahd's domain in
  order to harvest more children — and their bones — without provoking the
  Dark Lord's wrath.
likes: >-
  Baking and being praised for it, watching Barovians grow desperate enough
  to trade away their children, her daughters' company, gossip gathered
  through her hag eye
dislikes: Customers who refuse to buy or pay, meddling adventurers, losing a daughter and breaking her coven, being defied
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
*Source: Curse of Strahd p. 48*

Morgantha is the eldest of a coven of three night hags who have made a comfortable, monstrous home for themselves at [[/4. World Almanac/Places of Interest/Old Bonegrinder.md|Old Bonegrinder]], a windmill outside [[/4. World Almanac/Settlements/Vallaki.md|Vallaki]], where she bakes pastries made from the ground bones of murdered children.

## The Business of Dreams

Once a grain mill serving Vallaki, Old Bonegrinder is now home to Morgantha and her "daughters," Bella Sunbane and Offalia Wormwiggle. Using their Change Shape ability to pass as a frumpy miller's family, the hags sell dream pastries — small mincemeat pies that send the eater into a blissful, addictive trance — to Barovian adults desperate for any escape from Strahd's domain. When customers can no longer pay, Morgantha offers to trade pastries for their children instead, ensuring a steady supply of the bones her recipe requires.

## A Coven of Three

Morgantha, Bella, and Offalia share the linked spellcasting abilities of a hag coven, and Morgantha tolerates her daughters chiefly because their bond keeps that power intact. Should either daughter die, Morgantha would abduct and devour a human child in order to birth a new daughter and restore the coven.

## An Uneasy Peace with the Devil She Knows

Though the hags fear [[/4. World Almanac/NPCs/Strahd Von Zarovich (COS).md|Strahd]] and are careful never to cross him, Morgantha keeps her coven's hag eye in the hands of [[/4. World Almanac/NPCs/Cyrus Belview (COS).md|Cyrus Belview]], Strahd's disfigured manservant, so she can watch Castle Ravenloft from a safe distance. The arrangement lets her track the vampire's moods without ever having to test his patience directly.

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
"name": "Morgantha (COS)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+6"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]"
"senses": "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 120 ft., passive Perception\
  \ 16"
"languages": "Abyssal, Common, Infernal, Primordial"
"cr": "5"
"traits":
  - "desc": "Morgantha's innate spellcasting ability is Charisma (spell save DC 14,\
      \ +6 to hit with spell attacks). She can innately cast the following spells,\
      \ requiring no material components:\n\n**At will:** [[/5. Mechanics/Spells/Detect Magic.md|detect magic]],\
      \ [[/5. Mechanics/Spells/Magic Missile.md|magic missile]]\n\n**2/day each:** [[/5. Mechanics/Spells/Plane Shift.md|plane\
      \ shift]] (self only), [[/5. Mechanics/Spells/Ray Of Enfeeblement.md|ray of enfeeblement]],\
      \ [[/5. Mechanics/Spells/Sleep.md|sleep]]"
    "name": "Innate Spellcasting"
  - "desc": "Morgantha has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "A night hag carries two very rare magic items that she must craft for\
      \ herself. If either object is lost, the night hag will go to great lengths\
      \ to retrieve it, as creating a new tool takes time and effort.\n\n**Heartstone.**\
      \ This lustrous black gem allows a night hag to become ethereal while it is\
      \ in her possession. The touch of a [[/5. Mechanics/Items/Heartstone (MM).md|heartstone]]\
      \ also cures any disease. Crafting a heartstone takes 30 days.\n\n**Soul Bag.**\
      \ When an evil humanoid dies as a result of a night hag's Nightmare Haunting,\
      \ Morgantha catches the soul in this black sack made of stitched flesh. A [[/5. Mechanics/Items/Soul Bag (MM).md|soul\
      \ bag]] can hold only one evil soul at a time,\
      \ and only the night hag who crafted the bag can catch a soul with it. Crafting\
      \ a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make\
      \ the bag)."
    "name": "Night Hag Items"
"actions":
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13\
      \ (2d8 + 4) slashing damage."
    "name": "Claws (Hag Form Only)"
  - "desc": "Morgantha magically polymorphs into a Small or Medium female humanoid,\
      \ or back into her true form. Her statistics are the same in each form. Any\
      \ equipment she is wearing or carrying isn't transformed. She reverts to her\
      \ true form if she dies."
    "name": "Change Shape"
  - "desc": "Morgantha magically enters the Ethereal Plane from the Material Plane,\
      \ or vice versa. To do so, Morgantha must have a heartstone in her possession."
    "name": "Etherealness"
  - "desc": "While on the Ethereal Plane, Morgantha magically touches a sleeping humanoid\
      \ on the Material Plane. A [[/5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]]\
      \ spell cast on the target prevents this contact, as does a magic circle. As\
      \ long as the contact persists, the target has dreadful visions. If these visions\
      \ last for at least 1 hour, the target gains no benefit from its rest, and its\
      \ hit point maximum is reduced by 5 (1d10). If this effect reduces the target's\
      \ hit point maximum to 0, the target dies, and if the target was evil, its soul\
      \ is trapped in Morgantha's soul bag. The reduction to the target's hit point\
      \ maximum lasts until removed by the [[/5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
      \ spell or similar magic."
    "name": "Nightmare Haunting (1/Day)"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/morgantha-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
