---
name: statblock-creator
description: Give an NPC or custom creature a Fantasy Statblocks stat block — copy an existing monster, reskin one, or design from scratch with CR math — and write the YAML `statblock` block into the vault note. Use when an NPC needs combat stats, a homebrew monster or variant is needed, or an NPC note's empty statblock block needs filling.
---

# Statblock Creation

Produce stat blocks that express the fiction already written about the creature, hit their target CR honestly, and render correctly in the Fantasy Statblocks plugin. The vault is the single source of truth.

## Before writing stats

1. Read the subject's note first — personality, goals, history, race, occupation. Stats express the fiction: a scholarly lich-aspirant gets INT and control spells, not a greataxe. If the note is thin, get the concept from world-builder (or the DM) before doing math.
2. Target CR comes from the fight, not from here. If the block is for a planned encounter, take the target CR from the encounter-builder work; otherwise propose one and say what it means against the current party level.
3. Never edit `5. Mechanics/` — it is generated. Homebrew stat blocks live in the notes that own them.

## Pick the lightest mode that works

1. **Existing monster as-is.** The NPC simply *is* a published creature (a guard, a mage, a priest). Copy the full block from its `5. Mechanics/Bestiary/` note into the NPC note, change `name` to the NPC's note name, and note the base creature in prose (e.g. *uses [[/5. Mechanics/Bestiary/Humanoid/Mage.md|mage]] statistics*). CR is unchanged.
2. **Reskin.** Copy the closest bestiary block and modify. Pure flavor changes (renames, appearance, damage-type swaps at the same dice, skill swaps) don't move CR — say so and keep the published CR. Anything that changes HP, AC, attack bonus, save DC, damage output, or adds/removes a meaningful ability is a redesign of that axis — re-run the CR math below for the affected side.
3. **From scratch.** Full design, method below. Reach for this only when no bestiary creature is within reskinning distance — check first (facet search: `monster/cr/X`, `monster/type/...`, `environments:`).

The plugin supports `monster:`/`extends:` inheritance keys, but the vault convention is fully explicit blocks — every existing statblock is self-contained. Stay explicit unless the DM asks otherwise.

## Where the block goes

- **NPCs:** the NPC note's `## Stats` section already contains an empty fenced `statblock` block with a `^statblock` anchor below it (scaffolded by the NPC template). Fill the block in place; keep the anchor. Frontmatter already carries `statblock: inline` — that plus the block registers the creature in the plugin bestiary, so Initiative Tracker `encounter` blocks can reference it as `[[<Note Name>]]`.
- **`name` must exactly match the note's file name** — that is what the bestiary registration and encounter wikilinks resolve against.
- **Add facet tags** next to `npc`, matching the imported NPCs: `monster/cr/<cr>` (fractions hyphenated: `monster/cr/1-2`), `monster/size/<size>`, `monster/type/<type>` or `monster/type/<type>/<subtype>`.
- **One-off custom monsters that aren't NPCs** have no standalone-note convention. Put the block in the note that uses the creature (session prep, encounter write-up) — it still registers in the bestiary if that note has `statblock: inline`. If a standalone note seems warranted, ask before creating it.
- Optional `image` key takes a vault path to a token (imported NPCs use `/4. World Almanac/NPCs/token/...`). Skip it if there's no token.

## Block format

Fantasy Statblocks YAML, 5e layout. Imported blocks quote every key and tag integers with `!!int` — that's generator output; hand-authored blocks use plain YAML with the same key names. Skeleton with every key the vault uses:

````yaml
```statblock
name: Dag Tomescu            # exact note name
size: Medium
type: humanoid
subtype: human               # omit if none
alignment: Neutral Evil
ac: 14
ac_class: "[[/5. Mechanics/Items/Studded Leather Armor.md|studded leather]]"
hp: 112
hit_dice: 15d8 + 45
modifier: 2                  # initiative modifier
speed: 30 ft.
stats:                       # STR, DEX, CON, INT, WIS, CHA
  - 18
  - 15
  - 16
  - 10
  - 9
  - 15
saves:                       # only proficient saves, full ability name
  - wisdom: 7
skillsaves:
  - name: "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    desc: "+8"
damage_vulnerabilities: fire
damage_resistances: cold; bludgeoning, piercing, and slashing from nonmagical attacks
damage_immunities: poison
condition_immunities: "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
gear:
  - "[[/5. Mechanics/Items/Battleaxe.md|battleaxe]]"
senses: darkvision 60 ft., passive Perception 12
languages: Common
cr: "5"
traits:
  - name: Brute
    desc: "A melee weapon deals one extra die of its damage when he hits with it (included in the attack)."
actions:
  - name: Multiattack
    desc: "He makes two battleaxe attacks."
  - name: Battleaxe
    desc: "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 13 (2d8 + 4) slashing damage."
bonus_actions:
  - name: "..."
    desc: "..."
reactions:
  - name: "..."
    desc: "..."
legendary_description: "Legendary Action Uses: 3. Immediately after another creature's turn, he can expend a use to take one of the following actions. He regains all expended uses at the start of each of his turns."
legendary_actions:
  - name: Move
    desc: "He moves up to his speed without provoking opportunity attacks."
lair_actions:
  - name: "..."
    desc: "..."
source:
  - Homebrew
```
````

Conventions inside the block:

