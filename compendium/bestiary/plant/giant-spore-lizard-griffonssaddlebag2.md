---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: 
size: Medium
tags:
- compendium/src/5e/griffonssaddlebag2
- monster/cr/1
- monster/size/medium
- monster/type/plant
aliases: ["Giant Spore Lizard"]
---
# [Giant Spore Lizard](compendium\bestiary\plant/giant-spore-lizard-griffonssaddlebag2.md)
*Source: The Griffon's Saddlebag, Book 2*

Another major consequence of Antronec's sewer network was that it provided a wonderfully damp environment for the giant spore lizards to move in and claim. A strange creature, it possesses the ability to magically transport itself between instances of flora and biota, for instance from a mushroom to a bush. They also possess hazardous spores, which they utilize as a defensive system against attackers. With these elements and a ferocious dedication to protecting its perceived territory, to underestimate a giant spore lizard is to court death.

```statblock
"name": "Giant Spore Lizard (GriffonsSaddlebag2)"
"size": "Medium"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "3"
- !!int "14"
- !!int "5"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Survival": !!int "4"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 30 ft., passive Perception 12"
"languages": ""
"cr": "1"
"traits":
- "desc": "Once on each of its turns, the lizard can use 10 feet of its movement to\
    \ step magically into any living flora (such as a plant, mold, or fungus) within\
    \ 5 feet of it and emerge from a second living flora within 60 feet of it, appearing\
    \ in an unoccupied space within 5 feet of the second flora. Both florae must be\
    \ Medium or larger. If the lizard takes fire damage, this trait doesn't function\
    \ until the end of its next turn."
  "name": "Flora Flit"
- "desc": "Moving through nonmagical difficult terrain costs the lizard no extra movement.\
    \ It can also pass through nonmagical plants without being slowed by them and\
    \ without taking damage from them if they have thorns, spines, or a similar hazard."
  "name": "Nature Stride"
- "desc": "The lizard has advantage on Dexterity ([Stealth](/compendium/rules/skills.md#Stealth))\
    \ checks made to hide in flora."
  "name": "Organic Camouflage"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
    \ + 3) piercing damage."
  "name": "Bite"
"reactions":
- "desc": "When the lizard takes bludgeoning, piercing, or slashing damage, it ejects\
    \ a flurry of poisonous spores around itself. Each creature within 5 feet of the\
    \ lizard must make a DC 12 Constitution saving throw, taking 5 (2d4) poison damage\
    \ on a failed save, or half as much damage on a successful one. If the saving\
    \ throw fails by 5 or more, the target is also [poisoned](/compendium/rules/conditions.md#Poisoned)\
    \ until the end of its next turn."
  "name": "Retaliatory Spores"
"source":
- "GriffonsSaddlebag2"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```