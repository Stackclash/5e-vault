---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mm
- monster/cr/2
- monster/environment/arctic
- monster/environment/coastal
- monster/environment/grassland
- monster/environment/hill
- monster/environment/mountain
- monster/size/large
- monster/type/monstrosity
statblock: inline
aliases: ["Griffon"]
---
# [[5. Mechanics\Bestiary\Monstrosity\Griffon.md|Griffon]]
*Source: Monster Manual p. 174, Eberron: Rising from the Last War. Available in the SRD and the Basic Rules.*  

Griffons are ferocious avian carnivores with the muscular bodies of lions and the head, forelegs, and wings of eagles. When they attack, griffons are as swift and deadly as eagles, even as they strike with a lion's savage might and grace.

## Horse Eaters

Griffons hunt in small prides, flying high over plains and forests near their rocky cliff-side aeries. Herd animals and horses are the prey they crave above all others, though they also hunt and kill hippogriffs. When it spots horses, a griffon screeches to alert its pride mates, which descend quickly toward their prey.

Those riding or herding horses dread the griffon's piercing cry, preparing themselves for the bloody fight that inevitably follows. A griffon ignores a horse's rider when possible, and a rider that abandons its mount, or a herder that releases one or two horses, can escape unharmed while the griffon targets its chosen prey. Riders who attempt to protect their horses attract the full fury of an attacking griffon.

## Sky Dwellers

Griffons lair in high rocky clifftop aeries, building their nests from sticks, leaves, and the bones of their prey. Once griffons establish a territory, they remain in that area until the food supply has been exhausted.

Aggressive and territorial, griffons engage in brutal aerial combat to defend their aeries, tearing and shredding the wings of flying intruders to send them spiraling to the ground. Creatures that climb to a griffon's lair are plucked from the cliffs and eaten, or are knocked from the heights to go tumbling to their deaths.

## Trained Mounts

A griffon raised from an egg can be trained to serve as a mount. However, such training is time consuming, expensive (mostly for the ample food the creature requires), and dangerous. Expert trainers well versed in the griffon's legendary ferocity are typically the only ones able to raise these creatures safely.

Once trained, a griffon is a fierce and loyal steed. It bonds with one master for life, fighting to the death to protect that rider. A griffon mount retains its ravenous appetite for horseflesh, and a wise master ensures that a griffon remains satiated with other prey when passing through civilized lands.

```statblock
"name": "Griffon"
"size": "Large"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "2"
- !!int "13"
- !!int "8"
"speed": "30 ft., fly 80 ft."
"skillsaves":
  "Perception": !!int "5"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "2"
"traits":
- "desc": "The griffon has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- "desc": "The griffon makes two attacks: one with its beak and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 4|avg (2d6 + 4) slashing damage."
  "name": "Claws"
"source":
- "MM"
- "HotDQ"
- "PotA"
- "SKT"
- "WDH"
- "BGDIA"
- "ERLW"
- "EGW"
- "MOT"
- "IDRotF"
- "JttRC"
- "DoDk"
"image": "compendium/bestiary/monstrosity/token/griffon.png"
```
^statblock

## Environment

mountain, grassland, hill, coastal, arctic
