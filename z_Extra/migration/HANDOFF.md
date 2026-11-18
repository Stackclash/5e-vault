Continue the vault migration in this repo (5e-vault, branch v2). Read CLAUDE.md and z_Extra/Vault Design/03 Migration Plan.md first; load the vault-note skill before any note write.

## Where things stand (2026-11-17)
Done and committed: everything through F (E6, E6b, E7, E8, F, F2), plus G1 runs 1-2. Last migration commit: 55de2171a (this handoff file is committed after it). Lint 0 errors, 305 warnings (missing-gist 111, ledger-entity-undecided 132). Index: 185 entities, 752 edges, 49 facts. Check git status first; the tree should be clean apart from .obsidian/.

## Next
G1 runs 3-6: 111 gists left (18 places of interest, 93 NPCs). 25 per run, 20 words or fewer, drafted from the note's own fields, edges (z_Extra/index/edges.tsv) and facts. Write with z_Extra/migration/g1-gists.js <run.json>, then show me the list as a table to skim; I answer by number. Then G2, G3, H.

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

## Deferred to the S49 wrap (raise each as a proposal line)
- Planes (Limbo etc.) should not be location notes; a new entity type may be needed. That is a schema change (folder, tag, template, note_fields) and needs my approval.
- 2. Scratch Notes/S49 Live Session - Improvised Facts.md lines 9-11 still say "Proposed" (Limbo landing, the Hand stabilizes Limbo, Izek loses the Hand's powers).
- Izek's locked fact "…the party freed him from Vecna's control (S49)" is written unlearned; I said the party knows it. Set learned to the S49 journal once it exists.
- Izek's DM text is out of date: Plot Hooks says Marrow's corpse is "still sitting uninvestigated" (Redgrave took the gem in S44); Hidden Details says flip partyRelationships from Friendly "after Greyfen Hollow"; Hidden Details (moved from secrets) ends "Yevelda Ovak does not know any of this yet."
- Izek facts F2-9 to F2-13 (arm is a gift from Vecna, the Hand of Vecna, Vecna speaks through it, amber soul-craft, knows what the distillate is for) are unlearned; decide in the wrap what the party learned.
