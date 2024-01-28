---
obsidianUIMode: preview
active_world: "[[Eldoria]]"
active_party: "[[Curse of Strahd]]"
---
> [!infobox]
> | | |
> |---|---|
> | **Active World:** | `INPUT[suggester(optionQuery("4. World Almanac/Worlds")):active_world]` |
> | **Active Party:** | `INPUT[suggester(optionQuery("3. The Party/Parties")):active_party]` | 
# Dungeon Master Prep
| `BUTTON[create-npc]` |
| ---- |
|  |
```meta-bind-button
style: primary
label: Create NPC
id: create-npc
hidden: true
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template
  - type: input
    str: NPC
```