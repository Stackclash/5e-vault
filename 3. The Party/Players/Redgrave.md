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
Forged in lightning and blood by the dark wizard Eludrax, "Eight" was born. The wizard's thirst for eternal life led him not to the cultivation of a new fleshy body, but a perfect one of his own design. Using ancient techniques from lands quite distant, Eludrax forged machines for his allies war efforts. Nothing, however, could keep him from his true life's work. --- It was the eighth of Eludrax's shield guardians, and thus aptly named. Most of of the Lich's constructs bore no soul of their own, merely mindless automatons for his own bidding. He would often pluck lost souls from Limbo and twist and torture them to suit his machinations. But the eight were different. They were his personal bodyguards, improved physically in every way, and candidates for his transference of life. Most importantly, they were devoid of soul. At the aging dark wizard's command the constructs committed unspeakable atrocities. They were the harbingers of his dirty work, and Eludrax was not above committing horrors in the name of his research. Eight was his magnum opus, and thus his intended vessel. His plan to transfer his own soul into the guardian was made haste, however, as Eludrax awoke one night to an adventurer's group tearing through his laboratory. He commanded Eight to follow, sending the other seven to combat the coming threat. He clamored as fast as he could to the dark crystal machine intended to bind his soul into his vessel, and spilled his blood on the dais with a quick slice to the palm. He grasped Eight's cool metal hand, and forced it onto the crystal. Thus, the dark ritual began. Eludrax's eyes went white as his spirit was ripped from his body and absorbed into the orb. What he miscalculated, however, was that a soul already existed inside his creation. It was faint, beaten down by years of cruelty and transgression, but there nonetheless. The Lich's powerful spirit growled menacingly as it reached out to pluck the soul from Eight. Before he could, however, a burst of radiance appeared to encapsulate the soul. Eludrax's fury burned hot, but was not strong enough to pierce the veil of light. Time was not on the dark wizard's side. The party that'd breached his laboratory had finally made it into this sanctum. The group exchanged quick words, deliberating on their plan of action. Before their sorcerer could cry out, however, the paladin raised her mace and brought it crashing down on the large swirling crystal. As it shattered, the wizard's soul was cast into limbo, spiraling out of the material plane with a guttural scream. "Am I...?" Eight spoke aloud with a sound of relief, before collapsing to the cold stone floor with a hearty thud. --- Eight awoke to the stench of burning and the feel of a warm hand against its cold metal chest. In the distance the tower it'd known as its home, the place of its creation, was fervently ablaze. "Can it understand us?" One of the adventurers pondered out loud. Eight nodded in response The woman whose hand was pulsating over it with life magic leaned in a bit closer to its face. "So, do you have a name?" She asked in a soft voice, curiously, as if she were talking to a child. Eight looked down at the ground, then back at the burning spire behind him. "Redgrave," it muttered quietly, then returned its gaze to hers. "My name is Redgrave." "Like that tower?" One of the men in the group asked questioningly. "Yes," the forged known formerly as Eight responded. "So that I may never forget what happened here."
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
