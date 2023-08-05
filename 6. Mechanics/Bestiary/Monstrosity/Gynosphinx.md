---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/size/large
- monster/type/monstrosity
statblock: true
statblock-link: "#^statblock"
"name": "Gynosphinx"
"size": "Large"
"type": "monstrosity"
"alignment": "Lawful Neutral"
"ac": !!int "17"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "18"
- !!int "18"
- !!int "18"
"speed": "walk 40 ft., fly 60 ft."
"skillsaves":
  "Religion": !!int "8"
  "Perception": !!int "8"
  "History": !!int "12"
  "Arcana": !!int "12"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "psychic"
"condition_immunities": "charmed, frightened"
"senses": "truesight 120 ft., passive Perception 18"
"languages": "Common, Sphinx"
"cr": "11"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 16, dice: d20+8 (+8 to hit) with spell attacks). It requires\
    \ no material components to cast its spells. The sphinx has the following wizard\
    \ spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/mage-hand.md\|mage hand]],\
    \ [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]\n\
    \n1st level (4 1st-level slots): [[/6. Mechanics/Spells/detect-magic.md\|detect magic]],\
    \ [[/6. Mechanics/Spells/identify.md\|identify]], [[/6. Mechanics/Spells/shield.md\|shield]]\n\
    \n2nd level (3 2nd-level slots): [[/6. Mechanics/Spells/darkness.md\|darkness]],\
    \ [[/6. Mechanics/Spells/locate-object.md\|locate object]], [[/6. Mechanics/Spells/suggestion.md\|suggestion]]\n\
    \n3rd level (3 3rd-level slots): [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]],\
    \ [[/6. Mechanics/Spells/remove-curse.md\|remove curse]], [[/6. Mechanics/Spells/tongues.md\|tongues]]\n\
    \n4th level (3 4th-level slots): [[/6. Mechanics/Spells/banishment.md\|banishment]],\
    \ [[/6. Mechanics/Spells/greater-invisibility.md\|greater invisibility]]\n\n5th\
    \ level (1 5th-level slots): [[/6. Mechanics/Spells/legend-lore.md\|legend lore]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sphinx is immune to any effect that would sense its emotions or read\
    \ its thoughts, as well as any divination spell that it refuses. Wisdom (Insight)\
    \ checks made to ascertain the sphinx's intentions or sincerity have disadvantage."
  "name": "Inscrutable"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sphinx's weapon attacks are magical."
  "name": "Magic Weapons"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sphinx makes two claw attacks."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) slashing damage."
  "name": "Claw"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sphinx makes one claw attack."
  "name": "Claw Attack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sphinx magically teleports, along with any equipment it is wearing\
    \ or carrying, up to 120 feet to an unoccupied space it can see."
  "name": "Teleport (Costs 2 Actions)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The sphinx casts a spell from its list of prepared spells, using a spell\
    \ slot as normal."
  "name": "Cast a Spell (Costs 3 Actions)"
"source":
- "MM"
- "TftYP"
- "IMR"
- "MOT"
- "JttRC"
"image": "/compendium/bestiary/monstrosity/token/gynosphinx.png"
aliases: ["Gynosphinx"]
---
# Gynosphinx
*Source: Monster Manual p. 282, Tales from the Yawning Portal, Infernal Machine Rebuild, Mythic Odysseys of Theros, Journeys through the Radiant Citadel*  

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

> [!quote]- A quote from Riddle of the gynosphinx of White Plume Mountain  
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

## Stat Block

```ad-statblock
title: Gynosphinx
![[/6. Mechanics/Bestiary/Monstrosity/Token/gynosphinx.png#token]]
*Large monstrosity, Lawful Neutral*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 16d10 + 48|text(136)` (16d10 + 48) 
- **Speed** walk 40 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|15 (+2)|16 (+3)|18 (+4)|18 (+4)|18 (+4)|

- **Proficiency Bonus** +4
- **Saving Throws** ⏤
- **Skills** Arcana +12, History +12, Perception +8, Religion +8
- **Senses** truesight 120 ft., passive Perception 18
- **Damage Resistances** bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** psychic
- **Condition Immunities** charmed, frightened
- **Languages** Common, Sphinx
- **Challenge** 11

## Traits

***Inscrutable.*** The sphinx is immune to any effect that would sense its emotions or read its thoughts, as well as any divination spell that it refuses. Wisdom (Insight) checks made to ascertain the sphinx's intentions or sincerity have disadvantage.

***Magic Weapons.*** The sphinx's weapon attacks are magical.

***Spellcasting.*** The sphinx is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, `dice: d20+8` (+8 to hit) with spell attacks). It requires no material components to cast its spells. The sphinx has the following wizard spells prepared:

**Cantrips (at will)**: [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/minor-illusion.md\|minor illusion]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]]

**1st level (4 1st-level slots)**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/identify.md\|identify]], [[/6. Mechanics/Spells/shield.md\|shield]]

**2nd level (3 2nd-level slots)**: [[/6. Mechanics/Spells/darkness.md\|darkness]], [[/6. Mechanics/Spells/locate-object.md\|locate object]], [[/6. Mechanics/Spells/suggestion.md\|suggestion]]

**3rd level (3 3rd-level slots)**: [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/remove-curse.md\|remove curse]], [[/6. Mechanics/Spells/tongues.md\|tongues]]

**4th level (3 4th-level slots)**: [[/6. Mechanics/Spells/banishment.md\|banishment]], [[/6. Mechanics/Spells/greater-invisibility.md\|greater invisibility]]

**5th level (1 5th-level slots)**: [[/6. Mechanics/Spells/legend-lore.md\|legend lore]]

## Actions

***Multiattack.*** The sphinx makes two claw attacks.

***Claw.*** *Melee Weapon Attack:* `dice: d20+8` (+8 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 4` (`2d8 + 4`) slashing damage.

## Legendary Actions

***Claw Attack.*** The sphinx makes one claw attack.

***Teleport (Costs 2 Actions).*** The sphinx magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see.

***Cast a Spell (Costs 3 Actions).*** The sphinx casts a spell from its list of prepared spells, using a spell slot as normal.

## Lair actions

On initiative count 20 (losing initiative ties), the sphinx can take a lair action to cause one of the following magical effects; the sphinx can't use an effect again until it finishes a short or long rest:

- The flow of time is altered such that every creature in the lair must reroll initiative. The sphinx can choose not to reroll.  
- The effects of time are altered such that every creature in the lair must succeed on a DC 15 Constitution saving throw or become `dice: 1d20` (`1d20`) years older or younger (the sphinx's choice), but never any younger than 1 year old. A [[/6. Mechanics/Spells/greater-restoration.md\|greater restoration]] spell can restore a creature's age to normal.  
- The flow of time within the lair is altered such that everything within moves up to 10 years forward or backward (sphinx's choice). Only the sphinx is immediately aware of the time change. A [[/6. Mechanics/Spells/wish.md\|wish]] spell can return the caster and up to seven other creatures designated by the caster to their normal time.  
- The sphinx shifts itself and up to seven other creatures it can see within in its lair to another plane of existence. Once outside its lair, the sphinx can't use lair actions, but it can return to its lair as a bonus action on its turn, taking up to seven creatures with it.  
```
^statblock

## Environment

desert