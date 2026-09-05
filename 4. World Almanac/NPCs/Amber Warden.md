---
obsidianUIMode: preview
statblock: inline
location: "[[4. World Almanac/Places of Interest/Greyfen Hollow.md|Greyfen Hollow]]"
condition: healthy
images:
  - z_Assets/PlaceholderImage.png
relationships: []
tags:
  - npc
  - monster/cr/10
  - monster/size/large
  - monster/type/construct
aliases:
  - Amber Warden
race: "[[5. Mechanics/Bestiary/Construct/Stone Golem.md|Stone Golem]]"
gender: N/A
age: unknown
alignment: Unaligned
occupation:
  - Guardian construct, Silent Ascendency soul-vessel works
groups:
  - Silent Ascendency
religions: []
description: |-
  A hulking, roughly humanoid shape of fitted grey stone, seamed rather than carved — as if assembled, not sculpted. Thread-thin veins of amber run beneath its surface in the same pattern as the graft found on Marrow's corpse, but scaled up and multiplied: three fist-sized amber conduits are set into its shoulders and chest, each glowing faintly, each holding what looks — to anyone who stops to really look — like a slow, trapped current of light. When it moves, the amber pulses in time with its steps, and if a fight goes on long enough, a faint chorus of overlapping voices becomes audible from inside it, wordless and exhausted.
