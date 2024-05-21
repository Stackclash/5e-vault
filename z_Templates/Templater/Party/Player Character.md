<%*
const fs = require('fs')
const path = require('path')
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
let character = {}
if (dndBeyondInfo) {
  let dndBeyondId
  if (isNaN(dndBeyondInfo)) {
    dndBeyondId = dndBeyondInfo.match(/\d+$/)[0]
  } else {
    dndBeyondId = dndBeyondInfo
  }
  character = new tp.user.dndBeyondCharacter(dndBeyondId)
  await character.initialize()
}
const buildList = (list, spaces) => {
  let result = []
  if (typeof list[0] === 'string') {
    result = list.reduce((accum, item) => {
      const itemString = `- ${item}`
      accum.push(itemString.padStart(spaces + itemString.length))
      return accum
    }, []).join(`\n`)
  } else {
    result = list.reduce((accum, item) => {
      accum.push(Object.entries(item).reduce((accum2, [key, value]) => {
        let itemString = `${key}: ${value}`
        let finalSpaces = spaces
        if (accum2.length === 0) {
          itemString = `- ${itemString}`
        } else {
          finalSpaces += 2
        }
        accum2.push(itemString.padStart(finalSpaces + itemString.length))

        return accum2
      }, []).join(`\n`))

      return accum
    }, []).join(`\n`)
  }
  return result
}
-%>
---
obsidianUIMode: previews
statblock: true
name: 
level: <% character.level %>
ac: <% character.armorClass %>
hp: <% character.healthPoints.current %>
modifier: <% character.initiative %>
proficiency: <% character.proficiencyBonus %>
url: 'https://dndbeyond.com/characters/103214475'
image: >-
  https://www.dndbeyond.com/avatars/35471/817/1581111423-103214475.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp
name: Seluvis Felo'melorn
race:
  name: <% character.race.name %>
  subRace: <% character.race.subRace %>
description:
  gender: <% character.description.gender %>
  age: <% character.description.age %>
  hair: <% character.description.hair %>
  eyes: <% character.description.eyes %>
  skin: <% character.description.skin %>
  height: <% character.description.height %>
  weight: <% character.description.weight %>
  size: <% character.description.size %>
proficiencies:
  armor:
<% buildList(character.proficiencies.armor, 4) %>
  weapons:
<% buildList(character.proficiencies.weapons, 4) %>
  tools:
<% buildList(character.proficiencies.tools, 4) %>
  languages:
<% buildList(character.proficiencies.languages, 4) %>
speeds: <% character.speeds.walk %>
defenses:
  immunities:
<% buildList(character.defenses.immunities, 4) %>
  resistances:
<% buildList(character.defenses.resistances, 4) %>
background:
  background:
    name: Guild Artisan / Guild Merchant
    description: >-
      <p>You are a member of an artisan’s guild, skilled in a particular field
      and closely associated with other artisans. You are a well-established
      part of the mercantile world, freed by talent and wealth from the
      constraints of a feudal social order. You learned your skills as an
      apprentice to a master artisan, under the sponsorship of your guild, until
      you became a master in your own right.</p>
  backstory: null
  organizations: 'I.T.E.M.S: International Traders Emporium Merchant Services - Current guild.'
  allies: null
  enemies: null
  notes: >+
    Day 3: "Proof of Concept" - Weapon Construction Logs
     Redgrave and I have begun working on a device to focus magic projectiles through.  The device combined with my magical infusion would be able to be more compact than this crossbow I currently use.  (At this moment Yevelda is entering a drinking contest with a half elf for his hat, we'll see who wins.  Results are in!  She reached for his hat while passing out )  The device maybe able to be able to be attached to these Gauntlets.



    Day 5: Back in the bar continuing work with Redgrave.  The rest of the party
    has ventured out in a love mission for Yevelda.   Progress is slow...
classes:
<% buildList(character.classes, 2) %>
abilityScores:
  strength:
    value: 
    modifier: 
  dexterity:
    value: 
    modifier: 
  constitution:
    value: 
    modifier: 
  intelligence:
    value: 
    modifier: 
  wisdom:
    value: 
    modifier: 
  charisma:
    value: 
    modifier: 
savingThrows:
  strength:
    value: 
    proficiency: 
  dexterity:
    value: 
    proficiency: 
  constitution:
    value: 
    proficiency: true
  intelligence:
    value: 
    proficiency: true
  wisdom:
    value: 
    proficiency: 
  charisma:
    value: 
    proficiency: 
  notes: []
skills:
  acrobatics:
  animal-handling:
  arcana:
  athletics:
  deception:
  history:
  insight:
  intimidation:
  investigation:
  medicine:
  nature:
  perception:
  performance:
  persuasion:
  religion:
  sleight-of-hand:
  stealth:
  survival:
racialTraits: []
classFeatures: []
feats: []
spells: []
currencies:
  cp: 0
  sp: 35
  gp: 34
  ep: 0
  pp: 0
inventory: []
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
