---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: 'coastal, desert, grassland, mountain'
size: Large
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\12
  - monster\Environment\Coast(AL)
  - monster\Environment\Desert
  - monster\Environment\Grassland
  - monster\Environment\Mountain
  - monster\Size\Large
  - monster\Type\Celesti(AL)
aliases:
  - Ki-rin
---
# [[5. Mechanics\Bestiary\Celestial\Ki Rin (MPMM).md|Ki-rin]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 162, Volo's Guide to Monsters p. 163*

Ki-rins are noble, celestial creatures. In the Outer Planes, ki-rins in service to benevolent deities take a direct role in the eternal struggle between good and evil. In the mortal world, ki-rins are celebrated far and wide as harbingers of destiny, guardians of the sacred, and counterbalances to the forces of evil.

Ki-rins are an embodiment of good, and simply beholding one can evoke fear or awe in an observer. A typical ki-rin looks like a muscular stag, covered in golden scales lined in some places with golden fur. It has a long mane and tail, coppery cloven hooves, and a spiral-shaped coppery horn just above and between its luminous violet eyes. In a breeze or when aloft, the creature's scales and hair appear to blaze with a holy, golden fire.

Beyond their coloration, ki-rins vary in appearance based on the deity each one reveres and the function each typically performs in service to that god. Some resemble gigantic unicorns; these are often used as guardians. Others have draconic features and tend to be aggressive foes of evil. Having one horn is most common, but a particularly fierce ki-rin might have two horns or a set of antlers like those of a great stag.

In many lands, common folk view ki-rins as heralds of good fortune. They consider seeing a ki-rin fly overhead a blessing and events that happen on such a day especially auspicious. If a ki-rin alights during a ceremony such as a birth announcement or a coronation, everyone present understands that the creature is telling them the person so honored could become a great force for good. Ki-rins have also been known to appear at the sites of great battles to inspire and strengthen the side of good or to rescue heroes from certain death.

Ki-rins are attracted to the worship of deities of courage, loyalty, selflessness, and truth, as well as to the advancement of just societies. For instance, in the Forgotten Realms, ki-rins rally mostly to Torm, although they also serve his allies Tyr and Ilmater. Ki-rins that serve good deities go wherever they are commanded; a ki-rin from an Upper Plane might venture to the Material Plane on a mission, usually as a scout, a messenger, or a spy. A ki-rin living on the Material Plane claims a territory to watch over, and one ki-rin might safeguard an area that encompasses several nations.

## Lair of Luxury

On the celestial planes, ki-rins reside in lofty, elegant aeries filled with luxurious objects. On the Material Plane, a ki-rin chooses a similar location for its lair, such as atop a tall pinnacle or within a cloud solidified by the ki-rin's magic. The chosen location is almost always hard to reach, and only those mortals who have the tenacity to complete the daunting journey to a ki-rin's lair can prove themselves worthy of speaking with its occupant. Many of those who do end up pledging service to the creature. They study under its tutelage in its lair and serve as its agents in the world. These followers might travel incognito across the land, seeking news of growing evil and working behind the scenes, or they might be champions of their master's cause, out to defeat villainy wherever it is found.

When viewed from the outside, a ki-rin's lair is indistinguishable from a natural site, and the entrance is difficult for visitors to find and reach. Inside, the lair is a serene and comfortable place, its ambiance a mix between palace and temple. If the ki-rin has taken creatures into its service, its lair doubles as a sacred site wherein the ki-rin not only rests but also teaches of holy mysteries.

