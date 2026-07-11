---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Places of Interest/The Umbral Athenaeum.md|The Umbral Athenaeum]]"
condition: healthy
images:
  - z_Assets/NPCs/Caldris Velmont.png
relationships: []
tags:
  - npc
  - monster/cr/12
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Lord Caldris Velmont
pronounced: KAL-dris VEL-mont
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: male
age: 48
alignment: Neutral Evil
occupation:
  - Councilor of Enchantment
groups:
  - Umbral Athenaeum Council
religions: []
description: |-
  Lord Caldris Velmont is a strikingly handsome human dressed in elegant aristocratic robes adorned with gold-thread embroidery. His dark hair is always perfectly styled, and several rings bearing subtle enchantment runes adorn his fingers.
  His voice is smooth and persuasive, and he maintains an easy smile that puts others at ease.
  Yet something about him always feels slightly rehearsed — as if every gesture and expression were chosen carefully in advance.
  When he studies someone, his eyes sharpen with quiet calculation, like a chess player evaluating a board.
history: |-
  Caldris Velmont began his career as a royal advisor to a minor noble house where his skill in persuasion and subtle enchantments quickly elevated his influence. His political maneuvering eventually secured him a position within the Umbral Athenaeum.
  Over time he cultivated relationships with nobles, merchants, and powerful spellcasters across Bruokdon.
  Within the council he presents himself as a voice of diplomacy and stability — though some quietly suspect his ambitions reach far beyond the Institute.
personality: Charming and manipulative.
ideal: Control creates peace.
bond: Secretly loyal to powerful political patrons.
flaw: Believes he is smarter than everyone else.
goals: Expand the Institute’s influence over Bruokdon politics.
likes: elegant parties, persuasion
dislikes: unpredictability
partyRelationships: {}
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
>```meta-bind
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
*Reskin of [[5. Mechanics/Bestiary/Humanoid/Archmage.md|Archmage]] (CR 12, MM p.342) — same chassis, spell list reflavored toward Enchantment/control to match his role as Councilor of Enchantment. See DM Notes for design rationale.*
```statblock
name: Lord Caldris Velmont
size: Medium
type: humanoid
subtype: human
alignment: Neutral Evil
ac: 12
ac_class: "15 with [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]"
hp: 99
hit_dice: 18d8 + 18
modifier: 2
speed: 30 ft.
stats:
  - 10
  - 14
  - 12
  - 20
  - 15
  - 16
saves:
  - intelligence: 9
  - wisdom: 6
skillsaves:
  - name: "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    desc: "+13"
  - name: "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    desc: "+13"
  - name: "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    desc: "+11"
  - name: "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    desc: "+7"
