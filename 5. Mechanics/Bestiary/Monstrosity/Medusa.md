---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: desert
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/6
  - monster/environment/desert
  - monster/size/medium
  - monster/type/monstrosity
aliases:
  - Medusa
---
# [[5. Mechanics\Bestiary\Monstrosity\Medusa.md|Medusa]]
*Source: Monster Manual p. 214. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

As deadly as they are ravishing, the serpent-haired medusas suffer an immortal curse brought on by their vanity. They lurk in quiet exile among the tumbled ruins of their former lives, surrounded by the petrified remains of past admirers and would-be heroes.

## Immortal Splendor

Men and women who desire eternal youth, beauty, and adoration might pray to malicious gods, beg dragons for ancient magic, or seek out powerful archmages to fulfill their wishes. Others make sacrifices to demon lords or archdevils, offering all in exchange for this gift, oblivious to the curse that accompanies it. Those who strike such bargains gain physical beauty, restored youth, immortality, and the adoration of all who behold them, granting them the influence and power they so desire. However, after years of the living like a demigod among mortals, the price for their vanity and hubris is exacted, and they are forever transformed into medusas. A medusa's hair turns into a nest of venomous serpents, and all who gaze upon the medusa are [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], becoming stone monuments to its corruption.

## Medusa Lairs

Medusas live forever in seclusion, alienated from the world around them by their monstrous form and caprice. Their homes gradually fall into disrepair until they are little more than shadowy ruins covered with thorns and creepers, riddled with obstructions and hiding places. Foolhardy looters and adventurers who enter are often unaware of the medusa's presence until the creature is among them.

A medusa is subject to its own curse. By looking vainly on its reflection, it turns to stone as surely as any living mortal. As a result, a medusa destroys or removes any mirrors or reflective surfaces in its lair.

```statblock
"name": "Medusa"
"size": "Medium"
"type": "monstrosity"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "16"
  - !!int "12"
  - !!int "13"
  - !!int "15"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Deception|Deception]]"
    "desc": "+5"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Insight|Insight]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common"
"cr": "6"
"traits":
  - "desc": "When a creature that can see the medusa's eyes starts its turn within\
      \ 30 feet of the medusa, the medusa can force it to make a DC 14 Constitution\
      \ saving throw if the medusa isn't [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]\
      \ and can see the creature. If the saving throw fails by 5 or more, the creature\
      \ is instantly [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]]. Otherwise,\
      \ a creature that fails the save begins to turn to stone and is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]].\
      \ The [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]] creature must\
      \ repeat the saving throw at the end of its next turn, becoming [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]]\
      \ on a failure or ending the effect on a success. The petrification lasts until\
      \ the creature is freed by the  [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
      \ spell or other magic.\n\nUnless [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]],\
      \ a creature can avert its eyes to avoid the saving throw at the start of its\
      \ turn. If the creature does so, it can't see the medusa until the start of\
      \ its next turn, when it can avert its eyes again. If the creature looks at\
      \ the medusa in the meantime, it must immediately make the save.\n\nIf the medusa\
      \ sees itself reflected on a polished surface within 30 feet of it and in an\
      \ area of bright light, the medusa is, due to its curse, affected by its own\
      \ gaze."
    "name": "Petrifying Gaze"
"actions":
  - "desc": "The medusa makes either three melee attacks—one with its snake hair and\
      \ two with its shortsword—or two ranged attacks with its longbow."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 4\
      \ (1d4 + 2) piercing damage plus 14 (4d6) poison damage."
    "name": "Snake Hair"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) piercing damage."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit:\
      \ 6 (1d8 + 2) piercing damage plus 7 (2d6) poison damage."
    "name": "Longbow"
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/medusa.webp"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
