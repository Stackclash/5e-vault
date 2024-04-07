---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/7
  - monster/size/large
  - monster/type/elemental
statblock: inline
aliases:
  - Pillar of Water
---
# [[5. Mechanics/Bestiary/Elemental/Pillar Of Water.md|Pillar of Water]]
*Source: Strongholds and Followers p. 189*

If the Sources are watchmen of Alloy, the Pillars are the jailors. They spring from the ground, imprisoning those caught violating the law of the Lady. Like the Sources, they have an attitude, but not much actual personality.

In the city of Alloy, the Pillars imprison suspected criminals, awaiting the arrival of a Magistrate. When summoned to the Mundane World, the Pillars obey the commands of the concordant who summoned them. They will release the prisoners they hold at the concordant's demand, granting the opportunity to parley.

The Pillars of Water are generally skeptical of those imprisoned, assuming openly that they must have done something to piss off the Sources. They believe anyone they trap must be guilty of something and leave the judging to the Magistrates.

As with the Knights and Sources, there are many different Pillars, not described here. Pillars of Fire, Pillars of Earth. But the Pillars of Water are most common. In times of great distress, when the city of Alloy is threatened, they are known to join together to create a massive gestalt entity to defend this, the most diverse city in the timescape.

During the Battle at the Doors of Morning, when the Lady of Brass lost her greatest general, the Pillars of Water joined the battle by forming the Tidal Wall, a great, unstoppable wave said to be one hundred feet tall. Thanks to this overwhelming display and the work and effort of the rest of the Elemental Court, the city held.

## Tactics

The Pillar can imprison up to four creatures, but it doesn't have to. If there's one enemy causing a lot of problems, especially one with low Dexterity, drop the Pillar on them. Remember to use Reform to get the Pillar where it needs to be. The Pillar can also proactively defend allies by using Constant Flood to prevent enemies from getting into melee.

```statblock
"name": "Pillar Of Water"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "149"
"hit_dice": "13d10 + 78"
"stats":
- !!int "18"
- !!int "5"
- !!int "22"
- !!int "11"
- !!int "15"
- !!int "11"
"speed": "30 ft."
"saves":
  "Strength": !!int "7"
  "Constitution": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Aquan"
"cr": "7"
"traits":
- "desc": "Enemies beginning their turn within 15 feet of the pillar must make a DC\
    \ 15 Strength check or be pushed 10 feet away from the pillar. The ground within\
    \ 15 feet of the Pillar is difficult terrain for all enemies attempting to move\
    \ toward the pillar."
  "name": "Constant Flood"
- "desc": "When summoned, the Pillar of Water appears in a 10-by-10-foot space. All\
    \ creatures in that area must make Dexterity saving throws. On a failure, a creature\
    \ is suspended in the column of water. On a success, a creature is pushed to an\
    \ empty space adjacent to the pillar.\n\nUp to four Medium creatures, or one Large\
    \ creature, can be contained in the pillar. Creatures suspended in the pillar\
    \ can't breathe unless they can breathe water, are [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]],\
    \ and take dice:6d6|text(21) (6d6) bludgeoning damage at the start of each\
    \ of the pillar's turns.\n\nAs an action, a [[/5. Mechanics/Rules/Conditions.md#restrained|restrained]]\
    \ creature can make a DC 15 Strength ([[/5. Mechanics/Rules/Skills.md#Athletics|Athletics]])\
    \ check. On a success, it escapes from the column of water."
  "name": "Geyser"
"actions":
- "desc": "As a bonus action, the pillar disappears, depositing any suspended creatures\
    \ on the ground, [[/5. Mechanics/Rules/Conditions.md#prone|prone]]. On its summoner's\
    \ next turn, it appears again anywhere within 60 feet of the summoner."
  "name": "Reform"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Elemental/token/pillar-of-water-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
