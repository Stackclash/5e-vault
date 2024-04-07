---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/cr/11
- monster/environment/coastal
- monster/environment/forest
- monster/environment/swamp
- monster/environment/underdark
- monster/size/large
- monster/type/giant
statblock: inline
aliases: ["Spirit Troll"]
---
# [Spirit Troll](compendium/bestiary/giant/spirit-troll-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 247, Mordenkainen's Tome of Foes p. 244*

A troll blasted with psychic energy can take a non physical form upon regenerating. The troll's psyche survives, but the body is as insubstantial as shadow. The troll might be unaware of the transition—the creature still moves and attacks with teeth and claws as ever—but now the troll strikes at victims' minds.

## Trolls

Trolls that are nearly obliterated but survive and regenerate from mere scraps of flesh can display bizarre features. Radically transformed trolls like the rot trolls, spirit trolls, and venom trolls that follow are especially likely to arise when trolls regenerate in the presence of magical emanations, planar energy, disease, or death on a vast scale, or if their bodies were damaged by elemental forces. These unusual forms can also be produced and shaped by the ritual magic of evil spellcasters or by trolls' own practices, as is the case for dire trolls.

### Vaprak the Destroyer

Although trolls are rarely devout and seldom ponder spiritual questions, some fear and venerate the entity known as Vaprak the Destroyer. Vaprak's true nature is something of a mystery, but Vaprak is always portrayed as a horrid, misshapen, greenish creature strongly resembling a troll. Vaprak is given to fits of mindless destruction and uncontrollably fears the plots and ambitions of other deities.

Vaprak's troll worshipers believe this god devours the souls of those who have been cooked or digested (slain by fire or acid). Otherwise, the god spits the soul back into the world to regenerate a new body.

```statblock
"name": "Spirit Troll (MPMM)"
"size": "Large"
"type": "giant"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "17"
"hp": !!int "130"
"hit_dice": "20d10 + 20"
"stats":
- !!int "1"
- !!int "17"
- !!int "13"
- !!int "8"
- !!int "9"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "3"
"damage_resistances": "acid, cold, fire"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [grappled](/compendium/rules/conditions.md#grappled), [paralyzed](/compendium/rules/conditions.md#paralyzed),\
  \ [petrified](/compendium/rules/conditions.md#petrified), [prone](/compendium/rules/conditions.md#prone),\
  \ [restrained](/compendium/rules/conditions.md#restrained), [unconscious](/compendium/rules/conditions.md#unconscious)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Giant"
"cr": "11"
"traits":
- "desc": "The troll can move through other creatures and objects as if they were\
    \ difficult terrain. It takes dice: 1d10|avg (1d10) force damage if it ends\
    \ its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "The troll regains 10 hit points at the start of each of its turns. If the\
    \ troll takes psychic or force damage, this trait doesn't function at the start\
    \ of the troll's next turn. The troll dies only if it starts its turn with 0 hit\
    \ points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The troll makes one Bite attack and two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 3d10 + 3|avg (3d10 + 3) psychic damage, and the target must\
    \ succeed on a DC 15 Wisdom saving throw or be [stunned](/compendium/rules/conditions.md#stunned)\
    \ for 1 minute. The [stunned](/compendium/rules/conditions.md#stunned) target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 3d10 + 3|avg (3d10 + 3) psychic damage."
  "name": "Claws"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/giant/token/spirit-troll-mpmm.webp"
```
^statblock

## Environment

coastal, forest, swamp, underdark

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```