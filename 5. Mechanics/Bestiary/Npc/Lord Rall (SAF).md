---
cssclass: json5e-monster
tags:
- compendium/src/5e/saf
- monster/size/medium
- monster/type/aberration
aliases: ["Lord Rall"]
---
# Lord Rall
*Source: Strongholds and Followers p. 171*  

The Vizier of the Court, Lord Rall is Maladar's personal wizard. Once Lord Rall had a more conventional form, but he forgot it somewhere and never seemed to notice. As he demonstrates in battle, he can reform himself out of any old organs you may have lying around.

Rall is precise and surgical. Tactical. He likes experimenting on his enemies. He is fascinated by creatures with one set form. Creatures who find their identities wrapped up in their shape. How strange, Lord Rall thinks. Imagine what a different person you would be if you wore your brains on the outside. Or if you had many fewer, or many more, limbs. Only fools fear change.

Rall has no ambition, does not plot or scheme. For this reason he does not rise higher than vizier to this, the lower court. But neither does he need fear betrayal.

## Tactics

Rall is a potent wizard. Unlike the Queen of Bone, Rall is not particularly interested in helping his allies, preferring to drop cloudkill on his enemies or lock them in place with black tentacles.

Lord Rall channels his power through The Staff of Changing ^[Like all the servitor items, it possesses no magic of its own, so the players don't suddenly come into possession of a powerful artifact if they kill Lord Rall.], molding enemies to suit his terrible whims. Because of his deep understanding of form and changing, he does not need to concentrate on this. He fully expects to be able to turn every enemy in the battle into slimy things, given time.

```statblock
"name": "Lord Rall"
"size": "Medium"
"type": "aberration"
"alignment": "Chaotic"
"ac": !!int "12"
"hp": !!int "91"
"hit_dice": "14d8 + 28"
"stats":
- !!int "13"
- !!int "10"
- !!int "14"
- !!int "20"
- !!int "15"
- !!int "16"
"speed": "30 ft., fly 10 ft. (hover)"
"saves":
  "Charisma": "+6"
  "Wisdom": "+5"
  "Intelligence": "+8"
"skillsaves":
  "Deception": "+6"
  "Insight": "+5"
  "History": "+8"
  "Arcana": "+8"
"damage_resistances": "psychic"
"condition_immunities": "charmed, petrified"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Deep Speech, Primordial"
"cr": "8"
"traits":
- "desc": "Lord Rall is a 10th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 16, dice: d20+8 (+8 to hit) with spell attacks). He has the\
    \ following wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Mage Hand.md|mage hand]],\
    \ [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]], [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]\n\
    \n1st level (4 1st-level slots): [[5. Mechanics/Spells/Mage Armor.md|mage armor]],\
    \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]], [[5. Mechanics/Spells/Sleep.md|sleep]]\n\
    \n2nd level (3 2nd-level slots): [[5. Mechanics/Spells/Ray Of Enfeeblement.md|ray of enfeeblement]],\
    \ [[5. Mechanics/Spells/Mirror Image.md|mirror image]]\n\n3rd level (3 3rd-level\
    \ slots): [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]], [[5. Mechanics/Spells/Haste.md|haste]]\n\
    \n4th level (3 4th-level slots): black tentacles, [[5. Mechanics/Spells/Blight.md|blight]]\n\
    \n5th level (2 5th-level slots): [[5. Mechanics/Spells/Cloudkill.md|cloudkill]]"
  "name": "spells"
- "desc": "The Court of All Flesh are beings of pure chaos. Because their minds are\
    \ pure disorder, they cannot be driven mad or [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]]\
    \ and any attempts to magically compel their behavior fails."
  "name": "Everchanging Changers"
- "desc": "Lord Rall is immune to any spell or effect that would alter his form."
  "name": "Formless Shape"
- "desc": "As an action, Lord Rall can polymorph into a Small or Medium creature or\
    \ back into his true form. His statistics, other than his size, are the same in\
    \ each form. Any worn or carried equipment isn't transformed. He reverts to his\
    \ true form if he dies."
  "name": "Shapechanger"
"actions":
- "desc": "Lord Rall makes two melee attacks with the Staff of Changing."
  "name": "Multiattack"
- "desc": "Rall's staff remakes a target into any shape he desires. He casts polymorph\
    \ from it as an action. The range is 30 feet, and the Wisdom saving throw has\
    \ a DC of 16. Lord Rall does not need to concentrate on this spell to maintain\
    \ it."
  "name": "The Staff of Changing (Recharge 5-6)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 1|avg (2d6 + 1) bludgeoning damage, or dice: 2d8 + 1|avg\
    \ (2d8 + 1) bludgeoning damage if wielded with two hands."
  "name": "Greatstaff"
- "desc": "When he drops to 0 hit points, Lord Rall can reform himself from any corpse\
    \ within 120 feet instead of falling [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]].\
    \ Lord Rall does not need to see the corpse in order to use it. The process happens\
    \ in an instant, and the newly formed Lord Rall appears with only half of his\
    \ maximum hit points."
  "name": "Any Pile of Organs Will Do (Recharge 6-6)"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Lord%20Rall.png"
```
^statblock