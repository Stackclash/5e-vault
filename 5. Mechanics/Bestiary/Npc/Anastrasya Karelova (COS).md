---
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/undead
aliases: ["Anastrasya Karelova"]
---
# Anastrasya Karelova
*Source: Curse of Strahd p. 93, Derived from *  

```statblock
"name": "Anastrasya Karelova"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "10"
- !!int "12"
"speed": "30 ft."
"saves":
  "Dexterity": "+6"
  "Wisdom": "+3"
"skillsaves":
  "Stealth": "+6"
  "Perception": "+3"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "the languages it knew in life"
"cr": "5"
"traits":
- "desc": "Anastrasya regains 10 hit points at the start of its turn if it has at\
    \ least 1 hit point and isn't in sunlight or running water. If Anastrasya takes\
    \ radiant damage or damage from holy water, this trait doesn't function at the\
    \ start of Anastrasya's next turn."
  "name": "Regeneration"
- "desc": "Anastrasya can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "Anastrasya has the following flaws:\n\nForbiddance. Anastrasya can't\
    \ enter a residence without an invitation from one of the occupants.\n\nHarmed\
    \ by Running Water. Anastrasya takes 20 acid damage when it ends its turn in\
    \ running water.\n\nStake to the Heart. Anastrasya is destroyed if a piercing\
    \ weapon made of wood is driven into its heart while it is [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ in its resting place.\n\nSunlight Hypersensitivity. Anastrasya takes 20 radiant\
    \ damage when it starts its turn in sunlight. While in sunlight, it has disadvantage\
    \ on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- "desc": "Anastrasya makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one willing\
    \ creature, or a creature that is [[/5. Mechanics/Rules/Conditions.md#grappled|grappled]]\
    \ by Anastrasya, [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]],\
    \ or [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]. Hit: dice: 1d6\
    \ + 3|avg (1d6 + 3) piercing damage plus dice: 2d6|avg (2d6) necrotic damage.\
    \ The target's hit point maximum is reduced by an amount equal to the necrotic\
    \ damage taken, and Anastrasya regains hit points equal to that amount. The reduction\
    \ lasts until the target finishes a long rest. The target dies if this effect\
    \ reduces its hit point maximum to 0."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 2d4 + 3|avg (2d4 + 3) slashing damage. Instead of dealing damage,\
    \ Anastrasya can grapple the target (escape DC 13)."
  "name": "Claws"
"source":
- "CoS"
"image": "compendium/bestiary/npc/token/anastrasya-karelova.png"
```
^statblock