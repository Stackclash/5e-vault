---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 15
environments: desert
size: Medium
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\15
  - monster\Environment\Desert
  - monster\Size\Medium
  - monster\Type\Undead
aliases:
  - Mummy Lord
---
# [[5. Mechanics\Bestiary\Undead\Mummy Lord.md|Mummy Lord]]
*Source: Monster Manual p. 229, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Raised by dark funerary rituals, a mummy shambles from the shrouded stillness of a time-lost temple or tomb. Having been awoken from its rest, it punishes transgressors with the power of its unholy curse.

## Preserved Wrath

The long burial rituals that accompany a mummy's entombment help protect its body from rot. In the embalming process, the newly dead creature's organs are removed and placed in special jars, and its corpse is treated with preserving oils, herbs, and wrappings. After the body has been prepared, the corpse is typically wrapped in linen bandages.

## The Will of Dark Gods

An undead mummy is created when the priest of a death god or other dark deity ritually imbues a prepared corpse with necromantic magic. The mummy's linen wrappings are inscribed with necromantic markings before the burial ritual concludes with an invocation to darkness. As a mummy endures in undeath, it animates in response to conditions specified by the ritual. Most commonly, a transgression against its tomb, treasures, lands, or former loved ones will cause a mummy to rise.

## The Punished

Once deceased, an individual has no say in whether or not its body is made into a mummy. Some mummies were powerful individuals who displeased a high priest or pharaoh, or who committed crimes of treason, adultery, or murder. As punishment, they were cursed with eternal undeath, embalmed, mummified, and sealed away. Other times, mummies acting as tomb guardians are created from slaves put to death specifically to serve a greater purpose.

## Creature of Ritual

A mummy obeys the conditions and parameters laid down by the rituals that created it, driven only to punish transgressors. The overwhelming terror that foreshadows a mummy's attack can leave the intended victim paralyzed with fright. In the days following a mummy's touch, a victim's body rots from the outside in, until nothing but dust remains.

## Ending a Mummy's Curse

Rare magic can undo or dispel the ritual that gave rise to a mummy, allowing it to truly die. More commonly, a mummy can be sent back to its endless rest by undoing the transgression that caused it to rise. A sacred idol might be replaced in its niche, a stolen treasure could be returned to its tomb, or a temple might be purified of despoiling bloodshed.

More ephemeral or permanent offenses, such as revealing a secret the mummy wished kept or killing an individual the mummy loved, can't be so easily remedied. In such cases, a mummy might slaughter all the creatures responsible and still not sate its wrath.

## Undead Archives

Though they seldom bother to do so, mummies can speak. As a result, some serve as undead repositories of lost lore, and can be consulted by the descendants of those who created them. Powerful individuals sometimes intentionally sequester mummies away for occasional consultation.

## Undead Nature

A mummy doesn't require air, food, drink, or sleep.

> [!quote] A quote from X the Mystic's 7th rule of dungeon survival  
> 
> Before opening a sarcophagus, light a torch.

## Mummy Lord

In the tombs of the ancients, tyrannical monarchs and the high priests of dark gods lie in dreamless rest, waiting for the time when they might reclaim their thrones and reforge their ancient empires. The regalia of their terrible rule still adorns their linen-wrapped bodies, their moldering robes stitched with evil symbols and bronze armor etched with devices of dynasties that fell a thousand years before.

Under the direction of the most powerful priests, the ritual that creates a mummy can be increased in potency. The mummy lord that rises from such a ritual retains the memories and personality of its former life, and is gifted with supernatural resilience. Dead emperors wield the same infamous rune-marked blades that they did in legend. Sorcerer lords work the forbidden magic that once controlled a terrified populace, and the dark gods reward dead priest-kings' prayers by imparting divine spells.

### Heart of the Mummy Lord

As part of the ritual that creates a mummy lord, the creature's heart and viscera are removed from the corpse and placed in canopic jars. These jars are usually carved from limestone or made of pottery, etched or painted with religious hieroglyphs.

