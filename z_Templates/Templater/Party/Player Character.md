<%*
class DnDBeyondCharacter {

  static ABILITY_SCORES = {
    1: 'strength',
    2: 'dexterity',
    3: 'constitution',
    4: 'intelligence',
    5: 'wisdom',
    6: 'charisma'
  }

  static ALIGNMENT = {
    1: 'Lawful Good',
    2: 'Neutral Good',
    3: 'Chaotic Good',
    4: 'Lawful Neutral',
    5: 'True Neutral',
    6: 'Chaotic Neutral',
    7: 'Lawful Evil',
    8: 'Neutral Evil',
    9: 'Chaotic Evil'
  }

  static PROFICIENCY_BONUS = {
    1: 2,
    2: 2,
    3: 2,
    4: 2,
    5: 3,
    6: 3,
    7: 3,
    8: 3,
    9: 4,
    10: 4,
    11: 4,
    12: 4,
    13: 5,
    14: 5,
    15: 5,
    16: 5,
    17: 6,
    18: 6,
    19: 6,
    20: 6
  }

  static SKILLS = {
    'acrobatics': 'dexterity',
    'animal-handling': 'wisdom',
    'arcana': 'intelligence',
    'athletics': 'strength',
    'deception': 'charisma',
    'history': 'intelligence',
    'insight': 'wisdom',
    'intimidation': 'charisma',
    'investigation': 'intelligence',
    'medicine': 'wisdom',
    'nature': 'intelligence',
    'perception': 'wisdom',
    'performance': 'charisma',
    'persuasion': 'charisma',
    'religion': 'intelligence',
    'sleight-of-hand': 'dexterity',
    'stealth': 'dexterity',
    'survival': 'wisdom'
  }

  #id;

  #data;

