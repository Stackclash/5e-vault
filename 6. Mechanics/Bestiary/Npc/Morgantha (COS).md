---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/fiend
statblock: true
statblock-link: "#^statblock"
"name": "Morgantha"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"stats":
- !!int "18"
- !!int "15"
- !!int "16"
- !!int "16"
- !!int "14"
- !!int "16"
"speed": "walk 30 ft."
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "5"
  "Insight": !!int "5"
  "Perception": !!int "5"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"condition_immunities": "charmed"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Abyssal, Common, Infernal, Primordial"
"cr": "5"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Morgantha's innate spellcasting ability is Charisma (spell save DC 14,\
    \ dice: d20+6 (+6 to hit) with spell attacks). She can innately cast the following\
    \ spells, requiring no material components:\n\nAt will: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]],\
    \ [[/6. Mechanics/Spells/magic-missile.md\|magic missile]]\n\n2/day each: [plane\
    \ shift](/compendium/spells/plane-shift.md) (self only), [[/6. Mechanics/Spells/ray-of-enfeeblement.md\|ray of enfeeblement]],\
    \ [[/6. Mechanics/Spells/sleep.md\|sleep]]"
  "name": "innate"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Morgantha has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "A night hag carries two very rare magic items that she must craft for herself.\
    \ If either object is lost, the night hag will go to great lengths to retrieve\
    \ it, as creating a new tool takes time and effort.\n\nHeartstone: This lustrous\
    \ black gem allows a night hag to become ethereal while it is in her possession.\
    \ The touch of a heartstone also cures any disease. Crafting a heartstone takes\
    \ 30 days.\n\nSoul Bag: When an evil humanoid dies as a result of a night hag's\
    \ Nightmare Haunting, Morgantha catches the soul in this black sack made of stitched\
    \ flesh. A soul bag can hold only one evil soul at a time, and only the night\
    \ hag who crafted the bag can catch a soul with it. Crafting a soul bag takes\
    \ 7 days and a humanoid sacrifice (whose flesh is used to make the bag)."
  "name": "Night Hag Items"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d8 + 4|avg (2d8 + 4) slashing damage."
  "name": "Claws (Hag Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Morgantha magically polymorphs into a Small or Medium female humanoid,\
    \ or back into her true form. Her statistics are the same in each form. Any equipment\
    \ she is wearing or carrying isn't transformed. She reverts to her true form if\
    \ she dies."
  "name": "Change Shape"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Morgantha magically enters the Ethereal Plane from the Material Plane,\
    \ or vice versa. To do so, Morgantha must have a heartstone in her possession."
  "name": "Etherealness"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "While on the Ethereal Plane, Morgantha magically touches a sleeping humanoid\
    \ on the Material Plane. A [[/6. Mechanics/Spells/protection-from-evil-and-good.md\|protection from evil and good]]\
    \ spell cast on the target prevents this contact, as does a magic circle. As long\
    \ as the contact persists, the target has dreadful visions. If these visions last\
    \ for at least 1 hour, the target gains no benefit from its rest, and its hit\
    \ point maximum is reduced by 5 (dice: 1d10|avg (1d10)). If this effect reduces\
    \ the target's hit point maximum to 0, the target dies, and if the target was\
    \ evil, its soul is trapped in Morgantha's soul bag. The reduction to the target's\
    \ hit point maximum lasts until removed by the  [[/6. Mechanics/Spells/greater-restoration.md\|greater restoration]]\
    \ spell or similar magic."
  "name": "Nightmare Haunting (1/Day)"
"source":
- "CoS"
"image": "/compendium/bestiary/npc/token/morgantha.png"
aliases: ["Morgantha"]
---
# Morgantha
*Source: Curse of Strahd p. 48, Derived from Night Hag (MM)*  

```ad-statblock
title: Morgantha
![[/6. Mechanics/Bestiary/Npc/Token/morgantha.png#token]]
*Medium fiend, Neutral Evil*

- **Armor Class** 17 (natural armor)
- **Hit Points** `dice: 15d8 + 45|text(112)` (15d8 + 45) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|15 (+2)|16 (+3)|16 (+3)|14 (+2)|16 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Deception +6, Insight +5, Perception +5, Stealth +5
- **Senses** darkvision 120 ft., passive Perception 16
- **Damage Resistances** cold; fire; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Condition Immunities** charmed
- **Languages** Abyssal, Common, Infernal, Primordial
- **Challenge** 5

## Traits

***Magic Resistance.*** Morgantha has advantage on saving throws against spells and other magical effects.

***Night Hag Items.*** A night hag carries two very rare magic items that she must craft for herself. If either object is lost, the night hag will go to great lengths to retrieve it, as creating a new tool takes time and effort.

Heartstone: This lustrous black gem allows a night hag to become ethereal while it is in her possession. The touch of a heartstone also cures any disease. Crafting a heartstone takes 30 days.

Soul Bag: When an evil humanoid dies as a result of a night hag's Nightmare Haunting, Morgantha catches the soul in this black sack made of stitched flesh. A soul bag can hold only one evil soul at a time, and only the night hag who crafted the bag can catch a soul with it. Crafting a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make the bag).

***Innate Spellcasting.*** Morgantha's innate spellcasting ability is Charisma (spell save DC 14, `dice: d20+6` (+6 to hit) with spell attacks). She can innately cast the following spells, requiring no material components:

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/magic-missile.md\|magic missile]]

**2/day each**: [[/6. Mechanics/Spells/plane-shift.md\|plane shift]] (self only), [[/6. Mechanics/Spells/ray-of-enfeeblement.md\|ray of enfeeblement]], [[/6. Mechanics/Spells/sleep.md\|sleep]]

## Actions

***Claws (Hag Form Only).*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d8 + 4` (`2d8 + 4`) slashing damage.

***Change Shape.*** Morgantha magically polymorphs into a Small or Medium female humanoid, or back into her true form. Her statistics are the same in each form. Any equipment she is wearing or carrying isn't transformed. She reverts to her true form if she dies.

***Etherealness.*** Morgantha magically enters the Ethereal Plane from the Material Plane, or vice versa. To do so, Morgantha must have a heartstone in her possession.

***Nightmare Haunting (1/Day).*** While on the Ethereal Plane, Morgantha magically touches a sleeping humanoid on the Material Plane. A [[/6. Mechanics/Spells/protection-from-evil-and-good.md\|protection from evil and good]] spell cast on the target prevents this contact, as does a magic circle. As long as the contact persists, the target has dreadful visions. If these visions last for at least 1 hour, the target gains no benefit from its rest, and its hit point maximum is reduced by 5 (`dice: 1d10` (`1d10`)). If this effect reduces the target's hit point maximum to 0, the target dies, and if the target was evil, its soul is trapped in Morgantha's soul bag. The reduction to the target's hit point maximum lasts until removed by the  [[/6. Mechanics/Spells/greater-restoration.md\|greater restoration]] spell or similar magic.

## _copy


```
^statblock