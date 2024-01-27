---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
relationships: []
tags: 
aliases: []
pronounced: 
race: 
gender: 
age: 
alignment: 
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
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  "`INPUT[text:pronounced]`"
> ![[4. World Almanac/NPCs/img/153-636988936829621698.webp|cover hm-sm]] 
> ###### Bio
>  |
>  ---|---|
> **Race** | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> **Sex** | `INPUT[inlineSelect(option(male),option(female)):gender]` |
> **Age** | `INPUT[number:age]` |
> **Alignment** | `INPUT[inlineSelect(option(lawful good),option(neutral good),option(chaotic good),option(lawful neutral),option(neutral),option(chaotic neutral),option(lawful evil),option(netural evil),option(chaotic evil)):alignment]` |
> **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` |
> ###### Info
>  |
>  ---|---|
> **Alias(es)** | `INPUT[inlineList:aliases]` |
> **Occupation(s)** | `INPUT[inlineList:occupation]` |
> **Group(s)** | `INPUT[inlineList:groups]` |
> **Religion(s)** | `INPUT[inlineList:religions]` |
> **Current Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |

# **`=this.file.name`**
With his mind sharp and his heart dark, Strahd von Zarovich is a formidable foe. Courage and lives beyond measure have been lost to him. Reread chapter 1, "Into the Mists," to understand his personality and goals.

Although Strahd can be encountered almost anywhere in his domain, the vampire is always encountered in the place indicated by the card reading in chapter 1, unless he has been forced into his tomb in the catacombs of Castle Ravenloft.

## Strahd's Tactics

Because the entire adventure revolves around Strahd, you must play him intelligently and do everything you can to make him a terrifying and cunning adversary for the player characters.

When you run an encounter with Strahd, keep the following facts in mind:

- Strahd attacks at the most advantageous moment and from the most advantageous position.  
- Strahd knows when he's in over his head. If he begins taking more damage than he can regenerate, he moves beyond the reach of melee combatants and spellcasters, or he flies away (using summoned wolves or swarms of bats or rats to guard his retreat).  
- Strahd observes the characters to see who among them are most easily swayed, then tries to charm characters who have low Wisdom scores and use them as thralls. At the very least, he can order a charmed character to guard him against other members of the adventuring party.  

## The Vampire's Minions

Whenever Strahd appears in a location other than his tomb or the place indicated by the card reading, roll a `dice: d20|avg` (`d20`) and consult the Strahd's Minions table to determine what creatures he brings with him, if any.

## Strahd's Minions

| dice: d20 | Creatures |
|-----------|-----------|
| 1–3 | `dice: 1d4 + 2\|avg` (`1d4 + 2`) [[5. Mechanics/Bestiary/Beast/Dire Wolf.md|dire wolves]] |
| 4–6 | `dice: 1d6 + 3\|avg` (`1d6 + 3`) [[5. Mechanics/Bestiary/Undead/Ghoul.md|ghouls]] |
| 7–9 | `dice: 1d4 + 2\|avg` (`1d4 + 2`) [[5. Mechanics/Bestiary/Undead/Strahd Zombie (COS).md|Strahd zombies]] (in this appendix) |
| 10–12 | `dice: 2d4\|avg` (`2d4`) [[5. Mechanics/Bestiary/Beast/Swarm Of Bats.md|swarms of bats]] |
| 13–15 | `dice: 1d4 + 1\|avg` (`1d4 + 1`) [[5. Mechanics/Bestiary/Undead/Vampire Spawn.md|vampire spawn]] |
| 16–18 | `dice: 3d6\|avg` (`3d6`) [[5. Mechanics/Bestiary/Beast/Wolf.md|wolves]] |
| 19–20 | None |
^creatures

If the characters are in a residence, Strahd's creatures break through doors and windows to reach them, or crawl up through the earth, or swoop down the chimney. The vampire spawn (all that's left of a party of adventurers that Strahd defeated long ago) can't enter the characters' location unless invited.

## Heart of Sorrow

Strahd can afford to be bold in his tactics, for he has additional protection in the form of a giant crystal heart hidden inside Castle Ravenloft.

Any damage that Strahd takes is transferred to the Heart of Sorrow (see chapter 4, area K20). If the heart absorbs damage that reduces it to 0 hit points, it is destroyed, and Strahd takes any leftover damage. The Heart of Sorrow has 50 hit points and is restored to that number of hit points each dawn, provided it has at least 1 hit point remaining. Strahd can, as a bonus action on his turn, break his link to the Heart of Sorrow so that it no longer absorbs damage dealt to him. Strahd can reestablish his link to the Heart of Sorrow as a bonus action on his turn, but only while in Castle Ravenloft.

The effect of the protection afforded by the Heart of Sorrow can be chilling to behold, as damage to Strahd is quickly undone. For example, a critical hit might dislocate Strahd's jaw, but only for a moment; then the vampire's jaw quickly resets itself.

The ability of the Heart of Sorrow to absorb damage is suppressed if it or Strahd is fully within an antimagic field.

## Traits/Goals
> [!column] Traits
>> [!metadata|text-Center bg-c-gray] Personality
>> `INPUT[text:personality]`
>
>> [!metadata|text-Center bg-c-gray] Ideal
>> `INPUT[text:ideal]`
>
>> [!metadata|text-Center bg-c-gray] Bond
>> `INPUT[text:bond]`
>
>> [!metadata|text-Center bg-c-gray] Flaw
>> `INPUT[text:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[text:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[text:dislikes]`

> [!column|dataview] Goals
>> `INPUT[textArea:goals]`

## Relationships
```meta-bind-button
style: primary
label: Add Relationship
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: relationship
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Strahd von Zarovich (CoS)"
"size": "Medium"
"type": "undead"
"subtype": "shapechanger"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"stats":
- !!int "18"
- !!int "18"
- !!int "18"
- !!int "20"
- !!int "15"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "9"
  "Wisdom": !!int "7"
"skillsaves":
  "Stealth": !!int "14"
  "Religion": !!int "10"
  "Perception": !!int "12"
  "Arcana": !!int "15"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Abyssal, Common, Draconic, Elvish, Giant, Infernal"
"cr": "15"
"traits":
- "desc": "Strahd is a 9th-level spellcaster. His spellcasting ability is Intelligence\
    \ (spell save DC 18, dice: d20+10 (+10 to hit) with spell attacks). He has the\
    \ following wizard spells prepared:\n\nCantrips (at will): mage hand, prestidigitation,\
    \ ray of frost\n\n1st level (4 slots): comprehend languages, fog cloud, sleep\n\
    \n2nd level (3 slots): detect thoughts, gust of wind, mirror image\n\n3rd\
    \ level (3 slots): animate dead, fireball, nondetection\n\n4th level (3 slots):\
    \ blight, greater invisibility, polymorph\n\n5th level (1 slots): animate\
    \ objects, scrying"
  "name": "spells"
- "desc": "If Strahd isn't in running water or sunlight, he can use his action to\
    \ polymorph into a Tiny bat, a Medium wolf, or a Medium cloud of mist, or back\
    \ into his true form.\n\nWhile in bat or wolf form, Strahd can't speak. In bat\
    \ form, his walking speed is 5 feet, and he has a flying speed of 30 feet. In\
    \ wolf form, his walking speed is 40 feet. His statistics, other than his size\
    \ and speed, are unchanged. Anything he is wearing transforms with him, but nothing\
    \ he is carrying does. He reverts to his true form if he dies.\n\nWhile in mist\
    \ form, Strahd can't take any actions, speak, or manipulate objects. He is weightless,\
    \ has a flying speed of 20 feet, can hover, and can enter a hostile creature's\
    \ space and stop there. In addition, if air can pass through a space, the mist\
    \ can do so without squeezing, and he can't pass through water. He has advantage\
    \ on Strength, Dexterity, and Constitution saving throws, and he is immune to\
    \ all nonmagical damage, except the damage he takes from sunlight."
  "name": "Shapechanger"
- "desc": "If Strahd fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "When Strahd drops to 0 hit points outside his coffin, he transforms into\
    \ a cloud of mist (as in the Shapechanger trait) instead of falling unconscious,\
    \ provided that he isn't in running water or sunlight. If he can't transform,\
    \ he is destroyed.\n\nWhile he has 0 hit points in mist form, he can't revert\
    \ to his vampire form, and he must reach his coffin within 2 hours or be destroyed.\
    \ Once in his coffin, he reverts to his vampire form. He is then paralyzed until\
    \ he regains at least 1 hit point. After 1 hour in his coffin with 0 hit points,\
    \ he regains 1 hit point."
  "name": "Misty Escape"
- "desc": "Strahd regains 20 hit points at the start of his turn if he has at least\
    \ 1 hit point and isn't in running water or sunlight. If he takes radiant damage\
    \ or damage from holy water, this trait doesn't function at the start of his next\
    \ turn."
  "name": "Regeneration"
- "desc": "Strahd can climb difficult surfaces, including upside down on ceilings,\
    \ without having to make an ability check."
  "name": "Spider Climb"
- "desc": "Strahd has the following flaws:\n\nForbiddance. He can't enter a residence\
    \ without an invitation from one of the occupants.\n\nHarmed by Running Water.\
    \ He takes 20 acid damage if he ends his turn in running water.\n\nStake to the\
    \ Heart. If a piercing weapon made of wood is driven into his heart while he\
    \ is incapacitated in his coffin, he is paralyzed until the stake is removed.\n\
    \nSunlight Hypersensitivity. While in sunlight, Strahd takes 20 radiant damage\
    \ at the start of his turn, and he has disadvantage on attack rolls and ability\
    \ checks."
  "name": "Vampire Weaknesses"
"actions":
- "desc": "Strahd makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack (Vampire Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one target.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) slashing damage, plus dice: 4d6|avg\
    \ (4d6) necrotic damage. If the target is a creature, Strahd can grapple it\
    \ (escape DC 18) instead of dealing the slashing damage."
  "name": "Unarmed Strike (Vampire or Wolf Form Only)"
- "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one willing\
    \ creature, or a creature that is grappled by Strahd, incapacitated, or restrained.\
    \ Hit: dice: 1d6 + 4|avg (1d6 + 4) piercing damage plus dice: 3d6|avg\
    \ (3d6) necrotic damage. The target's hit point maximum is reduced by an amount\
    \ equal to the necrotic damage taken, and Strahd regains hit points equal to that\
    \ amount. The reduction lasts until the target finishes a long rest. The target\
    \ dies if its hit point maximum is reduced to 0. A humanoid slain in this way\
    \ and then buried in the ground rises the following night as a [[5. Mechanics/Bestiary/Undead/Vampire Spawn.md|vampire spawn]]\
    \ under Strahd's control."
  "name": "Bite"
- "desc": "Strahd targets one humanoid he can see within 30 feet of him. If the target\
    \ can see Strahd, the target must succeed on a DC 17 Wisdom saving throw against\
    \ this magic or be charmed. The charmed target regards Strahd as a trusted friend\
    \ to be heeded and protected. The target isn't under Strahd's control, but it\
    \ takes Strahd's requests and actions in the most favorable way and lets Strahd\
    \ bite it.\n\nEach time Strahd or his companions do anything harmful to the target,\
    \ it can repeat the saving throw, ending the effect on itself on a success. Otherwise,\
    \ the effect lasts 24 hours or until Strahd is destroyed, is on a different plane\
    \ of existence than the target, or takes a bonus action to end the effect."
  "name": "Charm"
- "desc": "Strahd magically calls dice: 2d4|avg (2d4) [[5. Mechanics/Bestiary/Beast/Swarm Of Bats.md|swarms of bats]]\
    \ or [[5. Mechanics/Bestiary/Beast/Swarm Of Rats.md|swarms of rats]], provided that\
    \ the sun isn't up. While outdoors, Strahd can call dice: 3d6|avg (3d6) [[5. Mechanics/Bestiary/Beast/Wolf.md|wolves]]\
    \ instead. The called creatures arrive in dice: 1d4|avg (1d4) rounds, acting\
    \ as allies of Strahd and obeying his spoken commands. The beasts remain for 1\
    \ hour, until Strahd dies, or until he dismisses them as a bonus action."
  "name": "Children of the Night (1/Day)"
"legendary_actions":
- "desc": "Strahd moves up to his speed without provoking opportunity attacks."
  "name": "Move"
- "desc": "Strahd makes one unarmed strike."
  "name": "Unarmed Strike"
- "desc": "Strahd makes one bite attack."
  "name": "Bite (Costs 2 Actions)"
"source":
- "CoS"
"image": "4. World Almanac/NPCs/token/strahd-von-zarovich.png"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes