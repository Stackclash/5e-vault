---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 17
environments: desert
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/17
  - monster/environment/desert
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Androsphinx
---
# [[5. Mechanics\Bestiary\Monstrosity\Androsphinx.md|Androsphinx]]
*Source: Monster Manual p. 281. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

An androsphinx bears the head of a humanoid male on its lion's body. Outwardly gruff and downcast, it often begins conversations with insults or negative observations. Beneath this gruff exterior, however, an androsphinx has a noble heart. It has no wish to lie or deceive, but it doesn't give away information readily, choosing its words as wisely as it guards its secrets.

An androsphinx tests the courage and valor of supplicants, not only by forcing them to complete quests but also with its terrible roar, which echoes for miles as it terrifies and deafens nearby creatures. Those who pass its tests may be rewarded with a heroes' feast.

## Sphinxes

In sacred isolation, a sphinx guards the secrets and treasures of the gods. As it calmly regards each new party that comes before it, the bones of supplicants and quest seekers that failed to pass its tests lie scattered around its lair. Its great wings sweep along its flanks, its tawny leonine body rippling with muscle and possessed of forepaws powerful enough to tear a humanoid in half.

### Divine Guardians

Sphinxes test the worth of those who seek the treasures of the gods, whether forgotten secrets or mighty spells, artifacts or magical gateways. Creatures that choose to face a sphinx's test are bound to that test unto death, and only those worthy will survive it. The rest the sphinx destroys.

Some sphinxes are high priests of the gods that create them, but most are simply embodied spirits, brought into the mortal realm by devout prayer or direct intervention. A sphinx maintains its vigil tirelessly, not needing to sleep or eat. It rarely engages with others of its kind, knowing no other life except its sacred mission.

### Magical Tests

The secrets and treasures a sphinx guards remain under divine protection, so that when a creature fails a sphinx's test, the path to the object or knowledge it guards vanishes. Even if a sphinx is attacked and defeated, a quester will still fail to gain the secret it sought-and will make an enemy of the god that placed the sphinx as a guardian.

Benign deities sometimes grant a sphinx the power to remove supplicants that fail their tests, transporting them away and ensuring that they never encounter the sphinx again. However, those who fail a sphinx's test typically meet a gruesome end beneath its claws.

### Extraplanar Beings

Mortals that encounter sphinxes do so most often in ancient tombs and ruins, but some sphinxes can access extraplanar realms. A conversation with a sphinx that begins between tumbled stone walls might suddenly shift to an alien locale, such as a life-sized game board or a daunting cliff that must be climbed in a howling storm. Sometimes a sphinx must be summoned from such an extradimensional space, with supplicants calling it from its empty lair. Only those the sphinx deems worthy gain admittance to its realm.

### Fallen Sphinxes

Whether through the weariness of the ages, regret at the slaughter of innocents, or dreams of worship by supplicants that attempt to bargain their way to knowledge, some sphinxes break free of their divine command. However, even if a sphinx's alignment and loyalties drift in this way, it never leaves the place it guards or grants its secrets to any except creatures it deems worthy.

> [!quote] A quote from Riddle of the gynosphinx of White Plume Mountain  
> 
> Round she is, yet flat as a board
> 
> Altar of the Lupine Lords
> 
> Jewel on black velvet, pearl in the sea
> 
> Unchanged but e'erchanging, eternally.

### A Sphinx's Lair

A sphinx presides over an ancient temple, sepulcher, or vault, within which are hidden divine secrets and treasures beyond the reach of mortals.

