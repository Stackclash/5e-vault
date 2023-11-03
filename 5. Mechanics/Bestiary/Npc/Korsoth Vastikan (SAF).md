---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/6
- monster/size/medium
- monster/type/aberration
statblock: inline
aliases: ["Korsoth Vastikan"]
---
# [Korsoth Vastikan](compendium\bestiary\npc/korsoth-vastikan-saf.md)
*Source: Strongholds and Followers p. 168*  

Once a rival to Maladar Dictum, then-Duke Vastikan was brought low by a mob of ratcatchers. He returned to the Sea of Eternal Change, licked his wounds, and conferred with the ghosts of forgotten sages chasing the lore of formkilling.

Now, armed with this ancient knowledge, Vastikan has clawed his way back into the king and queen's favor. He is a hunter, a thief, and a master of deceit. His voice is a low whisper, a sneer. He does not like the Mundane World, finding it overly suffused with law.

## Tactics

It takes a lot to trigger Formkiller. Vastikan must hit a target three times out of four, and the target has to fail a Constitution saving throw.

But if they fail, the results are interesting. According to the rules, the change lasts only 1 hour. According to the rules. According to these rules I made up. I mean, all rules are made up, aren't they? How long would Formkiller last if you made the rules? It's your game!

For extra spice, consider using the original 1970s reincarnation rules. 2% chance of turning into a raccoon! 4% chance of turning into a hawk! 3% chance you're a badger ^[Badger? We ain't got no badger. We don't need no badgers. I don't have to show you any stinkin' badgers!]!

```statblock
"name": "Korsoth Vastikan (SaF)"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic"
"ac": !!int "16"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "13"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "12"
"speed": "40 ft."
"saves":
  "Dexterity": !!int "7"
  "Wisdom": !!int "4"
"skillsaves":
  "Deception": !!int "4"
  "Stealth": !!int "7"
  "Investigation": !!int "3"
  "Perception": !!int "4"
  "Acrobatics": !!int "7"
  "Survival": !!int "4"
"damage_resistances": "psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]]"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Deep Speech, Primordial"
"cr": "6"
"traits":
- "desc": "The Court of All Flesh are beings of pure chaos. Because their minds are\
    \ pure disorder, they cannot be driven mad or [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ and any attempts to magically compel their behavior fails."
  "name": "Everchanging Changers"
- "desc": "Vastikan is immune to any spell or effect that would alter his form."
  "name": "Formless Shape"
- "desc": "If Vastikan hits a target with three arrows in one round, the target must\
    \ make a DC 12 Constitution saving throw or lose its native form. Roll on the\
    \ Reincarnation table to determine the target's new form. The target reverts to\
    \ its original form after 1 hour. ^[Or does it?] A target that succeeds on its\
    \ saving throw becomes immune to Formkiller for 24 hours."
  "name": "Formkiller"
"actions":
- "desc": "Vastikan makes four longbow attacks."
  "name": "Multiattack"
- "desc": "Ranged Weapon Attack: dice: d20+7 (+7 to hit), range 150/600 ft., one\
    \ target. Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Longbow"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) piercing damage."
  "name": "Shortsword"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Korsoth%20Vastikan.png"
```
^statblock