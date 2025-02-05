---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: underdark
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/3
  - monster/environment/underdark
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Minotaur
---
# [[5. Mechanics\Bestiary\Monstrosity\Minotaur.md|Minotaur]]
*Source: Monster Manual p. 223. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

A minotaur's roar is a savage battle cry that most civilized creatures fear. Born into the mortal realm by demonic rites, minotaurs are savage conquerors and carnivores that live for the hunt. Their brown or black fur is stained with the blood of fallen foes, and they carry the stench of death.

## The Beast Within

Most minotaurs are solitary carnivores that roam labyrinthine dungeons, twisting caves, primeval woods, and the maze-like streets and passages of desolate ruins. A minotaur can visualize every route it might take to close the distance to its prey.

The scent of blood, the tearing of flesh, and the cracking of bones spur a minotaur's lust for carnage, overwhelming all thought and reason. In a blood rage, a minotaur charges anything it sees, butting and goring like a battering ram, then chopping the fallen in twain.

Apart from ambushing creatures that wander into its labyrinth, a minotaur cares little for strategy or tactics. Minotaurs seldom organize, they don't respect authority or hierarchy, and they are notoriously difficult to enslave, let alone control.

## Cults of the Horned King

Minotaurs are the dark descendants of humanoids transformed by the rituals of cults that reject the oppression of authority by returning to nature. Inductees often mistake these cults for druidic circles or totemic religions whose ceremonies involve entering a labyrinth while wearing a ceremonial animal mask.

Within these bounded environments, cultists hunt, kill, and eat wild beasts, indulging their basest primal urges. In the end, however, sacrificial animals are exchanged for humanoid sacrifice-sometimes an inductee that tried to escape the cult after learning its secrets. These labyrinths become blood-soaked halls of slaughter, echoing to the cultists' savagery.

Unknown to all but their highest-ranking leaders, these mystery cults are creations of the demon lord Baphomet, the Horned King, whose layer of the Abyss is a gigantic labyrinth. Some of his followers are fervent supplicants that plead for strength and power. Others come to the cult seeking a life free from authority's chains-and are liberated of their humanity instead as Baphomet transforms them into the minotaurs that echo his own savage form.

Although they begin as creations of the Horned King, minotaurs can breed true with one another, giving rise to an independent race of Baphomet's savage children in the world.

```statblock
"name": "Minotaur"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"stats":
- !!int "18"
- !!int "11"
- !!int "16"
- !!int "6"
- !!int "16"
- !!int "9"
"speed": "40 ft."
"skillsaves":
  "Perception": !!int "7"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Abyssal"
"cr": "3"
"traits":
- "desc": "If the minotaur moves at least 10 feet straight toward a target and then\
    \ hits it with a gore attack on the same turn, the target takes an extra 9 (2d8)\
    \ piercing damage. If the target is a creature, it must succeed on a DC 14 Strength\
    \ saving throw or be pushed up to 10 feet away and knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
  "name": "Charge"
- "desc": "The minotaur can perfectly recall any path it has traveled."
  "name": "Labyrinthine Recall"
- "desc": "At the start of its turn, the minotaur can gain advantage on all melee\
    \ weapon attack rolls it makes during that turn, but attack rolls against it have\
    \ advantage until the start of its next turn."
  "name": "Reckless"
"actions":
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 17 (2d12\
    \ + 4) slashing damage."
  "name": "Greataxe"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) piercing damage."
  "name": "Gore"
"source":
- "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/minotaur.webp"
```
^statblock

## Environment

underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
