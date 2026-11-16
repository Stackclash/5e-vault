# Relationships

Every relationship is a frontmatter link, stored once on its owner. The other direction is derived (index, views).

## Typed edges: `relationships`

```yaml
relationships:
  - target: "[[4. World Almanac/NPCs/Anselm Corrow.md|Anselm Corrow]]"
    type: employer
    note: "Reports to him at the Guildhall."      # optional, DM-only
    learned:
      Midnight Covenant: "[[1. DM Toolkit/Session Journals/The Hunt for Vecna/S46 Duskferry.md|S46 Duskferry]]"
```

- Read as: *this note* has `type` relationship **to** `target`. "Ostwin → employer → Anselm" means Anselm is Ostwin's employer.
- `type` must be in `Configuration.relationship_types`. Propose a new type rather than inventing one.
- Edges are directed. Store one side. Store both only when the two sides genuinely differ (A calls B an ally; B calls A a mark).
- `learned` absent means the party does not know of the tie.

| Category | Types (inverse shown in brackets) | Target |
|---|---|---|
| Family | father, mother [son, daughter]; husband, wife; brother, sister; uncle, aunt [nephew, niece]; cousin | NPC, PC |
| Personal | friend, ally, rival, enemy, lover, mentor [student] | NPC, PC, faction |
| Work | employer [employee], serves [master], handler [asset], patron [client] | NPC, PC, faction |
| Faction | member, leader, founder, agent, former-member | faction |
| Faith | worships, cleric-of | deity note, or a `5. Mechanics/Deities/` note |
| Place | home, works-at, origin, imprisoned-at | location |

`location` is always the *current whereabouts* (NPC, item) or the *parent* (location, shop). Other place ties are typed edges.

## Flat link fields

| Relationship | Owner | Field |
|---|---|---|
| Thing → current place, or location → parent | the thing | `location` |
| Location → ruler | location | `rulers` |
| Location ↔ location route | either end, once | `routes: [{to, miles, note}]`. No `mode`: how the party travels is the party note's Method and pace. |
| Shop → owners, staff, stock | shop | `owners`, `staff`, `items` |
| Story item → who holds it / where it rests | item | `holder`, `location` |
| Quest → NPCs | quest | `npcs: [{name, description}]` |
| Quest → giver, places, items, factions, PCs, parent arc | quest | `giver`, `locations`, `items`, `factions`, `pcs`, `parent` |
| Session → everything encountered | journal | `party_present`, `locations`, `npcs`, `quests`, `items`, `factions` |
| Faction → base | faction | `location` |
| Faction ↔ faction | source faction | `relationships` |
| PC → NPC or faction | the NPC or faction | `relationships` targeting the PC |
| Campaign → party, world | campaign | `party`, `world` |

Flat links have no per-edge `learned`. They are shown when the field is in the owner's `reveal` list and the target is revealed. If a flat link must stay secret while its note is public, record it as a typed edge and leave the flat field empty.

## Removed fields

`groups`, `religions`, `travel`, `travelDistances`, and `"Name|type"` strings in `relationships` are legacy. Do not write them. If you find them, the lint reports them and the migration converts them.

## Do not

- Leave a relationship only in `history`, `secrets`, or DM Notes when a field exists for it.
- Add the inverse by hand.
- Point `target` at a name with no note. Create the note (with approval) or leave the tie in `secrets` and say so.
