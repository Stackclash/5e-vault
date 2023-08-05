---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/mm
- monster/environment/urban
- monster/size/medium
- monster/type/undead/shapechanger
statblock: true
statblock-link: "#^statblock"
"name": "Vampire Spellcaster"
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
- !!int "17"
- !!int "15"
- !!int "18"
"speed": "walk 30 ft."
"saves":
  "Charisma": !!int "9"
  "Dexterity": !!int "9"
  "Wisdom": !!int "7"
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "7"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "the languages it knew in life"
"cr": "15"
"traits":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vampire is a 9th-level spellcaster. Its spellcasting ability is Intelligence\
    \ (spell save DC 16, dice: d20+8 (+8 to hit) with spell attacks). The vampire\
    \ has the following wizard spells prepared:\n\nCantrips (at will): [[/6. Mechanics/Spells/mage-hand.md\|mage hand]],\
    \ [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]], [[/6. Mechanics/Spells/ray-of-frost.md\|ray of frost]]\n\
    \n1st level (4 1st-level slots): [[/6. Mechanics/Spells/comprehend-languages.md\|comprehend languages]],\
    \ [[/6. Mechanics/Spells/fog-cloud.md\|fog cloud]], [[/6. Mechanics/Spells/sleep.md\|sleep]]\n\
    \n2nd level (3 2nd-level slots): [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]],\
    \ [[/6. Mechanics/Spells/gust-of-wind.md\|gust of wind]], [[/6. Mechanics/Spells/mirror-image.md\|mirror image]]\n\
    \n3rd level (3 3rd-level slots): [[/6. Mechanics/Spells/animate-dead.md\|animate dead]],\
    \ [[/6. Mechanics/Spells/bestow-curse.md\|bestow curse]], [[/6. Mechanics/Spells/nondetection.md\|nondetection]]\n\
    \n4th level (3 4th-level slots): [[/6. Mechanics/Spells/blight.md\|blight]], [greater\
    \ invisibility](/compendium/spells/greater-invisibility.md)\n\n5th level (1\
    \ 5th-level slots): [[/6. Mechanics/Spells/dominate-person.md\|dominate person]]"
  "name": "spells"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the vampire isn't in sunlight or running water, it can use its action\
    \ to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true\
    \ form.\n\nWhile in bat form, the vampire can't speak, its walking speed is 5\
    \ feet, and it has a flying speed of 30 feet. Its statistics, other than its size\
    \ and speed, are unchanged. Anything it is wearing transforms with it, but nothing\
    \ it is carrying does. It reverts to its true form if it dies.\n\nWhile in mist\
    \ form, the vampire can't take any actions, speak, or manipulate objects. It is\
    \ weightless, has a flying speed of 20 feet, can hover, and can enter a hostile\
    \ creature's space and stop there. In addition, if air can pass through a space,\
    \ the mist can do so without squeezing, and it can't pass through water. It has\
    \ advantage on Strength, Dexterity, and Constitution saving throws, and it is\
    \ immune to all nonmagical damage, except the damage it takes from sunlight."
  "name": "Shapechanger"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "If the vampire fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "When it drops to 0 hit points outside its resting place, the vampire transforms\
    \ into a cloud of mist (as in the Shapechanger trait) instead of falling [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]],\
    \ provided that it isn't in sunlight or running water. If it can't transform,\
    \ it is destroyed.\n\nWhile it has 0 hit points in mist form, it can't revert\
    \ to its vampire form, and it must reach its resting place within 2 hours or be\
    \ destroyed. Once in its resting place, it reverts to its vampire form. It is\
    \ then [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]] until it regains\
    \ at least 1 hit point. After spending 1 hour in its resting place with 0 hit\
    \ points, it regains 1 hit point."
  "name": "Misty Escape"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vampire regains 20 hit points at the start of its turn if it has at\
    \ least 1 hit point and isn't in sunlight or running water. If the vampire takes\
    \ radiant damage or damage from holy water, this trait doesn't function at the\
    \ start of the vampire's next turn."
  "name": "Regeneration"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vampire can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vampire has the following flaws:\n\n_Forbiddance._ The vampire can't\
    \ enter a residence without an invitation from one of the occupants.\n\n_Harmed\
    \ by Running Water._ The vampire takes 20 acid damage if it ends its turn in running\
    \ water.\n\n_Stake to the Heart._ If a piercing weapon made of wood is driven\
    \ into the vampire's heart while the vampire is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]]\
    \ in its resting place, the vampire is [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]]\
    \ until the stake is removed.\n\n_Sunlight Hypersensitivity._ The vampire takes\
    \ 20 radiant damage when it starts its turn in sunlight. While in sunlight, it\
    \ has disadvantage on attack rolls and ability checks."
  "name": "Vampire Weaknesses"
"actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vampire makes two attacks, only one of which can be a bite attack."
  "name": "Multiattack (Vampire Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one creature.\
    \ Hit: dice: 1d8 + 4|avg (1d8 + 4) bludgeoning damage. Instead of dealing\
    \ damage, the vampire can grapple the target (escape DC 18)."
  "name": "Unarmed Strike (Vampire Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "Melee Weapon Attack: dice: d20+9 (+9 to hit), reach 5 ft., one willing\
    \ creature, or a creature that is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]]\
    \ by the vampire, [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]],\
    \ or [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]. Hit: dice: 1d6\
    \ + 4|avg (1d6 + 4) piercing damage plus dice: 3d6|avg (3d6) necrotic damage.\
    \ The target's hit point maximum is reduced by an amount equal to the necrotic\
    \ damage taken, and the vampire regains hit points equal to that amount. The reduction\
    \ lasts until the target finishes a long rest. The target dies if this effect\
    \ reduces its hit point maximum to 0. A humanoid slain in this way and then buried\
    \ in the ground rises the following night as a [[/6. Mechanics/Bestiary/Undead/Vampire Spawn.md\|vampire spawn]]\
    \ under the vampire's control."
  "name": "Bite (Bat or Vampire Form Only)"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vampire targets one humanoid it can see within 30 feet of it. If the\
    \ target can see the vampire, the target must succeed on a DC 17 Wisdom saving\
    \ throw against this magic or be [[6. Mechanics/Rules/conditions.md#charmed\|charmed]]\
    \ by the vampire. The [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] target\
    \ regards the vampire as a trusted friend to be heeded and protected. Although\
    \ the target isn't under the vampire's control, it takes the vampire's requests\
    \ or actions in the most favorable way it can, and it is a willing target for\
    \ the vampire's bite attack.\n\nEach time the vampire or the vampire's companions\
    \ do anything harmful to the target, it can repeat the saving throw, ending the\
    \ effect on itself on a success. Otherwise, the effect lasts 24 hours or until\
    \ the vampire is destroyed, is on a different plane of existence than the target,\
    \ or takes a bonus action to end the effect."
  "name": "Charm"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vampire magically calls dice: 2d4|avg (2d4) swarms of [[/6. Mechanics/Bestiary/Beast/Swarm Of Bats.md\|bats]]\
    \ or [[/6. Mechanics/Bestiary/Beast/Swarm Of Rats.md\|rats]], provided that the sun\
    \ isn't up. While outdoors, the vampire can call dice: 3d6|avg (3d6) [[/6. Mechanics/Bestiary/Beast/Wolf.md\|wolves]]\
    \ instead. The called creatures arrive in dice: 1d4|avg (1d4) rounds, acting\
    \ as allies of the vampire and obeying its spoken commands. The beasts remain\
    \ for 1 hour, until the vampire dies, or until the vampire dismisses them as a\
    \ bonus action."
  "name": "Children of the Night (1/Day)"
"legendary_actions":
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vampire moves up to its speed without provoking opportunity attacks."
  "name": "Move"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vampire makes one unarmed strike."
  "name": "Unarmed Strike"
- !!dev.ebullient.convert.tools.dnd5e.qute.Trait
  "desc": "The vampire makes one bite attack."
  "name": "Bite (Costs 2 Actions)"
"source":
- "MM"
- "RoT"
"image": "/compendium/bestiary/undead/token/vampire-spellcaster.png"
aliases: ["Vampire Spellcaster"]
---
# Vampire Spellcaster
*Source: Monster Manual p. 298, The Rise of Tiamat*  

Awakened to an endless night, vampires hunger for the life they have lost and sate that hunger by drinking the blood of the living. Vampires abhor sunlight, for its touch burns them. They never cast shadows or reflections, and any vampire wishing to move unnoticed among the living keeps to the darkness and far from reflective surfaces.

## Dark Desires

Whether or not a vampire retains any memories from its former life, its emotional attachments wither as once-pure feelings become twisted by undeath. Love turns into hungry obsession, while friendship becomes bitter jealousy. In place of emotion, vampires pursue physical symbols of what they crave, so that a vampire seeking love might fixate on a young beauty. A child might become an object of fascination for a vampire obsessed with youth and potential. Others surround themselves with art, books, or sinister items such as torture devices or trophies from creatures they have killed.

## Born from Death

Most of a vampire's victims become vampire spawn-ravenous creatures with a vampire's hunger for blood, but under the control of the vampire that created them. If a true vampire allows a spawn to draw blood from its own body, the spawn transforms into a true vampire no longer under its master's control. Few vampires are willing to relinquish their control in this manner. Vampire spawn become free-willed when their creator dies.

## Chained to the Grave

Every vampire remains bound to its coffin, crypt, or grave site, where it must rest by day. If a vampire didn't receive a formal burial, it must lie beneath a foot of earth at the place of its transition to undeath. A vampire can move its place of burial by transporting its coffin or a significant amount of grave dirt to another location. Some vampires set up multiple resting places this way.

## Undead Nature

Neither a vampire nor a vampire spawn requires air.

## A Vampire's Lair

A vampire chooses a grand yet defensible location for its lair, such as a castle, fortified manor, or walled abbey. It hides its coffin in an underground crypt or vault guarded by vampire spawn or other loyal creatures of the night.

> [!quote] Player Characters as Vampires
> 
> The game statistics of a player character transformed into a vampire spawn and then a vampire don't change, except that the character's Strength, Dexterity, and Constitution scores become 18 if they aren't higher. In addition, the character gains the vampire's damage resistances, [[6. Mechanics/Rules/senses.md#darkvision\|darkvision]], traits, and actions. Attack and damage rolls for the vampire's attacks are based on Strength.
> 
> The save DC for Charm is 8 + the vampire's proficiency bonus + the vampire's Charisma modifier. The character's alignment becomes lawful evil, and the DM might take control of the character until the vampirism is reversed with a [[/6. Mechanics/Spells/wish.md\|wish]] spell or the character is killed and brought back to life.
^player-characters-as-vampires

> [!quote] Strahd von Zarovich
> 
> A brilliant thinker and capable warrior in life, Strahd von Zarovich fought in countless battles for his people. When war and killing finally stripped him of his youth and strength, he settled in the remote valley of Barovia and built a castle on a towering pinnacle, from which he could survey his lands. His brother Sergei came to live with him in Castle Ravenloft, becoming Strahd's adviser and constant companion.
> 
> In his brother, Strahd saw everything he had lost. Sergei was handsome and young, while Strahd had become old and scarred. Resentment colored their relationship, eventually turning into hatred. Strahd's beloved, Tatyana, spurned him for Sergei, whom she pledged to marry.
> 
> In a desperate attempt to win Tatyana's heart, Strahd forged a pact with dark powers that made him immortal. At the wedding of Sergei and Tatyana, he confronted his brother and killed him. Tatyana fled and flung herself from Ravenloft's walls. Strahd's guards, seeing him for a monster, shot him with arrows. But he did not die. He became a vampire-the first vampire, according to many sages.
> 
> In the centuries since his transformation, Strahd's lust for life and youth have only grown. He broods in his dark castle, cursing the living for stealing away what he lost, and never admitting his hand in the tragedy he created.
^strahd-von-zarovich

> [!quote]- A quote from Count Strahd von Zarovich  
> 
> I am The Ancient, I am The Land. My beginnings are lost in the darkness of the past. I was the warrior, I was good and just. I thundered across the land like the wrath of a just god, but the war years and the killing years wore down my soul as the wind wears down stone into sand.


## Stat Block

```ad-statblock
title: Vampire Spellcaster
![[/6. Mechanics/Bestiary/Undead/Token/vampire-spellcaster.png#token]]
*Medium undead(shapechanger), Lawful Evil*

- **Armor Class** 16 (natural armor)
- **Hit Points** `dice: 17d8 + 68|text(144)` (17d8 + 68) 
- **Speed** walk 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|18 (+4)|18 (+4)|17 (+3)|15 (+2)|18 (+4)|

- **Proficiency Bonus** +5
- **Saving Throws** Dexterity +9, Wisdom +7, Charisma +9
- **Skills** Perception +7, Stealth +9
- **Senses** darkvision 120 ft., passive Perception 17
- **Damage Resistances** necrotic; bludgeoning, piercing, slashing from nonmagical attacks
- **Languages** the languages it knew in life
- **Challenge** 15

## Traits

***Shapechanger.*** If the vampire isn't in sunlight or running water, it can use its action to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true form.

While in bat form, the vampire can't speak, its walking speed is 5 feet, and it has a flying speed of 30 feet. Its statistics, other than its size and speed, are unchanged. Anything it is wearing transforms with it, but nothing it is carrying does. It reverts to its true form if it dies.

While in mist form, the vampire can't take any actions, speak, or manipulate objects. It is weightless, has a flying speed of 20 feet, can hover, and can enter a hostile creature's space and stop there. In addition, if air can pass through a space, the mist can do so without squeezing, and it can't pass through water. It has advantage on Strength, Dexterity, and Constitution saving throws, and it is immune to all nonmagical damage, except the damage it takes from sunlight.

***Legendary Resistance (3/Day).*** If the vampire fails a saving throw, it can choose to succeed instead.

***Misty Escape.*** When it drops to 0 hit points outside its resting place, the vampire transforms into a cloud of mist (as in the Shapechanger trait) instead of falling [[6. Mechanics/Rules/conditions.md#unconscious\|unconscious]], provided that it isn't in sunlight or running water. If it can't transform, it is destroyed.

While it has 0 hit points in mist form, it can't revert to its vampire form, and it must reach its resting place within 2 hours or be destroyed. Once in its resting place, it reverts to its vampire form. It is then [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]] until it regains at least 1 hit point. After spending 1 hour in its resting place with 0 hit points, it regains 1 hit point.

***Regeneration.*** The vampire regains 20 hit points at the start of its turn if it has at least 1 hit point and isn't in sunlight or running water. If the vampire takes radiant damage or damage from holy water, this trait doesn't function at the start of the vampire's next turn.

***Spider Climb.*** The vampire can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.

***Vampire Weaknesses.*** The vampire has the following flaws:

_Forbiddance._ The vampire can't enter a residence without an invitation from one of the occupants.

_Harmed by Running Water._ The vampire takes 20 acid damage if it ends its turn in running water.

_Stake to the Heart._ If a piercing weapon made of wood is driven into the vampire's heart while the vampire is [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]] in its resting place, the vampire is [[6. Mechanics/Rules/conditions.md#paralyzed\|paralyzed]] until the stake is removed.

_Sunlight Hypersensitivity._ The vampire takes 20 radiant damage when it starts its turn in sunlight. While in sunlight, it has disadvantage on attack rolls and ability checks.

***Spellcasting.*** The vampire is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 16, `dice: d20+8` (+8 to hit) with spell attacks). The vampire has the following wizard spells prepared:

**Cantrips (at will)**: [[/6. Mechanics/Spells/mage-hand.md\|mage hand]], [[/6. Mechanics/Spells/prestidigitation.md\|prestidigitation]], [[/6. Mechanics/Spells/ray-of-frost.md\|ray of frost]]

**1st level (4 1st-level slots)**: [[/6. Mechanics/Spells/comprehend-languages.md\|comprehend languages]], [[/6. Mechanics/Spells/fog-cloud.md\|fog cloud]], [[/6. Mechanics/Spells/sleep.md\|sleep]]

**2nd level (3 2nd-level slots)**: [[/6. Mechanics/Spells/detect-thoughts.md\|detect thoughts]], [[/6. Mechanics/Spells/gust-of-wind.md\|gust of wind]], [[/6. Mechanics/Spells/mirror-image.md\|mirror image]]

**3rd level (3 3rd-level slots)**: [[/6. Mechanics/Spells/animate-dead.md\|animate dead]], [[/6. Mechanics/Spells/bestow-curse.md\|bestow curse]], [[/6. Mechanics/Spells/nondetection.md\|nondetection]]

**4th level (3 4th-level slots)**: [[/6. Mechanics/Spells/blight.md\|blight]], [[/6. Mechanics/Spells/greater-invisibility.md\|greater invisibility]]

**5th level (1 5th-level slots)**: [[/6. Mechanics/Spells/dominate-person.md\|dominate person]]

## Actions

***Multiattack (Vampire Form Only).*** The vampire makes two attacks, only one of which can be a bite attack.

***Unarmed Strike (Vampire Form Only).*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 5 ft., one creature. Hit: `dice: 1d8 + 4` (`1d8 + 4`) bludgeoning damage. Instead of dealing damage, the vampire can grapple the target (escape DC 18).

***Bite (Bat or Vampire Form Only).*** *Melee Weapon Attack:* `dice: d20+9` (+9 to hit), reach 5 ft., one willing creature, or a creature that is [[6. Mechanics/Rules/conditions.md#grappled\|grappled]] by the vampire, [[6. Mechanics/Rules/conditions.md#incapacitated\|incapacitated]], or [[6. Mechanics/Rules/conditions.md#restrained\|restrained]]. Hit: `dice: 1d6 + 4` (`1d6 + 4`) piercing damage plus `dice: 3d6` (`3d6`) necrotic damage. The target's hit point maximum is reduced by an amount equal to the necrotic damage taken, and the vampire regains hit points equal to that amount. The reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0. A humanoid slain in this way and then buried in the ground rises the following night as a [[/6. Mechanics/Bestiary/Undead/Vampire Spawn.md\|vampire spawn]] under the vampire's control.

***Charm.*** The vampire targets one humanoid it can see within 30 feet of it. If the target can see the vampire, the target must succeed on a DC 17 Wisdom saving throw against this magic or be [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] by the vampire. The [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] target regards the vampire as a trusted friend to be heeded and protected. Although the target isn't under the vampire's control, it takes the vampire's requests or actions in the most favorable way it can, and it is a willing target for the vampire's bite attack.

Each time the vampire or the vampire's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the vampire is destroyed, is on a different plane of existence than the target, or takes a bonus action to end the effect.

***Children of the Night (1/Day).*** The vampire magically calls `dice: 2d4` (`2d4`) swarms of [[/6. Mechanics/Bestiary/Beast/Swarm Of Bats.md\|bats]] or [[/6. Mechanics/Bestiary/Beast/Swarm Of Rats.md\|rats]], provided that the sun isn't up. While outdoors, the vampire can call `dice: 3d6` (`3d6`) [[/6. Mechanics/Bestiary/Beast/Wolf.md\|wolves]] instead. The called creatures arrive in `dice: 1d4` (`1d4`) rounds, acting as allies of the vampire and obeying its spoken commands. The beasts remain for 1 hour, until the vampire dies, or until the vampire dismisses them as a bonus action.

## Legendary Actions

***Move.*** The vampire moves up to its speed without provoking opportunity attacks.

***Unarmed Strike.*** The vampire makes one unarmed strike.

***Bite (Costs 2 Actions).*** The vampire makes one bite attack.

## Regional effects

The region surrounding a vampire's lair is warped by the creature's unnatural presence, creating any of the following effects:

- There's a noticeable increase in the populations of bats, rats, and wolves in the region.  
- Plants within 500 feet of the lair wither, and their stems and branches become twisted and thorny.  
- Shadows cast within 500 feet of the lair seem abnormally gaunt and sometimes move as though alive.  
- A creeping fog clings to the ground within 500 feet of the vampire's lair. The fog occasionally takes eerie forms, such as grasping claws and writhing serpents.  

If the vampire is destroyed, these effects end after `dice: 2d6` (`2d6`) days.
```
^statblock

## Environment

urban