history: |-
  One of the Silent Ascendency's constructed guardians, grown around a core of stolen Eludrax soul-craft — the same "Amber Warden" motif referenced in the pipeline's power-harvesting operation (see the campaign bible's Active Threads). Built and stationed at [[Greyfen Hollow]] to protect the soul-vessel works there, animated by fragments of bound souls fed into it rather than any true will of its own. This is the first Amber Warden the party would actually encounter in person, rather than hear about secondhand through Marrow's neck-graft.
personality: None — a mindless construct animated by bound souls, not a mind of its own. It follows its binding, nothing more.
ideal: "—"
bond: "—"
flaw: Cannot be reasoned with, bribed, or intimidated — only fought, evaded, or shut down.
goals: Destroy or drive off any intruder at Greyfen Hollow that its binding marks as a threat.
likes: "—"
dislikes: "—"
partyRelationships:
  Midnight Covenant: Enemy
player_impression: ""
secrets: |-
  STILL DM-ONLY (not yet revealed): this is a physical, in-person confirmation of the Amber Wardens motif the party has only inferred so far from Marrow's neck-graft — proof the same soul-craft is being scaled up into guardian constructs, not just individual grafts.
  The three amber conduits are both its power source and its weak point: each holds a fragment of a bound soul, and each can be targeted and destroyed independently of the Warden's own hit points (see Stats). Destroying all three severs its link to the soul-vessel works' power and strips its magic resistance and its resistance to nonmagical weapons — the mechanical payoff for a party that investigates rather than just trading blows, and a deliberate echo of the anti-magic gems from the [[Stone Golem]] fight in S43.
  Freeing a bound soul by destroying its conduit is a small, unscored mercy — it doesn't grant the party anything mechanical, but it's true to the fiction and worth narrating if a player asks what happens to the soul.
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
*Reskin of [[5. Mechanics/Bestiary/Construct/Stone Golem.md|Stone Golem]] (CR 10, MM p.170) — same chassis (AC, HP, Slam multiattack, Magic Resistance, Immutable Form), with Force Slam swapped for a thematic Bound Wail and one new trait, Amber Conduits, added as this creature's signature weak point. See DM Notes for the CR math.*
```statblock
name: Amber Warden
size: Large
type: construct
alignment: Unaligned
ac: 17
ac_class: natural armor
hp: 178
hit_dice: 17d10 + 85
modifier: -1
speed: 30 ft.
stats:
  - 22
  - 9
  - 20
  - 3
  - 12
  - 1
damage_immunities: poison, psychic
damage_resistances: "bludgeoning, piercing, and slashing from nonmagical attacks (see Amber Conduits)"
condition_immunities: "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
senses: "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 120 ft., passive Perception 11"
languages: understands Common but can't speak
cr: "10"
traits:
  - name: Immutable Form
    desc: The Warden is immune to any spell or effect that would alter its form.
  - name: Magic Resistance
    desc: The Warden has advantage on saving throws against spells and other magical effects. It loses this trait once all three Amber Conduits (below) have been destroyed.
  - name: Amber Conduits
    desc: |-
      Three fist-sized amber conduits are set into the Warden's shoulders and chest, each carrying a fragment of a bound soul. Each conduit is AC 17, has 15 hit points, is immune to poison and psychic damage, and can be targeted directly by any attack or area effect that could reach the Warden (no special action required to target one instead of the Warden itself). A destroyed conduit can't be repaired and releases its captive soul in a brief flash of amber light.

      While at least one conduit is intact, the Warden has resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks, and advantage on saving throws against spells and magical effects (Magic Resistance, above). Once all three conduits are destroyed, it loses both benefits — its stone frame is still tough, but the soul-craft holding its higher defenses together is gone.
actions:
  - name: Multiattack
    desc: The Warden makes two Slam attacks.
  - name: Slam
    desc: "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:* 19 (3d8 + 6) bludgeoning damage."
  - name: Bound Wail (Recharge 5-6)
    desc: "The souls trapped within the Warden's amber cry out at once. Each creature within 15 feet of the Warden that can hear it must make a DC 16 Wisdom saving throw, taking 27 (6d8) psychic damage and becoming [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] of the Warden until the end of its next turn on a failed save, or half as much damage and no fright on a success."
source:
  - Homebrew
```
^statblock

## DM Notes
### Hidden Details
See Secrets above: the Amber Conduits are the tactical and narrative payoff for this fight — a party that investigates (or just gets lucky focusing fire) can strip the Warden's resistance and Magic Resistance mid-combat, and freeing a bound soul is a small mercy worth narrating.

**Tethered Wardens (Foundry floor, [[Greyfen Hollow]] area C3).** A Warden still plugged into the Reservoir's amber feed lines fights on modified terms: **at the start of each of its turns it regains 20 hit points, and its Amber Conduits cannot be reduced below 1 hit point** — they can't be destroyed while the feed holds. Cutting all three feed lines (AC 15, 25 hp each) ends the tether and returns it to the block as written. This is the central mechanic of the Foundry set-piece; full rules are in [[Greyfen Hollow]] under *The Machinery*. The threshold Warden on the surface is **not** tethered and uses this block unmodified.

**There is more than one.** This site manufactures Wardens — see [[Unfinished Amber Warden]] for the incomplete models standing in the Foundry cradles. The one guarding the surface approach is simply the first they finished and the one they could spare.

### General Notes
**Stat block design (2026-09-05):** Direct reskin of the MM Stone Golem (CR 10) — kept the exact envelope (AC 17, HP 178, +10/3d8+6 Slam ×2, Magic Resistance, Immutable Form) since it's the creature this monster is explicitly designed to echo (see the campaign bible's Active Threads — Amber Wardens, and the S43 Stone Golem fight it calls back to). Force Slam was swapped for **Bound Wail**, a recharge psychic AoE with a frighten rider — comparable power level to Force Slam's 3d8 force + forced movement, just reflavored around the bound-souls concept instead of raw kinetic force. Attack bonus and damage stay at the published Stone Golem's actual numbers rather than the DMG CR10 table's more conservative +7 — the same precedent already used for [[Lord Caldris Velmont]]'s Archmage reskin (published creature stats over-perform the generic table at this tier, and that's fine to inherit directly).

The one new axis is **Amber Conduits**, a three-part destructible weak point modeled on the anti-magic gems from the S43 Stone Golem fight. Mechanically it's a soft nerf available mid-fight (strip resistance + Magic Resistance), not a buff, so it doesn't push CR upward — if anything it gives the party a lever to make the fight easier than a stock Stone Golem, which is appropriate: this is meant to land as a hard, memorable "first Amber Warden" fight, not a harder rematch of S43's. Net CR holds at **10**, same as the base creature.

**Encounter math note:** solo CR 10 against this party (5 PCs × level 10 = 50 total levels) sits well under the party's own "deadly at CR sum > 25" Lazy DM benchmark — a real, hard-hitting single-target brute, not a session-climax-tier threat. See the [[2026-09-05]] session prep for the full encounter brief and how it's meant to play at the table.