```statblock
"name": "Ki Rin (MPMM)"
"size": "Large"
"type": "celestial"
"alignment": "Typically  Lawful Good"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "153"
"hit_dice": "18d10 + 54"
"stats":
- !!int "21"
- !!int "16"
- !!int "16"
- !!int "19"
- !!int "20"
- !!int "20"
"speed": "60 ft., fly 120 ft. (hover)"
"skillsaves":
  "Religion": !!int "8"
  "Perception": !!int "9"
  "Insight": !!int "9"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 120 ft., truesight 30 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "12"
"traits":
- "desc": "The ki-rin casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Major Image.md|major image]]\
    \ (6th-level version), [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n1/day\
    \ each: [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Calm Emotions.md|calm emotions]],\
    \ [[5. Mechanics/Spells/Create Food And Water.md|create food and water]], [[5. Mechanics/Spells/Greater Restoration.md|greater\
    \ restoration]], [[5. Mechanics/Spells/Plane Shift.md|plane shift]],\
    \ [[5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]],\
    \ [[5. Mechanics/Spells/Revivify.md|revivify]], [[5. Mechanics/Spells/Wind Wa(LK).md|wind walk]]\n\
    \n3/day each: [[5. Mechanics/Spells/Cure Wounds.md|cure wounds]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
    \ [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]], [[5. Mechanics/Spells/Sending.md|sending]]"
  "name": "Spellcasting"
- "desc": "If the ki-rin fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The ki-rin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The ki-rin makes two Hoof attacks and one Horn attack, or it makes two\
    \ Sacred Fire attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 10 (2d4\
    \ + 5) force damage."
  "name": "Hoof"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) radiant damage."
  "name": "Horn"
- "desc": "Ranged Spell Attack: +9 to hit, range 120 ft., one target. Hit: 18\
    \ (3d8 + 5) radiant damage."
  "name": "Sacred Fire"
"legendary_actions":
- "desc": "The ki-rin moves up to half its speed without provoking [[/5. Mechanics/Rules/Actions.md#Opportunity%20Attack|opportunity attacks]]."
  "name": "Move"
- "desc": "The ki-rin makes one Hoof, Horn, or Sacred Fire attack."
  "name": "Smite"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), a kirin can take one of\
    \ the following lair actions, and it must finish a long rest before taking the\
    \ chosen lair action again:"
  "name": ""
- "desc": "- Create Comforts. The ki-rin conjures up one or more permanent objects\
    \ made of soft, plant-based material—including manufactured objects like pillows,\
    \ rope, blankets, and clothing—that can collectively fill no more than a 20-foot\
    \ cube. The objects materialize 1 minute later in unoccupied spaces of the ki-rin's\
    \ choice on the floor of the lair.  \n- Create Stone and Metal. The ki-rin\
    \ conjures up one or more temporary objects made of stone or metal that can collectively\
    \ fill no more than a 2-foot cube. The objects materialize 1 minute later in unoccupied\
    \ spaces of the ki-rin's choice on the floor of the lair, and the objects vanish\
    \ after 1 hour.  \n- Create Wood. The ki-rin conjures up one or more permanent\
    \ objects made of wood, or similarly hard plant-based material, that can collectively\
    \ fill no more than a 10-foot cube. The objects materialize 1 minute later in\
    \ unoccupied spaces of the ki-rin's choice on the floor of the lair.  "
  "name": ""
"regional_effects":
- "desc": "A ki-rin's Celestial nature transforms the region around its lair. Any\
    \ of the following magical effects is possible for travelers to encounter in the\
    \ vicinity:"
  "name": ""
- "desc": "- Blessed Nature. Beasts, Plants, and Celestials within 3 miles of\
    \ the ki-rin's lair grow more vigorous as they evolve toward an idealized form.\
    \ Such creatures are rarely aggressive toward others that aren't normally prey.\
    \  \n- Controlled Weather. A ki-rin can cast [[5. Mechanics/Spells/Control Weather.md|control weather]]\
    \ while it is within 3 miles of its lair. The spell's point of origin is always\
    \ the point outdoors closest to the center of its lair. The ki-rin doesn't need\
    \ to maintain a clear path to the sky or to concentrate for the change in weather\
    \ to persist.  \n- Pure Waters. Water flows pure within 3 miles of a ki-rin's\
    \ lair. Any purposeful corruption of the water lasts for no longer than 3 minutes.\
    \  \n- Realm of Respite. Curses, diseases, and poisons on creatures are suppressed\
    \ when those creatures are within 3 miles of the lair, unless the creatures are\
    \ Aberrations, Fiends, or Undead.  \n- Safe Descents. Within 3 miles of the\
    \ lair, winds buoy creatures that fall due to no act of the ki-rin or its allies.\
    \ Such creatures descend at a rate of 60 feet per round and take no falling damage.\
    \ Aberrations, Fiends, and Undead don't gain this benefit, falling as normal.\
    \  "
  "name": ""
- "desc": "When the ki-rin dies, all these effects disappear immediately, although\
    \ the invigorating effect on flora and fauna remains for 3 years."
  "name": ""
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Celestial/token/ki-rin-mpmm.webp"
```
^statblock

## Environment

coastal, desert, grassland, mountain

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
