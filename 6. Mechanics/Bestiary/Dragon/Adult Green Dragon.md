---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/forest
- monster/size/huge
- monster/type/dragon
statblock: true
statblock-link: "#^statblock"
"name": "Adult Green Dragon"
"size": "Huge"
"type": "dragon"
"alignment": "Lawful Evil"
"ac": !!int "19"
"hp": !!int "207"
"hit_dice": "18d12 + 90"
"stats":
- !!int "23"
- !!int "12"
- !!int "21"
- !!int "18"
- !!int "15"
- !!int "17"
"speed": "walk 40 ft., fly 80 ft., swim 40 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "6"
  "Wisdom": !!int "7"
  "Constitution": !!int "10"
"skillsaves":
  "Deception": !!int "8"
  "Stealth": !!int "6"
  "Insight": !!int "7"
  "Perception": !!int "12"
  "Persuasion": !!int "8"
"damage_immunities": "poison"
"condition_immunities": "poisoned"
"senses": "blindsight 60 ft., darkvision 120 ft., passive Perception 22"
"languages": "Common, Draconic"
"cr": "15"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon can breathe air and water."
  "name": "Amphibious"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the dragon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon can use its Frightful Presence. It then makes three attacks:\
    \ one with its bite and two with its claws."
  "name": "Multiattack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+11 (+11 to hit), reach 10 ft., one target.\
    \ Hit: dice: 2d10 + 6|avg (2d10 + 6) piercing damage plus dice: 2d6|avg\
    \ (2d6) poison damage."
  "name": "Bite"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+11 (+11 to hit), reach 5 ft., one target.\
    \ Hit: dice: 2d6 + 6|avg (2d6 + 6) slashing damage."
  "name": "Claw"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+11 (+11 to hit), reach 15 ft., one target.\
    \ Hit: dice: 2d8 + 6|avg (2d8 + 6) bludgeoning damage."
  "name": "Tail"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Each creature of the dragon's choice that is within 120 feet of the dragon\
    \ and aware of it must succeed on a DC 16 Wisdom saving throw or become [[6. Mechanics/Rules/conditions.md#frightened\|frightened]]\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success. If a creature's saving throw\
    \ is successful or the effect ends for it, the creature is immune to the dragon's\
    \ Frightful Presence for the next 24 hours."
  "name": "Frightful Presence"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that\
    \ area must make a DC 18 Constitution saving throw, taking 56 (dice: 16d6|avg\
    \ (16d6)) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Poison Breath (Recharge 5-6)"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon makes a Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]])\
    \ check."
  "name": "Detect"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon makes a tail attack."
  "name": "Tail Attack"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The dragon beats its wings. Each creature within 10 feet of the dragon\
    \ must succeed on a DC 19 Dexterity saving throw or take dice: 2d6 + 6|avg (2d6\
    \ + 6) bludgeoning damage and be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]].\
    \ The dragon can then fly up to half its flying speed."
  "name": "Wing Attack (Costs 2 Actions)"
"source":
- "MM"
- "RoT"
- "GoS"
- "CM"
"image": "/compendium/bestiary/dragon/token/adult-green-dragon.png"
aliases: ["Adult Green Dragon"]
---
# Adult Green Dragon
*Source: Monster Manual p. 94, The Rise of Tiamat, Ghosts of Saltmarsh, Candlekeep Mysteries*  

The most cunning and treacherous of true dragons, green dragons use misdirection and trickery to get the upper hand against their enemies. Nasty tempered and thoroughly evil, they take special pleasure in subverting and corrupting the good-hearted. In the ancient forests they roam, green dragons demonstrate an aggression that is often less about territory than it is about gaining power and wealth with as little effort as possible.

A green dragon is recognized by its curved jawline and the crest that begins near its eyes and continues down its spine, reaching full height just behind the skull. A green dragon has no external ears, but bears leathery spiked plates that run down the sides of its neck.

A wyrmling green dragon's thin scales are a shade of green so dark as to appear nearly black. As a green dragon ages, its scales grow larger and lighter, turning shades of forest, emerald, and olive green to help it blend in with its wooded surroundings. Its wings have a dappled pattern, darker near the leading edges and lighter toward the trailing edges.

A green dragon's legs are longer in relation to its body than with any other dragon, enabling it to easily pass over underbrush and forest debris when it walks. With its equally long neck, an older green dragon can peer over the tops of trees without rearing up.

