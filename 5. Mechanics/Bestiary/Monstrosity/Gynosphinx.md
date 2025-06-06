---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 11
environments: desert
size: Large
tags:
  - compendium/src/5e/mm
  - monster/cr/11
  - monster/environment/desert
  - monster/size/large
  - monster/type/monstrosity
aliases:
  - Gynosphinx
---
# [[5. Mechanics\Bestiary\Monstrosity\Gynosphinx.md|Gynosphinx]]
*Source: Monster Manual p. 282. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

A gynosphinx bears the head of a humanoid female. Many have the regal countenances of worldly queens, but some are marked with wild, leonine features. A gynosphinx's eyes see beyond the present time and place, and penetrate veils of invisibility and magic.

Supplicants who look deep into those eyes might find themselves magically displaced, banished to some far flung plane where a difficult trial awaits them.

Gynosphinxes are virtual libraries of knowledge and lore. They ask riddles and present puzzles to test the wit of supplicants that come to learn their secrets. Some are willing to bargain with such supplicants for treasure or service.

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
"name": "Gynosphinx"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "18"
  - !!int "18"
  - !!int "18"
"speed": "40 ft., fly 60 ft."
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Arcana|Arcana]]"
    "desc": "+12"
  - "name": "[[/5. Mechanics/Rules/Skills.md#History|History]]"
    "desc": "+12"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+8"
  - "name": "[[/5. Mechanics/Rules/Skills.md#Religion|Religion]]"
    "desc": "+8"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
"senses": "truesight 120 ft., passive Perception 18"
"languages": "Common, Sphinx"
"cr": "11"
"traits":
  - "desc": "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
      \ (spell save DC 16, +8 to hit with spell attacks). It requires no material\
      \ components to cast its spells. The sphinx has the following wizard spells\
      \ prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
      \ [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]\n\
      \n1st level (4 slots): [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
      \ [[5. Mechanics/Spells/Identify.md|identify]], [[5. Mechanics/Spells/Shield.md|shield]]\n\
      \n2nd level (3 slots): [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Locate Object.md|locate\
      \ object]], [[5. Mechanics/Spells/Suggestion.md|suggestion]]\n\
      \n3rd level (3 slots): [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]],\
      \ [[5. Mechanics/Spells/Remove Curse.md|remove curse]], [[5. Mechanics/Spells/Tongues.md|tongues]]\n\
      \n4th level (3 slots): [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Greater Invisibility.md|greater\
      \ invisibility]]\n\n5th level (1\
      \ slots): [[5. Mechanics/Spells/Legend Lore.md|legend lore]]"
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
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d8 + 4) slashing damage."
    "name": "Claw"
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
"image": "5. Mechanics/Bestiary/Monstrosity/token/gynosphinx.webp"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
