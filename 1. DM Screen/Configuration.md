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

| `` |  |
| ---- | ---- |
|  |  |
```meta-bind-button
style: primary
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
```