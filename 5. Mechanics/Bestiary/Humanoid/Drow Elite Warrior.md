---
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/underdark
- monster/size/medium
- monster/type/humanoid/elf
aliases: ["Drow Elite Warrior"]
---
# Drow Elite Warrior
*Source: Monster Manual p. 128*  

## Drow

Tens of thousands of years ago, the elves were divided, with those of benevolent disposition battling those that were selfish and cruel. The war among elvenkind ended when the good elves banished their malevolent kin to the subterranean depths. Here, in the lightless caverns and endless warrens of twisting passages, the dark elves-the drow-found refuge. They also found leadership in the only elven deity who had not forsaken them. At her command, the dark elves built an empire in the underworld.

### Children of Lolth

The drow worship Lolth, a deity who resides in the Abyss. Known as the Spider Queen or the Demon Queen of Spiders, she is the figure around which the dark elves have built their subterranean civilization. Whatever she demands, the drow do. The wickedest of elves, drow are seldom seen by the surface world. Though they plot to destroy the elves that banished them, they no longer see themselves as exiles. They are the destined rulers of the darkness, and when Lolth commands them to rise up and destroy their surface-dwelling kin, they will.

### Creatures of Darkness

The drow have lived underground for so long that they have evolved to their surroundings and can see in the dark. However, they can no longer stand sunlight. When slaves are in short supply in the Underdark, the drow send raiding parties to the surface to capture humanoids under cover of darkness, bringing them back to their cities to be tortured into submission. Beyond those occasional excursions, the drow are content to remain in their subterranean realm, where they feel secure and in control.

### Underdark Cities

The dark elves build fantastic cities in enormous caverns where food and water are abundant. Their ability to sculpt stone rivals that of the greatest dwarf artisans, yet their structures retain a decidedly elven aesthetic. Though appearing delicate, drow settlements are structurally sound and remarkably resilient. The drow like to hollow out enormous stalagmites and stalactites, creating populated spires that rise from the floors and ceilings. A drow city is a sprawling metropolis enclosed by high walls. Non-drow visitors must conduct their business outside the walls under watchful eyes. The drow raise and keep giant spiders to help protect their cities against intruders, even as they drape those cities in beautiful webbing, creating a gossamer snare to catch flying enemies that would otherwise soar over the walls.

### Drow Magic

Just as the drow have adapted to underground life, so too has their magic. In addition to using that magic to carve their cities from stone, they empower their weapons, create dangerous new magic items, and summon demons from the Abyss. Drow spellcasters are supremely arrogant and never hesitate to use their magic in the most abhorrent ways.

### Arms and Armor

Drow craft weapons made of adamantine, a dark and supernaturally hard metal. Drow artisans adorn their weapons and armor with web-like filigree and spider motifs, and mages sometimes imbue items with magic to enhance their effectiveness. However, such magic fades when exposed to sunlight, so that magical drow weapons and armor rarely retain their enhancement bonuses and magical properties when brought to the surface.

### Cutthroat Politics

Drow politics are cutthroat and rife with intrigue. When drow work together, it is typically to destroy a common foe and ensure their own survival, and such alliances are short lived and fraught with peril.

Drow society is divided into noble houses, each ruled by a matron who seeks to raise the prestige and power of her house above all others. Other high-ranking members of the house are blood relatives, while the middling ranks are flush with drow from weaker families that have sworn fealty to the greater house. Clinging precariously to the bottom rung of a house's social ladder are the house slaves, made up of drow of low birth and the occasional non-drow captive.

### Matriarchal Rule

Lolth, through her faithful priestesses, dictates the rules of drow society, ensuring that her orders and plots are carried out. Since Lolth is prone to manifesting on the Material Plane and directly punishing those that disobey her, the drow have learned to heed what she says and do as her priestesses command.

In drow society, males are subservient to females. A male drow might lead an Underdark patrol or a raiding party to the surface, but he reports to a female drow-either the matron of his house or one of her hand-picked female subordinates. Although male drow can fill almost any function in drow society, they can't be priests, nor can they rule a house.

### Poison Predilection

Distilled from spider venom and the flora of the Underdark, poison can be found in abundance among the drow, and it plays an important part in their culture and politics. Drow mages concoct a viscid toxin that leaves enemies [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]. Drow warriors coat their blades and crossbow bolts with this venom, looking forward to the interrogation and torture that follows combat.

> [!note] Variant: Drow Magic Armor and Weapons
> 
> Drow often wear magic armor and carry magic weapons that lose their enhancement bonuses permanently if they are exposed to sunlight for 1 hour or longer.
> 
> - A drow wearing a +1 chain shirt and carrying a +1 shortsword has AC 16 and a +1 bonus on attack and damage rolls with shortsword attacks.  
> - A drow elite warrior wearing +2 studded leather and carrying a +2 shortsword has AC 20 and a +2 bonus on attack and damage rolls with shortsword attacks.  
> - A drow priestess of Lolth wearing +3 scale mail has AC 19.  
^variant-drow-magic-armor-and-weapons

> [!quote]- A quote from Nelar Autumnwell, elf cleric of Corellon Larethian  
> 
> Such depravity. Such terrifying cruelty. They are the vile poison that plagues all elvenkind.


```statblock
"name": "Drow Elite Warrior"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "18"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"stats":
- !!int "13"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "12"
"speed": "30 ft."
"saves":
  "Dexterity": "+7"
  "Wisdom": "+4"
  "Constitution": "+5"
"skillsaves":
  "Stealth": "+10"
  "Perception": "+4"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "5"
"traits":
- "desc": "The drow's spellcasting ability is Charisma (spell save DC 12). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [[5. Mechanics/Spells/Dancing Lights.md|dancing lights]]\n\n1/day each:\
    \ [[5. Mechanics/Spells/Darkness.md|darkness]], [[5. Mechanics/Spells/Faerie Fire.md|faerie fire]],\
    \ [[5. Mechanics/Spells/Levitate.md|levitate]] (self only)"
  "name": "innate"
- "desc": "The drow has advantage on saving throws against being [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]]) checks that\
    \ rely on sight."
  "name": "Sunlight Sensitivity"
"actions":
- "desc": "The drow makes two shortsword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+7 (+7 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage plus dice: 3d6|avg\
    \ (3d6) poison damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice: d20+7 (+7 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage, and the target\
    \ must succeed on a DC 13 Constitution saving throw or be [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 hour. If the saving throw fails by 5 or more, the target is also [[/5. Mechanics/Rules/Conditions.md#unconscious|unconscious]]\
    \ while [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in this way. The\
    \ target wakes up if it takes damage or if another creature takes an action to\
    \ shake it awake."
  "name": "Hand Crossbow"
"reactions":
- "desc": "The drow adds 3 to its AC against one melee attack that would hit it. To\
    \ do so, the drow must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "MM"
- "SKT"
- "TftYP"
- "WDH"
- "WDMM"
- "DC"
- "DIP"
- "SLW"
- "IDRotF"
- "CRCotN"
"image": "compendium/bestiary/humanoid/token/drow-elite-warrior.png"
```
^statblock

## Environment

underdark