# Entity schemas

**Common block** (every type below, creature notes included): `gist`, `summary`, `revealed`, `reveal`, `public_name` (optional), `facts`, `relationships`, `secrets`, `aliases`, `images`, `tags`. See `knowledge-model.md` and `relationships.md`.

Body scaffold: copy from the matching template in `z_Templates/Templater/World Building/`. DM-only prose goes under `## DM Notes` (`### Plot Hooks`, `### Hidden Details`, `### General Notes`); a DM aside elsewhere uses a `> [!dm]` callout.

## NPC — `4. World Almanac/NPCs/` — `npc`

```yaml
obsidianUIMode: preview
statblock: inline
location: "[[…|…]]"          # current whereabouts; null for the dead or placeless
condition: healthy            # healthy | injured | dead
gist: ""
summary: ""
revealed: {}
reveal: {}
facts: []
relationships: []
images: [z_Assets/PlaceholderImage.png]
tags: [npc]
aliases: ["Bare Name"]
pronounced: ""
race: "[[5. Mechanics/Races/….md|…]]"
gender: male                  # male | female
age: 40                       # number or null
alignment: "Neutral Good"
occupation: []                # role only, e.g. "Guildmaster"; the employer is an edge
description: ""               # DM voice
history: ""
personality: ""
ideal: ""
bond: ""
flaw: ""
goals: ""                     # string
likes: ""
dislikes: ""
secrets: ""
party_relationships: {}      # {Party: Acquaintance|Friendly|Ally|Disgruntled|Enemy}
```

Stat block: fill the `statblock` block under `## Stats` via the `statblock-creator` skill; `name` must equal the note name. No notes for nameless one-off characters; record them in the journal.

## Region, Settlement, Place of Interest — type tag + `location`

```yaml
location: "[[parent|…]]"     # world → region → settlement → place of interest
pronounced:
population:
terrain:
rulers: []                    # links to NPCs
government:
army:
imports: []
exports: []
resources: []                 # links into 6. Resources
routes: []                    # [{to: "[[…]]", miles: 12, note: ""}]; stored on one end only; no mode (travel method is on the party)
```

## Shop — `shop`, `location`

```yaml
location: "[[parent|…]]"
owners: []                    # links to NPCs
staff: []
cost_modifier: 1
type: ""                      # a Configuration.shop_types name
size: ""                      # a Configuration.shop_sizes name
items: []                     # links into 5. Mechanics/Items
resources: []
```

The fields are `type` and `size` (that is what the inventory scripts read), not `shop_type`/`shop_size`.

## World — `world`, `location`

`economic_scale`, `calendar`. No parent.

## Faction — `4. World Almanac/Factions/` — `faction`

```yaml
kind: cult                    # guild | cult | order | house | court | family | company | other
status: active                # active | broken | dormant | destroyed
location: "[[base|…]]"       # optional
goals: ""
resources: ""
clock: []                     # optional: [{step: "", done: false}] for a faction's own timeline
```

Leader and members are not stored here; they are inbound `leader`/`member` edges from NPC notes. Faction-to-faction ties go in this note's `relationships`.

## Story item — `4. World Almanac/Items/` — `story-item`

```yaml
base_item: "[[5. Mechanics/Items/….md|…]]"   # optional
holder: "[[PC, NPC, faction, or party]]"      # empty when not held
location: "[[…]]"                             # where it rests when not held
rarity: ""
attunement: false
```

Mechanics go in the body. Update `holder` in the wrap when an item changes hands.

## Custom creature — `4. World Almanac/Creatures/` — `story-creature`

```yaml
statblock: inline
base_creature: "[[5. Mechanics/Bestiary/….md|…]]"   # optional: what it was reskinned from
cr: "8"
size: Large
type: construct
environments: []
```

For a *kind* of creature, not an individual: no `location`, `condition`, `party_relationships`, or personality fields. Its makers and users are `relationships` edges (e.g. `serves` → a faction). The stat block goes in a `statblock` block under `## Stats` with a `^statblock` anchor, and `name` equal to the note name, so encounter blocks can link `[[Note Name]]`. Add `monster/cr/…`, `monster/size/…`, `monster/type/…` facet tags; never the bare `monster` tag. Lore and tactics go in the body under `## DM Notes`; what the party can learn about it goes in `facts`.

A specific named member of the kind (a boss, a survivor) is an NPC note that links the creature note in its `description`.

## Deity — `4. World Almanac/Deities/` — `story-deity`

```yaml
mechanics: "[[5. Mechanics/Deities/….md|…]]"   # optional
domains: []
```

Create a deity note only for gods that matter to the campaign. Otherwise link `worships` edges straight to the `5. Mechanics/Deities/` note.
