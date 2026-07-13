---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/12
  - monster/size/medium
  - monster/type/humanoid/dusk-elf
condition: healthy
images:
  - 4. World Almanac\NPCs\img\patrina-velikovna.webp
aliases:
  - Patrina Velikovna
alignment: Neutral Evil
description: >-
  In life, a striking dusk elf archmage whose command of the black arts
  nearly matched Strahd's own; in death, a shrieking, spectral banshee
  bound to her crypt, wailing with the horror of her undeath.
history: >-
  Patrina seduced Strahd centuries ago with the promise of immortality,
  revealing the Amber Temple's secrets to him — only to be cast aside when
  he fell for Tatyana instead. She returned after Strahd's curse began,
  hoping to share in his new power, and asked him to make her his dark
  bride. Before he could finish draining her life, her own people stoned
  her to death to deny Strahd his prize. Strahd entombed her body in
  Castle Ravenloft's catacombs, where she rose as a banshee, and ordered
  his chamberlain Rahadin to slaughter the dusk elf women and mutilate her
  brother Kasimir for his role in her death. She now speaks to Kasimir in
  dreams, claiming a repentance she does not feel, hoping he will find a
  way to restore her to life and power.
relationships: []
partyRelationships: {}
location: null
pronounced: puh-TREE-nuh vel-ih-KOV-nuh
race: Dusk Elf
gender: female
age: null
occupation:
  - Archmage
  - Would-be bride of Strahd von Zarovich
groups:
  - Dusk elves of Barovia
religions:
  - The nameless god of secrets
personality: >-
  Ambitious and coldly manipulative, masking a ruthless hunger for power
  behind a veneer of contrition and love.
ideal: >-
  Power is the only love worth pursuing — and I will have Strahd's, one way
  or another.
bond: >-
  My brother Kasimir still believes in my redemption — a belief I will use
  for as long as it serves me.
flaw: >-
  I am no one's plaything, but pride and hunger for power have doomed me
  twice already.
goals: >-
  To be restored to life, return to Castle Ravenloft, and claim her place
  as Strahd's bride at last — avenging herself on Rahadin along the way.
likes: 'Forbidden magic, flattery, being underestimated'
dislikes: >-
  Rahadin, her own people's cowardice, being denied power she believes she
  deserves
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
*Source: Curse of Strahd p. 89*

Patrina Velikovna was a dusk elf of prodigious and dangerous ambition — a student of the black arts whose power nearly rivaled [[Strahd Von Zarovich (COS)|Strahd]]'s own, long before he became a vampire.

## The Seduction

Patrina came to Castle Ravenloft and set her sights on Strahd, dangling before him the one thing he desired above all: immortality. She told him of [[The Amber Temple]], the ancient vault hidden in the Balinok Mountains where the secret to eternal power was said to be hidden. Intrigued and suspicious in equal measure, [[Rahadin (COS)|Rahadin]], Strahd's chamberlain, watched her carefully — but while Strahd was away exploring the temple she had revealed to him, it was Rahadin who found the woman who would truly steal Strahd's heart: Tatyana. When Strahd returned and fell for Tatyana instead, Rahadin had the pleasure of telling Patrina that her presence at the castle was no longer wanted.

## Return and Ruin

Years later, word reached the Vistani camps where Patrina's people had settled that Tatyana was dead and that Strahd had become a vampire, cursed to rule Barovia forever. Ageless herself, Patrina returned to Ravenloft, hoping this time to win what she had failed to win before — not Strahd's love, which she no longer expected, but a share of his power. She asked Strahd to solemnize a dark marriage between them, and — drawn to her knowledge and ambition — he agreed.

Before Strahd could drain the last of her life and complete the transformation, Patrina's own people rose up and stoned her to death, an act of mercy meant to deny Strahd his bride. Strahd was furious at being cheated of his prize. He claimed her body and entombed it within the catacombs of [[Castle Ravenloft]] — Crypt 21, marked simply *Patrina Velikovna — Bride*. As punishment for the stoning, Strahd sent Rahadin to slaughter the dusk elf women so they could never breed again, and to mutilate Patrina's own brother, [[Kasimir Velikov (COS)|Kasimir]], who had organized her death.

## The Banshee in Crypt 21

