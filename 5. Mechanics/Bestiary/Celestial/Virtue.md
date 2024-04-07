---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/7
  - monster/size/medium
  - monster/type/celestial
statblock: inline
aliases:
  - Virtue
---
# [[5. Mechanics/Bestiary/Celestial/Virtue.md|Virtue]]
*Source: Strongholds and Followers p. 159*

A collection of mouths and hands that arrives and sings power, which is a totally normal thing to do. The Virtue is the Word of the Gods, and that word is death to evil. These songs are not spells, so magic resistance does not affect them. They are divine words spoken by a creature sent by the gods.

That being said, you could just plug your ears (becoming deafened). They are actually songs. If you can't hear them, you are not affected.

## Tactics

The Virtue is not a combatant, and it has no attacks. It arrives on the battlefield and hovers 30 feet off the ground, singing. If attacked, it'll move away in a tactical manner, but literally all it does is sing, switching which song is active to suit the situation.

Each song is pretty straightforward:

- Chorus of Succor if the PCs are dealing with poison or other conditions that restrict their movement.  
- Chorus of Inspiration if the players are facing creatures with high defenses.  
- Chorus of Retribution if the players are outnumbered and taking a lot of hits.  
- Chorus of Damnation if the players are facing fiends.  

If the players ask about the words to these songs, I recommend looking up a random Yes lyric from Close to the Edge (1972), Tales From Topographic Oceans (1973), or Relayer (1974). Watch:

> [!quote]-  
> 
> Stand the marchers soaring talons
> 
> Peaceful lives will not deliver freedom, fighting we know
> 
> Destroy oppression, the point to reaction
> 
> As leaders look to you, attacking

See? Proper Celestial gibberish!

```statblock
"name": "Virtue"
"size": "Medium"
"type": "celestial"
"alignment": "Any Good alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"stats":
- !!int "14"
- !!int "13"
- !!int "16"
- !!int "16"
- !!int "17"
- !!int "20"
"speed": "0 ft., fly 40 ft. (hover)"
"saves":
  "Charisma": !!int "8"
  "Wisdom": !!int "6"
  "Intelligence": !!int "6"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight, passive Perception 19"
"languages": "all, telepathy 60 ft."
"cr": "7"
"traits":
- "desc": "The Virtue has advantage on saving throws against spells and other magical\
    \ effects from evil characters and sources."
  "name": "Magic Resistance"
- "desc": "Evil creatures have disadvantage on attack rolls against all allies within\
    \ 5 feet of the Virtue. Allies in this area can't be [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], or possessed by evil\
    \ creatures. If an ally is already [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], or possessed by evil\
    \ magic, the ally has advantage on any new saving throw against the relevant effect."
  "name": "Aura of Protection Against Evil"
"actions":
- "desc": "At the start of each of its turns, the Virtue chooses a chorus below and\
    \ sings it. Only creatures who can hear the Virtue are affected by its chorus.\
    \ It can only sing one chorus at a time. Any damage it takes forces it to make\
    \ a Constitution saving throw to maintain the chorus. The DC equals 10 or half\
    \ the damage taken, whichever number is higher."
  "name": "Sing"
- "desc": "While the Virtue sings, each ally may choose one condition they're suffering\
    \ from at the start of their turn and end it."
  "name": "Chorus of Succor"
- "desc": "While the Virtue sings, each ally may add a dice: d6|avg|noform (d6)\
    \ to the result of any attack roll or saving throw, once per round. The ally can\
    \ wait until after they roll the dice: d20|avg|noform (d20) before deciding\
    \ to use the inspiration die, but must decide before the GM says whether the roll\
    \ succeeds or fails."
  "name": "Chorus of Inspiration"
- "desc": "While the Virtue sings, any enemy who deals damage to one of the Virtue's\
    \ allies immediately takes 5 thunder damage."
  "name": "Chorus of Retribution"
- "desc": "While the Virtue sings, any extraplanar evil creatures have disadvantage\
    \ on saving throws against spells that would send them to another plane."
  "name": "Chorus of Damnation"
"source":
- "SaF"
"image": "5. Mechanics/Bestiary/Celestial/token/virtue-saf.webp"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
