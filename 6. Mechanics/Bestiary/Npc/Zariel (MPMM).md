---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/large
- monster/type/fiend/devil
statblock: inline
---
# Zariel
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 280, Mordenkainen's Tome of Foes p. 180*  

> [!quote]- A quote from Mordenkainen  
> 
> That which falls from grace may yet rise to regain it. If Zariel were to return to her celestial self, how glorious would be the tales!

Once a mighty angel charged with watching the tides of the Blood War, Zariel succumbed to the corrupting influence of the Nine Hells and fell from grace. Asmodeus admired Zariel's passion for war and offered her rulership of Avernus. She accepted his offer, and he transformed her into an archdevil.

Zariel's rise in status came at the expense of Bel, her pit fiend predecessor. Zariel and Bel hate each other. To keep Bel busy and out of her sight, Zariel tasks him with forging weapons, armor, and grue some demon-slaying machines.

To replenish her legions, Zariel needs the souls of mortals to create lemures, which she can then promote to higher forms of devils. She is keenly interested in collecting souls from the greatest warriors on the Material Plane. She bargains hard, and there is little hope of wriggling out of a pact. However, she expects the best from her servants, so she allows her mortal followers to live out their lives provided they continue to hone their talents to increase their value. As a result, Zariel's servants are universally effective, disciplined, and dangerous.

## Cultists of Zariel

> [!note]
> See the Cult of Zariel entry.

## Zariel's Lair

Zariel makes her lair in a basalt citadel that rises up in Avernus. From nearly a mile away, one can hear the screams and moans coming from the burned victims chained to the stronghold's wall, the dying remains of those who failed to impress the archdevil. The stronghold, covering five square miles, is surrounded by walls reinforced with high turrets. Devils of all kinds crawl over the structure, ensuring that no intruders breach their defenses.

## Stat Block

```statblock
"name": "Zariel"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "420"
"hit_dice": "29d10 + 261"
"stats":
- !!int "27"
- !!int "24"
- !!int "28"
- !!int "26"
- !!int "27"
- !!int "30"
"speed": "walk 50 ft., fly 150 ft."
"saves":
  "Charisma": !!int "18"
  "Wisdom": !!int "16"
  "Intelligence": !!int "16"
"skillsaves":
  "Intimidation": !!int "18"
  "Perception": !!int "16"
"damage_resistances": "cold; fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "charmed, exhaustion, frightened, poisoned"
"senses": "darkvision 120 ft., passive Perception 26"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zariel casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 26):\n\nAt will:\
    \ [[/6. Mechanics/Spells/Alter Self.md|alter self]] (can become Medium when changing\
    \ her appearance), [[/6. Mechanics/Spells/Detect Evil And Good.md|detect evil and good]],\
    \ [[/6. Mechanics/Spells/Fireball.md|fireball]], [[/6. Mechanics/Spells/Invisibility.md|invisibility]]\
    \ (self only), [[/6. Mechanics/Spells/Major Image.md|major image]], [[/6. Mechanics/Spells/Wall Of Fire.md|wall of fire]]\n\
    \n3/day each: [[/6. Mechanics/Spells/Blade Barrier.md|blade barrier]], [dispel\
    \ evil and good](/compendium/spells/dispel-evil-and-good.md), [[/6. Mechanics/Spells/Finger Of Death.md|finger of death]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Magical darkness doesn't impede Zariel's [[6. Mechanics/Rules/Senses.md#darkvision|darkvision]]."
  "name": "Devil's Sight"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If Zariel fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zariel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zariel regains 20 hit points at the start of her turn. If she takes radiant\
    \ damage, this trait doesn't function at the start of her next turn. Zariel dies\
    \ only if she starts her turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zariel makes three Flail or Longsword attacks. She can replace one attack\
    \ with a use of Horrid Touch, if available."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d8 + 8|avg (2d8 + 8) force damage plus dice: 8d8|avg (8d8)\
    \ fire damage."
  "name": "Flail"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d8 + 8|avg (2d8 + 8) radiant damage, or 19 (dice: 2d10 + 8|avg\
    \ (2d10 + 8)) radiant damage when used with two hands, plus dice: 8d8|avg\
    \ (8d8) fire damage."
  "name": "Longsword"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zariel touches one creature within 10 feet of her. The target must succeed\
    \ on a DC 26 Constitution saving throw or take dice: 8d10|avg (8d10) necrotic\
    \ damage and be [[6. Mechanics/Rules/Conditions.md#poisoned|poisoned]] for 1 minute.\
    \ While [[6. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way, the target\
    \ is [[6. Mechanics/Rules/Conditions.md#blinded|blinded]] and [[6. Mechanics/Rules/Conditions.md#deafened|deafened]].\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Horrid Touch (Recharge 5-6)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zariel teleports, along with any equipment she is wearing or carrying,\
    \ up to 120 feet to an unoccupied space she can see."
  "name": "Teleport"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zariel uses Teleport."
  "name": "Teleport"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Zariel turns her magical gaze toward one creature she can see within 120\
    \ feet of her and commands it to burn. The target must succeed on a DC 26 Wisdom\
    \ saving throw or take dice: 4d10|avg (4d10) fire damage."
  "name": "Immolating Gaze (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "6. Mechanics/Bestiary/Npc/token/zariel.png"
```
^statblock