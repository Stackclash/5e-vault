---
obsidianUIMode: preview
statblock: true
active: true
name: Wisp
level: 10
ac: 14
hp: 42
modifier: 4
proficiency: 4
url: https://dndbeyond.com/characters/28108973
image: https://www.dndbeyond.com/avatars/54009/264/1581111423-28108973.jpeg?width=150&height=150&fit=crop&quality=95&auto=webp
race: Awakened Cat
alignment: character.alignment
description:
  gender: Male
  age: 5
  hair: "Dark Grey "
  eyes: Green Eyes
  skin: ""
  height: ""
  weight: 8
  size: ""
passives:
  perception: 12
  investigation: 18
  insight: 12
proficiencies:
  armor: []
  weapons: []
  tools: []
  languages:
    - Gnomish
    - Elvish
    - Dwarvish
    - Celestial
    - Goblin
speed: 35
defences:
  immunities: []
  resistances: []
background:
  background:
    name: Sage
    description: <p>You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.</p>
  backstory: "\n"
  organizations:
  allies: ""
  enemies:
  notes: "\n"
classes:
  - name: "[[5. Mechanics/Classes/Wizard.md|Wizard]]"
    subClass: "[[5. Mechanics/Classes/Wizard School Of Illusion.md|Wizard School Of Illusion]]"
    level: 10
abilityScores:
  strength:
    value: 2
    modifier: -4
  dexterity:
    value: 18
    modifier: 4
  constitution:
    value: 10
    modifier: 0
  intelligence:
    value: 18
    modifier: 4
  wisdom:
    value: 14
    modifier: 2
  charisma:
    value: 12
    modifier: 1
savingThrows:
  strength:
    value: -4
    baseValue: -4
    proficiency: false
  dexterity:
    value: 4
    baseValue: 4
    proficiency: false
  constitution:
    value: 0
    baseValue: 0
    proficiency: false
  intelligence:
    value: 8
    baseValue: 4
    proficiency: true
  wisdom:
    value: 6
    baseValue: 2
    proficiency: true
  charisma:
    value: 1
    baseValue: 1
    proficiency: false
  notes: []
skills:
  acrobatics:
    value: 4
    baseValue: 4
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  animal-handling:
    value: 2
    baseValue: 2
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  arcana:
    value: 8
    baseValue: 4
    proficiency: true
    expertise: false
    disadvantage: false
    advantage: false
  athletics:
    value: -4
    baseValue: -4
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  deception:
    value: 5
    baseValue: 1
    proficiency: true
    expertise: false
    disadvantage: false
    advantage: false
  history:
    value: 8
    baseValue: 4
    proficiency: true
    expertise: false
    disadvantage: false
    advantage: false
  insight:
    value: 2
    baseValue: 2
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  intimidation:
    value: 1
    baseValue: 1
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  investigation:
    value: 8
    baseValue: 4
    proficiency: true
    expertise: false
    disadvantage: false
    advantage: true
  medicine:
    value: 2
    baseValue: 2
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  nature:
    value: 4
    baseValue: 4
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  perception:
    value: 2
    baseValue: 2
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  performance:
    value: 1
    baseValue: 1
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  persuasion:
    value: 1
    baseValue: 1
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  religion:
    value: 4
    baseValue: 4
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  sleight-of-hand:
    value: 4
    baseValue: 4
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  stealth:
    value: 4
    baseValue: 4
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
  survival:
    value: 2
    baseValue: 2
    proficiency: false
    expertise: false
    disadvantage: false
    advantage: false
racialTraits:
  - name: Awakened Cat Traits
    description: "Awakened cats are no different from their mundane house cat counterparts, the only difference is their human-level intelligence. Therefore they have all the traits and reflexes of a normal cat. "
  - name: "Creatures of Magic: "
    description: "An Awakened cat is a being created and sustained in part by a magic gem called a soulstone. "
classFeatures:
  - name: Illusion Savant
    description: The gold and time you must spend to copy an illusion spell into your spellbook is halved.
  - name: Improved Minor Illusion
    description: You learn the minor illusion cantrip. If you already know it, you learn a different cantrip of your choice. The cantrip doesn’t count against your number of cantrips known. When you cast minor illusion, you can create both a sound and an image with a single casting of the spell.
  - name: Malleable Illusions
    description: When you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell’s normal parameters for the illusion), provided that you can see the illusion.
  - name: Illusory Self
    description: Once per short rest, you can create an illusory duplicate of yourself. When a creature makes an attack roll against you, you can use your reaction to interpose the duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.
  - name: Spellcasting
    description: You can cast prepared wizard spells using INT as your spellcasting modifier (Spell DC 16, Spell Attack 8) and wizard spells in your spellbook as rituals if they have the ritual tag. You can use an arcane focus as a spellcasting focus.
  - name: Arcane Recovery
    description: Once per day when you finish a short rest, you can choose expended spell slots to recover - up to a combined level of {{(classlevel/2)@roundup}}, and none of the slots can be 6th level or higher.
