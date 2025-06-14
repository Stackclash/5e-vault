---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 'grassland, forest, hill'
size: Medium
tags:
  - compendium/src/5e/mm
  - monster/cr/4
  - monster/environment/forest
  - monster/environment/grassland
  - monster/environment/hill
  - monster/size/medium
  - monster/type/humanoid/human
  - monster/type/humanoid/shapechanger
aliases:
  - Wereboar
---
# [[5. Mechanics\Bestiary\Humanoid\Wereboar.md|Wereboar]]
*Source: Monster Manual p. 209, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Wereboars are ill-tempered and vulgar brutes. As humanoids, they are stocky and muscular, with short, stiff hair. In their humanoid and hybrid forms, they use heavy weapons, while in hybrid or animal form, they gain a devastating goring attack through which their curse is spread. A wereboar infects other creatures indiscriminately, relishing the fact that the more its victims resist the curse, the more savage and bestial they become.

Wereboars live in small family groups in remote forest areas, building ramshackle huts or dwelling in caves. They are suspicious of strangers but sometimes ally themselves with orcs.

## Lycanthropes

One of the most ancient and feared of all curses, lycanthropy can transform the most civilized humanoid into a ravening beast. In its natural humanoid form, a creature cursed by lycanthropy appears as its normal self. Over time, however, many lycanthropes acquire features suggestive of their animal form. In that animal form, a lycanthrope resembles a powerful version of a normal animal. On close inspection, its eyes show a faint spark of unnatural intelligence and might glow red in the dark.

Evil lycanthropes hide among normal folk, emerging in animal form at night to spread terror and bloodshed, especially under a full moon. Good lycanthropes are reclusive and uncomfortable around other civilized creatures, often living alone in wilderness areas far from villages and towns.

### Curse of Lycanthropy

A humanoid creature can be afflicted with the curse of lycanthropy after being wounded by a lycanthrope, or if one or both of its parents are lycanthropes. A [[5. Mechanics/Spells/Remove Curse.md|remove curse]] spell can rid an afflicted lycanthrope of the curse, but a natural born lycanthrope can be freed of the curse only with a wish.

A lycanthrope can either resist its curse or embrace it. By resisting the curse, a lycanthrope retains its normal alignment and personality while in humanoid form. It lives its life as it always has, burying deep the bestial urges raging inside it. However, when the full moon rises, the curse becomes too strong to resist, transforming the individual into its beast form-or into a horrible hybrid form that combines animal and humanoid traits. When the moon wanes, the beast within can be controlled once again. Especially if the cursed creature is unaware of its condition, it might not remember the events of its transformation, though those memories often haunt a lycanthrope as bloody dreams.

Some individuals see little point in fighting the curse and accept what they are. With time and experience, they learn to master their shapechanging ability and can assume beast form or hybrid form at will. Most lycanthropes that embrace their bestial natures succumb to bloodlust, becoming evil, opportunistic creatures that prey on the weak.

> [!note] Player Characters as Lycanthropes
> 
> A character who becomes a lycanthrope retains his or her statistics except as specified by lycanthrope type. The character gains the lycanthrope's speeds in non-humanoid form, damage immunities, traits, and actions that don't involve equipment. The character is proficient with the lycanthrope's natural attacks, such as its bite or claws, which deal damage as shown in the lycanthrope's statistics. The character can't speak while in animal form.
> 
> A non-lycanthrope humanoid hit by an attack that carries the curse of lycanthropy must succeed on a Constitution saving throw (DC 8 + the lycanthrope's proficiency bonus + the lycanthrope's Constitution modifier) or be cursed. If the character embraces the curse, his or her alignment becomes the one defined for the lycanthrope. The DM is free to decide that a change in alignment places the character under DM control until the curse of lycanthropy is removed.
> 
> The following information applies to specific lycanthropes.
> 
> **[[5. Mechanics/Bestiary/Humanoid/Werebear.md|Werebear]].** The character gains a Strength of 19 if his or her score isn't already higher, and a +1 bonus to AC while in bear or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.
> 
> **[[5. Mechanics/Bestiary/Humanoid/Wereboar.md|Wereboar]].** The character gains a Strength of 17 if his or her score isn't already higher, and a +1 bonus to AC while in boar or hybrid form (from natural armor). Attack and damage rolls for the tusks are based on Strength. For the Charge trait, the DC is 8 + the character's proficiency bonus + Strength modifier.
> 
> **[[5. Mechanics/Bestiary/Humanoid/Wererat.md|Wererat]].** The character gains a Dexterity of 15 if his or her score isn't already higher. Attack and damage rolls for the bite are based on whichever is higher of the character's Strength and Dexterity.
> 
> **[[5. Mechanics/Bestiary/Humanoid/Weretiger.md|Weretiger]].** The character gains a Strength of 17 if his or her score isn't already higher. Attack and damage rolls for the natural weapons are based on Strength. For the Pounce trait, the DC is 8 + the character's proficiency bonus + Strength modifier.
> 
> **[[5. Mechanics/Bestiary/Humanoid/Werewolf.md|Werewolf]].** The character gains a Strength of 15 if his or her score isn't already higher, and a +1 bonus to AC while in wolf or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.
^player-characters-as-lycanthropes

```statblock
"name": "Wereboar"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "10"
"ac_class": "11 from natural armor in boar or hybrid form"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "10"
  - !!int "15"
  - !!int "10"
  - !!int "11"
  - !!int "8"
"speed": "30 ft. (40 ft. in boar form)"
"skillsaves":
  - "name": "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    "desc": "+2"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 12"
"languages": "Common (can't speak in boar form)"
"cr": "4"
"traits":
  - "desc": "The wereboar can use its action to polymorph into a boar-humanoid hybrid\
      \ or into a boar, or back into its true form, which is humanoid. Its statistics,\
      \ other than its AC, are the same in each form. Any equipment it is wearing\
      \ or carrying isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "If the wereboar moves at least 15 feet straight toward a target and then\
      \ hits it with its tusks on the same turn, the target takes an extra 7 (2d6)\
      \ slashing damage. If the target is a creature, it must succeed on a DC 13 Strength\
      \ saving throw or be knocked [[/5. Mechanics/Rules/Conditions.md#Prone|prone]]."
    "name": "Charge (Boar or Hybrid Form Only)"
  - "desc": "If the wereboar takes 14 damage or less that would reduce it to 0 hit\
      \ points, it is reduced to 1 hit point instead."
    "name": "Relentless (Recharges after a Short or Long Rest)"
"actions":
  - "desc": "The wereboar makes two attacks, only one of which can be with its tusks."
    "name": "Multiattack (Humanoid or Hybrid Form Only)"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) bludgeoning damage."
    "name": "Maul (Humanoid or Hybrid Form Only)"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10\
      \ (2d6 + 3) slashing damage. If the target is a humanoid, it must succeed on\
      \ a DC 12 Constitution saving throw or be cursed with wereboar lycanthropy."
    "name": "Tusks (Boar or Hybrid Form Only)"
"source":
  - "MM"
  - "TCE"
"image": "5. Mechanics/Bestiary/Humanoid/token/wereboar.webp"
```
^statblock

## Environment

grassland, forest, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
