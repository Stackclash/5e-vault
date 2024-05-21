const fs = require('fs')
const path = require('path')

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
          subRace: this.#data.race.subRaceShortName,
          fullName: this.#data.race.fullName
        }),
        enumerable: true
      },
      description: {
        get: () => {
          let size = ''
          const sizeTrait = this.#data.race.racialTraits.find(trait => /Your size is/.test(trait.definition.description))
          if (sizeTrait) {
            size = sizeTrait.definition.description.match(/Your size is (\w+)/)[1]
          }

          return {
            gender: this.#data.gender,
            age: this.#data.age,
            hair: this.#data.hair,
            eyes: this.#data.eyes,
            skin: this.#data.skin,
            height: this.#data.height,
            weight: this.#data.weight,
            size: size
          }
        },
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
      healthPoints: {
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
    return requestUrl(`https://character-service.dndbeyond.com/character/v5/character/${this.#id}`)
      .then(response => this.#data = response.json.data)
      .then(() => fs.writeFileSync(path.join(app.vault.adapter.getBasePath(), 'test.json'), JSON.stringify(this, null, 2)))
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
      .replace(/\s*(\r\n|\n|\r)\s*/gm, ' ')
  }
}

module.exports = DnDBeyondCharacter