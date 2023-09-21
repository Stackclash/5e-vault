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
art: PlaceholderImage.png
condition:
location:
---
> [!infobox|right]
> # `=this.file.name`
> `$=dv.container='<img src="'+app.vault.getResourcePath(dv.fileLink("z_Assets/"+dv.current().art))+'"/>'`
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
> | Dex | `=this.stats[1]` |
> | Con | `=this.stats[2]` |
> | Int | `=this.stats[3]` |
> | Wis | `=this.stats[4]` |
> | Cha | `=this.stats[5]` |