---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 10
environments: null
size: Huge
tags:
  - compendium/src/5e/saf
  - monster/cr/10
  - monster/size/huge
  - monster/type/aberration
aliases:
  - Maladar Dictum
---
# [[5. Mechanics\Bestiary\Aberration\Maladar Dictum (SAF).md|Maladar Dictum]]
*Source: Strongholds and Followers p. 175*

Currently one of the Dukes of Chaos, Lord Dictum serves the Red Queen. He is ambitious and plans to replace both the King and Queen...but so do all the Dukes and Duchesses of Chaos. For now, Dictum bides his time and waits.

Dictum does not enjoy being pulled to the Mundane World and forced to do the bidding of uni-form mortals. The Red Queen knows this, and enjoys dispatching Dictum.

What she may not know is that Maladar has the power, alone of all the servitors, to summon the other members of his court. This means His Grace may have power beyond the Thrones of Chaos. May know something the other members of the court do not. If he summons the rest of his court in some other realm, who knows what new court of Chaos might be established there.

Maladar chafes at his summoning and openly yearns to unleash his power on whatever universe he finds himself in. But...the Red Queen commands, and Maladar Dictum must obey. For now...

## Tactics

This dude...you really don't want to damage this guy, it's only going to make things harder for you. Unless he's on your side, in which case absolutely dump him in the middle of a melee and stand back. He will, after only one round of attacks, be dealing outstanding amounts of damage. He'll have claws and tentacles or eleven-tacles or twelve-tacles!

If you really want to see things get out of control very quickly, watch Maladar summon Korsoth Vastikan and stand back as the Duke of Chaos orders his ranger to fire four arrows from Formkiller into him. Boom! Instant four extra attacks per round oh my god. Whose idea was this? Madness!

```statblock
"name": "Maladar Dictum (SAF)"
"size": "Huge"
"type": "aberration"
"alignment": "Chaotic"
"ac": !!int "20"
"ac_class": "[[5. Mechanics/Items/Plate Armor.md|plate armor]], [[5. Mechanics/Items/Shield.md|shield]]"
"hp": !!int "210"
"hit_dice": "20d12 + 80"
"stats":
- !!int "20"
- !!int "15"
- !!int "19"
- !!int "15"
- !!int "10"
- !!int "16"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Dexterity": !!int "6"
  "Wisdom": !!int "4"
  "Strength": !!int "9"
  "Constitution": !!int "8"
"skillsaves":
  "Intimidation": !!int "7"
  "Athletics": !!int "9"
  "Deception": !!int "7"
  "Insight": !!int "4"
"damage_resistances": "psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Petrified|petrified]]"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Deep Speech, Primordial"
"cr": "10"
"traits":
- "desc": "The Court of All Flesh are beings of pure chaos. Because their minds are\
    \ pure disorder, they cannot be driven mad or [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]]\
    \ and any attempts to magically compel their behavior fails."
  "name": "Everchanging Changers"
- "desc": "Maladar is immune to any spell or effect that would alter his form."
  "name": "Formless Shape"
- "desc": "Each time Maladar takes damage in combat, his arm grows another limb, increasing\
    \ the damage of his Smash attack by 1d8. There is no limit to the number of limbs,\
    \ tentacles, and claws Maladar can grow this way."
  "name": "Reform"
"actions":
- "desc": "Maladar makes two attacks with Changer plus one smash attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6\
    \ + 5) slashing damage plus 7 (2d6) necrotic damage."
  "name": "Changer (Greatsword)"
- "desc": "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 14 (2d8\
    \ + 5) bludgeoning damage."
  "name": "Smash"
- "desc": "Maladar Dictum has a 50% chance of summoning a member of his court in an\
    \ adjacent unoccupied space. If successful, roll a d12 and consult the below chart.\
    \ Each member of his court may only be summoned once per day in this manner. If\
    \ the same member is summoned twice, nothing happens.\n\ndice: [[Maladar Dictum (SAF).md#^member-summoned]]\n\
    \n| dice: d12 | Member Summoned |\n|-----------|-----------------|\n| 1-4 | [[4. World Almanac/NPCs/Baron Malgas (SAF).md|Baron\
    \ Malgas]] |\n| 5-7 | [[4. World Almanac/NPCs/Korsoth Vastikan (SAF).md|Korsoth Vastikan]]\
    \ |\n| 8-9 | [[4. World Almanac/NPCs/The Queen Of Bones (SAF).md|The Queen of Bones]]\
    \ |\n| 10-11 | [[4. World Almanac/NPCs/Lord Rall (SAF).md|Lord Rall]] |\n| 12 |\
    \ [[4. World Almanac/NPCs/Uursovk (SAF).md|Uursovk]] |\n^member-summoned"
  "name": "Lord of Chaos"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Maladar%20Dictum.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