feats:
  - name: Linguist
    description: Increase your INT score by 1. You learn three languages of your choice. You can create written ciphers that others can't decipher unless you teach them, they succeed on an INT check (DC {{proficiency+abilityscore:int}}), or they use magic to decipher it.
raceSpells: []
classSpells:
  - name: Wizard
    cantripsKnown: 5
    spellSlots:
      max:
        - 4
        - 3
        - 3
        - 3
        - 2
        - 0
        - 0
        - 0
        - 0
      used:
        - 0
        - 0
        - 2
        - 0
        - 1
        - 0
        - 0
        - 0
        - 0
    spells:
      - name: Mage Hand
        level: 0
        isPrepared: true
      - name: Prestidigitation
        level: 0
        isPrepared: true
      - name: Fire Bolt
        level: 0
        isPrepared: true
      - name: Message
        level: 0
        isPrepared: true
      - name: Dancing Lights
        level: 0
        isPrepared: true
      - name: Sleep
        level: 1
        isPrepared: false
      - name: Charm Person
        level: 1
        isPrepared: false
      - name: Comprehend Languages
        level: 1
        isPrepared: false
      - name: Detect Magic
        level: 1
        isPrepared: false
      - name: Mage Armor
        level: 1
        isPrepared: false
      - name: Shield
        level: 1
        isPrepared: true
      - name: Magic Missile
        level: 1
        isPrepared: true
      - name: Illusory Script
        level: 1
        isPrepared: false
      - name: Color Spray
        level: 1
        isPrepared: true
      - name: False Life
        level: 1
        isPrepared: false
      - name: Charm Person
        level: 1
        isPrepared: false
      - name: Alarm
        level: 1
        isPrepared: false
      - name: Feather Fall
        level: 1
        isPrepared: false
      - name: Identify
        level: 1
        isPrepared: false
      - name: Alter Self
        level: 2
        isPrepared: false
      - name: Blur
        level: 2
        isPrepared: false
      - name: Invisibility
        level: 2
        isPrepared: true
      - name: Magic Mouth
        level: 2
        isPrepared: false
      - name: Spider Climb
        level: 2
        isPrepared: false
      - name: Mirror Image
        level: 2
        isPrepared: true
      - name: Fireball
        level: 3
        isPrepared: true
      - name: Hypnotic Pattern
        level: 3
        isPrepared: true
      - name: Major Image
        level: 3
        isPrepared: true
      - name: Fear
        level: 3
        isPrepared: true
      - name: Dispel Magic
        level: 3
        isPrepared: true
      - name: Counterspell
        level: 3
        isPrepared: true
      - name: Phantasmal Killer
        level: 4
        isPrepared: false
      - name: Dimension Door
        level: 4
        isPrepared: true
      - name: Mislead
        level: 5
        isPrepared: true
      - name: Conjure Elemental
        level: 5
        isPrepared: true
      - name: Seeming
        level: 5
        isPrepared: false
currencies:
  cp: 0
  sp: 0
  gp: 10
  ep: 0
  pp: 0
