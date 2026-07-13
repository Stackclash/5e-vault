---
obsidianUIMode: preview
statblock: inline
location:
condition: healthy
images:
  - z_Assets/PlaceholderImage.png
relationships:
  - "Baba Lysaga (COS)|ally of convenience"
tags:
  - npc
aliases:
  - Mab
  - Queen of Air and Darkness
pronounced: MAB (rhymes with "cab")
race:
gender: female
age:
alignment: Chaotic Neutral
occupation:
  - Queen of Air and Darkness
  - Ruler of the Gloaming Court
groups:
  - Gloaming Court
religions: []
description: >-
  Mab appears as a tall, sharp-featured woman wrapped in layers of dusk-grey and
  black, her gown seeming to trail off into mist rather than hem at any fixed
  point. Her eyes have no visible pupil — just a depth of near-black that
  reflects no light back. She wears a crown that looks, depending on the angle,
  like antlers, thorns, or the bare branches of a winter tree. She never raises
  her voice; she doesn't need to. Owls and ravens settle near her without being
  called, and go still.
history: >-
  Mab has ruled the Gloaming Court since before mortal record-keeping in
  Eldoria began, locked in the ancient, only-sometimes-hostile rivalry with
  Titania and the Summer Court that defines the Feywild's seelie/unseelie
  divide. She does not consider herself evil, and resents the label — to her,
  the Gloaming Court simply keeps a different kind of order than Titania's:
  one built on debts, names, and bargains kept to the letter. She has stood
  apart from the mortal-plane politics of Barovia and Eldoria for centuries,
  but old dark-magic practitioners like [[Baba Lysaga (COS)|Baba Lysaga]] have
  long known how to petition her court for favors, at a price.
personality: >-
  Coldly gracious, unhurried, and precise. She never lies, but she never
  volunteers the whole truth either — every sentence she offers is exactly as
  true and exactly as incomplete as it needs to be to still count as a bargain
  kept.
ideal: A debt incurred is a debt owed, regardless of who incurred it or why.
bond: The Gloaming Court's word is absolute — she has never broken a bargain, and never will.
flaw: >-
  She values the form of a bargain over its spirit, and over the wellbeing of
  anyone bound by one — including, at times, her own subjects.
goals: >-
  Maintain the Gloaming Court's standing and its rivalry with the Summer
  Court; collect on every debt owed to her, eventually; extract value from
  the bargain she struck with Baba Lysaga now that it has come due on
  travelers of real consequence.
likes: Precise language, old debts, ravens and owls, the look on a mortal's face when they realize what they agreed to.
dislikes: Sloppy bargains, being rushed, the Summer Court's easy warmth.
partyRelationships:
  Midnight Covenant: Acquaintance
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

```
^statblock

> [!note] DM Note — No Combat Stat Block Yet
> Mab is not intended to fight the party in her introductory scene — she appears after [[Baba Lysaga (COS)|Baba Lysaga]] has already fled, purely to collect on the bargain. If she's ever needed in combat, [[5. Mechanics/Bestiary/Fey/Winter Eladrin (MPMM).md|Winter Eladrin (MPMM)]] (CR 10) is a reasonable archfey-tier base to reflavor rather than building her from scratch.

## DM Notes
### Hidden Details
Her deal with [[Baba Lysaga (COS)|Baba Lysaga]]: in exchange for a pack of [[5. Mechanics/Bestiary/Fey/Yeth Hound (MPMM).md|Yeth Hounds]] and a glamour to disguise herself as a fey bargain-broker, Lysaga owed Mab a future favor of her own — Mab hasn't called it in yet, and hasn't decided if she will. She's less interested in Lysaga's vendetta than in what she can extract from mortals capable of killing a vampire lord and walking the planes uninvited.

### General Notes

