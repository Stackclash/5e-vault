---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/veor
- monster/cr/26
- monster/size/medium
- monster/type/undead/wizard
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/vecna-the-archlich.webp
relationships: []
aliases: [Vecna the Archlich]
pronounced: 
race: 
gender: 
age: 
alignment: Lawful Evil
occupation: 
groups: []
religions: []
personality: 
ideal: 
bond: 
flaw: 
goals: 
likes: 
dislikes: 
partyRelationships: {}
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('imageCarousel', {current: dv.current()})
> ```
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Gender** | `INPUT[inlineSelect(option(male),option(female)):gender]` |
> **Age** | `INPUT[number:age]` |
> **Alignment** | `INPUT[inlineSelect(option(Lawful Good),option(Neutral Good),option(Chaotic Good),option(Lawful Neutral),option(Neutral),option(Chaotic Neutral),option(Lawful Evil),option(Neutral Evil),option(Chaotic Evil)):alignment]` |
> **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `INPUT[inlineList:occupation]` |
> **Group(s)** | `INPUT[inlineList:groups]` |
> **Religion(s)** | `INPUT[inlineList:religions]` |
> **Current Location** | `INPUT[suggester(optionQuery(#location)):location]` |
> **Party Relationship** | `$=await dv.view('metaBindInput', {type: 'inlineSelect', options: ['option(Stranger)','option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page('Configuration').active_party).file.name]})` |

# **`=this.file.name`**
*Source: Vecna: Eve of Ruin p. 254*

On countless worlds, his name evokes tales of terror and cruelty: Vecna, the Undying King. Vecna, the Whispered One. Vecna, the Lord of the Rotted Tower. But Vecna had humble beginnings on the world of Oerth, where an order of wizards used him as a bootblack and scribe. He spent the better part of his childhood secretly educating himself in his masters' arts. Once Vecna learned all he could, he massacred the wizards. He then recorded his every foul thought and dream as he started to write his Book of Vile Darkness.

Vecna forged a kingdom on Oerth, but he grew bored with it after several centuries. He started inflicting suffering on other worlds. In this adventure, Vecna has risen to godhood on Oerth, but he seeks to become the most powerful god in existence and bend the multiverse to his will. By the time the characters are involved, Vecna's master plan is almost complete. He has funneled a significant amount of his energy into weaving his ritual. Therefore, when the characters finally confront Vecna and try to save the multiverse, he is in his archlich form and not his divine form.

On countless worlds, his name evokes tales of terror and cruelty. Vecna the Undying King. Vecna the Whispered One. Vecna the Lord of the Rotted Tower. Over more than a hundred thousand years, incandescent hatred carried him from the humblest of origins to a conqueror's throne, then to the realms that lie beyond life and death, and finally to godhood. Many have suffered his terrible wrath, but few can recount how a lowly scribe left an aeon-deep scar on the multiverse before ascending beyond the material altogether. Only a few fragments of Vecna's story have ever been unearthed.

It is said that Vecna was born into a lowly caste on the world of Oerth, son of a hedge witch and a father he never knew. An order of wizards exiled Vecna's mother into the wastes for practicing the forbidden art of necromancy. The order bound her orphaned son into servitude and employed him as first a bootblack, then a scribe. Vecna spent the better part of his childhood secretly educating himself in his masters' arts, stealing into their library of magical treatises each night after midnight. It was during these intense study sessions that he first heard a soothing voice in his head, a whisper from another world that promised him revenge if he would only yield to the hatred that was festering in his heart. Once Vecna learned all he could from his masters and their books, he massacred them. On that very night, the voice urged him to record his every foul thought and dream, and he started to pen his Book of Vile Darkness.

According to legend, Vecna went on to forge a kingdom in the world of Greyhawk. He ruled for several centuries from an obsidian tower that rose from the bottom of the black waters of the Nyr Dyv to stretch far above its surface. During this era, at the urging of the voice, Vecna conquered vast realms and swept great cities beneath earth and rock. Generations later, when his physical form finally started to succumb to the ravages of time, Vecna's festering hatred would not permit him to perish. He called upon the forbidden arts of necromancy to transform himself into a lich, a frightful being beyond the reach of death.

At some point, Vecna grew bored with his kingdom on Oerth and started visiting his evil on other worlds, still driven by the mysterious voice and his unquenchable hatred for all things true and pure. For a time, he is said to have inhabited a palace known as the Citadel of Cavitius, located in a vast field of ash somewhere near the border between the Planes of Earth and Fire.

Eventually, a fallen paladin known as Kas the Bloody-Handed rose through the ranks of Vecna's vile minions to become the archlich's personal guard and regent over many of the kingdoms and cults Vecna established across the multiverse. As a symbol of Kas's authority, Vecna forged him a terrifying weapon, the blade now known as the Sword of Kas. Later, Kas turned on Vecna and used the sword to sever the archlich's hand and put out his eye. No one knows why Kas betrayed Vecna. Some believe the mysterious voice that spoke to Vecna for eons grew to fear the archlich and began whispering to Kas instead.

After their clash, Kas and Vecna disappeared for ages. The former later emerged as the ruler of the wasteland domain of Tovag in the Shadowfell. The latter spent several centuries hopping from world to world, questing for his severed hand and eye. More recently, Vecna decamped to the Outer Planes, where he grew so powerful that he became a god. He has many ardent worshipers, all hungry for a taste of his immense power.

The accompanying stat block depicts Vecna in his archlich form prior to Kas's betrayal. Because Vecna is said to have mastered magic allowing him to travel through time, he can appear in this form even on worlds where his severed hand and eye are already known artifacts.

> [!note] The Book of Vile Darkness
> 
> While Vecna always carries the [Book of Vile Darkness](compendium/items/book-of-vile-darkness.md) on his person—in fact, he fashioned his lich form to encompass the Book—he typically has no need to call upon its foul magic in battle. If the DM wishes to run a more challenging (and more complex) encounter, Vecna may call upon any of the book's abilities as appropriate.
^the-book-of-vile-darkness

## Traits/Goals
> [!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-gray] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-gray] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-gray] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`

> [!column|dataview] Goals
>> `INPUT[textArea:goals]`

## Relationships
`BUTTON[add-relationship,remove-relationship]`
```meta-bind-button
style: primary
label: Add Relationship
id: add-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Add Relationship"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Remove Relationship"
```
> [!div | no-t clean txt-c]
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "Vecna the Archlich (VEoR)"
"size": "Medium"
"type": "undead"
"subtype": "wizard"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "272"
"hit_dice": "32d8 + 128"
"stats":
- !!int "14"
- !!int "16"
- !!int "18"
- !!int "22"
- !!int "24"
- !!int "16"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "15"
  "Intelligence": !!int "14"
  "Constitution": !!int "12"
"skillsaves":
  "Insight": !!int "15"
  "Perception": !!int "15"
  "History": !!int "14"
  "Arcana": !!int "22"
"damage_resistances": "cold, lightning, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical attacks"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [paralyzed](/compendium/rules/conditions.md#Paralyzed),\
  \ [poisoned](/compendium/rules/conditions.md#Poisoned), [stunned](/compendium/rules/conditions.md#Stunned)"
"senses": "truesight 120 ft., passive Perception 25"
"languages": "Common, Draconic, Elvish, Infernal"
"cr": "26"
"traits":
- "desc": "Vecna casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 22):\n\nAt\
    \ will: [Animate Dead](compendium/spells/animate-dead.md) (as an action), [Detect\
    \ Magic](compendium/spells/detect-magic.md), [Dispel Magic](compendium/spells/dispel-magic.md),\
    \ [Fly](compendium/spells/fly.md), [Lightning Bolt](compendium/spells/lightning-bolt.md),\
    \ [Mage Hand](compendium/spells/mage-hand.md), [Prestidigitation](compendium/spells/prestidigitation.md)\n\
    \n1/day each: [Dominate Monster](compendium/spells/dominate-monster.md), [Globe\
    \ of Invulnerability](compendium/spells/globe-of-invulnerability.md), [Plane Shift](compendium/spells/plane-shift.md)\
    \ (self only)\n\n2/day each: [Dimension Door](compendium/spells/dimension-door.md),\
    \ [Invisibility](compendium/spells/invisibility.md), [Scrying](compendium/spells/scrying.md)\
    \ (as an action)"
  "name": "Spellcasting"
- "desc": "If Vecna fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (5/Day)"
- "desc": "Vecna carries a magic dagger named Afterthought. In the hands of anyone\
    \ other than Vecna, Afterthought is a [+2 Dagger](compendium/items/2-weapon.md)."
  "name": "Special Equipment"
- "desc": "If Vecna is slain, his soul refuses to accept its fate and lives on as\
    \ a disembodied spirit that fashions a new body for itself after 1d100 years.\
    \ Vecna's new body appears within 100 miles of where he was slain. When the new\
    \ body is complete, Vecna regains all his hit points and becomes active again."
  "name": "Undying"
"actions":
- "desc": "Vecna uses Flight of the Damned (if available), Rotten Fate, or Spellcasting.\
    \ He then makes two attacks with Afterthought."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 7 (1d4\
    \ + 5) piercing damage plus 9 (2d8) necrotic damage. If the target is a creature,\
    \ it is afflicted by entropic magic, taking 9 (2d8) necrotic damage at the start\
    \ of each of its turns. Immediately after taking this damage on its turn, the\
    \ target must make a DC 20 Constitution saving throw, ending the effect on itself\
    \ on a success. Until it succeeds on this save, the afflicted target can't regain\
    \ hit points."
  "name": "Afterthought"
- "desc": "Vecna conjures a torrent of flying, spectral entities that fill a 120-foot\
    \ cone and pass through all creatures in that area before dissipating. Each creature\
    \ in that area must make a DC 22 Constitution saving throw. On a failed save,\
    \ the creature takes 36 (8d8) necrotic damage and has the [frightened](/compendium/rules/conditions.md#Frightened)\
    \ condition for 1 minute. On a successful save, the creature takes half as much\
    \ damage only. A [frightened](/compendium/rules/conditions.md#Frightened) creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Flight of the Damned (Recharge 5-6)"
- "desc": "Vecna causes necrotic magic to engulf one creature he can see within 120\
    \ feet of himself. The target must make a DC 22 Constitution saving throw, taking\
    \ 96 (8d8 + 60) necrotic damage on a failed save or half as much damage on a successful\
    \ one. A Humanoid killed by this magic rises as a zombie at the start of Vecna's\
    \ next turn and acts immediately after Vecna in the initiative order. The zombie\
    \ is under Vecna's control."
  "name": "Rotten Fate"
"bonus_actions":
- "desc": "Vecna teleports, along with any equipment he is wearing or carrying, up\
    \ to 30 feet to an unoccupied space he can see. He can cause each creature of\
    \ his choice within 15 feet of his destination space to take 10 (3d6) psychic\
    \ damage. If at least one creature takes this damage, Vecna regains 80 hit points."
  "name": "Vile Teleport"
"reactions":
- "desc": "Vecna can take up to three reactions per round but only one per turn."
  "name": ""
- "desc": "Vecna utters a dread word to interrupt a creature he can see that is casting\
    \ a spell. If the spell is 4th level or lower, it fails and has no effect. If\
    \ the spell is 5th level or higher, Vecna makes an Intelligence check (DC 10 plus\
    \ the spell's level). On a successful check, the spell fails and has no effect.\
    \ Whatever the spell's level, the caster takes 10 (3d6) psychic damage if the\
    \ spell fails."
  "name": "Dread Counterspell"
- "desc": "In response to being hit by an attack, Vecna utters a fell word, dealing\
    \ 10 (3d6) necrotic damage to the attacker, and Vecna teleports, along with any\
    \ equipment he is wearing or carrying, up to 30 feet to an unoccupied space he\
    \ can see."
  "name": "Fell Rebuke"
"source":
- "VEoR"
"image": "compendium/bestiary/npc/token/vecna-the-archlich-veor.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes