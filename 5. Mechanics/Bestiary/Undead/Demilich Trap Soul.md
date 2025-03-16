---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 21
environments: null
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/21
  - monster/size/tiny
  - monster/type/undead
aliases:
  - Demilich (Trap Soul)
---
# [[5. Mechanics/Bestiary/Undead/Demilich Trap Soul.md|Demilich (Trap Soul)]]
*Source: Monster Manual p. 48*

```statblock
"name": "Demilich Trap Soul"
"size": "Tiny"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "80"
"hit_dice": "32d4"
"stats":
- !!int "1"
- !!int "20"
- !!int "10"
- !!int "20"
- !!int "17"
- !!int "20"
"speed": "0 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "9"
  "Intelligence": !!int "11"
  "Constitution": !!int "6"
"damage_resistances": "bludgeoning, piercing, slashing from magic weapons"
"damage_immunities": "necrotic; poison; psychic; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "truesight 120 ft., passive Perception 13"
"languages": ""
"cr": "21"
"traits":
- "desc": "If the demilich is subjected to an effect that allows it to make a saving\
    \ throw to take only half damage, it instead takes no damage if it succeeds on\
    \ the saving throw, and only half damage if it fails."
  "name": "Avoidance"
- "desc": "If the demilich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The demilich is immune to effects that turn undead."
  "name": "Turn Immunity"
"actions":
- "desc": "The demilich emits a bloodcurdling howl. Each creature within 30 feet of\
    \ the demilich that can hear the howl must succeed on a DC 15 Constitution saving\
    \ throw or drop to 0 hit points. On a successful save, the creature is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ until the end of its next turn."
  "name": "Howl (Recharge 5-6)"
- "desc": "The demilich targets up to three creatures that it can see within 10 feet\
    \ of it. Each target must succeed on a DC 19 Constitution saving throw or take\
    \ 21 (6d6) necrotic damage, and the demilich regains hit points equal to the total\
    \ damage dealt to all targets."
  "name": "Life Drain"
- "desc": "The demilich targets one creature that it can see within 30 feet of it.\
    \ The target must make a DC 19 Charisma saving throw. On a failed save, the target's\
    \ soul is magically trapped inside one of the demilich's gems. While the soul\
    \ is trapped, the target's body and all the equipment it is carrying cease to\
    \ exist. On a successful save, the target takes 24 (7d6) necrotic damage, and\
    \ if this damage reduces the target to 0 hit points, its soul is trapped as if\
    \ it failed the saving throw. A soul trapped in a gem for 24 hours is devoured\
    \ and ceases to exist.\n\nIf the demilich drops to 0 hit points, it is destroyed\
    \ and turns to powder, leaving behind its gems. Crushing a gem releases any soul\
    \ trapped within, at which point the target's body re-forms in an unoccupied space\
    \ nearest to the gem and in the same state as when it was trapped."
  "name": "Trap Soul"
"legendary_actions":
- "desc": "The demilich flies up to half its flying speed."
  "name": "Flight"
- "desc": "The demilich magically swirls its dusty remains. Each creature within 10\
    \ feet of the demilich, including around a corner, must succeed on a DC 15 Constitution\
    \ saving throw or be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] until\
    \ the end of the demilich's next turn. A creature that succeeds on the saving\
    \ throw is immune to this effect until the end of the demilich's next turn."
  "name": "Cloud of Dust"
- "desc": "Each creature with in 30 feet of the demilich must make a DC 15 Constitution\
    \ saving throw. On a failed save, the creature's hit point maximum is magically\
    \ reduced by 10 (3d6). If a creature's hit point maximum is reduced to 0 by this\
    \ effect, the creature dies. A creature's hit point maximum can be restored with\
    \ the  [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]] spell or\
    \ similar magic."
  "name": "Energy Drain (Costs 2 Actions)"
- "desc": "The demilich targets one creature it can see within 30 feet of it. The\
    \ target must succeed on a DC 15 Wisdom saving throw or be magically cursed. Until\
    \ the curse ends, the target has disadvantage on attack rolls and saving throws.\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the curse on a success."
  "name": "Vile Curse (Costs 3 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), the demilich rolls a d20.\
    \ On a result of 11 or higher, the demilich takes a lair action to cause one of\
    \ the following effects. It can't use the same effect two rounds in a row."
  "name": ""
- "desc": "- The tomb trembles violently for a moment. Each creature on the floor\
    \ of the tomb must succeed on a DC 19 Dexterity saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
    \  \n- The demilich targets one creature it can see within 60 feet of it. An [[5. Mechanics/Spells/Antimagic Field.md|antimagic\
    \ field]] fills the space of the target,\
    \ moving with it until initiative count 20 on the next round.  \n- The demilich\
    \ targets any number of creatures it can see within 30 feet of it. No target can\
    \ regain hit points until initiative count 20 on the next round.  "
  "name": ""
"regional_effects":
- "desc": "A demilich's tomb might have any or all of the following effects in place:"
  "name": ""
- "desc": "- The first time a non-evil creature enters the tomb's area, the creature\
    \ takes 16 (3d10) necrotic damage.  \n- Monsters in the tomb have advantage on\
    \ saving throws against being [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], and against features\
    \ that turn undead.  \n- The tomb is warded against the magical travel of creatures\
    \ the demilich hasn't authorized. Such creatures can't teleport into or out of\
    \ the tomb's area or use planar travel to enter or leave it. Effects that allow\
    \ teleportation or planar travel work within the tomb as long as they aren't used\
    \ to leave or enter the tomb's area.  "
  "name": ""
- "desc": "If the demilich is destroyed, these effects fade over the course of 10\
    \ days."
  "name": ""
"source":
- "MM"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
