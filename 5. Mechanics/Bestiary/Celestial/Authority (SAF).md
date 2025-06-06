---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 6
environments: null
size: Medium
tags:
  - compendium/src/5e/saf
  - monster/cr/6
  - monster/size/medium
  - monster/type/celestial
aliases:
  - Authority
---
# [[5. Mechanics\Bestiary\Celestial\Authority (SAF).md|Authority]]
*Source: Strongholds and Followers p. 157*

Pretty much what you'd expect from an angelic being called an Authority. It is the knight of the Celestial Court. What paladins would like to be when they grow up. The Authority arrives on our plane in heavy armor, armed with the Brightsword and looking for evil to smash. It is responsible for maintaining celestial order, and while it's still absolutely committed to smashing evil, it tends to smash chaotic evil a little more than other evils.

The Authority sometimes appears spontaneously in times when a good king or democratic civilization is facing an existential threat. It seems concerned with the fate of the human race. Whether this represents some kind of political stance on the part of the Celestial Court as a whole, or a priority peculiar to the Authority is a matter of great debate.

Badrashanti Dar, a sage from the Shauraseni Empire speaks of 'an angelic host clad all in golden mail with six wings and a burning helm' who strode across the battlefield of the last Shauraseni emperor, thousands of years ago. This is the earliest known record of the creature that is recognizably the Authority. Dar records the being as pronouncing judgement on the battlefield, saying "Ours is to defend the children of the earth!" But this translation is debated and there are none left who speak the sage's language natively.

If Dar's record describes the Authority, then there is reason to believe the Authority has been a part of every major, decisive battle between good and evil in the last 5,000 years. Sometimes affecting victory, sometimes being overwhelmed. But in each instance allying itself against tyranny and cruelty. The gods, it seems, have hope for the human race and send their greatest servants to bolster that hope among mortals.

## Tactics

Well, it finds the biggest, most evil thing and bashes the hell out of it (perhaps literally) with the Brightsword. This thing does `dice:3d6+4d8+4|noform|noparens|avg` (`3d6 + 4d8 + 4`) damage to evil creatures, which is like 32 damage on average, and it can do this three times per turn. And it has wings and a fly speed of 40 feet, so it can get where it needs to, to do what it must.

```statblock
"name": "Authority (SAF)"
"size": "Medium"
"type": "celestial"
"alignment": "Any Good alignment"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "17"
  - !!int "14"
  - !!int "16"
  - !!int "16"
"speed": "40 ft., fly 40 ft."
"saves":
  - "dexterity": "+5"
  - "constitution": "+6"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "truesight, passive Perception 19"
"languages": "all, telepathy 60 ft."
"cr": "6"
"traits":
  - "desc": "The Authority's weapon attacks are magical. When the Authority hits with\
      \ any weapon, the weapon deals an extra 9 (2d8) radiant damage (included in\
      \ the attack)."
    "name": "Angelic Weapons"
  - "desc": "The Authority has advantage on saving throws against spells and other\
      \ magical effects from evil characters and sources."
    "name": "Magic Resistance"
  - "desc": "Evil creatures have disadvantage on attack rolls against all allies within\
      \ 5 feet of the Authority. Allies in this area can't be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], or possessed by\
      \ evil creatures. If an ally is already [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], or possessed by\
      \ evil magic, the ally has advantage on any new saving throw against the relevant\
      \ effect."
    "name": "Aura of Protection Against Evil"
"actions":
  - "desc": "The Authority makes three attacks with the Brightsword."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 14\
      \ (3d6 + 4) slashing damage and 9 (2d8) radiant damage. Evil creatures take\
      \ an extra 9 (2d8) radiant damage."
    "name": "Brightsword"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Authority.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
