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

    constructor(id) {
        this.#id = id
    }

    async initialize() {
        const data = JSON.parse(await request(`https://character-service.dndbeyond.com/character/v5/character/${dndBeyondId}`)).data


    }
}

const character = new DnDBeyondCharacter(dndBeyondId)

console.log(character.id)