---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/8
  - monster/size/medium
  - monster/type/elemental
statblock: inline
aliases:
  - Knight of Air
---
# [[5. Mechanics/Bestiary/Elemental/Knight Of Air.md|Knight of Air]]
*Source: Strongholds and Followers p. 190*

The Knights of Alloy enjoy the privilege of being neutral in the conflicts that rage across the timescape. Because Alloy is neutral ground, the Knights are often seen in the company of visiting members of the Court of Arcadia (especially the Mantis Knights or the Orchid Count) or the Knights of Axiom. Even the unchanging changers from the Court of All Flesh are welcome. The Knights of Fire seem to enjoy the company of Korsoth Vastikan especially.

The Knights keep tabs on the most powerful visitors to Alloy. While within the city walls, they have a sixth sense that alerts them to the presence in the city of newcomers who are able to cause a lot of trouble. Presuming they've sobered up from the previous night's festivities, the Knights will check on the newcomer to make sure they're behaving.

The Knights of Fire make no pretense of hiding while doing this, but the Knights of Air are skilled at following powerful entities without them knowing about it. Should violence threaten, the Knights can instantly summon a Source and a Pillar, though this power is granted them only in the city of Alloy.

## Tactics

A Knight of Air is pretty straightforward, relying primarily on The Sword of Clouds, which apart from its cool name has no other extraordinary property. Its spells are situational, with no tactical theme. Wind wall will section off the battlefield and pummel anyone caught in it, protecting allies. The Wind Lords, as the Knights of Air are sometimes called, use gaseous form to protect an ally.

Otherwise, the Wind Lords use their high Armor Class and crazy-good movement to get where they need to engage enemies in melee, often blowing right past enemies, enduring attacks of opportunity, relying on their plate and shield to survive.

```statblock
"name": "Knight Of Air"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "20"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate armor]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"stats":
- !!int "12"
- !!int "22"
- !!int "13"
- !!int "14"
- !!int "14"
- !!int "16"
"speed": "40 ft., fly 40 ft."
"saves":
  "Charisma": !!int "6"
  "Dexterity": !!int "9"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "5"
  "Acrobatics": !!int "9"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]],\
  \ [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Auran, Common"
"cr": "8"
"traits":
- "desc": "The Knight of Air's innate spellcasting ability is Wisdom (spell save DC\
    \ 13, dice: d20+5 (+5) to hit with spell attacks). It can innately cast the\
    \ following spells, requiring no components:\n\n1/day each: [[5. Mechanics/Spells/Wind Wall.md|wind wall]],\
    \ [[5. Mechanics/Spells/Gaseous Form.md|gaseous form]]\n\n3/day each: [[5. Mechanics/Spells/Invisibility.md|invisibility]],\
    \ [[5. Mechanics/Spells/Misty Step.md|misty step]], [[5. Mechanics/Spells/Gust Of Wind.md|gust of wind]]\n\
    \nCantrips (at will): [[5. Mechanics/Spells/Mage Hand.md|mage hand]] (the hand\
    \ is invisible)"
  "name": "innate"
"actions":
- "desc": "The Knight makes three attacks with the Sword of Clouds."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 6|text(15) (2d8 + 6) piercing damage."
  "name": "The Sword of Clouds"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
