---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/2
- monster/size/small
- monster/type/aberration/ambusher
statblock: inline
aliases: ["Mindkiller"]
---
# [[5. Mechanics/Bestiary/Aberration/Mindkiller.md|Mindkiller]]
*Source: Flee, Mortals! (Packet 1) p. 13*

```statblock
"name": "Mindkiller"
"size": "Small"
"type": "aberration"
"subtype": "Ambusher"
"alignment": "typically  Lawful Evil"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "10d6 + 10"
"stats":
- !!int "14"
- !!int "15"
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "14"
"speed": "10 ft., fly 30 ft."
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "4"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "2"
"traits":
- "desc": "The mindkiller can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous"
- "desc": "The mindkiller is unaffected by psionic powers manifested by voiceless\
    \ talkers unless the mindkiller wishes to be."
  "name": "Psionic Immunity"
"actions":
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage plus 7 (2d6) psychic damage, and if the target is a Medium\
    \ or smaller creature, the target is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ (escape DC 12). Until the grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ and the mindkiller can't use their Claws to attack another target."
  "name": "Claws"
- "desc": "Ranged Spell Attack: +5 to hit, range 30 ft., one creature. Hit: 13\
    \ (3d6 + 3) psychic damage, and the mindkiller is [[/5. Mechanics/Rules/Conditions.md#invisible|invisible]]\
    \ to the target until the end of the mindkiller's next turn."
  "name": "Concealing Strike"
- "desc": "A Humanoid [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]] by the\
    \ mindkiller must succeed on a DC 12 Strength saving throw or the mindkiller enters\
    \ the Humanoid's body. While inside a Humanoid, the mindkiller has total cover\
    \ against attacks and other effects originating outside the Humanoid, and the\
    \ only action the mindkiller can take is to leave the body, exiting in an unoccupied\
    \ space within 5 feet of the body.\n\nWhen a Humanoid ends their turn with the\
    \ mindkiller inside of them, they must succeed on a DC 13 Constitution saving\
    \ throw or take 10 necrotic damage. If the Humanoid is reduced to 0 hit points,\
    \ they die and the mindkiller takes over the body, which regains hit points equal\
    \ to the Humanoid's hit point maximum. The mindkiller retains their Intelligence,\
    \ Wisdom, and Charisma scores, their understanding of Deep Speech and Undercommon,\
    \ and their telepathy. They otherwise adopt the target's statistics and can take\
    \ the actions the creature could take. They know everything the creature knew,\
    \ including spells, class features, traits, and languages. If the body is reduced\
    \ to 0 hit points after the mindkiller takes control, the mindkiller must leave\
    \ it.\n\nA creature wielding a sharp tool or weapon within reach of a Humanoid\
    \ host or body with a mindkiller inside can use an action to attempt to remove\
    \ the mindkiller, making an attack roll against the Humanoid's AC if the host\
    \ is unwilling. On a hit, the creature deals 11 (2d10) slashing damage to the\
    \ host and must make a DC 15 Wisdom (Medicine) check. On a successful check, the\
    \ creature cuts the mindkiller out of the host. On a faiIed check, if this slashing\
    \ damage reduced the host to 0 hit points, the mindkiller kills the host; otherwise,\
    \ there is no effect."
  "name": "Mindwipe"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```