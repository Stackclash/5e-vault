---
obsidianUIMode: preview
statblock: inline
tags:
  - npc
  - compendium/src/5e/cos
  - monster/cr/7
  - monster/size/medium
  - monster/type/undead
location: null
condition: healthy
images:
  - 4. World Almanac\NPCs\img\vladimir-horngaard.webp
relationships: []
aliases:
  - Vladimir Horngaard
pronounced: null
race: null
gender: null
age: null
alignment: Lawful Evil
occupation: []
groups: []
religions: []
personality: null
ideal: Vengeance is all I have left.
bond: >-
  I have sworn oaths of allegiance to the Order of the Silver Dragon. Broken
  though the order may be, my allegiance never dies.
flaw: >-
  Destroying Strahd would end the vampire's torment, and that is something I
  will never allow.
goals: null
likes: null
dislikes: null
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
*Source: Curse of Strahd p. 241*

Vladimir Horngaard joined the Order of the Silver Dragon at a young age and quickly earned the friendship of its founder, the silver dragon Argynvost. When he became a knight of the order, he traveled to distant lands to wage war against the forces of evil. The dragon stayed home and, in the guise of a human noble named Lord Argynvost, brought new initiates into the order.

## Enemies of Strahd

Vladimir found himself fighting Strahd's armies time and again as they swept across the land. When it became clear that Strahd couldn't be stopped, the knights of the order led hundreds of refugees to Argynvost's valley, but Strahd tracked them to their sanctuary and overwhelmed them with a vast force. Vladimir, whom Argynvost had made a field commander, couldn't hold back the evil tide and was killed, only after the heartbreak of witnessing Strahd himself slay Vladimir's beloved, his fellow knight Sir Godfrey Gwilym. With the battle won, Strahd surrounded Argynvostholt. Rather than cower in his lair, Argynvost emerged and battled Strahd's armies to the bitter end.

## Deadly Vengeance

Unwilling to accept his failure, Vladimir returned as a revenant. So great was his hatred of Strahd and his thirst for vengeance that those feelings fueled the spirits of many of his fellow knights - including Godfrey - to come back as revenants as well. Vladimir continued to wage the hopeless war, even as Strahd tightened his grip on the valley.

When Strahd became a vampire, Vladimir and his revenants should have gone to their eternal rest. But Strahd's deeds were so heinous that Barovia and the knight's spirits became trapped behind curtains of mist.

### Blinded by Hatred

 Vladimir hates Strahd but doesn't want to see the vampire given his final rest. Vladimir wants Strahd to suffer forever for the deaths of Godfrey and Argynvost, the destruction of their order, and all the other crimes of which the vampire is guilty. Vladimir believes that all of Barovia has been swept into hell, and he wants to make sure that Strahd stays trapped in it forever. It angers Vladimir that he and his fellow knights are also trapped, but in Vladimir's mind, such is the price of keeping the vampire confined. Even his love for Godfrey is now just a dim memory shrouded by his hate.

Were Vladimir to let go of his hatred, his spirit would find peace and could remember the warmth of love. Were Strahd to be defeated, even temporarily, the mists surrounding Barovia would fade, allowing the spirits of Vladimir and his knights to enter the afterlife. Nevertheless, Vladimir would rather savor Strahd's torment than bring peace to his fallen order or peace to the land of Barovia. Gone are the days of honor and valor.

## Statistics

Vladimir Horngaard has the statistics of a revenant with the following modifications:

- Vladimir's alignment is lawful evil.  
- His Armor Class is 17 (half plate).  
- He has 192 hit points.  
- He speaks Common and Draconic.  
- Vladimir wields a +2 greatsword with a hilt sculpted to resemble silver dragon wings and a pommel shaped like a silver dragon's head clutching a black opal between its teeth. As an action, he can make two attacks with the sword (+9 to hit). It deals `dice:4d6+6|noform|noparens|avg|text(20)` (`4d6 + 6`) slashing damage on a hit. Against Strahd, Vladimir deals an extra `dice:4d6|noform|noparens|avg|text(14)` (`4d6`) slashing damage with the weapon.  
- Vladimir has a challenge rating of 7 (2,900 XP).  

## Vladimir Horngaard's Traits

### Ideal

"Vengeance is all I have left."

### Bond

"I have sworn oaths of allegiance to the Order of the Silver Dragon. Broken though the order may be, my allegiance never dies."

### Flaw

"Destroying Strahd would end the vampire's torment, and that is something I will never allow."

## Revenant

