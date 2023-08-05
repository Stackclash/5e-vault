---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/large
- monster/type/fiend/devil
statblock: true
statblock-link: "#^statblock"
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
    \ [[/6. Mechanics/Spells/alter-self.md\|alter self]] (can become Medium when changing\
    \ her appearance), [[/6. Mechanics/Spells/detect-evil-and-good.md\|detect evil and good]],\
    \ [[/6. Mechanics/Spells/fireball.md\|fireball]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]]\
    \ (self only), [[/6. Mechanics/Spells/major-image.md\|major image]], [[/6. Mechanics/Spells/wall-of-fire.md\|wall of fire]]\n\
    \n3/day each: [[/6. Mechanics/Spells/blade-barrier.md\|blade barrier]], [dispel\
    \ evil and good](/compendium/spells/dispel-evil-and-good.md), [[/6. Mechanics/Spells/finger-of-death.md\|finger of death]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Magical darkness doesn't impede Zariel's [[6. Mechanics/Rules/senses.md#darkvision\|darkvision]]."
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
    \ damage and be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] for 1 minute.\
    \ While [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] in this way, the target\
    \ is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] and [[6. Mechanics/Rules/conditions.md#deafened\|deafened]].\
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
"image": "/compendium/bestiary/npc/token/zariel.png"
aliases: ["Zariel"]
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

```ad-statblock
title: Zariel
![[/6. Mechanics/Bestiary/Npc/Token/zariel.png#token]]
*Large fiend(devil), Lawful Evil*

- **Armor Class** 21 (natural armor)
- **Hit Points** `dice: 29d10 + 261|text(420)` (29d10 + 261) 
- **Speed** walk 50 ft., fly 150 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|27 (+8)|24 (+7)|28 (+9)|26 (+8)|27 (+8)|30 (+10)|

- **Proficiency Bonus** +8
- **Saving Throws** Intelligence +16, Wisdom +16, Charisma +18
- **Skills** Intimidation +18, Perception +16
- **Senses** darkvision 120 ft., passive Perception 26
- **Damage Resistances** cold; fire; radiant; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** necrotic, poison
- **Condition Immunities** charmed, exhaustion, frightened, poisoned
- **Languages** all, telepathy 120 ft.
- **Challenge** 26

## Traits

***Devil's Sight.*** Magical darkness doesn't impede Zariel's [[6. Mechanics/Rules/senses.md#darkvision\|darkvision]].

***Legendary Resistance (3/Day).*** If Zariel fails a saving throw, she can choose to succeed instead.

***Magic Resistance.*** Zariel has advantage on saving throws against spells and other magical effects.

***Regeneration.*** Zariel regains 20 hit points at the start of her turn. If she takes radiant damage, this trait doesn't function at the start of her next turn. Zariel dies only if she starts her turn with 0 hit points and doesn't regenerate.

***Spellcasting.*** Zariel casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 26):

**At will**: [[/6. Mechanics/Spells/alter-self.md\|alter self]] (can become Medium when changing her appearance), [[/6. Mechanics/Spells/detect-evil-and-good.md\|detect evil and good]], [[/6. Mechanics/Spells/fireball.md\|fireball]], [[/6. Mechanics/Spells/invisibility.md\|invisibility]] (self only), [[/6. Mechanics/Spells/major-image.md\|major image]], [[/6. Mechanics/Spells/wall-of-fire.md\|wall of fire]]

**3/day each**: [[/6. Mechanics/Spells/blade-barrier.md\|blade barrier]], [[/6. Mechanics/Spells/dispel-evil-and-good.md\|dispel evil and good]], [[/6. Mechanics/Spells/finger-of-death.md\|finger of death]]

## Actions

***Multiattack.*** Zariel makes three Flail or Longsword attacks. She can replace one attack with a use of Horrid Touch, if available.

***Flail.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 10 ft., one target. Hit: `dice: 2d8 + 8` (`2d8 + 8`) force damage plus `dice: 8d8` (`8d8`) fire damage.

***Longsword.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 10 ft., one target. Hit: `dice: 2d8 + 8` (`2d8 + 8`) radiant damage, or 19 (`dice: 2d10 + 8` (`2d10 + 8`)) radiant damage when used with two hands, plus `dice: 8d8` (`8d8`) fire damage.

***Horrid Touch (Recharge 5-6).*** Zariel touches one creature within 10 feet of her. The target must succeed on a DC 26 Constitution saving throw or take `dice: 8d10` (`8d10`) necrotic damage and be [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] for 1 minute. While [[6. Mechanics/Rules/conditions.md#poisoned\|poisoned]] in this way, the target is [[6. Mechanics/Rules/conditions.md#blinded\|blinded]] and [[6. Mechanics/Rules/conditions.md#deafened\|deafened]]. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Teleport.*** Zariel teleports, along with any equipment she is wearing or carrying, up to 120 feet to an unoccupied space she can see.

## Legendary Actions

***Teleport.*** Zariel uses Teleport.

***Immolating Gaze (Costs 2 Actions).*** Zariel turns her magical gaze toward one creature she can see within 120 feet of her and commands it to burn. The target must succeed on a DC 26 Wisdom saving throw or take `dice: 4d10` (`4d10`) fire damage.

## Lair actions

On initiative count 20 (losing initiative ties), Zariel can take one of the following lair actions; she can't take the same lair action two rounds in a row:

- **Fireball.** Zariel casts the [[/6. Mechanics/Spells/fireball.md\|fireball]] spell.  
- **Infernal Illusions.** Zariel casts the [[/6. Mechanics/Spells/major-image.md\|major image]] spell four times, targeting different areas with it. Zariel prefers to create images of intruders' loved ones being burned alive. Zariel doesn't need to concentrate on the spells, which end on initiative count 20 of the next round. Each creature that can see these illusions must succeed on a DC 26 Wisdom saving throw or become [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] of the illusion for 1 minute. A frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  

## Regional effects

The region containing Zariel's lair is warped by her magic, which creates one or more of the following effects:

- **Hellscape.** The area within 9 miles of the lair is filled with screaming voices and the stench of burning meat.  
- **Pyres.** Once every 60 feet within 1 mile of the lair, 10-foot-high gouts of flame rise from the ground. Any creature or object that touches the flame takes 7 (`dice: 2d6` (`2d6`) fire damage, though it can take this damage no more than once per round.  
- **Smoke.** The area within 2 miles of the lair, but no closer than 500 feet, is filled with smoke, which causes the area to be heavily obscured. The smoke can't be cleared away.  

If Zariel dies, these effects fade over the course of `dice: 1d10` (`1d10`) days.
```
^statblock