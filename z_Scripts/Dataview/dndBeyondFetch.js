const fs = require('fs')
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
        get: () => Object.entries(this.#data.modifiers).reduce((accum, [key, value]) => {
          const activeFormattedMods = value.filter(mod => {
            if (mod.isGranted) {
              if (mod.modType === 'item') {
                return this.inventory.some(inv => inv.id === mod.componentId && this.#isItemActive(inv))
              } else {
                return true
              }
            } else {
              return false
            }
          })
          .map(mod => ({
            entityId: mod.entityId,
            modType: key,
            type: mod.type,
            subType: mod.subType,
            value: mod.value,
            componentId: mod.componentId,
            friendlyTypeName: mod.friendlyTypeName,
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
      size: {
        get: () => '',
        enumerable: true
      },
      speed: {
        get: () => '',
        enumerable: true
      },
      armorClass: {
        get: () => {
          let baseAc = () => {
            const setBaseArmor = this.modifiers.filter(mod => mod.type === 'set' && mod.subType === 'minimum-base-armor')
          }
          if (!baseAc) baseAc = 10
          const ignoreDex = this.modifiers.some(mod => mod.type === 'ignore' && mod.subType === 'unarmored-dex-ac-bonus')
          const maxUnamoredDexMods = this.modifiers.filter(mod => mod.type === 'set' && mod.subType === 'ac-max-dex-modifier')
            .map(mod => mod.value)
          const armorAc = this.inventory.filter(inv => this.#isItemActive(inv)).reduce((accum,inv) => accum + (inv.armorClass || 0), 0)
          const useProficiencyBonus = this.#data.inventory.some(inv => this.#isItemActive({
            equipped: inv.equipped,
            isAttuned: inv.isAttuned,
            canAttune: inv.definition.canAttune,
            canEquip: inv.definition.canEquip
          }) && inv.definition.armorTypeId === 3)
          const bonusAc = this.modifiers.reduce((accum, mod) => {
            let bonus = 0

            if ((mod.type === 'bonus' && mod.subType === 'armor-class') ||
                (!this.#isArmored() && mod.type === 'set' && mod.subType === 'unarmored-armor-class')) {
              bonus = mod.value
            }
            
            return accum + bonus
          }, 0)
          
          let acModifier = 0
          if (useProficiencyBonus) {
            acModifier = this.proficiencyBonus
          } else if (!ignoreDex) {
            Math.min(...maxUnamoredDexMods, this.abilityScores.dexterity.modifier)
          }
          console.log(Math.max(baseAc, armorAc), bonusAc, acModifier)

          return Math.max(baseAc, armorAc) + bonusAc + acModifier
        },
        enumerable: true
      },
      initiative: {
        get: () => this.abilityScores.dexterity.modifier,
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
      spells: {
        get: () => this.#data.classSpells.reduce((accum, classSpells) => accum.concat(classSpells.spells), []).map(spell => ({ name: spell.definition.name, isPrepared: spell.prepared || spell.alwaysPrepared })),
        enumerable: true
      },
      inventory: {
        get: () => {
          return this.#data.inventory.map(inv => ({
            id: inv.definition.id,
            name: inv.definition.name,
            type: inv.definition.filterType,
            quantity: inv.quantity,
            equipped: inv.equipped,
            isAttuned: inv.isAttuned,
            canAttune: inv.definition.canAttune,
            canEquip: inv.definition.canEquip,
            armorClass: inv.definition.armorClass
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

  #isItemActive(item) {
    return (item.canEquip ? item.equipped : true) && (item.canAttune ? item.isAttuned : true)
  }

  #isArmored() {
    return this.#data.inventory.some(inv =>
      inv.definition.filterType === 'Armor' &&
      inv.definition.armorTypeId !== 4 &&
      inv.equipped)
  }
}

const character = new DnDBeyondCharacter(dndBeyondId)

character.initialize()
.then(() => {
  // console.log(character.modifiers)
  fs.writeFileSync('test.json', JSON.stringify(character, null, 2))
})
