# Stat block format

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