senses: passive Perception 12
languages: Common, Elvish, Infernal, plus any three other languages
cr: "12"
traits:
  - name: Spellcasting
    desc: |-
      Velmont is an 18th-level spellcaster. His spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). He can cast [[/5. Mechanics/Spells/Disguise Self.md|disguise self]] and [[/5. Mechanics/Spells/Invisibility.md|invisibility]] at will and has the following wizard spells prepared:

      **Cantrips (at will):** [[/5. Mechanics/Spells/Friends.md|friends]], [[/5. Mechanics/Spells/Mage Hand.md|mage hand]], [[/5. Mechanics/Spells/Message.md|message]], [[/5. Mechanics/Spells/Minor Illusion.md|minor illusion]]

      **1st level (4 slots):** [[/5. Mechanics/Spells/Charm Person.md|charm person]], [[/5. Mechanics/Spells/Detect Magic.md|detect magic]], [[/5. Mechanics/Spells/Mage Armor.md|mage armor]]*, [[/5. Mechanics/Spells/Tashas Hideous Laughter.md|Tasha's hideous laughter]]

      **2nd level (3 slots):** [[/5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[/5. Mechanics/Spells/Misty Step.md|misty step]], [[/5. Mechanics/Spells/Suggestion.md|suggestion]]

      **3rd level (3 slots):** [[/5. Mechanics/Spells/Counterspell.md|counterspell]], [[/5. Mechanics/Spells/Fly.md|fly]], [[/5. Mechanics/Spells/Hypnotic Pattern.md|hypnotic pattern]]

      **4th level (3 slots):** [[/5. Mechanics/Spells/Banishment.md|banishment]], [[/5. Mechanics/Spells/Confusion.md|confusion]], [[/5. Mechanics/Spells/Stoneskin.md|stoneskin]]*

      **5th level (3 slots):** [[/5. Mechanics/Spells/Dominate Person.md|dominate person]], [[/5. Mechanics/Spells/Modify Memory.md|modify memory]], [[/5. Mechanics/Spells/Scrying.md|scrying]]

      **6th level (1 slot):** [[/5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]]

      **7th level (1 slot):** [[/5. Mechanics/Spells/Teleport.md|teleport]]

      **8th level (1 slot):** [[/5. Mechanics/Spells/Mind Blank.md|mind blank]]*

      **9th level (1 slot):** [[/5. Mechanics/Spells/Time Stop.md|time stop]]

      *Velmont casts these spells on himself before combat.
  - name: Magic Resistance
    desc: Velmont has advantage on saving throws against spells and other magical effects.
  - name: Rings of Silent Passage
    desc: Velmont wears several enchanted rings. Up to 3 times per day, he can cast misty step as a bonus action without expending a spell slot.
actions:
  - name: Ring-Channeled Bolt
    desc: "*Ranged Spell Attack:* +9 to hit, range 60 ft., one target. *Hit:* 4 (1d4 + 2) force damage, loosed from the runes etched into his rings rather than any weapon."
source:
  - Homebrew
```
^statblock

## DM Notes
### Hidden Details


### General Notes
**Stat block design (2026-07-10):** DM called for CR ~12 given his standing as a council member of [[The Umbral Athenaeum|The Umbral Athenaeum]]. Built as a reskin of [[5. Mechanics/Bestiary/Humanoid/Archmage.md|Archmage]] (CR 12, MM p.342) — identical chassis (AC 12/15 w/ mage armor, HP 99, ability scores, Magic Resistance, spell slot progression, at-will Disguise Self/Invisibility), with the prepared spell list swapped level-for-level toward Enchantment/control to match "Councilor of Enchantment": Magic Missile→Tasha's Hideous Laughter, Mirror Image→Suggestion, Lightning Bolt→Hypnotic Pattern, Fire Shield→Confusion, Cone of Cold→Dominate Person, Globe of Invulnerability→Mass Suggestion, Dominate Monster/Feeblemind considered for 8th but kept Mind Blank* for the paranoid-survivor angle. Dagger reflavored as a ring-channeled ranged force attack. Added one signature trait, Rings of Silent Passage (3/day bonus-action misty step, no slot cost), to mechanically back up his established habit of always finding a clean exit.

Since 5e balances prepared spells primarily by slot level rather than school, level-for-level swaps hold the published CR without re-deriving it from the defensive/offensive tables — but note the tradeoff: this build trades some raw DPR for single-target lockdown (Dominate Person, Hold-tier effects via Confusion/Banishment), which reads harder at the table than the DPR math shows, since it can take a PC out of a fight outright rather than just chip damage. Worth a gut-check the first time he's actually run in combat.

**Balance flag:** he is not built as this session's opponent — the [[2026-07-11|2026-07-11 session prep]] keeps him restrained throughout, and canon has him flee rather than fight once freed. A solo CR 12 against the 4-active-member Midnight Covenant (level 10) would land as deadly by the party note's Lazy DM benchmark (CR sum 12 vs. "potentially deadly" at >20 is fine solo, but he hits much harder alone than that heuristic suggests thanks to Dominate Person/Confusion/Mass Suggestion) — treat any future straight fight with him as a genuine boss encounter, not a background skirmish.
