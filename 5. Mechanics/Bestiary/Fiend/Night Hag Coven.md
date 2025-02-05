---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 7
environments: null
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/7
  - monster/size/medium
  - monster/type/fiend
aliases:
  - Night Hag (Coven)
---
# [[5. Mechanics\Bestiary\Fiend\Night Hag Coven.md|Night Hag (Coven)]]
*Source: Monster Manual p. 178, Curse of Strahd, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

```statblock
"name": "Night Hag Coven"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "5"
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Abyssal, Common, Infernal, Primordial"
"cr": "7"
"traits":
- "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 14, +6\
    \ to hit with spell attacks). She can innately cast the following spells, requiring\
    \ no material components:\n\nAt will: [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]]\n\n2/day each: [[5. Mechanics/Spells/Plane Shift.md|plane\
    \ shift]] (self only), [[5. Mechanics/Spells/Ray Of Enfeeblement.md|ray of enfeeblement]],\
    \ [[5. Mechanics/Spells/Sleep.md|sleep]]"
  "name": "Innate Spellcasting"
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
    \ her spellcasting ability. The spell save DC 15, and the spell attack bonus is\
    \ +7."
  "name": "Shared Spellcasting (Coven Only)"
- "desc": "The hag has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "A night hag carries two very rare magic items that she must craft for herself.\
    \ If either object is lost, the night hag will go to great lengths to retrieve\
    \ it, as creating a new tool takes time and effort.\n\nHeartstone: This lustrous\
    \ black gem allows a night hag to become ethereal while it is in her possession.\
    \ The touch of a heartstone also cures any disease. Crafting a heartstone takes\
    \ 30 days.\n\nSoul Bag: When an evil humanoid dies as a result of a night hag's\
    \ Nightmare Haunting, the hag catches the soul in this black sack made of stitched\
    \ flesh. A soul bag can hold only one evil soul at a time, and only the night\
    \ hag who crafted the bag can catch a soul with it. Crafting a soul bag takes\
    \ 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
  "name": "Night Hag Items"
"actions":
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8\
    \ + 4) slashing damage."
  "name": "Claws (Hag Form Only)"
- "desc": "The hag magically polymorphs into a Small or Medium female humanoid, or\
    \ back into her true form. Her statistics are the same in each form. Any equipment\
    \ she is wearing or carrying isn't transformed. She reverts to her true form if\
    \ she dies."
  "name": "Change Shape"
- "desc": "The hag magically enters the Ethereal Plane from the Material Plane, or\
    \ vice versa. To do so, the hag must have a heartstone in her possession."
  "name": "Etherealness"
- "desc": "While on the Ethereal Plane, the hag magically touches a sleeping humanoid\
    \ on the Material Plane. A [[5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]]\
    \ spell cast on the target prevents this contact, as does a magic circle. As long\
    \ as the contact persists, the target has dreadful visions. If these visions last\
    \ for at least 1 hour, the target gains no benefit from its rest, and its hit\
    \ point maximum is reduced by 5 (1d10). If this effect reduces the target's hit\
    \ point maximum to 0, the target dies, and if the target was evil, its soul is\
    \ trapped in the hag's soul bag. The reduction to the target's hit point maximum\
    \ lasts until removed by the  [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
    \ spell or similar magic."
  "name": "Nightmare Haunting (1/Day)"
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
- "desc": "A powerful night hag might have the following additional lair actions:"
  "name": ""
- "desc": "- One creature the hag can see within 120 feet of her must succeed on a\
    \ DC 15 Charisma saving throw or be banished to a prison demiplane. To escape,\
    \ the creature must use its action to make a Charisma check contested by the hag's.\
    \ If the creature wins, it escapes the demiplane. Otherwise, the effect ends on\
    \ initiative count 20 on the next round. When the effect ends, the creature reappears\
    \ in the space it left or in the nearest unoccupied space if that one is occupied.\
    \  \n- The hag targets up to three creatures that she can see within 60 feet of\
    \ her. Each target must succeed on a DC 15 Constitution saving throw or be flung\
    \ up to 30 feet through the air. A creature that strikes a solid object or is\
    \ released in midair takes 1d6 bludgeoning damage for every 10 feet moved or fallen.\
    \  "
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
- "desc": "A powerful night hag creates one or more of the following additional regional\
    \ effects within 1 mile of her lair:"
  "name": ""
- "desc": "- Shadows seem abnormally gaunt and sometimes move on their own as though\
    \ alive.  \n- Creatures are transported to a harmless but eerie demiplane filled\
    \ with shadowy forms, waxy corpses, and cackling. The creatures are trapped there\
    \ for a minute or two, and then returned to the place where they vanished from.\
    \  \n- Intelligent creatures see hallucinations of dead friends, family members,\
    \ and even themselves littering the hag's realm. Any attempt to interact with\
    \ a hallucinatory image causes it to disappear.  "
  "name": ""
"source":
- "MM"
- "CoS"
- "TCE"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
