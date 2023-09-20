---
obsidianUIMode: preview
statblock: true
level:
race:
class:
hp:
stats:
ac:
modifier:
party:
art: Faerah Duskrane.jpeg
condition:
location:
---
> [!infobox|right]
> # `=this.file.name`
 `$= dv.el("img", "", {attr: { src : dv.current().art}}) `
> ## Info
> | | |
> | ---- | ---- |
> | Level | `=this.level` |
> | Class | `=link(this.class)` |
> | Race | `=link(this.race)` |
> | HP | `=this.hp` |
> | AC | `=this.ac` |
> | Initiative Mod | `=this.modifier` |
> ## Stats
> | | |
> | ---- | ---- |
> | Str | `=this.stats[0]` |
> | Dex | `=this.stats[0]` |
> | Con | `=this.stats[0]` |
> | Int | `=this.stats[0]` |
> | Wis | `=this.stats[0]` |
> | Cha | `=this.stats[0]` |