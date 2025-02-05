---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 8
environments: 
size: Medium
tags:
- compendium/src/5e/saf
- monster/cr/8
- monster/size/medium
- monster/type/elemental
aliases: ["Knight of Air"]
---
# [Knight of Air](compendium\bestiary\elemental/knight-of-air-saf.md)
*Source: Strongholds and Followers p. 190*

The Knights of Alloy enjoy the privilege of being neutral in the conflicts that rage across the timescape. Because Alloy is neutral ground, the Knights are often seen in the company of visiting members of the Court of Arcadia (especially the Mantis Knights or the Orchid Count) or the Knights of Axiom. Even the unchanging changers from the Court of All Flesh are welcome. The Knights of Fire seem to enjoy the company of Korsoth Vastikan especially.

The Knights keep tabs on the most powerful visitors to Alloy. While within the city walls, they have a sixth sense that alerts them to the presence in the city of newcomers who are able to cause a lot of trouble. Presuming they've sobered up from the previous night's festivities, the Knights will check on the newcomer to make sure they're behaving.

The Knights of Fire make no pretense of hiding while doing this, but the Knights of Air are skilled at following powerful entities without them knowing about it. Should violence threaten, the Knights can instantly summon a Source and a Pillar, though this power is granted them only in the city of Alloy.

## Tactics

A Knight of Air is pretty straightforward, relying primarily on The Sword of Clouds, which apart from its cool name has no other extraordinary property. Its spells are situational, with no tactical theme. Wind wall will section off the battlefield and pummel anyone caught in it, protecting allies. The Wind Lords, as the Knights of Air are sometimes called, use gaseous form to protect an ally.

Otherwise, the Wind Lords use their high Armor Class and crazy-good movement to get where they need to engage enemies in melee, often blowing right past enemies, enduring attacks of opportunity, relying on their plate and shield to survive.

```statblock
"name": "Knight of Air (SaF)"
"size": "Medium"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "20"
"ac_class": "[plate armor](compendium/items/plate-armor.md), [shield](compendium/items/shield.md)"
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
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [paralyzed](/compendium/rules/conditions.md#Paralyzed), [petrified](/compendium/rules/conditions.md#Petrified),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Auran, Common"
"cr": "8"
"traits":
- "desc": "The Knight of Air's innate spellcasting ability is Wisdom (spell save DC\
    \ 13, +5 to hit with spell attacks). It can innately cast the following spells,\
    \ requiring no components:\n\n1/day each: [wind wall](compendium/spells/wind-wall.md),\
    \ [gaseous form](compendium/spells/gaseous-form.md)\n\n3/day each: [invisibility](compendium/spells/invisibility.md),\
    \ [misty step](compendium/spells/misty-step.md), [gust of wind](compendium/spells/gust-of-wind.md)\n\
    \nCantrips (at will): [mage hand](compendium/spells/mage-hand.md) (the hand\
    \ is invisible)"
  "name": "Innate Spellcasting"
"actions":
- "desc": "The Knight makes three attacks with the Sword of Clouds."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 15 (2d8\
    \ + 6) piercing damage."
  "name": "The Sword of Clouds"
"source":
- "SaF"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```