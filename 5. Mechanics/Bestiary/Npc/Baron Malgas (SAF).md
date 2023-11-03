---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/5
- monster/size/medium
- monster/type/aberration
statblock: inline
aliases: ["Baron Malgas"]
---
# [Baron Malgas](compendium\bestiary\npc/baron-malgas-saf.md)
*Source: Strongholds and Followers p. 167*  

The newest lord of chaos, Malgas clawed and scraped his way into the lowest rank of the Court and is only getting started. His barely disguised contempt for Maladar Dictum doesn't prevent him from coming when called, though. Malgas is no fool.

Malgas enjoys boasting and taunting his enemies. He is a theatrical character, new to power and fulsome in it. He acts as though he is already chief of the Court and openly disparages the other members while they're not around.

> [!quote]-  
> 
> "Come Sons and Daughters of Order! And meet your ender!"

## Tactics

Malgas is a melee bruiser and enjoys inflicting pain, preferring to match himself against the enemy's melee warriors. But, like all servitors, he will follow the orders of his summoner. He prefers to use his Melt Flesh ability on his immediate enemy, but will deploy it tactically to force a powerful enemy spellcaster to cease casting, or a fighter to drop their weapon, even if he's not currently fighting that character.

```statblock
"name": "Baron Malgas (SaF)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic"
"ac": !!int "20"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "10"
"speed": "30 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Athletics": !!int "6"
  "Deception": !!int "3"
  "Perception": !!int "5"
"damage_resistances": "psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]]"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Deep Speech, Primordial"
"cr": "5"
"traits":
- "desc": "The Court of All Flesh are beings of pure chaos. Because their minds are\
    \ pure disorder, they cannot be driven mad or [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ and any attempts to magically compel their behavior fails."
  "name": "Everchanging Changers"
- "desc": "The baron is immune to any spell or effect that would alter his form."
  "name": "Formless Shape"
"actions":
- "desc": "Baron Malgas makes three attacks with his flail. He can use Melt Flesh\
    \ in place of one flail attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6 to hit), range 5 ft., one target.\
    \ Hit: dice: 1d8 + 3|avg (1d8 + 3) bludgeoning damage."
  "name": "Flail"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+6 (+6 to hit), reach 5 ft.\
    \ or range 30/120 ft., one target. Hit: dice: 2d8 + 3|avg (2d8 + 3) piercing\
    \ damage."
  "name": "Javelin"
- "desc": "Baron Malgas chooses a target he can see within 30 feet. The target must\
    \ succeed on a DC 13 Wisdom saving throw or watch as their dominant hand melts\
    \ into a runny, fleshy lump. It drops whatever weapon it was carrying, cannot\
    \ hold a weapon in that hand, and cannot cast spells that require somatic components.\
    \ At the end of each of its turns, the target repeats this saving throw, ending\
    \ the effect on itself on a success. Casting [[5. Mechanics/Spells/Mending.md|mending]]\
    \ on the affected hand also ends the effect. If the target succeeds on a saving\
    \ throw, the creature becomes immune to the baron's Melt Flesh for the next 24\
    \ hours."
  "name": "Melt Flesh"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Baron%20Malgas.png"
```
^statblock