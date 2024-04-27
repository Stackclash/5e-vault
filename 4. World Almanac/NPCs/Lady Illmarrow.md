---
obsidianUIMode: preview
statblock: inline
location: null
condition: healthy
image: 4. World Almanac/NPCs/img/lady-illmarrow.webp
relationships: []
tags: null
aliases:
  - Lady Illmarrow
pronounced: null
race: null
gender: null
age: null
alignment: Neutral Evil
occupation: null
groups: []
religions: []
personality: null
ideal: null
bond: null
flaw: null
goals: null
likes: null
dislikes: null
---

> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
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
> **Current Location** | `INPUT[suggester(optionQuery("4. World Almanac/Places of Interest"),optionQuery("4. World Almanac/Settlements"),optionQuery("4. World Almanac/Shops")):location]` |

# **`=this.file.name`**
*Source: Eberron: Rising from the Last War p. 296*

Lady Illmarrow is a legend—an ancient lich said to dwell in a castle of bone and ice in the coldest regions of the Lhazaar Principalities. Some stories say that she is served by a legion of undead and that she maintains a court of vampires and ghosts in her palace of ice. Other tales claim that when anyone dies in Lhazaar, Illmarrow chooses whether to take their soul before it passes on to the Keeper and Dolurrh.

But Lady Illmarrow is no folk tale. She is the greatest necromancer in Eberron, and after centuries of silence, she is setting ancient plots into motion at last. She is the power behind the Order of the Emerald Claw, but her motives for founding the order are buried in her past. Lady Illmarrow has no interest in ruling the living. Rather, she seeks to become Queen of the Dead.

## The Mark of Death

Illmarrow is a fiefdom on the isle of Farlnen—home to a community of elves exiled from Aerenal, who have practiced necromancy for centuries. But Lady Illmarrow's roots extend far beyond her island domain.

Long ago, it was revealed that the elven line of Vol—a house that practiced the art of necromancy and bore the Dragonmark of Death—was engaged in secret blood rites with a clan of dragons. The discovery of this pact triggered an unprecedented alliance between the Sibling Kings of Aerenal and the dragons of Argonnessen. The Sibling Kings proclaimed that House Vol would be exterminated to the last member, and the Mark of Death would be eliminated from the world.

The line of Vol had long been rivals of the Undying Court, and many whisper even today that the attack on House Vol was nothing more than an excuse to eliminate a political rival. But others believe that what the Undying Court truly feared was a path shown in the Draconic Prophecy—that a child born of dragon and elf could become a godlike avatar of death.

## Illmarrow Rises

Even as dragons and elves fought to destroy the line of Vol, a child was born to the house: Erandis. A scion of elf and dragon, Erandis bore a Mark of Death unlike any other. In time, it might have been her gateway to immortality and unrivaled power, but she was hunted down and killed long before she could master the mark's magic. Her mother, Minara Vol, escaped with her daughter's body to the icy reaches of Farlnen, far from the conflict. There, Minara unleashed all her necromantic power to raise Erandis as a lich.

As an undead being, Erandis lost the use of her dragonmark. Thus, when the diviners of Aerenal asked if the line of Vol had been exterminated and the Mark of Death destroyed, they received a vision affirming that the bloodline of Vol was no more. To the world, the last survivor of that bloodline is known as Lady Illmarrow. But in truth, she is Erandis Vol, heir to the Mark of Death.

## Trapped in Undeath

When Minara restored Erandis as a lich, she hid her daughter's phylactery, weaving enchantments into it that cause Erandis to be reborn in a random safe haven after she is destroyed. Thus, even Erandis herself doesn't know the location or form of her phylactery.

## Restoring the Mark

Though she takes great pleasure in fighting the dragons and elves who destroyed her ancestors, Lady Illmarrow has a more important goal: restoring her dragonmark and unlocking godlike powers. The agents of the Emerald Claw who serve her fight either for the good of Karrnath or for personal gain, but Illmarrow cares for nothing except increasing her necromantic knowledge and finding a way to restore her lost mark.

