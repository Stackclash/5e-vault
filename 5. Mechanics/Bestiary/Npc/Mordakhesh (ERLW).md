---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/erlw
- monster/cr/15
- monster/size/medium
- monster/type/fiend
statblock: inline
aliases: ["Mordakhesh"]
---
# [Mordakhesh](compendium\bestiary\npc/mordakhesh-erlw.md)
*Source: Eberron: Rising from the Last War p. 301*  

In the age when fiends and dragons waged war across Eberron, rakshasas served the fiendish lords as strategists and generals. A rakshasa named Mordakhesh rose up through the ranks to become one of the greatest commanders of his age, and a dragon-slaying specialist. For this, he earned the nickname Shadowsword, along with a legendary reputation for leaving death in his wake.

Mordakhesh serves as the prakhutu or "speaker" of his imprisoned master, Rak Tulkhesh, and he seeks to free his lord by bathing the world in blood. Like a spider with multiple webs, he has agents and pawns (which he calls his "claws") established in armies across Khorvaire. The most significant of those is the barbarian horde he amasses in the Demon Wastes—warriors who threaten to sweep into Aundair on a tide of blood.

Many of the horrors of the Last War were instigated—or at least encouraged—by Mordakhesh's operatives, and his claws are known to have perpetrated some of the most brutal massacres of that conflict. No one knows how far the Shadowsword's reach extends, or which commanders in the armies of Khorvaire serve him.

```statblock
"name": "Mordakhesh (ERLW)"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "18"
"hp": !!int "170"
"hit_dice": "20d8 + 80"
"stats":
- !!int "20"
- !!int "16"
- !!int "18"
- !!int "15"
- !!int "17"
- !!int "20"
"speed": "40 ft."
"saves":
  "Charisma": !!int "10"
  "Wisdom": !!int "8"
  "Strength": !!int "10"
  "Constitution": !!int "9"
"skillsaves":
  "Athletics": !!int "10"
  "Insight": !!int "8"
  "Perception": !!int "8"
  "Persuasion": !!int "10"
"damage_vulnerabilities": "piercing from magic weapons wielded by good creatures"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "darkvision 60 ft., passive Perception 18"
"languages": "Common, Infernal"
"cr": "15"
"traits":
- "desc": "Mordakhesh's spellcasting ability is Charisma (spell save DC 18, dice:\
    \ d20+10 (+10 to hit) with spell attacks). Mordakhesh can innately cast the following\
    \ spells, requiring no material components:\n\nAt will: [[5. Mechanics/Spells/Chromatic Orb.md|chromatic orb]]\
    \ (see \"Actions\" below), [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]],\
    \ [[5. Mechanics/Spells/Disguise Self.md|disguise self]]\n\n1/day each: [banishing\
    \ smite](compendium/spells/banishing-smite.md), [[5. Mechanics/Spells/Destructive Wave.md|destructive wave]],\
    \ [[5. Mechanics/Spells/Fly.md|fly]], [[5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]],\
    \ [[5. Mechanics/Spells/Staggering Smite.md|staggering smite]], [[5. Mechanics/Spells/Suggestion.md|suggestion]],\
    \ [[5. Mechanics/Spells/True Seeing.md|true seeing]]"
  "name": "innate"
- "desc": "Mordakhesh can't be affected or detected by spells of 6th level or lower\
    \ unless he wishes to be. Mordakhesh has advantage on saving throws against all\
    \ other spells and magical effects."
  "name": "Limited Magic Immunity"
"actions":
- "desc": "Mordakhesh makes three greatsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 5|avg (2d6 + 5) slashing damage plus dice: 1d10|avg\
    \ (1d10) force damage."
  "name": "Greatsword"
- "desc": "Ranged Spell Attack: dice: d20+10 (+10 to hit), range 120 ft., one\
    \ creature. Hit: dice: 3d8|avg (3d8) damage of a type chosen by Mordakhesh:\
    \ acid, cold, fire, lightning, poison, or thunder."
  "name": "Chromatic Orb"
"legendary_actions":
- "desc": "Mordakhesh makes one weapon attack or casts [[5. Mechanics/Spells/Chromatic Orb.md|chromatic orb]]."
  "name": "Attack"
- "desc": "Modakhesh gains resistance to one damage type of his choice—acid, cold,\
    \ fire, lightning, poison, or thunder—until the start of his next turn."
  "name": "Chromatic Resistance"
- "desc": "Mordakhesh targets up to two allies that he can see within 30 feet of him.\
    \ If a target can see and hear him, the target can make one weapon attack as a\
    \ reaction and gains advantage on the attack roll."
  "name": "Warlord's Command (Costs 2 Actions)"
"source":
- "ERLW"
"image": "5. Mechanics/Bestiary/Npc/token/mordakhesh.png"
```
^statblock