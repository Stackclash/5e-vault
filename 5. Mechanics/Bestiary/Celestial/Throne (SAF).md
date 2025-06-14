---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 9
environments: null
size: Large
tags:
  - compendium/src/5e/saf
  - monster/cr/9
  - monster/size/large
  - monster/type/celestial
aliases:
  - Throne
---
# [[5. Mechanics\Bestiary\Celestial\Throne (SAF).md|Throne]]
*Source: Strongholds and Followers p. 163*

Wat. Okay, well...look, I don't make these things up, the gods do that, and who are we to question them?

The Throne is the jailor of the gods. It quarantines evil by trapping it and burning it. It refers to itself, variously, as the Key and the Cage. It is one of the less communicative in the Court, if that is possible, and has its own motivations, which it does not reveal. It is so dedicated to removing evil from the world that it won't obey its master. It chooses its enemies based solely on their commitment to evil powers, not the threat they pose in combat.

It's not uncommon for a battle to end with a creature imprisoned within the Throne, only for the Throne to return to its home plane with the creature, presumably removing it from our world forever. Though...the kind of enemy who can survive that and return to our plane would be a memorable villain indeed.

The Throne is the hereditary enemy of the Order of Desecration (detailed elsewhere). When it imprisons an agent of evil and retreats back to...wherever the Celestial Host abide, it takes its prisoner with it. Only the most powerful and experienced rangers of the timescape can even attempt to follow. The tales they tell upon returning are confusing and inconsistent.

Each of those who survive the Throne's imprisonment and return to tell the tale describe the realm of the Celestial Court differently. Some describe an island with green grass and tall white marble columns. Some describe a vast field of wheat where prides of lions lounge under a brilliant blue sky. Or a thick forest with tame woodland beasts and ripe fruit hanging from the trees.

Whether these are different places, the same place with different regions, or some manifestation created from the mind of the imprisoned is not known. Only the Knights of Desolation know the secret of gaining access to that realm, and they will not reveal what they know.

## Tactics

It chooses the most evil enemy creature (by whatever metric you want) and attacks it. Once it is imprisoned, the Throne will obey its summoner and attack whomever they want, but not if it would free the evil trapped within.

```statblock
"name": "Throne (SAF)"
"size": "Large"
"type": "celestial"
"alignment": "Any Good alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "127"
"hit_dice": "15d10 + 45"
"modifier": !!int "3"
"stats":
  - !!int "16"
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "18"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "strength": "+7"
  - "constitution": "+7"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]]"
"senses": "truesight, passive Perception 22"
"languages": "all, telepathy 60 ft."
"cr": "9"
"traits":
  - "desc": "The throne's weapon attacks are magical. When the throne hits with any\
      \ weapon, the weapon deals an extra 9 (2d8) radiant damage (included in the\
      \ attack)."
    "name": "Angelic Weapons"
  - "desc": "The throne has advantage on saving throws against spells and other magical\
      \ effects from evil characters and sources."
    "name": "Magic Resistance"
  - "desc": "Evil creatures have disadvantage on attack rolls against all allies within\
      \ 5 feet of the throne. Allies in this area can't be [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], or possessed by\
      \ evil creatures. If an ally is already [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]],\
      \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], or possessed by\
      \ evil magic, the ally has advantage on any new saving throw against the relevant\
      \ effect."
    "name": "Aura of Protection Against Evil"
"actions":
  - "desc": "Ranged Spell Attack: +8 to hit, range 120 ft., one target. Hit: 10\
      \ (3d6) fire damage plus 9 (2d8) radiant damage. If the target is Medium or\
      \ smaller, it must succeed on a DC 16 Dexterity saving throw or be teleported\
      \ into the throne's burning rings. The target is [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ (escape DC 17). Until the grapple ends, the target is [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]],\
      \ and the throne uses Radiant Burn as its first action on each of its subsequent\
      \ turns. Only one creature can be imprisoned at a time."
    "name": "The Burning Wheel"
  - "desc": "The wheel spins around the creature [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]]\
      \ by it, dealing 13 (3d8) fire damage plus 9 (2d8) radiant damage"
    "name": "Radiant Burn"
"source":
  - "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Throne.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
