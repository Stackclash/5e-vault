---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/17
  - monster/size/large
  - monster/type/humanoid/human
condition: healthy
images:
  - 4. World Almanac\NPCs\img\izek-strazni.webp
aliases:
  - Izek Strazni
alignment: Neutral Evil
relationships: []
partyRelationships:
  Midnight Covenant: Friendly
location: "[[4. World Almanac/Places of Interest/Greyfen Hollow.md|Greyfen Hollow]]"
pronounced: EYE-zek STRAHZ-nee
race: '[[5. Mechanics/Races/Human.md|Human]]'
gender: male
age: 34
occupation:
  - Hand of the Whispered One
  - Enforcer to Baron Vallakovich (former)
groups:
  - Vecna's claimed
  - Baron Vallakovich's household (former)
religions: []
personality: >-
  Quieter than he was. The old volatility has gone somewhere colder — he no
  longer needs to raise his voice to be obeyed, and he knows it. Still capable of
  sudden, total violence; simply no longer interested in performing it.
ideal: Fear is a powerful weapon. I use it to get what I want.
bond: >-
  I am loyal to my master, for he saved me when I was dying and gave me the arm
  no one else would. I owe him my life. He isn't family either.
flaw: 'I would do anything, kill anything, to find my sister.'
goals: >-
  Serve the debt. Keep the works at Greyfen Hollow running and unnoticed. Avoid,
  for as long as it can be avoided, having to kill anyone he drank with in
  Vallaki.
likes: 'Wine, fire, the fear he inspires, carving badly'
dislikes: >-
  Being pitied, being thanked, being asked why — and above all, being made to
  explain himself to people who used to like him
description: >-
  Bigger than they remember, and wrong in more places. The fiendish arm is still
  there — barbed, taloned, red — but it is no longer the only thing. A second
  growth has come up over the opposite shoulder and down the ribs in plates that
  don't sit flush; his jaw has lengthened; he stands a head taller than a man
  should and moves like the extra size is something he's still learning. Beneath
  all of it, under the skin where it stretches thin, run thread-thin veins of
  amber — the same amber as the conduits in the Wardens, the same amber as the
  gem at the nape of Marrow's neck.
history: >-
  Izek lost his arm and his baby sister to a dire wolf attack as a boy, and grew
  up an orphaned sociopath in Vallaki until Baron Vallakovich pardoned his
  crimes and took him into his home. Loyal ever since, he awoke one morning
  years later to find a fiendish new arm had grown in place of the one he lost.
  He enforced the burgomaster's will, drank heavily, and secretly kept a room of
  dolls carved in the likeness of a woman from his dreams — Ireena Kolyana, his
  own long-lost sister, though neither of them knew it.

  He fought alongside the Midnight Covenant. When Strahd's werewolves stormed
  Van Richten's Tower (S15), Izek held the top floor with Faerah Duskrane and
  Seluvis Felo'melorn and did not break. He and Ireena were still sheltering
  there when the party left for Argynvostholt (S16). [[Yevelda Ovak]] flirted
  with him in Vallaki during the mob crisis (S9), and he has not forgotten it.

  He was somewhere in the chaos when Castle Ravenloft came down and Vecna's
  escaping power swept out through Barovia. It found him dying. It did not
  leave him that way. He has not been seen since — until Greyfen Hollow, where
  he now stands over the Silent Ascendency's works as the only thing there that
  answers directly to the Whispered One.
secrets: >-
  STILL DM-ONLY — where the arm came from. Izek's fiendish arm was never a
  Barovian accident and never Strahd's doing. It was a gift, granted from
  inside the Amber Temple by Vecna himself, to a crippled, drunk, furious young
  man who wanted it badly enough to be heard. Izek did not know who had answered
  him then. He knows now. It is the single fact he will not say out loud.

  This makes him the prototype the Amber Wardens are imitating: the first
  successful graft of Eludrax's soul-craft onto a living frame, made by hand as
  a favour, decades before the Ascendency began mass-producing a cruder version
  in stone. The amber veining under his skin is the same substance as the
  Wardens' conduits and as the graft at the nape of [[Marrow]]'s neck. A party
  that looks properly can connect all three by sight alone — that is the
  intended reveal here, and it is a reveal about Vecna's reach, not about his
  plan.

  He is NOT controlled, charmed, or compelled. He is lucid, and he is choosing
  this. Vecna gave him the arm when he was nothing, and saved his life at
  Ravenloft when he was dying, and Izek pays what he owes — the same bond he had
  to Vallakovich, transplanted whole onto a worse master. He is not happy. He is
  not conflicted enough to stop.

  He knows what the casked distillate leaving Greyfen Hollow is for. He will not
  say, and he cannot be made to.

  [[Yevelda Ovak]] does not know any of this yet.
