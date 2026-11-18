---
name: vault-note
description: Schema and filing authority for this D&D vault. Load before creating, editing, moving, or linking any vault note or Templater template — NPC, location, shop, faction, item, deity, quest, session journal, session prep, player, party, campaign. Covers folder placement, tags, link format, frontmatter schemas, and the player-knowledge fields.
---

# Vault Note Conventions

CLAUDE.md holds the rules that bind all work. This skill holds the mechanics of writing a note correctly. Read only the reference file for the type you are touching.

## Always

1. **Links.** Internal links are wikilinks, never markdown links. In frontmatter use the full path with `.md` and an alias, quoted: `"[[4. World Almanac/NPCs/Anselm Corrow.md|Anselm Corrow]]"`. In body prose `[[Anselm Corrow]]` is fine. External URLs use `[text](https://…)`.
2. **Folder and tags.** Place the note and tag it per `references/folders-tags.md`. A wrong tag silently removes the note from every query. Location-type notes carry their type tag plus `location`.
3. **First key** is `obsidianUIMode: preview`. **Field names are snake_case** (`party_relationships`, `prep_notes`). Exempt: plugin keys (`tags`, `aliases`, `cssclasses`, `obsidianUIMode`, `obsidianEditingMode`, `fc-*`, `aat-render-enabled`); map keys that are values (party names, rarities, shop type names); `5. Mechanics/` and `6. Resources/`; parameters inside `leaflet` blocks and Modal Forms definitions. The lint rule `key-case` checks it.
4. **Start from the template's shape.** Copy the body scaffold from the Templater template in `z_Templates/Templater/` (or from a sibling note of the same type). The scaffold is how the note renders in Obsidian; do not invent body layouts.
5. **Text lives in frontmatter** for NPCs, quests, and factions. The body is inputs and views bound to those fields.
6. **Never write these without an approved proposal line from the DM:** `revealed`, `reveal`, `public_name`, `summary`, any `learned` value, `locked`, a `## Public` section, or anything in a journal with `wrapped: true`. Propose; write after a yes.
7. **Never edit** `5. Mechanics/` or `6. Resources/`.

## Which reference to read

| Working on | Read |
|---|---|
| Where a note goes, which tags | `references/folders-tags.md` |
| `gist`, `summary`, `facts`, `revealed`, `reveal`, DM Notes, what is player-facing | `references/knowledge-model.md` |
| `relationships`, factions, deities, routes, who owns which link | `references/relationships.md` |
| NPC, location, shop, world, faction, item, deity | `references/entity-schemas.md` |
| Quest/arc, journal, prep, campaign, party, player | `references/campaign-schemas.md` |
| Editing a Templater template or the `monster.txt` mirror | `references/templates.md` |

## Values and fields

- **Option values come from `Configuration.enums`** (`condition`, `status`, `standing`, `kind`, `alignment`, …), or a top-level Configuration list of `{name}` (`settlement_wealth`). `climate` comes from the weather climates (Weather Generation's frontmatter). A value not in its list is proposed as an enum addition, never written. The lint rule `enum-value` checks it.
- **`Configuration.note_fields`** is each type's editable field list; template inputs, header chips, Edit all, and Bases edit views render from it. Adding a field means a schema entry in `references/` and a `note_fields` entry, both approved.
- **Party location is derived** from the active PCs' `location`. Never write `location` on a party note; propose PC `location` changes.
- **Sentence edits.** A one-line DM instruction ("Velmont is captured, now at the Cinderworks") becomes a numbered edit proposal, one field per line (`condition: captured`; `location: "[[…Cinderworks.md|Cinderworks]]"`), with values from the enums. Write each accepted line. Knowledge fields (rule 6) still need their own accepted line.

## Creating a note

1. Check it does not already exist: grep `z_Extra/index/entities.tsv` for the name and aliases (fall back to a filename glob).
2. Pick folder and tags; confirm the folder exists.
3. Fill the schema. Every entity gets a `gist`. Leave `summary`, `revealed`, and `facts[].learned` empty unless the DM approved values.
4. Record relationships as links in the owning note (see the ownership table), not in prose.
5. Say what you created and what you left empty.

## Editing a note

- Keep keys you do not understand; views may depend on them.
- Do not move or rename without asking; propose it.
- If the note still has a legacy shape (the lint lists them), leave it unless the task is the migration. Do not half-convert.

## Session journals

- Record only what the DM stated or the session record shows. Never default `date` to today.
- Keep the `S<N>` number. Propose the title; renaming is a move and needs a yes.
- Once `wrapped: true`, the journal is canon. Corrections go under `## Errata` with a date.
