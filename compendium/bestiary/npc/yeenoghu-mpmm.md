---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
statblock: true
statblock-link: "#^statblock"
name: Yeenoghu
ac: 20
hp: 333
hit_dice: 23d12 + 184
cr: '24'
stats: [
  29,
  16,
  26,
  26,
  24,
  15
]
source: [
  MPMM,
  MTF
]
aliases: ["Yeenoghu"]
---
# Yeenoghu
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 270, Mordenkainen's Tome of Foes p. 155*  

The Beast of Butchery appears as a great scarred gnoll, towering 14 feet tall. Yeenoghu is the Gnoll Lord, and his creations are made in his twisted image. When the demon lord hunted across the Material Plane, packs of hyenas followed in his wake, and those that ate of great Yeenoghu's kills became gnolls. Few others worship the Beast of Butchery, but those who do tend to take on a gnoll-like aspect, hunching over and filing their teeth down to points.

Yeenoghu wants nothing more than slaughter and senseless destruction. Gnolls are his favorite instruments, and he drives his gnoll followers to ever-greater atrocities in his name, even imbuing some of their commanders with his powers, which transforms them into flinds (in this book). Yeenoghu takes pleasure in causing fear before death, and he sows sorrow and despair through destroying beloved things. He doesn't parlay; to meet him is to do battle with him—unless he becomes bored and wanders away. The Beast of Butchery has a long rivalry with Baphomet, the Horned King, and the two demon lords and their followers attack one another on sight.

The Gnoll Lord is covered in matted fur and leathery hide, and his face resembles a grinning predator's skull. He wields a triple-headed flail called the Butcher, which he can summon into his hand at will, although he is as likely to tear his prey apart with his teeth.

## Cultists of Yeenoghu

> [!note]
> See the Cult of Yeenoghu entry.

## Yeenoghu's Lair

Yeenoghu's lair in the Abyss is called the Death Dells. Its barren hills and ravines serve as a hunting ground, where he pursues captured mortals in a cruel game. Yeenoghu's lair is a place of blood and death, populated by [gnolls](/compendium/bestiary/humanoid/gnoll.md), [hyenas](/compendium/bestiary/beast/hyena.md), and [ghouls](/compendium/bestiary/undead/ghoul.md), and there are few structures or signs of civilization on his layer of the Abyss.

The challenge rating of Yeenoghu is 25 (75,000 XP) when he's encountered in his lair.

## Stat Block

```ad-statblock
title: Yeenoghu
![](/compendium/bestiary/npc/token/yeenoghu.png#token)
*Huge fiend(demon), Chaotic Evil*

- **Armor Class** 20 (natural armor)
- **Hit Points** `dice: 23d12 + 184|text(333)` (23d12 + 184) 
- **Speed** walk 50 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|29 (+9)|16 (+3)|26 (+8)|26 (+8)|24 (+7)|15 (+2)|

- **Proficiency Bonus** +7
- **Saving Throws** Dexterity +10, Constitution +15, Wisdom +14
- **Skills** Intimidation +9, Perception +14
- **Senses** truesight 120 ft., passive Perception 24
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** bludgeoning, piercing, slashing that is nonmagical
- **Condition Immunities** charmed, exhaustion, frightened, poisoned
- **Languages** all, telepathy 120 ft.
- **Challenge** 24

## Traits

***Legendary Resistance (3/Day).*** If Yeenoghu fails a saving throw, he can choose to succeed instead.

***Magic Resistance.*** Yeenoghu has advantage on saving throws against spells and other magical effects.

***Spellcasting.*** Yeenoghu casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 17):

**At will**: [detect magic](/compendium/spells/detect-magic.md)

**1/day**: [teleport](/compendium/spells/teleport.md)

**3/day each**: [dispel magic](/compendium/spells/dispel-magic.md), [fear](/compendium/spells/fear.md), [invisibility](/compendium/spells/invisibility.md)

## Actions

***Multiattack.*** Yeenoghu makes three Flail attacks.

***Flail.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 15 ft., one target. Hit: `dice: 2d12 + 9|avg` (`2d12 + 9`) force damage. If it's his turn, Yeenoghu can cause the target to suffer one of the following additional effects, each of which he can apply only once per turn

- **Confusion.** The target must succeed on a DC 17 Wisdom saving throw or be affected by the confusion spell until the start of Yeenoghu's next turn.  
- **Force.** The target takes an extra 13 (`dice: 2d12|avg` (`2d12`)) force damage.  
- **Paralysis.** The target must succeed on a DC 17 Constitution saving throw or be [paralyzed](compendium/rules/conditions.md#paralyzed) until the start of Yeenoghu's next turn.  

***Bite.*** *Melee Weapon Attack:* `dice: d20+16` (+16 to hit), reach 10 ft., one target. Hit: `dice: 2d10 + 9|avg` (`2d10 + 9`) acid damage.

## Bonus Actions

***Rampage.*** When Yeenoghu reduces a creature to 0 hit points with a melee attack, he moves up to half his speed and makes one Bite attack.

## Legendary Actions

***Charge.*** Yeenoghu moves up to his speed.

***Swat Away.*** Yeenoghu makes one Flail attack. If the attack hits, the target must succeed on a DC 24 Strength saving throw or be pushed up to 15 feet in a straight line away from Yeenoghu. If the saving throw fails by 5 or more, the target is also knocked [prone](compendium/rules/conditions.md#prone).

***Savage (Costs 2 Actions).*** Yeenoghu makes a separate Bite attack against each creature within 10 feet of him.

## Lair actions

On initiative count 20 (losing initiative ties), Yeenoghu can take one of the following lair actions; he can't take the same lair action two rounds in a row:

- **Incite the Pack.** Until the next initiative count 20, all gnolls and hyenas within the lair are enraged, causing them to have advantage on melee weapon attack rolls and causing attack rolls to have advantage against them.  
- **Iron Spike.** Yeenoghu causes an iron spike—5 feet tall and 1 inch in diameter—to burst from the ground at a point he can see within 100 feet of him. Any creature in the space where the spike emerges must make a DC 24 Dexterity saving throw. On a failed save, the creature takes `dice: 6d8|avg` (`6d8`) piercing damage and is [restrained](compendium/rules/conditions.md#restrained) by being impaled on the spike. A creature can use an action to remove itself (or a creature it can reach) from the spike, ending the restrained condition.  
- **Pack Rush.** Each gnoll or hyena that Yeenoghu can see can use its reaction to move up to its speed.  

## Regional effects

The region containing Yeenoghu's lair is warped by his magic, creating one or more of the following effects:

- **Savage Predators.** Predatory beasts within 6 miles of the lair become unusually savage, killing far more than what they need for food. Carcasses of prey are left to rot in an unnatural display of wasteful slaughter.  
- **Spiky Terrain.** Within 1 mile of the lair, large iron spikes grow out of the ground and stone surfaces. Yeenoghu impales the bodies of the slain on these spikes.  
- If Yeenoghu dies, these effects fade over the course of `dice: 1d10|avg` (`1d10`) days.  
```
^statblock