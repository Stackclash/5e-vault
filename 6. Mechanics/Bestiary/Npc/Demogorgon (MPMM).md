---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
name: Demogorgon
ac: 22
hp: 464
hit_dice: 32d12 + 256
cr: '26'
stats: [
  29,
  14,
  26,
  20,
  17,
  25
]
source: [
  MPMM,
  MTF
]
aliases: ["Demogorgon"]
---
# Demogorgon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 90, Mordenkainen's Tome of Foes p. 144*  

> [!quote]- A quote from Mordenkainen  
> 
> Are two heads better than one? In Demogorgon's case, the two double the horror and the chaos.

Prince of Demons, the Sibilant Beast, and Master of the Spiraling Depths, Demogorgon is the embodiment of chaos, confusion, and destruction, seeking to corrupt all that is good and undermine order in the multiverse, to see everything dragged howling into the infinite depths of the Abyss.

The demon lord is a meld of different forms. He has a saurian lower body and clawed, webbed feet; suckered tentacles sprout from the shoulders of his great apelike torso, which is surmounted by two hideous simian heads named Aameul and Hathradiah. Their gaze brings bewilderment and confusion to any who confront them.

Similarly, the spiraling Y sign of Demogorgon's cult drives those who contemplate it for too long to delirium. As a result, all followers of the Prince of Demons break with reality sooner or later.

## Cultists of Demogorgon

> [!note]
> See the Cult of Demogorgon entry.

## Demogorgon's Lair

Demogorgon makes his lair in a palace called Abysm, found on a layer of the Abyss known as the Gaping Maw. Demogorgon's lair is a place of confusion and duality; the portion of the palace that lies above water takes the form of two serpentine towers, each crowned by a skull-shaped minaret. There, Demogorgon's heads contemplate the mysteries of the arcane while arguing about how best to obliterate their rivals. The bulk of this palace extends deep underwater, in chill and darkened caverns.

## Stat Block