> [!note] Lady Illmarrow and the Blood of Vol
> 
> The Blood of Vol and Lady Illmarrow are both legacies of the line of Vol, but they aren't one and the same. As far as the world knows, the line of Vol was exterminated. Followers of the Blood of Vol who have heard of Lady Illmarrow believe that she's a champion of their faith, but they don't worship or serve her. And the powers of priests of the Blood of Vol don't come from Lady Illmarrow.
^lady-illmarrow-and-the-blood-of-vol

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
    str: add
  - type: input
    str: relationship
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
    str: remove
  - type: input
    str: relationship
```
```dataviewjs
await dv.view("npcRelationships", { current: dv.current() })
```

## Stats
```statblock
"name": "Lady Illmarrow"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "199"
"hit_dice": "21d8 + 105"
"stats":
- !!int "16"
- !!int "16"
- !!int "20"
- !!int "27"
- !!int "21"
- !!int "24"
"speed": "30 ft., fly 40 ft."
"saves":
  "Wisdom": !!int "12"
  "Intelligence": !!int "15"
  "Constitution": !!int "12"
"skillsaves":
  "Insight": !!int "12"
  "Perception": !!int "12"
  "History": !!int "15"
  "Arcana": !!int "15"
"damage_resistances": "cold, lightning"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing from nonmagical\
  \ attacks"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#blinded|blinded]], [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#deafened|deafened]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#petrified|petrified]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]],\
  \ [[/5. Mechanics/Rules/Conditions.md#stunned|stunned]]"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "Common, Draconic, Elvish"
"cr": "22"
"traits":
- "desc": "Illmarrow is a 20th-level spellcaster. Her spellcasting ability is Intelligence\
    \ (spell save DC 23, dice: d20+15 (+15) to hit with spell attacks). Illmarrow\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [[5. Mechanics/Spells/Chill Touch.md|chill\
    \ touch]] (see \"Actions\" below), [[5. Mechanics/Spells/Fire Bolt.md|fire bolt]],\
    \ [[5. Mechanics/Spells/Mage Hand.md|mage hand]], [[5. Mechanics/Spells/Prestidigitation.md|prestidigitation]],\
    \ [[5. Mechanics/Spells/Ray Of Frost.md|ray of frost]]\n\n1st level (4 slots):\
    \ [[5. Mechanics/Spells/Magic Missile.md|magic missile]], [[5. Mechanics/Spells/Shield.md|shield]],\
    \ [[5. Mechanics/Spells/Sleep.md|sleep]]\n\n2nd level (3 slots): [[5. Mechanics/Spells/Blur.md|blur]],\
    \ [[5. Mechanics/Spells/Detect Thoughts.md|detect thoughts]], [[5. Mechanics/Spells/Mirror Image.md|mirror image]]\n\
    \n3rd level (3 slots): [[5. Mechanics/Spells/Animate Dead.md|animate dead]],\
    \ [[5. Mechanics/Spells/Counterspell.md|counterspell]], [[5. Mechanics/Spells/Fireball.md|fireball]],\
    \ [[5. Mechanics/Spells/Fly.md|fly]], [[5. Mechanics/Spells/Lightning Bolt.md|lightning bolt]]\n\
    \n4th level (3 slots): [[5. Mechanics/Spells/Blight.md|blight]], [[5. Mechanics/Spells/Confusion.md|confusion]],\
    \ [[5. Mechanics/Spells/Polymorph.md|polymorph]]\n\n5th level (3 slots): [[5. Mechanics/Spells/Cloudkill.md|cloudkill]],\
    \ [[5. Mechanics/Spells/Cone Of Cold.md|cone of cold]], [[5. Mechanics/Spells/Hold Monster.md|hold monster]],\
    \ [[5. Mechanics/Spells/Scrying.md|scrying]]\n\n6th level (2 slots): [[5. Mechanics/Spells/Chain Lightning.md|chain lightning]],\
    \ [[5. Mechanics/Spells/Circle Of Death.md|circle of death]], [[5. Mechanics/Spells/Create Undead.md|create undead]]\n\
    \n7th level (2 slots): [[5. Mechanics/Spells/Finger Of Death.md|finger of death]],\
    \ [[5. Mechanics/Spells/Forcecage.md|forcecage]], [[5. Mechanics/Spells/Prismatic Spray.md|prismatic spray]]\n\
    \n8th level (1 slots): [[5. Mechanics/Spells/Incendiary Cloud.md|incendiary cloud]],\
    \ [[5. Mechanics/Spells/Maze.md|maze]]\n\n9th level (1 slots): [[5. Mechanics/Spells/Power Word Kill.md|power word kill]],\
    \ [[5. Mechanics/Spells/Time Stop.md|time stop]]"
  "name": "Spellcasting"