inventory:
  - name: "[[5. Mechanics/Items/Amulet Of Health.md|Amulet Of Health]]"
    type: Wondrous item
    rarity: Rare
    quantity: 1
    canEquip: true
    equipped: true
    canAttune: true
    attuned: true
    damage: ""
    damageType: ""
    armorClass: ""
  - name: "[[5. Mechanics/Items/Eyes Of Minute Seeing.md|Eyes Of Minute Seeing]]"
    type: Wondrous item
    rarity: Uncommon
    quantity: 1
    canEquip: true
    equipped: true
    canAttune: false
    attuned: false
    damage: ""
    damageType: ""
    armorClass: ""
  - name: "[[5. Mechanics/Items/Book.md|Book]]"
    type: Other Gear
    rarity: Common
    quantity: 1
    canEquip: false
    equipped: false
    canAttune: false
    attuned: false
    damage: ""
    damageType: ""
    armorClass: ""
  - name: "[[5. Mechanics/Items/Ink 1 Ounce Bottle.md|Ink 1 Ounce Bottle]]"
    type: Other Gear
    rarity: Common
    quantity: 2
    canEquip: false
    equipped: false
    canAttune: false
    attuned: false
    damage: ""
    damageType: ""
    armorClass: ""
  - name: "[[5. Mechanics/Items/Ink Pen.md|Ink Pen]]"
    type: Other Gear
    rarity: Common
    quantity: 1
    canEquip: false
    equipped: false
    canAttune: false
    attuned: false
    damage: ""
    damageType: ""
    armorClass: ""
  - name: "[[5. Mechanics/Items/Parchment One Sh(EET).md|Parchment One Sh(EET)]]"
    type: Other Gear
    rarity: Common
    quantity: 10
    canEquip: false
    equipped: false
    canAttune: false
    attuned: false
    damage: ""
    damageType: ""
    armorClass: ""
  - name: "[[5. Mechanics/Items/Backpack.md|Backpack]]"
    type: Other Gear
    rarity: Common
    quantity: 1
    canEquip: true
    equipped: false
    canAttune: false
    attuned: false
    damage: ""
    damageType: ""
    armorClass: ""
  - name: "[[5. Mechanics/Items/Spellbook.md|Spellbook]]"
    type: Other Gear
    rarity: Common
    quantity: 1
    canEquip: false
    equipped: false
    canAttune: false
    attuned: false
    damage: ""
    damageType: ""
    armorClass: ""
  - name: "[[5. Mechanics/Items/Bag Of Beans.md|Bag Of Beans]]"
    type: Other Gear
    rarity: Common
    quantity: 1
    canEquip: false
    equipped: false
    canAttune: false
    attuned: false
    damage: ""
    damageType: ""
    armorClass: ""
  - name: "[[5. Mechanics/Items/Charming Knife (HHHVI).md|Charming Knife (HHHVI)]]"
    type: Other Gear
    rarity: Common
    quantity: 2
    canEquip: false
    equipped: false
    canAttune: false
    attuned: false
    damage: ""
    damageType: ""
    armorClass: ""
  - name: "[[5. Mechanics/Items/Arcane Foc(US).md|Arcane Foc(US)]]"
    type: Other Gear
    rarity: Common
    quantity: 1
    canEquip: false
    equipped: false
    canAttune: false
    attuned: false
    damage: ""
    damageType: ""
    armorClass: ""
condition: healthy
tags:
  - player
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
location: "[[4. World Almanac/Settlements/Bruokdon.md|Bruokdon]]"
---
`$="[![Char Image\|clear left circle hsmall wsmall lp](" + dv.current().image + ")](" + dv.current().url + ")"`
## `$=[dv.current().alignment, dv.current().race, dv.current().classes[0].name].join(' ')` `BUTTON[updateDnDBeyond]`
> [!div|no-t clean]
> `INPUT[text:tagline]`
```meta-bind-button
style: primary
label: Update From DnD Beyond
id: updateDnDBeyond
hidden: true
actions:
  - type: inlineJS
    code: |-
      const dndBeyondCharacter = await self.require.import('z_Scripts/Templater/dndBeyondCharacter.js')
      const activeFile = app.workspace.getActiveFile()
      const dndBeyondId = app.metadataCache.getFileCache(activeFile).frontmatter.url.match(/\d+$/)[0]
      const character = new dndBeyondCharacter(dndBeyondId)
      await character.initialize()
      const find_file = await self.require.import('z_Scripts/Templater/find_file.js')

      app.fileManager.processFrontMatter(activeFile, async (fm) => {
        fm.name = character.name
        fm.level = character.level
        fm.ac = character.armorClass
        fm.hp = character.healthPoints.current
        fm.modifier = character.initiative
        fm.proficiency = character.proficiencyBonus
        fm.url = character.url
        fm.image = character.image
        fm.race = `"${await find_file(character.race.fullName, '5. Mechanics/Races')}"`
        fm.alignment = `"${character.alignment}"`
        fm.description = character.description
        fm.passives = character.passives
        fm.proficiencies = character.proficiencies
        fm.speed = character.speeds.walk
        fm.defences = character.defences
        fm.background = character.background
        // FIXME: Classes is not updating
        fm.classes = await Promise.all(character.classes.map(async (characterClass) => {
          return {
            name: await find_file(characterClass.name, '5. Mechanics/Classes'),
            subClass: await find_file(characterClass.subClass, '5. Mechanics/Classes'),
            level: characterClass.level
          }
        }))
        fm.abilityScores = character.abilityScores
        fm.savingThrows = character.savingThrows
        fm.skills = character.skills
        fm.racialTraits = character.racialTraits
        fm.classFeatures = character.classFeatures
        fm.feats = character.feats
        fm.raceSpells = character.spells.race
        fm.classSpells = await Promise.all(character.spells.class.map(async (classSpell) => {
          return {
            name: await find_file(classSpell, '5. Mechanics/Spells'),
            level: classSpell.level,
            isPrepared: classSpell.isPrepared
          }
        }))
        fm.currencies = character.currencies
        fm.inventory = await Promise.all(character.inventory.map(async (inv) => {
          return {
            name: await find_file(inv.name, '5. Mechanics/Items'),
            type: inv.type,
            rarity: inv.rarity,
            quantity: inv.quantity,
            canEquip: inv.canEquip,
            equipped: inv.equipped,
            canAttune: inv.canAttune,
            attuned: inv.attuned,
            damage: inv.damage,
            damageType: inv.damageType,
            armorClass: inv.armorClass
          }
        }))
      })
```

