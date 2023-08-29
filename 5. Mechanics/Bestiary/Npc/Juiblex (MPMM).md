---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/size/huge
- monster/type/fiend/demon
aliases: ["Juiblex"]
---
# Juiblex
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 160, Mordenkainen's Tome of Foes p. 151*  

Called the Faceless Lord and the Oozing Hunger in ancient grimoires, Juiblex is demon lord of slime and ooze, a noxious creature that doesn't care about the plots and schemes of others of its kind. It exists only to consume, digesting and transforming living matter into more of itself.

A true horror, Juiblex is a mass of bubbling slime, swirling black and green, with glaring red eyes floating and shifting within it. It can rise up like a 20-foot hill, lashing out with dripping pseudopods to drag victims into its bulk. Those consumed by Juiblex are obliterated.

## Cultists of Juiblex

> [!note]
> See the Cult of Juiblex entry.

## Juiblex's Lair

Juiblex's principal lair is known as the Slime Pits, a realm that Juiblex shares with [[5. Mechanics\Bestiary\Npc\Zuggtmoy (MPMM).md|Zuggtmoy]] (who also appears in this book). This layer of the Abyss, which is also known as Shedaklah, is a bubbling morass of fetid sludge. The landscape is covered in vast expanses of caustic slimes, and strange organic forms rise from the oceans of ooze at Juiblex's command.

Juiblex's challenge rating is 24 (62,000 XP) when encountered in its lair.

```statblock
"name": "Juiblex"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"hp": !!int "350"
"hit_dice": "28d12 + 168"
"stats":
- !!int "24"
- !!int "10"
- !!int "23"
- !!int "20"
- !!int "20"
- !!int "16"
"speed": "30 ft., climb 30 ft."
"saves":
  "Dexterity": "+7"
  "Wisdom": "+12"
  "Constitution": "+13"
"skillsaves":
  "Perception": "+12"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "acid; poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "blinded, charmed, deafened, exhaustion, frightened, grappled,\
  \ paralyzed, petrified, poisoned, prone, restrained, stunned, unconscious"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
- "desc": "Juiblex casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 20):\n\nAt will:\
    \ [[5. Mechanics\Spells\Detect Magic.md|detect magic]]\n\n3/day each: [[5. Mechanics\Spells\Contagion.md|contagion]],\
    \ [[5. Mechanics\Spells\Gaseous Form.md|gaseous form]]"
  "name": "spells"
- "desc": "Any creature other than an Ooze that starts its turn within 10 feet of\
    \ Juiblex must succeed on a DC 21 Constitution saving throw or be [[\5. Mechanics\Rules\Conditions.md#poisoned|poisoned]]\
    \ until the start of the creature's next turn."
  "name": "Foul"
- "desc": "If Juiblex fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Juiblex has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Juiblex regains 20 hit points at the start of its turn. If it takes fire\
    \ or radiant damage, this trait doesn't function at the start of its next turn.\
    \ Juiblex dies only if it starts its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- "desc": "Juiblex can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
"actions":
- "desc": "Juiblex makes three Acid Lash attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice: d20+14 (+14 to hit), reach 10\
    \ ft. or range 60/120 ft., one target. Hit: 21 (dice: 4d6 + 7|avg (4d6 +\
    \ 7)) acid damage. Any creature killed by this attack is drawn into Juiblex's\
    \ body, where the corpse is dissolved after 1 minute."
  "name": "Acid Lash"
- "desc": "Juiblex spews out a corrosive slime, targeting one creature that it can\
    \ see within 60 feet of it. The target must succeed on a DC 21 Dexterity saving\
    \ throw or take 55 (dice: 10d10|avg (10d10)) acid damage. Unless the target\
    \ avoids taking all of this damage, any metal armor worn by the target takes a\
    \ permanent −1 penalty to the AC it offers, and any metal weapon the target is\
    \ carrying or wearing takes a permanent −1 penalty to damage rolls. The penalty\
    \ worsens each time a target is subjected to this effect. If the penalty on an\
    \ object drops to −5, the object is destroyed. The penalty on an object can be\
    \ removed by the [[5. Mechanics\Spells\Mending.md|mending]] spell."
  "name": "Eject Slime (Recharge 5-6)"
"legendary_actions":
- "desc": "Juiblex makes one Acid Lash attack."
  "name": "Attack"
- "desc": "Melee Weapon Attack: dice: d20+14 (+14 to hit), reach 10 ft., one creature.\
    \ Hit: 21 (dice: 4d6 + 7|avg (4d6 + 7)) poison damage, and the target is\
    \ slimed. Until the slime is scraped off with an action, the target is [[\5. Mechanics\Rules\Conditions.md#poisoned|poisoned]],\
    \ and any creature, other than an Ooze, is [[\5. Mechanics\Rules\Conditions.md#poisoned|poisoned]]\
    \ while within 10 feet of the target."
  "name": "Corrupting Touch (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/npc/token/juiblex.png"
```
^statblock