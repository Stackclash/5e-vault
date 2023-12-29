---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/1-4
- monster/environment/forest
- monster/environment/swamp
- monster/size/small
- monster/type/plant
statblock: inline
aliases: ["Vegepygmy"]
---
# [[5. Mechanics\Bestiary\Plant\Vegepygmy (MPMM).md|Vegepygmy]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 252*  

Typical vegepygmies originate from the remains left behind when a Humanoid or a Giant is killed by [[5. Mechanics/Traps Hazards/Russet Mold (VGM).md|russet mold]]. One or more vegepygmies emerge from the corpse a day later.

## Vegepygmies

Vegepygmies are fungus creatures that live in simple bands, hunting for sustenance and spreading the spores by which they reproduce. Also called mold folk or moldies, vegepygmies inhabit dark, moist areas, so they're most commonly found underground or in forests where little sunlight penetrates. A vegepygmy feels kinship with other plant and fungus creatures, and thus vegepygmy bands coexist well with creatures such as [[5. Mechanics/Bestiary/Plant/Myconid Adult.md|myconid adults]], [[5. Mechanics/Bestiary/Plant/Shrieker.md|shriekers]], and [[5. Mechanics/Bestiary/Plant/Violet Fungus.md|violet fungi]].

Although they prefer to eat fresh meat, bone, and blood, vegepygmies can absorb nutrients from soil and many sorts of organic matter, so they rarely go hungry. A vegepygmy can hiss and make other noises by forcing air through its mouth, but it can't speak in a conventional sense. Among themselves, vegepygmies communicate by hissing, gestures, and tapping. Vegepygmies build and craft little; any gear they have is acquired from other creatures or built by copying simple construction they have witnessed.

```statblock
"name": "Vegepygmy (MPMM)"
"size": "Small"
"type": "plant"
"alignment": "Typically  Neutral"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "7"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "11"
- !!int "7"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "lightning, piercing"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Vegepygmy"
"cr": "1/4"
"traits":
- "desc": "The vegepygmy has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]])\
    \ checks it makes in any terrain with ample obscuring vegetation."
  "name": "Plant Camouflage"
- "desc": "The vegepygmy regains 3 hit points at the start of its turn. If it takes\
    \ cold, fire, or necrotic damage, this trait doesn't function at the start of\
    \ the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with\
    \ 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) slashing damage."
  "name": "Claws"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d4 + 2|avg (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Plant/token/vegepygmy.png"
```
^statblock

## Environment

forest, swamp