Patrina's spirit could not rest. She rose in her crypt as a [[5. Mechanics/Bestiary/Undead/Banshee.md|banshee]], wailing with a horror that claws at the soul of anyone who dares open her tomb. Destroying the banshee only discorporates her; she reforms in the crypt a day later, and only a [[5. Mechanics/Spells/Hallow.md|hallow]] spell cast on the crypt keeps her from returning. She will not find true rest until she is formally wed to Strahd — a fate Strahd himself no longer seems interested in granting her.

## Dreams of the Damned

For centuries, Patrina has reached out to Kasimir in dreams, insisting that years of guilt and regret have cleansed her soul of evil and begging him to free her from her eternal torment. Kasimir wants desperately to believe her. In truth, Patrina remains exactly what she always was: ambitious, manipulative, and hungry for power. If Kasimir ever secures the means to restore her to life — the dark gift of Zhudun, hidden within the Amber Temple — she will feign repentance only until her strength and spells return, then travel to Castle Ravenloft to try, once more, to become Strahd's vampire bride. She has not forgotten what Rahadin did to her brother, and would gladly use unwitting adventurers to settle that score along the way.

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
"name": "Patrina Velikovna (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "Dusk elf"
"alignment": "Neutral Evil"
"ac": !!int "12"
"ac_class": "15 with [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "20"
  - !!int "15"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "9"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+13"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+13"
"damage_resistances": "damage from spells; nonmagical bludgeoning, piercing, slashing\
  \ (from stoneskin)"
"gear":
  - "[[/5. Mechanics/Items/Dagger.md|dagger]]"
"senses": "passive Perception 12"
"languages": "any six languages"
"cr": "12"
"traits":
  - "desc": "Patrina is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 17, +9 to hit with spell attacks). Patrina can cast [[/5. Mechanics/Spells/Disguise Self.md|disguise\
      \ self]] and [[/5. Mechanics/Spells/Invisibility.md|invisibility]]\
      \ at will and has the following wizard spells prepared:\n\n**Cantrips (at will):**\
      \ [[/5. Mechanics/Spells/Fire Bolt.md|fire bolt]], [[/5. Mechanics/Spells/Light.md|light]],\
      \ [[/5. Mechanics/Spells/Mage Hand.md|mage hand]], [[/5. Mechanics/Spells/Prestidigitation.md|prestidigitation]],\
      \ [[/5. Mechanics/Spells/Shocking Grasp.md|shocking grasp]]\n\n**1st level (4 slots):**\
      \ [[/5. Mechanics/Spells/Detect Magic.md|detect magic]], [[/5. Mechanics/Spells/Identify.md|identify]],\
      \ [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]*, [[/5. Mechanics/Spells/Magic Missile.md|magic missile]]\n\
      \n**2nd level (3 slots):** [[/5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]],\
      \ [[/5. Mechanics/Spells/Mirror Image.md|mirror image]], [[/5. Mechanics/Spells/Misty Step.md|misty step]]\n\
      \n**3rd level (3 slots):** [[/5. Mechanics/Spells/Counterspell.md|counterspell]],\
      \ [[/5. Mechanics/Spells/Fly.md|fly]], [[/5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]\n\
      \n**4th level (3 slots):** [[/5. Mechanics/Spells/Banishment.md|banishment]], [[/5. Mechanics/Spells/Fire Shield.md|fire\
      \ shield]], [[/5. Mechanics/Spells/Stoneskin.md|stoneskin]]*\n\
      \n**5th level (3 slots):** [[/5. Mechanics/Spells/Cone Of Cold.md|cone of cold]],\
      \ [[/5. Mechanics/Spells/Scrying.md|scrying]], [[/5. Mechanics/Spells/Wall Of Force.md|wall of force]]\n\
      \n**6th level (1 slots):** [[/5. Mechanics/Spells/Globe Of Invulnerability.md|globe of invulnerability]]\n\
      \n**7th level (1 slots):** [[/5. Mechanics/Spells/Teleport.md|teleport]]\n\n**8th\
      \ level (1 slots):** [[/5. Mechanics/Spells/Mind Blank.md|mind blank]]*\n\n**9th\
      \ level (1 slots):** [[/5. Mechanics/Spells/Time Stop.md|time stop]]\n\n*Patrina\
      \ casts these spells on itself before combat."
    "name": "Spellcasting"
  - "desc": "Patrina has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "*Melee  or Ranged Weapon Attack:* +6 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. *Hit:* 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"source":
  - "CoS"
"image": "/4. World Almanac/NPCs/token/patrina-velikovna-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
