---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 'underwater, coastal'
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\4
  - monster\Environment\Coast(AL)
  - monster\Environment\Underwater
  - monster\Size\Medium
  - monster\Type\Fey
aliases:
  - Sea Hag (Coven)
---
# [[5. Mechanics\Bestiary\Fey\Sea Hag Coven.md|Sea Hag (Coven)]]
*Source: Monster Manual p. 179. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Sea Hag Coven"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "52"
"hit_dice": "7d8 + 21"
"stats":
- !!int "16"
- !!int "13"
- !!int "16"
- !!int "12"
- !!int "12"
- !!int "13"
"speed": "30 ft., swim 40 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "Aquan, Common, Giant"
"cr": "4"
"traits":
- "desc": "While all three members of a hag coven are within 30 feet of one another,\
    \ they can each cast the following spells from the wizard's spell list but must\
    \ share the spell slots among themselves:\n\n1st level (4 slots): [[5. Mechanics/Spells/Identify.md|identify]],\
    \ [[5. Mechanics/Spells/Ray Of Sickness.md|ray of sickness]]\n\n2nd level (3 slots):\
    \ [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Locate Object.md|locate object]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Bestow Curse.md|bestow curse]],\
    \ [[5. Mechanics/Spells/Counterspell.md|counterspell]], [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Phantasmal Killer.md|phantasmal killer]],\
    \ [[5. Mechanics/Spells/Polymorph.md|polymorph]]\n\n5th level (2 slots): [[5. Mechanics/Spells/Contact Other Plane.md|contact\
    \ other plane]], [[5. Mechanics/Spells/Scrying.md|scrying]]\n\
    \n6th level (1 slots): [[5. Mechanics/Spells/Eyebite.md|eyebite]]\n\nFor casting\
    \ these spells, each hag is a 12th-level spellcaster that uses Intelligence as\
    \ her spellcasting ability. The spell save DC 13, and the spell attack bonus is\
    \ +5."
  "name": "Shared Spellcasting (Coven Only)"
- "desc": "The hag can breathe air and water."
  "name": "Amphibious"
- "desc": "Any humanoid that starts its turn within 30 feet of the hag and can see\
    \ the hag's true form must make a DC 11 Wisdom saving throw. On a failed save,\
    \ the creature is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] for\
    \ 1 minute. A creature can repeat the saving throw at the end of each of its turns,\
    \ with disadvantage if the hag is within line of sight, ending the effect on itself\
    \ on a success. If a creature's saving throw is successful or the effect ends\
    \ for it, the creature is immune to the hag's Horrific Appearance for the next\
    \ 24 hours.\n\nUnless the target is [[/5. Mechanics/Rules/Conditions.md#Surprised|surprised]]\
    \ or the revelation of the hag's true form is sudden, the target can avert its\
    \ eyes and avoid making the initial saving throw. Until the start of its next\
    \ turn, a creature that averts its eyes has disadvantage on attack rolls against\
    \ the hag."
  "name": "Horrific Appearance"
"actions":
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6\
    \ + 3) slashing damage."
  "name": "Claws"
- "desc": "The hag targets one [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ creature she can see within 30 feet of her. If the target can see the hag, it\
    \ must succeed on a DC 11 Wisdom saving throw against this magic or drop to 0\
    \ hit points."
  "name": "Death Glare"
- "desc": "The hag covers herself and anything she is wearing or carrying with a magical\
    \ illusion that makes her look like an ugly creature of her general size and humanoid\
    \ shape. The effect ends if the hag takes a bonus action to end it or if she dies.\n\
    \nThe changes wrought by this effect fail to hold up to physical inspection. For\
    \ example, the hag could appear to have no claws, but someone touching her hand\
    \ might feel the claws. Otherwise, a creature must take an action to visually\
    \ inspect the illusion and succeed on a DC 16 Intelligence ([[/5. Mechanics/Rules/Skills.md#Investigation|Investigation]])\
    \ check to discern that the hag is disguised."
  "name": "Illusory Appearance"
"lair_actions":
- "desc": "The following lair actions are options for grandmothers and powerful aunties.\
    \ Grandmothers usually have three to five lair actions, aunties usually only one\
    \ (if they have any at all). Unless otherwise noted, any lair action that requires\
    \ a creature to make a saving throw uses the save DC of the hag's most powerful\
    \ ability."
  "name": ""
- "desc": "On initiative count 20 (losing initiative ties), the hag can take a lair\
    \ action to cause one of the following effects, but can't use the same effect\
    \ two rounds in a row:"
  "name": ""
- "desc": "- Until initiative count 20 on the next round, the hag can pass through\
    \ solid walls, doors, ceilings, and floors as if the surfaces weren't there. \
    \ \n- The hag targets any number of doors and windows that she can see, causing\
    \ each one to either open or close as she wishes. Closed doors can be magically\
    \ locked (requiring a successful DC 20 Strength check to force open) until she\
    \ chooses to make them unlocked, or until she uses this lair action again to open\
    \ them.  "
  "name": ""
- "desc": "A powerful sea hag might have the following additional lair actions:"
  "name": ""
- "desc": "- The hag fills up to four 10-foot cubes of water with ink. The inky areas\
    \ are heavily obscured for 1 minute, although a steady, strong underwater current\
    \ disperses the ink on initiative count 10. The hag ignores the obscuring effect\
    \ of the ink.  \n- The hag chooses one humanoid within the lair and instantly\
    \ creates a simulacrum of that creature (as if created with the [[5. Mechanics/Spells/Simulacrum.md|simulacrum]]\
    \ spell). This hideous simulacrum is formed out of seaweed, slime, half-eaten\
    \ fish, and other garbage, but still generally resembles the creature it is imitating.\
    \ This simulacrum obeys the hag's commands and is destroyed on initiative count\
    \ 20 on the next round.  "
  "name": ""
"regional_effects":
- "desc": "Each hag's lair is the source of three to five regional effects; the home\
    \ of a grandmother, an auntie, or a coven has more effects than the lair of a\
    \ single hag, including some that can directly harm intruders. Any regional effect\
    \ that requires a creature to make a saving throw uses the save DC of the hag's\
    \ most powerful ability. These effects either end immediately if the hag dies\
    \ or abandons the lair, or take up to 2d10 days to fade away."
  "name": ""
- "desc": "The region within 1 mile of a grandmother hag's lair is warped by the creature's\
    \ fell magic, which creates one or more of the following effects:"
  "name": ""
- "desc": "- Birds, rodents, snakes, spiders, or toads (or some other creatures appropriate\
    \ to the hag) are found in great profusion.  \n- Beasts that have an Intelligence\
    \ score of 2 or lower are [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]] by\
    \ the hag and directed to be aggressive toward intruders in the area.  \n- Strange\
    \ carved figurines, twig fetishes, or rag dolls magically appear in trees.  "
  "name": ""
- "desc": "A powerful sea hag creates one or more of the following additional regional\
    \ effects within 1 mile of her lair:"
  "name": ""
- "desc": "- Most surfaces are covered by a thin film of slime, which is slick and\
    \ sticks to anything that touches it.  \n- Currents and tides are exceptionally\
    \ strong and treacherous. Any ability check made to safely navigate or control\
    \ a vessel moving through these waters has disadvantage.  \n- Shores are littered\
    \ with dead, rotting fish. The hag can sense when one of the fish is handled and\
    \ cause it to speak with her voice.  "
  "name": ""
"source":
- "MM"
```
^statblock

## Environment

underwater, coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
