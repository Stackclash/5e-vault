<%*
const path = require('path')
const DnDBeyondCharacter = require('z_Scripts/JS/dndBeyondFetch.js')


const dv = app.plugins.getPlugin("dataview").api

await tp.file.move('3. The Party/Players/' + tp.file.title)
if (tp.config.run_mode === 0) {
    let title = await tp.system.prompt("What is the name of the character?")
    await tp.file.rename(title)
}

let images = tp.user.get_all_files(app.vault.adapter.getBasePath(), "z_Assets")
let selectedImage = await tp.system.suggester(images.map(i => i.name), images.map(i => i.path), false, "What image to use?")
if (!selectedImage) selectedImage = "z_Assets/PlaceholderImage.png"

let parties = dv.pages('"3. The Party/Parties"')
let selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties.map(p => [p.file.path, p.file.name]), false, "What party is the character a part of?")

let dndBeyondInfo = await tp.system.prompt("Paste D&D Beyond character url or id here or press Enter to skip.")
if (dndBeyondInfo) {
  let dndBeyondId
  if (isNaN(dndBeyondInfo)) {
    dndBeyondId = dndBeyondInfo.match(/\d+$/)[0]
  } else {
    dndBeyondId = dndBeyondInfo
  }
  console.log(DnDBeyondCharacter, path.relative(__dirname, path.join(app.vault.adapter.getBasePath(), 'z_Scripts/JS/dndBeyondFetch.js')))
  const character = new DnDBeyondCharacter(dndBeyondId)
  await character.initialize()
}

-%>
---
obsidianUIMode: preview
statblock: true
level: 1
race:
class:
hp: 1
stats:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 10
  cha: 10
ac: 10
modifier:
alignment: 
ideal: 
bond: 
flaw: 
likes: 
dislikes: 
party: "[[<% selectedParty.join('|') %>]]"
image: <% selectedImage %>
condition:
location:
---
> [!infobox|right]
> # `=this.file.name`
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
> ```
> ## Info
> | | |
> | ---- | ---- |
> | Level | `INPUT[inlineSelect(option(1),option(2),option(3),option(4),option(5),option(6),option(7),option(8),option(9),option(10),option(11),option(12),option(13),option(14),option(15),option(16),option(17),option(18),option(19),option(20)):level]` |
> | Class | `INPUT[suggester(optionQuery("5. Mechanics/Classes")):class]` |
> | Race | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> | HP | `INPUT[number:hp]` |
> | AC | `INPUT[number:ac]` |
> | Initiative Mod | `INPUT[number:modifier]` |
> ## Stats
> | | | |
> | ---- | ---- | ---- |
> | Strength | `INPUT[number:stats.str]` | `$=Math.floor((parseInt(dv.current().stats.str)-10)/2)` |
> | Dexterity | `INPUT[number:stats.dex]` | `$=Math.floor((parseInt(dv.current().stats.dex)-10)/2)` |
> | Constitution | `INPUT[number:stats.con]` | `$=Math.floor((parseInt(dv.current().stats.con)-10)/2)` |
> | Intelligence | `INPUT[number:stats.int]` | `$=Math.floor((parseInt(dv.current().stats.int)-10)/2)` |
> | Wisdom | `INPUT[number:stats.wis]` | `$=Math.floor((parseInt(dv.current().stats.wis)-10)/2)` |
> | Charisma | `INPUT[number:stats.cha]` | `$=Math.floor((parseInt(dv.current().stats.cha)-10)/2)` |
# DnD Beyond Character Sheet
```custom-frames
frame: 
```

# Personality
## Loves

## Hates

# Goals
## Short-term

## Long-term

# History
## Backstory

## Religion

## Enemies

## Allies

# DM Notes
## Additional Notes From Players 

## Hidden Details

## Notes
