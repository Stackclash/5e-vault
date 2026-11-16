---
name: vault-lint
description: Rebuild the agent index and run the vault health check for this D&D vault. Use after a session wrap, before a site export, after bulk edits or a migration batch, when the index looks stale, or when asked for a vault health check, schema drift report, broken links, or what is still in a legacy shape.
---

# Vault lint and index

Two read-only scripts over note frontmatter. They share `scripts/vaultModel.js`. Neither edits a vault note.

```bash
node .claude/skills/vault-lint/scripts/buildIndex.js          # writes z_Extra/index/
node .claude/skills/vault-lint/scripts/lint.js --summary      # counts per rule
node .claude/skills/vault-lint/scripts/lint.js --rule <id> --max 999   # every finding for one rule
```

Node is managed by mise; if `node` is not on PATH, use `mise exec -- node …`. Both take `--root <vault>`; the lint takes `--index <dir>`, the index builder `--out <dir>`.

## Order

1. **Lint first**, then build the index. The lint compares the vault to the last index's canon snapshot; building first would hide a changed canon fact.
2. Report errors before warnings. Group by rule; give counts, then the files.
3. Build the index only when there is no `canon-changed` error, or after the DM has accepted the change.

## Index files (`z_Extra/index/`)

| File | Use |
|---|---|
| `state.md` | Latest session, in-world date, location, active quests, unfiled live-session logs |
| `entities.tsv` | One row per entity: type, name, aliases, path, parent, status, revealed_to, gist |
| `edges.tsv` | Every link: source, type, target, learned_by, note |
| `sessions.tsv` | One row per journal with ledger counts and summary |
| `facts.tsv` | Every fact with who learned it and when |
| `canon.tsv` | Snapshot of learned and locked fact text, for drift detection |

## Rules that matter most

| Rule | Level | Meaning |
|---|---|---|
| `yaml-parse` | error | Frontmatter does not parse; the note is invisible to queries |
| `unresolved-link` | error | A frontmatter link points at nothing. Full-path links must match exactly |
| `canon-changed` | error | A learned or locked fact was edited or removed since the last index |
| `revealed-no-summary` | error | Would publish an empty page |
| `public-text-links-unrevealed` | error | Player-facing text links something the party has not been shown |
| `learned-not-a-journal`, `learned-on-unrevealed`, `learned-edge-to-unrevealed` | error | Knowledge state is inconsistent |
| `journal-no-party`, `location-cotag` | error | Views and exports will miss the note |
| `ledger-entity-undecided` | warn | In a wrapped journal's ledger, neither revealed nor held back |
| `legacy: …` | warn | A pre-migration shape; see `z_Extra/Vault Design/03 Migration Plan.md` |
| `missing-gist`, `journal-untitled`, `journal-no-fc-end`, `journal-no-prep-link`, `mirrored-edge`, `image-path`, `step-played-no-outcome`, `key-case` | warn | Housekeeping |

## What to do with findings

- Do not fix findings as a side effect of running the lint. Report them, then fix only what the DM asks for.
- Mechanical fixes (a link missing its "(COS)" suffix, a tag, key order) may be offered as a batch.
- Anything touching `revealed`, `learned`, `summary`, or a wrapped journal is a proposal for the DM, never an automatic fix.
- A contradiction between notes is reported with both sources and left alone.
