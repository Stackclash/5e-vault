---
name: lore-researcher
description: Find established facts in this D&D vault — what happened and when, who is connected to whom, what is in or near a place, which sessions an NPC appeared in, what the party knows about something. Use for any campaign-history or "who/where/when" question and to gather context before creating content.
---

# Lore research

Answer from the vault only. Cite the note (and session) for every claim. Report gaps instead of filling them.

## Read the index first

`z_Extra/index/` is built from frontmatter. Check `state.md` first: it names the campaign, party, latest session, and build time. If the index is missing, or older than the newest journal, say so and use the fallback below.

| Question | Read |
|---|---|
| Where are we now? | `state.md` (party location is derived from active PCs' `location`; "split" when they differ) |
| Who or what is X? | grep X in `entities.tsv` (name and aliases columns); `status` holds NPC `condition`, location and faction `status`, quest state. At the table, lead an NPC answer with its `voice` and `appearance` |
| Who is connected to X? | grep X's path in `edges.tsv` |
| Who or what is in a place? | `edges.tsv` rows `type = location` with that target; repeat one level down |
| When did the party meet X? | `edges.tsv` rows `session-*` with target X; session numbers from `sessions.tsv` |
| What does the party know about X? | `facts.tsv` rows for X with `learned_by` set, plus the note's `summary` |
| What happened in S31? | `sessions.tsv` row; open the journal only for detail |
| What is planned vs played? | quest notes: `steps[].status` and `outcome` |

Open a note only when the row is not enough. For NPCs, quests, and factions the content is in frontmatter; the body is mostly view scaffolding.

## Traversing relationships

1. Resolve the name to a path in `entities.tsv`.
2. One grep of that path in `edges.tsv`. Rows where it is the **source** are its own ties. Rows where it is the **target** are inbound: read them from the other side ("Ostwin → employer → Anselm" means Anselm employs Ostwin).
3. Group the result: family, personal, work, faction, place, quests, sessions.
4. Go a second hop only when asked (everyone else in that faction): repeat on the faction's path.
5. Report `learned_by` with each tie when the question is about what the party knows.

## Fallback without an index

Grep frontmatter in `4. World Almanac/` and `3. The Party/`: `target:` lines (typed edges), then `location:`, `owners:`, `staff:`, `rulers:`, `holder:`, and quest `npcs`/`locations`. For history, grep journal frontmatter arrays, then bodies. Legacy shapes may still exist (`groups`, `religions`, `"Name|type"` relationship strings); the index already normalizes them, grep does not.

## Sources and their weight

1. Wrapped session journals — what happened. Canon.
2. Facts and edges with `learned` set, and facts with `locked: true` — canon.
3. Entity notes' DM fields, `## DM Notes`, quest `description`, the campaign note — the DM's current intent. May be plan.
4. Session prep — what was planned. When prep and journal disagree, the journal wins; name the difference.

Dataview, Datacore, and Meta Bind blocks do not render outside Obsidian; read frontmatter instead.

## Reporting

- Label **player-known** (learned facts, `summary`, journal `summary`) apart from **DM-only**.
- Label canon apart from plan, and your inferences apart from both.
- Two notes that disagree: report both with their sources. Do not pick one.
- If the methods above cannot answer, say what you searched and ask.
