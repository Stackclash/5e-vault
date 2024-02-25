---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/mm
  - monster/cr/13
  - monster/environment/urban
  - monster/size/medium
  - monster/type/fiend
statblock: inline
aliases:
  - Rakshasa
---
# [[5. Mechanics\Bestiary\Fiend\Rakshasa.md|Rakshasa]]
*Source: Monster Manual p. 257, Eberron: Rising from the Last War, Tasha's Cauldron of Everything. Available in the SRD.*

The rakshasa employs delicacy and misdirection in its pursuit of dominion over others. Few creatures ever see the fiend in its true form, for it can take on any guise it wants, although it prefers to masquerade as someone powerful or influential: a noble, cardinal, or rich merchant, for example. A rakshasa's true form combines the features of a human and a tiger, with one noteworthy deformity: its palms are where the backs of the hands would be on a human.

## Evil Spirits in Mortal Flesh

Rakshasas originated long ago in the Nine Hells, when powerful devils created a dark ritual to free their essence from their fiendish bodies in order to escape the Lower Planes. A rakshasa enters the Material Plane to feed its appetite for humanoid flesh and evil schemes. It selects its prey with care, taking pains to keep its presence in the world a secret.

## Evil Reborn

For a rakshasa, death on the Material Plane means an agonizing and torturous return to the Nine Hells, where its essence remains trapped until its body reforms-a process that can take months or years.

When the rakshasa is reborn, it has all the memories and knowledge of its former life, and it seeks retribution against the one who slew it. If the target has somehow slipped through its grasp, the rakshasa might punish its killer's family, friends, or descendants.

Like devils, rakshasas killed in the Nine Hells are forever destroyed.

> [!quote]- A quote from Rakshasa maxim  
> 
> Slay me once, shame on you.
> 
> Slay me twice, shame on me.


```statblock
"name": "Rakshasa"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "110"
"hit_dice": "13d8 + 52"
"stats":
- !!int "14"
- !!int "17"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "20"
"speed": "40 ft."
"skillsaves":
  "Deception": !!int "10"
  "Insight": !!int "8"
"damage_vulnerabilities": "piercing from magic weapons wielded by good creatures"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Infernal"
"cr": "13"
"traits":
- "desc": "The rakshasa's innate spellcasting ability is Charisma (spell save DC 18,\
    \ dice: d20+10 (+10 to hit) with spell attacks). The rakshasa can innately cast\
    \ the following spells, requiring no material components:\n\nAt will: [detect\
    \ thoughts](compendium/spells/detect-thoughts.md), [[5. Mechanics/Spells/Disguise Self.md|disguise self]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]]\n\
    \n1/day each: [[5. Mechanics/Spells/Dominate Person.md|dominate person]], [[5. Mechanics/Spells/Fly.md|fly]],\
    \ [[5. Mechanics/Spells/Plane Shift.md|plane shift]], [[5. Mechanics/Spells/True Seeing.md|true seeing]]\n\
    \n3/day each: [[5. Mechanics/Spells/Charm Person.md|charm person]], [[5. Mechanics/Spells/Detect Magic.md|detect magic]],\
    \ [[5. Mechanics/Spells/Invisibility.md|invisibility]], [[5. Mechanics/Spells/Major Image.md|major image]],\
    \ [[5. Mechanics/Spells/Suggestion.md|suggestion]]"
  "name": "innate"
- "desc": "The rakshasa can't be affected or detected by spells of 6th level or lower\
    \ unless it wishes to be. It has advantage on saving throws against all other\
    \ spells and magical effects."
  "name": "Limited Magic Immunity"
"actions":
- "desc": "The rakshasa makes two claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 2|avg (2d6 + 2) slashing damage, and the target is cursed\
    \ if it is a creature. The magical curse takes effect whenever the target takes\
    \ a short or long rest, filling the target's thoughts with horrible images and\
    \ dreams. The cursed target gains no benefit from finishing a short or long rest.\
    \ The curse lasts until it is lifted by a [[5. Mechanics/Spells/Remove Curse.md|remove curse]]\
    \ spell or similar magic."
  "name": "Claw"
"source":
- "MM"
- "TftYP"
- "WDMM"
- "GoS"
- "ERLW"
- "TCE"
- "CM"
"image": "5. Mechanics/Bestiary/Fiend/token/rakshasa.webp"
```
^statblock

## Environment

urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
