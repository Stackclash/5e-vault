---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/2
- monster/environment/forest
- monster/environment/swamp
- monster/size/small
- monster/type/plant
statblock: inline
aliases: ["Vegepygmy Chief"]
---
# [[5. Mechanics/Bestiary/Plant/Vegepygmy Chief (MPMM).md|Vegepygmy Chief]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 253*  

As a [[5. Mechanics/Bestiary/Plant/Vegepygmy (MPMM).md|vegepygmy]] ages, it grows tougher and develops spore clusters on its body. Other vegepygmies defer to these so-called chiefs. A chief can expel its spores in a burst, infecting nearby creatures. If a creature dies while infected, its corpse produces vegepygmies the same way [[5. Mechanics/Traps Hazards/Russet Mold (VGM).md|russet mold]] does.

## Vegepygmies

Vegepygmies are fungus creatures that live in simple bands, hunting for sustenance and spreading the spores by which they reproduce. Also called mold folk or moldies, vegepygmies inhabit dark, moist areas, so they're most commonly found underground or in forests where little sunlight penetrates. A vegepygmy feels kinship with other plant and fungus creatures, and thus vegepygmy bands coexist well with creatures such as [[5. Mechanics/Bestiary/Plant/Myconid Adult.md|myconid adults]], [[5. Mechanics/Bestiary/Plant/Shrieker.md|shriekers]], and [[5. Mechanics/Bestiary/Plant/Violet Fungus.md|violet fungi]].

Although they prefer to eat fresh meat, bone, and blood, vegepygmies can absorb nutrients from soil and many sorts of organic matter, so they rarely go hungry. A vegepygmy can hiss and make other noises by forcing air through its mouth, but it can't speak in a conventional sense. Among themselves, vegepygmies communicate by hissing, gestures, and tapping. Vegepygmies build and craft little; any gear they have is acquired from other creatures or built by copying simple construction they have witnessed.

```statblock
"name": "Vegepygmy Chief (MPMM)"
"size": "Small"
"type": "plant"
"alignment": "Typically  Neutral"
"ac": !!int "14"
"hp": !!int "33"
"hit_dice": "6d6 + 12"
"stats":
- !!int "14"
- !!int "14"
- !!int "14"
- !!int "7"
- !!int "12"
- !!int "9"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"damage_resistances": "lightning, piercing"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Vegepygmy"
"cr": "2"
"traits":
- "desc": "The vegepygmy has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks it makes in any terrain with ample obscuring vegetation."
  "name": "Plant Camouflage"
- "desc": "The vegepygmy regains 5 hit points at the start of its turn. If it takes\
    \ cold, fire, or necrotic damage, this trait doesn't function at the start of\
    \ the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with\
    \ 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The vegepygmy makes two Claw attacks or two melee Spear attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) slashing damage."
  "name": "Claws"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing\
    \ damage, or dice: 1d8 + 2|avg (1d8 + 2) piercing damage if used with two\
    \ hands to make a melee attack."
  "name": "Spear"
- "desc": "A 15-foot-radius cloud of toxic spores extends out from the vegepygmy.\
    \ The spores spread around corners. Each creature in that area that isn't a Plant\
    \ must succeed on a DC 12 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]].\
    \ While [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way, a target\
    \ takes dice: 2d8|avg (2d8) poison damage at the start of each of its turns.\
    \ A target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Spores (1/Day)"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Plant/token/vegepygmy-chief.png"
```
^statblock

## Environment

forest, swamp

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```