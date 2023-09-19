---
cssclass: json5e-monster
tags:
- compendium/src/5e/mpmm
- monster/environment/desert
- monster/environment/urban
- monster/size/medium
- monster/type/humanoid/cleric
aliases: ["War Priest"]
---
# War Priest
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 254*  

War priests worship deities of war, protection, and strategy. They plan tactics, lead soldiers into battle, confront enemy spellcasters, and tend to casualties. A war priest might command an army or serve as the right hand of a [[5. Mechanics/Bestiary/Humanoid/Warlord (MPMM).md|warlord]] (appears in "this book") on the battlefield.

War priests typically adorn themselves with a symbol of their faith. You can roll on the War Priest Holy Symbols table below, or choose one that fits your campaign.

**War Priest Holy Symbols**

| dice: d8 | Holy Symbol |
|----------|-------------|
| 1 | Vial of iridescent liquid |
| 2 | Hilt of a broken sword |
| 3 | Piece of stained glass from a shrine |
| 4 | Clay figurine of a [[5. Mechanics/Bestiary/Celestial/Ki Rin (MPMM).md|ki-rin]] or another Celestial |
| 5 | [[5. Mechanics/Items/Torch.md|Torch]] carved so that a hand appears to be holding the flame |
| 6 | Circlet of woven reeds |
| 7 | Scrimshawed bone |
| 8 | Vessel such as a cup, a [[5. Mechanics/Items/Jug.md|jug]], an urn, or an amphora |
^war-priest-holy-symbols

```statblock
"name": "War Priest"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric"
"alignment": "Any alignment"
"ac": !!int "18"
"hp": !!int "117"
"hit_dice": "18d8 + 36"
"stats":
- !!int "16"
- !!int "10"
- !!int "14"
- !!int "11"
- !!int "17"
- !!int "13"
"speed": "30 ft."
"saves":
  "Wisdom": "+7"
  "Constitution": "+6"
"skillsaves":
  "Intimidation": "+5"
  "Religion": "+4"
"senses": "passive Perception 13"
"languages": "any two languages"
"cr": "9"
"traits":
- "desc": "The war priest casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 15):\n\nAt will: [[5. Mechanics/Spells/Light.md|light]],\
    \ [[5. Mechanics/Spells/Spare The Dying.md|spare the dying]], [[5. Mechanics/Spells/Thaumaturgy.md|thaumaturgy]]\n\
    \n1/day each: [[5. Mechanics/Spells/Banishment.md|banishment]], [[5. Mechanics/Spells/Command.md|command]],\
    \ [[5. Mechanics/Spells/Dispel Magic.md|dispel magic]], [[5. Mechanics/Spells/Flame Strike.md|flame strike]],\
    \ [[5. Mechanics/Spells/Guardian Of Faith.md|guardian of faith]], [[5. Mechanics/Spells/Hold Person.md|hold person]],\
    \ [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]], [[5. Mechanics/Spells/Revivify.md|revivify]]"
  "name": "spells"
"actions":
- "desc": "The war priest makes two Maul attacks, and it uses Holy Fire."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 3|avg (2d6 + 3) bludgeoning damage  plus Hit: dice:\
    \ 3d6|avg (3d6) radiant damage."
  "name": "Maul"
- "desc": "The war priest targets one creature it can see within 60 feet of it. The\
    \ target must make a DC 15 Wisdom saving throw. On a failed save, the target takes\
    \ dice: 2d8 + 3|avg (2d8 + 3) radiant damage, and it is [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ until the start of the war priest's next turn. On a successful save, the target\
    \ takes half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]."
  "name": "Holy Fire"
"bonus_actions":
- "desc": "The war priest or one creature of its choice within 60 feet of it regains\
    \ dice: 2d8 + 3|avg (2d8 + 3) hit points."
  "name": "Healing Light (Recharge 4-6)"
"source":
- "MPMM"
- "VGM"
"image": "compendium/bestiary/humanoid/token/war-priest.png"
```
^statblock

## Environment

desert, urban