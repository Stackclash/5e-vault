module.exports = (tp, spells, path, spaces) => {
    let result = []
    if (typeof spells[0] === 'string') {
        result = tp.user.build_yaml_list(spells.map(item => ({
            name: tp.user.find_file(item.name, path),
            level: item.level,
            isPrepared: item.isPrepared
        })), spaces)
    } else {
        result = spells.reduce((accum, spell) => {
            return accum.push({
                name: spell.name,
                maxSpellSlots: tp.user.build_yaml_list(spell.spellSlots.max, spaces+2),
                availableSpellSlots: tp.user.build_yaml_list(spell.spellSlots.max, spaces+2)
            })
        }, [])
    }

    return result
}