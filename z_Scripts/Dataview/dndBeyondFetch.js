const fs = require('fs')
const path = require('path')

const dndBeyondId = 105635812


class DnDBeyondCharacter {

    static ABILITY_SCORES = {
        1: 'Strength',
        2: 'Dexerity',
        3: 'Constitution',
        4: 'Intelligence',
        5: 'Wisdom',
        6: 'Charisma'
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

    #id;

    stats = {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
    }

    constructor(id) {
        this.#id = id
    }

    async initialize() {
        const data = JSON.parse(await request(`https://character-service.dndbeyond.com/character/v5/character/${dndBeyondId}`)).data

        this.#buildStats(data)
    }

    #buildStats(data) {
        this.stats.str = this.#buildStat(1, data)
    }

    #buildStat(statId, data) {
        statValue = data.stats.find(s => s.id === statId).value
        statValue += data.bonusStats.find(s => s.id === statId).value
        statValue += data.modifiers.race.find(s => s.type === 'bonus' && s.entityId === statId).value
        statValue += data.modifiers.class.find(s => s.type === 'bonus' && s.entityId === statId).value
        return statValue
    }
}

const character = new DnDBeyondCharacter(dndBeyondId).initialize()

console.log(character)