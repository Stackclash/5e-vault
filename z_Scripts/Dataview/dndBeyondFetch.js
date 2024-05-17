const util = require('util')
util.inspect.defaultOptions.getters = true
util.inspect.defaultOptions.depth = 20

const dndBeyondId = 29682199


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
        get: () => Object.entries(this.#data.modifiers).reduce((accum, [key, value]) => accum.concat(value), [])
      },
      url: {
        get: () => this.#data.readonlyUrl,
        enumerable: true
      },
      image: {
        get: () => this.#data.decorations.avatarUrl,
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
      gender: {
        get: () => this.#data.gender,
        enumerable: true
      },
      age: {
        get: () => this.#data.age,
        enumerable: true
      },
      level: {
        get: () => this.classes.reduce((accum, dndClass) => accum + dndClass.level, 0),
        enumerable: true
      },
      // Still needs farther calculation
      // Can't find extra modifiers
      hp: {
        get: () => ({
          baseValue: this.#data.baseHitPoints,
          current: this.#data.baseHitPoints + this.#data.temporaryHitPoints - this.#data.removedHitPoints,
          temporary: this.#data.temporaryHitPoints
        }),
        enumerable: true
      },
      // Still needs farther calculation
      // Can't find extra modifiers
      armorClass: {
        get: () => {
          const armorBase = this.#data.inventory.reduce((accum,inv) => accum + (inv.definition.armorClass || 0), 0)

          return {
            baseValue: (armorBase ? armorBase : 10) + this.abilityScores.dexterity.modifier
          }
        },
        enumerable: true
      },
      alignment: {
        get: () => DnDBeyondCharacter.ALIGNMENT[this.#data.alignmentId],
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
            accum[value] = {
              value: [statValue, bonusStat, modifiers].flat().reduce((accum, statObject) => {
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
      // Need to toggle adding modifiers when an item is removed
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
              advantage: this.modifiers.some(mod => mod.type === 'advantage' && mod.subType === key),
              notes: []
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
      spells: {
        get: () => this.#data.classSpells.reduce((accum, classSpells) => accum.concat(classSpells.spells), []).map(spell => ({ name: spell.definition.name, isPrepared: spell.prepared || spell.alwaysPrepared })),
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
    // const data = JSON.parse(await request(`https://character-service.dndbeyond.com/character/v5/character/${dndBeyondId}`)).data
    return fetch(`https://character-service.dndbeyond.com/character/v5/character/${this.#id}`)
      .then(response => {
        return response.json()
      })
      .then(({ data }) => {
        this.#data = data
      })
  }
}

const character = new DnDBeyondCharacter(dndBeyondId)

character.initialize()
.then(() => {
  console.log(character)
})
