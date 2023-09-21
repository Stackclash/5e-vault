---
obsidianUIMode: preview
statblock: true
level: 
race: 
class: 
hp: 
stats:
  - "16"
  - 15, 14
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
> | Strength | `=this.stats[0]` | `$=(parseInt(this.stats[0])-10)/2` |
> | Dexterity | `=this.stats[1]` |  |
> | Constitution | `=this.stats[2]` |  |
> | Intelligence | `=this.stats[3]` |  |
> | Wisdom | `=this.stats[4]` |  |
> | Charisma | `=this.stats[5]` |  |