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
> | Level | `=this.level` |
> | Class | `=link(this.class)` |
> | Race | `=link(this.race)` |
> | HP | `=this.hp` |