A revenant forms from the soul of a mortal who met a cruel and undeserving fate. It claws its way back into the world to seek revenge against the one who wronged it. The revenant reclaims its mortal body and superficially resembles a zombie. However, instead of lifeless eyes, a revenant's eyes burn with resolve and flare in the presence of its adversary. If the revenant's original body was destroyed or is otherwise unavailable, the spirit of the revenant enters another humanoid corpse. Regardless of the body the revenant uses as a vessel, its adversary always recognizes the revenant for what it truly is.

### Hunger for Revenge

A revenant has only one year to exact revenge. When its adversary dies, or if the revenant fails to kill its adversary before its time runs out, it crumbles to dust and its soul fades into the afterlife. If its foe is too powerful for the revenant to destroy on its own, it seeks worthy allies to help it fulfill its quest.

### Divine Justice

No magic can hide a creature pursued by a revenant, which always knows the direction and distance between it and the target of its vengeance. In cases where the revenant seeks revenge against more than one adversary, it pursues them one at a time, starting with the creature that dealt it the killing blow. If the revenant's body is destroyed, its soul flies forth to seek out a new corpse in which to resume its hunt.

### Undead Nature

A revenant doesn't require air, food, drink, or sleep.

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
"name": "Vladimir Horngaard (COS)"
"size": "Medium"
"type": "undead"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "[[5. Mechanics/Items/Half Plate Armor.md|half plate armor]]"
"hp": !!int "192"
"hit_dice": "16d8 + 64"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "strength": "+7"
  - "constitution": "+7"
  - "wisdom": "+6"
  - "charisma": "+7"
"damage_resistances": "necrotic, psychic"
"damage_immunities": "poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Charmed|charmed]], [[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Stunned|stunned]]"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic"
"cr": "7"
"traits":
  - "desc": "Vladimir regains 10 hit points at the start of his turn. If he takes\
      \ fire or radiant damage, this trait doesn't function at the start of his next\
      \ turn. Vladimir's body is destroyed only if he starts his turn with 0 hit points\
      \ and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "When Vladimir's body is destroyed, his soul lingers. After 24 hours,\
      \ the soul inhabits and animates another corpse on the same plane of existence\
      \ and regains all its hit points. While the soul is bodiless, a [[5. Mechanics/Spells/Wish.md|wish]]\
      \ spell can be used to force the soul to go to the afterlife and not return."
    "name": "Rejuvenation"
  - "desc": "Vladimir wields a [[5. Mechanics/Items/2 Weapon.md|+2 greatsword]] with\
      \ a hilt sculpted to resemble silver dragon wings and a pommel shaped like a\
      \ silver dragon's head clutching a black opal between its teeth. "
    "name": "Special Equipment"
  - "desc": "Vladimir is immune to effects that turn undead."
    "name": "Turn Immunity"
  - "desc": "Vladimir knows the distance to and direction of Strahd, even if Strahd\
      \ and Vladimir are on different planes of existence. If Strahd is destroyed,\
      \ Vladimir knows."
    "name": "Vengeful Tracker"
"actions":
  - "desc": "Vladimir makes two fist attacks or two attacks with his +2 Greatsword."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) bludgeoning damage. Strahd, the target of Vladimir's sworn vengeance,\
      \ takes an extra 14 (4d6) bludgeoning damage. Instead of dealing damage, Vladimir\
      \ can grapple the target (escape DC 14) provided the target is Large or smaller."
    "name": "Fist"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 20\
      \ (4d6 + 6) slashing damage. Against Strahd, Vladimir deals an extra 14 (4d6)\
      \ slashing damage with this weapon."
    "name": "Greatsword +2"
  - "desc": "Vladimir can target Strahd within 30 feet provided he can see Strahd.\
      \ Strahd must make a DC 15 Wisdom saving throw. On a failure, Strahd is [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]]\
      \ until Vladimir deals damage to him, or until the end of Vladimir's next turn.\
      \ When the paralysis ends, Strahd is [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ of Vladimir for 1 minute. Strahd can repeat the saving throw at the end of\
      \ each of his turns, with disadvantage if he can see Vladimir, ending the [[/5. Mechanics/Rules/Conditions.md#Frightened|frightened]]\
      \ condition on itself on a success."
    "name": "Vengeful Glare"
"source":
  - "CoS"
"image": "4. World Almanac/NPCs/token/vladimir-horngaard-cos.webp"
```
^statblock

## History
TBD

## DM Notes
### Plot Hooks


### Hidden Details


### General Notes
