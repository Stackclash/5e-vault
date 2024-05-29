---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/fmp1
- monster/cr/13
- monster/size/large
- monster/type/celestial/support
statblock: inline
aliases: ["Empyrean Stag"]
---
# [[5. Mechanics/Bestiary/Celestial/Empyrean Stag.md|Empyrean Stag]]
*Source: Flee, Mortals! (Packet 1) p. 16*

```statblock
"name": "Empyrean Stag"
"size": "Large"
"type": "celestial"
"subtype": "Support"
"alignment": "typically  Neutral Good"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "187"
"hit_dice": "22d10 + 66"
"stats":
- !!int "24"
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "20"
- !!int "20"
"speed": "60 ft."
"saves":
  "Charisma": !!int "10"
  "Dexterity": !!int "8"
  "Wisdom": !!int "10"
"skillsaves":
  "Athletics": !!int "12"
  "Insight": !!int "10"
  "Perception": !!int "10"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from attacks that\
  \ aren't supernatural"
"damage_immunities": "radiant"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]"
"senses": "darkvision 120 ft., passive Perception 20"
"languages": "all, telepathy 120 ft."
"cr": "13"
"traits":
- "desc": "The stag has advantage on saving throws against powers, spells, and other\
    \ supernatural effects."
  "name": "Supernatural Resistance"
"actions":
- "desc": "The stag makes three Ram or Lightburst attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 25\
    \ (4d8 + 7) piercing damage."
  "name": "Ram"
- "desc": "Ranged Spell Attack: +10 to hit, range 120 ft., one target. Hit: 18\
    \ (3d8 + 5) radiant damage, and the target is outlined in a golden light, giving\
    \ attack rolls against them advantage until the start of the stag's next turn."
  "name": "Lightburst"
- "desc": "The stag calls down a magical shower of stars on an area that is 60 feet\
    \ long and 5 feet wide within 120 feet of the stag. Each hostile creature in that\
    \ area must make a DC 18 Dexterity saving throw, taking 28 (8d6) radiant damage\
    \ on a failed save, or half as much damage on a successful one. Each willing friendly\
    \ creature in that area regains 15 hit points.\n\nThe stars then create a 10-foot-high\
    \ wall of opaque radiant light in that area. Each creature in the wall's space\
    \ is pushed out of it by the shortest route. The creature chooses which side of\
    \ the wall to end up on. The wall lasts for 1 minute or until the stag is [[/5. Mechanics/Rules/Conditions.md#incapacitated|incapacitated]]\
    \ or dies. If a hostile creature moves through the wall of light, willingly or\
    \ otherwise, the creature must make a DC 18 Constitution saving throw, taking\
    \ 14 (4d6) radiant damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Starcall (1/Day)"
"bonus_actions":
- "desc": "The stag infuses radiant energy into a willing creature they can see within\
    \ 60 feet of them. That creature deals an extra 5 radiant damage with weapon attack\
    \ rolls until the start of the stag's next turn."
  "name": "Starlight Infusion"
"reactions":
- "desc": "When the stag or a creature they can see within 30 feet of them takes damage,\
    \ the stag magically creates a protective barrier around that creature. The barrier\
    \ reduces that damage to the protected creature by 20, then vanishes."
  "name": "Nature's Ward"
"source":
- "FMp1"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```