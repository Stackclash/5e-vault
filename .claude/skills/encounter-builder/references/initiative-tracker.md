# Initiative Tracker encounter blocks

Every combat encounter written into a vault note gets an `encounter` code block (Initiative Tracker plugin) so it can be launched at the table. The prose (tactics, terrain, DM-only sections) stays alongside the block — the block is the roster, not the write-up.

````yaml
```encounter
name: Yester Hill
creatures:
  - 3: [[Giant Spider]]
  - 1: [[Conjurer Wizard (MPMM)]]
---
name: Second Wave
creatures:
  - 2: [[Needle Blight]]
```
````

- **Creature entries are wikilinks to `5. Mechanics/Bestiary/` notes** (`- 3: [[Giant Spider]]`) — Fantasy Statblocks supplies HP, AC, initiative, and XP from the linked stat block. This is the vault convention; it also satisfies the "cite each stat block" rule.
- Creature not in the bestiary: for anything beyond a quick HP/AC tweak, build it a real stat block via the `statblock-creator` skill — a note with `statblock: inline` registers in the bestiary and can then be wikilinked like any other creature. For simple tweaks, pass stats inline as `Name, hp, ac, mod, xp` (all after the name optional), or the expanded form:
  ```yaml
  - 2:
      creature: Hobgoblin
      name: Elite Guard
      hp: 18
      ac: 15
  ```
- **Display names** distinguish identical creatures: `[[Hobgoblin, Bob]]` renders a Hobgoblin named Bob. Names containing a comma need quotes: `[["Rat, Giant"]]`.
- **Flags** append after an entry: `, ally` (fights with the party), `, friendly`, `, hidden` (concealed in the tracker — use for the DM-only ambush/reinforcement elements).
- **Dice quantities** (`- 1d5: [[Twig Blight]]`) give a re-rollable random count — good for swarm padding and random encounters.
- Multiple encounters in one block are separated by `---` lines; each takes its own `name:`.
- Optional block parameters: `party: <party name>` / `players: false` (or a name list) to control which PCs load, `rollHP: true` to roll HP from hit dice.

### Encounter tables

When delivering several encounters at once — a random-encounter table, a dungeon's keyed fights, a session's planned encounters — offer an `encounter-table` block instead of separate `encounter` blocks. Same syntax and parameters, encounters separated by `---`; each renders as a table row showing the name and creature list, with a difficulty rating against the loaded party, and clicking the name launches it in the tracker.

````yaml
```encounter-table
name: Goblin Ambush
creatures:
  - 1: [[Goblin]]
  - 2: [[Hobgoblin]]

---

name: Undead Foes
creatures:
  - 2: [[Skeleton]]
  - 1d4: [[Zombie]]
```
````

