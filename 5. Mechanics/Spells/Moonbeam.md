---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/druid
  - spell/level/2nd-level
  - spell/school/evocation
  - spell/subclass/moon-domain
  - spell/subclass/oath-of-the-ancients
  - spell/subclass/oath-of-the-watchers
  - spell/subclass/the-shapechanger
  - spell/subclass/twilight-domain
classes:
  - Bard
  - Cleric (Moon Domain)
  - Cleric (Twilight Domain)
  - Druid
  - Paladin (Oath of the Ancients)
  - Paladin (Oath of the Watchers)
  - Warlock (The Shapechanger)
school: Evocation
level: 2
ritual: false
time: 1 Action
duration: Up to 1 minute
components:
  - V
  - S
  - M
aliases:
  - Moonbeam
range: 120 feet
material: Several seeds of any moonseed plant and a piece of opalescent feldspar.
damageType: Radiant
save:
  type: CON
  success: half
area:
  type: cylinder
  size: 5
concentration: true
---
# Moonbeam
*2nd-level, Evocation*  

- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S, M (several seeds of any moonseed plant and a piece of opalescent feldspar)
- **Duration:** Concentration, up to 1 minute

A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.

When a creature enters the spell's area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes `dice:2d10|noform|noparens|avg` (`2d10`) radiant damage on a failed save, or half as much damage on a successful one.

A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can't assume a different form until it leaves the spell's light.

On each of your turns after you cast this spell, you can use an action to move the beam up to 60 feet in any direction.

**At Higher Levels.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by `dice:1d10|noform|noparens|avg|text(d10)` for each slot level above 2nd.

**Classes**: [Paladin (Oath of the Watchers)](compendium/lists/list-spells-classes-oath-of-the-watchers-tce.md "subclass=TCE"); [Cleric (Twilight Domain)](compendium/lists/list-spells-classes-twilight-domain-tce.md "subclass=TCE"); [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [[5. Mechanics/Lists/List Spells Classes Druid.md\|Druid]]; [[5. Mechanics/Lists/List Spells Classes Oath Of The Ancients.md\|Paladin (Oath of the Ancients)]]; [Cleric (Moon Domain)](compendium/lists/list-spells-classes-moon-domain-kpdm.md "subclass=KPDM"); [Warlock (The Shapechanger)](compendium/lists/list-spells-classes-the-shapechanger-griffonssaddlebag4.md "subclass=GriffonsSaddlebag4")

*Source: Player's Handbook p. 261. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*
