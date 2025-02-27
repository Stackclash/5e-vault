---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - spell
  - compendium/src/5e/kpdm
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/level/2nd-level
  - spell/school/conjuration
  - spell/subclass/arcane-trickster
  - spell/subclass/eldritch-knight
level: 2nd-level
range: false
school: Conjuration
time: 1 action
duration: Instantaneous
components: 'V, S'
aliases:
  - Chaotic Vitality
---
# Chaotic Vitality
*2nd-level, Conjuration*  

- **Casting time:** 1 action
- **Range:** Touch
- **Components:** V, S
- **Duration:** Instantaneous

Make a melee spell attack against a creature that has a number of Hit Dice no greater than your level and has at least 1 hit point. On a hit, you conjure pulsating waves of chaotic energy within the creature and yourself. After a brief moment that seems to last forever, your hit point total changes, as does the creature's. Roll a `dice:d100|noform|avg` (`d100`) and increase or decrease the number rolled by any number up to your spellcasting level, then find the result on the Hit Point Flux table. Apply that result both to yourself and the target creature. Any hit points gained beyond a creature's normal maximum are temporary hit points that last for 1 round per caster level.

**Hit Point Flux**

`dice: [[Chaotic Vitality (KPDM).md#^hit-point-flux]]`

| dice: d100 | HP for both creatures |
|------------|-----------------------|
| 1-9 | 0 |
| 10-39 | 1 |
| 40-69 | 25 percent of total |
| 70-84 | 50 percent of total |
| 85-94 | 75 percent of total |
| 95-99 | 100 percent of total |
| 100 | 200 percent of total, and both creatures gain the effect of a [[5. Mechanics/Spells/Haste.md\|haste]] spell that lasts for 1 round per caster level |
^hit-point-flux

For example, a 3rd-level spellcaster who currently has 17 of her maximum 30 hit points casts chaotic vitality on a creature with 54 hit points and rolls a 75 on the Hit Point Flux table. The two creatures have a combined total of 71 hit points. A result of 75 indicates that both creatures get 50 percent of the total, so the spellcaster and the target end up with 35 hit points each. In the spellcaster's case, 5 of those hit points are temporary and will last for 3 rounds.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the maximum Hit Dice of the affected creature increases by 2 for each slot level above 2nd.

**Classes**: [[List Spells Classes Bard\|Bard]]; [[List Spells Classes Sorcerer\|Sorcerer]]; [[List Spells Classes Wizard\|Wizard]]; [[List Spells Classes Rogue Arcane Trickster\|Rogue (Arcane Trickster)]]; [[List Spells Classes Fighter Eldritch Knight\|Fighter (Eldritch Knight)]]

*Source: Deep Magic p. 183*
