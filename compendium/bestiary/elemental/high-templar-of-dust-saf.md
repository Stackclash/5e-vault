---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/10
- monster/size/large
- monster/type/elemental
statblock: inline
aliases: ["High Templar of Dust"]
---
# [High Templar of Dust](compendium/bestiary/elemental/high-templar-of-dust-saf.md)
*Source: Strongholds and Followers p. 192*

The High Templars serve the Lady of Brass, but unlike the rest of the Court of Elements they were not created by her. They were the original Elemental Lords who dwelled on the Plane of Quintessence before the arrival of the Lady. Before the construction of Alloy, the City of Brass, began. When Quintessence was a wasteland.

The beings who would become the High Templars were formless creatures then, cursed by primordial forces as punishment for some ancient war they were on the losing side of. They do not speak of this, though it is clear they remember it.

The Lady of Brass arrived and gave them form and substance, and for this they pledged their lives to her.

They are her fanatical death commandos, willingly giving their lives if necessary and sacrificing their eternal being to aid her.

They are grim and taciturn. It appears they resent being summoned but do their duty in the name of the Lady.

> [!quote]-  
> 
> "Concordant, our queen commands me aid you, and this I have done. This world of yours is pain for us. Do not ask more of me, for I have no more to give. I leave."

## Tactics

The High Templar of Dust focuses on movement, moving through enemies to use its Scour ability, damaging everyone standing around with Sandstorm, and generally wading into enemies. Its Armor Class isn't amazing, but it has a lot of hit points and should survive a few rounds of punishment. It tends to fire off Lightning and Fire before engaging in melee with its halberd.

```statblock
"name": "High Templar of Dust (SaF)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "17"
"hp": !!int "189"
"hit_dice": "18d10 + 90"
"stats":
- !!int "20"
- !!int "22"
- !!int "20"
- !!int "17"
- !!int "16"
- !!int "13"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "7"
  "Strength": !!int "9"
  "Constitution": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "fire, lightning, cold, poison"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [grappled](/compendium/rules/conditions.md#grappled), [paralyzed](/compendium/rules/conditions.md#paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#petrified), [poisoned](/compendium/rules/conditions.md#poisoned),\
  \ [prone](/compendium/rules/conditions.md#prone), [restrained](/compendium/rules/conditions.md#restrained),\
  \ [unconscious](/compendium/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., passive Perception 17"
"languages": "Aquan, Auran, Common, Ignan, Terran"
"cr": "10"
"traits":
- "desc": "At the start of each of the templar's turns, each creature within 5 feet\
    \ of it takes dice: 1d10|avg (1d10) piercing damage."
  "name": "Sandstorm"
- "desc": "The Templar moves up to its speed without provoking opportunity attacks.\n\
    \nIt can move through creatures, and each creature it passes through must make\
    \ a DC 15 Constitution saving throw or take dice: 3d6|avg (3d6) force damage."
  "name": "Scour (Recharge 5-6)"
"actions":
- "desc": "The Templar makes four attacks with its halberd, Lightning, or Fire. Lightning\
    \ and Fire can only be used twice each."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 10 ft., one target.\
    \ Hit: dice: 1d10 + 5|avg (1d10 + 5) slashing damage."
  "name": "Halberd"
- "desc": "Ranged Spell Attack: dice: d20+7 (+7 to hit), range 60 ft., one target.\
    \ Hit: dice: 3d6|avg (3d6) lightning damage."
  "name": "Lightning"
- "desc": "The templar hurls a ball of fire that explodes at a point it can see within\
    \ 60 feet. Each creature within a sphere of 10-foot radius centered on that point\
    \ must make a DC 15 Dexterity saving throw. The sphere spreads around corners.\
    \ On a failed save, a creature takes dice: 3d6|avg (3d6) fire damage, or half\
    \ as much damage on a successful one."
  "name": "Fire"
"source":
- "SaF"
"image": "compendium/bestiary/elemental/token/high-templar-of-dust-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```