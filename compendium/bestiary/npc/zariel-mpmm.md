---
obsidianUIMode: preview
statblock: inline
location: 
condition: healthy
image: compendium/bestiary/npc/img/zariel.webp
relationships: []
tags: 
aliases: [Zariel]
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 280, Mordenkainen's Tome of Foes p. 180*

> [!quote]- A quote from Mordenkainen  
> 
> That which falls from grace may yet rise to regain it. If Zariel were to return to her celestial self, how glorious would be the tales!

Once a mighty angel charged with watching the tides of the Blood War, Zariel succumbed to the corrupting influence of the Nine Hells and fell from grace. Asmodeus admired Zariel's passion for war and offered her rulership of Avernus. She accepted his offer, and he transformed her into an archdevil.

Zariel's rise in status came at the expense of Bel, her pit fiend predecessor. Zariel and Bel hate each other. To keep Bel busy and out of her sight, Zariel tasks him with forging weapons, armor, and grue some demon-slaying machines.

To replenish her legions, Zariel needs the souls of mortals to create lemures, which she can then promote to higher forms of devils. She is keenly interested in collecting souls from the greatest warriors on the Material Plane. She bargains hard, and there is little hope of wriggling out of a pact. However, she expects the best from her servants, so she allows her mortal followers to live out their lives provided they continue to hone their talents to increase their value. As a result, Zariel's servants are universally effective, disciplined, and dangerous.

## Cultists of Zariel

> [!note]
> See the Cult of Zariel entry.

## Zariel's Lair

Zariel makes her lair in a basalt citadel that rises up in Avernus. From nearly a mile away, one can hear the screams and moans coming from the burned victims chained to the stronghold's wall, the dying remains of those who failed to impress the archdevil. The stronghold, covering five square miles, is surrounded by walls reinforced with high turrets. Devils of all kinds crawl over the structure, ensuring that no intruders breach their defenses.

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
"name": "Zariel (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "21"
"hp": !!int "420"
"hit_dice": "29d10 + 261"
"stats":
- !!int "27"
- !!int "24"
- !!int "28"
- !!int "26"
- !!int "27"
- !!int "30"
"speed": "50 ft., fly 150 ft."
"saves":
  "Charisma": !!int "18"
  "Wisdom": !!int "16"
  "Intelligence": !!int "16"
"skillsaves":
  "Intimidation": !!int "18"
  "Perception": !!int "16"
"damage_resistances": "cold; fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#charmed), [exhaustion](/compendium/rules/conditions.md#exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#frightened), [poisoned](/compendium/rules/conditions.md#poisoned)"
"senses": "darkvision 120 ft., passive Perception 26"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
- "desc": "Zariel casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 26):\n\nAt will:\
    \ [alter self](compendium/spells/alter-self.md) (can become Medium when changing\
    \ her appearance), [detect evil and good](compendium/spells/detect-evil-and-good.md),\
    \ [fireball](compendium/spells/fireball.md), [invisibility](compendium/spells/invisibility.md)\
    \ (self only), [major image](compendium/spells/major-image.md), [wall of fire](compendium/spells/wall-of-fire.md)\n\
    \n3/day each: [blade barrier](compendium/spells/blade-barrier.md), [dispel\
    \ evil and good](compendium/spells/dispel-evil-and-good.md), [finger of death](compendium/spells/finger-of-death.md)"
  "name": "spells"
- "desc": "Magical darkness doesn't impede Zariel's [darkvision](/compendium/rules/senses.md#darkvision)."
  "name": "Devil's Sight"
- "desc": "If Zariel fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Zariel has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Zariel regains 20 hit points at the start of her turn. If she takes radiant\
    \ damage, this trait doesn't function at the start of her next turn. Zariel dies\
    \ only if she starts her turn with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Zariel makes three Flail or Longsword attacks. She can replace one attack\
    \ with a use of Horrid Touch, if available."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d8 + 8|avg (2d8 + 8) force damage plus dice: 8d8|avg (8d8)\
    \ fire damage."
  "name": "Flail"
- "desc": "Melee Weapon Attack: dice: d20+16 (+16 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d8 + 8|avg (2d8 + 8) radiant damage, or dice: 2d10 + 8|avg\
    \ (2d10 + 8) radiant damage when used with two hands, plus dice: 8d8|avg (8d8)\
    \ fire damage."
  "name": "Longsword"
- "desc": "Zariel touches one creature within 10 feet of her. The target must succeed\
    \ on a DC 26 Constitution saving throw or take dice: 8d10|avg (8d10) necrotic\
    \ damage and be [poisoned](/compendium/rules/conditions.md#poisoned) for 1 minute.\
    \ While [poisoned](/compendium/rules/conditions.md#poisoned) in this way, the\
    \ target is [blinded](/compendium/rules/conditions.md#blinded) and [deafened](/compendium/rules/conditions.md#deafened).\
    \ The target can repeat the saving throw at the end of each of its turns, ending\
    \ the effect on itself on a success."
  "name": "Horrid Touch (Recharge 5-6)"
- "desc": "Zariel teleports, along with any equipment she is wearing or carrying,\
    \ up to 120 feet to an unoccupied space she can see."
  "name": "Teleport"
"legendary_actions":
- "desc": "Zariel uses Teleport."
  "name": "Teleport"
- "desc": "Zariel turns her magical gaze toward one creature she can see within 120\
    \ feet of her and commands it to burn. The target must succeed on a DC 26 Wisdom\
    \ saving throw or take dice: 4d10|avg (4d10) fire damage."
  "name": "Immolating Gaze (Costs 2 Actions)"
"source":
- "MPMM"
- "MTF"
"image": "compendium/bestiary/npc/token/zariel-mpmm.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes