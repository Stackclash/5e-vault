---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 3
environments: forest
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/3
  - monster/environment/forest
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Owlbear
---
# [[5. Mechanics\Bestiary\Monstrosity\Owlbear.md|Owlbear]]
*Source: Monster Manual p. 249. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

An owlbear's screech echoes through dark valleys and benighted forests, piercing the quiet night to announce the death of its prey. Feathers cover the thick, shaggy coat of its bearlike body, and the limpid pupils of its great round eyes stare furiously from its owlish head.

## Deadly Ferocity

The owlbear's reputation for ferocity, aggression, stubbornness, and sheer ill temper makes it one of the most feared predators of the wild. There is little, if anything, that a hungry owlbear fears. Even monsters that outmatch an owlbear in size and strength avoid tangling with it, for this creature cares nothing about a foe's superior strength as it attacks without provocation.

## Consummate Predators

An owlbear emerges from its den around sunset and hunts into the darkest hours of the night, hooting or screeching to declare its territory, to search for a mate, or to flush prey into its hunting grounds. These are typically forests familiar to the owlbear, and dense enough to limit its quarry's escape routes.

An owlbear makes its den in a cave or ruin littered with the bones of its prey. It drags partially devoured kills back to its den, storing portions of the carcass among the surrounding rocks, bushes, and trees. The scent of blood and rotting flesh hangs heavy near an owlbear's lair, attracting scavengers and thus luring more prey.

Owlbears hunt alone or in mated pairs. If quarry is plentiful, a family of owlbears might remain together for longer than is required to rear offspring. Otherwise, they part ways as soon as the young are ready to hunt.

## Savage Companions

Although they are more intelligent than most animals, owlbears are difficult to tame. However, with enough time, food, and luck, an intelligent creature can train an owlbear to recognize it as a master, making it an unflinching guard or a fast and hardy mount. People of remote frontier settlements have even succeeded at racing owlbears, but spectators bet as often on which owlbear will attack its handler as they do on which will reach the finish line first.

Elven communities encourage owlbears to den beneath their treetop villages, using the beasts as a natural defense during the night. Hobgoblins favor owlbears as war beasts, and hill giants and frost giants sometimes keep owlbears as pets. A starved owlbear might show up in a gladiatorial arena, ruthlessly eviscerating and devouring its foes before a bloodthirsty audience.

## Owlbear Origins

Scholars have long debated the origins of the owlbear. The most common theory is that a demented wizard created the first specimen by crossing a giant owl with a bear. However, venerable elves claim to have known these creatures for thousands of years, and some fey insist that owlbears have always existed in the Feywild.

> [!quote] A quote from Xarshel Ravenshadow, Gnome Professor of Transmutative Science at Morgrave University  
> 
> The only good thing about owlbears is that the wizard who created them is probably dead.


```statblock
"name": "Owlbear"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "17"
  - !!int "3"
  - !!int "12"
  - !!int "7"
"speed": "40 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The owlbear has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ checks that rely on sight or smell."
    "name": "Keen Sight and Smell"
"actions":
  - "desc": "The owlbear makes two attacks: one with its beak and one with its claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 10\
      \ (1d10 + 5) piercing damage."
    "name": "Beak"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14\
      \ (2d8 + 5) slashing damage."
    "name": "Claws"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/owlbear.webp"
```
^statblock

## Environment

forest

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