```ad-statblock
title: Demogorgon
![[/6. Mechanics/Bestiary/Npc/Token/demogorgon.png#token]]
*Huge fiend(demon), Chaotic Evil*

- **Armor Class** 22 (natural armor)
- **Hit Points** `dice: 32d12 + 256|text(464)` (32d12 + 256) 
- **Speed** walk 50 ft., swim 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|29 (+9)|14 (+2)|26 (+8)|20 (+5)|17 (+3)|25 (+7)|

- **Proficiency Bonus** +8
- **Saving Throws** Dexterity +10, Constitution +16, Wisdom +11, Charisma +15
- **Skills** Insight +11, Perception +19
- **Senses** truesight 120 ft., passive Perception 29
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison; bludgeoning, piercing, slashing from nonmagical attacks
- **Condition Immunities** charmed, exhaustion, frightened, poisoned
- **Languages** all, telepathy 120 ft.
- **Challenge** 26

## Traits

***Legendary Resistance (3/Day).*** If Demogorgon fails a saving throw, he can choose to succeed instead.

***Magic Resistance.*** Demogorgon has advantage on saving throws against spells and other magical effects.

***Two Heads.*** Demogorgon has advantage on saving throws against being [[6. Mechanics/Rules/conditions.md#blinded\|blinded]], [[6. Mechanics/Rules/conditions.md#deafened\|deafened]], [[6. Mechanics/Rules/conditions.md#stunned\|stunned]], or knocked [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]].

***Spellcasting.*** Demogorgon casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 23):

**At will**: [[/6. Mechanics/Spells/detect-magic.md\|detect magic]], [[/6. Mechanics/Spells/major-image.md\|major image]]

**1/day each**: [[/6. Mechanics/Spells/feeblemind.md\|feeblemind]], [[/6. Mechanics/Spells/project-image.md\|project image]]

**3/day each**: [[/6. Mechanics/Spells/dispel-magic.md\|dispel magic]], [[/6. Mechanics/Spells/fear.md\|fear]], [[/6. Mechanics/Spells/telekinesis.md\|telekinesis]]

## Actions

***Multiattack.*** Demogorgon makes two Tentacle attacks. He can replace one attack with a use of Gaze.

***Tentacle.*** *Melee Weapon Attack:* `dice: d20+17` (+17 to hit), reach 10 ft., one target. Hit: `dice: 3d12 + 9\|avg` (`3d12 + 9`) force damage. If the target is a creature, it must succeed on a DC 23 Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.

***Gaze.*** Demogorgon turns his magical gaze toward one creature he can see within 120 feet of him. The target must succeed on a DC 23 Wisdom saving throw or suffer one of the following effects (choose one or roll a `dice: d6\|avg` (`d6`)):

- **1–2 Beguiling Gaze.** The target is [[6. Mechanics/Rules/conditions.md#stunned\|stunned]] until the start of Demogorgon's next turn or until Demogorgon is no longer within line of sight.  
- **3–4 Confusing Gaze.** The target suffers the effect of the [[/6. Mechanics/Spells/confusion.md\|confusion]] spell without making a saving throw. The effect lasts until the start of Demogorgon's next turn. Demogorgon doesn't need to concentrate on the spell.  
- **5–6 Hypnotic Gaze.** The target is [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by Demogorgon until the start of Demogorgon's next turn. Demogorgon chooses how the [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] target uses its action, reaction, and movement.  

## Legendary Actions

***Gaze.*** Demogorgon uses Gaze and must use either Beguiling Gaze or Confusing Gaze.

***Tail.*** *Melee Weapon Attack:* `dice: d20+17` (+17 to hit), reach 15 ft., one target. Hit: `dice: 2d10 + 9\|avg` (`2d10 + 9`) bludgeoning damage plus `dice: 2d10\|avg` (`2d10`) necrotic damage.

***Cast a Spell (Costs 2 Actions).*** Demogorgon uses Spellcasting.

## Lair actions

On initiative count 20 (losing initiative ties), Demogorgon can take one of the following lair actions; he can't take the same lair action two rounds in a row:

- **Darkness.** Demogorgon casts the [[/6. Mechanics/Spells/darkness.md\|darkness]] spell four times, targeting different areas with the spell. Demogorgon doesn't need to concentrate on the spells, which end on initiative count 20 of the next round.  
- **Illusory Duplicate.** Demogorgon creates an illusory duplicate of himself, which appears in his space and lasts until initiative count 20 of the next round. On his turn, Demogorgon can move the illusory duplicate a distance equal to his walking speed (no action required). The first time a creature or an object interacts physically with Demogorgon (for example, by hitting him with an attack), there is a 50|50 percent% chance chance that the illusory duplicate is affected, not Demogorgon, in which case the illusion disappears.  

## Regional effects

The region containing Demogorgon's lair is warped by his magic, creating one or more of the following effects:

- **Beguiling Realm.** Within 6 miles of the lair, all Charisma ([[6. Mechanics/Rules/skills.md#Persuasion\|Persuasion]]) and Charisma ([[6. Mechanics/Rules/skills.md#Performance\|Performance]]) checks have disadvantage, and all Charisma ([[6. Mechanics/Rules/skills.md#Deception\|Deception]]) and Charisma ([[6. Mechanics/Rules/skills.md#Intimidation\|Intimidation]]) checks have advantage.  
- **Frenzied Animals.** Beasts within 1 mile of the lair become frenzied and violent—even creatures that are normally docile. Within that area, any ability check involving Animal Handling has disadvantage.  
- **Venomous Beasts.** The area within 6 miles of the lair becomes overpopulated with [[/6. Mechanics/Bestiary/Beast/Poisonous Snake.md\|poisonous snakes]] and other venomous Beasts.  

If Demogorgon dies, these effects fade over the course of `dice: 1d10\|avg` (`1d10`) days.
```
^statblock