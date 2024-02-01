---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/11
- monster/environment/underdark
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/elf
statblock: inline
aliases: ["Shadar-kai Soul Monger"]
---
# [[5. Mechanics\Bestiary\Humanoid\Shadar Kai Soul Monger (MPMM).md|Shadar-kai Soul Monger]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 214*  

Wracked with despair over the loss of memories of a brighter time, soul mongers crave the vitality of others. The aching void within a soul monger radiates outward, manifesting as an unbearable weight that drains the vigor of anyone unfortunate enough to be in their presence. Those who have escaped the onslaught of a soul monger can hardly shake the memory of the sound they make—the moan of a tortured soul, lost in a bottomless well of tragedy.

## Shadar-kai

In the gloom of the Shadowfell live shadar-kai, elves whose ancestors served the Raven Queen, a god of death and memory. They were brought to that realm in ages past, so long ago that they're now adapted to its cheerless environment, both physically and mentally.

Eons of exposure to the influence of the Shadowfell has left shadar-kai often joyless and mournful. In that realm, they have pale hair, wrinkled gray skin, and swollen joints that give them a corpselike aspect. They appear more youthful while on other planes, but their skin always retains a deathly ashen hue. When in the Shadowfell, they detest mirrors and avoid keeping things that remind them of their age.

Shadar-kai of the Raven Queen watch over both the Shadowfell and the Material Plane, scouting out choice souls and tragedies that might please their deity. They are rumored to be able to coax worldly events along tragic paths for her amusement. The Raven Queen is famously cryptic even to her most devoted followers, however; their efforts are rewarded only with vague omens they interpret as best they can.

### Fortress of Memories

The shadar-kai who are most devoted to the Raven Queen serve her at the Fortress of Memories, her twisted castle in the Shadowfell. The fortress is a mournful place, filled with incessant echoes of the past. Flocks of ravens that act as the Raven Queen's eyes and ears darken the skies around it when they emerge from within, bearing her cryptic messages and omens far and wide across the multiverse.

Within the fortress are items that the Raven Queen finds irresistible: objects invested with deep feelings of sorrow, longing, or remorse. These items are brought to her as gifts from the shadar-kai, and include furniture, clocks, mirrors, jewels, and toys. Ghostly visions of people, places, and pets also appear in the fortress. Any of these things can spontaneously appear about her lair, every object and apparition being a metaphoric representation of some story—great or small—that was saturated with raw emotion.

Shadar-kai encountered outside the Shadowfell are often on quests to find the most sorrow-touched items they can find to bring back to their queen's gloomy castle.

```statblock
"name": "Shadar-kai Soul Monger (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Typically  Neutral Evil"
"ac": !!int "15"
"hp": !!int "136"
"hit_dice": "21d8 + 42"
"stats":
- !!int "8"
- !!int "17"
- !!int "14"
- !!int "19"
- !!int "16"
- !!int "13"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Dexterity": !!int "7"
  "Wisdom": !!int "7"
"skillsaves":
  "Perception": !!int "7"
"damage_immunities": "necrotic, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Common, Elvish"
"cr": "11"
"traits":
- "desc": "The shadar-kai casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 16):\n\n1/day each: [[5. Mechanics/Spells/Bestow Curse.md|bestow curse]], [finger\
    \ of death](compendium/spells/finger-of-death.md), [[5. Mechanics/Spells/Gaseous Form.md|gaseous form]],\
    \ [[5. Mechanics/Spells/Seeming.md|seeming]]"
  "name": "spells"
- "desc": "The shadar-kai has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
- "desc": "The shadar-kai has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "When it reduces a creature to 0 hit points, the shadar-kai can gain temporary\
    \ hit points equal to half the creature's hit point maximum. While the shadar-kai\
    \ has temporary hit points from this trait, it has advantage on attack rolls."
  "name": "Soul Thirst"
- "desc": "Any Beast or Humanoid (except an elf) that starts its turn within 5 feet\
    \ of the shadar-kai has its speed reduced by 20 feet until the start of that creature's\
    \ next turn."
  "name": "Weight of Ages"
"actions":
- "desc": "The shadar-kai makes two Shadow Dagger attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 4d4 + 3|avg (4d4 + 3) piercing\
    \ damage plus dice: 3d12|avg (3d12) necrotic damage, and the target has disadvantage\
    \ on saving throws until the end of the shadar-kai's next turn. Hit or Miss: The\
    \ dagger magically returns to the shadar-kai's hand immediately after a ranged\
    \ attack."
  "name": "Shadow Dagger"
- "desc": "The shadar-kai emits weariness in a 60-foot cube. Each creature in that\
    \ area must make a DC 16 Constitution saving throw. On a failed save, a creature\
    \ takes dice: 10d8|avg (10d8) psychic damage and suffers 1 level of [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]].\
    \ On a successful save, it takes half as much damage and doesn't gain a level\
    \ of [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]]."
  "name": "Wave of Weariness (Recharge 4-6)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/humanoid/token/shadar-kai-soul-monger.png"
```
^statblock

## Environment

underdark, urban
