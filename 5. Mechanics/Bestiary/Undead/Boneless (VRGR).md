---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 1
environments: null
size: Medium
tags:
  - compendium/src/5e/vrgr
  - monster/cr/1
  - monster/size/medium
  - monster/type/undead
aliases:
  - Boneless
---
# [[5. Mechanics\Bestiary\Undead\Boneless (VRGR).md|Boneless]]
*Source: Van Richten's Guide to Ravenloft p. 228*

Not all animate corpses shamble from their graves. Boneless are undead remains devoid of skeletons. Most rise from the bodies of those who've suffered brutal ends, such as deliberate skinning or crushing. Deathless malice infuses what remains, their husks flopping and slithering in pursuit of vengeance or at the whims of sinister masters. Slipping through cracks and under doors, these stealthy undead seek to adorn living frames once more, wrapping themselves around their victims and wringing them to death in their full-body grip.

Boneless arise in a variety of forms. While the animate skins of specific creatures are the most common, foul spellcasters might create these horrors from the scraps of failed experiments, necromantic slurries, heaps of discarded hair, abattoirs, and charnel concoctions. These origins don't affect a boneless's statistics but lend it distinct forms.

Whether through accident or depraved genius, some villains use one corpse to create two separate undead. Boneless might adorn the frames of other undead, like skeletons or zombies. The sight of a boneless peeling itself from its independently undead frame haunts the nightmares of many seasoned monster hunters.

```statblock
"name": "Boneless (VRGR)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "26"
"hit_dice": "4d8 + 8"
"modifier": !!int "2"
"stats":
  - !!int "16"
  - !!int "14"
  - !!int "15"
  - !!int "1"
  - !!int "10"
  - !!int "1"
"speed": "30 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Stealth|Stealth]]"
    "desc": "+4"
"damage_resistances": "bludgeoning, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages it knew in life but can't speak"
"cr": "1"
"traits":
  - "desc": "The boneless can move through any opening at least 1 inch wide without\
      \ squeezing. It can also squeeze to fit into a space that a Tiny creature could\
      \ fit in."
    "name": "Compression"
  - "desc": "The boneless doesn't require sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "The boneless makes two Slam attacks. If both attacks hit a Large or smaller\
      \ creature, the creature is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 13), and the boneless can use Crushing Embrace."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
      \ + 3) bludgeoning damage."
    "name": "Slam"
  - "desc": "The boneless wraps its body around a Large or smaller creature [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ by it. While the boneless is attached, the target is [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]]\
      \ and is unable to breathe. The target must succeed on a DC 13 Strength saving\
      \ throw at the start of each of the boneless' turns or take 5 (1d4 + 3) bludgeoning\
      \ damage. If something moves the target, the boneless moves with it. The boneless\
      \ can detach itself by spending 5 feet of its movement. A creature, including\
      \ the target, can use its action to try to detach the boneless and force it\
      \ to move into the nearest unoccupied space, doing so with a successful DC 13\
      \ Strength check. When the boneless dies, it detaches from any creature it is\
      \ attached to."
    "name": "Crushing Embrace"
"source":
  - "VRGR"
"image": "5. Mechanics/Bestiary/Undead/token/boneless-vrgr.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
