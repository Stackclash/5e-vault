const fs = require('fs')

const dndBeyondId = input.id
const dndBeyondUrl = `https://character-service.dndbeyond.com/character/v5/character/${dndBeyondId}`

const data = JSON.parse(await request(dndBeyondUrl)).data

fs.writeFileSync('test.json', JSON.stringify(data))
console.log('done')