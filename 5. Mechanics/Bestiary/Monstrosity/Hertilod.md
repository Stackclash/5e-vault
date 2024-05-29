---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/veor
  - monster/cr/17
  - monster/size/huge
  - monster/type/monstrosity
statblock: inline
aliases:
  - Hertilod
---
# [[5. Mechanics/Bestiary/Monstrosity/Hertilod.md|Hertilod]]
*Source: Vecna: Eve of Ruin p. 223*

> [!quote]- A quote from Melthena Vellaine, Wizard and Spelljammer  
> 
> They ain't dragons. They ain't lizards. Oh no, they're much worse."

When a dead god is left adrift in the Astral Sea, its corpse sometimes spawns a parasitic monster known as a hertilod. Voracious and terrifying, a hertilod resembles a skinless, serpentine lizard, with sharp claws and a gaping maw that drips venom. A hertilod's gruesomely exposed muscle renders it susceptible to lightning.

```statblock
"name": "Hertilod"
"size": "Huge"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "241"
"hit_dice": "21d12 + 105"
"stats":
- !!int "23"
- !!int "18"
- !!int "20"
- !!int "3"
- !!int "15"
- !!int "10"
"speed": "50 ft., climb 50 ft."
"saves":
  "Dexterity": !!int "10"
  "Strength": !!int "12"
"skillsaves":
  "Perception": !!int "8"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "blindsight 30 ft., tremorsense 60 ft., passive Perception 18"
"languages": ""
"cr": "17"
"traits":
- "desc": "If the hertilod fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistances (3/Day)"
- "desc": "The hertilod has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "If the hertilod takes lightning damage, its speed is halved until the end\
    \ of its next turn, and it must succeed on a DC 15 Constitution saving throw or\
    \ immediately regurgitate all swallowed creatures, each of which lands in a space\
    \ within 10 feet of the hertilod and has the [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ condition."
  "name": "Shock Susceptibility"
- "desc": "The hertilod can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "The hertilod makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 15\
    \ (2d8 + 6) piercing damage plus 13 (2d12) poison damage. If the target is a Large\
    \ or smaller creature, it must succeed on a DC 20 Strength saving throw or be\
    \ swallowed by the hertilod. A swallowed creature has the [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ and [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]] conditions, and\
    \ it has total cover against attacks and other effects outside the hertilod. At\
    \ the start of each of the hertilod's turns, each swallowed creature takes 13\
    \ (2d12) poison damage from the poisonous secretion in the hertilod's gullet.\n\
    \nThe hertilod's gullet can hold up to two creatures at a time. If the hertilod\
    \ takes 40 damage or more on a single turn from a swallowed creature, the hertilod\
    \ must succeed on a DC 15 Constitution saving throw at the end of that turn or\
    \ regurgitate all swallowed creatures, each of which lands in a space within 10\
    \ feet of the hertilod and has the [[/5. Mechanics/Rules/Conditions.md#prone|prone]]\
    \ condition. If the hertilod dies, a swallowed creature is no longer [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ and can escape from the corpse by using 10 feet of movement, exiting with the\
    \ [[/5. Mechanics/Rules/Conditions.md#prone|prone]] condition."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17 (2d10\
    \ + 6) slashing damage."
  "name": "Claw"
"legendary_actions":
- "desc": "The hertilod moves up to its speed. This movement doesn't provoke opportunity\
    \ attacks."
  "name": "Sprint"
- "desc": "The hertilod drains life from the creatures in its gullet to bolster itself.\
    \ Each creature in the hertilod's gullet takes 10 (3d6) necrotic damage, and the\
    \ hertilod regains a number of hit points equal to the damage."
  "name": "Feed (Costs 2 Actions)"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Monstrosity/token/hertilod-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
