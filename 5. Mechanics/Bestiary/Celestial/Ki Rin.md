---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/12
- monster/environment/coastal
- monster/environment/desert
- monster/environment/grassland
- monster/environment/mountain
- monster/size/large
- monster/type/celestial
statblock: inline
aliases: ["Ki-rin"]
---
# [[5. Mechanics\Bestiary\Celestial\Ki Rin.md|Ki-rin]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 162*  

Ki-rins are noble, celestial creatures. In the Outer Planes, ki-rins in service to benevolent deities take a direct role in the eternal struggle between good and evil. In the mortal world, ki-rins are celebrated far and wide as harbingers of destiny, guardians of the sacred, and counterbalances to the forces of evil.

Ki-rins are an embodiment of good, and simply beholding one can evoke fear or awe in an observer. A typical ki-rin looks like a muscular stag, covered in golden scales lined in some places with golden fur. It has a long mane and tail, coppery cloven hooves, and a spiral-shaped coppery horn just above and between its luminous violet eyes. In a breeze or when aloft, the creature's scales and hair appear to blaze with a holy, golden fire.

Beyond their coloration, ki-rins vary in appearance based on the deity each one reveres and the function each typically performs in service to that god. Some resemble gigantic unicorns; these are often used as guardians. Others have draconic features and tend to be aggressive foes of evil. Having one horn is most common, but a particularly fierce ki-rin might have two horns or a set of antlers like those of a great stag.

In many lands, common folk view ki-rins as heralds of good fortune. They consider seeing a ki-rin fly overhead a blessing and events that happen on such a day especially auspicious. If a ki-rin alights during a ceremony such as a birth announcement or a coronation, everyone present understands that the creature is telling them the person so honored could become a great force for good. Ki-rins have also been known to appear at the sites of great battles to inspire and strengthen the side of good or to rescue heroes from certain death.

Ki-rins are attracted to the worship of deities of courage, loyalty, selflessness, and truth, as well as to the advancement of just societies. For instance, in the Forgotten Realms, ki-rins rally mostly to Torm, although they also serve his allies Tyr and Ilmater. Ki-rins that serve good deities go wherever they are commanded; a ki-rin from an Upper Plane might venture to the Material Plane on a mission, usually as a scout, a messenger, or a spy. A ki-rin living on the Material Plane claims a territory to watch over, and one ki-rin might safeguard an area that encompasses several nations.

## Lair of Luxury

On the celestial planes, ki-rins reside in lofty, elegant aeries filled with luxurious objects. On the Material Plane, a ki-rin chooses a similar location for its lair, such as atop a tall pinnacle or within a cloud solidified by the ki-rin's magic. The chosen location is almost always hard to reach, and only those mortals who have the tenacity to complete the daunting journey to a ki-rin's lair can prove themselves worthy of speaking with its occupant. Many of those who do end up pledging service to the creature. They study under its tutelage in its lair and serve as its agents in the world. These followers might travel incognito across the land, seeking news of growing evil and working behind the scenes, or they might be champions of their master's cause, out to defeat villainy wherever it is found.

When viewed from the outside, a ki-rin's lair is indistinguishable from a natural site, and the entrance is difficult for visitors to find and reach. Inside, the lair is a serene and comfortable place, its ambiance a mix between palace and temple. If the ki-rin has taken creatures into its service, its lair doubles as a sacred site wherein the ki-rin not only rests but also teaches of holy mysteries.

```statblock
"name": "Ki Rin"
"size": "Large"
"type": "celestial"
"alignment": "Typically  Lawful Good"
"ac": !!int "20"
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
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 120 ft., truesight 30 ft., passive Perception 19"
"languages": "all, telepathy 120 ft."
"cr": "12"
"traits":
- "desc": "The ki-rin casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [[5. Mechanics/Spells/Light.md|light]], [[5. Mechanics/Spells/Major Image.md|major image]]\
    \ (6th-level version), [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n1/day\
    \ each: [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Calm Emotions.md|calm emotions]],\
    \ [[5. Mechanics/Spells/Create Food And Water.md|create food and water]], [greater\
    \ restoration](compendium/spells/greater-restoration.md), [[5. Mechanics/Spells/Plane Shift.md|plane shift]],\
    \ [[5. Mechanics/Spells/Protection From Evil And Good.md|protection from evil and good]],\
    \ [[5. Mechanics/Spells/Revivify.md|revivify]], [[5. Mechanics/Spells/Wind Walk.md|wind walk]]\n\
    \n3/day each: [[5. Mechanics/Spells/Cure Wounds.md|cure wounds]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
    \ [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]], [[5. Mechanics/Spells/Sending.md|sending]]"
  "name": "spells"
- "desc": "If the ki-rin fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The ki-rin has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The ki-rin makes two Hoof attacks and one Horn attack, or it makes two\
    \ Sacred Fire attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d4 + 5|avg (2d4 + 5) force damage."
  "name": "Hoof"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 5|avg (2d8 + 5) radiant damage."
  "name": "Horn"
- "desc": "Ranged Spell Attack: dice: d20+9 (+9 to hit), range 120 ft., one target.\
    \ Hit: dice: 3d8 + 5|avg (3d8 + 5) radiant damage."
  "name": "Sacred Fire"
"legendary_actions":
- "desc": "The ki-rin moves up to half its speed without provoking opportunity attacks."
  "name": "Move"
- "desc": "The ki-rin makes one Hoof, Horn, or Sacred Fire attack."
  "name": "Smite"
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