```statblock
"name": "Androsphinx"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "199"
"hit_dice": "19d10 + 95"
"modifier": !!int "0"
"stats":
  - !!int "22"
  - !!int "10"
  - !!int "20"
  - !!int "16"
  - !!int "18"
  - !!int "23"
"speed": "40 ft., fly 60 ft."
"saves":
  - "dexterity": "+6"
  - "constitution": "+11"
  - "intelligence": "+9"
  - "wisdom": "+10"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+9"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+10"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+15"
"damage_immunities": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "truesight 120 ft., passive Perception 20"
"languages": "Common, Sphinx"
"cr": "17"
"traits":
  - "desc": "The sphinx is a 12th-level spellcaster. Its spellcasting ability is Wisdom\
      \ (spell save DC 18, +10 to hit with spell attacks). It requires no material\
      \ components to cast its spells. The sphinx has the following cleric spells\
      \ prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]],\
      \ [[5. Mechanics/Spells/Spare The Dying.md|spare the dying]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
      \n1st level (4 slots): [[5. Mechanics/Spells/Command.md|command]], [[5. Mechanics/Spells/Detect Evil And Good.md|detect\
      \ evil and good]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]],\
      \ [[5. Mechanics/Spells/Zone Of Truth.md|zone of truth]]\n\n3rd level (3 slots):\
      \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Tongues.md|tongues]]\n\
      \n4th level (3 slots): [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Freedom Of Movement.md|freedom\
      \ of movement]]\n\n5th level (2 slots):\
      \ [[5. Mechanics/Spells/Flame Strike.md|flame strike]], [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\n\
      \n6th level (1 slots): [[5. Mechanics/Spells/Heroes Feast.md|heroes' feast]]"
    "name": "Spellcasting"
  - "desc": "The sphinx is immune to any effect that would sense its emotions or read\
      \ its thoughts, as well as any divination spell that it refuses. Wisdom ([[/5. Mechanics/Rules/Skills.md#Insight|Insight]])\
      \ checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
    "name": "Inscrutable"
  - "desc": "The sphinx's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The sphinx makes two claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 17\
      \ (2d10 + 6) slashing damage."
    "name": "Claw"
  - "desc": "The sphinx emits a magical roar. Each time it roars before finishing\
      \ a long rest, the roar is louder and the effect is different, as detailed below.\
      \ Each creature within 500 feet of the sphinx and able to hear the roar must\
      \ make a saving throw.\n\n- First Roar. Each creature that fails a DC 18\
      \ Wisdom saving throw is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] creature\
      \ can repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success.  \n- Second Roar. Each creature that fails a DC\
      \ 18 Wisdom saving throw is [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]]\
      \ and [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] for 1 minute.\
      \ A [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]] creature is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
      \ and can repeat the saving throw at the end of each of its turns, ending the\
      \ effect on itself on a success.  \n- Third Roar. Each creature makes a\
      \ DC 18 Constitution saving throw. On a failed save, a creature takes 44 (8d10)\
      \ thunder damage and is knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].\
      \ On a successful save, the creature takes half as much damage and isn't knocked\
      \ [[/5. Mechanics/Rules/Conditions.md#Prone|prone]].  "
    "name": "Roar (3/Day)"
"legendary_actions":
  - "desc": "The sphinx makes one claw attack."
    "name": "Claw Attack"
  - "desc": "The sphinx magically teleports, along with any equipment it is wearing\
      \ or carrying, up to 120 feet to an unoccupied space it can see."
    "name": "Teleport (Costs 2 Actions)"
  - "desc": "The sphinx casts a spell from its list of prepared spells, using a spell\
      \ slot as normal."
    "name": "Cast a Spell (Costs 3 Actions)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the sphinx can take\
      \ a lair action to cause one of the following magical effects; the sphinx can't\
      \ use an effect again until it finishes a short or long rest:"
    "name": ""
  - "desc": "- The flow of time is altered such that every creature in the lair must\
      \ reroll initiative. The sphinx can choose not to reroll.  \n- The effects of\
      \ time are altered such that every creature in the lair must succeed on a DC\
      \ 15 Constitution saving throw or become d20 years older or younger (the sphinx's\
      \ choice), but never any younger than 1 year old. A [[5. Mechanics/Spells/Greater Restoration.md|greater restoration]]\
      \ spell can restore a creature's age to normal.  \n- The flow of time within\
      \ the lair is altered such that everything within moves up to 10 years forward\
      \ or backward (sphinx's choice). Only the sphinx is immediately aware of the\
      \ time change. A [[5. Mechanics/Spells/Wish.md|wish]] spell can return the caster\
      \ and up to seven other creatures designated by the caster to their normal time.\
      \  \n- The sphinx shifts itself and up to seven other creatures it can see within\
      \ in its lair to another plane of existence. Once outside its lair, the sphinx\
      \ can't use lair actions, but it can return to its lair as a bonus action on\
      \ its turn, taking up to seven creatures with it.  "
    "name": ""
"source":
  - "MM"
"image": "5. Mechanics/Bestiary/Monstrosity/token/androsphinx.webp"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