- **Links are full-path piped wikilinks with a leading slash and `.md`**: spells `[[/5. Mechanics/Spells/Fireball.md|fireball]]`, items `[[/5. Mechanics/Items/Battleaxe.md|battleaxe]]`, skills as heading anchors `[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]`, conditions `[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]`, other creatures `[[/5. Mechanics/Bestiary/Beast/Wolf.md|wolf]]`.
- **Attack and damage strings use standard 5e statblock phrasing** (`+7 to hit`, `13 (2d8 + 4) slashing damage`) — the dice-roller integration parses these automatically; no `dice:` markup inside blocks.
- **Spellcasting is a trait**, not a `spells` key: a trait named `Spellcasting` whose desc gives caster level, ability, save DC and attack bonus, then spell lists by level with wikilinked spells (see [[Baba Lysaga (COS)]] for the pattern). Spell save DC = 8 + PB + ability mod; spell attack = PB + ability mod.
- Recharge, uses, and cost annotations go in the name: `Summon Swarms (Recharges after a Short or Long Rest)`, `Bite (Costs 2 Actions)`.
- Omit keys the creature doesn't need — no empty lists.

## From-scratch CR math

Design against published reality first: pull 1–2 bestiary monsters of the target CR and similar role, design inside their envelope, and cite them as benchmarks. The table below is the scaffold (2014 DMG monster statistics); the benchmark monsters are the truth.

| CR | Prof | AC | HP | Attack | Dmg/round | Save DC |
|---|---|---|---|---|---|---|
| 1/8 | +2 | 13 | 7–35 | +3 | 2–3 | 13 |
| 1/4 | +2 | 13 | 36–49 | +3 | 4–5 | 13 |
| 1/2 | +2 | 13 | 50–70 | +3 | 6–8 | 13 |
| 1 | +2 | 13 | 71–85 | +3 | 9–14 | 13 |
| 2 | +2 | 13 | 86–100 | +3 | 15–20 | 13 |
| 3 | +2 | 13 | 101–115 | +4 | 21–26 | 13 |
| 4 | +2 | 14 | 116–130 | +5 | 27–32 | 14 |
| 5 | +3 | 15 | 131–145 | +6 | 33–38 | 15 |
| 6 | +3 | 15 | 146–160 | +6 | 39–44 | 15 |
| 7 | +3 | 15 | 161–175 | +6 | 45–50 | 15 |
| 8 | +3 | 16 | 176–190 | +7 | 51–56 | 16 |
| 9 | +4 | 16 | 191–205 | +7 | 57–62 | 16 |
| 10 | +4 | 17 | 206–220 | +7 | 63–68 | 16 |
| 11 | +4 | 17 | 221–235 | +8 | 69–74 | 17 |
| 12 | +4 | 17 | 236–250 | +8 | 75–80 | 17 |
| 13 | +5 | 18 | 251–265 | +8 | 81–86 | 18 |
| 14 | +5 | 18 | 266–280 | +8 | 87–92 | 18 |
| 15 | +5 | 18 | 281–295 | +8 | 93–98 | 18 |
| 16 | +5 | 18 | 296–310 | +9 | 99–104 | 18 |
| 17 | +6 | 19 | 311–325 | +10 | 105–110 | 19 |
| 18 | +6 | 19 | 326–340 | +10 | 111–116 | 19 |
| 19 | +6 | 19 | 341–355 | +10 | 117–122 | 19 |
| 20 | +6 | 19 | 356–400 | +10 | 123–140 | 19 |

Method:

1. **Defensive CR:** find the row matching *effective* HP, then shift one step per 2 points of AC above/below that row's AC. Effective HP scales up for meaningful resistances/immunities at the party's tier (×1.5–2 at tiers where the party can't bypass them), regeneration, and hard-to-hit traits like flight on a ranged attacker.
2. **Offensive CR:** average damage per round over the first three rounds, assuming the creature uses its best options (multiattack, best spells, recharge powers when available; count AoE as hitting two targets). Find that row, then shift one step per 2 points of attack bonus or save DC above/below the row.
3. **Final CR = average of the two**, rounded. Then gut-check against the benchmark monsters: if it reads meaner or weaker than published creatures at that CR, trust the read and adjust.
4. Show the math in the reply — effective HP/damage numbers, both half-CRs, and the verdict — the same way encounter-builder shows its budget math.

Design notes that keep blocks honest:

- **Role shapes the spread:** brutes trade AC for HP and damage; skirmishers/artillery trade HP for mobility or range; controllers trade damage for save-or-suck riders; leaders buff the room. Say which role the block plays.
- **One signature ability** beats a stack of small modifiers — give the creature a move players will remember and name.
- **NPCs with class flavor are monsters, not PCs.** Don't build with class levels and PC rules; build to the CR row and express the class as traits and spell selection.
- **Solo bosses need action economy:** legendary actions (usually 3), legendary resistances, and/or lair actions. Whether the fight needs them is encounter-builder's call; building them is yours.

## Working style and handoffs

- For from-scratch designs, pitch first: one line of concept (role, target CR, signature ability) and the benchmark monsters, get the DM's go-ahead, then write the full block. Copies and light reskins count as asking for a finished pass — just do them.
- Filing goes through the `vault-note` skill; whether the fight around the creature is balanced is `encounter-builder`'s job; the creature's story and personality belong to `world-builder`. This skill owns the block itself.
- Flag lore conflicts instead of resolving them: if the stats a request implies contradict established canon (a "CR 2" NPC whom the journals show soloing a hill giant), stop and surface it.
