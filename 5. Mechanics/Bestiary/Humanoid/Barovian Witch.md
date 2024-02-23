---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/cos
  - monster/cr/1-2
  - monster/size/medium
  - monster/type/humanoid/human
statblock: inline
aliases:
  - Barovian Witch
---
# [[5. Mechanics\Bestiary\Humanoid\Barovian Witch.md|Barovian Witch]]
*Source: Curse of Strahd p. 229*  

The mad women and men known as Barovian witches forge pacts with Strahd and the Dark Powers of Ravenloft in exchange for magic and longevity. They prefer to live in the shadows and can see in the dark. When traveling in the open, they use [[5. Mechanics/Spells/Alter Self.md|alter self]] spells to assume less conspicuous forms. They also use these spells to grow long, sharp claws with which they can attack.

## Brothers and Sisters of Strahd

Barovian witches have no scruples. They will deal with anyone in return for power. They will also betray anyone for the same reason. The only thing they fear is Strahd, and his wish is their command. Barovian witches sometimes refer to themselves as the brothers and sisters of Strahd, though never to Strahd's face.

### Pack Rats with Cats

 Barovian witches are obsessive collectors, each believing that almost anything found - a piece of broken bone, a dead rodent, a handful of dust, or some other worthless item or substance - could be valuable or useful as a spell component, a ritual object, or a potion ingredient.

Barovian witches use the [[5. Mechanics/Spells/Find Familiar.md|find familiar]] spell to call forth familiars. They are particularly fond of cats, though snakes and toads are also common. These animals lurk amid the clutter of the witches' lairs, seldom wandering far from their vile masters.

```statblock
"name": "Barovian Witch"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "10"
"hp": !!int "16"
"hit_dice": "3d8 + 3"
"stats":
- !!int "7"
- !!int "11"
- !!int "13"
- !!int "14"
- !!int "11"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "2"
  "Arcana": !!int "4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common"
"cr": "1/2"
"traits":
- "desc": "The witch is a 3rd-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 12, dice: d20+4 (+4 to hit) with spell attacks). The witch\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]], [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Ray Of Sickness.md|ray of sickness]],\
    \ [[5. Mechanics/Spells/Sleep.md|sleep]], [[5. Mechanics/Spells/Tashas Hideous Laughter.md|Tasha's hideous laughter]]\n\
    \n2nd level (2 slots): [[5. Mechanics/Spells/Alter Self.md|alter self]], [[5. Mechanics/Spells/Invisibility.md|invisibility]]"
  "name": "spells"
"actions":
- "desc": "Melee Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 1|avg (1d6 + 1) slashing damage. This attack is magical."
  "name": "Claws (Requires Alter Self)"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+2 (+2 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4|avg (1d4) piercing damage."
  "name": "Dagger"
"source":
- "CoS"
"image": "5. Mechanics/Bestiary/Humanoid/token/barovian-witch-cos.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
