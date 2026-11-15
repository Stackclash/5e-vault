---
name: player-inventory-staleness
description: Player character inventory frontmatter in 3. The Party/Players/*.md lags behind actual play — verify treasure picks with the DM, not just the vault
metadata:
  type: project
---

As of 2026-08-22, the DM confirmed the party already holds a Bag of Holding, Wand of Secrets, and Boots of Elvenkind — none of which appeared in any *active* Midnight Covenant player's `inventory` frontmatter (only inactive [[Seluvis Felo'melorn]]'s sheet listed a Bag of Holding). This was caught only because a treasure-regeneration request prompted a manual grep across all five active players.

**Why:** player character notes are generated from a D&D Beyond import and only refresh when someone clicks "Update From DnD Beyond" on that note (per CLAUDE.md) — items picked up at the table don't retroactively sync until that button is pressed, so the vault's inventory list silently drifts behind actual play. This isn't a one-off: it recurred within the same treasure-generation task (first pass caught a real duplicate — Faerah's Cloak of Elvenkind — but missed three more that weren't in the vault at all).

**How to apply:** when picking treasure/magic items for a session (`encounter-builder` work), treat the vault's player `inventory` fields as a floor, not a ceiling — cross-check duplicates against them as a first pass, but explicitly ask the DM to confirm or correct the list before finalizing, especially for anything that would be a dead pick if already owned. Don't present vault-derived inventory as authoritative without that check. If the DM flags a discrepancy, it's worth suggesting a "Update From DnD Beyond" pass on the affected characters' notes as a housekeeping follow-up, but don't do it unprompted — that's the DM's/player's action to trigger.
