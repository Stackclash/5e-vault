---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Small
tags:
  - compendium/src/5e/vrgr
  - monster/cr/1
  - monster/size/small
  - monster/type/construct
aliases:
  - Carrionette
---
# [[5. Mechanics\Bestiary\Construct\Carrionette (VRGR).md|Carrionette]]
*Source: Van Richten's Guide to Ravenloft p. 231*

Carrionettes arise from innocent intentions. Heartfelt wishes breathe life into a beloved toy and, for a time, a creator might feel blessed by their new companion. But carrionettes aren't content to live as toys and seek to escape the confines of their diminutive bodies.

Every carrionette possesses a silver needle that pins its soul to its body. By posing as simple toys or hiding their desires, a carrionette gets close to an unsuspecting victim. It then uses its needle to swap souls with the victim, stealing the victim's body while trapping the victim's soul in its own doll-like frame. The carrionette then imprisons its old body, keeping the animate doll hidden while it explores the world in its stolen guise—often that of the very person who wished the carrionette into being.

Carrionettes might appear as any type of toy or piece of art. While marionettes and porcelain dolls are the most common, all manner of deadly stuffed animals, crawling jack-in-the-boxes, bloodthirsty poppets, murderous jewelry box ballerinas, and so forth might be carrionettes. These malicious toys are skilled deceivers and, despite some having existed for generations, often affect unsettlingly childlike personalities. Among the most notorious of these terrors is the carrionette Maligno, Darklord of the domain of Odaire (detailed in chapter 3).

```statblock
"name": "Carrionette (VRGR)"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "12"
  - !!int "8"
  - !!int "14"
  - !!int "14"
"speed": "25 ft."
"damage_resistances": "poison, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "passive Perception 12"
"languages": "understands the languages of its creator"
"cr": "1"
"traits":
  - "desc": "If the carrionette is motionless at the start of combat, it has advantage\
      \ on its initiative roll. Moreover, if a creature hasn't observed the carrionette\
      \ move or act, that creature must succeed on a DC 15 Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
      \ check to discern that the carrionette is animate."
    "name": "False Object"
  - "desc": "The carrionette doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1\
      \ piercing damage plus 3 (d6) necrotic damage, and the target must succeed on\
      \ a DC 12 Charisma saving throw or become cursed for 1 minute. While cursed\
      \ in this way, the target's speed is reduced by 10 feet, and it must roll a\
      \ d4 and subtract the number rolled from each ability check or attack roll it\
      \ makes."
    "name": "Silver Needle"
  - "desc": "The carrionette targets a creature it can see within 15 feet of it that\
      \ is cursed by its Silver Needle. Unless the target is protected by a [[5. Mechanics/Spells/Protection From Evil And Good.md|protection\
      \ from evil and good]] spell,\
      \ it must succeed on a DC 12 Charisma saving throw or have its consciousness\
      \ swapped with the carrionette. The carrionette gains control of the target's\
      \ body, and the target is [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]\
      \ for 1 hour, after which it gains control of the carrionette's body. While\
      \ controlling the target's body, the carrionette retains its Intelligence, Wisdom,\
      \ and Charisma scores. It otherwise uses the controlled body's statistics, but\
      \ doesn't gain access to the target's knowledge, class features, or proficiencies.\n\
      \nIf the carrionette's body is destroyed, both the carrionette and the target\
      \ die. A [[5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]]\
      \ spell cast on the controlled body drives the carrionette out and returns the\
      \ consciousness of both creatures to their original bodies. The swap is also\
      \ undone if the controlled body takes damage from the carrionette's Silver Needle."
    "name": "Soul Swap"
"source":
  - "VRGR"
"image": "5. Mechanics/Bestiary/Construct/token/carrionette-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
