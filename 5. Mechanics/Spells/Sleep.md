---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
  - compendium/src/5e/phb
  - spell/class/bard
  - spell/class/sorcerer
  - spell/class/wizard
  - spell/feat/fey-touched
  - spell/feat/magic-initiate
  - spell/level/1st-level
  - spell/school/enchantment
  - spell/subclass/arcane-trickster
  - spell/subclass/darkness-domain
  - spell/subclass/eldritch-knight
  - spell/subclass/oath-of-redemption
  - spell/subclass/the-archfey
  - spell/subclass/twilight-domain
classes:
  - Bard
  - Cleric (Darkness Domain)
  - Cleric (Twilight Domain)
  - Fighter (Eldritch Knight)
  - Paladin (Oath of Redemption)
  - Rogue (Arcane Trickster)
  - Sorcerer
  - Warlock (The Archfey)
  - Wizard
school: Enchantment
level: 1
ritual: false
time: 1 Action
duration: 1 minute
components:
  - V
  - S
  - M
aliases:
  - Sleep
range: 90 feet
material: 'A pinch of fine sand, rose petals, or a cricket.'
area:
  type: sphere
  size: 20
---
# Sleep
*1st-level, Enchantment*  

- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S, M (a pinch of fine sand, rose petals, or a cricket)
- **Duration:** 1 minute

This spell sends creatures into a magical slumber. Roll `dice:5d8|noform|noparens|avg` (`5d8`); the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring [[/5. Mechanics/Rules/Conditions.md#Unconscious\|unconscious]] creatures).

Starting with the creature that has the lowest current hit points, each creature affected by this spell falls [[/5. Mechanics/Rules/Conditions.md#Unconscious\|unconscious]] until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.

Undead and creatures immune to being [[/5. Mechanics/Rules/Conditions.md#Charmed\|charmed]] aren't affected by this spell.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, roll an additional `dice:2d8|noform|noparens|avg|text(2d8)` for each slot level above 1st.

**Classes**: [[5. Mechanics/Lists/List Spells Classes Wizard.md\|Wizard]]; [[5. Mechanics/Lists/List Spells Classes Arcane Trickster.md\|Rogue (Arcane Trickster)]]; [Cleric (Twilight Domain)](compendium/lists/list-spells-classes-twilight-domain-tce.md "subclass=TCE"); [[5. Mechanics/Lists/List Spells Classes Sorcerer.md\|Sorcerer]]; [[5. Mechanics/Lists/List Spells Classes Bard.md\|Bard]]; [Cleric (Darkness Domain)](compendium/lists/list-spells-classes-darkness-domain-kpdm.md "subclass=KPDM"); [[5. Mechanics/Lists/List Spells Classes Eldritch Knight.md\|Fighter (Eldritch Knight)]]; [[5. Mechanics/Lists/List Spells Classes The Archfey.md\|Warlock (The Archfey)]]; [Paladin (Oath of Redemption)](compendium/lists/list-spells-classes-oath-of-redemption-xge.md "subclass=XGE")

*Source: Player's Handbook p. 276. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*