  constructor(id) {
    this.#id = id
    Object.defineProperties(this, {
      modifiers: {
        get: () => Object.entries(this.#data.modifiers).reduce((accum, [key, value]) => {
          const activeFormattedMods = value.filter(mod => {
            if (key === 'item') {
              return this.#data.inventory.some(inv => inv.definition.id === mod.componentId && this.#isItemActive(inv))
            } else {
              return true
            }
          })
          .map(mod => ({
            entityId: mod.entityId,
            modType: key,
            type: mod.type,
            subType: mod.subType,
            value: mod.value,
            componentId: mod.componentId,
            statId: mod.statId,
            friendlyTypeName: mod.friendlyTypeName,
            friendlySubtypeName: mod.friendlySubtypeName,
            restriction: mod.restriction
          }))
          
          return accum.concat(activeFormattedMods)
        }, [])
      },
      url: {
        get: () => this.#data.readonlyUrl,
        enumerable: true
      },
      image: {
        get: () => this.#data.decorations.avatarUrl,
        enumerable: true
      },
      name: {
        get: () => this.#data.name,
        enumerable: true
      },
      race: {
        get: () => ({
          name: this.#data.race.baseName,
          sub: this.#data.race.subRaceShortName,
          fullName: this.#data.race.fullName
        }),
        enumerable: true
      },
      description: {
        get: () => ({
          gender: this.#data.gender,
          age: this.#data.age,
          hair: this.#data.hair,
          eyes: this.#data.eyes,
          skin: this.#data.skin,
          height: this.#data.height,
          weight: this.#data.weight
        }),
        enumerable: true
      },
      proficiencies: {
        get: () => ({
          armor: [...new Set(this.modifiers.filter(mod => mod.type === 'proficiency' && (mod.subType.endsWith('armor') || mod.subType.includes('shield'))).map(mod => mod.friendlySubtypeName))],
          weapons: [...new Set(this.modifiers.filter(mod => mod.type === 'proficiency' && mod.subType.includes('weapon')).map(mod => mod.friendlySubtypeName))],
          tools: [...new Set(this.modifiers.filter(mod => mod.type === 'proficiency' && mod.subType.includes('tool')).map(mod => mod.friendlySubtypeName))],
          languages: [...new Set(this.modifiers.filter(mod => mod.type === 'language').map(mod => mod.friendlySubtypeName))],
        }),
        enumerable: true
      },
      level: {
        get: () => this.classes.reduce((accum, dndClass) => accum + dndClass.level, 0),
        enumerable: true
      },
      hp: {
        get: () => {
          const hpBonus = this.modifiers.find(mod => mod.subType === 'hit-points-per-level')
          const maxHp = Math.floor(this.#data.baseHitPoints + (this.level * this.abilityScores.constitution.modifier)) + (hpBonus ? hpBonus.value * this.level : 0)

          return {
            max: maxHp,
            current: maxHp + this.#data.temporaryHitPoints - this.#data.removedHitPoints,
            temporary: this.#data.temporaryHitPoints
          }
        },
        enumerable: true
      },
      armorClass: {
        get: () => {
          const isArmored = this.#data.inventory.some(inv =>
            inv.definition.filterType === 'Armor' &&
            inv.definition.armorTypeId !== 4 &&
            inv.equipped)
          const baseAc = () => {
            const setBaseArmor = this.modifiers.find(mod => mod.type === 'set' && mod.subType === 'minimum-base-armor')
            if (!isArmored) {
              return setBaseArmor ? setBaseArmor[0].value : 10
            } else {
              return 0
            }
          }
          const unArmoredAc = () => {
            const ignoreDex = this.modifiers.some(mod => mod.type === 'ignore' && mod.subType === 'unarmored-dex-ac-bonus')
            const maxUnamoredDexMods = this.modifiers.filter(mod => mod.type === 'set' && mod.subType === 'ac-max-dex-modifier')
            const unArmoredAc = this.modifiers.find(mod => mod.type === 'set' && mod.subType === 'unarmored-armor-class')
            const unArmoredBonus = this.modifiers.reduce((accum, mod) => accum + (mod.type === 'bonus' && mod.subType === 'unarmored-armor-class' ? mod.value : 0), 0)
            let ac = 0
            if (!isArmored) {
              ac += !ignoreDex ? Math.min(...maxUnamoredDexMods, this.abilityScores.dexterity.modifier) : 0
              ac += unArmoredAc ? (unArmoredAc.value || this.abilityScores[DnDBeyondCharacter.ABILITY_SCORES[unArmoredAc.statId]].modifier) : 0
              ac += unArmoredBonus
            }
            return ac
          }
          const armoredAc = () => {
            const useProficiencyBonus = this.#data.inventory.some(inv => this.#isItemActive(inv) && inv.definition.armorTypeId === 3)
            const useDexterityModifier = this.#data.inventory.some(inv => this.#isItemActive(inv) && ![3,4].includes(inv.definition.armorTypeId))
            let ac = 0
            if (isArmored) {
              ac += this.#data.inventory.filter(inv => this.#isItemActive(inv)).reduce((accum,inv) => accum + (inv.definition.armorClass || 0), 0)
              ac += this.modifiers.reduce((accum, mod) => accum + (mod.type === 'bonus' && mod.subType === 'armored-armor-class' ? mod.value : 0), 0)
              if (useProficiencyBonus) {
                ac += this.proficiencyBonus
              } else if (useDexterityModifier) {
                ac += this.abilityScores.dexterity.modifier
              }
            }
            return ac
          }
          const acBonus = () => {
            return this.modifiers.reduce((accum, mod) => accum + (mod.type === 'bonus' && mod.subType === 'armor-class' ? mod.value : 0), 0)
          }

          return baseAc() + unArmoredAc() + armoredAc() + acBonus()
        },
        enumerable: true
      },
      size: {
        get: () => {
          let size = ''
          const sizeTrait = this.#data.race.racialTraits.find(trait => /Your size is/.test(trait.definition.description))
          if (sizeTrait) {
            size = sizeTrait.definition.description.match(/Your size is (\w+)/)[1]
          }
          return size
        },
        enumerable: true
      },
      speeds: {
        get: () => this.#data.race.weightSpeeds.normal,
        enumerable: true
      },
      defenses: {
        get: () => ({
          immunities: this.modifiers.filter(mod => mod.type === 'immunity').map(mod => mod.subType),
          resistances: this.modifiers.filter(mod => mod.type === 'resistance').map(mod => mod.subType)
        }),
        enumerable: true
      },
      initiative: {
        get: () => {
          const initiativeBonus = this.modifiers.reduce((accum, mod) => {
            if (mod.type === 'bonus' && mod.subType === 'initiative') {
              accum += this.abilityScores[DnDBeyondCharacter.ABILITY_SCORES[mod.statId]].modifier
            }

            return accum
          }, 0)
          return this.abilityScores.dexterity.modifier + initiativeBonus
        },
        enumerable: true
      },
      alignment: {
        get: () => DnDBeyondCharacter.ALIGNMENT[this.#data.alignmentId],
        enumerable: true
      },
      background: {
        get: () => ({
          background: {
            name: this.#data.background.definition.name,
            description: this.#data.background.definition.shortDescription
          },
          backstory: this.#data.notes.backstory,
          organizations: this.#data.notes.organizations,
          allies: this.#data.notes.allies,
          enemies: this.#data.notes.enemies,
          notes: this.#data.notes.otherNotes
        }),
        enumerable: true
      },
      proficiencyBonus: {
        get: () => DnDBeyondCharacter.PROFICIENCY_BONUS[this.level],
        enumerable: true
      },
      classes: {
        get: () => this.#data.classes.map(dndClass => ({
          name: dndClass.definition.name,
          subClass: dndClass.subclassDefinition.name,
          level: dndClass.level
        })),
        enumerable: true
      },
      abilityScores: {
        get: () => {
          return Object.entries(DnDBeyondCharacter.ABILITY_SCORES).reduce((accum, [key, value]) => {
            const statId = parseInt(key)
            const statValue = this.#data.stats.filter(s => s.id === statId)
            const bonusStat = this.#data.bonusStats.filter(s => s.id === statId)
            const modifiers = this.modifiers.filter(mod => mod.type === 'bonus' && mod.entityId === statId)
            const abilityScoreIncreases = this.modifiers.reduce((accum, mod) => {
              if (mod.type === 'bonus' && mod.subType === 'choose-an-ability-score') {
                accum.push(Object.values(this.#data.modifiers).flat().find(mod2 =>
                  mod2.type === 'bonus' &&
                  mod2.entityId === statId &&
                  !mod2.isGranted &&
                  mod2.componentId === mod.componentId))
              }

              return accum
            }, [])
            accum[value] = {
              value: [statValue, bonusStat, modifiers, abilityScoreIncreases].flat().reduce((accum, statObject) => {
                if (statObject && statObject.value) {
                  accum += statObject.value
                }
    
                return accum
              }, 0),
              modifier: 0
            }
            accum[value].modifier = Math.floor((accum[value].value - 10)/2)

            return accum
          }, {})
        },
        enumerable: true
      },
      savingThrows: {
        get: () => {
          let savingThrows = Object.entries(DnDBeyondCharacter.ABILITY_SCORES).reduce((accum, [key, value]) => {
            accum[value] = {
              value: 0,
              baseValue: this.abilityScores[value].modifier,
              proficiency: this.modifiers.some(mod => mod.type === 'proficiency' && (mod.subType === `${value}-saving-throws`)),
            }
            accum[value].value = accum[value].proficiency ? accum[value].baseValue + this.proficiencyBonus : accum[value].baseValue
            accum[value].value += this.modifiers.reduce((accum, mod) => accum + (mod.type === 'bonus' && mod.subType === 'saving-throws' ? mod.value : 0), 0)

            return accum
          }, {})
          savingThrows.notes = this.modifiers.reduce((accum, mod) => {
            if (mod.subType === 'saving-throws' && ['advantage', 'disadvantage'].includes(mod.type)) {
              accum.push(`${mod.friendlyTypeName} ${mod.restriction}`)
            }

            return accum
          }, [])

          return savingThrows
        },
        enumerable: true
      },
      skills: {
        get: () => {
          return Object.entries(DnDBeyondCharacter.SKILLS).reduce((accum, [key, value]) => {
            accum[key] = {
              value: 0,
              baseValue: this.abilityScores[value].modifier,
              proficiency: this.modifiers.some(mod => mod.type === 'proficiency' && mod.subType === key),
              expertise: this.modifiers.some(mod => mod.type === 'expertise' && mod.subType === key),
              disadvantage: this.modifiers.some(mod => mod.type === 'disadvantage' && mod.subType === key),
              advantage: this.modifiers.some(mod => mod.type === 'advantage' && mod.subType === key)
            }

            accum[key].value = accum[key].baseValue
            if (accum[key].expertise) {
              accum[key].value += (2 * this.proficiencyBonus)
            } else if (accum[key].proficiency) {
              accum[key].value += this.proficiencyBonus
            }

            return accum
          }, {})
        },
        enumerable: true
      },
      racialTraits: {
        get: () => this.#data.race.racialTraits.filter(trait => 
            trait.definition.snippet
          ).map(trait => ({
            name: trait.definition.name,
            description: this.#sanitizeText(trait.definition.snippet)
          })),
        enumerable: true
      },
      classFeatures: {
        get: () => this.#data.classes.map(dndClass => dndClass.classFeatures.filter(feature =>
            this.level >= feature.definition.requiredLevel && feature.definition.snippet
          ).map(feature => ({
            name: feature.definition.name,
            description: this.#sanitizeClassFeatureText(feature.definition.snippet, dndClass)
          }))).flat(),
        enumerable: true
      },
      feats: {
        get: () => this.#data.feats.map(feat => ({
          name: feat.definition.name,
          description: this.#sanitizeText(feat.definition.snippet)
        })),
        enumerable: true
      },
      spells: {
        get: () => {
          const classSpells = this.#data.classes.filter(dndClass => dndClass.definition.canCastSpells)
            .map(dndClass => ({
              name: dndClass.definition.name,
              cantripsKnown: dndClass.definition.spellRules.levelCantripsKnownMaxes[this.level],
              spellSlots: {
                max: dndClass.definition.spellRules.levelSpellSlots[this.level],
                used: this.#data.spellSlots.sort((a, b) => a - b).map(slot => slot.used)
              },
              spells: this.#data.classSpells.find(spellClass => spellClass.characterClassId === dndClass.id ).spells.map(spell => {
                let isPrepared = spell.prepared || spell.alwaysPrepared
                if (!isPrepared && spell.definition.level === 0) isPrepared = true
                
                return {
                  name: spell.definition.name,
                  level: spell.definition.level,
                  isPrepared
                }
              }).sort((a, b) => a.level - b.level)
            }))
          const raceSpells = this.#data.spells.race.map(raceSpell => {
            let isPrepared = raceSpell.prepared || raceSpell.alwaysPrepared
            if (!isPrepared && raceSpell.definition.level === 0) isPrepared = true

            return {
              name: raceSpell.definition.name,
              level: raceSpell.definition.level,
              isPrepared
            }
          }).sort((a, b) => a.level - b.level)

          return {race: raceSpells, class: classSpells}
        },
        enumerable: true
      },
      currencies: {
        get: () => this.#data.currencies,
        enumerable: true
      },
      inventory: {
        get: () => {
          return this.#data.inventory.map(inv => ({
            name: inv.definition.name,
            type: inv.definition.filterType,
            quantity: inv.quantity,
            equipped: inv.equipped,
            isAttuned: inv.isAttuned
          }))
        },
        enumerable: true
      }
    })

  }

  async initialize() {
    return requestUrl({
        url: `https://character-service.dndbeyond.com/character/v5/character/${this.#id}`
      })
      .then(response => {
        console.log(response.json.data)
        this.#data = response.json.data
      })
      .catch(error => console.error('HEY', error))
  }

  #isItemActive(item) {
    let isActive = false
    if (item.definition) {
      isActive = (item.definition.canEquip ? item.equipped : true) && (item.definition.canAttune ? item.isAttuned : true)
    } else {
      isActive = (item.canEquip ? item.equipped : true) && (item.canAttune ? item.isAttuned : true)
    }

    return isActive
  }

  #sanitizeClassFeatureText(text, dndClass) {
    return this.#sanitizeText(text)
      .replace('{{classlevel}}', dndClass.level)
  }

  #sanitizeText(text) {
    const getAbilityScoreObject = (ability) => this.abilityScores[Object.values(DnDBeyondCharacter.ABILITY_SCORES).find(score => score.startsWith(ability))]

    return text
      .replace(/\{\{spellattack:(\w{3})\}\}/, (match, ability) => (this.proficiencyBonus + getAbilityScoreObject(ability).modifier).toString())
      .replace(/\{\{savedc:(\w{3})\}\}/, (match, ability) => (8 + this.proficiencyBonus + getAbilityScoreObject(ability).modifier).toString())
      .replace(/\{\{modifier:(\w{3})\}\}/, (match, ability) => (getAbilityScoreObject(ability).modifier).toString())
      .replace(/\{\{modifier:(\w{3}):([\-\+])(\d+).*\}\}/, (match, ability, operator, number) => {
        const abilityScoreModifier = getAbilityScoreObject(ability).modifier
        let total = abilityScoreModifier

        switch (operator) {
          case '-':
            total -= parseInt(number)
            break;
        
          case '+':
            total += parseInt(number)
            break;
        }
        
        return total.toString()
      })
  }
}

const dv = app.plugins.getPlugin("dataview").api

await tp.file.move('3. The Party/Players/' + tp.file.title)
if (tp.config.run_mode === 0) {
    let title = await tp.system.prompt("What is the name of the character?")
    await tp.file.rename(title)
}

let images = tp.user.get_all_files(app.vault.adapter.getBasePath(), "z_Assets")
let selectedImage = await tp.system.suggester(images.map(i => i.name), images.map(i => i.path), false, "What image to use?")
if (!selectedImage) selectedImage = "z_Assets/PlaceholderImage.png"

let parties = dv.pages('"3. The Party/Parties"')
let selectedParty = await tp.system.suggester(parties.map(p => p.file.name), parties.map(p => [p.file.path, p.file.name]), false, "What party is the character a part of?")

let dndBeyondInfo = await tp.system.prompt("Paste D&D Beyond character url or id here or press Enter to skip.")
if (dndBeyondInfo) {
  let dndBeyondId
  if (isNaN(dndBeyondInfo)) {
    dndBeyondId = dndBeyondInfo.match(/\d+$/)[0]
  } else {
    dndBeyondId = dndBeyondInfo
  }
  const character = new DnDBeyondCharacter(dndBeyondId)
  await character.initialize()
  console.log(character)
}

-%>
---
obsidianUIMode: preview
statblock: true
level: 1
race:
class:
hp: 1
stats:
  str: 10
  dex: 10
  con: 10
  int: 10
  wis: 10
  cha: 10
