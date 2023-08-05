---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/mountain
- monster/environment/swamp
- monster/size/small
- monster/type/aberration
statblock: true
statblock-link: "#^statblock"
"name": "Star Spawn Grue"
"size": "Small"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "6"
- !!int "13"
- !!int "10"
- !!int "9"
- !!int "11"
- !!int "6"
"speed": "walk 30 ft."
"damage_immunities": "psychic"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Deep Speech"
"cr": "1/4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Creatures within 20 feet of the grue that aren't Aberrations have disadvantage\
    \ on saving throws, as well as on attack rolls against creatures other than a\
    \ star spawn grue."
  "name": "Aura of Shrieks"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d4 + 1|avg (2d4 + 1) piercing damage, and the target must succeed\
    \ on a DC 10 Wisdom saving throw or attack rolls against it have advantage until\
    \ the start of the grue's next turn."
  "name": "Confounding Bite"
"source":
- "MPMM"
- "MTF"
"image": "/compendium/bestiary/aberration/token/star-spawn-grue.png"
aliases: ["Star Spawn Grue"]
---
# Star Spawn Grue
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 227, Mordenkainen's Tome of Foes p. 234*  

Fanged and lipless, the ever-grinning, eerily staring grue lopes about on spindly legs and long arms. Bristles and spines project from odd patches of its grayish skin, and its long fingers end in broken and dirty nails. Grues are the weakest of the star spawn. A host of writhing, scrambling grues typically accompanies more powerful star spawn. Their constant chittering and shrieking produce discordant psychic energy that disrupts thought patterns in other creatures, which experience flashing colors, hallucinations, disorientation, and waves of hopelessness.

## Star Spawn

> [!quote]- A quote from Mordenkainen  
> 
> Stars don't spawn these creatures.
> 
> Such beautiful lights shouldn't be blamed for such balefulness.

The Material Plane represents only one small part of the multiverse. Beyond the best-known planes of existence lie realms alien to mortal life. Some are so hostile that even a moment's contact is enough to break a mortal's mind. Yet beings do exist that are native to these realms: entities that are ever hungering, searching, warring, and sometimes dreaming. These Elder Evils are far older than most of the mortal peoples and always inimical to such creatures' minds.

However much they might desire to enter and dominate the Material Plane, the Elder Evils are unable or unwilling to leave their realms. Some are imprisoned in their dimensions by external forces, some are inextricably bound to their home realities, and others simply can't find any way out.

The creatures known as star spawn are the heralds, servants, and soldiers of the Elder Evils, capable of taking on forms that can journey to the Material Plane. They arrive most often in the wake of a comet—or perhaps this phenomenon merely signals that star spawn are in the vicinity and available for communication. When the signs are right, cultists gather together, read aloud their blasphemous texts, and conduct the mind-searing rituals that guide star spawn into the world.

### Elder Evil Blessings

Disciples of certain Elder Evils can bestow supernatural gifts on those who serve that cult, including star spawn. The following powers are unique to specific cults; typically a creature has only one.

- Cult of Atropus, the World Born Dead  
- Cult of Borem, of the Lake of Boiling Mud  
- Cult of Haask, the Voice of Hargut  
- Cult of Tharizdun, the Chained God  
- Cult of Tyranthraxus, the Flamed One  

## Stat Block

```ad-statblock
title: Star Spawn Grue
![[/6. Mechanics/Bestiary/Aberration/Token/star-spawn-grue.png#token]]
*Small aberration, Neutral Evil*

- **Armor Class** 11 
- **Hit Points** `dice: 5d6|text(17)` (5d6) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 6 (-2)|13 (+1)|10 (+0)| 9 (-1)|11 (+0)| 6 (-2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** psychic
- **Languages** Deep Speech
- **Challenge** 1/4

## Traits

***Aura of Shrieks.*** Creatures within 20 feet of the grue that aren't Aberrations have disadvantage on saving throws, as well as on attack rolls against creatures other than a star spawn grue.

## Actions

***Confounding Bite.*** *Melee Weapon Attack:* `dice: d20+3` (+3 to hit), reach 5 ft., one target. Hit: `dice: 2d4 + 1` (`2d4 + 1`) piercing damage, and the target must succeed on a DC 10 Wisdom saving throw or attack rolls against it have advantage until the start of the grue's next turn.
```
^statblock

## Environment

mountain, swamp