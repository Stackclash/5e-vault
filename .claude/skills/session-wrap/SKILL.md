---
name: session-wrap
description: Process a played D&D session into the vault — draft the journal, fill the reveal ledger, canonize improvised facts from the live-session log, propose what the party learned, update NPC, quest, item, and faction state, and reconcile the campaign plan. Use after a session, when the DM shares raw session notes, or when a live-session scratch log needs filing.
---

# Session wrap

Turn what happened into canon, with the DM approving every line. Draft first, write second.

## Inputs

- The DM's raw notes, and the session's log in `2. Scratch Notes/` (`S<N> Live Session - Improvised Facts.md`) if one exists.
- The prep note the session used, and the previous journal.
- `z_Extra/index/state.md`. The journal is created from the Session Journal template in Obsidian; if it does not exist yet, ask the DM to create it rather than hand-building one.

## Step 1 — one proposal document

Deliver everything below in a single reply, every line numbered, so it can be answered in one pass.

1. **Journal draft.** Title, `summary` (player-facing, read aloud, zero DM-only content), body sections in the template's layout (recap, what happened; `## Errata` only after wrap), `date`, `fc-date`, `fc-end`, `prep_notes`, `party_level`, and `spotlight` (PCs who drove the session, each with an evidence line; every one must be in `party_present`). Put what you cannot know in a short question list; never guess dates.
2. **Ledger.** `party_present`, `locations`, `npcs`, `quests`, `items`, `factions`, each entry with the note line it came from.
3. **New entities.** Names with no note: create (which type), alias to an existing note, or skip. Nameless one-off characters are skipped by default and stay in the journal.
4. **Reveals.**
   - Entities to mark `revealed`, each with a proposed `summary` and `reveal` list. Entities in the ledger you recommend holding back (`revealed: false`), with the reason.
   - Prepped facts that landed: match the prep note's secrets and clues against the notes; list each as learned or not.
   - New facts, worded for players.
   - Relationship edges the party learned.
5. **State changes**, values from `Configuration.enums`: NPC `condition` (including captured, missing, unknown), `location`, `party_relationships`; location `status`; quest `active`/`completed`; story-item `holder` and `charges`; faction `standing`, `renown`, `status`, and `clock`; party `funds` when loot is banked. The party's whereabouts are proposed as PC `location` changes, never as a party field.
6. **Improvised canon.** Each line of the live-session log: where it will be filed, or why not.
7. **Contradictions.** Anything in the notes that conflicts with canon, with both sources. Never resolved here.

## Step 2 — the DM answers by number

Accept, strike, or reword. Silence on a line is not acceptance.

## Step 3 — write accepted lines only

Use the `vault-note` skill. In order: new entity notes, entity updates, the journal (set `wrapped: true` last), then mark the scratch log filed by adding `filed: true` to its frontmatter. Propose the journal rename; it is a move.

## Step 4 — reconcile and check

1. Run the `campaign-planner` skill's plan reconciliation on the wrapped journal.
2. Run the `vault-lint` skill: lint, then rebuild the index.
3. Report: what was written, what was held, what the lint found, and what the next prep inherits (skipped steps, open questions).

## Rules

- A wrapped journal is canon. Later corrections go under `## Errata`.
- Never set `revealed`, `learned`, `summary`, `reveal`, or `public_name` from inference alone; each needs an accepted line.
- A fact the party learned is recorded as they learned it, even if it is false in the fiction. The truth is a separate fact.
- Lore outlives the session: details about an NPC, place, faction, or item go in that entity's note, not only in the journal.
- Player inventory in the vault lags play; ask before recording who holds what.