> [!infobox|n-th center wm-tl]
> ### Status
> |||||||
> |:---:|:---:|:---:|:---:|:---:|:---:|
> | **Party** | `INPUT[suggester(optionQuery(#party)):party]` | **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` | **Location** | `INPUT[suggester(optionQuery(#location)):location]` |

> [!infobox|left clear n-th]
> 
> |||
> |:---:|:---:|
> | **Health Points** | `$=dv.current().hp` |
> | **Armor Class** | `$=dv.current().ac` |
> | **Initiative** | `$=dv.current().modifier` |
> | **Speed** | `$=dv.current().speed` |

> [!statblocks|columns]
> 
>> [!blank]
>> ## Ability Scores
>> ||| Mod ||| Mod |
>> |:---:|:---:|:---:|:---:|:---:|:---:|
>> | **Strength** | `$=dv.current().abilityScores.strength.value` | `$=dv.current().abilityScores.strength.modifier` | **Intelligence** | `$=dv.current().abilityScores.intelligence.value` | `$=dv.current().abilityScores.intelligence.modifier` |
>> | **Dexterity** | `$=dv.current().abilityScores.dexterity.value` | `$=dv.current().abilityScores.dexterity.modifier` | **Wisdom** | `$=dv.current().abilityScores.wisdom.value` | `$=dv.current().abilityScores.wisdom.modifier` |
>> | **Constitution** | `$=dv.current().abilityScores.constitution.value` | `$=dv.current().abilityScores.constitution.modifier` | **Charisma** | `$=dv.current().abilityScores.charisma.value` | `$=dv.current().abilityScores.charisma.modifier` |
>
>> [!blank]
>> ## Saving Throws
>> || Prof ||| Prof ||
>> |:---:|:---:|:---:|:---:|:---:|:---:|
>> | **Strength** | `$=dv.current().savingThrows.strength.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.strength.value` | **Intelligence** | `$=dv.current().savingThrows.intelligence.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.intelligence.value` |
>> | **Dexterity** | `$=dv.current().savingThrows.dexterity.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.dexterity.value` | **Wisdom** | `$=dv.current().savingThrows.wisdom.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.wisdom.value` |
>> | **Constitution** | `$=dv.current().savingThrows.constitution.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.constitution.value` | **Charisma** | `$=dv.current().savingThrows.charisma.proficiency ? '✅' : '❌'` | `$=dv.current().savingThrows.charisma.value` |
>> **Notes**: `$=dv.current().savingThrows.notes`

> [!infobox|wfull]
> ## Skills
> || **Prof** | **Exp** ||| **Prof** | **Exp** ||
> |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> | **Acrobatics (Dex)** | `$=dv.current().skills.acrobatics.proficiency ? '✅' : '❌'` | `$=dv.current().skills.acrobatics.expertise ? '✅' : '❌'` | `$=dv.current().skills.acrobatics.value` | **Medicine (Wis)** | `$=dv.current().skills.medicine.proficiency ? '✅' : '❌'` | `$=dv.current().skills.medicine.expertise ? '✅' : '❌'` | `$=dv.current().skills.medicine.value` |
> | **Animal Handling (Wis)** | `$=dv.current().skills['animal-handling'].proficiency ? '✅' : '❌'` | `$=dv.current().skills['animal-handling'].expertise ? '✅' : '❌'` | `$=dv.current().skills['animal-handling'].value` | **Nature (Int)** | `$=dv.current().skills.nature.proficiency ? '✅' : '❌'` | `$=dv.current().skills.nature.expertise ? '✅' : '❌'` | `$=dv.current().skills.nature.value` |
> | **Arcana (Int)** | `$=dv.current().skills.arcana.proficiency ? '✅' : '❌'` | `$=dv.current().skills.arcana.expertise ? '✅' : '❌'` | `$=dv.current().skills.arcana.value` | **Perception (Wis)** | `$=dv.current().skills.perception.proficiency ? '✅' : '❌'` | `$=dv.current().skills.perception.expertise ? '✅' : '❌'` | `$=dv.current().skills.perception.value` |
> | **Athletics (Str)** | `$=dv.current().skills.athletics.proficiency ? '✅' : '❌'` | `$=dv.current().skills.athletics.expertise ? '✅' : '❌'` | `$=dv.current().skills.athletics.value` | **Performance (Cha)** | `$=dv.current().skills.performance.proficiency ? '✅' : '❌'` | `$=dv.current().skills.performance.expertise ? '✅' : '❌'` | `$=dv.current().skills.performance.value` |
> | **Deception (Cha)** | `$=dv.current().skills.deception.proficiency ? '✅' : '❌'` | `$=dv.current().skills.deception.expertise ? '✅' : '❌'` | `$=dv.current().skills.deception.value` | **Persuasion (Cha)** | `$=dv.current().skills.persuasion.proficiency ? '✅' : '❌'` | `$=dv.current().skills.persuasion.expertise ? '✅' : '❌'` | `$=dv.current().skills.persuasion.value` |
> | **History (Int)** | `$=dv.current().skills.history.proficiency ? '✅' : '❌'` | `$=dv.current().skills.history.expertise ? '✅' : '❌'` | `$=dv.current().skills.history.value` | **Religion (Int)** | `$=dv.current().skills.religion.proficiency ? '✅' : '❌'` | `$=dv.current().skills.religion.expertise ? '✅' : '❌'` | `$=dv.current().skills.religion.value` |
> | **Insight (Wis)** | `$=dv.current().skills.insight.proficiency ? '✅' : '❌'` | `$=dv.current().skills.insight.expertise ? '✅' : '❌'` | `$=dv.current().skills.insight.value` | **Sleight of Hand (Dex)** | `$=dv.current().skills['sleight-of-hand'].proficiency ? '✅' : '❌'` | `$=dv.current().skills['sleight-of-hand'].expertise ? '✅' : '❌'` | `$=dv.current().skills['sleight-of-hand'].value` |
> | **Intimidation (Cha)** | `$=dv.current().skills.intimidation.proficiency ? '✅' : '❌'` | `$=dv.current().skills.intimidation.expertise ? '✅' : '❌'` | `$=dv.current().skills.intimidation.value` | **Stealth (Dex)** | `$=dv.current().skills.stealth.proficiency ? '✅' : '❌'` | `$=dv.current().skills.stealth.expertise ? '✅' : '❌'` | `$=dv.current().skills.stealth.value` |
> | **Investigation (Int)** | `$=dv.current().skills.investigation.proficiency ? '✅' : '❌'` | `$=dv.current().skills.investigation.expertise ? '✅' : '❌'` | `$=dv.current().skills.investigation.value` | **Survival (Wis)** | `$=dv.current().skills.survival.proficiency ? '✅' : '❌'` | `$=dv.current().skills.survival.expertise ? '✅' : '❌'` | `$=dv.current().skills.survival.value` |

> [!infobox|left n-th]
> ## Passive Skills
> |||
> |:---:|:---:|
> | **Perception** | `$=dv.current().passives.perception` |
> | **Investigation** | `$=dv.current().passives.investigation` |
> | **Insight** | `$=dv.current().passives.insight` |

> [!infobox|center n-th wm-tl]
> ## Description
> |||
> |:---:|:---:|:---:|:---:|:---:|:---:|
> | **Race** | `$=dv.current().race` | **Height** | `$=dv.current().description.height` | **Skin** | `$=dv.current().description.skin` |
> | **Gender** | `$=dv.current().description.gender` | **Weight** | `$=dv.current().description.weight` | **Hair** | `$=dv.current().description.hair` |
> | **Age** | `$=dv.current().description.age` | **Size** | `$=dv.current().description.size` | **Eyes** | `$=dv.current().description.eyes` |

> [!infobox|center wm-tl]
> ## Defences
> | **Imunities** | **Resistances** |
> |:---:|:---:|
> | `$=dv.current().defences.immunities.length > 0 ? dv.current().defences.immunities : ""` | `$=dv.current().defences.resistances.length > 0 ? dv.current().defences.resistances : ""` |

> [!cards|dataview wfull]
> ## Classes
> ```dataview
> TABLE WITHOUT ID "Class: " + classes.name AS Name, "SubClass: " + classes.subClass, "Level: " + classes.level AS Level
> FLATTEN classes
> WHERE this.file.name = file.name
> ```

> [!cards|dataview wfull]
> ## Racial Traits
> ```dataview
> TABLE WITHOUT ID "**"+racialTraits.name+"**" AS Name, racialTraits.description AS Description
> FLATTEN racialTraits
> WHERE this.file.name = file.name
> ```

> [!cards|dataview wfull]
> ## Class Features
> ```dataview
> TABLE WITHOUT ID "**"+classFeatures.name+"**",
> classFeatures.description
> FLATTEN classFeatures
> WHERE this.file.name = file.name
> ```

> [!cards|dataview wfull]
> ## Feats
> ```dataview
> TABLE WITHOUT ID "**"+feats.name+"**",
> feats.description
> FLATTEN feats
> WHERE this.file.name = file.name
> ```

## Spells
```dataviewjs
const result = []
const spellLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
dv.current().classSpells.map((classSpellConfig, classIndex) => {
  const classSpellLevels = spellLevels.filter(level => classSpellConfig.spellSlots.max[level-1] > 0 || level === 0)
  dv.header(3, classSpellConfig.name)
  classSpellLevels.forEach(level => {
    let levelText = ''
    levelText += `>> ### ${level === 0 ? `Cantrips` : `Level ${level}`}\n`
    if (level > 0) {
      const totalSlots = classSpellConfig.spellSlots.max[level-1]
      const usedSlots = classSpellConfig.spellSlots.used[level-1]
      levelText += `>> ${`<input type="checkbox" disabled=true checked=true/>`.repeat(usedSlots)}${`<input type="checkbox" disabled=true/>`.repeat(totalSlots-usedSlots)}\n>>\n`
    }
    levelText += `>> ${classSpellConfig.spells.filter(spell => spell.level === (level)).map(spell => spell.name).join(`\n>>\n>> `)}`
    result.push(levelText)
  })
})
dv.paragraph(`> [!cards|wfull]\n${result.join(`\n>\n`)}`)
```

## Weapons
```dataviewjs
const weapons = dv.current().inventory.filter(inv => inv.type === 'Weapon')

