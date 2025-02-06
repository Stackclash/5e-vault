---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: null
size: Large
tags:
  - 5. Mechanics\Src\5e\(VEOR)
  - monster\Cr\11
  - monster\Size\Large
  - monster\Type\Fiend\Demon
aliases:
  - Vlazok
---
# [[5. Mechanics\Bestiary\Fiend\Vlazok (VEOR).md|Vlazok]]
*Source: Vecna: Eve of Ruin p. 238*

Skeletal, quadrupedal horrors, vlazoks are particularly suited to battlefield cleanup in the Outer Planes. They love to stomp across battlefields after the fiercest fighting is over, trampling survivors and crushing pockets of resistance. When vlazoks anticipate an influx of enemies, these demons jump on them from above to crush them.

Vlazoks have keen senses, owing to the eyes positioned all around their hideous heads. They easily lose interest in their tasks unless powerful commanders, such as demon lords, keep them in line. Without careful direction, vlazoks become unhinged agents of chaos, smashing through crowds of weaker demons and decimating their ranks with powerful attacks.

```statblock
"name": "Vlazok (VEOR)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "typically  Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "21"
- !!int "18"
- !!int "16"
- !!int "6"
- !!int "9"
- !!int "9"
"speed": "30 ft., climb 30 ft."
"saves":
  "Strength": !!int "9"
  "Constitution": !!int "7"
"skillsaves":
  "Perception": !!int "3"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Abyssal, telepathy 120 ft."
"cr": "11"
"traits":
- "desc": "The vlazok can't be surprised."
  "name": "All-Around Vision"
- "desc": "The vlazok has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- "desc": "The vlazok has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "The vlazok can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "The vlazok makes two Gore attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 23 (4d8\
    \ + 5) piercing damage, and if the target is a Large or smaller creature, it has\
    \ the [[/5. Mechanics/Rules/Conditions.md#Prone|prone]] condition."
  "name": "Gore"
"bonus_actions":
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]\
    \ creature. Hit: 27 (4d10 + 5) bludgeoning damage."
  "name": "Stomp"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Fiend/token/vlazok-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
