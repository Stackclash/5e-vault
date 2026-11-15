---
name: reveal-review
description: Review and update what the party knows in this D&D vault outside a session wrap — mark facts learned, reveal or hold back an NPC, place, faction, item, or quest, write player-safe summaries, backfill reveals for past sessions, or check what would appear on the player site. Use for "what do the players know about X", "mark that they learned Y", reveal backfills, and pre-publish reviews.
---

# Reveal review

The DM approves every reveal. This skill prepares the decisions and writes the accepted ones.

Field definitions: `vault-note` skill, `references/knowledge-model.md`.

## One entity

1. Read the entity's frontmatter and its rows in `edges.tsv` (sessions it appears in) and `facts.tsv`.
2. Present:
   - current `revealed` state and the sessions it appears in;
   - `summary` as it stands;
   - each fact: learned (in which session), locked, or open;
   - relationship edges and whether each is learned;
   - fields in `reveal`.
3. Propose changes as numbered lines. Each learned fact or edge names the journal it was learned in.
4. Write accepted lines. Run the `vault-lint` skill.

## Backfill for past sessions

Work one session at a time, oldest first, in batches the DM can answer in one sitting.

For each journal:

1. Read its `summary`, body, and ledger arrays. Early ledgers were filled by name-matching and may be wrong: propose corrections.
2. Propose, numbered:
   - ledger fixes (add, remove);
   - entities first encountered in this session → `revealed`, with a draft `summary` taken only from what this and earlier journals show the party saw;
   - facts learned in this session, attached to the right entity, with this journal as the `learned` value;
   - edges learned;
   - anything the journal shows the party did **not** learn that a note presents as known.
3. After acceptance: write, set `wrapped: true` on the journal if the DM confirms it is final, move to the next session.

Draft from journals only. Never use `secrets`, `history`, `description`, or module text in `6. Resources/` as evidence of what the party knows.

## Pre-publish review

1. Run the lint. Any `public-text-links-unrevealed`, `revealed-no-summary`, or `learned-*` error blocks a publish.
2. List what is newly visible since the last export: entities, facts, edges, images.
3. Read each new `summary` and fact as a player would. Flag names the party should not know, links to unrevealed notes, and spoiler note titles that need a `public_name`.

## Rules

- `revealed: false` is a decision (held back). Absent means undecided. Do not convert one to the other silently.
- A learned fact is canon: do not reword it later. Add a new fact instead.
- When unsure whether the party knows something, it is not learned. Ask.