## Capricious Hunters

A green dragon hunts by patrolling its forest territory from the air and the ground. It eats any creature it can see, and will consume shrubs and small trees when hungry enough, but its favorite prey is elves.

Green dragons are consummate liars and masters of double talk. They favor intimidation of lesser creatures, but employ more subtle manipulations when dealing with other dragons. A green dragon attacks animals and monsters with no provocation, especially when dealing with potential threats to its territory. When dealing with sentient creatures, a green dragon demonstrates a lust for power that rivals its draconic desire for treasure, and it is always on the lookout for creatures that can help it further its ambitions.

A green dragon stalks its victims as it plans its assault, sometimes shadowing creatures for days. If a target is weak, the dragon enjoys the terror its appearance evokes before it attacks. It never slays all its foes, preferring to use intimidation to establish control over survivors. It then learns what it can about other creatures' activities near its territory, and about any treasure to be found nearby. Green dragons occasionally release prisoners if they can be ransomed. Otherwise, a creature must prove its value to the dragon daily or die.

## Manipulative Schemers

A wily and subtle creature, a green dragon bends other creatures to its will by assessing and playing off their deepest desires. Any creature foolish enough to attempt to subdue a green dragon eventually realizes that the creature is only pretending to serve while it assesses its would-be master.

When manipulating other creatures, green dragons are honey-tongued, smooth, and sophisticated. Among their own kind, they are loud, crass, and rude, especially when dealing with dragons of the same age and status.

## Conflict and Corruption

Green dragons sometimes clash with other dragons over territory where forest crosses over into other terrain. A green dragon typically pretends to back down, only to wait and watch-sometimes for decades-for the chance to slay the other dragon, then claim its lair and hoard.

Green dragons accept the servitude of sentient creatures such as goblinoids, ettercaps, ettins, kobolds, orcs, and yuan-ti. They also delight in corrupting and bending elves to their will. A green dragon sometimes wracks its minions' minds with fear to the point of insanity, with the fog that spreads throughout its forest reflecting those minions' tortured dreams.

## Living Treasures

A green dragon's favored treasures are the sentient creatures it bends to its will, including significant figures such as popular heroes, well-known sages, and renowned bards. Among material treasures, a green dragon favors emeralds, wood carvings, musical instruments, and sculptures of humanoid subjects.

> [!quote]- A quote from Pelios of Ergoth, Silvanesti seer  
> 
> I see an ancient elf king, his majesty long since faded, slumped and half asleep in his throne. A green dragon whispers in the king's ear, corrupting and twisting the king's dreams. This dragon's name is Cyan Bloodbane, and he means the destruction of us all.

## A Green Dragon's Lair

The forest-loving green dragons sometimes compete for territory with black dragons in marshy woods and with white dragons in subarctic taiga. However, a forest controlled by a green dragon is easy to spot. A perpetual fog hangs in the air in a legendary green dragon's wood, carrying an acrid whiff of the creature's poison breath.

The moss-covered trees grow close together except where winding pathways trace their way like a maze into the heart of the forest. The light that reaches the forest floor carries an emerald green cast, and every sound seems muffled.

At the center of its forest, a green dragon chooses a cave in a sheer cliff or hillside for its lair, preferring an entrance hidden from prying eyes. Some seek out cave mouths concealed behind waterfalls, or partly submerged caverns that can be accessed through lakes or streams. Others conceal the entrances to their lairs with vegetation.

## Chromatic Dragons

The black, blue, green, red, and white dragons represent the evil side of dragonkind. Aggressive, gluttonous, and vain, chromatic dragons are dark sages and powerful tyrants feared by all creatures-including each other.

### Driven by Greed

Chromatic dragons lust after treasure, and this greed colors their every scheme and plot. They believe that the world's wealth belongs to them by right, and a chromatic dragon seizes that wealth without regard for the humanoids and other creatures that have "stolen" it. With its piles of coins, gleaming gems, and magic items, a dragon's hoard is the stuff of legend. However, chromatic dragons have no interest in commerce, amassing wealth for no other reason than to have it.

### Creatures of Ego

