---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/saf
- monster/cr/5
- monster/size/medium
- monster/type/humanoid/human
statblock: inline
aliases: ["Sir Pelliton"]
---
# [Sir Pelliton](compendium\bestiary\npc/sir-pelliton-saf.md)
*Source: Strongholds and Followers p. 144*  

Sir Pelliton, the Star Knight, is one of the frightful Knights of the Three Roses. Before being knighted by Lord Saxton, Pelliton and his Three Roses were a cruel, selfish band of mercenaries known as the Thorns. Knighthood has only magnified his sadism and self-importance.

His pact with an entity of the stars has granted his body strange resistances and imparted upon him the power to wield uncanny magic. In battle, Pelliton often rides a jet-black warhorse named Penumbra. Pelliton is described in more detail in Major NPCs (page 101).

```statblock
"name": "Sir Pelliton (SaF)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"stats":
- !!int "18"
- !!int "8"
- !!int "17"
- !!int "13"
- !!int "15"
- !!int "18"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "3"
  "Intelligence": !!int "5"
"skillsaves":
  "Intimidation": !!int "8"
  "Animal Handling": !!int "6"
  "Arcana": !!int "5"
"damage_resistances": "cold, fire, lightning, psychic"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]]"
"senses": "passive Perception 12"
"languages": "Common"
"cr": "5"
"traits":
- "desc": "Sir Pelliton has gained the power to cast dark magic. All spells he casts\
    \ with this feature are cast as if using a 5th-level spell slot, and he casts\
    \ cantrips as if he were an 11th-level warlock. His spellcasting ability is Wisdom\
    \ (DC 16, dice: d20+8 (+8 to hit) with spell attacks).\n\nAt will: [acid\
    \ splash](compendium/spells/acid-splash.md), [[5. Mechanics/Spells/Eldritch Blast.md|eldritch blast]]\
    \ (3 beams), [[5. Mechanics/Spells/Minor Illusion.md|minor illusion]], [[5. Mechanics/Spells/Hellish Rebuke.md|hellish rebuke]]\n\
    \n1/day each: [[5. Mechanics/Spells/Cone Of Cold.md|cone of cold]], [[5. Mechanics/Spells/Eyebite.md|eyebite]],\
    \ [[5. Mechanics/Spells/Mass Suggestion.md|mass suggestion]]\n\nUnknown: [branding\
    \ smite](compendium/spells/branding-smite.md), black tentacles, [[5. Mechanics/Spells/Counterspell.md|counterspell]],\
    \ [[5. Mechanics/Spells/Dimension Door.md|dimension door]], [[5. Mechanics/Spells/Hold Person.md|hold person]]"
  "name": "innate"
- "desc": "While mounted, Sir Pelliton has advantage on melee attack rolls against\
    \ unmounted creatures that are smaller than his mount."
  "name": "Mounted Combatant"
- "desc": "Sir Pelliton has resistance to cold, fire, lightning, and psychic damage\
    \ as a sign of his pact, and cannot be [[/5. Mechanics/Rules/Conditions.md#blinded|blinded]]\
    \ or [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]]. His hellish rebuke\
    \ does 20 damage (no roll) to enemies who fail their save."
  "name": "The Star Knight"
"actions":
- "desc": "Sir Pelliton makes three melee attacks or makes two melee attacks and casts\
    \ eldritch blast."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage plus dice: 1d6|avg\
    \ (1d6) cold damage."
  "name": "Frost Brand Longsword"
- "desc": "Melee Weapon Attack: dice: d20+8 (+8 to hit), reach 10 ft., one target.\
    \ Hit: dice: 1d12 + 4|avg (1d12 + 4) piercing damage."
  "name": "Lance"
"reactions":
- "desc": "As a reaction, when a minion dies, issue a command to your other minions.\
    \ Those who can hear you gain a reaction they can use to immediately take another\
    \ movement."
  "name": "Villain Ability: Warlord"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Sir%20Pelliton.png"
```
^statblock