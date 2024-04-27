---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
  - compendium/src/5e/saf
  - monster/cr/5
  - monster/size/medium
  - monster/type/celestial
statblock: inline
aliases:
  - Princip
---
# [[5. Mechanics\Bestiary\Celestial\Princip.md|Princip]]
*Source: Strongholds and Followers p. 155*

Herald of the Righteous Power, the Princip arrives ready to crown an ally, bestowing on them a greater destiny, granting them immunity to spells that charm or dominate and raising one ability to god-like levels.

The character so crowned feels a rush of divine power, a tiny fraction of the same energy all the Celestial Court are made of. Apart from the blazing crown over their head, their new power manifests as beams of light shooting from their eyes, their skin flashing to gold in an instant, or their hair turning to blazing, heatless fire. Upon losing the crown, they feel a period of melancholy as their previous greatness flees, leaving them mortal, again, and lesser.

## Tactics

The player who summoned the Princip decides who it crowns, which doesn't have to be the summoner. If the player can't decide, or hesitates, the Princip has its own ideas...

The Crown prevents any attempt to force its wearer to behave in any way contrary to their will, so the Princip tends to Crown the character most likely to fail a Wisdom saving throw. The wearer of the Crown chooses which ability they want to raise, but raising Wisdom while wearing the Crown isn't the best use, as you're already basically immune to charm person and other mind-dominating spells. That is, unless you use Wisdom for spellcasting, in which case 24 Wisdom is going to rock your enemies for however long it lasts.

Raising Constitution to 24 means you're probably not going to lose the Crown when you take damage. And you'll gain a bunch of hit points, making you less likely to die. But 24 is so high (+7!) that you can even raise your best ability and be even better at whatever you do. So it's a choice between surviving longer and doing your thing better.

Once someone is Crowned, the Princip enjoys wading into battle and smashing things with its scepter. Like all the Court, the Princip prefers to smash evil over neutral monsters, but it tends to try to defend the character it Crowned, even over the character who summoned it. However, if it thinks the Crowned character is now so powerful it doesn't need help, it defaults to the character who summoned it (if they're different people). If neither its summoner or the Crowned needs help, the Princip defends the most vulnerable party member.

While one character is enjoying the benefits of temporary godhood, the Princip dispenses other buffs to the party in an attempt to turn the tide of battle. Which, wow, it's gonna do that. It can cast haste three times, which is enough to make a huge difference on its own. Or stoneskin for anyone who's getting hammered in combat, and remove curse in case the party was in trouble when it arrived.

If the battle lasts long enough, or if the Princip is summoned again after using its daily spells, it hands out shield of faith and enhance ability to the PCs, giving each of them a little pep talk in its own bizarre fashion. The Princip enjoys proclaiming the heroes' greatness a lot, speaking in flowery prose that doesn't make literal sense but conveys the idea that it thinks the heroes are literally glorious.

> [!quote]-  
> 
> "Behold! The power arises! Leaves fall, men die, yet all shall be consumed by the endless river of glory!"

Um, what? The endless what now? Well, it tried. It probably means, "You're gonna do great!" Don't think too hard about it, it'll just give you a headache.

```statblock
"name": "Princip"
"size": "Medium"
"type": "celestial"
"alignment": "Any Good alignment"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "16"
- !!int "15"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
"speed": "40 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#poisoned|poisoned]]"
"senses": "truesight, passive Perception 19"
"languages": "all, telepathy 60 ft."
"cr": "5"
"traits":
- "desc": "The princip's spellcasting ability is Wisdom (spell save DC 14). It can\
    \ innately cast the following spells, requiring only verbal components:\n\nAt\
    \ will: [[5. Mechanics/Spells/Aid.md|aid]], [[5. Mechanics/Spells/Enhance Ability.md|enhance ability]],\
    \ [[5. Mechanics/Spells/Lesser Restoration.md|lesser restoration]], [[5. Mechanics/Spells/Shield Of Faith.md|shield of faith]]\n\
    \n3/day each: [[5. Mechanics/Spells/Haste.md|haste]], [[5. Mechanics/Spells/Remove Curse.md|remove curse]],\
    \ [[5. Mechanics/Spells/Stoneskin.md|stoneskin]]"
  "name": "Innate Spellcasting"
- "desc": "The princip's weapon attacks are magical. When the princip hits with any\
    \ weapon, the weapon deals an extra dice:2d8|text(9) (2d8) radiant damage\
    \ (included in the attack)."
  "name": "Angelic Weapons"
- "desc": "The princip has advantage on saving throws against spells and other magical\
    \ effects from evil characters and sources."
  "name": "Magic Resistance"
- "desc": "Evil creatures have disadvantage on attack rolls against all allies within\
    \ 5 feet of the princip. Allies in this area can't be [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], or possessed by evil\
    \ creatures. If an ally is already [[/5. Mechanics/Rules/Conditions.md#charmed|charmed]],\
    \ [[/5. Mechanics/Rules/Conditions.md#frightened|frightened]], or possessed by evil\
    \ magic, the ally has advantage on any new saving throw against the relevant effect."
  "name": "Aura of Protection Against Evil"
"actions":
- "desc": "The princip makes three attacks with the Scepter of Celestial Will."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice: d20+6 (+6) to hit, reach 5 ft., one target.\
    \ Hit: dice:2d8 + 3|text(12) (2d8 + 3) bludgeoning damage and dice:2d8|text(9)\
    \ (2d8) radiant damage."
  "name": "Scepter of Celestial Will"
- "desc": "The princip selects an ally. A golden crown appears over the ally's head.\
    \ While the crown remains, the ally cannot be compelled to act in a manner contrary\
    \ to their will and may choose one stat to raise to 24. Each time the ally takes\
    \ damage while the crown is on them, they must make a constitution saving throw\
    \ or lose the crown. The DC equals 10 or half the damage taken, whichever number\
    \ is higher."
  "name": "Crown of Glory"
"source":
- "SaF"
"image": "https://raw.githubusercontent.com/TheGiddyLimit/homebrew/master/_img/SaF/tokens/Princip.png"
```
^statblock

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
