module.exports = (tp, spells, path, spaces) => {
    return tp.user.build_yaml_list(spells.map(item => ({
        name: tp.user.find_file(item.name, path),
        level: item.level,
        isPrepared: item.isPrepared
    })), spaces)
}