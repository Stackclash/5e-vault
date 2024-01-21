---
obsidianUIMode: preview
statblock: true
level: 5
race: Half Elf
class: Warlock
hp: 43
stats:
  str: 7
  dex: 16
  con: 16
  int: 11
  wis: 13
  cha: 20
ac: 15
modifier: 3
alignment: 
ideal: 
bond: 
flaw: 
likes: 
dislikes: 
image: z_Assets/Marin.jpeg
condition: Healthy
location: Vallaki
party: "[[3. The Party/Parties/Curse of Strahd.md|Curse of Strahd]]"
exhaustion: 0
---
> [!infobox|right]
> # `=this.file.name`
> `$=dv.container='<img src="'+app.vault.getResourcePath(dv.fileLink("z_Assets/"+dv.current().art))+'"/>'`
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
frame: DnDBBriana
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