Chromatic dragons are united by their sense of superiority, believing themselves the most powerful and worthy of all mortal creatures. When they interact with other creatures, it is only to further their own interests. They believe in their innate right to rule, and this belief is the cornerstone of every chromatic dragon's personality and worldview. Trying to humble a chromatic dragon is like trying to convince the wind to stop blowing. To these creatures, humanoids are animals, fit to serve as prey or beasts of burden, and wholly unworthy of respect.

### Dangerous Lairs

A dragon's lair serves as the seat of its power and a vault for its treasure. With its innate toughness and tolerance for severe environmental effects, a dragon selects or builds a lair not for shelter but for defense, favoring multiple entrances and exits, and security for its hoard.

Most chromatic dragon lairs are hidden in dangerous and remote locations to prevent all but the most audacious mortals from reaching them. A black dragon might lair in the heart of a vast swamp, while a red dragon might claim the caldera of an active volcano. In addition to the natural defenses of their lairs, powerful chromatic dragons use magical guardians, traps, and subservient creatures to protect their treasures.

### Queen of Evil Dragons

Tiamat the Dragon Queen is the chief deity of evil dragonkind. She dwells on Avernus, the first layer of the Nine Hells. As a lesser god, Tiamat has the power to grant spells to her worshipers, though she is loath to share her power. She epitomizes the avarice of evil dragons, believing that the multiverse and all its treasures will one day be hers and hers alone.

Tiamat is a gigantic dragon whose five heads reflect the forms of the chromatic dragons that worship her-black, blue, green, red, and white. She is a terror on the battlefield, capable of annihilating whole armies with her five breath weapons, her formidable spellcasting, and her fearsome claws.

Tiamat's most hated enemy is Bahamut the Platinum Dragon, with whom she shares control of the faith of dragonkind. She also holds a special enmity for Asmodeus, who long ago stripped her of the rule of Avernus and who continues to curb the Dragon Queen's power.

## Dragons

True dragons are winged reptiles of ancient lineage and fearsome power. They are known and feared for their predatory cunning and greed, with the oldest dragons accounted as some of the most powerful creatures in the world. Dragons are also magical creatures whose innate power fuels their dreaded breath weapons and other preternatural abilities.

Many creatures, including wyverns and dragon turtles, have draconic blood. However, true dragons fall into the two broad categories of chromatic and metallic dragons. The black, blue, green, red, and white dragons are selfish, evil, and feared by all. The brass, bronze, copper, gold, and silver dragons are noble, good, and highly respected by the wise.

Though their goals and ideals vary tremendously, all true dragons covet wealth, hoarding mounds of coins and gathering gems, jewels, and magic items. Dragons with large hoards are loath to leave them for long, venturing out of their lairs only to patrol or feed.

True dragons pass through four distinct stages of life, from lowly wyrmlings to ancient dragons, which can live for over a thousand years. In that time, their might can become unrivaled and their hoards can grow beyond price.

**Dragon Age Categories**

| Category | Size | Age Range |
|----------|------|-----------|
| Wyrmling | Medium | 5 years or less |
| Young | Large | 6–100 years |
| Adult | Huge | 101–800 years |
| Ancient | Gargantuan | 801 years or more |
^dragon-age-categories

## Stat Block