As long as its shriveled heart remains intact, a mummy lord can't be permanently destroyed. When it drops to 0 hit points, the mummy lord turns to dust and re-forms at full strength 24 hours later, rising out of dust in close proximity to the canopic jar containing its heart. A mummy lord can be destroyed or prevented from re-forming by burning its heart to ashes. For this reason, a mummy lord usually keeps its heart and viscera in a hidden tomb or vault.

The mummy lord's heart has AC 5, 25 hit points, and immunity to all damage except fire.

## A Mummy Lord's Lair

A mummy lord watches over an ancient temple or tomb that is protected by lesser undead and rigged with traps. Hidden in this temple is the sarcophagus where a mummy lord keeps its greatest treasures. A mummy lord encountered in its lair has a challenge rating of 16 (15,000 XP).

```statblock
"name": "Mummy Lord"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "18"
- !!int "10"
- !!int "17"
- !!int "11"
- !!int "18"
- !!int "16"
"speed": "20 ft."
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "9"
  "Intelligence": !!int "5"
  "Constitution": !!int "8"
"skillsaves":
  "Religion": !!int "5"
  "History": !!int "5"
"damage_vulnerabilities": "fire"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "the languages it knew in life"
"cr": "15"
"traits":
- "desc": "The mummy lord is a 10th-level spellcaster. Its spellcasting ability is\
    \ Wisdom (spell save DC 17, +9 to hit with spell attacks). The mummy lord has\
    \ the following cleric spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Sacred Flame.md|sacred flame]],\
    \ [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\n1st level (4 slots):\
    \ [[5. Mechanics/Spells/Command.md|command]], [[5. Mechanics/Spells/Guiding Bolt.md|guiding bolt]],\
    \ [[5. Mechanics/Spells/Shield Of Faith.md|shield of faith]]\n\n2nd level (3 slots):\
    \ [[5. Mechanics/Spells/Hold Person.md|hold person]], [[5. Mechanics/Spells/Silence.md|silence]],\
    \ [[5. Mechanics/Spells/Spiritual Weapon.md|spiritual weapon]]\n\n3rd level (3\
    \ slots): [[5. Mechanics/Spells/Animate Dead.md|animate dead]], [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Divination.md|divination]], [[5. Mechanics/Spells/Guardian Of Faith.md|guardian\
    \ of faith]]\n\n5th level (2 slots):\
    \ [[5. Mechanics/Spells/Contagion.md|contagion]], [[5. Mechanics/Spells/Insect Plague.md|insect plague]]\n\
    \n6th level (1 slots): [[5. Mechanics/Spells/Harm.md|harm]]"
  "name": "Spellcasting"
- "desc": "The mummy lord has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
- "desc": "A destroyed mummy lord gains a new body in 24 hours if its heart is intact,\
    \ regaining all its hit points and becoming active again. The new body appears\
    \ within 5 feet of the mummy lord's heart."
  "name": "Rejuvenation"
"actions":
- "desc": "The mummy can use its Dreadful Glare and makes one attack with its rotting\
    \ fist."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (3d6\
    \ + 4) bludgeoning damage plus 21 (6d6) necrotic damage. If the target is a creature,\
    \ it must succeed on a DC 16 Constitution saving throw or be cursed with mummy\
    \ rot. The cursed target can't regain hit points, and its hit point maximum decreases\
    \ by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's\
    \ hit point maximum to 0, the target dies, and its body turns to dust. The curse\
    \ lasts until removed by the [[5. Mechanics/Spells/Remove Curse.md|remove curse]]\
    \ spell or other magic."
  "name": "Rotting Fist"
- "desc": "The mummy lord targets one creature it can see within 60 feet of it. If\
    \ the target can see the mummy lord, it must succeed on a DC 16 Wisdom saving\
    \ throw against this magic or become [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
    \ until the end of the mummy's next turn. If the target fails the saving throw\
    \ by 5 or more, it is also [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
    \ for the same duration. A target that succeeds on the saving throw is immune\
    \ to the Dreadful Glare of all mummies and mummy lords for the next 24 hours."
  "name": "Dreadful Glare"
"legendary_actions":
- "desc": "The mummy lord makes one attack with its rotting fist or uses its Dreadful\
    \ Glare."
  "name": "Attack"
- "desc": "Blinding dust and sand swirls magically around the mummy lord. Each creature\
    \ within 5 feet of the mummy lord must succeed on a DC 16 Constitution saving\
    \ throw or be [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]] until the end\
    \ of the creature's next turn."
  "name": "Blinding Dust"
- "desc": "The mummy lord utters a blasphemous word. Each non-undead creature within\
    \ 10 feet of the mummy lord that can hear the magical utterance must succeed on\
    \ a DC 16 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]\
    \ until the end of the mummy lord's next turn."
  "name": "Blasphemous Word (Costs 2 Actions)"
- "desc": "The mummy lord magically unleashes negative energy. Creatures within 60\
    \ feet of the mummy lord, including ones behind barriers and around corners, can't\
    \ regain hit points until the end of the mummy lord's next turn."
  "name": "Channel Negative Energy (Costs 2 Actions)"
- "desc": "The mummy lord magically transforms into a whirlwind of sand, moves up\
    \ to 60 feet, and reverts to its normal form. While in whirlwind form, the mummy\
    \ lord is immune to all damage, and it can't be [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]], knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], or [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]].\
    \ Equipment worn or carried by the mummy lord remain in its possession."
  "name": "Whirlwind of Sand (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), the mummy lord takes a\
    \ lair action to cause one of the following effects; the mummy lord can't use\
    \ the same effect two rounds in a row:"
  "name": ""
- "desc": "- Each undead creature in the lair can pinpoint the location of each living\
    \ creature within 120 feet of it until initiative count 20 on the next round.\
    \  \n- Each undead in the lair has advantage on saving throws against effects\
    \ that turn undead until initiative count 20 on the next round.  \n- Until initiative\
    \ count 20 on the next round, any non-undead creature that tries to cast a spell\
    \ of 4th level or lower in the mummy lord's lair is wracked with pain. The creature\
    \ can choose another action, but if it tries to cast the spell, it must make a\
    \ DC 16 Constitution saving throw. On a failed save, it takes 1d6 necrotic damage\
    \ per level of the spell, and the spell has no effect and is wasted.  "
  "name": ""
"regional_effects":
- "desc": "A mummy lord's temple or tomb is warped in any of the following ways by\
    \ the creature's dark presence:"
  "name": ""
- "desc": "- Food instantly molders and water instantly evaporates when brought into\
    \ the lair. Other non magical drinks are spoiled - wine turning to vinegar, for\
    \ instance.  \n- [[5. Mechanics/Spells/Divination.md|Divination]] spells cast within\
    \ the lair by creatures other than the mummy lord have a 25 percent chance to\
    \ provide misleading results, as determined by the DM. If a [[5. Mechanics/Spells/Divination.md|divination]]\
    \ spell already has a chance to fail or become unreliable when cast multiple times,\
    \ that chance increases by 25 percent.  \n- A creature that takes treasure from\
    \ the lair is cursed until the treasure is returned. The cursed target has disadvantage\
    \ on all saving throws. The curse lasts until removed by a [[5. Mechanics/Spells/Remove Curse.md|remove curse]]\
    \ spell or other magic.  "
  "name": ""
- "desc": "If the mummy lord is destroyed, these regional effects end immediately."
  "name": ""
"source":
- "MM"
- "TCE"
"image": "5. Mechanics/Bestiary/Undead/token/mummy-lord.webp"
```
^statblock

## Environment

desert

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
