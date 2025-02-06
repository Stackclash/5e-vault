---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 12
environments: coastal
size: Huge
tags:
  - 5. Mechanics\Src\5e\(MPMM)
  - monster\Cr\12
  - monster\Environment\Coast(AL)
  - monster\Size\Huge
  - monster\Type\Giant
aliases:
  - Frost Giant Everlasting One
---
# [[5. Mechanics\Bestiary\Giant\Frost Giant Everlasting One (MPMM).md|Frost Giant Everlasting One]]
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 131, Volo's Guide to Monsters p. 148*

To hold its place or rise within the ordning, a frost giant must routinely face mighty foes in single combat. Some seek out magic that will aid them, but enchanted objects can be taken or lost. True greatness relies on personal prowess. Faced with this truth, a frost giant might seek a supernatural gift from Vaprak the Destroyer.

Vaprak is a ferocious god of strength and hunger also worshiped by some ogres and trolls. He likes to tempt frost giants with dreams of glory followed by nightmares of bloody cannibalism. Those who don't shrink from such visions or report them to priests of Thrym receive more of the same. If a frost giant comes to relish these dreams and nightmares, as some do, Vaprak sets a troll upon a sacred quest to find the frost giant and meet the giant in secret. The troll offers up its own body to be devoured in Vaprak's name. Only the boldest and most determined frost giants can finish such a gory feast.

After devouring the troll sent by Vaprak, bones and all, a frost giant becomes an everlasting one, gaining tremendous strength, an ill temper, and a troll's regenerative ability. With these gifts, the frost giant can swiftly claim the title of jarl and easily fend off rivals for decades. However, if the frost giant doesn't give enough honor to Vaprak or fails to heed Vaprak's visions, injuries the frost giant sustains heal wrong, resulting in discolored skin; warty scars; and vestigial body parts, such as extra digits, limbs, and even heads. The touch of Vaprak can no longer be hidden then, and the everlasting one is either killed or exiled by their clan. Sometimes small communities of everlasting ones gather and even reproduce, passing the "blessing" and worship of Vaprak from one generation to the next.

```statblock
"name": "Frost Giant Everlasting One (MPMM)"
"size": "Huge"
"type": "giant"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "15"
"ac_class": "patchwork armor"
"hp": !!int "189"
"hit_dice": "14d12 + 98"
"stats":
- !!int "25"
- !!int "9"
- !!int "24"
- !!int "9"
- !!int "10"
- !!int "12"
"speed": "40 ft."
"saves":
  "Wisdom": !!int "4"
  "Strength": !!int "11"
  "Constitution": !!int "11"
"skillsaves":
  "Athletics": !!int "11"
  "Perception": !!int "4"
"damage_immunities": "cold"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Giant"
"cr": "12"
"traits":
- "desc": "The giant has a 25 percent chance of having more than one head. If it has\
    \ more than one, it has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks and on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]],\
    \ or knocked [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]."
  "name": "Extra Heads"
- "desc": "The giant regains 10 hit points at the start of its turn. If the giant\
    \ takes acid or fire damage, this trait doesn't function at the start of its next\
    \ turn. The giant dies only if it starts its turn with 0 hit points and doesn't\
    \ regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The giant makes two Greataxe or Rock attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 26\
    \ (3d12 + 7) slashing damage, or 30 (3d12 + 11) slashing damage while raging."
  "name": "Greataxe"
- "desc": "Ranged Weapon Attack: +11 to hit, range 60/240 ft., one target. Hit:\
    \ 29 (4d10 + 7) bludgeoning damage."
  "name": "Rock"
"bonus_actions":
- "desc": "The giant enters a rage. The rage lasts for 1 minute or until the giant\
    \ is [[/5. Mechanics/Rules/Conditions.md#Incapacitated|incapacitated]]. While raging,\
    \ the giant gains the following benefits:\n\n- The giant has advantage on Strength\
    \ checks and Strength saving throws.  \n- When it makes a melee weapon attack,\
    \ the giant gains a +4 bonus to the damage roll.  \n- The giant has resistance\
    \ to bludgeoning, piercing, and slashing damage.  "
  "name": "Vaprak's Rage (Recharges after a Short or Long Rest)"
"source":
- "MPMM"
- "VGM"
"image": "5. Mechanics/Bestiary/Giant/token/frost-giant-everlasting-one-mpmm.webp"
```
^statblock

## Environment

coastal

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
