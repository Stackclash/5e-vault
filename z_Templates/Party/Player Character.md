<%*
const path = require('path')

let title = tp.file.title
await tp.file.move('3. The Party/1. Players/' + tp.file.title)
if (tp.config.run_mode === 0) {
    title = await tp.system.prompt("What is the name of the character?")
    await tp.file.rename(title)
}

let images = tp.user.get_all_files(path.join(app.vault.adapter.getBasePath(), "z_Assets"))
let selectedImage = await tp.system.suggester(images, images, false, "PlaceholderImage.png")
-%>
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
art: <% selectedImage %>
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