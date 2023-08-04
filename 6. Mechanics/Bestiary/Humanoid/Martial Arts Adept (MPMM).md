---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid
statblock: true
statblock-link: "#^statblock"
name: Martial Arts Adept
ac: 16
hp: 60
hit_dice: 11d8 + 11
cr: '3'
stats: [
  11,
  17,
  13,
  11,
  16,
  10
]
source: [
  MPMM,
  VGM
]
aliases: ["Martial Arts Adept"]
---
# Martial Arts Adept
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 172, Volo's Guide to Monsters p. 216*  

Martial arts adepts are disciplined monks with extensive training in hand-to-hand combat. Some protect monasteries; others travel the world seeking enlightenment or new forms of combat to master. A few become bodyguards, trading their combat prowess and loyalty for food and lodging.

Some martial artists adorn themselves with tattoos to honor inspirations or instructors, or to memorialize profound lessons, triumphs, or defeats. You may roll on the Martial Arts Adept Tattoos table to determine what sort of tattoo an adept bears.

**Martial Arts Adept Tattoos**

| dice: d8 | Tattoo |
|----------|--------|
| 1 | Patterning on the arms that make them look as though they were made of marble or granite |
| 2 | Colorful dragon scales |
| 3 | Collage of playful Elemental or Fey creatures |
| 4 | Constellations on the palm of each hand |
| 5 | Passage from a fighting manual |
| 6 | Beautiful but poisonous flowers |
| 7 | Two couatls swirling around each other, rendered in metallic ink |
| 8 | Detailed landscape depicting natural beauty |
^martial-arts-adept-tattoos

```ad-statblock
title: Martial Arts Adept
![[/6. Mechanics/Bestiary/Humanoid/Token/martial-arts-adept.png#token]]
*Medium humanoid, Any alignment*

- **Armor Class** 16 (Unarmored Defense)
- **Hit Points** `dice: 11d8 + 11|text(60)` (11d8 + 11) 
- **Speed** walk 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|17 (+3)|13 (+1)|11 (+0)|16 (+3)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Acrobatics +5, Insight +5, Stealth +5
- **Senses** passive Perception 13
- **Languages** any one language (usually Common)
- **Challenge** 3

## Traits

***Unarmored Defense.*** While the adept is wearing no armor and wielding no shield, its AC includes its Wisdom modifier.

## Actions

***Multiattack.*** The adept makes three Unarmed Strike attacks or five Dart attacks.

***Unarmed Strike.*** *Melee Weapon Attack:* `dice: d20+5` (+5 to hit), reach 5 ft., one target. Hit: `dice: 1d8 + 3\|avg` (`1d8 + 3`) bludgeoning damage. Once per turn, the adept can cause one of the following additional effects (choose one or roll a `dice: d4\|avg` (`d4`)):

- **1–2 Knock Down..** The target must succeed on a DC 13 Dexterity saving throw or be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].  
- **3–4 Push..** The target must succeed on a DC 13 Strength saving throw or be pushed up to 10 feet directly away from the adept.  

***Dart.*** *Ranged Weapon Attack:* `dice: d20+5` (+5 to hit), range 20/60 ft., one target. Hit: `dice: 1d4 + 3\|avg` (`1d4 + 3`) piercing damage.

## Reactions

***Deflect Missile.*** In response to being hit by a ranged weapon attack, the adept deflects the missile. The damage it takes from the attack is reduced by `dice: 1d10 + 3\|avg` (`1d10 + 3`). If the damage is reduced to 0, the adept catches the missile if it's small enough to hold in one hand and the adept has a hand free.
```
^statblock

## Environment

urban