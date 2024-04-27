---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/21
  - monster/size/medium
  - monster/type/undead
statblock: inline
aliases:
  - Lich
---
# [[5. Mechanics\Bestiary\Undead\Lich.md|Lich]]
*Source: Monster Manual p. 202, Curse of Strahd, Tasha's Cauldron of Everything. Available in the SRD.*

Liches are the remains of great wizards who embrace undeath as a means of preserving themselves. They further their own power at any cost, having no interest in the affairs of the living except where those affairs interfere with their own. Scheming and insane, they hunger for long-forgotten knowledge and the most terrible secrets. Because the shadow of death doesn't hang over them, they can conceive plans that take years, decades, or centuries to come to fruition.

A lich is a gaunt and skeletal humanoid with withered flesh stretched tight across its bones. Its eyes succumbed to decay long ago, but points of light burn in its empty sockets. It is often garbed in the moldering remains of fine clothing and jewelry worn and dulled by the passage of time.

## Secrets of Undeath

No wizard takes up the path to lichdom on a whim, and the process of becoming a lich is a well-guarded secret. Wizards that seek lichdom must make bargains with fiends, evil gods, or other foul entities. Many turn to Orcus, Demon Prince of Undeath, whose power has created countless liches. However, those that control the power of lichdom always demand fealty and service for their knowledge.

A lich is created by an arcane ritual that traps the wizard's soul within a phylactery. Doing so binds the soul to the mortal world, preventing it from traveling to the Outer Planes after death. A phylactery is traditionally an amulet in the shape of a small box, but it can take the form of any item possessing an interior space into which arcane sigils of naming, binding, immortality, and dark magic are scribed in silver.

With its phylactery prepared, the future lich drinks a potion of transformation-a vile concoction of poison mixed with the blood of a sentient creature whose soul is sacrificed to the phylactery. The wizard falls dead, then rises as a lich as its soul is drawn into the phylactery, where it forever remains.

## Soul Sacrifices

A lich must periodically feed souls to its phylactery to sustain the magic preserving its body and consciousness. It does this using the [[5. Mechanics/Spells/Imprisonment.md|imprisonment]] spell. Instead of choosing one of the normal options of the spell, the lich uses the spell to magically trap the target's body and soul inside its phylactery. The phylactery must be on the same plane as the lich for the spell to work. A lich's phylactery can hold only one creature at a time, and a [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]] cast as a 9th-level spell upon the phylactery releases any creature imprisoned within it. A creature imprisoned in the phylactery for 24 hours is consumed and destroyed utterly, whereupon nothing short of divine intervention can restore it to life.

A lich that fails or forgets to maintain its body with sacrificed souls begins to physically fall apart, and might eventually become a demilich.

## Death and Restoration

When a lich's body is broken by accident or assault, the will and mind of the lich drains from it, leaving only a lifeless corpse behind. Within days, a new body reforms next to the lich's phylactery, coalescing out of glowing smoke that issues from the device. Because the destruction of its phylactery means the possibility of eternal death, a lich usually keeps its phylactery in a hidden, well-guarded location.

Destroying a lich's phylactery is no easy task and often requires a special ritual, item, or weapon. Every phylactery is unique, and discovering the key to its destruction can be a quest in and of itself.

## Lonely Existence

From time to time, a lich might be stirred from its single-minded pursuit of power to take an interest in the world around it, most often when some great event reminds it of the life it once led. It otherwise lives in isolation, engaging only with those creatures whose service helps secure its lair.

Few liches call themselves by their former names, instead adopting monikers such as the Black Hand or the Forgotten King.

## Magic Collectors

Liches collect spells and magic items. In addition to its spell repertoire, a lich has ready access to potions, scrolls, libraries of spellbooks, one or more wands, and perhaps a staff or two. It has no qualms about putting these treasures to use whenever its lair comes under attack.

## Undead Nature

A lich doesn't require air, food, drink, or sleep.

## A Lich's Lair

A lich often haunts the abode it favored in life, such as a lonely tower, a haunted ruin, or an academy of black magic. Alternatively, some liches construct secret tombs filled with powerful guardians and traps. Everything about a lich's lair reflects its keen mind and wicked cunning, including the magic and mundane traps that secure it. Undead, constructs, and bound demons lurk in shadowy recesses, emerging to destroy those who dare to disturb the lich's work.

A lich encountered in its lair has a challenge rating of 22 (41,000 XP).

