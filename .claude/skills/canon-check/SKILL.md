---
name: canon-check
description: Check a proposed idea, edit, or new piece of content against established campaign canon before it is written, and handle a DM request to reopen canon. Use before creating or changing NPCs, places, factions, quests, or plans that touch anything already played; when the DM asks "does this contradict anything"; and when asked to change something that already happened.
---

# Canon check

Canon is what happened at the table, what the party has learned, and what the DM has locked. Agents do not change it. This skill is the gate.

## What counts as canon

| Canon | Not canon (plan) |
|---|---|
| A journal with `wrapped: true`: body, `summary`, ledger | Session prep |
| Any fact or relationship edge with `learned` set | Unlearned facts without `locked` |
| Any fact with `locked: true` | `## DM Notes`, quest `description`, unplayed `steps` |
| State set by an approved wrap: NPC `condition`, quest `completed`, item `holder` and `charges`, location `status`, faction `standing`/`renown`/`status`, journal `spotlight`/`party_level` | The roadmap in the campaign note; quest `deadline`, `stakes`, `reward` |

Journals not yet wrapped are evidence, not canon. Treat them as probably true and say they are unwrapped.

## Procedure

1. **Name the subjects.** List every entity the proposal touches, plus its parent place and its factions.
2. **Collect the canon.** For each subject (use the `lore-researcher` skill's index paths):
   - its rows in `facts.tsv` where `learned_by` is set or `locked` is true;
   - its `session-*` rows in `edges.tsv`, then the matching `sessions.tsv` summaries; open a journal body only where the proposal depends on what happened in it;
   - its learned edges in `edges.tsv`;
   - `condition`, `status`, `standing`, `renown`, `holder`, `charges`, quest `completed`.
3. **Compare.** For each claim in the proposal: consistent, silent, or conflicting.
4. **Report.**
   - No conflict: say what was checked, in one or two lines, and continue.
   - Conflict: stop. Quote the canon with its source and session, quote the proposal, and offer options that keep canon fixed (change the proposal; make the new thing a lie or a mistaken belief in the fiction; make it happen later). Never choose for the DM.
5. **Plan-only conflict** (the proposal contradicts unplayed plan): not a canon problem. Note it and hand it to the `campaign-planner` skill as a plan change.

## The party's knowledge is canon too

A learned fact cannot be un-learned or reworded so that it means something else. If the truth turns out different, the party learned something false: keep the fact, and add the real truth as a new fact (locked if the DM finalizes it).

## Reopening canon

Only on an explicit DM instruction naming the item. Then:

1. Restate exactly what changes, and list what else depends on it (other facts, edges, journal passages, the site).
2. On a yes: edit the entity fact or state; in each affected wrapped journal add a dated line under `## Errata` saying what changed and why. Do not rewrite the journal narrative.
3. Run the `vault-lint` skill. Expect a `canon-changed` finding; it is cleared by rebuilding the index after the DM accepts.
4. If the change affects published content, say so.
