---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/erlw
- monster/cr/1-2
- monster/size/large
- monster/type/fey
statblock: inline
aliases: ["Valenar Steed"]
---
# [[5. Mechanics/Bestiary/Fey/Valenar Steed (ERLW).md|Valenar Steed]]
*Source: Eberron: Rising from the Last War p. 313*  

The elves of Valenar say that when their ancestors fought the giants of Xen'drik, elf druids took the forms of animals on the battlefield. The cruel and mighty Emperor Cul'sir of the giants laid a curse upon the druids and trapped them in the forms of animals. Just as the ancestors of the Valenar guide their warriors in battle, the spirits of these druids can awaken power in an animal to create a companion worthy of a champion.

Valenar animals are awakened to advanced intelligence and power by the touch of an ancestral spirit. Traditionally, Valenar animals choose Valenar elves as companions, reflecting a bond between the ancestors of elf and animal. To be chosen by a Valenar animal is a great honor, and any such elf is treated with respect and reverence. Still, on the rare occasions when a Valenar animal chooses an adventurer of a different ancestry as a companion, it is universally accepted.

The Valenar animals presented here—hawk, hound, and steed—are but examples, for the ancestral spirits can take on many animal forms.

## Variant: Ancestral Traits

Each Valenar animal can be customized with an ancestral gift, a supernatural trait granted by its ancestral spirit. Choose a trait or roll on the Ancestral Traits table for each Valenar animal.

**Ancestral Traits**

| dice: d8 | Trait |
|----------|-------|
| 1 | Bestow Luck (1/Day). As a bonus action, the animal chooses one creature it can see within 30 feet of it. The next ability check, attack roll, or saving throw the target makes in the next hour has advantage. |
| 2 | Burst of Speed (Recharge 6). The animal can take the [[/5. Mechanics/Rules/Actions.md#Dash|Dash]] action as a bonus action. |
| 3 | Camouflage. The animal has advantage on Dexterity ([[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]) checks it makes while outdoors. |
| 4 | Lie Detector. The animal knows when a creature within 15 feet of it tells a lie. |
| 5 | Fey Ancestry. The animal has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]] or [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], and magic can't put it to sleep. |
| 6 | Fey Step (1/Day). The animal, along with anything it is wearing or carrying, teleports up to 30 feet to an unoccupied space it can see. |
| 7 | Quickness (Recharge 6). The animal can take the [[/5. Mechanics/Rules/Actions.md#Dodge|Dodge]] action as a bonus action. |
| 8 | Shrouded Step. The animal can't be tracked except by magical means, and it leaves behind no tracks or other traces of its passage. |
^ancestral-traits

```statblock
"name": "Valenar Steed (ERLW)"
"size": "Large"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "3d10 + 6"
"stats":
- !!int "14"
- !!int "16"
- !!int "14"
- !!int "10"
- !!int "15"
- !!int "11"
"speed": "60 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "understands Common, Elvish, and Sylvan but can't speak"
"cr": "1/2"
"traits":
- "desc": "The steed can magically bond with one creature it can see, immediately\
    \ after spending at least 1 hour observing that creature while within 30 feet\
    \ of it. The bond lasts until the steed bonds with a different creature or until\
    \ the bonded creature dies. While bonded, the steed and the bonded creature can\
    \ communicate telepathically with each other at a distance of up to 100 feet."
  "name": "Bonding"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) bludgeoning damage."
  "name": "Hooves"
"source":
- "ERLW"
"image": "5. Mechanics/Bestiary/Fey/token/valenar-steed.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```