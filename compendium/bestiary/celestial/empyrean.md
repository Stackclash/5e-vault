---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/size/huge
- monster/type/celestial/titan
statblock: true
statblock-link: "#^statblock"
name: Empyrean
ac: 22
hp: 313
hit_dice: 19d12 + 190
cr: '23'
stats: [
  30,
  21,
  30,
  21,
  22,
  27
]
source: [
  MM,
  TftYP,
  WDMM,
  BGDIA,
  MOT
]
aliases: ["Empyrean"]
---
# Empyrean
*Source: Monster Manual p. 130, Tales from the Yawning Portal, Waterdeep: Dungeon of the Mad Mage, Baldur's Gate: Descent Into Avernus, Mythic Odysseys of Theros*  

Empyreans are the celestial children of the gods of the Upper Planes. They are universally beautiful, statuesque, and self-assured.

## Manifest Emotion

An empyrean can experience deity-like fits of serenity or rage. It can affect the environment around it by its mood. When an empyrean is unhappy, the clouds might cry tears of salt water, the wildflowers in surrounding meadows might wilt, dead fish might wash ashore in lakes or rivers, or a nearby forest might lose the leaves from its trees. When an empyrean is jubilant, sunlight follows it everywhere, small animals frolic in its footsteps, and birds fill the sky with their pleasing songs.

## Evil Empyreans

A few empyreans have turned to evil after venturing to the Lower Planes and becoming corrupted, or as the result of being cursed by evil gods. An evil empyrean can't survive long on the Upper Planes and usually retreats to the Material Plane, where it can rule over a kingdom of mortals as an indomitable tyrant.

## Immortal Titans

Empyreans don't age but can be slain. Because few empyreans can imagine their own demise, they fight fearlessly when drawn into battle, refusing to believe that the end is upon them even when standing at death's door. When an empyrean dies, its spirit returns to its home plane. There, one of the fallen empyrean's parents resurrects the empyrean unless he or she has a good reason not to.

## Stat Block

```ad-statblock
title: Empyrean
![](/compendium/bestiary/celestial/token/empyrean.png#token)
*Huge celestial(titan), Chaotic Good or Neutral Evil*

- **Armor Class** 22 (natural armor)
- **Hit Points** `dice: 19d12 + 190|text(313)` (19d12 + 190) 
- **Speed** walk 50 ft., fly 50 ft., swim 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|30 (+10)|21 (+5)|30 (+10)|21 (+5)|22 (+6)|27 (+8)|

- **Proficiency Bonus** +7
- **Saving Throws** Strength +17, Intelligence +12, Wisdom +13, Charisma +15
- **Skills** Insight +13, Persuasion +15
- **Senses** truesight 120 ft., passive Perception 16
- **Damage Immunities** bludgeoning, piercing, slashing from nonmagical attacks
- **Languages** all
- **Challenge** 23

## Traits

***Legendary Resistance (3/Day).*** If the empyrean fails a saving throw, it can choose to succeed instead.

***Magic Resistance.*** The empyrean has advantage on saving throws against spells and other magical effects.

***Magic Weapons.*** The empyrean's weapon attacks are magical.

***Innate Spellcasting.*** The empyrean's innate spellcasting ability is Charisma (spell save DC 23, `dice: d20+15` (+15 to hit) with spell attacks). It can innately cast the following spells, requiring no material components:

**At will**: [greater restoration](/compendium/spells/greater-restoration.md), [pass without trace](/compendium/spells/pass-without-trace.md), [water breathing](/compendium/spells/water-breathing.md), [water walk](/compendium/spells/water-walk.md)

**1/day each**: [commune](/compendium/spells/commune.md), [dispel evil and good](/compendium/spells/dispel-evil-and-good.md), [earthquake](/compendium/spells/earthquake.md), [fire storm](/compendium/spells/fire-storm.md), [plane shift](/compendium/spells/plane-shift.md) (self only)

## Actions

***Maul.*** *Melee Weapon Attack:* `dice: d20+17` (+17 to hit), reach 10 ft., one target. Hit: `dice: 6d6 + 10|avg` (`6d6 + 10`) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or be [stunned](compendium/rules/conditions.md#stunned) until the end of the empyrean's next turn.

***Bolt.*** *Ranged Spell Attack:* `dice: d20+15` (+15 to hit), range 600 ft., one target. Hit: 24 (`dice: 7d6|avg` (`7d6`)) damage of one of the following types (empyrean's choice): acid, cold, fire, force, lightning, radiant, or thunder.

## Legendary Actions

***Attack.*** The empyrean makes one attack.

***Bolster.*** The empyrean bolsters all nonhostile creatures within 120 feet of it until the end of its next turn. Bolstered creatures can't be [charmed](compendium/rules/conditions.md#charmed) or [frightened](compendium/rules/conditions.md#frightened), and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn.

***Trembling Strike (Costs 2 Actions).*** The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60 feet of the empyrean must succeed on a DC 25 Strength saving throw or be knocked [prone](compendium/rules/conditions.md#prone).
```
^statblock