---
> [!infobox]
> # `=this.file.name`
> **Pronounced:**  `INPUT[text:pronounced]`
> ```dataviewjs
> await dv.view('views/imageCarousel', {current: dv.current()})
> ```
> ```meta-bind
> INPUT[imageListSuggester(optionQuery("/"),class(hide-image)):images]
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
> **Party Relationship** | `$=await dv.view('utils/metaBindInput', {type: 'inlineSelect', options: ['option(Acquaintance)','option(Friendly)','option(Ally)','option(Disgruntled)','option(Enemy)'], field: ['partyRelationships', dv.page(dv.page(dv.page('Configuration').active_campaign).party).file.name]})` |

# **`=this.file.name`**
*Source: Curse of Strahd p. 232*

Izek and his sister were born in Vallaki. One morning, their father and their uncle took them fishing on Lake Zarovich. On the way back to town, a dire wolf attacked Izek and bit off his right arm. His father carried Izek back to town while his uncle distracted the beast. His sister ran and hid in the woods and was never seen again.

Unlike his sister, Izek was born without a soul. As time wore on, he forgot his lost sister and learned to cope with his disability.

## Orphaned Killer

Izek's parents succumbed to their grief, leaving him an orphan. He became a sociopath. Other children ruthlessly mocked him because of his dead family and his missing arm, but he was a large boy and had no trouble killing them and disposing of their bodies. He was eventually caught in the act and brought to the burgomaster. Instead of punishing the boy for his crimes, Baron Vallakovich pardoned Izek and took him into his home. Izek has been loyal to the burgomaster ever since, enjoying the power of his position and the comforts of his master's mansion. When he isn't enforcing the burgomaster's will, Izek drinks copious amounts of wine.

## Fiendish Gift

After years of doing Baron Vallakovich's dirty work, Izek awakened from a drunken stupor one morning to find that he had grown a new arm to replace the one he had lost.

The new appendage has barbed spines, elongated fingers, and long nails. He can create fire with the snap of his fiendish fingers and has used the flames to put the fear of the devil in every Vallakian.

## Doll Collector

Perhaps more disturbing than his fiendish arm and his murderous nature is Izek's collection of dolls, which he keeps in his bedroom in the burgomaster's mansion. Izek often has dreams of a beautiful young woman, and for years he has forced a local toymaker named Gadof Blinsky to craft dolls in her likeness. The woman is Ireena Kolyana, although Izek doesn't know her name.

## Family Is Forever

Izek has dreams of Ireena. If he spots her, he tries to take her by force to the burgomaster's mansion. If he succeeds, he holds her captive in his bedroom (chapter 5, area N3j). Unknown to Izek and Ireena, they are brother and sister. Ireena fled after Izek was attacked by the dire wolf and became lost in the woods. She wandered for days in shock until she was found and adopted by Kolyan Indirovich in the village of Barovia. Izek covets her in an unwholesome way and won't allow anyone or anything to come between them.

- **Ideal.** "Fear is a powerful weapon. I use it to get what I want."  
- **Bond.** "I am loyal to my master, Baron Vallakovich, for he brought me into his home. I owe him my life, but he isn't family."  
- **Flaw.** "I would do anything, kill anything, to find my sister."  

> [!column|no-t flex]
>> [!metadata|text-Center] Description
>> `INPUT[textArea:description]`
>
>> [!metadata|text-Center] History
>> `INPUT[textArea:history]`

## Traits/Goals
> [!column|no-t flex]
>> [!metadata|text-Center bg-c-yellow] Personality
>> `INPUT[textArea:personality]`
>
>> [!metadata|text-Center bg-c-pink] Ideal
>> `INPUT[textArea:ideal]`
>
>> [!metadata|text-Center bg-c-brown] Bond
>> `INPUT[textArea:bond]`
>
>> [!metadata|text-Center bg-c-orange] Flaw
>> `INPUT[textArea:flaw]`
>
>> [!metadata|text-Center bg-c-green] Likes
>> `INPUT[textArea:likes]`
>
>> [!metadata|text-Center bg-c-red] Dislikes
>> `INPUT[textArea:dislikes]`
>
>> [!metadata|text-Center] Goals
>> `INPUT[textArea:goals]`

## Player-Facing
> [!metadata|text-Center] What the Party Knows
> `INPUT[textArea:player_impression]`

## Secrets
`INPUT[textArea:secrets]`

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
> `$=await dv.view("views/npcRelationships", { current: dv.current() })`

## Quests
```datacorejsx
return function View() {
  const currentPage = dc.useCurrentFile()
  const quests = dc.useQuery(`@page and #quest and connected(${currentPage.$link})`)
  const columns = [
    {
      id: 'Quest',
      value: (row) => row.$link
    },
    {
      id: 'Description',
      value: (row) => row.$frontmatter.description.raw || ''
    },
    {
      id: 'Involvement',
      value: (row) => row.$frontmatter.npcs.raw.find(n => n.name.includes(currentPage.$name)).description || ''
    }
  ]
  
  return <dc.Table rows={quests} columns={columns}/>
}
```

## Stats
*His current form, as of Greyfen Hollow — **CR 17**, rebuilt from the ground up. The party last fought beside a CR 5 man. This is not that man, and the gap is the point. His Barovia-era block is preserved in DM Notes below if it's ever needed for a flashback.*
```statblock
name: Izek Strazni (COS)
size: Large
type: humanoid
subtype: human
alignment: Neutral Evil
ac: 18
ac_class: natural armor
hp: 315
hit_dice: 30d10 + 150
modifier: 2
speed: 40 ft.
stats:
  - 22
  - 14
  - 20
  - 11
  - 12
  - 16
