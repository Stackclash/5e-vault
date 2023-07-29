---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/environment/arctic
- monster/environment/desert
- monster/environment/forest
- monster/environment/hill
- monster/environment/swamp
- monster/environment/urban
- monster/size/medium
- monster/type/undead
statblock: true
statblock-link: "#^statblock"
name: Knight of the Order
ac: 13
hp: 136
hit_dice: 16d8 + 64
cr: '5'
stats: [
  18,
  14,
  18,
  13,
  16,
  18
]
source: [
  CoS
]
aliases: ["Knight of the Order"]
---
# Knight of the Order
*Source: Curse of Strahd p. 139, Derived from Revenant (MM)*  

```ad-statblock
title: Knight of the Order
![](/compendium/bestiary/undead/token/knight-of-the-order.png#token)
*Medium undead, Lawful Evil*

- **Armor Class** 13 (broken chainmail)
- **Hit Points** `dice: 16d8 + 64|text(136)` (16d8 + 64) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|14 (+2)|18 (+4)|13 (+1)|16 (+3)|18 (+4)|

- **Proficiency Bonus** +3
- **Saving Throws** Strength +7, Constitution +7, Wisdom +6, Charisma +7
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 13
- **Damage Resistances** necrotic, psychic
- **Damage Immunities** poison
- **Condition Immunities** charmed, exhaustion, frightened, paralyzed, poisoned, stunned
- **Languages** the languages it knew in life
- **Challenge** 5

## Traits

***Regeneration.*** The knight regains 10 hit points at the start of its turn. If the knight takes fire or radiant damage, this trait doesn't function at the start of the knight's next turn. The knight's body is destroyed only if it starts its turn with 0 hit points and doesn't regenerate.

***Rejuvenation.*** When the knight's body is destroyed, its soul lingers. After 24 hours, the soul inhabits and animates another humanoid corpse on the same plane of existence and regains all its hit points. While the soul is bodiless, a wish spell can be used to force the soul to go to the afterlife and not return.

***Turn Immunity.*** The knight is immune to effects that turn undead.

***Vengeful Tracker.*** The knight knows the distance to and direction of any creature against which it seeks revenge, even if the creature and the knight are on different planes of existence. If the creature being tracked by the knight dies, the knight knows.

## Actions

***Multiattack.*** The knight makes two longsword attacks or two fist attacks.

***Longsword.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d10 + 4\|avg` (`2d10 + 4`) slashing damage. If the target is a creature against which the knight has sworn vengeance, the target takes an extra 14 (`dice: 4d6\|avg` (`4d6`)) slashing damage.

***Fist.*** *Melee Weapon Attack:* `dice: d20+7` (+7 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 4\|avg` (`2d6 + 4`) bludgeoning damage. If the target is a creature against which the knight has sworn vengeance, the target takes an extra 14 (`dice: 4d6\|avg` (`4d6`)) bludgeoning damage. Instead of dealing damage, the knight can grapple the target (escape DC 14) provided the target is Large or smaller.

***Vengeful Glare.*** The knight targets one creature it can see within 30 feet of it and against which it has sworn vengeance. The target must make a DC 15 Wisdom saving throw. On a failure, the target is [[compendium/rules/conditions.md#paralyzed\|paralyzed]] until the knight deals damage to it, or until the end of the knight's next turn. When the paralysis ends, the target is [[compendium/rules/conditions.md#frightened\|frightened]] of the knight for 1 minute. The [[compendium/rules/conditions.md#frightened\|frightened]] target can repeat the saving throw at the end of each of its turns, with disadvantage if it can see the knight, ending the [[compendium/rules/conditions.md#frightened\|frightened]] condition on itself on a success.
```
^statblock

## Environment

forest, swamp, hill, urban, desert, arctic