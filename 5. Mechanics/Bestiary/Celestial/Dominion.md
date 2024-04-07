---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/8
  - monster/size/large
  - monster/type/celestial
statblock: inline
aliases:
  - Dominion
---
# [[5. Mechanics/Bestiary/Celestial/Dominion.md|Dominion]]
*Source: Strongholds and Followers p. 161*

Now, see? This looks more like a regular angel thing. Why can't they all look like this—why do they have to be wheels and wings and mouths and hands?

The Dominion is the censure of the Celestial Court. It is both enemy to evil and ally of good. They are deeply judgmental and arrive on our plane full of opinions regarding which of your allies are worth helping. They're not the most powerful of the Court, but they act like it.

History records several instances in different ages and cultures when the Dominion arrived without summons. This is rare and when it occurs it is usually to identify and capture some fugitive. Enemies of the great and good who have escaped the justice of the Celestial Host and now jaunt across the timescape looking for aid. The Dominion, in her role as celestial censure, brooks no compromise and will follow the planar outlaw across a million worlds if need be.

It is not unusual for the Dominion to make oracular pronouncements, but given that her speech is a cryptic, stream of consciousness open poetry, it unclear whether anyone has ever properly decoded her intent. Instances where, in retrospect, it seems as though a mortal was able to make sense of the Dominion's pronouncement could have been pure coincidence.

The Dominion is so impressive and the force of her presence so overwhelming it's not unusual for mortal to try and glimpse the face under the veil. As far as history records, no one has done this and retained their sanity long enough to report on what they saw.

## Tactics

The great thing about the Dominion is that you don't have to choose whether to attack an enemy or heal an ally. The Ray of Salvation does both, making the Dominion one of the most straightforward servitors you can summon. It flies, it has a pretty good ranged attack, and its resistances mean it's going to be extremely difficult for enemies to deal with. It doesn't do much damage for a CR 8 creature, unless it's fighting evil. `dice: 3d6|avg|noform` (`3d6`) twice isn't the end of the world, but the fact that it's healing your allies while damaging your enemies means it will change the tide of battle. Which is the point of servitors!

Obviously it should focus on those enemies adjacent to one or more of your allies! But it doesn't have to, if a well-placed bolt of light from its scepter would make a difference.

```statblock
"name": "Dominion"
"size": "Large"
"type": "celestial"
"alignment": "Any Good alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "133"
"hit_dice": "14d10 + 56"
"stats":
- !!int "16"
- !!int "19"
- !!int "18"
- !!int "17"
- !!int "18"
- !!int "17"
"speed": "40 ft., fly 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "7"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight, passive Perception 20"
"languages": "all, telepathy 60 ft."
"cr": "8"
"traits":
- "desc": "The dominion's Ray of Salvation is magical. When the dominion hits with\
    \ it, the ray deals an extra dice:2d8|text(9) (2d8) radiant damage (included\
    \ in the attack)."
  "name": "Angelic Weapons"
- "desc": "The dominion has advantage on saving throws against spells and other magical\
    \ effects from evil characters and sources."
  "name": "Magic Resistance"
- "desc": "Evil creatures have disadvantage on attack rolls against all allies within\
    \ 5 feet of the dominion. Allies in this area can't be [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], or possessed by evil\
    \ creatures. If an ally is already [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], or possessed by evil\
    \ magic, the ally has advantage on any new saving throw against the relevant effect."
  "name": "Aura of Protection Against Evil"
"actions":
- "desc": "The dominion makes two attacks with the Ray of Salvation."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: dice: d20+7 (+7) to hit, range 60 ft., one target.\
    \ Hit: dice:3d6|text(10) (3d6) fire damage and dice:2d8|text(9) (2d8)\
    \ radiant damage. If the ray does damage, any allies adjacent to the target gain\
    \ 10 temporary hit points."
  "name": "Ray of Salvation"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Celestial/token/dominion-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