saves:
  - strength: 12
  - constitution: 11
  - charisma: 9
skillsaves:
  - name: "[[/5. Mechanics/Rules/Skills.md#Intimidation|Intimidation]]"
    desc: "+9"
  - name: "[[/5. Mechanics/Rules/Skills.md#Perception|Perception]]"
    desc: "+7"
damage_resistances: "fire; bludgeoning, piercing, and slashing from nonmagical attacks"
condition_immunities: "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]"
gear:
  - "[[/5. Mechanics/Items/Battleaxe.md|battleaxe]]"
senses: "[[/5. Mechanics/Rules/Senses.md#Darkvision|darkvision]] 120 ft., passive Perception 17"
languages: Common
cr: "17"
traits:
  - name: Brute
    desc: A melee weapon deals one extra die of its damage when Izek hits with it (included in his attacks).
  - name: Amber-Threaded
    desc: The soul-craft grafted through Izek's body knits him back together faster than anything should. He regains 15 hit points at the start of his turn if he has at least 1 hit point. He is immune to any effect that would alter his form against his will.
  - name: Magic Resistance
    desc: Izek has advantage on saving throws against spells and other magical effects.
  - name: Legendary Resistance (3/Day)
    desc: If Izek fails a saving throw, he can choose to succeed instead.
actions:
  - name: Multiattack
    desc: Izek makes three attacks — two with his battleaxe and one with his fiendish claw.
  - name: Battleaxe
    desc: "*Melee Weapon Attack:* +12 to hit, reach 10 ft., one target. *Hit:* 15 (2d8 + 6) slashing damage."
  - name: Fiendish Claw
    desc: "*Melee Weapon Attack:* +12 to hit, reach 10 ft., one target. *Hit:* 13 (2d6 + 6) slashing damage plus 10 (3d6) fire damage."
  - name: Pyre of the Whispered One (Recharge 5-6)
    desc: "Izek snaps the fingers of his fiendish hand and the air answers. Each creature in a 30-foot cone must make a DC 19 Dexterity saving throw, taking 24 (7d6) fire damage and 10 (3d6) necrotic damage on a failed save, or half as much damage on a successful one. A creature that fails the save can't regain hit points until the end of its next turn."
bonus_actions:
  - name: Whispered Step
    desc: Izek vanishes in a curl of amber smoke and reappears in an unoccupied space he can see within 60 feet.
legendary_description: "Legendary Action Uses: 3. Immediately after another creature's turn, Izek can expend a use to take one of the following actions. He regains all expended uses at the start of each of his turns."
legendary_actions:
  - name: Stride
    desc: Izek moves up to his speed without provoking opportunity attacks.
  - name: Claw (Costs 2 Actions)
    desc: Izek makes one Fiendish Claw attack.
  - name: Withering Regard (Costs 2 Actions)
    desc: "Izek looks at one creature he can see within 30 feet, and is sorry. That creature must succeed on a DC 19 Wisdom saving throw or take 14 (4d6) psychic damage and have disadvantage on its next attack roll before the end of its next turn."
source:
  - Homebrew
