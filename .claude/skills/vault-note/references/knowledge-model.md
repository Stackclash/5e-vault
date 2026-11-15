# Knowledge model: what the party knows, what is canon

Per-party state is always a map keyed by the party note's name (e.g. `Midnight Covenant`).

## Text fields

| Field | Audience | Rule |
|---|---|---|
| `gist` | DM and agents | One line, 20 words or fewer: who or what this is and why it matters. Required on every entity. Never exported. |
| `summary` | Players | One or two sentences, spoiler-safe. Exported when the entity is revealed. On journals it is the recap read aloud. |
| `secrets` | DM only | Never exported. |
| `description`, `history`, `personality`, `ideal`, `bond`, `flaw`, `goals`, quest `description` | DM only | Written omnisciently. Never treat as what the party knows. |
| `## Public` body section | Players | Optional long form. Exported verbatim. Everything else in a body is DM-only. |

`summary` replaces the older `player_impression`, `player_summary`, and `public_premise`.

## The three knowledge states

```yaml
revealed:
  Midnight Covenant: true        # true = may appear on the party's site; false = deliberately held back; absent = undecided

reveal:
  Midnight Covenant: [images, race, occupation, location, condition]   # extra fields that may be shown

public_name:
  Midnight Covenant: "The Tallyman"    # optional; shown instead of the note name until removed

facts:
  - text: "Runs the manifest desk at the Ferrymen's Guild."
    learned:
      Midnight Covenant: "[[1. DM Toolkit/Session Journals/The Hunt for Vecna/S46 Duskferry.md|S46 Duskferry]]"
  - text: "He is the Tallyman."
    learned: {}
    locked: true                 # DM-finalized truth, not yet learned
    dm: "Only Hesper's handler knows."   # optional DM aside, never exported
```

- **`facts`** is the DM's list of learnable things about an entity. One sentence each, worded so it can be shown to players once learned. A fact with `learned[party]` set is published.
- **`learned`** values are a link to the journal where it was learned. Present means learned.
- Relationship edges carry the same `learned` map (see `relationships.md`).
- **Sessions an entity appears in** are derived from journal ledger arrays. Do not store them on the entity.

## What a site export shows for a revealed entity

Always: display name (`public_name` or the note name), `pronounced`, type, `summary`, sessions appeared in. When learned: each fact, each relationship edge whose target is also revealed. Only if listed in `reveal`: any other frontmatter field. Never: the body outside `## Public`, `secrets`, `gist`, `dm`, aliases, stat blocks.

Writing player-facing text: do not link an entity the party has not been shown; name it only if the party knows the name.

## Canon vs plan

| Canon — agents never change it | Plan — changeable by proposal |
|---|---|
| A journal with `wrapped: true` (body, `summary`, ledger) | Unplayed quest steps |
| A fact or edge with `learned` set | Unlearned facts without `locked` |
| A fact with `locked: true` | `secrets`, prep notes, the roadmap in the campaign note |
| State set by an approved wrap: NPC `condition`, quest `completed`, item `holder` | |

Only the DM reopens canon, explicitly, per item. Corrections to a wrapped journal go under `## Errata` with a date.

## Who may write what

Every field in "The three knowledge states", plus `summary`, `locked`, and `## Public`, is written only from a proposal line the DM accepted. `gist`, `secrets`, unlearned unlocked facts, and DM-voice fields may be drafted freely as part of approved creative work.
