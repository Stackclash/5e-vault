---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 15
environments: null
size: Large
tags:
  - compendium/src/5e/veor
  - monster/cr/15
  - monster/size/large
  - monster/type/fiend
aliases:
  - Relentless Impaler
---
# [[5. Mechanics\Bestiary\Fiend\Relentless Impaler (VEOR).md|Relentless Impaler]]
*Source: Vecna: Eve of Ruin p. 231*

In the Domains of Dread, practitioners of foul magic perform a profane ritual that turns living creatures into fiendish killers. This ritual necessitates the use of a ceremonial stake, which is plunged into the heart of a living sacrifice. The hulking form of the relentless impaler then emerges from the sacrifice's pool of blood, spear in hand.

A relentless impaler is bound to the creature that wielded the ceremonial stake in the ritual that birthed it. As long as the original stake remains lodged in the heart of the ritual victim, the impaler can return over and over again to regenerate beside the victim's body, no matter how many times it is destroyed.

The impaler pursues its creator's agenda coldly and efficiently. It has no concern for its own self-preservation, knowing that, for itself at least, death isn't the end.

```statblock
"name": "Relentless Impaler (VEOR)"
"size": "Large"
"type": "fiend"
"alignment": "typically  Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "184"
"hit_dice": "16d10 + 96"
"stats":
- !!int "23"
- !!int "16"
- !!int "22"
- !!int "12"
- !!int "15"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "8"
  "Strength": !!int "11"
"skillsaves":
  "Athletics": !!int "11"
  "Perception": !!int "7"
  "Survival": !!int "7"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "understands all languages but can't speak"
"cr": "15"
"traits":
- "desc": "The impaler is magically bound to the ceremonial stake and the sacrificed\
    \ corpse the ritual caster used to create it. If the impaler is reduced to 0 hit\
    \ points, it disappears, then re-forms 1d8 hours later in the nearest unoccupied\
    \ space to the stake and regains all its hit points. The impaler dies only if\
    \ it is reduced to 0 hit points while either the ceremonial stake is removed from\
    \ the sacrifice's corpse or the impaler is on a different plane of existence from\
    \ that corpse."
  "name": "Bloodheart Stake"
- "desc": "If the impaler fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "The impaler makes one Spike attack and two Wicked Spear attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 15 (2d8\
    \ + 6) piercing damage, and the target's speed is halved until the start of the\
    \ impaler's next turn."
  "name": "Spike"
- "desc": "Melee or Ranged Weapon Attack: +11 to hit, reach 10 ft. or range 20/40\
    \ ft., one target. Hit: 13 (2d6 + 6) piercing damage plus 13 (3d8) necrotic\
    \ damage."
  "name": "Wicked Spear"
- "desc": "Twisted, spectral spikes shoot out from the impaler's body. Each creature\
    \ within 30 feet of the impaler must make a DC 19 Dexterity saving throw, taking\
    \ 40 (9d8) force damage on a failed save or half as much damage on a successful\
    \ one."
  "name": "Spike Burst (Recharge 5-6)"
"legendary_actions":
- "desc": "The impaler teleports up to 30 feet to an unoccupied space it can see.\
    \ It can then make a Spike attack."
  "name": "Speed Spike"
- "desc": "Each creature whose speed is currently reduced by the impaler's Spike attack\
    \ takes 18 (4d8) necrotic damage."
  "name": "Deepen Wounds (Costs 2 Actions)"
"source":
- "VEoR"
"image": "5. Mechanics/Bestiary/Fiend/token/relentless-impaler-veor.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
