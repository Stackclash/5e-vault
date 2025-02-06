---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 4
environments: 'underdark, mountain, hill'
size: Large
tags:
  - 5. Mechanics\Src\5e\(MM)
  - monster\Cr\4
  - monster\Environment\Hill
  - monster\Environment\Mountain
  - monster\Environment\Underdark
  - monster\Size\Large
  - monster\Type\Giant
aliases:
  - Ettin
---
# [[5. Mechanics\Bestiary\Giant\Ettin.md|Ettin]]
*Source: Monster Manual p. 132, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

An ettin is a foul, two-headed giant with the crude characteristics of an orc. It never bathes if it can help it, and its thick skin is usually encrusted with a thick layer of dirt and grime beneath the stinking hides it wears. Its long stringy hair hangs in an unkempt mess about its faces, and its breath reeks from mouths filled with crooked teeth and tusks.

## Dual Personality

The twin heads of an ettin are two individuals trapped in the same brutish body. Each head has its own mind, personality, and name, and possesses unique preferences and quirks. Bound from birth, both minds only rarely experience privacy or solitude. This familiarity breeds contempt, and an ettin bullies and argues with itself constantly, its two heads each taking constant offense at the other's slights.

When other creatures refer to an ettin, they combine its double names to form a single compound name that applies to the creature as a whole. If an ettin has one head named Hargle and another named Vargle, other creatures call the ettin Harglevargle.

## Solitary Lives

As much as an ettin argues with itself, it is even less tolerant of other ettins, since a conversation between two ettins almost always amounts to a shouting match between a crowd of four belligerent heads. Most ettins are solitary creatures as a result, tolerating one another only to reproduce.

An ettin's twin heads are always the same gender, with a body to match.

Females are the dominant gender among ettins, and they initiate the ettins' mating rituals. After finding a suitable den, a female ettin hunts and conquers a male, which cares for and feeds her during her six-month pregnancy. Once the child is born, the male ettin is released from servitude. When the child is old enough to hunt for itself, the mother sends it away and abandons the den.

## Two Heads are Better than One

When focused on a mutually beneficial purpose or united by a common threat, an ettin can resolve its personality differences and dedicate itself fully to a task. An ettin fights with a weapon in each hand, making twin attacks directed by its respective heads. When an ettin sleeps, one of its heads remains ever alert, gaining its only moments of privacy and keeping two eyes open for any creature that disturbs its precious solitude.

## Orcish Ties

In ancient dialects of Common, the word "ettin" translates as "ugly giant." Legends tell of orcs that once stumbled upon a temple to Demogorgon, the magic of which transformed them into giant mockeries of the twin-headed Prince of Demons. Driven to near madness, these creatures scattered into the wilderness to become the first ettins.

Whatever the truth of the ettins' origin, orcs treat them as distant cousins, and orc tribes often entice ettins to serve as guards, scouts, and marauders. An ettin isn't particularly loyal to its orc handlers, but the orcs can win it over with the promise of food and loot.

```statblock
"name": "Ettin"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"stats":
- !!int "21"
- !!int "8"
- !!int "17"
- !!int "6"
- !!int "10"
- !!int "8"
"speed": "40 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Giant, Orc"
"cr": "4"
"traits":
- "desc": "The ettin has advantage on Wisdom ([[/5. Mechanics/Rules/Skills.md#Perception|Perception]])\
    \ checks and on saving throws against being [[/5. Mechanics/Rules/Conditions.md#Blinded|blinded]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Deafened|deafened]],\
    \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]],\
    \ and knocked [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]."
  "name": "Two Heads"
- "desc": "When one of the ettin's heads is asleep, its other head is awake."
  "name": "Wakeful"
"actions":
- "desc": "The ettin makes two attacks: one with its battleaxe and one with its morningstar."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) slashing damage."
  "name": "Battleaxe"
- "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8\
    \ + 5) piercing damage."
  "name": "Morningstar"
"source":
- "MM"
- "VEoR"
"image": "5. Mechanics/Bestiary/Giant/token/ettin.webp"
```
^statblock

## Environment

underdark, mountain, hill

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
