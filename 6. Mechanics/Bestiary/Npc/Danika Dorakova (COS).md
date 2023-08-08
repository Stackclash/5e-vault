---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
statblock: inline
---
# Danika Dorakova
*Source: Curse of Strahd p. 98, Derived from Wereraven (VRGR)*  

```statblock
"name": "Danika Dorakova"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Lawful Good"
"ac": !!int "12"
"hp": !!int "31"
"hit_dice": "7d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "11"
- !!int "13"
- !!int "15"
- !!int "14"
"speed": "walk 30 ft. (fly 50 ft. in raven and hybrid forms)"
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Common (can't speak in raven form)"
"cr": "2"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Danika can use its action to polymorph into a raven-humanoid hybrid or\
    \ into a raven, or back into its human form. Its statistics, other than its size,\
    \ are the same in each form. Any equipment it is wearing or carrying isn't transformed.\
    \ It reverts to its human form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Danika can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Danika regains 10 hit points at the start of its turn. If Danika takes\
    \ damage from a silvered weapon or a spell, this trait doesn't function at the\
    \ start of Danika's next turn. Danika dies only if it starts its turn with 0 hit\
    \ points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Danika makes two weapon attacks, one of which can be with its hand crossbow."
  "name": "Multiattack (Human or Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage in raven form, or 4 (dice: 1d4 + 2|avg (1d4 + 2))\
    \ piercing damage in hybrid form. If the target is humanoid, it must succeed on\
    \ a DC 10 Constitution saving throw or be cursed with wereraven lycanthropy."
  "name": "Beak (Raven or Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortsword (Human or Hybrid Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Hand Crossbow (Human or Hybrid Form Only)"
"source":
- "CoS"
"image": "6. Mechanics/Bestiary/Npc/token/danika-dorakova.png"
```
^statblock