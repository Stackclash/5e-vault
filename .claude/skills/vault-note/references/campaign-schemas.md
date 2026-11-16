# Campaign, quest, session, and party schemas

## Quest, arc, thread — `3. The Party/Quests/` — `quest`

```yaml
obsidianUIMode: preview
kind: quest                   # arc | quest | thread
parent: "[[arc|…]]"          # optional
world: "[[…|…]]"
active: {}                    # {Party: bool}
completed: {}                 # {Party: bool}
gist: ""
summary: ""                   # player-safe hook-level blurb
description: ""               # DM planning; may hold unrevealed beats
revealed: {}
facts: []
secrets: ""
giver: "[[…]]"
npcs: []                      # [{name: "[[…]]", description: ""}]
locations: []
items: []
factions: []
pcs: []                       # PCs whose thread this is
steps: []                     # see below
tags: [quest]
```

Step shape:

```yaml
steps:
  - text: "Find the Tallyman in Duskferry."
    completed: { Midnight Covenant: false }
    status: planned           # planned | played | skipped (still usable) | void (made impossible)
    outcome: ""               # one line of what actually happened + journal link, when played
```

Arcs and acts are quest notes with `kind: arc`. An arc's body carries `## Plan Changelog`: one dated line per change (what, why, which session).

## Session journal — `session-journal`

```yaml
obsidianUIMode: preview
date: 2026-10-17              # real-world play date; never guess
session_number: 48
summary: ""                   # player-facing recap, read aloud
party: "[[3. The Party/Parties/….md|…]]"
prep-notes: "[[1. DM Toolkit/Session Prep/<Campaign>/<date>.md|<date>]]"
fc-date: 973-2-31
fc-end: 973-2-31
fc-category: Session
timelines: [COS]
aat-render-enabled: true
party_present: []             # ledger arrays: links to what was actually encountered
locations: []
npcs: []
quests: []
items: []                     # story-item notes or 5. Mechanics items
factions: []
wrapped: false                # true once the DM approved the wrap; then canon
publish: false                # true = the recap may go to the site
tags: [session-journal]
```

Body headings: `## Session Overview`, `## Key Learnings`, `## Items Of Importance`, `## What Happened`, optional `## Public`, `## Errata`. DM-only asides use `> [!dm]`. The field is `party`, not `campaign`.

## Session prep — `session-prep`

`date`, `session_number` (the session it targets), `journal` (link back once played). Body follows the Lazy DM headings in the template. Secrets and clues link to `facts` on the entity they concern. Prep notes are DM-only in whole and stage a session; lore goes in entity notes.

## Campaign — `campaign`

`party`, `world`, `summary` (player-safe premise), `site_slug`. The body is the campaign bible and is DM-only in whole. It carries `## Plan Changelog`.

## Party — `party`

Travel fields only (`travel_speed`, `travel_multiplier`, `travel_bonus`, `travel_hours_per_day`, `exhaustion_level`, `encumbered`, `var_mins`, `travel_calc`, `hours_per_day`, `movement`, `speed`) and transport-cost inputs (`travel_distance`, `danger_level`, `familiar_route`, `party_members`, `lifestyle_cost_sp`, `include_meals`, `coach_cost`, `coach_cost_per_mile`, `messenger_cost_per_mile`, `ship_cost_per_mile`; moved from the retired Travel calculator in J4). Roster comes from player notes.

## Player character — `player`

Generated from D&D Beyond; never hand-author the sheet fields. "Update From DnD Beyond" overwrites the sheet keys and leaves others alone, so `tagline`, `gist`, `summary`, `facts`, and `revealed` are safe to add. `party` and `location` are links. Inventory lags play: confirm with the DM before relying on it.
