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
art:
condition:
location:
---
<%*
const dv = app.plugins.plugins.dataview.api

let title = tp.file.title
await tp.file.move('3. The Party/1. Players/' + tp.file.title)
if (tp.config.run_mode === 0) {
    title = await tp.system.prompt("What is the name of the character?")
    await tp.file.rename(title)
}
%>
> [!infobox|right]
> # `=this.file.name`
> `=embed(link(this.art))`
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
> | Str | `=this.stats[0] || 0` |
> | Dex | `=this.stats[1] || 0` |
> | Con | `=this.stats[2] || 0` |
> | Int | `=this.stats[3] || 0` |
> | Wis | `=this.stats[4] || 0` |
> | Cha | `=this.stats[5] || 0` |