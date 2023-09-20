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

let images = tp.user.get_all_files("z_Assets")
%>
> [!infobox|right]
> # `=this.file.name`
> <% tp.system.suggester(images, images, false, "PlaceholderImage.png") %>
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