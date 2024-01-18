---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/cr/2
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
statblock: inline
aliases: ["Wereraven"]
---
# [[5. Mechanics\Bestiary\Humanoid\Wereraven (VRGR).md|Wereraven]]
*Source: Van Richten's Guide to Ravenloft p. 253, Curse of Strahd p. 242*  

```statblock
"name": "Wereraven (VRGR)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Unaligned"
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
"speed": "30 ft. (fly 50 ft. in raven and hybrid forms)"
"skillsaves":
  "Insight": !!int "4"
  "Perception": !!int "6"
"senses": "passive Perception 16"
"languages": "Common (can't speak in raven form)"
"cr": "2"
"traits":
- "desc": "The wereraven can use its action to polymorph into a raven-humanoid hybrid\
    \ or into a raven, or back into its human form. Its statistics, other than its\
    \ size, are the same in each form. Any equipment it is wearing or carrying isn't\
    \ transformed. It reverts to its human form if it dies."
  "name": "Shapechanger"
- "desc": "The wereraven can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
- "desc": "The wereraven regains 10 hit points at the start of its turn. If the wereraven\
    \ takes damage from a silvered weapon or a spell, this trait doesn't function\
    \ at the start of the wereraven's next turn. The wereraven dies only if it starts\
    \ its turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "The wereraven makes two weapon attacks, one of which can be with its hand\
    \ crossbow."
  "name": "Multiattack (Human or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: 1 piercing damage in raven form, or dice: 1d4 + 2|avg (1d4 + 2) piercing\
    \ damage in hybrid form. If the target is humanoid, it must succeed on a DC 10\
    \ Constitution saving throw or be cursed with wereraven lycanthropy."
  "name": "Beak (Raven or Hybrid Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+4 (+4 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Shortsword (Human or Hybrid Form Only)"
- "desc": "Ranged Weapon Attack: dice: d20+4 (+4 to hit), range 30/120 ft., one\
    \ target. Hit: dice: 1d6 + 2|avg (1d6 + 2) piercing damage."
  "name": "Hand Crossbow (Human or Hybrid Form Only)"
"source":
- "VRGR"
- "CM"
- "CoS"
"image": "compendium/bestiary/humanoid/token/wereraven.png"
```
^statblock