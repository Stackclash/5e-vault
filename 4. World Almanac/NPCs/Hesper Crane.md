---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Places of Interest/The Cinderworks.md|The Cinderworks]]"
condition: healthy
images:
  - z_Assets/PlaceholderImage.png
relationships: []
tags:
  - npc
  - monster/cr/8
  - monster/size/medium
  - monster/type/humanoid/human
aliases:
  - Hesper Crane
  - the Quartermaster
pronounced: HESS-per Crayn
race: "[[5. Mechanics/Races/Human.md|Human]]"
gender: female
age: 51
alignment: Neutral Evil
occupation:
  - Silent Ascendency Logistics Handler, The Cinderworks
groups:
  - Silent Ascendency
religions: []
description: |-
  Grey-haired and wiry, dressed like a foreman rather than a cultist — soot-stained coat, ledger always under one arm. A milky scar closes her left eye, a souvenir from a smuggling run that went wrong decades before the Ascendency ever found her useful. She counts everything twice, out loud, under her breath, whether or not anyone's listening.
history: |-
  Crane ran contraband through half of Greenfall before the Ascendency ever made contact — hired on as a professional, not a convert, when Marrow's operation needed someone who actually knew how to move goods without the crown noticing. She doesn't know who Vecna is, doesn't much care, and refers to her employers only by the money they pay on time. The Cinderworks depot has been hers to run for over a year: she never met "Lord Velmont" in person before now, only ever corresponded through couriers and a standing set of passwords Marrow set up when the arrangement began — which is exactly what makes the real Velmont's return so easy to sell and so dangerous to get wrong.
  The overdue shipment (intercepted by the party in S44) has her rattled. She has already sent one inquiry up the chain and is waiting on a reply she's increasingly sure isn't coming.
personality: Blunt, transactional, allergic to surprises. Trusts ledgers over people.
ideal: Everything has a price, including loyalty.
bond: Answers to whoever pays on time — currently the Silent Ascendency, but not out of any belief in their cause.
flaw: Her paranoia about the missing shipment makes her both harder to fool and quicker to bolt at the first sign of trouble.
goals: Account for the missing shipment, keep the Cinderworks running, and not be the one left holding the ledger when something goes wrong.
likes: exact counts, being paid on schedule, quiet nights
dislikes: surprises, couriers who talk too much, owing anyone an explanation
partyRelationships:
  Midnight Covenant: Acquaintance
player_impression: ""
secrets: |-
  STILL DM-ONLY (not yet revealed): Crane has never actually met Velmont in person — only Marrow-as-Velmont, and only ever remotely, through couriers and a standing password exchange. She has no way to detect the swap by sight. She *will* test the password if given any reason to doubt "Velmont," and she has already sent one unanswered inquiry up the chain about the missing shipment — a second silence from either direction is what breaks her composure.
  Her ledger names the Cinderworks' next relay contact in [[Duskferry]] by name and code — the intended payoff of a successful infiltration.
  She knows nothing about Vecna by name — only "the Undying King," Ascendency doctrine passed down the same way it reached Marrow's cell.
  If the ruse breaks or the fight turns against her, she surrenders rather than dies for an employer who isn't answering her messages — she has no loyalty worth dying for. If she escapes instead, she disappears into Greenfall and doesn't reappear at the Cinderworks; treat her as a loose end for a future session, not a guaranteed capture.
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
*Unmodified [[5. Mechanics/Bestiary/Humanoid/Blackguard (MPMM).md|Blackguard]] (CR 8, MPMM) — no stat changes. Crane reads as a hardened logistics enforcer rather than a knight, but the published block (multiattack, Aura of Hate, a small utility spell list) plays that role without modification. Use the linked bestiary note directly for her stats in the Initiative Tracker; this note carries her identity, motive, and secrets.*

## DM Notes
### Hidden Details
See Secrets above: she's never met the real Velmont, tests via a password exchange if suspicious, and her ledger is the payoff pointing to [[Duskferry]].

### General Notes
**Stat block design (2026-08-22):** built for [[The Second Ledger]]'s Cinderworks infiltration. Reskin choice: [[5. Mechanics/Bestiary/Humanoid/Blackguard (MPMM).md|Blackguard]] (CR 8) unmodified — she's dangerous enough to be a real threat if the ruse breaks, without inventing new mechanics for a secondary-op NPC. Paired with 2× [[5. Mechanics/Bestiary/Humanoid/Veteran.md|Veteran]] (CR 3 each) and 2× [[5. Mechanics/Bestiary/Humanoid/Thug.md|Thug]] (CR 1/2 each) for the full Cinderworks encounter — CR sum 15 against 5 level-10 PCs (Lazy DM benchmark: deadly at CR sum > 25) reads Hard-but-not-deadly, appropriately a notch below the Baba Lysaga fight on the other branch (CR sum 19) since this is a secondary op, not tonight's potential climax.
