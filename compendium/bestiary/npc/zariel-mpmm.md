---
obsidianUIMode: preview
statblock: inline
tags:
- npc
- compendium/src/5e/mpmm
- monster/cr/26
- monster/size/large
- monster/type/fiend/devil
location: 
condition: healthy
images: 
- compendium/bestiary/npc/img/zariel.webp
relationships: []
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
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 280, Mordenkainen's Tome of Foes p. 180*

> [!quote] A quote from Mordenkainen  
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
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Add Relationship.md"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: runTemplaterFile
    templateFile: "z_Templates/Templater/Functional/Remove Relationship.md"
```
> [!div | no-t clean txt-c]
> `$=await dv.view("npcRelationships", { current: dv.current() })`

## Stats
```statblock
"name": "Zariel (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "21"
"ac_class": "natural armor"
"hp": !!int "420"
"hit_dice": "29d10 + 261"
"modifier": !!int "7"
"stats":
  - !!int "27"
  - !!int "24"
  - !!int "28"
  - !!int "26"
  - !!int "27"
  - !!int "30"
"speed": "50 ft., fly 150 ft."
"saves":
  - "intelligence": "+16"
  - "wisdom": "+16"
  - "charisma": "+18"
"skillsaves":
  - "name": "[Intimidation](/compendium/rules/skills.md#Intimidation)"
    "desc": "+18"
  - "name": "[Perception](/compendium/rules/skills.md#Perception)"
    "desc": "+16"
"damage_resistances": "cold; fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](/compendium/rules/conditions.md#Charmed), [exhaustion](/compendium/rules/conditions.md#Exhaustion),\
  \ [frightened](/compendium/rules/conditions.md#Frightened), [poisoned](/compendium/rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 26"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
  - "desc": "Magical darkness doesn't impede Zariel's [darkvision](/compendium/rules/senses.md#Darkvision)."
    "name": "Devil's Sight"
  - "desc": "If Zariel fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Zariel has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Zariel regains 20 hit points at the start of her turn. If she takes radiant\
      \ damage, this trait doesn't function at the start of her next turn. Zariel\
      \ dies only if she starts her turn with 0 hit points and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "Zariel makes three Flail or Longsword attacks. She can replace one attack\
      \ with a use of Horrid Touch, if available."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 17\
      \ (2d8 + 8) force damage plus 36 (8d8) fire damage."
    "name": "Flail"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 17\
      \ (2d8 + 8) radiant damage, or 19 (2d10 + 8) radiant damage when used with two\
      \ hands, plus 36 (8d8) fire damage."
    "name": "Longsword"
  - "desc": "Zariel touches one creature within 10 feet of her. The target must succeed\
      \ on a DC 26 Constitution saving throw or take 44 (8d10) necrotic damage and\
      \ be [poisoned](/compendium/rules/conditions.md#Poisoned) for 1 minute. While\
      \ [poisoned](/compendium/rules/conditions.md#Poisoned) in this way, the target\
      \ is [blinded](/compendium/rules/conditions.md#Blinded) and [deafened](/compendium/rules/conditions.md#Deafened).\
      \ The target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Horrid Touch (Recharge 5-6)"
  - "desc": "Zariel teleports, along with any equipment she is wearing or carrying,\
      \ up to 120 feet to an unoccupied space she can see."
    "name": "Teleport"
  - "desc": "Zariel casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 26):\n\nAt\
      \ will: [alter self](compendium/spells/alter-self.md) (can become Medium when\
      \ changing her appearance), [detect evil and good](compendium/spells/detect-evil-and-good.md),\
      \ [fireball](compendium/spells/fireball.md), [invisibility](compendium/spells/invisibility.md)\
      \ (self only), [major image](compendium/spells/major-image.md), [wall of fire](compendium/spells/wall-of-fire.md)\n\
      \n3/day each: [blade barrier](compendium/spells/blade-barrier.md), [dispel\
      \ evil and good](compendium/spells/dispel-evil-and-good.md), [finger of death](compendium/spells/finger-of-death.md)"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "Zariel uses Teleport."
    "name": "Teleport"
  - "desc": "Zariel turns her magical gaze toward one creature she can see within\
      \ 120 feet of her and commands it to burn. The target must succeed on a DC 26\
      \ Wisdom saving throw or take 22 (4d10) fire damage."
    "name": "Immolating Gaze (Costs 2 Actions)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Zariel can take one\
      \ of the following lair actions; she can't take the same lair action two rounds\
      \ in a row:"
    "name": ""
  - "desc": "- Fireball. Zariel casts the [fireball](compendium/spells/fireball.md)\
      \ spell.  \n- Infernal Illusions. Zariel casts the [major image](compendium/spells/major-image.md)\
      \ spell four times, targeting different areas with it. Zariel prefers to create\
      \ images of intruders' loved ones being burned alive. Zariel doesn't need to\
      \ concentrate on the spells, which end on initiative count 20 of the next round.\
      \ Each creature that can see these illusions must succeed on a DC 26 Wisdom\
      \ saving throw or become [frightened](/compendium/rules/conditions.md#Frightened)\
      \ of the illusion for 1 minute. A frightened creature can repeat the saving\
      \ throw at the end of each of its turns, ending the effect on itself on a success.\
      \  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Zariel's lair is warped by her magic, which creates\
      \ one or more of the following effects:"
    "name": ""
  - "desc": "- Hellscape. The area within 9 miles of the lair is filled with screaming\
      \ voices and the stench of burning meat.  \n- Pyres. Once every 60 feet\
      \ within 1 mile of the lair, 10-foot-high gouts of flame rise from the ground.\
      \ Any creature or object that touches the flame takes 7 (2d6 fire damage, though\
      \ it can take this damage no more than once per round.  \n- Smoke. The area\
      \ within 2 miles of the lair, but no closer than 500 feet, is filled with smoke,\
      \ which causes the area to be heavily obscured. The smoke can't be cleared away.\
      \  "
    "name": ""
  - "desc": "If Zariel dies, these effects fade over the course of d10 days."
    "name": ""
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