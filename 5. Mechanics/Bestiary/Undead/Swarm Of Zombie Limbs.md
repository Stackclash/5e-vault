---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/cr/1
- monster/size/medium
- monster/type/undead
statblock: inline
aliases: ["Swarm of Zombie Limbs"]
---
# [[5. Mechanics\Bestiary\Undead\Swarm Of Zombie Limbs.md|Swarm of Zombie Limbs]]
*Source: Van Richten's Guide to Ravenloft p. 254*  

Among the undead, a lone zombie ranks far from the most menacing. The horror of the shambling dead lies not in their individual menace, though, but their numbers, their persistence, and their disregard for their own well-being. A throng of zombies will douse a forest fire with their own ashes or march into a dragon's maw until the monster chokes. In the course of their relentless marches, zombies might suffer all manner of trauma, potentially reducing them to masses of crawling limbs, infecting them with terrible diseases (see zombie plague spreader), or crushing an entire horde into a single, rotting titan (see zombie clot).

## Zombie Apocalypses

Among the types of horror adventures detailed in "chapter 2", tales of uncontrolled zombie outbreaks orbit the "dark fantasy" and "disaster horror" genres. The horror of these adventures focuses not on the terror of a single zombie, but of countless individual threats overwhelming society. When creating your own undead calamities, consider the plots presented on the Zombie Apocalypses table.

**Zombie Apocalypses**

`dice: [[Swarm Of Zombie Limbs.md#^zombie-apocalypses]]`

| dice: d4 | Zombie Plot |
|----------|-------------|
| 1 | A twisted wish causes those affected by healing magic and [[5. Mechanics/Items/Potion Of Healing.md|potions of healing]] to rise as zombies. |
| 2 | Overwhelming magic reanimates zombies again and again as [[5. Mechanics/Bestiary/Undead/Swarm Of Zombie Limbs.md|swarms of zombie limbs]]. |
| 3 | The githyanki unleash [[5. Mechanics/Bestiary/Undead/Zombie Plague Spreader.md|zombie plague spreaders]] to scour mind flayers from a world. |
| 4 | The seals containing an underground zombie horde fail, releasing ancient [[5. Mechanics/Bestiary/Undead/Zombie Clot.md|zombie clots]]. |
^zombie-apocalypses

```statblock
"name": "Swarm Of Zombie Limbs"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "3"
- !!int "8"
- !!int "5"
"speed": "30 ft., climb 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 9"
"languages": ""
"cr": "1"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny limb. The swarm can't regain\
    \ hit points or gain temporary hit points."
  "name": "Swarm"
- "desc": "The swarm doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The swarm makes one Undead Mass attack and one Grasping Limbs attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 0 ft., one target\
    \ in the swarm's space. Hit: dice: 1d6 + 2|avg (1d6 + 2) bludgeoning damage,\
    \ or dice: 1d4 + 2|avg (1d4 + 2) bludgeoning damage if the swarm has half\
    \ of its hit points or fewer."
  "name": "Undead Mass"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 0 ft., one creature\
    \ in the swarm's space. Hit: dice: 2d6|avg (2d6) necrotic damage, and the\
    \ creature must succeed on a DC 12 Strength saving throw or be [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]].\
    \ The creature can repeat the saving throw at the end of each of its turns, taking\
    \ dice: 2d6|avg (2d6) necrotic damage on a failed save. The creature is freed\
    \ if it succeeds on this saving throw, the swarm moves out of the creature's space,\
    \ or the swarm dies."
  "name": "Grasping Limbs"
"source":
- "VRGR"
"image": "5. Mechanics/Bestiary/Undead/token/swarm-of-zombie-limbs-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```