- "desc": "If Illmarrow fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Illmarrow has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Illmarrow's body turns to dust when she drops to 0 hit points, and her\
    \ equipment is left behind. She gains a new body after dice: 1d10|avg|noform\
    \ (1d10) days, regaining all her hit points and becoming active again. The new\
    \ body appears within two hundred miles of the location at which she was destroyed."
  "name": "Rejuvenation"
"actions":
- "desc": "Ranged Spell Attack: dice: d20+15 (+15) to hit, range 120 ft., one\
    \ creature. Hit: dice:4d8|text(18) (4d8) necrotic damage, and the target\
    \ can't regain hit points until the start of Illmarrow's next turn. If the target\
    \ is undead, it also has disadvantage on attack rolls against Illmarrow until\
    \ the end of her next turn."
  "name": "Chill Touch (Cantrip)"
- "desc": "Melee Weapon Attack: dice: d20+10 (+10) to hit, reach 5 ft., one\
    \ creature. Hit: dice:3d6 + 3|text(13) (3d6 + 3) slashing damage plus dice:3d6|text(10)\
    \ (3d6) cold damage, and the target must succeed on a DC 20 Constitution saving\
    \ throw or be [[/5. Mechanics/Rules/Conditions.md#paralyzed|paralyzed]] for 1 minute.\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Paralyzing Claw"
- "desc": "Illmarrow exhales poisonous gas in a 30-foot cone. Each creature in that\
    \ area must make a DC 20 Constitution saving throw. On a failed save, a creature\
    \ takes dice:10d6|text(35) (10d6) poison damage and is [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]\
    \ for 1 minute. While [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]] in\
    \ this way, the creature can't regain hit points. On a successful save, the creature\
    \ takes half as much damage and isn't [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]].\n\
    \nA humanoid reduced to 0 hit points by this damage dies and rises at the start\
    \ of Illmarrow's next turn as a zombie. The zombie acts immediately after Illmarrow\
    \ in the initiative count and is permanently under her command, following her\
    \ verbal orders."
  "name": "Poison Breath (Recharge 5-6)"
"legendary_actions":
- "desc": "Illmarrow casts a cantrip."
  "name": "Cantrip"
- "desc": "Illmarrow uses her Paralyzing Claw."
  "name": "Paralyzing Claw"
- "desc": "Illmarrow targets up to three creatures she can see within 30 feet of her.\
    \ Each target must succeed on a DC 20 Wisdom saving throw or be [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]]\
    \ for 1 minute. A [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]] target\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success. If a target's saving throw is successful or the effect\
    \ ends for it, the target is immune to Illmarrow's Frightening Presence for the\
    \ next 24 hours."
  "name": "Frightening Presence (Costs 2 Actions)"
- "desc": "Illmarrow recharges her Poison Breath and uses it."
  "name": "Poison Breath (Costs 3 Actions)"
"source":
- "ERLW"
"image": "4. World Almanac/NPCs/token/lady-illmarrow-erlw.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
