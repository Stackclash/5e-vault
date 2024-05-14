const dndBeyondId = input.id
const dndBeyondUrl = `https://character-service.dndbeyond.com/character/v5/character/${dndBeyondId}`
console.log(dndBeyondUrl)

const data = await request(dndBeyondUrl).json()

console.log(typeof data)