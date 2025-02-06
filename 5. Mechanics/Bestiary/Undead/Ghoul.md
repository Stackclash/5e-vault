---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 'underdark, swamp, urban'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\1
  - monster\Environment\Swamp
  - monster\Environment\Underdark
  - monster\Environment\Urban
  - monster\Size\Medium
  - monster\Type\Undead
aliases:
  - Ghoul
---
# [[5. Mechanics\Bestiary\Undead\Ghoul.md|Ghoul]]
*Source: Monster Manual p. 148, Curse of Strahd, Tasha's Cauldron of Everything, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

Ghouls roam the night in packs, driven by an insatiable hunger for humanoid flesh.

## Devourers of Flesh

Like maggots or carrion beetles, ghouls thrive in places rank with decay and death. A ghoul haunts a place where it can gorge on dead flesh and decomposing organs. When it can't feed on the dead, it pursues living creatures and attempts to make corpses of them. Though they gain no nourishment from the corpses they devour, ghouls are driven by an unending hunger that compels them to consume. A ghoul's undead flesh never rots, and this monster can persist in a crypt or tomb for untold ages without feeding.

## Abyssal Origins

Ghouls trace their origins to the Abyss. Doresain, the first of their kind, was an elf worshiper of Orcus. Turning against his own people, he feasted on humanoid flesh to honor the Demon Prince of Undeath. As a reward for his service, Orcus transformed Doresain into the first ghoul. Doresain served Orcus faithfully in the Abyss, creating ghouls from the demon lord's other servants until an incursion by Yeenoghu, the demonic Gnoll Lord, robbed Doresain of his abyssal domain. When Orcus would not intervene on his behalf, Doresain turned to the elf gods for salvation, and they took pity on him and helped him escape certain destruction. Since then, elves have been immune to the ghouls' paralytic touch.

## Ghasts

Orcus sometimes infuses a ghoul with a stronger dose of abyssal energy, making a ghast. Whereas ghouls are little more than savage beasts, a ghast is cunning and can inspire a pack of ghouls to follow its commands.

```statblock
"name": "Ghoul"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "13"
- !!int "15"
- !!int "10"
- !!int "7"
- !!int "10"
- !!int "6"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common"
"cr": "1"
"actions":
- "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6\
    \ + 2) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
    \ + 2) slashing damage. If the target is a creature other than an elf or undead,\
    \ it must succeed on a DC 10 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Claws"
"source":
- "MM"
- "CoS"
- "TCE"
- "VEoR"
"image": "5. Mechanics/Bestiary/Undead/token/ghoul.webp"
```
^statblock

## Environment

underdark, swamp, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
