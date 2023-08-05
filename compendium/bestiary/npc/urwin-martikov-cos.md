---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/cos
- monster/size/medium
- monster/type/humanoid/human
- monster/type/humanoid/shapechanger
statblock: true
statblock-link: "#^statblock"
"name": "Urwin Martikov"
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
  "desc": "Urwin can use its action to polymorph into a raven-humanoid hybrid or into\
    \ a raven, or back into its human form. Its statistics, other than its size, are\
    \ the same in each form. Any equipment it is wearing or carrying isn't transformed.\
    \ It reverts to its human form if it dies."
  "name": "Shapechanger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Urwin can mimic simple sounds it has heard, such as a person whispering,\
    \ a baby crying, or an animal chittering. A creature that hears the sounds can\
    \ tell they are imitations with a successful DC 10 Wisdom (Insight) check."
  "name": "Mimicry"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Urwin regains 10 hit points at the start of its turn. If Urwin takes damage\
    \ from a silvered weapon or a spell, this trait doesn't function at the start\
    \ of Urwin's next turn. Urwin dies only if it starts its turn with 0 hit points\
    \ and doesn't regenerate."
  "name": "Regeneration"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Urwin makes two weapon attacks, one of which can be with its hand crossbow."
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
"image": "/compendium/bestiary/npc/token/urwin-martikov.png"
aliases: ["Urwin Martikov"]
---
# Urwin Martikov
*Source: Curse of Strahd p. 98, Derived from Wereraven (VRGR)*  

```ad-statblock
title: Urwin Martikov
![](/compendium/bestiary/npc/token/urwin-martikov.png#token)
*Medium humanoid(human, shapechanger), Lawful Good*

- **Armor Class** 12 
- **Hit Points** `dice: 7d8|text(31)` (7d8) 
- **Speed** walk 30 ft. (fly 50 ft. in raven and hybrid forms)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|10 (+0)|15 (+2)|11 (+0)|13 (+1)|15 (+2)|14 (+2)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** Insight +4, Perception +6
- **Senses** passive Perception 16
- **Languages** Common (can't speak in raven form)
- **Challenge** 2

## Traits

***Shapechanger.*** Urwin can use its action to polymorph into a raven-humanoid hybrid or into a raven, or back into its human form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its human form if it dies.

***Mimicry.*** Urwin can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check.

***Regeneration.*** Urwin regains 10 hit points at the start of its turn. If Urwin takes damage from a silvered weapon or a spell, this trait doesn't function at the start of Urwin's next turn. Urwin dies only if it starts its turn with 0 hit points and doesn't regenerate.

## Actions

***Multiattack (Human or Hybrid Form Only).*** Urwin makes two weapon attacks, one of which can be with its hand crossbow.

***Beak (Raven or Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: 1 piercing damage in raven form, or 4 (`dice: 1d4 + 2|avg` (`1d4 + 2`)) piercing damage in hybrid form. If the target is humanoid, it must succeed on a DC 10 Constitution saving throw or be cursed with wereraven lycanthropy.

***Shortsword (Human or Hybrid Form Only).*** *Melee Weapon Attack:* `dice: d20+4` (+4 to hit), reach 5 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.

***Hand Crossbow (Human or Hybrid Form Only).*** *Ranged Weapon Attack:* `dice: d20+4` (+4 to hit), range 30/120 ft., one target. Hit: `dice: 1d6 + 2|avg` (`1d6 + 2`) piercing damage.
```
^statblock