```ad-statblock
title: Adult Green Dragon
![[/6. Mechanics/Bestiary/Dragon/Token/adult-green-dragon.png#token]]
*Huge dragon, Lawful Evil*

- **Armor Class** 19 (natural armor)
- **Hit Points** `dice: 18d12 + 90|text(207)` (18d12 + 90) 
- **Speed** walk 40 ft., fly 80 ft., swim 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|23 (+6)|12 (+1)|21 (+5)|18 (+4)|15 (+2)|17 (+3)|

- **Proficiency Bonus** +5
- **Saving Throws** Dexterity +6, Constitution +10, Wisdom +7, Charisma +8
- **Skills** Deception +8, Insight +7, Perception +12, Persuasion +8, Stealth +6
- **Senses** blindsight 60 ft., darkvision 120 ft., passive Perception 22
- **Damage Immunities** poison
- **Condition Immunities** poisoned
- **Languages** Common, Draconic
- **Challenge** 15

## Traits

***Amphibious.*** The dragon can breathe air and water.

***Legendary Resistance (3/Day).*** If the dragon fails a saving throw, it can choose to succeed instead.

## Actions

***Multiattack.*** The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws.

***Bite.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 10 ft., one target. Hit: `dice: 2d10 + 6` (`2d10 + 6`) piercing damage plus `dice: 2d6` (`2d6`) poison damage.

***Claw.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 5 ft., one target. Hit: `dice: 2d6 + 6` (`2d6 + 6`) slashing damage.

***Tail.*** *Melee Weapon Attack:* `dice: d20+11` (+11 to hit), reach 15 ft., one target. Hit: `dice: 2d8 + 6` (`2d8 + 6`) bludgeoning damage.

***Frightful Presence.*** Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become [[6. Mechanics/Rules/conditions.md#frightened\|frightened]] for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours.

***Poison Breath (Recharge 5-6).*** The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (`dice: 16d6` (`16d6`)) poison damage on a failed save, or half as much damage on a successful one.

## Legendary Actions

***Detect.*** The dragon makes a Wisdom ([[6. Mechanics/Rules/skills.md#Perception\|Perception]]) check.

***Tail Attack.*** The dragon makes a tail attack.

***Wing Attack (Costs 2 Actions).*** The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take `dice: 2d6 + 6` (`2d6 + 6`) bludgeoning damage and be knocked [[6. Mechanics/Rules/conditions.md#prone\|prone]]. The dragon can then fly up to half its flying speed.

## Additional sources



## Lair actions

On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:

- Grasping roots and vines erupt in a 20-foot radius centered on a point on the ground that the dragon can see within 120 feet of it. That area becomes difficult terrain, and each creature there must succeed on a DC 15 Strength saving throw or be [[6. Mechanics/Rules/conditions.md#restrained\|restrained]] by the roots and vines. A creature can be freed if it or another creature takes an action to make a DC 15 Strength check and succeeds. The roots and vines wilt away when the dragon uses this lair action again or when the dragon dies.  
- A wall of tangled brush bristling with thorns springs into existence on a solid surface within 120 feet of the dragon. The wall is up to 60 feet long, 10 feet high, and 5 feet thick, and it blocks line of sight. When the wall appears, each creature in its area must make a DC 15 Dexterity saving throw. A creature that fails the save takes `dice: 4d8` (`4d8`) piercing damage and is pushed 5 feet out of the wall's space, appearing on whichever side of the wall it wants. A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature travels through the wall, it must spend 4 feet of movement. Furthermore, a creature in the wall's space must make a DC 15 Dexterity saving throw once each round it's in contact with the wall, taking 18 (`dice: 4d8` (`4d8`)) piercing damage on a failed save, or half as much damage on a successful one. Each 10-foot section of wall has AC 5, 15 hit points, vulnerability to fire damage, resistance to bludgeoning and piercing damage, and immunity to psychic damage. The wall sinks back into the ground when the dragon uses this lair action again or when the dragon dies.  
- Magical fog billows around one creature the dragon can see within 120 feet of it. The creature must succeed on a DC 15 Wisdom saving throw or be [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by the dragon until initiative count 20 on the next round.  


## Regional effects

The region containing a legendary green dragon's lair is warped by the dragon's magic, which creates one or more of the following effects:

- Thickets form labyrinthine passages within 1 mile of the dragon's lair. The thickets act as 10-foot-high, 10-foot-thick walls that block line of sight. Creatures can move through the thickets, with every 1 foot a creature moves costing it 4 feet of movement. A creature in the thickets must make a DC 15 Dexterity saving throw once each round it's in contact with the thickets or take `dice: 1d6` (`1d6`) piercing damage from thorns.  

    Each 10-foot-cube of thickets has AC 5, 30 hit points, resistance to bludgeoning and piercing damage, vulnerability to fire damage, and immunity to psychic and thunder damage.  
- Within 1 mile of its lair, the dragon leaves no physical evidence of its passage unless it wishes to. Tracking it there is impossible except by magical means. In addition, it ignores movement impediments and damage from plants in this area that are neither magical nor creatures, including the thickets described above. The plants remove themselves from the dragon's path.  
- Rodents and birds within 1 mile of the dragon's lair serve as the dragon's eyes and ears. Deer and other large game are strangely absent, hinting at the presence of an unnaturally hungry predator.  

If the dragon dies, the rodents and birds lose their supernatural link to it. The thickets remain, but within `dice: 1d10` (`1d10`) days, they become mundane plants and normal difficult terrain, losing their thorns.

```
^statblock

## Environment

forest