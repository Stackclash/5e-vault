---
obsidianUIMode: preview
statblock: true
level: 5
race: "[[5. Mechanics/Races/Warforged (ERLW).md|Warforged (ERLW)]]"
class: "[[5. Mechanics/Classes/Cleric Forge Domain (XGE).md|Cleric Forge Domain (XGE)]]"
hp: 38
stats:
  str: 15
  dex: 8
  con: 14
  int: 12
  wis: 18
  cha: 10
ac: 22
modifier: -1
alignment: 
ideal: 
bond: 
flaw: 
likes: 
dislikes: 
image: z_Assets/Redgrave.jpeg
condition: Healthy
location: Vallaki
party: "[[3. The Party/Parties/Curse of Strahd.md|Curse of Strahd]]"
exhaustion: 0
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
frame: DnDBGeorge
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

```dataviewjs
const logs = dv.pages('"3. The Party/Session Logs"').filter(p => p.file.outlinks.includes(dv.current().file.link))

const mentions = []

const logsContent = await Promise.all(logs.map(l => dv.io.load(l.file.path).toString()))

console.log(logsContent)
```