```statblock
"name": "Lich"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"stats":
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "20"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "9"
  "Intelligence": !!int "12"
  "Constitution": !!int "10"
"skillsaves":
  "Insight": !!int "9"
  "Perception": !!int "9"
  "History": !!int "12"
  "Arcana": !!int "19"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight 120 ft., passive Perception 19"
"languages": "Common plus up to five other languages"
"cr": "21"
"traits":
- "desc": "The lich is an 18th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 20, dice: d20+12 (+12) to hit with spell attacks). The lich\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]], [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]\n\
    \n1st level (4 slots): [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]], [[5. Mechanics/Spells/Shield.md|shield]],\
    \ [[5. Mechanics/Spells/Thunderwave.md|thunderwave]]\n\n2nd level (3 slots):\
    \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
    \ [[5. Mechanics/Spells/Melfs Acid Arrow.md|Melf's acid arrow]], [[5. Mechanics/Spells/Mirror Image.md|mirror image]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Animate Dead.md|animate dead]],\
    \ [[5. Mechanics/Spells/Counterspell.md|counterspell]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
    \ [[5. Mechanics/Spells/Fireball.md|fireball]]\n\n4th level (3 slots): [[5. Mechanics/Spells/Blight.md|blight]],\
    \ [[5. Mechanics/Spells/Dimension Door.md|dimension door]]\n\n5th level (3 slots):\
    \ [[5. Mechanics/Spells/Cloudkill.md|cloudkill]], [[5. Mechanics/Spells/Scrying.md|scrying]]\n\
    \n6th level (1 slots): [[5. Mechanics/Spells/Disintegrate.md|disintegrate]],\
    \ [[5. Mechanics/Spells/Globe Of Invulnerability.md|globe of invulnerability]]\n\n\
    7th level (1 slots): [[5. Mechanics/Spells/Finger Of Death.md|finger of death]],\
    \ [[5. Mechanics/Spells/Plane Shift.md|plane shift]]\n\n8th level (1 slots):\
    \ [[5. Mechanics/Spells/Dominate Monster.md|dominate monster]], [[5. Mechanics/Spells/Power Word Stun.md|power word stun]]\n\
    \n9th level (1 slots): [[5. Mechanics/Spells/Power Word Kill.md|power word kill]]"
  "name": "Spellcasting"
- "desc": "If the lich fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "If it has a phylactery, a destroyed lich gains a new body in dice: 1d10|avg|noform\
    \ (1d10) days, regaining all its hit points and becoming active again. The new\
    \ body appears within 5 feet of the phylactery."
  "name": "Rejuvenation"
- "desc": "The lich has advantage on saving throws against any effect that turns undead."
  "name": "Turn Resistance"
"actions":
- "desc": "Melee Spell Attack: dice: d20+12 (+12) to hit, reach 5 ft., one creature.\
    \ Hit: dice:3d6|text(10) (3d6) cold damage. The target must succeed on a\
    \ DC 18 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]]\
    \ for 1 minute. The target can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralyzing Touch"
"legendary_actions":
- "desc": "The lich casts a cantrip."
  "name": "Cantrip"
- "desc": "The lich uses its Paralyzing Touch."
  "name": "Paralyzing Touch (Costs 2 Actions)"
- "desc": "The lich fixes its gaze on one creature it can see within 10 feet of it.\
    \ The target must succeed on a DC 18 Wisdom saving throw against this magic or\
    \ become [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] for 1 minute.\
    \ The [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success. If a target's saving throw is successful or the effect ends for\
    \ it, the target is immune to the lich's gaze for the next 24 hours."
  "name": "Frightening Gaze (Costs 2 Actions)"
- "desc": "Each non-undead creature within 20 feet of the lich must make a DC 18 Constitution\
    \ saving throw against this magic, taking dice:6d6|text(21) (6d6) necrotic\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Disrupt Life (Costs 3 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), the lich can take a lair\
    \ action to cause one of the following magical effects; the lich can't use the\
    \ same effect two rounds in a row:"
  "name": ""
- "desc": "- The lich rolls a dice: d8|avg|noform (d8) and regains a spell slot\
    \ of that level or lower. If it has no spent spell slots of that level or lower,\
    \ nothing happens.  \n- The lich targets one creature it can see within 30 feet\
    \ of it. A crackling cord of negative energy tethers the lich to the target. Whenever\
    \ the lich takes damage, the target must make a DC 18 Constitution saving throw.\
    \ On a failed save, the lich takes half the damage (rounded down), and the target\
    \ takes the remaining damage. This tether lasts until initiative count 20 on the\
    \ next round or until the lich or the target is no longer in the lich's lair.\
    \  \n- The lich calls forth the spirits of creatures that died in its lair. These\
    \ apparitions materialize and attack one creature that the lich can see within\
    \ 60 feet of it. The target must succeed on a DC 18 Constitution saving throw,\
    \ taking dice:15d6|text(52) (15d6) necrotic damage on a failed save, or half\
    \ as much damage on a success. The apparitions then disappear.  "
  "name": ""
"source":
- "MM"
- "CoS"
- "GoS"
- "IDRotF"
- "TCE"
- "PSI"
- "SatO"
- "ToFW"
- "BMT"
"image": "5. Mechanics/Bestiary/Undead/token/lich.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
