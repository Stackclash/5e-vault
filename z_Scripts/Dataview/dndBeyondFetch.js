const dndBeyondId = input.id
const dndBeyondUrl = `https://character-service.dndbeyond.com/character/v5/character/${dndBeyondId}`
console.log(dndBeyondUrl)

const data = await fetch(dndBeyondUrl, {
    // headers: {
    //     "Access-Control-Allow-Origin": "*"
    // }
    mode: 'no-cors'
})

console.log(data)