dv.table([
  'Name',
  'Equipped',
  'Attuned',
  'One Handed Damage',
  'Two Handed Damage',
  'Range',
  'Damage Type'
  ], weapons.map(inv => {
  return [
    inv.name,
    inv.equipped ? '✅' : '❌',
    inv.attuned ? '✅' : '❌',
    dv.page(inv.name.path)['one-hand-damage'],
    dv.page(inv.name.path)['two-hand-damage'],
    dv.page(inv.name.path).range,
    inv.damageType
  ]
}))
```

## Armor
```dataviewjs
const armor = dv.current().inventory.filter(inv => inv.type === 'Armor')

dv.table(['Name', 'Equipped', 'Attuned', 'Armor Class'], armor.map(inv => {
  return [
    inv.name,
    inv.equipped ? '✅' : '❌',
    inv.attuned ? '✅' : '❌',
    dv.page(inv.name.path).armorClass || inv.armorClass]
}))
```

<!-- Group by rarity? -->
> [!cards|dataview 4 wfull]
> ## Inventory
> ```dataview
> TABLE WITHOUT ID "**"+inventory.name+"**",
> "Quantity: "+inventory.quantity
> FLATTEN inventory
> WHERE this.file.name = file.name
> AND inventory.type != "Armor"
> AND inventory.type != "Weapon"
> ```

# Background
## Background (`$=dv.current().background.background.name`)
`$=dv.current().background.background.description`
## Backstory
`$=dv.current().background.backstory`
## Organization
`$=dv.current().background.organizations`
## Allies
`$=dv.current().background.allies`
## Enemies
`$=dv.current().background.enemies`

# Notes
## Additional Notes From Players
`$=dv.current().background.notes`

## Hidden Details

## Notes
