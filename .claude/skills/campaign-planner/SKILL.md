---
name: campaign-planner
description: Maintain the campaign plan for this D&D vault and keep it honest against play — acts and arcs, villain and faction timelines, PC threads, and reconciling the plan with what actually happened after each session. Use for campaign or arc planning, "where does the plan stand", adjusting the plan after players went off-script or the DM improvised, and deciding what to do with prepared material that did not get used.
---

# Campaign planning

The plan is a living forecast. Play overrules it. This skill keeps the plan written down, adjusts it when play diverges, and never bends what happened to fit it.

## Where the plan lives

| Level | Note | Fields |
|---|---|---|
| Campaign | the active campaign note (the bible) | premise, tone, lines and veils, villain, roadmap, `## Plan Changelog` |
| Act, arc | quest note, `kind: arc`, linked upward by `parent` | `description`, `steps`, `## Plan Changelog` |
| Quest, thread | quest note, `kind: quest` or `thread`, `parent` = its arc | `steps`, `npcs`, `locations`, `factions`, `pcs` |
| Villain and faction timelines | faction note | `clock: [{step, done}]`, `goals` |
| PC threads | quest note with `pcs` set, or the bible's Character Tie-Ins | — |
| Truths not yet revealed | `facts` on the entity they concern | `locked: true` once the DM finalizes them |

Resolve the active campaign from `1. DM Toolkit/Configuration.md`. Schemas: `vault-note` skill, `references/campaign-schemas.md`.

## Planning principles

- Plan situations and intentions, not scenes. For each faction: what it wants, what it does next if nobody interferes.
- Each arc states its **purpose** (what must be true when it ends) apart from its **route** (the steps). Routes are disposable; purposes are what you protect.
- Every must-learn truth is a `fact` on an entity with at least three ways to reach it.
- Keep open questions marked as open. Do not decide them early to make the plan look complete.
- Run the `canon-check` skill before proposing anything that touches played material.

## Plan reconciliation (after every wrap, or on request)

Input: the approved journal for the session, the prep note it used, and the arc and quest notes it touched.

1. **Mark the steps.** For each planned step the session touched or passed by, propose one status:
   - `played` — it happened. Write `outcome`: one line of what actually happened, with the journal link. The outcome may differ from the step text; the outcome is the truth.
   - `skipped` — did not happen and still can. Say where it could be reused.
   - `void` — play made it impossible. Say why.
2. **Record the unplanned.** Things that happened with no step behind them (improvised NPCs, a deal, a death, a detour): add as `played` steps with outcomes, on the quest they belong to, or propose a new thread.
3. **Trace consequences.** For each divergence, list which later steps, clocks, facts, and PC threads depend on the changed assumption. Use `edges.tsv` and the quest `parent` chain.
4. **Propose adjustments**, each as a numbered line with its reason: reroute a step, move a reveal to another carrier, advance or stall a faction clock, promote an improvised element into the plan, retire an arc. Offer two options when the choice is real.
5. **Check purposes.** For each active arc: is its purpose still reachable? If not, say so plainly and propose a new purpose or an ending.
6. **Write only accepted lines.** Then add one line per change to `## Plan Changelog` on the affected note: `YYYY-MM-DD (after S<N>): what changed — why`.

## Rules

- Never edit a wrapped journal, a learned fact, or a locked fact to make the plan work. If the plan needs something to have happened differently, the plan is wrong.
- A truth the party learned stays learned, even if it was improvised and inconvenient. Build on it.
- Unused prep is an asset: keep it as `skipped`, linked from the arc, not deleted.
- A plan change the DM flagged but deferred stays untouched until asked. Record it as an open item in the changelog.
- Quest and hook craft belongs to the `story-creator` skill; encounters to `encounter-builder`; new lore to `world-builder`.

## Answering "where does the plan stand"

One screen: current arc and its purpose; steps played, skipped, void, remaining; each faction clock's position; open questions; deferred changes; the next two likely situations.
