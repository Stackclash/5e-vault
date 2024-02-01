---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/cr/4
- monster/size/medium
- monster/type/undead
statblock: inline
aliases: ["Zombie Plague Spreader"]
---
# [[5. Mechanics\Bestiary\Undead\Zombie Plague Spreader (VRGR).md|Zombie Plague Spreader]]
*Source: Van Richten's Guide to Ravenloft p. 255*  

Among the undead, a lone zombie ranks far from the most menacing. The horror of the shambling dead lies not in their individual menace, though, but their numbers, their persistence, and their disregard for their own well-being. A throng of zombies will douse a forest fire with their own ashes or march into a dragon's maw until the monster chokes. In the course of their relentless marches, zombies might suffer all manner of trauma, potentially reducing them to masses of crawling limbs (see swarm of zombie limbs), infecting them with terrible diseases, or crushing an entire horde into a single, rotting titan (see zombie clot).

## Zombie Apocalypses

Among the types of horror adventures detailed in "chapter 2", tales of uncontrolled zombie outbreaks orbit the "dark fantasy" and "disaster horror" genres. The horror of these adventures focuses not on the terror of a single zombie, but of countless individual threats overwhelming society. When creating your own undead calamities, consider the plots presented on the Zombie Apocalypses table.

**Zombie Apocalypses**

| dice: d4 | Zombie Plot |
|----------|-------------|
| 1 | A twisted wish causes those affected by healing magic and [[5. Mechanics/Items/Potion Of Healing.md|potions of healing]] to rise as zombies. |
| 2 | Overwhelming magic reanimates zombies again and again as [[5. Mechanics/Bestiary/Undead/Swarm Of Zombie Limbs (VRGR).md|swarms of zombie limbs]]. |
| 3 | The githyanki unleash [[5. Mechanics/Bestiary/Undead/Zombie Plague Spreader (VRGR).md|zombie plague spreaders]] to scour mind flayers from a world. |
| 4 | The seals containing an underground zombie horde fail, releasing ancient [[5. Mechanics/Bestiary/Undead/Zombie Clot (VRGR).md|zombie clots]]. |
^zombie-apocalypses

```statblock
"name": "Zombie Plague Spreader (VRGR)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "16"
- !!int "10"
- !!int "15"
- !!int "3"
- !!int "5"
- !!int "5"
"speed": "30 ft."
"damage_resistances": "necrotic"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 7"
"languages": "understands the languages it knew in life but can't speak"
"cr": "4"
"traits":
- "desc": "If damage reduces the zombie to 0 hit points, it must make a Constitution\
    \ saving throw with a DC of 5 + the damage taken, unless the damage is radiant\
    \ or from a critical hit. On a success, the zombie drops to 1 hit point instead."
  "name": "Undead Fortitude"
- "desc": "The zombie doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
- "desc": "Any creature that starts its turn within 10 feet of the plague spreader\
    \ must make a DC 12 Constitution saving throw. On a failed save, the creature\
    \ is [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] and can't regain hit\
    \ points until the end of its next turn. On a successful save, the creature is\
    \ immune to this plague spreader's Viral Aura for 24 hours."
  "name": "Viral Aura"
"actions":
- "desc": "The plague spreader makes two Slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) bludgeoning damage plus dice: 2d8|avg\
    \ (2d8) necrotic damage."
  "name": "Slam"
- "desc": "The plague spreader releases toxic gas in a 30-foot-radius sphere centered\
    \ on itself. Each creature in that area must make a DC 12 Constitution saving\
    \ throw, taking dice: 4d6|avg (4d6) poison damage on a failed save, or half\
    \ as much damage on a successful one. A Humanoid reduced to 0 hit points by this\
    \ damage dies and rises as a zombie (see its stat block in the Monster Manual)\
    \ 1 minute later. The zombie acts immediately after the plague spreader in the\
    \ initiative count."
  "name": "Virulent Miasma (1/Day)"
"source":
- "VRGR"
"image": "5. Mechanics/Bestiary/Undead/token/zombie-plague-spreader.png"
```
^statblock