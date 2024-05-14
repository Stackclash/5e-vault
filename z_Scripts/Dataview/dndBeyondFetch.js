const dndBeyondId = input.id
const dndBeyondUrl = `https://character-service.dndbeyond.com/character/v5/character/${dndBeyondId}`

const data = await fetch(dndBeyondUrl, {
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

console.log(data)