image: "/4. World Almanac/NPCs/token/izek-strazni-cos.webp"
```
^statblock

## DM Notes
### Plot Hooks
- He is the party's first proof that Vecna takes people *personally* — not as a distant cosmic threat but as someone who reached into Barovia, picked a specific dying man out of the rubble, and kept him.
- He is [[Yevelda Ovak]]'s thread. She flirted with him in Vallaki (S9); he held a tower door against werewolves alongside [[Faerah Duskrane]] (S15). Every person in the party has a reason to hesitate.
- The amber under his skin is the same craft as the [[Amber Warden]] conduits and [[Marrow]]'s graft. That connection is available *by sight*, with no roll, to anyone who looks at all three — and Marrow's corpse is still sitting uninvestigated in Bruokdon custody, which makes this a reason to finally go look at it.

### Hidden Details

**How he plays the scene at [[Greyfen Hollow]].** He knows the party is in the caves almost from the moment they come down the Gullet — he can feel the soul-craft move, and there is very little down there he doesn't notice. He does not raise the alarm. He watches them come, all the way down, and he spends that whole time deciding whether to let them leave.

He decides no.

When he shows himself it is brief and it is not a fight. He says something short — he was never articulate, and he isn't going to start — he looks at Yevelda for slightly too long, and he gives the order: the Foundry Warden, the cradles, the cultists, all of it. Then he walks out through the Reservoir with his back to them, and the last thing they see is that he looks *sorry*, and that it didn't change anything.

**If the party tries to stop him.** He is not a scheduled encounter and he is not meant to be beaten. The stat block above exists so the DM can say "no" with numbers behind it. One round is enough to demonstrate the problem — 315 hit points, regeneration, Magic Resistance, three Legendary Resistances, and a cone that does 34 average damage to the whole front rank. Give them that round, let it land, then have him use Whispered Step and go. He does not want to kill them and he will not stay to be worn down.

**If they somehow corner him anyway,** he fights in earnest and people die. That is a legitimate outcome and the block supports it — but it is the party choosing a CR 17 solo at level 10, and it should be clear before the dice that they chose it.

**What he will not do:** gloat, explain, monologue, or answer questions about what the casked distillate is for. He knows. He isn't telling. Play him as a man declining to have a conversation, not a villain withholding a secret.

**Party relationship.** `partyRelationships` still reads *Friendly* and should stay that way until the encounter actually happens — as of now the party has no reason to think he's anything but a man who fought beside them and went missing. Flip it after Greyfen Hollow, and "Enemy" may still be the wrong word for it.

**Campaign-bible dependency.** The bible currently slots Izek into Act II, Arc 3 ("Claim a Vessel") as a rescue-or-mercy dilemma. This early reappearance changes that; the DM has said the bible will be revised but is not making that change yet, so the Act II text stands as written for now.

### General Notes
**Stat block redesign (2026-09-05).** Rebuilt from scratch at **CR 17** at the DM's direction — "very strong even for the whole party." Role: solo brute with a guaranteed exit. Benchmarked against [[5. Mechanics/Bestiary/Fiend/Balor.md|Balor]] (CR 19) and [[5. Mechanics/Bestiary/Giant/Fire Giant.md|Fire Giant]] (CR 9) for the shape of a large fire-flavoured melee threat, then pushed to solo-boss tier with legendary actions and resistances.

**CR math.**
- **Defensive.** 315 HP sits in the CR 17 row (311–325); AC 18 is one row below (CR 17 wants 19), which pulls down half a step. Amber-Threaded regeneration (15/round) and three Legendary Resistances push effective durability well back up at a tier where this party's control spells are its best answer → **CR 17 defensive**.
- **Offensive.** Multiattack = 15 + 15 + 23 = 53. Pyre of the Whispered One at 34 against two targets = 68, expected roughly 1.5 times across three rounds → ~34/round. One legendary Claw per round ≈ 23. Total ≈ **110/round**, which is the CR 17 row (105–110). Attack +12 against the row's +10 shifts up half a step → **CR 17–18 offensive**.
- **Verdict: CR 17**, running slightly hot on attack bonus. That's deliberate and not an error — the block's job is to be unmistakably out of reach, and a +12 that hits the party's AC most of the time communicates that faster than any amount of hit points.

**Solo action economy** is handled with 3 legendary actions and 3 legendary resistances rather than minions, because in the scene he's written for he *has* minions — the entire Foundry fight is his action economy, and he leaves it behind for the party while he walks.

**His Barovia-era stat block**, for reference or flashback: Medium humanoid, AC 14 (studded leather), HP 112 (15d8 + 45), speed 30 ft., STR 18 DEX 15 CON 16 INT 10 WIS 9 CHA 15, Intimidation +8, Perception +2, passive Perception 12, CR 5. *Brute.* Multiattack: two battleaxe attacks, +7 to hit, 13 (2d8 + 4) slashing, or 15 (2d10 + 4) two-handed. *Hurl Flame:* ranged spell attack +5, range 60 ft., 10 (3d6) fire. Source: CoS p. 232.

**Design intent on the sadness.** He is lucid and uncoerced, which is what makes him work. The temptation is to write him as a tragic puppet; resist it. He weighed a debt against people he liked, and the debt won, and he knows exactly what that makes him. Play him quiet, brief, and a little embarrassed — never anguished. The anguish belongs to the players.