ac: 10
modifier:
alignment: 
ideal: 
bond: 
flaw: 
likes: 
dislikes: 
party: "[[<% selectedParty.join('|') %>]]"
image: <% selectedImage %>
condition:
location:
---
> [!infobox|right]
> # `=this.file.name`
> ```meta-bind
> INPUT[imageSuggester(optionQuery("z_Assets")):image]
> ```
> ## Info
> | | |
> | ---- | ---- |
> | Level | `INPUT[inlineSelect(option(1),option(2),option(3),option(4),option(5),option(6),option(7),option(8),option(9),option(10),option(11),option(12),option(13),option(14),option(15),option(16),option(17),option(18),option(19),option(20)):level]` |
> | Class | `INPUT[suggester(optionQuery("5. Mechanics/Classes")):class]` |
> | Race | `INPUT[suggester(optionQuery("5. Mechanics/Races")):race]` |
> | HP | `INPUT[number:hp]` |
> | AC | `INPUT[number:ac]` |
> | Initiative Mod | `INPUT[number:modifier]` |
> ## Stats
> | | | |
> | ---- | ---- | ---- |
> | Strength | `INPUT[number:stats.str]` | `$=Math.floor((parseInt(dv.current().stats.str)-10)/2)` |
> | Dexterity | `INPUT[number:stats.dex]` | `$=Math.floor((parseInt(dv.current().stats.dex)-10)/2)` |
> | Constitution | `INPUT[number:stats.con]` | `$=Math.floor((parseInt(dv.current().stats.con)-10)/2)` |
> | Intelligence | `INPUT[number:stats.int]` | `$=Math.floor((parseInt(dv.current().stats.int)-10)/2)` |
> | Wisdom | `INPUT[number:stats.wis]` | `$=Math.floor((parseInt(dv.current().stats.wis)-10)/2)` |
> | Charisma | `INPUT[number:stats.cha]` | `$=Math.floor((parseInt(dv.current().stats.cha)-10)/2)` |
# DnD Beyond Character Sheet
```custom-frames
frame: 
```

# Personality
## Loves

## Hates

# Goals
## Short-term

## Long-term

# History
## Backstory

## Religion

## Enemies

## Allies

# DM Notes
## Additional Notes From Players 

## Hidden Details

## Notes
