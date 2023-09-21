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
art: Yevelda Ovak.jpeg
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
> | | | |
> | ---- | ---- | ---- |
> | Strength | `=this.stats[0]` | `$=Math.floor((parseInt(dv.current().stats[0] || 0)-10)/2)` |
> | Dexterity | `=this.stats[1]` | `$=Math.floor((parseInt(dv.current().stats[1] || 0)-10)/2)` |
> | Constitution | `=this.stats[2]` | `$=Math.floor((parseInt(dv.current().stats[2] || 0)-10)/2)` |
> | Intelligence | `=this.stats[3]` | `$=Math.floor((parseInt(dv.current().stats[3] || 0)-10)/2)` |
> | Wisdom | `=this.stats[4]` | `$=Math.floor((parseInt(dv.current().stats[4] || 0)-10)/2)` |
> | Charisma | `=this.stats[5]` | `$=Math.floor((parseInt(dv.current().stats[5] || 0)-10)/2)` |