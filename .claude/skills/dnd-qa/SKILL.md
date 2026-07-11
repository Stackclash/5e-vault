---
name: dnd-qa
description: Answer D&D 5e rules, monster, spell, magic item, feat, class, and mechanics questions from the generated compendium in "5. Mechanics/", falling back to sourcebook and module prose in "6. Resources/" for context, advice, and lore the compendium entries don't carry. Use for rules lookups ("how does grappling work?"), stat blocks, spell or item details, conditions, damage types, finding magic items by rarity, checking a creature's CR, or questions about what a sourcebook or published module actually says. Read-only — never edit those folders.
---

# D&D 5e Rules & Compendium Q&A

Answer from the compendium in `5. Mechanics/`, not from memory — the vault's versions reflect the DM's sources and any errata baked into them. When the compendium's structured entries don't cover it, fall back to the full sourcebook and module text in `6. Resources/`. Both folders are generated (ttrpg-convert-cli): **never create or edit files there.**

## Where things are

| Folder | Contents |
|---|---|
| `5. Mechanics/Rules/` | Actions, Conditions, Skills, Senses, Damage Types, Item Properties, Diseases, Variant Rules |
| `5. Mechanics/Bestiary/<Type>/` | ~1,300 stat blocks, foldered by creature type (Undead, Fiend, Beast, …) |
| `5. Mechanics/Spells/` | ~1,200 spells |
| `5. Mechanics/Items/` | ~3,400 items, mundane and magic |
| `5. Mechanics/Classes/` | Classes and subclasses |
| `5. Mechanics/Feats/`, `Races/`, `Backgrounds/`, `Optional Features/` | Character options |
| `5. Mechanics/Tables/` | Reference and random tables |
| `5. Mechanics/Traps Hazards/`, `Objects/`, `Vehicles/`, `Rewards/`, `Deities/`, `Decks/`, `Lists/` | Everything else |
| `6. Resources/Books/<Book>/` | Full sourcebook text as per-chapter markdown (PHB 2014, DMG 2014, MM 2014, Xanathar's, Tasha's, Volo's, Mordenkainen's, Van Richten's, plus third-party books like Griffon's Saddlebag, Deep Magic, Hamund's, Strongholds and Followers) |
| `6. Resources/5e Modules/<Module>/` | Published adventures as per-chapter markdown (Curse of Strahd, Vecna: Eve of Ruin, The Siege of Castle Rend) |
| `6. Resources/Resources/` | Raw PDFs of misc supplements — do not process these; if an answer likely lives only there, tell the DM which PDF to check |

## Lookup strategy

1. **Exact name:** Glob the filename first — e.g. `5. Mechanics/Spells/Fireball*.md`. Duplicate names carry a source suffix like `(XGE)`; `aliases` frontmatter holds display names.
2. **Faceted search via frontmatter/tags:**
   - Monsters: `cr:`, `type:`, `size:`, `environments:`, `ac:`, `hp:`; tags `monster/cr/5`, `monster/environment/urban`, `monster/size/medium`.
   - Items: `rarity:`, `tier:`, `attunement:`; tags `item/rarity/uncommon`, `item/tier/major`, `item/attunement/required`.
   - Example: uncommon attunement items → `grep -rl "item/rarity/uncommon" "5. Mechanics/Items" | xargs grep -l "attunement: true"`.
3. **Rules concepts:** start in `5. Mechanics/Rules/` (Conditions.md, Actions.md, Skills.md, Variant Rules/), then `Tables/`.
4. **Fallback:** Grep body text across the relevant folder.
5. **Sourcebook prose:** when the answer only exists in the book text — designer intent, DM advice, optional-rule explanations, adventure context, chapter lore, tables embedded in prose — grep `6. Resources/Books/` (or `6. Resources/5e Modules/` for adventure content). Chapter filenames are numbered and descriptive (`03 Chapter 1 Into The Mists.md`), so `ls` the book's folder to find the right chapter before grepping wide.

## Answering

- Quote or closely paraphrase the note's text for rules-as-written; label anything beyond it as interpretation or table ruling.
- Cite the vault note with a wikilink and name the sourcebook — the `compendium/src/5e/<src>` tag encodes it (`mm` = Monster Manual, `dmg` = DMG, `phb` = PHB, `xge` = Xanathar's, `tce` = Tasha's, …). For `6. Resources/` prose, cite the book and chapter note instead (e.g. Xanathar's, [[3 Dungeon Masters Tools]]).
- When multiple sources define the same thing (2014 vs 2024 rules, reprints), say which version you're citing and note the difference.
- For homebrew ("make me a variant of X"), copy the mechanics into the reply or a note outside `5. Mechanics/` — suggest `1. DM Toolkit/Tools/` for homebrew — and never touch the generated files.
