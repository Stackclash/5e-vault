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
level: 1
race:
class:
hp: 1
stats:
  - "10"
  - "10"
  - "10"
  - "10"
  - "10"
  - "10"
ac: 10
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
> | | | |
> | ---- | ---- | ---- |
> | Strength | `=this.stats[0]` | `$=Math.floor((parseInt(dv.current().stats[0])-10)/2)` |
> | Dexterity | `=this.stats[1]` | `$=Math.floor((parseInt(dv.current().stats[1])-10)/2)` |
> | Constitution | `=this.stats[2]` | `$=Math.floor((parseInt(dv.current().stats[2])-10)/2)` |
> | Intelligence | `=this.stats[3]` | `$=Math.floor((parseInt(dv.current().stats[3])-10)/2)` |
> | Wisdom | `=this.stats[4]` | `$=Math.floor((parseInt(dv.current().stats[4])-10)/2)` |
> | Charisma | `=this.stats[5]` | `$=Math.floor((parseInt(dv.current().stats[5])-10)/2)` |