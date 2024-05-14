const fs = require('fs')
const path = require('path')

const dndBeyondId = input.id
const dndBeyondUrl = `https://character-service.dndbeyond.com/character/v5/character/${dndBeyondId}`

const data = JSON.parse(await request(dndBeyondUrl)).data

fs.writeFileSync(path.join(app.vault.adapter.getBasePath(), 'test.json'), JSON.stringify(data))
console.log('done')