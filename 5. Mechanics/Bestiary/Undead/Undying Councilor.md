---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/erlw
  - monster/cr/10
  - monster/size/medium
  - monster/type/undead
statblock: inline
aliases:
  - Undying Councilor
---
# [[5. Mechanics/Bestiary/Undead/Undying Councilor.md|Undying Councilor]]
*Source: Eberron: Rising from the Last War p. 311*

Undying councilors guide and protect the people of Aerenal. They are the most powerful members of the Undying Court who still maintain their physical forms. While many undying councilors spend their days advising the living, some devote years projecting their consciousness into the Astral Plane, seeking new knowledge to share with their people. Still, not all minds are capable of assimilating immortality, and undying councilors sometimes buckle under the strain and go mad.

The undying are undead creatures sustained by positive energy or the devotion of mortal beings. Where strong negative emotions can trap a spirit as a ghost or wraith, the undying are spirits who linger because they are cherished and who in turn seek to protect and guide the people of their community.

Though it's possible for undying to appear anywhere, it is rare for them to manifest naturally. The only place where they are found in significant numbers is the island of Aerenal, a land whose close ties to the plane of Irian suffuse it with positive energy. The elves of Aerenal spent thousands of years working to develop rituals that tap into this energy, allowing them to preserve their greatest citizens as undying.

## The Face of Death

The light of Irian sustains the spirit, but it doesn't preserve the physical body. The undying appear as desiccated corpses, their flesh withering away over centuries. At the same time, the spirit of the undying surrounds the body—an aura of light forming a spectral shadow of the soul. The light shed by an undying doesn't generate heat, but it provides a sense of warmth and comfort.

The most powerful of the undying can separate their spirits from their physical forms, existing as beings of pure light. This state is the ultimate goal of the elves of Aerenal, and such beings are known as ascendant councilors.

## Bound by Love and Light

Undying are sustained by positive energy, whether found in manifest zones tied to Irian—such as in Shae Mordai, the Aereni City of the Dead—or freely given by the devotion of mortal beings. The worship of the Undying Court is what sustains the undying of Aerenal, but devotion is a finite resource. As such, each elf that becomes an undying must earn their afterlife. If an undying elf leaves Aerenal, they require a community of elves or another source of positive energy to sustain them. Failing this, their light fades and they eventually die.

## The Undying Court

The honored undead of Aerenal are united in the Undying Court. Based in the city of Shae Mordai, the members of the Undying Court spend their time meditating, engaging in research, or continuing to perfect the arts they practiced in life. They serve as guides and advisors to the living, and members of the noble lines of Aerenal can exercise the rite of counsel to consult with ancestors in Shae Mordai.

The greatest members of the Undying Court are the ascendant councilors. These beings of pure light are focused on contemplating the mysteries of life and the planes, and can work together to wield godlike power that allows them to shield Aerenal from almost any threat. However, the ascendant councilors can exercise power beyond Aerenal only by acting through devoted mortals—paladins and clerics of the Undying Court.

## Undead Nature

An undying doesn't require air, food, drink, or sleep.

```statblock
"name": "Undying Councilor"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Good"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"stats":
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "17"
- !!int "21"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Religion": !!int "7"
  "Insight": !!int "9"
  "Perception": !!int "9"
  "History": !!int "11"
  "Arcana": !!int "7"
"damage_vulnerabilities": "necrotic"
"damage_immunities": "poison, radiant"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "Common, Elvish"
"cr": "10"
"traits":
- "desc": "The councilor is a 13th-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 17, dice: d20+9 (+9) to hit with spell attacks). It\
    \ has the following cleric spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Guidance.md|guidance]],\
    \ [[5. Mechanics/Spells/Mending.md|mending]], [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]],\
    \ [[5. Mechanics/Spells/Spare The Dying.md|spare the dying]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Bless.md|bless]], [[5. Mechanics/Spells/Command.md|command]],\
    \ [[5. Mechanics/Spells/Create Or Destroy Water.md|create or destroy water]]\n\n\
    2nd level (3 slots): [[5. Mechanics/Spells/Augury.md|augury]], [[5. Mechanics/Spells/Calm Emotions.md|calm emotions]],\
    \ [[5. Mechanics/Spells/Hold Person.md|hold person]]\n\n3rd level (3 slots):\
    \ [[5. Mechanics/Spells/Daylight.md|daylight]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
    \ [[5. Mechanics/Spells/Spirit Guardians.md|spirit guardians]]\n\n4th level (3\
    \ slots): [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Divination.md|divination]],\
    \ [[5. Mechanics/Spells/Guardian Of Faith.md|guardian of faith]]\n\n5th level (2\
    \ slots): [[5. Mechanics/Spells/Dispel Evil And Good.md|dispel evil and good]],\
    \ [[5. Mechanics/Spells/Flame Strike.md|flame strike]] (see \"Actions\" below), [[5. Mechanics/Spells/Scrying.md|scrying]]\n\
    \n6th level (1 slots): [[5. Mechanics/Spells/Forbiddance.md|forbiddance]], [[5. Mechanics/Spells/Planar Ally.md|planar\
    \ ally]]\n\n7th level (1 slots): [[5. Mechanics/Spells/Plane Shift.md|plane shift]]"
  "name": "spells"
- "desc": "The councilor magically sheds bright light in a 15-foot radius and dim\
    \ light for an additional 15 feet. The councilor can extinguish or restore this\
    \ light as a bonus action. If the bright light overlaps with an area of darkness\
    \ created by a spell of 3rd level or lower, the spell that created that darkness\
    \ is dispelled."
  "name": "Aura of Radiance"
- "desc": "The councilor has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The councilor makes two Radiant Touch attacks."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: dice: d20+9 (+9) to hit, reach 5 ft., one target.\
    \ Hit: dice:3d6 + 5|text(15) (3d6 + 5) radiant damage."
  "name": "Radiant Touch"
- "desc": "The councilor touches another creature. The target magically regains dice:3d8\
    \ + 5|text(18) (3d8 + 5) hit points and is freed from one curse afflicting\
    \ it (councilor's choice)."
  "name": "Healing Touch (3/Day)"
- "desc": "The councilor chooses a point it can see within 60 feet of it. Each creature\
    \ in a 10-foot-radius, 40-foot-high cylinder centered on that point must make\
    \ a DC 17 Dexterity saving throw. A creature takes dice:4d6|text(14) (4d6)\
    \ fire damage and dice:4d6|text(14) (4d6) radiant damage on a failed save,\
    \ or half as much damage on a successful one. If the councilor casts this spell\
    \ using a spell slot of 6th level or higher, the fire damage or the radiant damage\
    \ (its choice) increases by dice: 1d6|avg|noform (1d6) for each slot level\
    \ above 5th."
  "name": "Flame Strike (5th-Level Spell; Requires a Spell Slot)"
"legendary_actions":
- "desc": "The councilor makes one attack with its Radiant Touch."
  "name": "Touch"
- "desc": "The councilor channels positive energy into its Aura of Radiance. Until\
    \ the end of the councilor's next turn, it sheds bright light in a 30-foot radius\
    \ and dim light for an additional 30 feet. Any creature that starts its turn in\
    \ the bright light must succeed on a DC 17 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ until the end of the councilor's next turn."
  "name": "Shimmering Aura (Costs 2 Actions)"
"source":
- "ERLW"
"image": "5. Mechanics/Bestiary/Undead/token/undying-councilor-erlw.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
