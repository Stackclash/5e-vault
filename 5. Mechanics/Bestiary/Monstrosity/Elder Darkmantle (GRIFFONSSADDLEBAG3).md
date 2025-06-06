---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Huge
tags:
  - compendium/src/5e/griffonssaddlebag3
  - monster/cr/7
  - monster/size/huge
  - monster/type/monstrosity
aliases:
  - Elder Darkmantle
---
# [[5. Mechanics\Bestiary\Monstrosity\Elder Darkmantle (GRIFFONSSADDLEBAG3).md|Elder Darkmantle]]
*Source: The Griffon's Saddlebag, Book 3 p. 0*

Like their smaller relatives, elder darkmantles thrive in darkness. However, elder darkmantles are massive by comparison, and exude an psionic aura from them that controls nearby darkmantles and enhances their natural abilities.

```statblock
"name": "Elder Darkmantle (GRIFFONSSADDLEBAG3)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "psychic defense"
"hp": !!int "93"
"hit_dice": "11d12 + 22"
"modifier": !!int "2"
"stats":
  - !!int "19"
  - !!int "14"
  - !!int "15"
  - !!int "16"
  - !!int "13"
  - !!int "12"
"speed": "20 ft., fly 40 ft."
"saves":
  - "intelligence": "+6"
  - "wisdom": "+4"
  - "charisma": "+4"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]]"
    "desc": "+4"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+5"
"damage_immunities": "cold, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "blindsight 120 ft., passive Perception 14"
"languages": "telepathy 120 ft."
"cr": "7"
"traits":
  - "desc": "The darkmantle's innate spellcasting ability is Intelligence (spell save\
      \ DC 14). It can innately cast the following spells, requiring no components:\n\
      \nAt will: [[5. Mechanics/Spells/Command.md|command]]\n\n1/day: [[5. Mechanics/Spells/Blindness Deafness.md|blindness/deafness]]\
      \ (as a 4th-level spell), [[5. Mechanics/Spells/Fear.md|fear]], [[5. Mechanics/Spells/Hold Person.md|hold person]]"
    "name": "Innate Spellcasting (Psionics)"
  - "desc": "Darkmantles within 120 feet of the elder darkmantle have resistance to\
      \ psychic damage and advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
      \ or [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]].\n\nIn addition,\
      \ when a darkmantle within 120 feet of the elder darkmantle (including itself)\
      \ scores a critical hit, the target must succeed on a DC 14 Wisdom saving throw\
      \ or gain a random form of short-term madness; this effect lasts for d10 minutes."
    "name": "Darkmantle Aura"
  - "desc": "The darkmantle can't use its blindsight while [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]]."
    "name": "Echolocation"
  - "desc": "While the darkmantle remains motionless, it is indistinguishable from\
      \ a Huge cave formation such as a wall, stalactite, or stalagmite."
    "name": "False Appearance"
  - "desc": "The darkmantle's AC includes its Intelligence modifier."
    "name": "Psychic Defense"
"actions":
  - "desc": "The darkmantle makes two crush attacks. It can cast a spell in place\
      \ of one attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 14\
      \ (3d6 + 4) bludgeoning damage plus 10 (3d6) psychic damage, and the darkmantle\
      \ attaches to the target. If the target is Huge or smaller and the darkmantle\
      \ has advantage on the attack roll, it attaches by engulfing the target's head,\
      \ and the target is also [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
      \ and unable to breathe while the darkmantle is attached in this way.\n\nWhile\
      \ attached to the target, the darkmantle can attack no other creature except\
      \ the target but has advantage on its attack rolls. The darkmantle's speed also\
      \ becomes 0, it can't benefit from any bonus to its speed, and it moves with\
      \ the target.\n\nA creature can detach the darkmantle by making a successful\
      \ DC 15 Strength check as an action. On its turn, the darkmantle can detach\
      \ itself from the target by using 5 feet of movement."
    "name": "Crush"
  - "desc": "A 30-foot radius of magical darkness extends out from the darkmantle,\
      \ moves with it, and spreads around corners. The darkness lasts as long as the\
      \ darkmantle maintains [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]],\
      \ up to 10 minutes (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]]\
      \ on a spell). Darkvision can't penetrate this darkness, and no natural light\
      \ can illuminate it. If any of the darkness overlaps with an area of light created\
      \ by a spell of 2nd level or lower, the spell creating the light is dispelled.\
      \ Hostile creatures within the darkness have disadvantage on saving throws against\
      \ the darkmantle's spells."
    "name": "Darkness Aura (2/Day)"
  - "desc": "The elder darkmantle psionically commands nearby darkmantles to swarm\
      \ a target it chooses.\n\nEach darkmantle within 120 feet of the elder darkmantle\
      \ (not including itself) can immediately use its reaction to move up to its\
      \ speed toward the target and make one melee weapon attack against it."
    "name": "Overwhelm (Recharge 5-6)"
"source":
  - "GriffonsSaddlebag3"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
