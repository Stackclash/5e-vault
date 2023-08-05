---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/desert
- monster/environment/forest
- monster/environment/grassland
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
statblock: true
statblock-link: "#^statblock"
"name": "Weretiger"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "120"
"hit_dice": "16d8 + 48"
"stats":
- !!int "17"
- !!int "15"
- !!int "16"
- !!int "10"
- !!int "13"
- !!int "11"
"speed": "walk 30 ft. (40 ft. in tiger form)"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common (can't speak in tiger form)"
"cr": "4"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The weretiger can use its action to polymorph into a tiger-humanoid hybrid\
    \ or into a tiger, or back into its true form, which is humanoid. Its statistics,\
    \ other than its size, are the same in each form. Any equipment it is wearing\
    \ or carrying isn't transformed. It reverts to its true form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The weretiger has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the weretiger moves at least 15 feet straight toward a creature and\
    \ then hits it with a claw attack on the same turn, that target must succeed on\
    \ a DC 14 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).\
    \ If the target is [prone](compendium/rules/conditions.md#prone), the weretiger\
    \ can make one bite attack against it as a bonus action."
  "name": "Pounce (Tiger or Hybrid Form Only)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "In humanoid form, the weretiger makes two scimitar attacks or two longbow\
    \ attacks. In hybrid form, it can attack like a humanoid or make two claw attacks."
  "name": "Multiattack (Humanoid or Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d10 + 3|avg (1d10 + 3) piercing damage. If the target is a humanoid,\
    \ it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger\
    \ lycanthropy."
  "name": "Bite (Tiger or Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) slashing damage."
  "name": "Claw (Tiger or Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+5 (+5 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 3|avg (1d6 + 3) slashing damage."
  "name": "Scimitar (Humanoid or Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 2|avg (1d8 + 2) piercing damage."
  "name": "Longbow (Humanoid or Hybrid Form Only)"
"source":
- "MM"
- "ToA"
- "EGW"
- "JttRC"
"image": "/compendium/bestiary/humanoid/token/weretiger.png"
aliases: ["Weretiger"]
---
# Weretiger
*Source: Monster Manual p. 210, Tomb of Annihilation, Explorer's Guide to Wildemount, Journeys through the Radiant Citadel*  

Weretigers are ferocious hunters and warriors with a haughty and fastidious nature. Lithe and sleekly muscular in humanoid form, they are taller than average and meticulously groomed. Weretigers grow to enormous size in animal and hybrid form, but they fight in their more refined humanoid form when they can.

They don't like to pass on their curse, because every new weretiger means competition for territory and prey.

Weretigers live in jungles on the fringes of humanoid civilization, traveling to isolated settlements to trade or revel. They live and hunt alone or in small family groups.

## Lycanthropes

One of the most ancient and feared of all curses, lycanthropy can transform the most civilized humanoid into a ravening beast. In its natural humanoid form, a creature cursed by lycanthropy appears as its normal self. Over time, however, many lycanthropes acquire features suggestive of their animal form. In that animal form, a lycanthrope resembles a powerful version of a normal animal. On close inspection, its eyes show a faint spark of unnatural intelligence and might glow red in the dark.

Evil lycanthropes hide among normal folk, emerging in animal form at night to spread terror and bloodshed, especially under a full moon. Good lycanthropes are reclusive and uncomfortable around other civilized creatures, often living alone in wilderness areas far from villages and towns.

### Curse of Lycanthropy

A humanoid creature can be afflicted with the curse of lycanthropy after being wounded by a lycanthrope, or if one or both of its parents are lycanthropes. A [remove curse](/compendium/spells/remove-curse.md) spell can rid an afflicted lycanthrope of the curse, but a natural born lycanthrope can be freed of the curse only with a wish.

A lycanthrope can either resist its curse or embrace it. By resisting the curse, a lycanthrope retains its normal alignment and personality while in humanoid form. It lives its life as it always has, burying deep the bestial urges raging inside it. However, when the full moon rises, the curse becomes too strong to resist, transforming the individual into its beast form-or into a horrible hybrid form that combines animal and humanoid traits. When the moon wanes, the beast within can be controlled once again. Especially if the cursed creature is unaware of its condition, it might not remember the events of its transformation, though those memories often haunt a lycanthrope as bloody dreams.

Some individuals see little point in fighting the curse and accept what they are. With time and experience, they learn to master their shapechanging ability and can assume beast form or hybrid form at will. Most lycanthropes that embrace their bestial natures succumb to bloodlust, becoming evil, opportunistic creatures that prey on the weak.

> [!quote] Player Characters as Lycanthropes
> 
> A character who becomes a lycanthrope retains his or her statistics except as specified by lycanthrope type. The character gains the lycanthrope's speeds in non-humanoid form, damage immunities, traits, and actions that don't involve equipment. The character is proficient with the lycanthrope's natural attacks, such as its bite or claws, which deal damage as shown in the lycanthrope's statistics. The character can't speak while in animal form.
> 
> A non-lycanthrope humanoid hit by an attack that carries the curse of lycanthropy must succeed on a Constitution saving throw (DC 8 + the lycanthrope's proficiency bonus + the lycanthrope's Constitution modifier) or be cursed. If the character embraces the curse, his or her alignment becomes the one defined for the lycanthrope. The DM is free to decide that a change in alignment places the character under DM control until the curse of lycanthropy is removed.
> 
> The following information applies to specific lycanthropes.
> 
> **[Werebear](/compendium/bestiary/humanoid/werebear.md).** The character gains a Strength of 19 if his or her score isn't already higher, and a +1 bonus to AC while in bear or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.
> 
> **[Wereboar](/compendium/bestiary/humanoid/wereboar.md).** The character gains a Strength of 17 if his or her score isn't already higher, and a +1 bonus to AC while in boar or hybrid form (from natural armor). Attack and damage rolls for the tusks are based on Strength. For the Charge trait, the DC is 8 + the character's proficiency bonus + Strength modifier.
> 
> **[Wererat](/compendium/bestiary/humanoid/wererat.md).** The character gains a Dexterity of 15 if his or her score isn't already higher. Attack and damage rolls for the bite are based on whichever is higher of the character's Strength and Dexterity.
> 
> **[Weretiger](/compendium/bestiary/humanoid/weretiger.md).** The character gains a Strength of 17 if his or her score isn't already higher. Attack and damage rolls for the natural weapons are based on Strength. For the Pounce trait, the DC is 8 + the character's proficiency bonus + Strength modifier.
> 
> **[Werewolf](/compendium/bestiary/humanoid/werewolf.md).** The character gains a Strength of 15 if his or her score isn't already higher, and a +1 bonus to AC while in wolf or hybrid form (from natural armor). Attack and damage rolls for the natural weapons are based on Strength.
^player-characters-as-lycanthropes

## Stat Block

```ad-statblock
title: Weretiger
![](/compendium/bestiary/humanoid/token/weretiger.png#token)
*Medium humanoid(human, shapechanger), Neutral*

- **Armor Class** 12 
- **Hit Points** `dice: 16d8 + 48|text(120)` (16d8 + 48) 
- **Speed** walk 30 ft. (40 ft. in tiger form)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|15 (+2)|16 (+3)|10 (+0)|13 (+1)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Perception +5, Stealth +4
- **Senses** darkvision 60 ft., passive Perception 15
- **Damage Immunities** bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Languages** Common (can't speak in tiger form)
- **Challenge** 4

## Traits

***Shapechanger.*** The weretiger can use its action to polymorph into a tiger-humanoid hybrid or into a tiger, or back into its true form, which is humanoid. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies.

***Keen Hearing and Smell.*** The weretiger has advantage on Wisdom ([Perception](compendium/rules/skills.md#Perception)) checks that rely on hearing or smell.

***Pounce (Tiger or Hybrid Form Only).*** If the weretiger moves at least 15 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone). If the target is [prone](compendium/rules/conditions.md#prone), the weretiger can make one bite attack against it as a bonus action.

## Actions

***Multiattack (Humanoid or Hybrid Form Only).*** In humanoid form, the weretiger makes two scimitar attacks or two longbow attacks. In hybrid form, it can attack like a humanoid or make two claw attacks.

***Bite (Tiger or Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d10 + 3|avg` (`1d10 + 3`) piercing damage. If the target is a humanoid, it must succeed on a DC 13 Constitution saving throw or be cursed with weretiger lycanthropy.

***Claw (Tiger or Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3|avg` (`1d8 + 3`) slashing damage.

***Scimitar (Humanoid or Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 3|avg` (`1d6 + 3`) slashing damage.

***Longbow (Humanoid or Hybrid Form Only).*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 150/600 ft., one target. Hit: `dice: 1d8 + 2|avg` (`1d8 + 2`) piercing damage.
```
^statblock

## Environment

grassland, forest, desert