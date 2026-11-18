Continue the vault migration in this repo (5e-vault, branch v2). Read CLAUDE.md and z_Extra/Vault Design/03 Migration Plan.md first; load the vault-note skill before any note write.

## Where things stand (2026-11-18)
Done and committed: everything through G1 (runs 1-7; missing-gist 0). Last migration commit: 8b391e7d24. Lint 0 errors, 194 warnings (ledger-entity-undecided 132, key-case 49). Index: 185 entities, 755 edges, 49 facts. Check git status first; the tree should be clean apart from .obsidian/.

## Next
G2: session-by-session reveals, S1 to S48, five sessions per sitting (see 03 Migration Plan G2). Then G3, H.

## How I work with you
- Proposal first: numbered lines, each with the quoted source passage. I answer by number; write only accepted lines. Silence on a line is not acceptance. If I only list exceptions, the rest are accepted.
- Flag contradictions between notes and stop; never pick a side. I sometimes misspeak; check the journals and confirm before writing.
- One commit per batch, prefix migration(<batch>). After writing, verify with a node script that only the intended frontmatter keys changed and bodies are byte-identical, then run lint.js and buildIndex.js. Commit the index with the change. No git stash or tree-wide git commands mid-batch.
- Node is managed by mise. Edit frontmatter through z_Extra/migration/fm.js. Facts via z_Extra/migration/e8-facts.js <sitting.json> ("locked": false omits locked). New notes: render the Templater template statically (see g1-houses.js for an NPC, e7-quests.js for quests).
- A learned fact needs its entity revealed with a summary, or lint errors (learned-on-unrevealed). Propose the reveal and summary with the fact.

## Settled this session
- Creatures live in 4. World Almanac/Creatures (story-creature). The Amber Wardens `serves` the Silent Ascendency.
- Arc notes: The Hunt (top arc), Act I - The World-Truth Working, Act II - The Ascension Rite. Quests keep `pcs` for personal threads only.
- Vallaki is run by a council of elders, Urwin Martikov head elder. The Vallakovichs are alive in the Village of Barovia. Fiona, Nikolai, and Karl Wachter are captured at Vallaki.
- House von Zarovich: Rahadin and Strahd's brides; only Anastrasya and Gertruda survive. Fiona is not a member.
- Emil leads the Children of Mother Night; Kiril (dead) is a former member.
- The Nameless God of Secrets may be Vecna; not decided.
- All Martikovs (incl. Danika) are wereravens; race links 5. Mechanics/Bestiary/Humanoid/Wereraven (VRGR).md.
- Savid is dead (S17), no location. Lydia and the Vallakovichs are in the Village of Barovia. Izek serves Vecna is former.
- The Well of Many Worlds is planned, not yet given (active false). Gadof no longer makes Izek dolls. Emil leads the pack; Zuleika stands with him.
- S23 party present: Redgrave, Seluvis, Yevelda, Marin, Faerah; Seluvis pulled the hut gem.
- NPC notes have no Plan Changelog section; plan changes to NPCs are logged in the commit message.

## Deferred to the S49 wrap (raise each as a proposal line)
- Planes (Limbo etc.) should not be location notes; a new entity type may be needed. That is a schema change (folder, tag, template, note_fields) and needs my approval.
- 2. Scratch Notes/S49 Live Session - Improvised Facts.md lines 9-11 still say "Proposed" (Limbo landing, the Hand stabilizes Limbo, Izek loses the Hand's powers).
- Izek's locked fact "…the party freed him from Vecna's control (S49)" is written unlearned; I said the party knows it. Set learned to the S49 journal once it exists.
- Izek's DM text is out of date: Plot Hooks says Marrow's corpse is "still sitting uninvestigated" (Redgrave took the gem in S44); Hidden Details says flip partyRelationships from Friendly "after Greyfen Hollow"; Hidden Details (moved from secrets) ends "Yevelda Ovak does not know any of this yet."
- Izek facts F2-9 to F2-13 (arm is a gift from Vecna, the Hand of Vecna, Vecna speaks through it, amber soul-craft, knows what the distillate is for) are unlearned; decide in the wrap what the party learned.
