---
cssclass: json5e-monster
tags:
- compendium/src/5e/erlw
- monster/size/medium
- monster/type/humanoid/any-race
aliases: ["Magewright"]
---
# Magewright
*Source: Eberron: Rising from the Last War p. 318*  

In Khorvaire, magic is part of everyday life. A chef might use [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]] to heat and season food, while a blacksmith uses [[5. Mechanics/Spells/Mending.md|mending]] to perform minor repairs and [[5. Mechanics/Spells/Guidance.md|guidance]] to help inspire their work. Those who work minor magic into their labors are called magewrights.

Far more limited in magical power than a typical spellcaster, a magewright is dedicated to learning a handful of spells, and magewrights cast their non-cantrip spells as rituals—even spells that can't normally be cast in this way. Most magewright rituals take 10 minutes to perform, but certain complex rituals can take up to 1 hour. However long the ritual takes, it requires extra material components, usually in the form of dragonshards.

## Creating a Magewright

The magewright stat block provides the baseline statistics for a magewright. You then add to that baseline by choosing a specialty from the Magewright Specialties table, or roll for one. The specialty determines additional spells the magewright knows, including ones that can be cast only as rituals. The specialty also gives the magewright more proficiencies.

**Magewright Specialties**

| dice: d8 | Specialty | Spells | Proficiencies |
|----------|-----------|--------|---------------|
| 1 | Artisan | [[5. Mechanics/Spells/Guidance.md|Guidance]], [[5. Mechanics/Spells/Mending.md|mending]] | One type of artisan's tools |
| 2 | Entertainer | [[5. Mechanics/Spells/Minor Illusion.md|Minor illusion]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]. Ritual only: [[5. Mechanics/Spells/Disguise Self.md|disguise self]]. | [[/5. Mechanics/Rules/Skills.md#Performance|Performance]] (+3) |
| 3 | Healer | [[5. Mechanics/Spells/Resistance.md|Resistance]], [[5. Mechanics/Spells/Spare The Dying.md|spare the dying]]. Ritual only: [[5. Mechanics/Spells/Detect Poison And Disease.md|detect poison and disease]], [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]] (1 hour). | [[/5. Mechanics/Rules/Skills.md#Medicine|Medicine]] (+4), [[5. Mechanics/Items/Herbalism Kit.md|herbalism kit]] |
| 4 | Lamplighter | [[5. Mechanics/Spells/Light.md|Light]]. Ritual only: [[5. Mechanics/Spells/Continual Flame.md|continual flame]] (1 hour). | [[5. Mechanics/Items/Tinkers Tools.md|Tinker's tools]] |
| 5 | Locksmith | [[5. Mechanics/Spells/Mending.md|Mending]]. Ritual only: [[5. Mechanics/Spells/Arcane Lock.md|arcane lock]] (1 hour), [[5. Mechanics/Spells/Knock.md|knock]]. | [[5. Mechanics/Items/Thieves Tools.md|Thieves' tools]], [[5. Mechanics/Items/Tinkers Tools.md|tinker's tools]] |
| 6 | Mediator | [[5. Mechanics/Spells/Guidance.md|Guidance]]. Ritual only: [[5. Mechanics/Spells/Comprehend Languages.md|comprehend languages]], [[5. Mechanics/Spells/Zone Of Truth.md|zone of truth]]. | [[/5. Mechanics/Rules/Skills.md#Insight|Insight]] (+4), [[/5. Mechanics/Rules/Skills.md#Persuasion|Persuasion]] (+3) |
| 7 | Medium | [[5. Mechanics/Spells/Minor Illusion.md|Minor illusion]]. Ritual only: [[5. Mechanics/Spells/Speak With Dead.md|speak with dead]]. | [[/5. Mechanics/Rules/Skills.md#Deception|Deception]] (+3), [[/5. Mechanics/Rules/Skills.md#Religion|Religion]] (+4) |
| 8 | Oracle | [[5. Mechanics/Spells/Guidance.md|Guidance]]. Ritual only: [[5. Mechanics/Spells/Augury.md|augury]], [[5. Mechanics/Spells/Divination.md|divination]] (1 hour). | [[/5. Mechanics/Rules/Skills.md#History|History]] (+4), [[/5. Mechanics/Rules/Skills.md#Religion|Religion]] (+4) |
^magewright-specialties

```statblock
"name": "Magewright"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "9"
"hit_dice": "2d8"
"stats":
- !!int "11"
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "14"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Arcana": "+4"
"senses": "passive Perception 12"
"languages": "Common plus any two languages"
"cr": "0"
"traits":
- "desc": "The magewright's spellcasting ability is Intelligence (spell save DC 12).\
    \ To cast one of its rituals, the magewright must provide additional material\
    \ components whose value in gold pieces is 20 times the spell's level. These components\
    \ are consumed when the ritual is finished. The magewright knows the following\
    \ spells:\n\nAt will: [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]]"
  "name": "spells"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice: d20+3 (+3 to hit), reach 5 ft.\
    \ or range 20/60 ft., one target. Hit: dice: 1d4 + 1|avg (1d4 + 1) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "ERLW"
"image": "5. Mechanics/Bestiary/Humanoid/token/magewright.png"
```
^statblock