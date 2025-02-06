---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1\4
environments: null
size: Medium
tags:
  - 5. Mechanics\Src\5e\(COS)
  - monster\Cr\1 4
  - monster\Size\Medium
  - monster\Type\Humanoid\Mongrelfo(LK)
aliases:
  - Mongrelfolk
---
# [[5. Mechanics\Bestiary\Humanoid\Mongrelfolk (COS).md|Mongrelfolk]]
*Source: Curse of Strahd p. 234*

Mongrelfolk are humanoids that have undergone, or whose ancestors underwent, horrific magical transformations, to the extent that they retain only a fraction of their original being. Their humanoid bodies incorporate the features of various beasts. For example, one mongrelfolk might have the basic body shape of a dwarf with a head that combines the features of a cat and a lizard, one arm that ends in a crab's pincer, and one leg that ends in a cloven hoof. Another might have the skin and horns of a cow, the eyes of a spider, frog's legs, and a scaly lizard's tail. Each mongrelfolk's mad combination of humanoid and animal forms results in its having a slow, awkward gait.

## Sound Mimicry

Mongrelfolk have misshapen mouths and vocal cords. They speak fragmented Common mixed with various animal cries and nonsense. They can effectively imitate sounds made by beasts and humanoids that they've heard. Mongrelfolk aren't sophisticated enough to use these sounds as a covert form of communication, but they can use the sounds to lure enemies into a trap or otherwise distract them.

## Outcasts

Mongrelfolk are seldom welcome in other humanoid societies, where they are abused, enslaved, or shunned. They typically live on the fringes of civilization in ruins, deserted buildings, or other places that other humanoid races once lived in or built. They tend to be timid and skittish outside their homes and fiercely territorial within their lairs.

## Camouflage Experts

Mongrelfolk often hide their deformities under cloaks and cowls. In this way, they can sometimes pass as stout humans or thin dwarves. They are fond of camouflage, attaching leaves and twigs to their cloaks, making brown paint to cover their skin, and weaving grass nets under which they can hide. They use such camouflage while hunting in the wild or while standing guard outside their lairs. Until it is seen, a camouflaged mongrelfolk has advantage on [[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]] checks made to hide.

## Horrific Offspring

It's possible to restore a mongrel-folk to its original form using a [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]] spell, but the same can't be said for a mongrelfolk's offspring. Only mongrelfolk that are made by magic can be restored to their original forms. Mongrelfolk that are born are true mongrelfolk and not the subjects of a spell or an effect that can be undone.

Mongrelfolk can breed with other humanoids, but nearly all children born to such parents are mongrelfolk. (About one child in every hundred is born looking like its non-mongrelfolk parent.)

```statblock
"name": "Mongrelfolk (COS)"
"size": "Medium"
"type": "humanoid"
"subtype": "mongrelfolk"
"alignment": "Any alignment"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"stats":
- !!int "12"
- !!int "9"
- !!int "15"
- !!int "9"
- !!int "10"
- !!int "6"
"speed": "20 ft."
"skillsaves":
  "Deception": !!int "2"
  "Stealth": !!int "3"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "1/4"
"traits":
- "desc": "The mongrelfolk has one of the following extraordinary features, determined\
    \ randomly by rolling a d20 or chosen by the DM:\n\n1–3: Amphibious. The mongrelfolk\
    \ can breathe air and water.\n\n4–9: Darkvision. The mongrelfolk has darkvision\
    \ out to a range of 60 feet.\n\n10: Flight. The mongrelfolk has leathery wings\
    \ and a flying speed of 40 feet.\n\n11–15: Keen Hearing and Smell. The mongrelfolk\
    \ has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks that rely on hearing or smell.\n\n16–17: Spider Climb. The mongrelfolk\
    \ can climb difficult surfaces, including upside down on ceilings, without needing\
    \ to make an ability check.\n\n18–19: Standing Leap. The mongrelfolk's long jump\
    \ is up to 20 feet and its high jump up to 10 feet, with or without a running\
    \ start.\n\n20: Two-Headed. The mongrelfolk has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks and on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]],\
    \ or knocked [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]."
  "name": "Extraordinary Feature"
- "desc": "The mongrelfolk can mimic any sounds it has heard, including voices. A\
    \ creature that hears the sounds can tell they are imitations with a successful\
    \ DC 12 Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]]) check."
  "name": "Mimicry"
"actions":
- "desc": "The mongrelfolk makes two attacks: one with its bite and one with its claw\
    \ or dagger."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4\
    \ + 1) slashing damage."
  "name": "Claw"
- "desc": "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 3 (1d4 + 1) piercing damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/mongrelfolk-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
