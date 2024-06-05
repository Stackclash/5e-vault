<%*
const dv = app.plugins.getPlugin("dataview").api

if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    let dndBeyondInfo = await tp.system.prompt("Paste D&D Beyond character url or id here or press Enter to skip.")

    let dndBeyondId
    if (isNaN(dndBeyondInfo)) {
    dndBeyondId = dndBeyondInfo.match(/\d+$/)[0]
    } else {
    dndBeyondId = dndBeyondInfo
    }
    const character = new tp.user.dndBeyondCharacter(dndBeyondId)
    await character.initialize()
}
-%>