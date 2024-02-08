---
obsidianUIMode: preview
statblock: true
level: 5
race: "[[5. Mechanics/Races/Elf Drow.md|Elf Drow]]"
class: "[[5. Mechanics/Classes/Rogue Swashbuckler (XGE).md|Rogue Swashbuckler (XGE)]]"
hp: 38
stats:
  str: 8
  dex: 18
  con: 14
  int: 10
  wis: 12
  cha: 14
ac: 16
modifier: 6
alignment: 
ideal: 
bond: 
flaw: 
likes: 
dislikes: 
image: z_Assets/Faerah Duskrane.jpeg
condition: Healthy
location: Vallaki
party: "[[3. The Party/Parties/Curse of Strahd.md|Curse of Strahd]]"
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
frame: DnDBHolly
```

# Personality
## Loves

## Hates

# Goals
## Short-term

## Long-term

# History
## Backstory
I was never meant for the underdark, but then Drow really arent' welcome anywhere else. The Lolth-sworn of my kind are weak minded, following mommy dearest like lambs to slaughter. As a child I was always a free thinker and a free spirit. I'd rather explore and make friends than fight to prove my worth. I asked "why" too much, I could never blindly obey. It would have gotten me killed if I didn't find out just how dangerous I was to Lolth's agenda. While others of my kind would kill each other for station and ambition, I dreamt of a life beyond the confines of darkness; a life full of love, acceptance, and kindness. Of course I wouldn't have known what any of that was if my sister hadn't shown me. In secret, we made a little pact of our own. She confided in me that Drow have left the underdark before, so we decided that we would flee together after I had trained. It took years for us to find a way out and plan our escape. We lived a double life of appeasing Lolth while also gaining access to our historic records and the best trainers so I could learn and prepare. Enduring that was a special kind of hell. During that time I honed my skills in stealth, deception, and sleight of hand. My sister breathed compassion into me for the lambs who got in so deep that they lost any sense of self. "Their free will was twisted and carved into weapons for Lolth," my sister would say to me. We were mere weeks away from enacting our escape plan before my sister was discovered. She was murdered and made an example of. She gave me an amulet just the day before which displayed a crescent moon within a circle. She told me this stone is the color of the sky beyond the underdark. "Look to the sky and you'll find your way," were her last words to me. I had no idea how she got the stone or what it meant at the time, but in hindsight, she knew that the plan we made together was a journey I would be walking alone. Since then I have never taken it off. My purpose is clear: release as many people as possible from the clutches of tyranny and oppression.
## Religion

## Enemies

## Allies

# DM Notes
## Additional Notes From Players 

## Hidden Details

## Notes

```dataviewjs
await dv.view('pcSessionMentions', {current: dv.current()})
```